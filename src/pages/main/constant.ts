import { DefinedValueType, EValue } from "../../type";

export const definedValue: { [k: string]: DefinedValueType } = {
  [EValue.Empty]: {
    style: {
      color: 'transparent',
    },
  },
  [EValue.First]: {
    value: 'x',
    style: {
      color: 'green',
    },
  },
  [EValue.Second]: {
    value: 'o',
    style: {
      color: 'red',
    },
  },
};
