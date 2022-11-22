import { Categories } from "../models"

export const QUESTIONS_URL: Record<keyof typeof Categories, string> = {
  M: "http://www.spspraha.cz/zkousky/otazky.asp?zp=M%202015",
  S: "http://www.spspraha.cz/zkousky/otazky.asp?zp=S%202015",
  C: "http://www.spspraha.cz/zkousky/otazky.asp?zp=C",
}
