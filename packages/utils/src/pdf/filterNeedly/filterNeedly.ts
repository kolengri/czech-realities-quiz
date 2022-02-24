export type FilterNeedlyArg = {}

export type FilterNeedlyArgs = [FilterNeedlyArg];

export type FilterNeedlyResult = void;

export interface FilterNeedly {
  (...args: FilterNeedlyArgs): FilterNeedlyResult
}

export const filterNeedly: FilterNeedly = (...args) => {
  return;
};
