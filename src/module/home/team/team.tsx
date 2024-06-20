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

import { CtaButton } from '@/components/ui/cta_button';
import Appear from '@/components/ui/appear';

// ----------------------------------------------------------------------------------
const list: TeamData[] = [
  {
    title: 'Our Founders',
    list: [
      {
        img: 'founder_1.webp',
        name: 'Mark Middo',
        role: 'Founder',
        info: [
          {
            title: 'Tech Visionary & Crypto Pioneer',
            text: 'Mark is a serial entrepreneur known for his uncanny ability to identify and capitalize on emerging trends. From the early days of Bitcoin, where he built his own mining rig, to the forefront of blockchain innovation with eventflo, Mark’s passion for tech-driven solutions has always been his driving force.',
          },
          {
            title: 'Scale Specialist',
            text: 'With a knack for scaling businesses, Mark has successfully built and grown several ventures, including the standout success of Reminisce, one of Melbourne\'s most beloved house music festivals. His unique blend of technological expertise and business acumen has consistently driven brand growth and event success, making him a key asset to eventflo’s strategic vision.'
          },
        ],
      },
      {
        img: 'founder_2.webp',
        name: 'Corey Topp',
        role: 'Founder',
        info: [
          {
            title: 'Festival Marketing Maestro',
            text: 'Corey is a social media expert and digital advertising wizard, renowned for transforming Reminisce into one of Australia’s favorite festivals. Leveraging his extensive industry connections and innovative strategies, Corey will be leading eventflo\'s marketing efforts with a proven track record of success.'
          },
          {
            title: 'Business Growth Strategist',
            text: 'With a wealth of experience from his successful event marketing agency, Corey has generated over $100M in sales for clients through his cutting-edge campaigns. His expertise will be instrumental in positioning eventflo as the premier platform for event creators, driving the expansion and value of FloCoin.'
          }
        ],
      },
    ],
  },
  {
    title: 'Key Team Members',
    list: [
      {
        img: 'key_member_1.webp',
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
        img: 'key_member_2.webp',
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
        // img: img6,
        img: 'key_member_3.webp',
        name: 'Adrian Chan',
        role: 'Head of Blockchain',
        info: [
          {
            title: 'Web3 Pioneer',
            text: `Adrian's no blockchain newbie – he's been building in the space since the early days.Two successful venture-backed startups under his belt prove his expertise. At eventflo, he's the architect behind our blockchain initiatives, designing bulletproof tokenomics and flawless IDOs – FloCoin's launch is a testament to his skills.`
          }],
      },
    ],
  },
  {
    title: 'Our Advisors',
    list: [
      {
        img: 'founder_3.webp',
        name: 'Richie McNeill',
        role: 'Advisor',
        info: [
          {
            title: 'Industry Legend',
            text: 'Richie\'s a true icon in the Australian dance music scene. His co-founding of the legendary Stereosonic festival (sold for over $100M!) proves his ability to spot and scale disruptive event concepts. As a co-owner of prominent event companies, Richie\'s got the connections and influence to open doors throughout the entire Global festival industry.'
          },
        ],
      },      
      {
        img: 'advisor_1.webp',
        name: 'Rudy Santino',
        role: 'Advisor',
        info: [{ title: 'Startup Scaling Guru',
          text: `Rudy's got over 20 years of web development expertise under his belt, plus a proven track record with his own startup, Circle.so (valued at over $250M with over 150 staff globally).  He's the technical mastermind guiding eventflo's architecture and mentoring the scale up process.` }],
      },
      {
        img: 'advisor_2.webp',
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
    <Container className={styles.teamContainer} id='our-team'>
      <Appear className="px-4">
        <Typography variant="h2" className={styles.title}>The Team Delivering Event Industry Transformation</Typography>
        <Typography className={styles.subtitle}>Meet The Powerhouse Team Driving FloCoin's Success</Typography>
      </Appear>

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
