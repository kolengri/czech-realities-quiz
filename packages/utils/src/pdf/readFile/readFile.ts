import "reflect-metadata"

import PDFParser from "pdf2json"
import { plainToClass } from "class-transformer"
import { PDFData } from "models"

export type ReadFileArg = string

export type ReadFileArgs = [ReadFileArg]

export type ReadFileResult = Promise<PDFData>

export interface ReadFile {
  (...args: ReadFileArgs): ReadFileResult
}

export const readFile: ReadFile = async (...args) => {
  const parser = new PDFParser(this, 1)
  const [filePath] = args
  const data = await new Promise((resolve, reject) => {
    parser.on("pdfParser_dataError", reject)
    parser.on("pdfParser_dataReady", (data: any) => {
      resolve(plainToClass(PDFData, data, {}))
    })
    parser.loadPDF(filePath)
  })

  return data as any
}
