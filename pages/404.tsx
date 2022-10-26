import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav";

const UnknownPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Unknown Page</title>
        <meta name="description" content="Error 404" />
      </Head>
      <div className={"flex h-[85vh]"}>
        <div
          className={
            "m-auto flex flex-col space-y-4 px-4 py-10 text-center md:w-[85%] md:border-l-2 md:border-r-2"
          }
        >
          <h1
            className={
              "font-heading text-2xl text-white md:text-3xl lg:text-4xl"
            }
          >
            Oops! It appears you&apos;ve gotten lost | Error 404
          </h1>
          <p
            className={
              "text-md mx-auto max-w-screen-sm font-body text-white md:max-w-screen-sm md:text-xl lg:max-w-screen-md lg:text-2xl xl:max-w-screen-lg"
            }
          >
            You&apos;ve attempted to reach a page that doesn&apos;t exist. If
            you believe this is an error, please click the &quot;Contact
            Me&quot; button above and reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnknownPage;
