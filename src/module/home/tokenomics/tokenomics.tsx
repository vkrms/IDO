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
import Appear from '@/components/ui/appear';

// ----------------------------------------------------------------------------------

const dataList = [
  { title: 'Token Name', text: 'flocoin' },
  { title: 'Ticker Symbol', text: '$FLOCOIN' },
  { title: 'Total Supply', text: '10,000,000' },
  { title: 'Blockchain', text: 'ERC-20' },
];

// ----------------------------------------------------------------------------------

export default function Tokenomics() {
  // ----------------------------------------------------------------------------------
  return (
    <Container id='tokenomics'>
      <Appear>
        <Typography variant="h2" component="h2">Tokenomics</Typography>

        <Grid container className={styles.box}>
          <Typography variant="h3" className={styles.boxLeft}>Own Your Share of the Future</Typography>
                  
          <Grid item>
            <Typography className={styles.boxRight}>
              FloCoin ($FLOCOIN), the lifeblood of eventflo, is an ERC20 token designed to retain value.  Rewarding use within the platform incentivizes active circulation, fostering liquidity and combating potential devaluation.
            </Typography>
          </Grid>
        </Grid>

        <TokenomicsList list={dataList} cate='tokenomics' />
      </Appear>      
    </Container>
  );
}
