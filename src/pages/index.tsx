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

const title = 'FloCoin IDO By eventflo';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta property='og:title' content={title} />
        <meta
          property='og:description'
          content='Get exclusive access to the FloCoin IDO Powered by eventflo. Sign up now for the best chance to secure your spot.'
        />
      </Head>

      <HomePage />
    </div>
  );
};

Home.getLayout = getLayout;

export default Home;
