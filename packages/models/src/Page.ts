import { Text } from "./Text"
import { Type } from "class-transformer"

export class Page {
  "Width": number
  "Height": number
  "HLines": []
  "VLines": []

  @Type(() => Text)
  Texts: Text[]
}
