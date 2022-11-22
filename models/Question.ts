export type QuestionCategory = {
  theme: string
  themes: QuestionTheme[]
}

export type QuestionTheme = {
  theme: string
  questions: Question[]
}

export type Question = {
  title: string
  img?: string
  actuality?: string
  variants: {
    title: string
    img?: string
    isCorrect: boolean
  }[]
}

export type QuestionsWithCategories = {
  id: number
  mainTheme: string
  subThemes: string
} & Question
