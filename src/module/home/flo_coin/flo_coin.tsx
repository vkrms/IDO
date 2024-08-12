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
import { cn } from '@/lib/utils/cn';

const Icon: React.FC<{i: number}> = ({i}) => {
  return <Image src={`/img/home/flo_coin/icon_${i}.webp`} alt="Icon" width={72} height={72} />
};

// ----------------------------------------------------------------------------------
const dataList = [
  {
    title: 'Ecosystem Currency',
    text: 'FloCoin is the lifeblood of the eventflo platform, enabling everything from ticket purchases to exclusive items, making it the currency that drives the entire event experience.',
  },
  {
    title: 'Earn as You Engage',
    text: 'Get rewarded for your involvement in the eventflo community. Whether through staking, referrals, or participating in events, your engagement earns you FloCoin, turning your activity into real value.',
  },
  {
    title: 'Unlock Exclusive Perks',
    text: 'Holding onto your FloCoin unlocks a world of enhanced rewards, including superior staking benefits and increased influence in the platform\'s decision-making process.',
  },
  {
    title: 'Shape the Future',
    text: 'With FloCoin, your voice matters. As a holder, you gain the power to influence key decisions, ensuring the platform grows in a direction that benefits both you and the broader community.',
  },
  {
    title: 'Value-Boosting Buybacks',
    text: 'FloCoin’s strategic buyback program uses platform revenue to repurchase tokens, creating scarcity and driving long-term value growth for holders.',
  },
  {
    title: 'Driving Constant Demand',
    text: 'Every transaction within eventflo relies on FloCoin, from ticket sales to marketplace purchases. This continuous use fuels demand and reinforces FloCoin’s essential role in the ecosystem.',
  },
];
// ----------------------------------------------------------------------------------
export default function FloCoin() {
  // ----------------------------------------------------------------------------------
  return (
    <Box className={styles.bg} id='why-flocoin'>

      <div className="relative bg-pink-500 text-blue-600 mb-2">
        <video
          autoPlay={true} loop={true} muted playsInline
          className="object-cover ring-video">
          <source src="/big_2.webm" type="video/webm" media='(min-width: 600px)'/>
        </video>
        <div className="ring-video__square"></div>
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
              <Grid key={data.text} className={cn(styles.item, "stagger")}>
                
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
