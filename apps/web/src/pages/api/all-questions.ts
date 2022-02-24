import type { NextApiRequest, NextApiResponse } from "next"
import { readFile, cleanData } from "utils/pdf"
import { resolve } from "path"

type Data = {}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const fileData = await readFile(resolve("./public/pdf/all-questions.pdf"))
  //   const data = fileData.map((r) => cleanData(r.Texts))
  res.status(200).send(JSON.stringify(fileData, null, 2))
}
