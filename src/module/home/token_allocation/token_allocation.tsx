/**
 * ----------------------------------------------------------------------------------
 * index.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import 'chart.js/auto';

import * as styles from '@/module/home/token_allocation/token_allocation.css';

import { Container, Grid, Typography } from '@mui/material';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

const colorList = ['#32C8C9', '#E26B91', '#AF6AD8', '#608CD5', '#9A098B'];

// ----------------------------------------------------------------------------------

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['Purchase', 'Pre Sales', 'Event Attended', 'Spend'],
  datasets: [
    {
      label: 'Token Allocation',
      data: [40, 25, 15, 8, 12],
      backgroundColor: colorList,
      borderColor: colorList,
      borderWidth: 1,
    },
  ],
};

// ----------------------------------------------------------------------------------
const legendList = [
  {
    title: 'Development & Operations (40%)',
    subtitle:
      'Fuels ongoing platform innovation and expansion, increasing the utility of FloCoin and driving its demand.',
  },
  {
    title: 'Marketing & Partnerships (25%)',
    subtitle:
      'Strategic outreach and partnerships expand the reach of eventflo, attracting organizers and attendees, translating into greater FloCoin adoption.',
  },
  {
    title: 'Team & Advisors (15%)',
    subtitle:
      "Vesting aligns team incentives with long-term success, ensuring continued dedication to the project's growth.",
  },
  {
    title: 'Liquidity (8%)',
    subtitle: 'Ensures sufficient liquidity for market stability, supporting smooth FloCoin transactions.',
  },
];
// ----------------------------------------------------------------------------------

export default function TokenAllocation() {
  // ----------------------------------------------------------------------------------
  return (
    <Container>
      <Typography className={styles.title}>Token Allocation</Typography>
      <Typography className={styles.subtitle}>Here's how we'll emphasize value creation and longevity</Typography>
      <Grid container className={styles.list}>
        <Grid item>
          <Doughnut data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </Grid>
        <Grid item>
          <Grid container className={styles.legendList}>
            {legendList.map((data, index) => (
              <Grid item key={data.title}>
                <Typography style={{ color: colorList[index] }} className={styles.legendTitle}>
                  <span className={styles.line} style={{ background: colorList[index] }} />
                  {data.title}
                </Typography>
                <Typography className={styles.legendText}>{data.subtitle}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
