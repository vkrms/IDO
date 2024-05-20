import type { FC, ReactNode } from 'react';

import { CustomThemeProvider } from '@/components/provider/theme_provider';

/*
 * ----------------------------------------------------------------------------------
 * all_provider
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/10
 */

export const AllProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};
