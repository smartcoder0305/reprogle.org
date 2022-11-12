import Link from "next/link";
import Popup from "./popup";
import { useState } from "react";

function Footer({ ...props }) {
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);

  return (
    <div {...props}>
      {/* This is where the main content goes, so we can center the copyright below it */}
      <div className={"mb-8 md:flex"}>
        <div className={"mb-5 md:w-2/3"}>
          <h3 className={"font-heading text-xl"}>
            Living in Arkansas, reaching the world
          </h3>
          <Link
            href="/contact"
            className={
              "font-heading text-3xl font-bold underline md:text-4xl xl:text-5xl"
            }
          >
            Get in touch
          </Link>
        </div>
        <div className={"md:w-1/3"}>
          <h3 className={"mb-3 font-heading text-xl md:mb-6"}>Socials</h3>
          <ul className={"space-y-2 text-sm"}>
            <li>
              {/* <Link href="https://twitter.com/natereprogle">Twitter</Link> */}
              <button
                onClick={() => {
                  setTwitter(true);
                }}
              >
                Twitter
              </button>
              {twitter && (
                <Popup
                  trigger={twitter}
                  message={
                    "Please note that personal social media sites reflect opinions or beliefs from the site author, and do not necessarily reflect the beliefs of their current or previous employers. Social media profiles will always adhere to my employers' Code of Ethical and Professional Standards, Non-Discrimination Policy, and Employee Confidentiality Agreement."
                  }
                  setTrigger={setTwitter}
                  redirectTitle={"Twitter"}
                  redirectLink={"https://twitter.com/natereprogle"}
                  redirectTime={7}
                />
              )}
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/natereprogle/">
                LinkedIn
              </Link>
            </li>
            <li>
              <button onClick={() => setInstagram(true)}>Instagram</button>
              {instagram && (
                <Popup
                  trigger={instagram}
                  message={
                    "Please note that personal social media sites reflect opinions or beliefs from the site author, and do not necessarily reflect the beliefs of their current or previous employers. Social media profiles will always adhere to my employers' Code of Ethical and Professional Standards, Non-Discrimination Policy, and Employee Confidentiality Agreement."
                  }
                  setTrigger={setInstagram}
                  redirectTitle={"Instagram"}
                  redirectLink={"https://www.instagram.com/natereprogle/"}
                  redirectTime={7}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <h2 className={"self-center text-xs"}>
        Copyright © 2022-{new Date().getFullYear()} | Nate Reprogle
      </h2>
    </div>
  );
}

export default Footer;
