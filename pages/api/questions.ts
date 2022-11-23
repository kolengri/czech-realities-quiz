import type { NextApiRequest, NextApiResponse } from "next"
import { QuestionsWithCategories } from "../../models"
import { getPageMarkup, parseQuestionsMarkup } from "../../parser"
import { QUESTIONS_URL } from "../../config"

import cache from "memory-cache"

export default async function handler(req: NextApiRequest, res: NextApiResponse<QuestionsWithCategories[]>) {
  res.setHeader("Cache-Control", "s-maxage=86400")
  const url = QUESTIONS_URL["REALITIES"]
  let questions: QuestionsWithCategories[] = []

  try {
    questions = cache.get(url)
    if (questions.length === 0) {
      throw new Error("Cache is empty")
    }
  } catch (error) {
    const markup = await getPageMarkup(url)
    const parsed = parseQuestionsMarkup(markup)
    const flat = parsed
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

    questions = flat

    cache.put(url, questions)
  } finally {
    res.status(200).json(questions)
  }
}
