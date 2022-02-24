import { Page } from "./Page"
import { Type } from "class-transformer"

export class PDFData {
  @Type(() => Page)
  Pages: Page[]
}
