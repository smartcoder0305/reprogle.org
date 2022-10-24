import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useLayoutEffect, useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Header() {
  const [menu, setMenu] = useState(false);
  const [width, height] = useWindowSize();

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
    }
  }, [width]);

  return (
    <nav className="mx-auto max-w-screen-xl">
      <div className={"my-4 flex justify-end px-10 text-white"}>
        {/* primary nav */}
        <div className={"hidden items-center md:flex"} id="primary-menu">
          <Link href="/">
            <a
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
            </a>
          </Link>
          <Link href="/contact">
            <a
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
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <span>Contact Me</span>
            </a>
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
          "hidden w-full text-black outline outline-1 outline-base-blue-200"
        }
        id="mobile-menu"
      >
        <Link href="/">
          <a className="block bg-white px-10 py-3 outline outline-1 outline-base-blue-100">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="block bg-white px-10 py-3 outline outline-1 outline-base-blue-100">
            Contact Me
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
