import LandingHeader from '@/components/header';
import { getBasicLayout } from '@/components/layout/base';
import { bg } from '@/module/home/welcome/welcome.css';
import type { NextPageWithLayout } from '@/pages/_app';
import { Box } from '@mui/material';
import type { ReactElement } from 'react';

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

const LandingLayout: NextPageWithLayout<Props> = ({ children }) => {
  return (
    <Box sx={{ background: '#010314', minHeight: '100vh', position: 'relative' }}>
      <Box className={bg}>
        <LandingHeader />

        {children}
      </Box>
    </Box>
  );
};

export const getLayout = (page: ReactElement) => getBasicLayout(<LandingLayout>{page}</LandingLayout>);
