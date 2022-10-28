import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/contactForm";

const Contact: NextPage = () => {
  return (
    <div className={"relative overflow-hidden"}>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Nate via this page" />
      </Head>
      <ContactForm />
      <div className={"flex h-[85vh]"}>
        <div className={"m-auto flex flex-col space-y-4 px-4 text-center"}>
          <h1
            className={
              "font-heading text-2xl text-white md:text-3xl lg:text-4xl"
            }
          >
            Work in progress!
          </h1>
          <p
            className={
              "text-md mx-auto max-w-screen-sm font-body text-white md:max-w-screen-sm md:text-xl lg:max-w-screen-md lg:text-2xl xl:max-w-screen-lg"
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
