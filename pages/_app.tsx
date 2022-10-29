import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import ReactGA from "react-ga";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize("G-TFX3YYT899");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-MJ3N3MT",
    });
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
