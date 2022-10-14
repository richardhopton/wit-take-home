import type { AppProps } from "next/app";
import "./_app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
