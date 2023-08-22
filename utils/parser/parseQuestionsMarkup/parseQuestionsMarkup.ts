import { Question, QuestionCategory } from "../../../models"
import { parse, HTMLElement } from "node-html-parser"

export interface ParseQuestionsMarkup {
  (markup: string): QuestionCategory[]
}

const getQuestionImage = (node: HTMLElement) => {
  return node.getElementsByTagName("img")?.[0]?.attributes["src"]
}

const parseQuestions = (node: HTMLElement): Question[] => {
  const questions = node.querySelectorAll("li")

  return questions
    .map((question) => {
      const $pic = question.querySelector("div.q_pic")

      const title = question.querySelector("div.text")?.text

      if (!title) {
        return null
      }

      const correctAnswer =
        question.querySelector("li.spravnaOdpoved .spravne")?.innerText.replace("Správná odpověď: ", "") ?? ""
      const actuality = question.querySelector("li.datumAktualizace")?.innerText ?? ""

      const variants = question.querySelectorAll("label").map((variant) => ({
        // remove A) B) C) D) E) from the beginning of the variant
        title: fixStr(variant.text).replace(/^[A-E]\)\s*/, ""),
        img: getQuestionImage(variant),
        isCorrect: fixStr(variant.text).startsWith(correctAnswer),
      }))

      return {
        title: fixStr(title),
        img: $pic ? getQuestionImage($pic) : undefined,
        actuality: fixStr(actuality),
        variants,
      }
    })
    .filter((item) => item !== null) as Question[]
}

const fixStr = (str: string) => str.replace(/\s+/g, " ").trim()

export const parseQuestionsMarkup: ParseQuestionsMarkup = (markup) => {
  const root = parse(markup)
  const elements = root.querySelector("#vypisUloh")
  if (!elements) {
    return []
  }

  const result = (elements.childNodes as any as HTMLElement[]).reduce(
    (questions: QuestionCategory[], node: HTMLElement) => {
      if (node.rawTagName === "h2") {
        return [...questions, { name: fixStr(node.textContent), themes: [] }]
      }

      if (node.rawTagName === "h3") {
        const last = questions[questions.length - 1]
        return [
          ...questions.slice(0, -1),
          { ...last, themes: [...last.themes, { name: fixStr(node.innerText), questions: [] }] },
        ]
      }

      if (node.rawTagName === "ol") {
        const questionsList = parseQuestions(node)

        // add to latest element
        const last = questions[questions.length - 1]
        const lastTheme = last.themes[last.themes.length - 1]
        return [
          ...questions.slice(0, -1),
          {
            ...last,
            themes: [
              ...last.themes.slice(0, -1),
              { ...lastTheme, questions: [...lastTheme.questions, ...questionsList] },
            ],
          },
        ]
      }

      return questions
    },
    []
  )

  return result
}
