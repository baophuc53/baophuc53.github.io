import { Grid2 as Grid, Typography } from '@mui/material';
import { definedValue } from '../constant';
import { EValue } from '../../../type';

type HeaderProps = {
  value: EValue;
  winner?: EValue;
};

export const Header = ({ value, winner = EValue.Empty }: HeaderProps) => {
  const headerValue = definedValue[value];
  const winnerValue = definedValue[winner];
  return (
    <>
      <Grid>
        <Typography component={'span'}>Current move: </Typography>
        <Typography
          component={'span'}
          sx={{ ...headerValue.style, fontWeight: 'bold', fontSize: 25 }}
        >
          {headerValue.value}
        </Typography>
      </Grid>
      <Grid>
        {winner !== EValue.Empty && (
          <>
            <Typography component={'span'}>Winner: </Typography>
            <Typography
              component={'span'}
              sx={{ ...winnerValue.style, fontWeight: 'bold', fontSize: 25 }}
            >
              {winnerValue.value}
            </Typography>
          </>
        )}
      </Grid>
    </>
  );
};
