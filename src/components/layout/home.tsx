import Header from '@/components/header';
import { baseBgLayout } from '@/components/layout/base_bg';
import type { NextPageWithLayout } from '@/pages/_app';
import { Box } from '@mui/material';
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

const HomeLayout: NextPageWithLayout<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export const getLayout = (page: ReactElement) => baseBgLayout(<HomeLayout>{page}</HomeLayout>);
