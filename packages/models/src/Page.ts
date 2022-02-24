import { cleanData } from "utils/pdf"
import { Text } from "./Text"
import { Type, Exclude, Transform } from "class-transformer"

const fixPoints = (values: string[]) =>
  values.map((v, index) => {
    const value = v.replace(/\s/g, "")
    const prev = index > 1 ? values[index - 1] : null
    const next = index < values.length ? values[index + 1] : null

    if (["A", "B", "C", "D"].includes(value) && next === ")") {
      values.splice(index + 1, 1)
      return `${value})`
    }
    return v
  })

export class Page {
  @Exclude()
  "Width": number
  @Exclude()
  "Height": number
  @Exclude()
  "HLines": []
  @Exclude()
  "VLines": []
  @Exclude()
  "Fills": [
    {
      x: number
      y: number
      w: number
      h: number
      oc: string
    },
    {
      x: number
      y: number
      w: number
      h: number
      oc: string
    }
  ]
  @Exclude()
  "Fields": []
  @Exclude()
  "Boxsets": []

  @Type(() => Text)
  Texts: Text[]

  @Type(() => Text)
  get CleanText() {
    return cleanData(this.Texts)
  }

  get Text() {
    const result = this.CleanText.flatMap((text) => text.R.map((textContent) => textContent.Content))
    return fixPoints(result)
  }
}
