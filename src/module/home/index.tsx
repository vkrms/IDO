/**
 * ----------------------------------------------------------------------------------
 * index.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/4/11
 */

import FormDialog from '@/components/ui/form-dialog';
import Footer from '@/module/footer/footer';
import Testimonial from '@/module/home/testimonial/testimonial';
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
    <Box className="overflow-hidden">
      <FormDialog />
      <Welcome />
      <Box height={120} />
      <FloCoin />
      <Box height={120} />
      <Event3 />
      <Box height={120} />
      <Tokenomics />
      <Box height={120} />
      <TokenAllocation />
      <Box height={120} />
      <UseCases />
      <Box height={120} />
      <IdoDetails />
      <Box height={120} />
      <Founders />
      <Box height={120} />
      <DisruptionGrowth />
      <Box height={96} />
      <Testimonial />
      <Box height={120} />
      <FAQ />
      <Box height={120} />      
      <Footer />
    </Box>
  );
}
