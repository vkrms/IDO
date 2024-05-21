import type { ReactElement } from 'react';

import { AllProvider } from '@/components/provider/all_provider';

/*
 * ----------------------------------------------------------------------------------
 * base layout
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/10
 */

function Layout({ children }: { children: ReactElement }) {
  return <AllProvider>{children}</AllProvider>;
}

export const getBasicLayout = (page: ReactElement) => <Layout>{page}</Layout>;
