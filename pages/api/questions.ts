import type { NextApiRequest, NextApiResponse } from "next"
import { Question } from "../../models"
import { getPageMarkup, parseQuestionsMarkup } from "../../parser"
import { QUESTIONS_URL } from "../../config"
import { isCategory } from "../../type-guard"

export default async function handler(req: NextApiRequest, res: NextApiResponse<Question[]>) {
  const category = isCategory(req.query.category) ? req.query.category : "S"
  const url = QUESTIONS_URL[category]
  const markup = await getPageMarkup(url)
  const questions = parseQuestionsMarkup(markup)

  res.status(200).json(questions)
}
