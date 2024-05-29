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
import { Box, Container, Grid, Typography, duration, useMediaQuery } from '@mui/material';

import { colorPrimary } from '@/style/config/color.css';
import { TracingBeam } from '@/components/ui/tracing-beam';

// ----------------------------------------------------------------------------------
const list = [
  {
    duration: 'Q3 2024',
    title: 'Phase 1: October Launch Focus',
    info: 'Fraud-proof NFT ticketing, seamless pre-sale registrations, and a robust server-less architecture. This ensures fast, secure ticketing with zero downtime. Ran at our own events after an early beta test.',
    subtitle: 'Strategic Vision',
    subtext: ': Unveil eventflo’s MVP to a small group of events as the first step in shaking up the industry.',
  },
  {
    duration: 'Q4 2024 - Q1 2025',
    title: 'Phase 2: Post-Launch Expansion',
    info: "We'll introduce integrated marketing (email/SMS), a robust CRM for deep customer insights, and an inbuilt customer support module.",
    subtitle: 'Strategic Vision',
    subtext: ': Position eventflo as the indispensable, all-in-one event management platform.',
  },
  {
    duration: 'Q2 - Q3 2025',
    title: 'Phase 3: Innovation & Expansion',
    info: 'Seamlessly integrate FloCoin, into eventflo and the Reminisce Festival. Users can utilize FloCoin for transactions and start earning rewards on our platform.',
    sutitle: 'Strategic Vision',
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

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Container>
      <Typography variant="h2" className={styles.title}>The Path to Disruption & Growth</Typography>
      <Typography className={styles.subtitle}>
        Our roadmap outlines how eventflo & FloCoin will transform the event industry. From fraud-proof ticketing to the
        launch of FloCoin and AI-driven optimization, this strategic plan positions token for rapid growth and success.
      </Typography>

      <TracingBeam>
        <Timeline position={isMobile ? 'left' : 'alternate'} className={styles.timeline}>
          {list.map((item) => (
            <TimelineItem
              key={item.duration}
              sx={{ gap: '72px', justifyContent: 'center', padding: 0 }}
              className={styles.timelineItem}
            >

              {/* text content */}
              <TimelineOppositeContent className={styles.timelineContent}>
                <Typography className={styles.timeLimeTitle}>{item.title}</Typography>
                <Typography className={styles.timeLineInfo}>{item.info}</Typography>
                <Typography className={styles.timeLineInfo} sx={{ marginBottom: '56px !important' }}>
                  <b className={styles.timeLineSubtitle}>{item.subtitle}</b>
                  {item.subtext}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot sx={{ width: 36, height: 36, background: colorPrimary }} />
                <TimelineConnector sx={{ background: 'transparent', borderRight: `2px dashed ${colorPrimary}` }} />
              </TimelineSeparator>

              {/* duration */}
              <TimelineOppositeContent
                className={styles.timelineDuration}
                sx={{ display: {xs: 'none', md: 'block'}}}
              >
                {item.duration}
              </TimelineOppositeContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TracingBeam>

    </Container>
  );
}
