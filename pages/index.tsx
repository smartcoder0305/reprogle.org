import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Body from "../components/body";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nate Reprogle</title>
        <meta name="description" content="The website for Nate Reprogle" />
      </Head>
      <span className={"ellipse"} />
      <Header />
      <Body
        className={
          "mx-10 my-10 max-w-screen-sm space-x-36 px-5 md:mx-auto md:flex md:max-w-screen-md md:space-x-20 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      />
    </div>
  );
};

export default Home;
