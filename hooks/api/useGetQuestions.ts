import useSwr from "swr"
import { Categories, QuestionsWithCategories } from "../../models"

export const useGetQuestions = (category: keyof typeof Categories) => {
  return useSwr<QuestionsWithCategories[]>(`/api/questions?category=${category}`)
}
