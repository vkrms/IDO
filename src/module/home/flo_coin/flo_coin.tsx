/**
 * ----------------------------------------------------------------------------------
 * flo_coin.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/flo_coin/flo_coin.css';

import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image'

import Appear from '@/components/ui/appear';
import AppearList from '@/components/ui/appear-list';

const Icon: React.FC<{i: number}> = ({i}) => {
  return <Image src={`/img/home/flo_coin/icon_${i}.webp`} alt="Icon" width={72} height={72} />
};

// ----------------------------------------------------------------------------------
const dataList = [
  {
    title: 'Event Ecosystem Currency',
    text: 'Purchase tickets, exclusive merchandise, and access unique events on the eventflo platform using FloCoin.',
  },
  {
    title: 'Rewards & Incentives',
    text: 'Earn rewards through staking, referrals, and by actively participating in the eventflo community and events powered by eventflo.',
  },
  {
    title: 'Enhanced Rewards',
    text: 'Holding FloCoin unlocks greater benefits, including better staking rewards and increased governance power.',
  },
  {
    title: 'Governance',
    text: 'FloCoin holders have a say in platform development, ensuring its evolution aligns with the needs of both organizers and attendees.',
  },
  {
    title: 'Strategic Buybacks',
    text: 'Revenue generated by the platform will be used to buy back FloCoin, supporting its long-term value.',
  },
  {
    title: 'Commercial Activity',
    text: 'Businesses and creators needing to advertise or promote on the platform will drive consistent demand for FloCoin.',
  },
];
// ----------------------------------------------------------------------------------
export default function FloCoin() {
  // ----------------------------------------------------------------------------------
  return (
    <Box className={styles.bg} id='why-flocoin'>

      <div className="relative bob41 bg-pink-500 text-blue-600 mb-2">
        <video autoPlay={true} loop={true} muted className="object-cover bob4">
          <source src="/big_2.webm" type="video/webm" />
        </video>
        <div className="bob4__square"></div>
      </div>

      <Container>

        <Appear>
          <Typography className={styles.title} variant="h2">
            FloCoin: The Future of Events
          </Typography>
          
          <Typography className={styles.subtitle}>
            Why FloCoin? Utility - Rewards - Growth Potential
          </Typography>
          
          <Typography className={styles.text}>
            FloCoin ignites a new era of event experience. Invest in FloCoin, and you're not only fueling innovation in
            event attendance & management, but also have the potential to directly benefit from its success.
          </Typography>
        </Appear>

        <AppearList>
          <Grid container className={styles.list}>
            {dataList.map((data, i) => (
              <Grid key={data.text} flexBasis={352} className="foo-tree">
                
                <Box className={styles.iconWrap}>
                  <Icon i={i + 1} />
                </Box>

                <Typography className={styles.itemTitle}>{data.title}</Typography>
                <Typography className={styles.itemText}>{data.text}</Typography>
              </Grid>
            ))}
          </Grid>
        </AppearList>
      </Container>
    </Box>
  );
}
