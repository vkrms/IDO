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
    <Grid item key={info.title} sx={{ width: '100%' }}>
      <Grid
        container
        alignItems='center'
        sx={{ gap: '4px', width: '100%', display: 'grid', gridTemplateColumns: 'auto 18px', gridGap: '8px' }}
        justifyContent='space-between'
      >
        <Typography className={styles.infoTitle}>{info.title}</Typography>
        <IconButton
          sx={{ width: 18, height: 18, background: 'transparent', '&:hover': { background: 'transparent' } }}
          onClick={() => setExpState(!expState)}
        >
          {expState ? <IconArrowDown /> : <IconArrowRight />}
        </IconButton>
      </Grid>
      {expState && <Typography className={styles.infoText}>{info.text}</Typography>}
    </Grid>
  );
}
