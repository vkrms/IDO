import * as styles from '@/components/layout/base_bg.css';

import { getBasicLayout } from '@/components/layout/base';
import type { NextPageWithLayout } from '@/pages/_app';
import { Box } from '@mui/material';
import type { ReactElement } from 'react';

/**
 * ----------------------------------------------------------------------------------
 * base_bg layout
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/05/21
 */

export interface Props {
  children: React.ReactElement;
}

const BaseBgLayout: NextPageWithLayout<Props> = ({ children }) => {
  return <Box className={styles.container}>{children}</Box>;
};

export const baseBgLayout = (page: ReactElement) => getBasicLayout(<BaseBgLayout>{page}</BaseBgLayout>);
