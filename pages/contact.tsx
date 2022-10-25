import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Nate via this page" />
      </Head>
      <span className={"ellipse"} />
      <Nav />
      <div className={"flex h-[85vh]"}>
        <div className={"m-auto flex flex-col space-y-4 px-4 text-center"}>
          <h1 className={"font-heading text-4xl text-white"}>
            Work in progress!
          </h1>
          <p
            className={
              "mx-auto max-w-screen-sm font-body text-2xl text-white md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
            }
          >
            This page is a work in progress. The contact form will be available
            soon, but if you need to reach me you can{" "}
            <a href="mailto:nate@reprogle.org" className={"underline"}>
              click this link!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
