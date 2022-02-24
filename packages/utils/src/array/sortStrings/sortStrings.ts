import { compare, CompareDir } from '../../string';
import { sort } from '../sort';

export type SortStringDir = CompareDir;

export type SortStringsArg<T extends string> = T;

export type SortStringsArgs<T extends string> = [SortStringsArg<T>[]];

export type SortStringsResult<T extends string> = T[];

export interface SortStrings {
  <T extends string>(
    dir?: SortStringDir,
    locales?: string | string[],
    options?: Intl.CollatorOptions,
  ): (...args: SortStringsArgs<T>) => SortStringsResult<T>;
}

export const sortStrings: SortStrings =
  (...compareArgs) =>
  (arr) =>
    sort(arr, compare(...compareArgs));
