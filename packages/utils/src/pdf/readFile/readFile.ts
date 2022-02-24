import PDFParser from "pdf2json"

export type ReadFileArg = string

export type ReadFileArgs = [ReadFileArg]

export type ReadFileResult = void

export interface ReadFile {
  (...args: ReadFileArgs): ReadFileResult
}

export const readFile: ReadFile = (...args) => {
  const parser = new PDFParser()
  const [filePath] = args
  const file = parser.loadPDF(filePath)
  return
}
