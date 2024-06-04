/**
 * ----------------------------------------------------------------------------------
 * ido_details.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/team/team.css';

import FoundersList, { type TeamData } from '@/module/home/team/team_list';
import { Box, Button, Container, Typography } from '@mui/material';

import img7 from '@/assets/img//home/team/advisor_1.png';
import img8 from '@/assets/img//home/team/advisor_2.png';
import img1 from '@/assets/img//home/team/founder_1.png';
import img2 from '@/assets/img//home/team/founder_2.png';
import img4 from '@/assets/img//home/team/key_member_1.png';
import img5 from '@/assets/img//home/team/key_member_2.png';
import img6 from '@/assets/img//home/team/key_member_3.png';
import { CtaButton } from '@/components/ui/cta_button';

// ----------------------------------------------------------------------------------
const list: TeamData[] = [
  {
    title: 'Our Founders',
    list: [
      {
        img: img1,
        name: 'Mark Middo',
        role: 'Founder',
        info: [
          {
            title: 'Tech Visionary & Crypto Pioneer',
            text: "Mark's a serial entrepreneur with a knack for spotting the next big thing. Way back when Bitcoin was worth pocket change, he built his own mining rig! While power bills cut that adventure short, his passion for tech-driven solutions fuels eventflo's strategic vision.",
          },
          {
            title: 'Festival Experience',
            text: 'As co - founder of Reminisce, one of Melbourne\'s hottest house music festivals, Mark\'s got proven skills for bringing large - scale events to life and growing brands from nothing.',
          },
        ],
      },
      {
        img: img2,
        name: 'Corey Topp',
        role: 'Founder',
        info: [
          {
            title: 'Festival Marketing Maestro',
            text: 'Corey played a pivotal role in scaling Reminisce into a major Australian music festival.He\'s the marketing genius who\'ll drive explosive growth for eventflo.',
          },
          {
            title: 'Event Marketing Ace',
            text: `With a background in digital marketing and his own successful event marketing agency, Corey's got the connections and strategies to put eventflo and FloCoin on the map.`,
          },
        ],
      },
//       {
//         img: img3,
//         name: 'Richie McNeill',
//         role: 'Founder',
//         info: [
//           {
//             title: 'Industry Legend',
//             text: `Richie's a true icon in the Australian dance music scene. His co-founding of the legendary Stereosonic festival (sold for over $100M!) proves his ability to spot and scale disruptive event concepts.`,
//           },
//           {
//             title: 'Unmatched Network',
//             text: `As a co - owner of prominent event companies, Richie's got the connections and influence to open doors throughout the entire Global festival industry.
// Key Team Members`,
//           },
//         ],
//       },
    ],
  },
  {
    title: 'Key Team Members',
    list: [
      {
        img: img4,
        name: 'Shinsuke Ito',
        role: 'Head of Development',
        info: [
          {
            title: 'Blockchain & AI Wizard',
            text: `Shin's not just a skilled software engineer – he specializes in AI, ML, and cloud technologies (AWS Certified). He even built his own NFT marketplace that was successfully acquired! His passion is pushing the boundaries of web experiences, which aligns perfectly with eventflo's vision.`,
          },
        ],
      },
      {
        img: img5,
        name: 'Samir Rafiq',
        role: 'Head of Operations',
        info: [
          {
            title: 'Strategic Mastermind',
            text: `Samir's experience with DHL's digital transformation, working directly with senior management on huge projects, means he's a pro at implementing complex systems and scaling operations – skills that are crucial for eventflo's rapid growth.`,
          },
        ],
      },
      {
        img: img6,
        name: 'Adrian Chan',
        role: 'Head of Blockchain',
        info: [{ title: 'Web3 Pioneer', text: `Adrian's no blockchain newbie – he's been building in the space since the early days.Two successful venture - backed startups under his belt prove his expertise.At eventflo, he's the architect behind our blockchain initiatives, designing bulletproof tokenomics and flawless IDOs – FloCoin's launch is a testament to his skills.` }],
      },
    ],
  },
  {
    title: 'Our Advisors',
    list: [
      {
        img: img7,
        name: 'Rudy Santino',
        role: 'Advisor',
        info: [{ title: 'Startup Scaling Guru', text: `Rudy's got over 20 years of web development expertise under his belt, plus a proven track record with his own startup, Circle.so (valued at over $250M with over 150 staff globally).  He's the technical mastermind guiding eventflo's architecture and mentoring the scale up process.` }],
      },
      {
        img: img8,
        name: 'Andrej Urban',
        role: 'Advisor',
        info: [{ title: 'Hype Generator', text: `Andrej's isn't just a marketer, he's a Web3 growth strategist with a decade of proven results.  His track record speaks for itself – multiple 7-figure raises and a $3 million NFT-ticketing triumph demonstrate his ability to build thriving communities and ignite project momentum. As eventflo's advisor, he's the force behind our strategic marketing, fueling FloCoin's unstoppable rise.` }],
      },
    ],
  },
];
// ----------------------------------------------------------------------------------

export default function Founders() {
  // ----------------------------------------------------------------------------------
  return (
    <Container className={styles.teamContainer}>
      <Typography className={styles.title}>The Team Delivering Event Industry Transformation</Typography>
      <Typography className={styles.subtitle}>Meet The Powerhouse Team Driving FloCoin's Success</Typography>

      <FoundersList list={list} />

      <Box height={80} />
      <Box textAlign='center'>
        <CtaButton>
          <Button variant='contained' size='large'>
            Join Early Access IDO List
          </Button>
        </CtaButton>
      </Box>
    </Container>
  );
}
