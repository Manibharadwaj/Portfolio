# Portfolio

Personal portfolio and writing site for Mani Bharadwaj, a Software Engineer I and full-stack developer. The site highlights selected engineering work, technical skills, and blog posts.

Live site: [manibharadwaj.netlify.app](https://manibharadwaj.netlify.app/)

## Stack

- Next.js (Pages Router) and React
- Tailwind CSS
- Markdown posts with `gray-matter` and `react-markdown`
- Netlify deployment

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run lint
npm run build
npm run start
```

## Content and SEO

- Update the home page in `pages/index.js`; verified public portfolio content lives in `lib/portfolio-data.js`.
- Add a blog post as a Markdown file in `posts/`; its filename becomes the URL slug at `/blog/<slug>`.
- When adding or removing a post, update `public/sitemap.xml` so every public article remains discoverable.
- Site-wide crawler directives and security headers live in `public/robots.txt` and `public/_headers`.
