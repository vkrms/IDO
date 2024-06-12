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
        <link rel="icon" href='/img/favicon.webp' />


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
