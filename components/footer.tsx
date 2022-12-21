"use client";
import Link from "next/link";
import Popup from "./popup";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Footer({ ...props }) {
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
              <button
                onClick={() => {
                  setTwitter(true);
                }}
              >
                Twitter
              </button>
              <Transition
                show={twitter}
                enter="transition-all duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popup
                  trigger={twitter}
                  message={
                    "Please note that personal social media sites reflect opinions or beliefs from me, and do not necessarily reflect the beliefs of my current or previous employers. Social media profiles will always adhere to my employers' Code of Ethical and Professional Standards, Non-Discrimination Policy, and Employee Confidentiality Agreement."
                  }
                  setTrigger={setTwitter}
                  redirectTitle={"Twitter"}
                  redirectLink={"https://twitter.com/natereprogle"}
                  redirectTime={7}
                />
              </Transition>
            </li>
            <li>
              <Link href="https://linkedin.com/in/natereprogle/">
                LinkedIn
              </Link>
            </li>
            <li>
              <button onClick={() => setInstagram(true)}>Instagram</button>
              <Transition
                show={instagram}
                enter="transition-all duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popup
                  trigger={instagram}
                  message={
                    "Please note that personal social media sites reflect opinions or beliefs from me, and do not necessarily reflect the beliefs of my current or previous employers. Social media profiles will always adhere to my employers' Code of Ethical and Professional Standards, Non-Discrimination Policy, and Employee Confidentiality Agreement."
                  }
                  setTrigger={setInstagram}
                  redirectTitle={"Instagram"}
                  redirectLink={"https://instagram.com/natereprogle"}
                  redirectTime={7}
                />
              </Transition>
            </li>
            <li>
              <Link href="https://www.github.com/TerrrorByte">GitHub</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex flex-col items-center justify-center text-xs">
        <h2>Copyright © 2022-{new Date().getFullYear()} | Nate Reprogle</h2>
        <p>
          Site source:{" "}
          <Link
            href="https://www.github.com/TerrrorByte/reprogle.org"
            className="hover:underline"
          >
            click here
          </Link>
        </p>
      </div>
    </div>
  );
}
