/**
 * ----------------------------------------------------------------------------------
 * use_cases.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import { CtaButton } from '@/components/ui/cta_button';
import * as styles from '@/module/home/use_cases/use_cases.css';

import { Box, Button, Container, Grid, Typography } from '@mui/material';

// ----------------------------------------------------------------------------------
const list = [
  {
    id: '01',
    title: 'Purchases',
    text: 'Make FloCoin the primary payment method for events on eventflo.',
  },
  {
    id: '02',
    title: 'Governance',
    text: "Gives FloCoin holders a voice in the platform's evolution.",
  },
  {
    id: '03',
    title: 'Staking Rewards',
    text: 'Incentivizes holding FloCoin and supporting the network.',
  },
  {
    id: '04',
    title: 'Premier Events & Merchandise',
    text: 'Access to unique events and limited-edition merchandise purchasable only with FloCoin.',
  },
  {
    id: '05',
    title: 'User Rewards',
    text: 'Incentivize users of FloCoin & event attendees with tokens, discounts and special offers.',
  },
  {
    id: '06',
    title: 'Our Future Expansion',
    text: 'Create future uses as eventflo develops (e.g., decentralized ticket marketplaces, etc.).',
  },
];
// ----------------------------------------------------------------------------------

export default function UseCases() {
  // ----------------------------------------------------------------------------------
  return (
    <Container>
      <Typography variant="h2" className={styles.title}>FloCoin Use Cases</Typography>
      
      <Grid container className={styles.list}>
        {list.map((item) => (
          <Grid item key={item.id}>
            <Typography className={styles.itemId}>{item.id}</Typography>
            <Typography className={styles.itemTitle}>{item.title}</Typography>
            <Typography className={styles.itemText}>{item.text}</Typography>
          </Grid>
        ))}
      </Grid>
      <Box height={72} />

      <Box textAlign='center'>        
        <CtaButton>
          Explore Tokenomics
        </CtaButton>
      </Box>
    </Container>
  );
}
