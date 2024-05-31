/**
 * ----------------------------------------------------------------------------------
 * directorOfSymbiotic.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/director_of_symbiotic/director_of_symbiotic.css';

import { Box, Button, CardMedia, Container, Typography } from '@mui/material';

import img from '@/assets/img//home/director_of_symbiotic/img.png';
import { CtaButton } from '@/components/ui/cta_button';

// ----------------------------------------------------------------------------------

export default function DirectorOfSymbiotic() {
  // --------------------------------------------------------------------------

  return (
    <Container>
      <Box width={120} height={120} className={styles.img}>
        <CardMedia component='img' image={img.src} width={120} height={120} />
      </Box>
      <Typography className={styles.title}>Janette Bishara</Typography>
      <Typography className={styles.subtitle}>Director of Symbiotic </Typography>

      <Typography className={styles.info}>
        “ I’ve seen the prototype and the vision for the software, once launched I’m personally putting all my events on
        it and getting right behind it. An absolute game changer for the industry. “
      </Typography>

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
