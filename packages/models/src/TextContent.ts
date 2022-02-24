import { Exclude } from "class-transformer"

export class TextContent {
  get Content() {
    return decodeURI(this.T).normalize()
  }

  T: string // text
  @Exclude()
  S: number
  @Exclude()
  TS: [number, number, number, number]
}
