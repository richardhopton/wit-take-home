import type { AppProps } from "next/app";
import Head from "next/head";
import "./_app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
