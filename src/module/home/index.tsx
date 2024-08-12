/**
 * ----------------------------------------------------------------------------------
 * index.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import FormDialog from '@/components/ui/form-dialog';
import ReadingDialog from '@/components/ui/reading-dialog';
import Footer from '@/module/footer/footer';
import DisruptionGrowth from '@/module/home/disruption_growth/growth';
import Event3 from '@/module/home/event_3/event_3';
import FAQ from '@/module/home/faq/faq';
import FloCoin from '@/module/home/flo_coin/flo_coin';
import IdoDetails from '@/module/home/ido_details/ido_details';
import Founders from '@/module/home/team/team';
import Testimonial from '@/module/home/testimonial/testimonial';
import TokenAllocation from '@/module/home/token_allocation/token_allocation';
import Tokenomics from '@/module/home/tokenomics/tokenomics';
import UseCases from '@/module/home/use_cases/use_cases';
import Welcome from '@/module/home/welcome/welcome';
import { Box, Button } from '@mui/material';

import disclaimer from '@/data/disclaimer.html';
import privacy from '@/data/privacy.html';

function goHome() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

import Arrow from '@/assets/img/arrow-up.svg';
import { cn } from '@/lib/utils/cn';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// ----------------------------------------------------------------------------------
export default function HomePage() {
  const welcomeRef = useRef(null);
  const hideCmdHome = useInView(welcomeRef, {
    amount: 0.25,
  });

  // ----------------------------------------------------------------------------------
  return (
    <Box className='homepage'>
      <FormDialog />

      <div className='hero-grad-overflow' ref={welcomeRef}>
        <Welcome />
      </div>

      <FloCoin />

      <Event3 />

      <Tokenomics />

      <TokenAllocation />

      <UseCases />

      <IdoDetails />

      <Founders />

      <DisruptionGrowth />

      <Testimonial />

      <FAQ />

      <Footer />

      <ReadingDialog text={disclaimer} slug='disclaimer' />
      <ReadingDialog text={privacy} slug='privacy' />

      <Button onClick={goHome} className={cn('cmdHome', { '--visible': !hideCmdHome })}>
        <Arrow />
      </Button>
    </Box>
  );
}
