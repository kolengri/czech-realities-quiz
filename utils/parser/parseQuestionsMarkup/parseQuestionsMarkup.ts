import { Question } from "../../../models"
import { parse, HTMLElement } from "node-html-parser"

export interface ParseQuestionsMarkup {
  (markup: string): Question[]
}

const isQuestionHeader = (node: HTMLElement) => {
  return Array.from(node.childNodes).some((n) => n.textContent === "Otázka")
}
const isQuestionVariant = (node: HTMLElement) => {
  return node.textContent.search("odpověď") > 0 || node.textContent.search("Odpověď") > 0
}
const isCorrectQuestionVariant = (node: HTMLElement) => {
  return node.textContent.search("Správná") > 0
}

const getQuestionTitle = (node: HTMLElement) => {
  return Array.from(node.childNodes)[2].textContent
}

const getQuestionImage = (node: HTMLElement) => {
  return node.getElementsByTagName("img")?.[0]?.attributes["src"]
}

export const parseQuestionsMarkup: ParseQuestionsMarkup = (markup) => {
  const root = parse(markup)
  const table = root.querySelectorAll("#telo table tr")
  if (!table) {
    return []
  }

  return table.reduce((questions: Question[], node) => {
    if (isQuestionHeader(node)) {
      const title = getQuestionTitle(node)
      const img = getQuestionImage(node)

      const nextQuestion: Question = {
        article: questions.length + 1,
        title,
        variants: [],
        img,
      }
      return [...questions, nextQuestion]
    }

    if (isQuestionVariant(node)) {
      const latestQuestion = questions[questions.length - 1]
      const title = getQuestionTitle(node)
      const isCorrect = isCorrectQuestionVariant(node)
      latestQuestion.variants.push({
        title,
        isCorrect,
      })

      return questions
    }

    return questions
  }, [])
}
