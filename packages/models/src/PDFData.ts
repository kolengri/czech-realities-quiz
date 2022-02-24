import { Page } from "./Page"
import { Meta } from "./Meta"
import { Type, Exclude } from "class-transformer"

export class PDFData {
  @Exclude()
  Transcoder: string

  @Exclude()
  @Type(() => Meta)
  Meta: Meta

  @Type(() => Page)
  Pages: Page[]

  get TargetQuiz() {
    const data = this.Pages.map((page) => page.Text)
    return data.filter(([page]) => Number(page) >= 7 && Number(page) <= 73)
  }
}
