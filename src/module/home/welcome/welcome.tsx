/**
 * ----------------------------------------------------------------------------------
 * welcome.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/welcome/welcome.css';

import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';

import ImgVideo from '@/assets/img//home/welcome/video.png';
import IconVideo from '@/assets/img//home/welcome/video.svg';
import img1 from '@/assets/img/home/welcome/img_1.png';
import img2 from '@/assets/img/home/welcome/img_2.png';
import img3 from '@/assets/img/home/welcome/img_3.png';
import img4 from '@/assets/img/home/welcome/img_4.png';
import img5 from '@/assets/img/home/welcome/img_5.png';
import img6 from '@/assets/img/home/welcome/img_6.png';
import img7 from '@/assets/img/home/welcome/img_7.png';
import { EARLY_ACCESS } from '@/router/name';
import { linkToBtn } from '@/style/common/link.css';
import { Container } from '@mui/material';
import { split } from 'lodash';
import Link from 'next/link';

// ----------------------------------------------------------------------------------

const list = [
  { value: '99', key: 'Days' },
  { value: '99', key: 'Hours' },
  { value: '09', key: 'Minutes' },
  { value: '09', key: 'Seconds' },
];

// ----------------------------------------------------------------------------------

const founderList = [
  {
    id: 'founder1',
    img: img1,
  },
  {
    id: 'founder2',
    img: img2,
  },
  {
    id: 'founder3',
    img: img3,
  },
  {
    id: 'founder4',
    img: img4,
  },
  {
    id: 'founder5',
    img: img5,
  },
  {
    id: 'founder6',
    img: img6,
  },
  {
    id: 'founder7',
    img: img7,
  },
];

// ----------------------------------------------------------------------------------

export default function Welcome() {
  // ----------------------------------------------------------------------------------
  return (
    <Box className={styles.bg}>
      <Container>
        <Box height={64} />
        <Typography variant='subtitle2' className={styles.title1}>
          Powered by FloCoin
        </Typography>
        <Typography className={styles.title2}>Welcome to Event 3.0</Typography>
        <Typography className={styles.title3}>
          Own the cryptocurrency powering NFT ticketing, data-driven insights, and the future <br />
          of event management
        </Typography>

        <Grid container className={styles.list}>
          {list.map((item) => (
            <Grid item key={item.key}>
              <Grid container className={styles.itemValueList}>
                {split(item.value, '').map((str: string, index: number) => (
                  <Grid item key={index + str}>
                    <Typography className={styles.itemValue}>{str}</Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography className={styles.itemKey}>{item.key}</Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Link href={EARLY_ACCESS} className={linkToBtn}>
            <Button variant='contained' size='large'>
              Join Early Access IDO List
            </Button>
          </Link>
        </Box>

        <Box height={48} />

        <Typography className={styles.founderTitle}>
          Built by the <b className={styles.founderBold}>founders</b> of
        </Typography>

        <Grid className={styles.founderList}>
          {founderList.map((founder) => (
            <Grid key={founder.id}>
              <CardMedia component='img' image={founder.img.src} className={styles.img} />
            </Grid>
          ))}
        </Grid>

        <Box className={styles.imgBox}>
          <CardMedia component='img' image={ImgVideo.src} />
          <Box className={styles.iconBox}>
            <IconVideo />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
