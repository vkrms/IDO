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
          “I’ve seen the prototype and the vision for the software, once launched I’m personally putting all my events on it and getting right behind it. I don’t say this often but this is an absolute game changer for the industry.”
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
