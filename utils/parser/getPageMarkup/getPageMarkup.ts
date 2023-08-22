import axios from "axios"
import fetch from "node-fetch"

export interface GetPageMarkup {
  (url: string): Promise<string>
}

export const getPageMarkup: GetPageMarkup = async (url) => {
  const response = await fetch(url)
  const markup = await response.text()
  return markup
}
