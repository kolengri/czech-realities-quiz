import { parseQuestionsMarkup as fnToTest } from "../parseQuestionsMarkup"
import { TEST_MARKUP } from "../testData"

const testCases = {
  "regular result check": {
    fnResult: fnToTest(TEST_MARKUP),
    expectedResults: undefined,
  },
}

describe("parser -> parseQuestionsMarkup test cases", () => {
  for (const [testCaseName, { fnResult, expectedResults }] of Object.entries(testCases)) {
    describe(`for ${testCaseName}`, () => {
      it(`should return correct value`, () => {
        expect(fnResult).toEqual(expectedResults)
      })
    })
  }
})
