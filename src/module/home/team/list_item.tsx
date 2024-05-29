/**
 * ----------------------------------------------------------------------------------
 * ido_details.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/team/team_list.css';

import { Grid, IconButton, Typography } from '@mui/material';

import IconArrowDown from '@/assets/img//home/team/arrow_down.svg';
import IconArrowRight from '@/assets/img//home/team/arrow_right.svg';
import { useState } from 'react';

// ----------------------------------------------------------------------------------

export type FounderInfoData = {
  title: string;
  text: string;
};

// ----------------------------------------------------------------------------------
interface PropsType {
  info: FounderInfoData;
}
// ----------------------------------------------------------------------------------

export default function FoundersListItem({ info }: PropsType) {
  const [expState, setExpState] = useState(false);
  // ----------------------------------------------------------------------------------
  return (
    <Grid item key={info.title}>
      <Grid container gap={2} alignItems='center' className={styles.cardItemTitle}>
        <Grid>
          <Typography className={styles.infoTitle}>{info.title}</Typography>
        </Grid>
        <Grid>
          <IconButton
            sx={{ width: 18, height: 18, background: 'transparent', '&:hover': { background: 'transparent' } }}
            onClick={() => setExpState(!expState)}
          >
            {expState ? <IconArrowDown /> : <IconArrowRight />}
          </IconButton>
        </Grid>
      </Grid>
      {expState && <Typography className={styles.infoText}>{info.text}</Typography>}
    </Grid>
  );
}
