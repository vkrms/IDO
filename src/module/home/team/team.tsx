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
import img3 from '@/assets/img//home/team/founder_3.png';
import img4 from '@/assets/img//home/team/key_member_1.png';
import img5 from '@/assets/img//home/team/key_member_2.png';
import img6 from '@/assets/img//home/team/key_member_3.png';
import { EARLY_ACCESS } from '@/router/name';
import { linkToBtn } from '@/style/common/link.css';
import Link from 'next/link';

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
            text: 'test text',
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
            text: 'test text',
          },
          {
            title: 'Event Marketing Ace',
            text: 'test text',
          },
        ],
      },
      {
        img: img3,
        name: 'Richie McNeill',
        role: 'Founder',
        info: [
          {
            title: 'Industry Legend',
            text: 'test text',
          },
          {
            title: 'King Connector',
            text: 'test text',
          },
        ],
      },
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
            text: 'test text',
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
            text: '',
          },
        ],
      },
      {
        img: img6,
        name: 'Adrian Chan',
        role: 'Head of Blockchain',
        info: [{ title: 'Web3 Pioneer', text: 'test text' }],
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
        info: [{ title: 'Startup Scaling Guru', text: 'test text' }],
      },
      {
        img: img8,
        name: 'Andrej Urban',
        role: 'Advisor',
        info: [{ title: 'Hype Generator', text: 'test text' }],
      },
    ],
  },
];
// ----------------------------------------------------------------------------------

export default function Founders() {
  // ----------------------------------------------------------------------------------
  return (
    <Container>
      <Typography className={styles.title}>The Team Delivering Event Industry Transformation</Typography>
      <Typography className={styles.subtitle}>Meet The Powerhouse Team Driving FloCoin's Success</Typography>

      <FoundersList list={list} />
      <Box height={80} />
      <Box textAlign='center'>
        <Link href={EARLY_ACCESS} className={linkToBtn}>
          <Button variant='contained' size='large'>
            Join Early Access IDO List
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
