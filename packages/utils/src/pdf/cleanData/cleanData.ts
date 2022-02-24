import { PageBlock } from "models"

export type CleanDataArg = PageBlock[]

export type CleanDataArgs = [CleanDataArg]

export type CleanDataResult = void

export interface CleanData {
  (...args: CleanDataArgs): CleanDataResult
}

export const cleanData: CleanData = (...args) => {
  const [texts] = args
  return texts.filter((text) => text.R.filter((r) => r.T.length > 0 && !r.T.includes("....")).length > 0)
}
