import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Body from "../components/body";

const Home: NextPage = () => {
  return (
    <div className={"relative overflow-hidden"}>
      <Head>
        <title>Home - Nate Reprogle</title>
        <meta
          name="description"
          content="The website for Nate Reprogle. Nate is an IT Enthusiast with a career in Contact Centers based in Arkansas."
        />
        <link rel="canonical" href="https://reprogle.org" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Nate Reprogle" />
        <meta
          property="og:description"
          content="Nate is an IT Enthusiast with a career in Contact Centers based in Arkansas."
        />
        <meta property="og:url" content="https://reprogle.org" />
        <meta property="og:site_name" content="Nate Reprogle" />
        <meta
          property="article:modified_time"
          content="2022-10-29T15:18:00+00:00"
        />
        <meta property="og:image" content="https://reprogle.org/Profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NateReprogle" />
        <meta name="twitter:creator" content="@NateReprogle" />
        <meta name="twitter:title" content="Home - Nate Reprogle" />
        <meta
          name="twitter:description"
          content="The website for Nate Reprogle. Nate is an IT Enthusiast with a career in Contact Centers based in Arkansas."
        />
        <meta name="twitter:image" content="https://reprogle.org/Profile.jpg" />
      </Head>
      <Header
        className={
          "my-10 space-x-36 px-5 md:mx-auto md:flex md:max-w-screen-md md:justify-between md:space-x-20 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
        headertext="Hello, my name is"
        maintext="Nate Reprogle"
        footertext="IT Enthusiast"
        image="/Profile.jpg"
        imagealt="Nate Reprogle"
      />
      <Body
        className={
          "my-5 px-5 text-white md:mx-auto md:flex md:max-w-screen-md md:flex-col md:justify-evenly md:space-y-2 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      />
    </div>
  );
};

export default Home;
