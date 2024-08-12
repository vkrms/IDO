/**
 * ----------------------------------------------------------------------------------
 * welcome.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/welcome/welcome.css';

import IconVideo from '@/assets/img//home/welcome/video.svg';
import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/material';

// ----------------------------------------------------------------------------------

import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Countdown from '@/components/ui/countdown';
import { CtaButton } from '@/components/ui/cta_button';
import { InfiniteMovingCards as Scroller } from '@/components/ui/infinite-moving-cards';
import Preloader from '@/components/ui/preloader';
import { cn } from '@/lib/utils/cn';
import { useEffect, useRef, useState } from 'react';

// ----------------------------------------------------------------------------------

const founders = ['hardware', 'stereosonic', 'reminisce', 'festivalx', 'tailgate', 'twotribes', 'babylon'];

// ----------------------------------------------------------------------------------

export default function Welcome() {
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  function handleVideoClick() {
    setIsVideoPlaying(!isVideoPlaying);

    const method = isVideoPlaying ? 'pause' : 'play';

    videoRef.current?.[method]();
  }

  // ----------------------------------------------------------------------------------
  return (
    <>
      <BackgroundGradientAnimation
        firstColor='112, 0, 255'
        secondColor='255, 0, 199'
        interactive={false}
        className='fade-up'
        opacity={0.8}
      >
        <Container className={styles.container}>
          <Box height='20vh' />

          <Typography className={styles.title2}>Welcome to Events 3.0</Typography>

          <Typography className={styles.title3}>
            Own the cryptocurrency powering NFT ticketing, data-driven insights, and the future of event management
          </Typography>

          <Typography className={styles.title1} variant='subtitle2'>
            launching in...
          </Typography>

          <Countdown />

          <Box sx={{ textAlign: 'center' }}>
            <CtaButton>
              <Button variant='contained' size='large' className='tuesday'>
                Join Early Access IDO List
              </Button>
            </CtaButton>
          </Box>

          <Box height={88} />

          <Typography className={styles.founderTitle}>
            Built by the <b className={styles.founderBold}>founders</b> of
          </Typography>

          <div className='scroller__container'>
            <Scroller items={founders} direction='left' speed='slow' />
          </div>
        </Container>
      </BackgroundGradientAnimation>

      <Container>
        <Box className={styles.imgBox}>
          {/* <Image src='' alt='video' width={960} height={597}/> */}

          <video
            ref={videoRef}
            width={960}
            height={597}
            poster='/img/home/welcome/video.webp'
            style={{ borderRadius: 16 }}
            controls={isVideoPlaying}
          >
            <source
              src='https://gl71nzm2l7iaribb.public.blob.vercel-storage.com/foobar4-GXrXJ9WMFJb1guJcyGszAeQnZG1916.webm'
              type='video/webm'
            />
          </video>

          <Box className={cn(styles.iconBox, { isVideoPlaying })} onClick={handleVideoClick}>
            <IconVideo className={styles.playBtn} />
          </Box>
        </Box>
      </Container>

      <Preloader isVisible={loading} />
    </>
  );
}
