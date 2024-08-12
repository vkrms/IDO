/**
 * ----------------------------------------------------------------------------------
 * use_cases.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import Appear from '@/components/ui/appear';
import AppearList from '@/components/ui/appear-list';
import * as styles from '@/module/home/use_cases/use_cases.css';
import Icon from '@mui/material/Icon';

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
    text: `Gives FloCoin holders a voice in the platform's evolution & important decisions.`,
  },
  {
    id: '03',
    title: 'Staking Rewards',
    text: 'Incentivizes holding FloCoin and supporting the network.',
  },
  {
    id: '04',
    title: 'Exclusive Offers',
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
    <Container className={styles.section}>
      <Appear>
        <Typography variant='h2' className={styles.title}>
          FloCoin Use Cases
        </Typography>
      </Appear>

      <AppearList>
        <Grid container className={styles.list}>
          {list.map((item) => (
            <Grid item key={item.id} className='stagger'>
              <Icon component='img' src={`/img/${item.id}.svg`} className={styles.itemId} />
              <Typography className={styles.itemTitle}>{item.title}</Typography>
              <Typography className={styles.itemText}>{item.text}</Typography>
            </Grid>
          ))}
        </Grid>
      </AppearList>

      <Box textAlign='center' className={styles.btnWrap}>
        <Button variant='contained' size='large' href='https://online.publuu.com/533650/1195962' target='_new'>
          Explore in-depth Tokenomics
        </Button>
      </Box>
    </Container>
  );
}
