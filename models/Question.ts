export type QuestionCategory = {
  name: string
  themes: QuestionTheme[]
}

export type QuestionTheme = {
  name: string
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
  id: string
  mainTheme: string
  subTheme: string
} & Question
