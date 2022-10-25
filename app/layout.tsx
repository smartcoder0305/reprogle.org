/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nate Reprogle</title>
        <meta name="description" content="The website for Nate Reprogle" />
      </head>
      <div className={"relative overflow-hidden"}>
        <body className={"bg-base-blue-100"}>{children}</body>
      </div>
    </html>
  );
}
