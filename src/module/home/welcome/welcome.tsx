/**
 * ----------------------------------------------------------------------------------
 * welcome.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/welcome/welcome.css';

import { Box, Button, CardMedia, Grid, Icon, Typography } from '@mui/material';

import IconVideo from '@/assets/img//home/welcome/video.svg';
import { Container } from '@mui/material';

// ----------------------------------------------------------------------------------

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Reveal } from '@/components/ui/reveal';
import Countdown from '@/components/ui/countdown';
import Image from 'next/image';
import { CtaButton } from '@/components/ui/cta_button';


// ----------------------------------------------------------------------------------

const founderList = [
  'stereosonic',
  'hardware',
  'reminisce',
  'festivalx',
  'tailgate',
  'twotribes',
  'babylon',
]

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
       <Container className={styles.container}>
          <Box height={176} />

          <Reveal>
            <Typography variant='subtitle2' className={styles.title1}>
              Powered by FloCoin
            </Typography>

            <Typography className={styles.title2}>
                Welcome to Event 3.0
            </Typography>

            <Typography className={styles.title3}>
                Own the cryptocurrency powering NFT ticketing, data-driven insights, and the future
                of event management
            </Typography>
          </Reveal>

          {/* new timer layout */}
          <Countdown/>

          <Box sx={{ textAlign: 'center' }}>

            <CtaButton>
              <Button variant='contained' size="large">
                Join Early Access IDO List
              </Button>
            </CtaButton>

          </Box>

          <Box height={48} />

          <Typography className={styles.founderTitle}>
            Built by the <b className={styles.founderBold}>founders</b> of
          </Typography>

          <Grid className={styles.founderList}>
            {founderList.map((id) => (
              <Grid key={id}>
                <Image src={`/img/home/welcome/${id}.webp`} alt={id} height={28} width={180} className={styles.logo}/>
              </Grid>
            ))}
          </Grid>
        </Container>
    </BackgroundGradientAnimation>


    
    <Container>
      <Box className={styles.imgBox}>
        <CardMedia component='img' image='/img/home/welcome/video.webp' />
        <Box className={styles.iconBox}>
          <IconVideo />
        </Box>
      </Box>
    </Container>
  </>
  );
}
