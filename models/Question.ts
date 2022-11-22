export type Question = {
  article: number
  title: string
  img?: string
  variants: {
    title: string
    isCorrect: boolean
  }[]
}
