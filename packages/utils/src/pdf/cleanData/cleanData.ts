import { Text } from "models"

export type CleanDataArg = Text[]

export type CleanDataArgs = [CleanDataArg]

export type CleanDataResult = Text[]

export interface CleanData {
  (...args: CleanDataArgs): CleanDataResult
}

export const cleanData: CleanData = (...args) => {
  const [texts] = args

  return texts.filter((text) => text.R.filter((r) => r.T.length > 0 && !r.T.includes("....")).length > 0)
}
