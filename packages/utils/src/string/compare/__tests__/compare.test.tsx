import { compare as fnToTest } from '../compare';

const testCases = {
  'regular result check ASC -1': {
    fnResult: fnToTest()('a', 'b'),
    expectedResults: -1,
  },
  'regular result check ASC 0 ': {
    fnResult: fnToTest()('a', 'a'),
    expectedResults: 0,
  },
  'regular result check ASC 1': {
    fnResult: fnToTest()('b', 'a'),
    expectedResults: 1,
  },
  'regular result check DESC -1': {
    fnResult: fnToTest('DESC')('b', 'a'),
    expectedResults: -1,
  },
  'regular result check DESC 0 ': {
    fnResult: fnToTest('DESC')('a', 'a'),
    expectedResults: 0,
  },
  'regular result check DESC 1': {
    fnResult: fnToTest('DESC')('a', 'b'),
    expectedResults: 1,
  },
};

describe('string -> compare test cases', () => {
  for (const [testCaseName, { fnResult, expectedResults }] of Object.entries(testCases)) {
    describe(`for ${testCaseName}`, () => {
      it(`should return correct value`, () => {
        expect(fnResult).toEqual(expectedResults);
      });
    });
  }
});
