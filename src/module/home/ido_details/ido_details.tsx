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
import Appear from '@/components/ui/appear';

// ----------------------------------------------------------------------------------

const dataList = [
  { title: 'Launchpad', text: 'TBC' },
  { title: 'Launch Date & Time', text: 'TBC' },
  { title: 'Token Price', text: '$0.25' },
  { title: 'Available Allocation', text: '20%' },
];

// ----------------------------------------------------------------------------------

export default function IdoDetails() {
  // ----------------------------------------------------------------------------------
  return (
    <Container>
      <Appear>
        <Typography className={styles.title} variant="h2">IDO Details</Typography>

        <div>
          <TokenomicsList list={dataList} cate='idoDetails' />
        </div>
      </Appear>
    </Container>
  );
}
