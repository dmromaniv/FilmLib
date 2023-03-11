import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/components/Layout";
import "styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
