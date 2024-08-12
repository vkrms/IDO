import type { ReactElement } from 'react';

import { AllProvider } from '@/components/provider/all_provider';
import { Something } from '../provider/context_provider';

/*
 * ----------------------------------------------------------------------------------
 * base layout
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/10
 */

function Layout({ children }: { children: ReactElement }) {
  return (
    <Something>
      <AllProvider>{children}</AllProvider>
    </Something>
  );
}

export const getBasicLayout = (page: ReactElement) => <Layout>{page}</Layout>;
