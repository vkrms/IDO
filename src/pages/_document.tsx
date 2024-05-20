import { Head, Html, Main, NextScript } from 'next/document';

import { colorWhite } from '@/style/config/color.css';

/**
 * ----------------------------------------------------------------------------------
 * document.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author lanlin
 * @change 2023/03/20
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet='utf-8' />
        <meta name='theme-color' content={colorWhite} />
        <meta name='keywords' content='' />
        <meta httpEquiv='Content-Security-Policy' content='connect-src *' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
