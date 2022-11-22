import { isCategory as fnToTest } from "../isCategory"

const testCases = {
  "S regular result check": {
    fnResult: fnToTest("S"),
    expectedResults: true,
  },
  "M regular result check": {
    fnResult: fnToTest("M"),
    expectedResults: true,
  },
  "C regular result check": {
    fnResult: fnToTest("C"),
    expectedResults: true,
  },
  "F regular result check": {
    fnResult: fnToTest("F"),
    expectedResults: false,
  },
}

describe("type-guard -> isCategory test cases", () => {
  for (const [testCaseName, { fnResult, expectedResults }] of Object.entries(testCases)) {
    describe(`for ${testCaseName}`, () => {
      it(`should return correct value`, () => {
        expect(fnResult).toEqual(expectedResults)
      })
    })
  }
})
