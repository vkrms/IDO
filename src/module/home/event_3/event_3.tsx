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
import AppearList from '@/components/ui/appear-list';

// ----------------------------------------------------------------------------------
const dataList = [
  {
    title: 'NFT Ticketing',
    text: 'Eliminate ticket fraud and guarantee verifiable ownership with our NFT-based tickets. FloCoin ensures every transaction is transparent and secure, revolutionizing ticket resale with our exclusive FloMarket.',
  },
  {
    title: 'Seamless Event Mgt',
    text: 'Organizers can optimize their events with powerful, integrated tools—AI-driven marketing, robust CRM, and smart customer service. eventflo enhances operations, boosting FloCoin usage across the platform.',
  },
  {
    title: 'AI-Driven Insights',
    text: 'Harness the power of AI for tailored recommendations, dynamic pricing, and accurate demand forecasting. eventflo transforms data into actionable strategies, driving successful events and FloCoin adoption.',
  },
  {
    title: 'FloCoin Integration',
    text: 'FloCoin isn’t just a currency; it’s a key to unlocking the full potential of the eventflo platform. Use it for everything from ticket purchases to premium features, maximizing utility for organizers and attendees alike.',
  },
  {
    title: 'FloMarket - Secure Resale',
    text: 'FloMarket protects buyers and sellers from fraudulent tickets, ensuring only genuine transactions. Plus, it guarantees profits go back to the organizers and artists, not scalpers.',
  },
];
// ----------------------------------------------------------------------------------
export default function Event3() {
  // ----------------------------------------------------------------------------------
  return (
    <Box className={styles.section}>
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

          <Box className={styles.imgWrap}>
            <FlareBlue className={cn(styles.flare, '--blue')}/>
            <CardMedia
              component='img'
              image='/img//home/event_3/eventflo_90.webp'
              className={styles.img}
              width={960}
              height={550}
            />          
            <FlarePink className={cn(styles.flare, '--pink')} />
          </Box>
        </Appear>


        <AppearList>
          <Grid className={styles.list}>
            {dataList.map((data) => (
              <Grid key={data.title} className={cn(styles.listItem, "stagger")}>
                <Typography className={styles.itemText}>
                  <b className={styles.itemTitle}>{data.title}</b>
                  
                  {data.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </AppearList>

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
