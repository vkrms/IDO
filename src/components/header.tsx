import * as styles from '@/components/header.css';

import { Button, Grid, Typography } from '@mui/material';

import IconLogo from '@/assets/img//logo.svg';
import { LOGIN } from '@/router/name';
import { linkToBtn } from '@/style/common/link.css';
import { colorWhite } from '@/style/config/color.css';
import Link from 'next/link';

/**
 * ----------------------------------------------------------------------------------
 * header.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

// ----------------------------------------------------------------------------------

const dataList = ['Whitepaper', 'Why FloCoin', 'Tokenomics', 'Our Team', 'Roadmap'];

// ----------------------------------------------------------------------------------

export default function LandingHeader() {
  // ----------------------------------------------------------------------------------

  return (
    <header className={styles.header}>
      <Grid container className={styles.headerCont}>
        <Grid item>
          <IconLogo width={176} />
        </Grid>
        <Grid item>
          <Grid className={styles.list}>
            {dataList.map((data) => (
              <Grid key={data} className={styles.item}>
                <Typography className={styles.itemText}>{data}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Link href={LOGIN} className={linkToBtn}>
            <Button
              variant='outlined'
              sx={{ background: 'transparent', borderColor: colorWhite, color: colorWhite }}
              fullWidth
            >
              Early Access
            </Button>
          </Link>
        </Grid>
      </Grid>
    </header>
  );
}
