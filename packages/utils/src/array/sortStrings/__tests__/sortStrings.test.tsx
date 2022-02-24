import { sortStrings as fnToTest } from '../sortStrings';

const testCases = {
  'regular result check ASC': {
    fnResult: fnToTest()(['c', 'a', 'b']),
    expectedResults: ['a', 'b', 'c'],
  },
  'regular result check DESC': {
    fnResult: fnToTest('DESC')(['c', 'a', 'b']),
    expectedResults: ['c', 'b', 'a'],
  },
};

describe('array -> sortStrings test cases', () => {
  for (const [testCaseName, { fnResult, expectedResults }] of Object.entries(testCases)) {
    describe(`for ${testCaseName}`, () => {
      it(`should return correct value`, () => {
        expect(fnResult).toEqual(expectedResults);
      });
    });
  }
});
