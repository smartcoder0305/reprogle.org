"use client";
import "../styles/globals.css";

import { useEffect } from "react";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="en">
      <body className="bg-dark-base-blue-100">
        <div className={"relative overflow-hidden"}>
          <Nav />
          <span className={"ellipse"} />
          <main>{children}</main>
          <span
            className={
              "absolute w-full outline outline-[0.5px] outline-dark-base-blue-200"
            }
          />
          <Footer
            className={
              "mt-10 mb-5 px-5 text-center text-white md:mx-auto md:flex md:max-w-screen-md md:flex-col md:space-y-2 md:text-left lg:max-w-screen-lg xl:max-w-screen-xl"
            }
          />
        </div>
      </body>
    </html>
  );
}
