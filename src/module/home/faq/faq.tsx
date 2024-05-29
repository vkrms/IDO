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

// ----------------------------------------------------------------------------------
const list: FAQItemData[] = [
  {
    title: " What is FloCoin's utility within the eventflo platform?",
    info: '',
    innerList: [],
  },
  {
    title: "How will FloCoin's value be maintained and grow?",
    info: '',
    innerList: [],
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
    title: ' How will eventflo address the volatility often seen in cryptocurrencies?',
    info: '',
    innerList: [],
  },
  {
    title: "What is the roadmap for FloCoin's launch and integration into eventflo?",
    info: '',
    innerList: [],
  },
  {
    title: 'How is eventflo going to challenge other ticket websites that use cryptocurrency?',
    info: '',
    innerList: [],
  },
];
// ----------------------------------------------------------------------------------

export default function FAQ() {
  // ----------------------------------------------------------------------------------

  return (
    <Container>
      <Typography variant="h2" className={styles.title}>FAQ's</Typography>
      <List sx={{ padding: 0 }}>
        {list.map((item) => (
          <FAQItem item={item} key={item.title} />
        ))}
      </List>
    </Container>
  );
}
