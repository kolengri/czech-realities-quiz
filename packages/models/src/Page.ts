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
      return `${value}) `
    }
    return v
  })

const fixBreaks = (texts: string[]) =>
  texts.map((text, index) => {
    const prev = index > 1 ? texts[index - 1] : null
    const next = index < texts.length ? text[index + 1] : null
    let newText = text
    if (text[0] === " " && next) {
      texts.splice(index + 1, 1)
      newText = `${newText} ${next}`
    }

    if (text[text.length - 1] === " " && prev) {
      texts.splice(index - 1, 1)
      newText = `${prev} ${text}`
    }

    return newText
  })

const fixPointsTexts = (texts: string[]) => texts.map((text, index) => {})

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
    return fixBreaks(fixPoints(result))
  }
}
