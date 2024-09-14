import {
  Backdrop,
  Button,
  Grid2 as Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { Cell } from './Cell';
import { useState } from 'react';
import { Header } from './Header';
import { checkWin } from '~/utils';
import { EValue } from '~/type';

type BoardProps = {
  length: number;
};

export const Board = ({ length }: BoardProps) => {
  const [boardValue, setBoardValue] = useState<EValue[][]>(
    [...Array(length)].map(() => [...Array(length)])
  );
  const [next, setNext] = useState<EValue>(EValue.First);
  const [winner, setWinner] = useState<EValue>();
  // const [openReset, toggleReset] = useToggle();

  const handleClick = (rowIndex: number, colIndex: number) => {
    if (boardValue[rowIndex][colIndex] || winner) return;
    boardValue[rowIndex][colIndex] = next;

    setBoardValue(boardValue);

    if (checkWin(boardValue, rowIndex, colIndex, next)) {
      setWinner(next);
      handleOpen();
    }
    setNext((prev) => (prev === EValue.First ? EValue.Second : EValue.First));
  };

  const renderRow = (row: EValue[], rowIndex: number) => {
    return (
      <Grid container key={rowIndex}>
        {row.map((value, colIndex) => {
          return (
            <Cell
              value={value}
              key={colIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          );
        })}
      </Grid>
    );
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleReset = () => {
    handleClose();
    setBoardValue([...Array(length)].map(() => [...Array(length)]));
    setWinner(undefined);
  };
  return (
    <TableContainer
      sx={{
        td: {
          paddingTop: 0,
          paddingLeft: 0,
          border: 'none',
        },
      }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Grid container justifyContent={'space-between'}>
                <Header value={next} winner={winner} />
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {boardValue.map((value, index) => {
                return renderRow(value, index);
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Backdrop open={open} onClick={handleClose}>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </Backdrop>
    </TableContainer>
  );
};
