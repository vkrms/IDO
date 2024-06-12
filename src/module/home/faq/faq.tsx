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
    title: "What happens if people buy FloCoin prior to an event at a bubble then decreases in value, diminishing its value at the event?",
    info: "Cryptocurrencies are inherently volatile. For the foreseeable future, we do not encourage using FloCoin as a currency prior to an event due to potential manipulation by traders and the risk of price swings. Instead, FloCoin will be used to reward and gamify the event experience and enhance interactions on the eventflo platform. Users can stake FloCoin to earn rewards and access exclusive features. Additionally, event organizers can use FloCoin for sponsor offerings, creating additional revenue streams. In the future, as digital currencies stabilize, using FloCoin as a currency at events will be a big part of the plans."
  },
  {
    title: "Can eventflo sustain the token buy back?",
    info: "Yes, eventflo's robust network and high ticket sales volume ensure substantial revenue to support token buybacks. With millions of tickets expected to be sold via the platform given our current network, we can effectively buy back tokens, increasing their stability and value."
  },
  {
    title: "Has development started?",
    info: "Yes, development is well underway. The prototype will be ready in August for our launch event, and the MVP will debut at the Reminisce event in December. Regardless of the IDO outcome, our commitment to delivering eventflo remains steadfast."
  },
  {
    title: "What are the vesting schedules for investors of the initial IDO and future rounds?",
    info: "We seek long-term supporters and investors. Our vesting schedule releases 5% of tokens per month to ensure stable value growth and discourage short-term speculation. Team members and advisors are also on the same vesting schedule, aligning their interests with the platform's long-term success."
  },
  {
    title: "What type of ROI can I expect on my investment?",
    info: "We prioritize transparency over hype. While we don't promise astronomical returns, we emphasize that you should only invest what you can afford to lose. eventflo offers a real-world use case, a seasoned team with over 65 years of experience, and a solid distribution network. Our goal is to make FloCoin a top 100 cryptocurrency by market cap, leveraging our unique position to drive adoption and value. The potential for significant growth is substantial, given our comprehensive approach and industry support."
  },
  {
    title: "Have you thought about Blockchain challenges such as network congestion or increasing gas fees?",
    info: "Absolutely. We are meticulously evaluating various blockchain options and implementing fallback systems to ensure smooth operations even during network issues. By building FloCoin on ERC20, we maintain flexibility to switch to different chains if needed, ensuring optimal performance and cost-efficiency."
  },
  {
    title: "Let’s say the internet goes down at an event, how would users be able to scan in?",
    info: "Our system includes robust fallback mechanisms. Native apps used for scanning tickets can store data locally, enabling offline functionality. Once the internet connection is restored, the app syncs with the blockchain, ensuring seamless and reliable operations."
  },
  {
    title: "Have you ran a simulation on your tokenomics?",
    info: "Yes, extensive simulations have been conducted. Even in a worst-case scenario where everyone sold their FloCoin immediately, the tokenomics model shows excellent growth potential over a 10-year period. Our deflationary mechanisms and strategic buybacks further support long-term value appreciation."
  }
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
        <List sx={{ padding: '0 0 56px' }}>
          {list.map((item) => (
            <FAQItem item={item} key={item.title} className='stagger'/>
          ))}
        </List>
      </AppearList>
    </Container>
  );
}
