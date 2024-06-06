/**
 * ----------------------------------------------------------------------------------
 * Testimonial.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/testimonial/testimonial.css';
import { Box, Button, CardMedia, Container, Typography } from '@mui/material';
import { CtaButton } from '@/components/ui/cta_button';
import Appear from '@/components/ui/appear';


// ----------------------------------------------------------------------------------

export default function Testimonial() {
  // --------------------------------------------------------------------------

  const headshot = '/img//home/team/founder_3.png';

  return (
    <Container>
      <Appear>
        <Box width={120} height={120} className={styles.img}>
          <CardMedia component='img' image={headshot} width={120} height={120} />        
        </Box>
        <Typography className={styles.title}>Richie McNeill</Typography>
        <Typography className={styles.subtitle}>Director of Hardware/Symbiotic</Typography>

        <Typography className={styles.info}>
          “I’m really excited about eventflo and its vision for transforming the event industry. I'm right behind the project, actively guiding the team to ensure they deliver on their goals. I’m personally backing this initiative and getting my entire network on board. You can bet that my large-scale events will be among the first to benefit from this game changer.”
        </Typography>

        <Box textAlign='center'>
          <CtaButton>
              <Button variant='contained' color='primary'>
                Join Early Access IDO List          
              </Button>
          </CtaButton>
        </Box>
      </Appear>
    </Container>
  );
}
