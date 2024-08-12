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
    <Html style={{ background: '#010314' }}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='theme-color' content={colorWhite} />
        <meta name='keywords' content='' />
        <meta httpEquiv='Content-Security-Policy' content='connect-src *' />
        <link rel='icon' href='/img/favicon.webp' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
