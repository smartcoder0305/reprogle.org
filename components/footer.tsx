import Link from "next/link";

function Footer({ ...props }) {
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
              <Link href="https://twitter.com/natereprogle">Twitter</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/natereprogle/">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/natereprogle/">
                Instagram
              </Link>
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
