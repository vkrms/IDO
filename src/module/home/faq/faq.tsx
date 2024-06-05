/**
 * ----------------------------------------------------------------------------------
 * faq.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/faq/faq.css';

import FAQItem, { type FAQItemData } from '@/module/home/faq/faq_item';
import { Container, List, Typography } from '@mui/material';
import Appear from '@/components/ui/appear';
import AppearList from '@/components/ui/appear-list';

// ----------------------------------------------------------------------------------
const list: FAQItemData[] = [
  {
    title: "What is FloCoin's utility within the eventflo platform?",
    info: `FloCoin isn't just another cryptocurrency. It's designed with specific use cases for events:`,
    innerList: [
      {
        name: 'Ticketing:',
        text: 'Fraud-proof, transparent transactions on the blockchain.',
      },
      {
        name: 'Rewards:',
        text: 'Organizers can offer exclusive perks and discounts to FloCoin holders.',
      },
      {
        name: 'In-Event Payments:',
        text: 'Seamless food, beverage, and merchandise purchases.',
      },
      {
        name: 'Governance:',
        text: 'Potential for community voting on platform features and event-related decisions.',
      }
    ],
  },

  {
    title: `How will FloCoin's value be maintained and grow?`,
    info: `We're focused on driving real-world adoption of FloCoin within the event industry:`,
    innerList: [
      {
        name: 'Partnerships:',
        text: `Strategic integrations with major festivals, starting with Reminisce.`
      },
      {
        name: 'Transaction Fees:',
        text: `A percentage of transaction fees will be used for buybacks or liquidity provision, supporting price stability.`
      },
      {
        name: 'Utility Expansion:',
        text: `As eventflo's features evolve, FloCoin's use cases will grow, increasing demand.`
      },
    ],
  },

  {
    title: "What is the team's experience in the crypto space?",
    info: 'While our core focus is event management, we have strong blockchain expertise on board:',
    innerList: [
      {
        name: 'Mark Middo',
        text: ': Early Bitcoin enthusiast with a proven understanding of tech trends.',
      },
      {
        name: 'Shinsuke Ito',
        text: ': Blockchain specialist (Solidity) who successfully built and exited an NFT marketplace.',
      },
      {
        name: 'Andrejs Urban',
        text: ': Crypto marketing expert with 6 years of experience and industry connections.',
      },
    ],
  },

  {
    title: 'How will eventflo address the volatility often seen in cryptocurrencies?',
    info: `We understand investor concerns about volatility. Our strategies include:`,
    innerList: [
      { name: `Focus on Utility:`, text: `FloCoin's primary strength lies in its real-world applications within events.` },
      { name: 'Reserve Mechanisms:', text: `Exploring reserve models (e.g., partial backing) to provide a safety net.` },
      { name: 'Transparency:', text: `Clear communication with the community about tokenomics and long-term plans.` },

    ],
  },

  {
    title: "What is the roadmap for FloCoin's launch and integration into eventflo?",
    info: `You can find it in our development roadmap. Key milestones include:`,
    innerList: [
      {
        name: '%Date%',
        text: `FloCoin whitepaper release with detailed tokenomics.`,
      },
      {
        name: '%Date%',
        text: `IDO launch.`,
      },
      {
        name: 'Phase 4',
        text: `Seamless eventflo integration and pilot at Reminisce Festival.`,
      }
    ],
  },

  {
    title: `How does eventflo plan to compete with existing ticketing platforms in the crypto space?`,
    info: `We're not just about crypto ticketing:`,
    innerList: [
      {
        name: 'All-in-one Platform:',
        text: `eventflo offers a complete event management suite, with FloCoin as a powerful component.`,
      },
      {
        name: 'Strong Industry Focus:',
        text: `Our team's deep event expertise sets us apart.`,
      },
      {
        name: 'AI-Driven Insights:',
        text: `eventflo goes beyond transactions, with data tools that optimize events.`,
      }
    ],
  },
];
// ----------------------------------------------------------------------------------

export default function FAQ() {
  // ----------------------------------------------------------------------------------

  return (
    <Container>
      <Appear>
        <Typography variant="h2" className={styles.title}>FAQ's</Typography>
      </Appear>

      <AppearList>
        <List sx={{ padding: 0 }}>
          {list.map((item) => (
            <FAQItem item={item} key={item.title} className='foo-tree'/>
          ))}
        </List>
      </AppearList>
    </Container>
  );
}
