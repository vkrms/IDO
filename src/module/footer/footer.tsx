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

import ContextProvider from '@/components/provider/context_provider';
import { useContext } from 'react';

const socials = [
  {
    slug: 'facebook',
    href: 'https://facebook.com/eventfloHQ',
    icon: img1.src,
  },
  {
    slug: 'twitter',
    href: 'https://twitter.com/eventfloHQ',
    icon: img2.src,
  },
  {
    slug: 'instagram',
    href: 'https://instagram.com/eventfloHQ',
    icon: img3.src,
  },
  {
    slug: 'discord',
    href: 'https://discord.gg/JRzFxnqBG3',
    icon: img4.src,
  },
  {
    slug: 'telegram',
    href: 'https://t.me/eventfloHQ',
    icon: img5.src,
  },
]
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { cn } from '@/lib/utils/cn';

// ----------------------------------------------------------------------------------

export default function Footer() {
  const context = useContext(ContextProvider);

  function openPrivacy(e: React.MouseEvent) {
    e.preventDefault();
    context.toggle('privacy');    
  }

  function openDisclaimer(e: React.MouseEvent) {
    e.preventDefault();
    context.toggle('disclaimer');    
  }

  // ----------------------------------------------------------------------------------
  return (
    <div className={styles.overflow}>
      <Box className={'footer'}>
        <BackgroundGradientAnimation
            firstColor='112, 0, 255'
            secondColor='255, 0, 199'
            interactive={false}
            className={cn(styles.disco, 'fade-down')}
            opacity={0.8}
        >
          <Container className={styles.container}>
              <Grid container className={styles.box}>
                <Grid item>
                  <Typography className={styles.logo}>
                    <IconLogo width={217} />
                  </Typography>
                  <Typography className={styles.iconList}>
                    {socials.map((item, i) => (
                      <IconButton
                        size='medium'
                        href={item.href}
                        target="_blank"
                        key={item.slug}
                        className="social"
                      >
                        <CardMedia component='img' image={item.icon} width={32} height={32}/>
                      </IconButton>
                    ))}
                  </Typography>

                  <Typography className={styles.text}>
                    Participation in an IDO carries inherent risk. Please review our offering materials and consult with a
                    financial advisor before making any investment decisions. eventflo is a registered Australian company
                    (ACN: 677 042 947).
                  </Typography>
                </Grid>



                <Grid item className={styles.link}>
                  <a className={cn(styles.linkText, 'menu-item')} href="https://eventflo.io/blog" target="_new">
                    Blog
                  </a>
                  {/* <Link href='' className={styles.linkText}>
                    Terms & Conditions
                  </Link> */}
                  <a className={cn(styles.linkText, 'menu-item')} onClick={openPrivacy}>
                    Privacy Policy
                  </a>
                  <a className={cn(styles.linkText, 'menu-item')} onClick={openDisclaimer}>
                    Disclaimer
                  </a>
                </Grid>
              </Grid>
              <Typography className={styles.copyright}>&copy; eventflo Pty Ltd</Typography>
          </Container>
        </BackgroundGradientAnimation>
      </Box>
    </div>
  );
}
