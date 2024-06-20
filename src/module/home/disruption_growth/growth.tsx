/**
 * ----------------------------------------------------------------------------------
 * disruption_growth.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/disruption_growth/growth.css';

import {
  Timeline,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Container, Theme, Typography, useMediaQuery } from '@mui/material';

import { colorPrimary } from '@/style/config/color.css';
import Appear from '@/components/ui/appear';
import { cn } from '@/lib/utils/cn';
import AppearTimeline from '@/components/ui/appear-timeline';

// ----------------------------------------------------------------------------------
const list = [
  {
    duration: 'Q3 2024',
    title: 'Phase 1: December MVP Launch',
    info: `Fraud-proof NFT ticketing, seamless pre-sale registrations, and a robust server-less architecture. This ensures fast, secure ticketing with zero downtime. Ran at our own events after an early beta test with the Prototype.`,
    subtitle: 'Strategic Vision',
    subtext: ': Unveil eventflo’s MVP to a small group of events as the first step in shaking up the industry.',
  },
  {
    duration: 'Q4 2024 - Q1 2025',
    title: 'Phase 2: Post-Launch Expansion',
    info: `Launch our integrated marketing tools (email/SMS), a robust CRM for deep customer insights, and an inbuilt customer support module, while making the product available to event organizers on the waiting list.`,
    subtitle: 'Strategic Vision',
    subtext: ': Position eventflo as the indispensable, all-in-one event management platform.',
  },
  {
    duration: 'Q1 - Q2 2025',
    title: 'Phase 3: Innovation & Expansion',
    info: `Seamlessly integrate FloCoin, into eventflo and the Reminisce Festival. Users can utilize FloCoin for transactions and start earning rewards on our platform.`,
    subtitle: 'Strategic Vision',
    subtext:
      ": Demonstrate FloCoin's real-world applications at a live Festival and show how it can amplify event success for organizers.",
  },
  {
    duration: 'Q4 2024 - Q1 2026',
    title: 'Phase 4: Advanced AI Functionality',
    info: "We'll introduce AI-powered recommendations, offering pricing suggestions and ticket forecasting along with content generation to make planning, setting up and managing events easy.",
    subtitle: 'Strategic Vision',
    subtext: ':  Develop eventflo into the leader in AI-driven event management.',
  },
];
// ----------------------------------------------------------------------------------

export default function DisruptionGrowth() {
  // ----------------------------------------------------------------------------------

  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));

  return (
    <Container id="roadmap" className={styles.section}>
      <Appear>
        <Typography variant="h2" className={styles.title}>
          The Path<br/>
          to Disruption & Growth
        </Typography>

        <Typography className={styles.subtitle}>
          Our roadmap outlines how eventflo & FloCoin will transform the event industry. From fraud-proof ticketing to the
          launch of FloCoin and AI-driven optimization, this strategic plan positions token for rapid growth and success.
        </Typography>
      </Appear>

        <Timeline position={isMobile ? 'left' : 'alternate'} className={styles.timeline}>
          {list.map((item) => (
            <AppearTimeline key={item.duration}>
              <TimelineItem className={cn(styles.timelineItem)}
                sx={{ flexFlow: 'column'}}
              >

                {/* text content */}
                <TimelineOppositeContent className={styles.timelineContent}>
                  <Typography className={styles.timeLimeTitle}>{item.title}</Typography>
                  <Typography className={styles.timeLineInfo}>{item.info}</Typography>
                  <Typography className={styles.timeLineInfo}>
                    <b className={styles.timeLineSubtitle}>{item.subtitle}</b>
                    {item.subtext}
                  </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator className={styles.separator}>
                  <TimelineDot className={styles.dot}/>
                  <TimelineConnector sx={{ background: 'transparent', borderRight: `2px dotted ${colorPrimary}` }} />
                </TimelineSeparator>

                {/* duration */}
                <TimelineOppositeContent
                  className={styles.timelineDuration}
                  sx={{ display: {xs: 'none', md: 'block'}}}
                >
                  {item.duration}
                </TimelineOppositeContent>
              </TimelineItem>
            </AppearTimeline>
          ))}
        </Timeline>

    </Container>
  );
}
