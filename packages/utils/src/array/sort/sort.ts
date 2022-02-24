export type SortArgArr<T> = Array<T>;
export type SortArgCompareFn<T> = (a: T, b: T) => number;

export type SortResult<T> = T[];

export interface Sort {
  <T>(arr?: SortArgArr<T>, compareFn?: SortArgCompareFn<T>): SortResult<T>;
}
/**
 * Safe array sort function
 * @param arr
 * @param compareFn
 * @returns Array
 */
export const sort: Sort = (arr, compareFn) => {
  if (!arr) {
    return [];
  }

  if (arr.length === 0) {
    return [];
  }

  return [...arr].sort(compareFn);
};
