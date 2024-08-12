import { baseBgLayout } from '@/components/layout/base_bg';
import type { NextPageWithLayout } from '@/pages/_app';
import { Box } from '@mui/material';
import { Manrope } from 'next/font/google';
import type { ReactElement } from 'react';

/**
 * ----------------------------------------------------------------------------------
 * home layout
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/05/21
 */

export interface Props {
  children: React.ReactElement;
}

// font
const manrope = Manrope({
  subsets: ['latin'],
  // display: 'swap',
});

const HomeLayout: NextPageWithLayout<Props> = ({ children }) => {
  return (
    <Box sx={{ background: '#010314', minHeight: '100vh', position: 'relative' }}>
      <Box className={manrope.className}>{children}</Box>
    </Box>
  );
};

export const getLayout = (page: ReactElement) => baseBgLayout(<HomeLayout>{page}</HomeLayout>);
