import { SxProps } from '@mui/material';

export enum EValue {
  Empty = 'empty',
  First = 'first',
  Second = 'second',
}

export type DefinedValueType = {
  value?: string;
  style?: SxProps;
};
