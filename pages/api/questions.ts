import type { NextApiRequest, NextApiResponse } from "next"
import { QuestionsWithCategories } from "../../models"
import { getPageMarkup, parseQuestionsMarkup } from "../../parser"
import { QUESTIONS_URL } from "../../config"
import { isCategory } from "../../type-guard"

export default async function handler(req: NextApiRequest, res: NextApiResponse<QuestionsWithCategories[]>) {
  const category: keyof typeof QUESTIONS_URL = isCategory(req.query.category) ? req.query.category : "REALITIES"
  const url = QUESTIONS_URL[category]
  const markup = await getPageMarkup(url)
  const questions = parseQuestionsMarkup(markup)

  const flatQuestions: QuestionsWithCategories[] = questions
    .flatMap((item) => {
      return item.themes.flatMap((theme) => {
        return theme.questions.map((question) => ({
          ...question,
          id: 0,
          mainTheme: item.theme,
          subThemes: theme.theme,
        }))
      })
    })
    .map((item, index) => ({ ...item, id: index + 1 }))

  res.status(200).json(flatQuestions)
}
