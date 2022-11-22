import { Categories } from "../../../models"

export const isCategory = (test: any): test is Categories => {
  return Object.keys(Categories).includes(test)
}
