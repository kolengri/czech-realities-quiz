export type CompareArgA = string;
export type CompareArgB = string;
export type CompareArgs = [CompareArgA, CompareArgB];
export type CompareDir = 'ASC' | 'DESC';

export type CompareResult = -1 | 0 | 1;

export interface Compare {
  (dir?: CompareDir, locales?: string | string[], options?: Intl.CollatorOptions): (
    ...args: CompareArgs
  ) => CompareResult;
}

export const compare: Compare =
  (dir = 'ASC', locales, options) =>
  (a, b) => {
    const [str1, str2] = dir === 'ASC' ? [a, b] : [b, a];

    return str1.localeCompare(str2, locales, options) as CompareResult;
  };
