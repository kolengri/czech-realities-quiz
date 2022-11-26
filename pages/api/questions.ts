import type { NextApiRequest, NextApiResponse } from "next"
import { QuestionCategory } from "../../models"
import { getPageMarkup, parseQuestionsMarkup } from "../../parser"
import { QUESTIONS_URL } from "../../config"

import cache from "memory-cache"

export default async function handler(req: NextApiRequest, res: NextApiResponse<QuestionCategory[]>) {
  res.setHeader("Cache-Control", "s-maxage=86400")
  const url = QUESTIONS_URL["REALITIES"]
  let questions: QuestionCategory[] = []

  try {
    questions = cache.get(url)
    if (questions.length === 0) {
      throw new Error("Cache is empty")
    }
  } catch (error) {
    const markup = await getPageMarkup(url)
    questions = parseQuestionsMarkup(markup)
    cache.put(url, questions)
  } finally {
    res.status(200).json(questions)
  }
}
