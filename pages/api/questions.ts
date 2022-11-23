import type { NextApiRequest, NextApiResponse } from "next"
import { QuestionsWithCategories } from "../../models"
import { getPageMarkup, parseQuestionsMarkup } from "../../parser"
import { QUESTIONS_URL } from "../../config"
import { isCategory } from "../../type-guard"

import Cache from "file-system-cache"
import { resolve } from "path"

const cache = Cache({
  basePath: resolve("../../.next/.cache"), // Optional. Path where cache files are stored (default).
  ns: "questions", // Optional. A grouping namespace for items.
})

export default async function handler(req: NextApiRequest, res: NextApiResponse<QuestionsWithCategories[]>) {
  const url = QUESTIONS_URL["REALITIES"]
  let questions: QuestionsWithCategories[] = []

  try {
    questions = await cache.get(url)
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

    await cache.set(url, questions)
  } finally {
    res.status(200).json(questions)
  }
}
