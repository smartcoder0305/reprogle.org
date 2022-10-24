import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      {/* This is to fix an issue with the ellipse causing a scroll-bar when the horizontal navigation was too small 
      Basically anything that expands beyond the body element (AKA the <span> element in index.tsx) will have scrolling disabled.
      I will take any feedback on how to fix this potential issue if this is not the "recommended" method! */}

      <div className={"relative overflow-hidden"}>
        <body className={"bg-base-blue-100"}>
          <Main />
          <NextScript />
        </body>
      </div>
    </Html>
  );
}
