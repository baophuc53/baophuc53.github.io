import { Button } from '@mui/material';
import { EValue } from '~/type';
import { definedValue } from '../constant';

type CellProps = {
  value?: EValue;
  onClick?: VoidFunction;
  rowIndex?: number;
  colIndex?: number;
};

export const Cell = ({
  value = EValue.Empty,
  onClick,
  rowIndex,
  colIndex,
}: CellProps) => {
  const cellValue = definedValue[value];
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  rowIndex === 0 && colIndex === 0 && console.log('re-render');
  return (
    <Button
      sx={{
        ...cellValue?.style,
        width: 64,
        height: 64,
        borderRadius: '0px',
        border: '1px solid black',
        marginRight: '-1px',
        marginTop: '-1px',
        fontSize: 50,
        fontWeight: 'bold',
        ':focus': {
          outline: 'unset',
        },
        ':hover': {
          borderColor: 'black',
        },
        textTransform: 'unset',
        pointerEvents: cellValue.value ? 'none' : 'auto',
      }}
      onClick={onClick}
    >
      {cellValue?.value}
    </Button>
  );
};
