import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={"relative overflow-hidden"}>
      <Head>
        <title>Nate Reprogle</title>
        <meta name="description" content="The website for Nate Reprogle" />
      </Head>
      <Header
        className={
          "my-10 space-x-36 px-5 md:mx-auto md:flex md:max-w-screen-md md:justify-evenly md:space-x-20 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      />
      <Body
        className={
          "my-5 px-5 text-white md:mx-auto md:flex md:max-w-screen-md md:flex-col md:justify-evenly md:space-y-2 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      />
      <span
        className={
          "absolute w-full outline outline-[0.5px] outline-base-blue-200"
        }
      />
    </div>
  );
};

export default Home;
