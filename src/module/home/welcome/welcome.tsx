/**
 * ----------------------------------------------------------------------------------
 * welcome.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/welcome/welcome.css';

import { Box, Button, Typography } from '@mui/material';
import IconVideo from '@/assets/img//home/welcome/video.svg';
import { Container } from '@mui/material';

// ----------------------------------------------------------------------------------

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { InfiniteMovingCards as Scroller } from '@/components/ui/infinite-moving-cards';
import Countdown from '@/components/ui/countdown';
import { CtaButton } from '@/components/ui/cta_button';
import Image from 'next/image';
import Appear from '@/components/ui/appear';


// ----------------------------------------------------------------------------------

const founders = [
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
      className='fade-up'
    >
       <Container className={styles.container}>
          <Box height={176} />
          
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

          <div className='scroller__container'>
            <Scroller
              items={founders}
              direction="left"
              speed="slow"
            />
          </div>
        </Container>
    </BackgroundGradientAnimation>

    <Container>
      <Box className={styles.imgBox}>
          <Image src='/img/home/welcome/video.webp' alt='bob' width={960} height={550}/>  

          <Box className={styles.iconBox}>
            <IconVideo />
          </Box>
      </Box>
    </Container>
  </>
  );
}
