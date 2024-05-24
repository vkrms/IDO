/**
 * ----------------------------------------------------------------------------------
 * welcome.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/welcome/welcome.css';

import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';

import IconFounder1 from '@/assets/img//home/welcome/founder_1.svg';
import IconFounder2 from '@/assets/img//home/welcome/founder_2.svg';
import IconFounder3 from '@/assets/img//home/welcome/founder_3.svg';
import IconFounder4 from '@/assets/img//home/welcome/founder_4.svg';
import IconFounder5 from '@/assets/img//home/welcome/founder_5.svg';
import IconFounder6 from '@/assets/img//home/welcome/founder_6.svg';
import IconFounder7 from '@/assets/img//home/welcome/founder_7.svg';
import IconFounder8 from '@/assets/img//home/welcome/founder_8.svg';
import ImgVideo from '@/assets/img//home/welcome/video.png';
import IconVideo from '@/assets/img//home/welcome/video.svg';
import { Container } from '@mui/material';
import { split } from 'lodash';

// ----------------------------------------------------------------------------------

const list = [
  { value: '99', key: 'Days' },
  { value: '99', key: 'Hours' },
  { value: '09', key: 'Minutes' },
  { value: '09', key: 'Seconds' },
];

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";


// ----------------------------------------------------------------------------------

const founderList = [
  {
    id: 'founder1',
    icon: <IconFounder1 />,
  },
  {
    id: 'founder2',
    icon: <IconFounder2 />,
  },
  {
    id: 'founder3',
    icon: <IconFounder3 />,
  },
  {
    id: 'founder4',
    icon: <IconFounder4 />,
  },
  {
    id: 'founder5',
    icon: <IconFounder5 />,
  },
  {
    id: 'founder6',
    icon: <IconFounder6 />,
  },
  {
    id: 'founder7',
    icon: <IconFounder7 />,
  },
  {
    id: 'founder8',
    icon: <IconFounder8 />,
  },
];

// ----------------------------------------------------------------------------------

export default function Welcome() {
  // ----------------------------------------------------------------------------------
  return (
  <>
    <BackgroundGradientAnimation
      firstColor='112, 0, 255'
      secondColor='255, 0, 199'
      interactive={false}
    >
      <div className="bob2">
    <Container>
          <Box height={176} />
          
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
        <Button variant='contained' size='large'>
          Join Early Access IDO List
        </Button>
      </Box>

      <Box height={48} />

      <Typography className={styles.founderTitle}>
        Built by the <b className={styles.founderBold}>founders</b> of
      </Typography>

      <Grid className={styles.founderList}>
        {founderList.map((founder) => (
          <Grid key={founder.id}>{founder.icon}</Grid>
        ))}
      </Grid>
        </Container>
      </div>
    </BackgroundGradientAnimation>



    <Container>
      <Box className={styles.imgBox}>
        <CardMedia component='img' image={ImgVideo.src} />
        <Box className={styles.iconBox}>
          <IconVideo />
        </Box>
      </Box>
    </Container>
  </>
  );
}
