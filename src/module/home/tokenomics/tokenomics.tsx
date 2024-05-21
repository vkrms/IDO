/**
 * ----------------------------------------------------------------------------------
 * tokenomics.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/tokenomics/tokenomics.css';

import { Container, Grid, Typography } from '@mui/material';

import TokenomicsList from '@/module/home/tokenomics/list';

// ----------------------------------------------------------------------------------

const dataList = [
  { title: 'Token Name', text: 'flocoin' },
  { title: 'Ticker Symbol', text: '$FLOCOIN' },
  { title: 'Total Supply', text: '70,000,000' },
  { title: 'Blockchain', text: 'ERC-20' },
];

// ----------------------------------------------------------------------------------

export default function Tokenomics() {
  // ----------------------------------------------------------------------------------
  return (
    <Container>
      <Typography className={styles.title}>Tokenomics</Typography>
      <Grid container className={styles.box}>
        <Grid item>
          <Typography className={styles.boxLeft}>Own Your Share of the Future</Typography>
        </Grid>
        <Grid item>
          <Typography className={styles.boxRight}>
            FloCoin ignites a new era of event experience. Invest in FloCoin, and you're not only fueling innovation in
            event management, but also have the potential to directly benefit from its success.
          </Typography>
        </Grid>
      </Grid>

      <TokenomicsList list={dataList} cate='tokenomics' />
    </Container>
  );
}
