/**
 * ----------------------------------------------------------------------------------
 * index.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import * as styles from '@/module/home/index.css';

import Footer from '@/module/footer/footer';
import DirectorOfSymbiotic from '@/module/home/director_of_symbiotic/director_of_symbiotic';
import DisruptionGrowth from '@/module/home/disruption_growth/growth';
import Event3 from '@/module/home/event_3/event_3';
import FAQ from '@/module/home/faq/faq';
import FloCoin from '@/module/home/flo_coin/flo_coin';
import IdoDetails from '@/module/home/ido_details/ido_details';
import Founders from '@/module/home/team/team';
import TokenAllocation from '@/module/home/token_allocation/token_allocation';
import Tokenomics from '@/module/home/tokenomics/tokenomics';
import UseCases from '@/module/home/use_cases/use_cases';
import Welcome from '@/module/home/welcome/welcome';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------------------
export default function HomePage() {
  // ----------------------------------------------------------------------------------
  return (
    <Box>
      <Welcome />
      <Box className={styles.boxMargin} />
      <FloCoin />
      <Box className={styles.boxMargin} />
      <Event3 />
      <Box className={styles.boxMargin} />
      <Tokenomics />
      <Box className={styles.boxMargin} />
      <TokenAllocation />
      <Box className={styles.boxMargin} />
      <UseCases />
      <Box className={styles.boxMargin} />
      <IdoDetails />
      <Box className={styles.boxMargin} />
      <Founders />
      <Box className={styles.boxMargin} />
      <DisruptionGrowth />
      <Box className={styles.boxMargin} />
      <DirectorOfSymbiotic />
      <Box className={styles.boxMargin} />
      <FAQ />
      <Box className={styles.boxMargin} />
      <Footer />
    </Box>
  );
}
