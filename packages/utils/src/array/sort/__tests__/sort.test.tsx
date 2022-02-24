import { sort as fnToTest } from '../sort';

const testCases = {
  'regular result check': {
    fnResult: fnToTest(['c', 'a', 'b']),
    expectedResults: ['a', 'b', 'c'],
  },
  'object result check': {
    fnResult: fnToTest(
      [
        {
          test: 'c',
        },
        {
          test: 'a',
        },
        {
          test: 'b',
        },
      ],
      (a, b) => a.test.localeCompare(b.test),
    ),
    expectedResults: [
      {
        test: 'a',
      },
      {
        test: 'b',
      },
      {
        test: 'c',
      },
    ],
  },
};

describe('array -> sort test cases', () => {
  for (const [testCaseName, { fnResult, expectedResults }] of Object.entries(testCases)) {
    describe(`for ${testCaseName}`, () => {
      it(`should return correct value`, () => {
        expect(fnResult).toEqual(expectedResults);
      });
    });
  }
});
