import axios from "axios"

export interface GetPageMarkup {
  (url: string): Promise<string>
}

export const getPageMarkup: GetPageMarkup = async (url) => {
  const { data } = await axios.get<string>(url)
  return data
}
