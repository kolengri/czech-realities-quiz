import useSwr from "swr"
import { Question } from "../../models"

export const useGetQuestions = (category: "S" | "M" | "C" = "M") => {
  return useSwr<Question[]>(`/api/questions?category=${category}`)
}
