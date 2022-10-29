//pages/sitemap.xml.js
import pages from "../public/pages.json";
const EXTERNAL_PAGE_ROOT = "https://reprogle.org";

type Data = {
  id: number;
  pageTitle: string;
  description: string;
  slug: string;
};

function generateSiteMap(page: Data[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${page
       .map(({ slug }) => {
         slug = slug.substring(1);
         return `
       <url>
           <loc>${`${EXTERNAL_PAGE_ROOT}/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(pages);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
