import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <meta property="og:url" content="https://aflat.vercel.app/"/>
        <meta property="og:title" content="Aflat 에이플랫"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://ibb.co/MCRhxXC"/>
        <meta property="og:description" content="Aflat music studio & lesson"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
