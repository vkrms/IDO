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

import Appear from '@/components/ui/appear';
import { CtaButton } from '@/components/ui/cta_button';

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
            title: 'Tech Visionary',
            text: 'Mark is a serial entrepreneur known for his uncanny ability to identify and capitalize on emerging trends. From the early days of Bitcoin, where he built his own mining rig, to the forefront of blockchain innovation with eventflo, Mark’s passion for tech-driven solutions has always been his driving force.',
          },
          {
            title: 'Brand Builder',
            text: 'With a knack for scaling businesses, Mark has successfully built and grown several ventures, including the standout success of Reminisce, one of Australia’s most beloved house music festivals.His unique blend of technological expertise and business acumen has consistently driven brand growth and event success, making him a key asset to eventflo’s strategic vision.',
          },
        ],
      },
      {
        img: 'founder_2.webp',
        name: 'Corey Topp',
        role: 'Founder',
        info: [
          {
            title: 'Marketing Maestro',
            text: "Corey is a social media expert and digital advertising weapon, renowned for transforming Reminisce into one of Australia’s favorite festivals. Leveraging his extensive industry connections and innovative strategies, Corey will be leading eventflo's marketing efforts with a proven track record of success.",
          },
          {
            title: 'Growth Strategist',
            text: 'With a wealth of experience from his successful event marketing agency, Corey has generated over $100M in sales for clients through his cutting-edge campaigns. His expertise will be instrumental in positioning eventflo as the premier platform for event creators, driving the expansion and value of FloCoin.',
          },
        ],
      },
    ],
  },
  {
    title: 'Key Team Members',
    list: [
      {
        // img: img6,
        img: 'key_member_3.webp',
        name: 'Adrian Chan',
        role: 'Head of Blockchain',
        info: [
          {
            title: 'Web3 Pioneer',
            text: `Adrian's no blockchain newbie – he's been building in the space since the early days. Two successful venture-backed startups under his belt prove his expertise. At eventflo, he's the architect behind our blockchain initiatives, designing bulletproof tokenomics and flawless IDOs – FloCoin's launch is a testament to his skills.`,
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
        img: 'shin.webp',
        name: 'Shinsuke Ito',
        role: 'Head of Development',
        info: [
          {
            title: 'Gun Developer',
            text: `Shin's not just a skilled software engineer – he specializes in Blockchain, AI, and cloud technologies. He even built his own NFT marketplace that was successfully acquired! His passion is pushing the boundaries of web experiences, which aligns perfectly with eventflo's vision`,
          },
        ],
      },
      {
        img: 'alejandro.webp',
        name: 'Alejandro Chavarria',
        role: 'Social Media Manager',
        info: [
          {
            title: 'Creative Strategist',
            text: "Alejandro is a creative powerhouse with expertise in experiential design, web3, marketing, and photography. Alejandro has developed innovative strategies for large brands and startups, building thriving communities around products and services in particular web3 projects. As eventflo's creative strategist, he leverages his extensive skills to amplify the brand's voice and create unforgettable experiences.",
          },
        ],
      },
      {
        img: 'raine.webp',
        name: 'Raine Laluna',
        role: 'Marketing Assistant',
        info: [
          {
            title: 'Tactical Queen',
            text: "Web3 specialist with a dynamic background in marketing, and community building. Co-founder of Web3 Cebu and FilipinasNFT, Raine is regarded as one of the most influential women in Crypto in the Philippines. With a proven track record of establishing key partnerships and driving growth, Raine's extensive connections in the crypto space enable her to open doors and foster valuable collaborations in Asia.",
          },
        ],
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
            text: "Richie's a true icon in the Australian dance music scene.His co- founding of the legendary Stereosonic festival(sold for over $75M!) proves his ability to spot and scale disruptive event concepts.As a co- owner of prominent event companies, Richie's got the connections and influence to open doors throughout the entire Global festival industry.",
          },
        ],
      },
      {
        img: 'rudy.webp',
        name: 'Rudy Santino',
        role: 'Advisor',
        info: [
          {
            title: 'Startup Scaling Guru',
            text: `Rudy's got over 20 years of web development expertise under his belt, plus a proven track record with his own startup, Circle.so (valued at over $250M with over 150 staff globally).  He's the technical mastermind guiding eventflo's architecture and mentoring the scale up process.`,
          },
        ],
      },
      // {
      //   img: 'advisor_2.webp',
      //   name: 'Andrej Urban',
      //   role: 'Advisor',
      //   info: [{ title: 'Hype Generator', text: `Andrej's isn't just a marketer, he's a Web3 growth strategist with a decade of proven results.  His track record speaks for itself – multiple 7-figure raises and a $3 million NFT-ticketing triumph demonstrate his ability to build thriving communities and ignite project momentum. As eventflo's advisor, he's the force behind our strategic marketing, fueling FloCoin's unstoppable rise.` }],
      // },
      {
        img: 'matias.png',
        name: 'Matias Jeldrez',
        role: 'Advisor',
        info: [
          {
            title: 'Hype Generator',
            text: "Matias isn't just a marketer, he's a Web3 growth hacker with close to two decades of proven results. His track record speaks for itself – multiple 7-figure raises and deep connections in the crypto space demonstrate his ability to build thriving communities, establish key JV partnerships, and ignite project momentum. As eventflo's advisor, he's the force behind our strategic marketing, fueling FloCoin's unstoppable rise.",
          },
        ],
      },
      {
        img: 'chris.png',
        name: 'Chris Elias',
        role: 'Advisor',
        info: [
          {
            title: 'Regulatory Navigator',
            text: 'Chris is the ultimate Web3 legal expert, renowned for his unparalleled ability to navigate the intricate compliance landscape of the crypto world. With experience in over 100 web3 and fintech startups, including NFT projects, crypto exchanges, DeFi platforms, and token raises, his expertise is unmatched. As our legal adviser, he ensures we stay ahead of regulatory standards, positioning us for seamless and compliant growth.',
          },
        ],
      },
    ],
  },
];
// ----------------------------------------------------------------------------------

export default function Founders() {
  // ----------------------------------------------------------------------------------
  return (
    <Container className={styles.teamContainer} id='our-team'>
      <Appear className='px-4'>
        <Typography variant='h2' className={styles.title}>
          The Team Delivering Event Industry Transformation
        </Typography>
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
