/**
 * ----------------------------------------------------------------------------------
 * ido_details.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/tokenomics/tokenomics.css';

import { Container, Typography } from '@mui/material';

import TokenomicsList from '@/module/home/tokenomics/list';

// ----------------------------------------------------------------------------------

const dataList = [
  { title: 'Launchpad', text: 'TBC' },
  { title: 'Launch Date & Time', text: 'TBC' },
  { title: 'Token Price', text: '$0.05' },
  { title: 'Available Allocation', text: '8%' },
];

// ----------------------------------------------------------------------------------

export default function IdoDetails() {
  // ----------------------------------------------------------------------------------
  return (
    <Container>
      <Typography className={styles.title}>IDO Details</Typography>

      <TokenomicsList list={dataList} cate='idoDetails' />
    </Container>
  );
}
