"use client";
import Link from "next/link";
import styles from "../styles/nav.module.css";
import { useEffect, useState } from "react";

// Custom react hook for returning window size. Used for closing the mobile menu if
// A) it's open and B) the window resizes to the `md:` size

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Nav() {
  // A couple state objects for handling the mobile menu
  const [menu, setMenu] = useState(false);
  const [width] = useWindowSize();

  // This useEffect hook is used for handling the opening and closing of the mobile menu
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu?.classList.toggle("hidden");
    console.log(`Setting Mobile Menu State to ${menu}`);
  }, [menu]);

  // This is used to close the menu if the display width changes, particularly if it changes to the full-sized menu
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu?.classList.contains("hidden")) {
      mobileMenu?.classList.add("hidden");
      setMenu(false);
    }
  }, [width]);

  // Main navigation
  return (
    <nav className="mx-auto max-w-screen-xl">
      <div className={"my-4 flex justify-end px-10 text-white"}>
        {/* primary nav */}
        <div className={"hidden items-center md:flex"} id="primary-menu">
          <Link href="/">
            <div
              className={
                styles.hover_underline_animation + " items-center space-x-1"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <span>About</span>
            </div>
          </Link>
          <Link href="/contact">
            <div
              className={
                styles.hover_underline_animation +
                " cursor-pointer items-center space-x-1"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <span>Contact Me</span>
            </div>
          </Link>
          <Link href="/keys">
            <div
              className={
                styles.hover_underline_animation +
                " cursor-pointer items-center space-x-1"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>

              <span>Keys</span>
            </div>
          </Link>
        </div>

        {/* mobile button */}
        <div className="flex items-center md:hidden">
          <button
            className={"mobile-menu-button"}
            onClick={() => setMenu(!menu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu here */}
      <div
        className={
          "absolute z-10 hidden w-full text-black outline outline-1 outline-dark-base-blue-200"
        }
        id="mobile-menu"
      >
        <Link
          href="/"
          className="block cursor-pointer bg-white px-10 py-3 outline outline-1 outline-dark-base-blue-100"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block cursor-pointer bg-white px-10 py-3 outline outline-1 outline-dark-base-blue-100"
        >
          Contact Me
        </Link>
        <Link
          href="/keys"
          className="block cursor-pointer bg-white px-10 py-3 outline outline-1 outline-dark-base-blue-100"
        >
          Keys
        </Link>
      </div>
    </nav>
  );
}
