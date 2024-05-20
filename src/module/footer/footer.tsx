/**
 * ----------------------------------------------------------------------------------
 * footer.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/footer/footer.css';

import { Box, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';

import img1 from '@/assets/img//footer/icon_1.png';
import img2 from '@/assets/img//footer/icon_2.png';
import img3 from '@/assets/img//footer/icon_3.png';
import img4 from '@/assets/img//footer/icon_4.png';
import img5 from '@/assets/img//footer/icon_5.png';
import IconLogo from '@/assets/img//logo.svg';
import Link from 'next/link';

// ----------------------------------------------------------------------------------

export default function Footer() {
  // ----------------------------------------------------------------------------------
  return (
    <Box className={styles.footer}>
      <Container>
        <Grid container className={styles.box}>
          <Grid item>
            <Typography className={styles.logo}>
              <IconLogo width={217} />
            </Typography>
            <Typography className={styles.iconList}>
              <IconButton size='medium'>
                <CardMedia component='img' image={img1.src} width='32' />
              </IconButton>
              <IconButton size='medium'>
                <CardMedia component='img' image={img2.src} width={32} />
              </IconButton>
              <IconButton size='medium'>
                <CardMedia component='img' image={img3.src} width={32} />
              </IconButton>
              <IconButton size='medium'>
                <CardMedia component='img' image={img4.src} width={32} />
              </IconButton>
              <IconButton size='medium'>
                <CardMedia component='img' image={img5.src} width={32} />
              </IconButton>
            </Typography>
            <Typography className={styles.text}>
              Participation in an IDO carries inherent risk. Please review our offering materials and consult with a
              financial advisor before making any investment decisions. eventflo is an registered Australian company
              (ACN: 677 042 947).
            </Typography>
          </Grid>
          <Grid item className={styles.link}>
            <Link href='' className={styles.linkText}>
              Terms & Conditions
            </Link>
            <Link href='' className={styles.linkText}>
              Privacy Policy
            </Link>
            <Link href='' className={styles.linkText}>
              Disclaimer
            </Link>
          </Grid>
        </Grid>
        <Typography className={styles.copyright}>&copy; eventflo Pty Ltd</Typography>
      </Container>
    </Box>
  );
}
