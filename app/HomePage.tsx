"use client";

import Nav from "../components/nav";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <span className={"ellipse"} />
      <Nav />
      <Header
        className={
          "my-10 space-x-36 px-5 md:mx-auto md:flex md:max-w-screen-md md:justify-between lg:max-w-screen-lg xl:max-w-screen-xl"
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
      <Footer
        className={
          "mt-10 mb-5 px-5 text-center text-white md:mx-auto md:flex md:max-w-screen-md md:flex-col md:space-y-2 md:text-left lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      />
    </div>
  );
};

export default Home;
