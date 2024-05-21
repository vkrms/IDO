import * as styles from '@/components/layout/home.css';

import Header from '@/components/header';
import { getBasicLayout } from '@/components/layout/base';
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
    <Box className={styles.container}>
      <Header />
      {children}
    </Box>
  );
};

export const getLayout = (page: ReactElement) => getBasicLayout(<HomeLayout>{page}</HomeLayout>);
