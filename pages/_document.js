import { Html, Head, Main, NextScript } from "next/document";

const siteUrl = "https://manibharadwaj.netlify.app";
const pageTitle = "Mani Bharadwaj | Software Engineer I & Full-Stack Developer";
const description =
  "Portfolio of Mani Bharadwaj, a Software Engineer I building reliable full-stack web applications with React, Next.js, Node.js, and Python.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mani Bharadwaj",
  url: siteUrl,
  image: `${siteUrl}/mani-portrait-v2.png`,
  jobTitle: "Software Engineer I",
  description,
  sameAs: [
    "https://github.com/Manibharadwaj",
    "https://www.linkedin.com/in/mani-bharadwaj",
  ],
  knowsAbout: ["JavaScript", "React", "Next.js", "Node.js", "Python"],
};

export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        <meta name="description" content={description} />
        <meta name="author" content="Mani Bharadwaj" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#f4f2ec" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content="Mani Bharadwaj" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={`${siteUrl}/mani-portrait-v2.png`} />
        <meta property="og:image:alt" content="Mani Bharadwaj" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
