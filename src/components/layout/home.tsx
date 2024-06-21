import LandingHeader from '@/components/header';
import { getBasicLayout } from '@/components/layout/base';
import type { NextPageWithLayout } from '@/pages/_app';
import { Box } from '@mui/material';
import type { ReactElement } from 'react';
import { Manrope } from 'next/font/google'

/**
 * ----------------------------------------------------------------------------------
 * landing layout
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/01/15
 */

export interface Props {
  children: React.ReactElement;
}


// font
const manrope = Manrope({
  subsets: ['latin'],
  // display: 'swap',
})

const LandingLayout: NextPageWithLayout<Props> = ({ children }) => {
  return (
    <Box sx={{ background: '#010314', minHeight: '100vh', position: 'relative' }}>
      <Box className={manrope.className}>
        <LandingHeader />
        {children}
      </Box>
    </Box>
  );
};

export const getLayout = (page: ReactElement) => getBasicLayout(<LandingLayout>{page}</LandingLayout>);
