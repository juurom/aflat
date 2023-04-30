import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
    <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
    <meta property="og:url" content="https://aflat.vercel.app/"/>
    <meta property="og:title" content="Aflat 에이플랫"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="../static/mainpage.jpeg"/>
    <meta property="og:description" content="Aflat music studio & lesson"/>
  </Head>
    <Component {...pageProps} />
  </>
}
