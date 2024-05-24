import 'react-toastify/dist/ReactToastify.css';
import '@/style/common/main.css';

import type { ReactElement, ReactNode } from 'react';

import { getBasicLayout } from '@/components/layout/base';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

/**
 * ----------------------------------------------------------------------------------
 * app.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author zhangmao 2023/3/10
 */

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || getBasicLayout;

  return getLayout(
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>

      <ToastContainer hideProgressBar />

      <Component {...pageProps} />
    </>,
  );
}
