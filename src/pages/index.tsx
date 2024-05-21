import { getLayout } from '@/components/layout/home';
import HomePage from '@/module/home';
import type { NextPageWithLayout } from '@/pages/_app';
import Head from 'next/head';

/*
 * ----------------------------------------------------------------------------------
 * index
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2024/05/10
 */

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>landing</title>
      </Head>

      <HomePage />
    </div>
  );
};

Home.getLayout = getLayout;

export default Home;
