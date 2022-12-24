My website, written in [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This website is using NextJS 13's app directory. It is currently experimental and is recommended to not be used in production, but YOLO. [See this page](https://beta.nextjs.org/docs/routing/fundamentals) for information about NextJS 13's new routing system.

## Getting Started

First, install necessary dependencies. This project was built with pnpm, so it's recommended to proceed with that:

```bash
pnpm i
```

Then, run the dev server:

```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The contact form will not work while running the dev server, since it requires the site key and private key for Cloudflare Turnstiles and the Discord Web Hook URL.

You can edit any page within the `app/` directory. `layout.tsx` is the default layout of the site, and should not be edited. Each page has a `head.tsx` file, which lists all the tags to put in the page's `<Head>`tag. Those two files should **not** be edited unless necessary. The `page.tsx` file in the `app/` direcotry is the index. New pages are created using a folder with the page stub as the name, and a `page.tsx` file within. For example, `app/contact/` will create a `/contact` page, and `page.tsx` within defines the contents. Pages will auto-update as you edit files when the dev server is running.

This site has an [API route](https://nextjs.org/docs/api-routes/introduction) and can be accessed on [http://localhost:3000/api/pages](http://localhost:3000/api/pages). This endpoint can be edited in `pages/api/pages.ts`. It is designed to return page data to generate a sitemap when requested by crawlers.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
