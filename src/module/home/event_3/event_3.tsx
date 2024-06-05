/**
 * ----------------------------------------------------------------------------------
 * event_3.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/event_3/event_3.css';

import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';

import { CtaButton } from '@/components/ui/cta_button';
import FlareBlue from '@/assets/svg/flare_blue.svg'
import FlarePink from '@/assets/svg/flare_pink.svg'
import { cn } from '@/lib/utils/cn';
import Appear from '@/components/ui/appear';

// ----------------------------------------------------------------------------------
const dataList = [
  {
    title: 'NFT Ticketing',
    text: ' Eradicate ticket fraud and ensure verifiable ticket ownership by establishing a secure resale marketplace for transactions using FloCoin. We can ensure transparency and authenticity in every transaction.',
  },
  {
    title: 'FloCoin Integration',
    text: 'Seamlessly utilize FloCoin for ticket purchases and unlock its full benefits within the platform, showcasing its everyday utility for both organizers and attendees.',
  },
  {
    title: 'Seamless Operations',
    text: ' Streamline event management with integrated marketing tools, a robust CRM and customer service management powered by AI, increasing the number of events successfully powered by the platform and, in turn, FloCoin usage.',
  },
  {
    title: 'Data-Driven Insights',
    text: 'Empower organizers with AI-powered recommendations, pricing suggestions, and demand forecasting. This translates into more successful events using FloCoin as the preferred payment method.',
  },
  {
    title: 'The Road Ahead',
    text: "Expand FloCoin's value with features like decentralized event planning, fan-to-artist marketplaces, and exclusive event access – all fueled by the eventflo platform and FloCoin.",
  },
];
// ----------------------------------------------------------------------------------
export default function Event3() {
  // ----------------------------------------------------------------------------------
  return (
    <Box>
      <Container>

        <Appear>
          <Typography className={styles.title} variant="h2" textAlign='left'>
            The Technology Powering Event 3.0
          </Typography>

          <Typography className={styles.subtitle}>
            eventflo is the innovative platform propelling events into the Web 3.0 era. Our all-in-one solution empowers
            organizers, enhances the attendee experience, and drives adoption of FloCoin, generating consistent demand and
            contributing to its growth potential.
          </Typography>
        </Appear>

        <Box className={styles.imgWrap}>
          <FlareBlue className={cn(styles.flare, '--blue')}/>
          <CardMedia component='img' image='/img//home/event_3/eventflo.webp' className={styles.img} />          
          <FlarePink className={cn(styles.flare, '--pink')} />
        </Box>

        <Grid className={styles.list}>
          {dataList.map((data) => (
            <Grid key={data.title}>
              <Typography className={styles.itemText}>
                <b className={styles.itemTitle}>{data.title}</b>
                
                {data.text}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box height={48} />
        <Box textAlign='center'>
          <CtaButton>
            <Button variant='contained'>Join Early Access IDO List</Button>
          </CtaButton>
        </Box>
      </Container>
    </Box>
  );
}
