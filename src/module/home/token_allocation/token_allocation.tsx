/**
 * ----------------------------------------------------------------------------------
 * index.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/token_allocation/token_allocation.css';

import { Container, Grid, Typography } from '@mui/material';

import Appear from '@/components/ui/appear';
import AppearList from '@/components/ui/appear-list';
import Image from 'next/image';

const colorList = ['#32C8C9', '#E26B91', '#AF6AD8', '#608CD5', '#9A098B'];

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------
const legendList = [
  {
    title: 'Initial IDO (20%)',
    subtitle:
      'Fuels ongoing platform innovation and expansion, increasing the utility of FloCoin and driving its demand.',
  },
  {
    title: 'Future Investment Rounds (55%)',
    subtitle:
      'Our next phase of investment includes running an IEO and being listed on major exchanges to further fuel the growth of FloCoin.',
  },
  {
    title: 'Team & Advisors (15%)',
    subtitle:
      'Vesting aligns team incentives with long-term success, ensuring continued dedication to the project\'s growth.',
  },
  {
    title: 'Liquidity (10%)',
    subtitle:
      'Ensures sufficient liquidity for market stability, supporting smooth FloCoin transactions with 50% of the initial IDO locked straight into the liquidity pool.',
  },
];
// ----------------------------------------------------------------------------------



export default function TokenAllocation() { 
  // ----------------------------------------------------------------------------------
  return (
    <Container className={styles.section}>
      <Appear>
        <Typography id="chart" variant="h2" className={styles.title}>Token Allocation</Typography>
      </Appear>

      <Typography className={styles.subtitle}>Here's how we'll emphasize value creation and longevity</Typography>

      <Grid container className={styles.list}>
        <Grid item className={styles.donutWrap}>

          <video
            autoPlay={true}
            loop={true}
            muted
            className={styles.xsVideo}
            playsInline
          >
            <source src="/xs.webm" type="video/webm" />
          </video>

          <Image
            src="/img/home/token_allocation/chart.webp"
            className="donut-img"
            alt="allocation chart"
            width={384}
            height={384}
          />
        </Grid>

        <Grid item className={styles.legendWrap}>
          <AppearList>
            <Grid container className={styles.legendList}>
              {legendList.map((data, index) => (
                <Grid item key={data.title} className="stagger">
                  <Typography style={{ color: colorList[index] }} className={styles.legendTitle}>
                    <span className={styles.line} style={{ background: colorList[index] }} />
                    {data.title}
                  </Typography>
                  <Typography className={styles.legendText}>{data.subtitle}</Typography>
                </Grid>
              ))}
            </Grid>
          </AppearList>  
        </Grid>
      </Grid>
    </Container>
  );
}
