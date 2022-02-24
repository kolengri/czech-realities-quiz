import { Type, Exclude } from "class-transformer"
import { TextContent } from "./TextContent"
export class Text {
  @Exclude()
  x: number
  // @Exclude()
  y: number
  // @Exclude()
  w: number
  // @Exclude()
  sw: number
  // @Exclude()
  A: string

  // @Exclude()
  clr: string

  @Type(() => TextContent)
  R: TextContent[]
}
