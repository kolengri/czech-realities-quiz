import { Type } from "class-transformer"
import { PageBlockContent } from "./PageBlockContent"

export class Text {
  x: number
  y: number
  w: number
  sw: number
  A: string

  @Type(() => PageBlockContent)
  R: PageBlockContent[]
}
