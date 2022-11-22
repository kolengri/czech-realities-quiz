---
to: utils/<%= subfolder %>/<%= name %>/__tests__/<%= name %>.test.ts
---

import { <%= name %> as fnToTest } from '../<%= name %>';

const testCases = {
  'regular result check': {
    fnResult: fnToTest({}),
    expectedResults: undefined,
  },
};

describe('<%= subfolder %> -> <%= name %> test cases', () => {
  for (const [testCaseName, { fnResult, expectedResults }] of Object.entries(testCases)) {
    describe(`for ${testCaseName}`, () => {
      it(`should return correct value`, () => {
        expect(fnResult).toEqual(expectedResults);
      });
    });
  }
});
