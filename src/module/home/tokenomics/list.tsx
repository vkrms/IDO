/**
 * ----------------------------------------------------------------------------------
 * tokenomics.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/tokenomics/list.css';

import { Box, Grid, Typography } from '@mui/material';

import IconBgLeftTop from '@/assets/img//home/tokenomics/bg_left_top.svg';
import IconBgLeftBottom from '@/assets/img//home/tokenomics/bg_right_bottom.svg';
import IconBgRightBottom from '@/assets/img//home/tokenomics/bg_right_bottom.svg';
import IconBgRightTop from '@/assets/img//home/tokenomics/bg_right_top.svg';

// ----------------------------------------------------------------------------------

export type TokenomicsData = {
  title: string;
  text: string;
};
// ----------------------------------------------------------------------------------

interface PropsType {
  cate: 'tokenomics' | 'idoDetails';
  list: TokenomicsData[];
}

// ----------------------------------------------------------------------------------

export default function TokenomicsList({ list, cate }: PropsType) {
  // ----------------------------------------------------------------------------------
  return (
    <Box className={styles.infoBox}>
      {cate === 'tokenomics' ? (
        <IconBgLeftTop className={styles.bgPosVar.leftTop} />
      ) : (
        <IconBgLeftBottom className={styles.bgPosVar.leftBottom} />
      )}
      <Grid container className={styles.list}>
        {list.map((data) => (
          <Grid item key={data.title} className={styles.item}>
            <Typography className={styles.itemTitle}>{data.title}</Typography>
            <Typography className={styles.itemText}>{data.text}</Typography>
          </Grid>
        ))}
      </Grid>
      {cate === 'tokenomics' ? (
        <IconBgRightBottom className={styles.bgPosVar.rightBottom} />
      ) : (
        <IconBgRightTop className={styles.bgPosVar.rightTop} />
      )}
    </Box>
  );
}
