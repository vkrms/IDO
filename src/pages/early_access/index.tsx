import { baseBgLayout } from '@/components/layout/base_bg';
import EarlyAccess from '@/module/early_access';
import HomePage from '@/module/home';
import type { NextPageWithLayout } from '@/pages/_app';
import Head from 'next/head';

/*
 * ----------------------------------------------------------------------------------
 * index
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2024/05/21
 */

const EarlyAccesPage: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Early Access</title>
      </Head>

      <EarlyAccess />
    </div>
  );
};

EarlyAccesPage.getLayout = baseBgLayout;

export default EarlyAccesPage;
