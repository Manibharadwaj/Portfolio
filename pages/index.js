import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { additionalWork, caseStudies, contact, experience, hero, profile, proofPoints, stack } from "../lib/portfolio-data";

function ExternalLink({ href, children, className = "" }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function ProjectMedia({ project }) {
  if (project.slug === "aasha") {
    return <div className="project-media project-media-aasha"><Image src="/aasha-app-home.png" alt={project.media.alt} fill sizes="(max-width: 760px) 100vw, 48vw" className="project-screenshot" /></div>;
  }

  if (project.slug === "putt-together") {
    return <div className="project-media project-media-putt" role="img" aria-label={project.media.alt}>
      <div className="putt-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
      <div className="putt-course-card"><Image src="/putt-together.png" alt="" width={78} height={78} /><div><span className="media-label">community course</span><strong>Hole 18</strong><small>Validated replay ready</small></div></div>
      <div className="putt-ball" aria-hidden="true" />
    </div>;
  }

  return <div className="project-media project-media-codescroll" role="img" aria-label={project.media.alt}>
    <div className="editor-window" aria-hidden="true"><div className="editor-dots"><i /><i /><i /></div><div className="editor-body"><aside><span>EXPLORER</span><b>CodeScroll</b><b>Bookmarks</b><b>Topics</b></aside><div className="editor-feed"><Image src="/codescroll.svg" alt="" width={42} height={42} /><span className="media-label">inside VS Code</span><strong>Developer news,<br />without the context switch.</strong><div className="feed-lines"><i /><i /><i /></div></div></div></div>
  </div>;
}

export default function Home() {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname);
  };

  return <>
    <Head>
      <title>Mani Bharadwaj — Software Engineer I</title>
      <meta name="description" content="Mani Bharadwaj is a Software Engineer I in Bengaluru building practical full-stack products with React, Next.js, Node.js, and Python." />
      <meta name="theme-color" content="#f4f2ec" />
      <meta property="og:title" content="Mani Bharadwaj — Software Engineer I" />
      <meta property="og:description" content="Practical full-stack products, selected engineering work, and case studies." />
      <meta property="og:image" content="https://manibharadwaj.netlify.app/mani-portrait-v2.png" />
      <meta property="og:url" content="https://manibharadwaj.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://manibharadwaj.netlify.app/" />
    </Head>

    <div className="portfolio-shell">
      <header className="site-header"><a className="brand" href="#top" onClick={(event) => scrollToSection(event, "top")} aria-label="Mani Bharadwaj home">MB<span>.</span></a><nav aria-label="Primary navigation"><a href="#work" onClick={(event) => scrollToSection(event, "work")}>Work</a><a href="#experience" onClick={(event) => scrollToSection(event, "experience")}>Experience</a><Link href="/blog">Writing</Link></nav><div className="header-actions"><a className="header-resume" href="/Resume.pdf" target="_blank" rel="noreferrer">Resume <FiArrowUpRight aria-hidden="true" /></a><ExternalLink className="header-contact" href={`mailto:${profile.email}`}>Let&apos;s talk <FiArrowUpRight aria-hidden="true" /></ExternalLink></div></header>
      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow"><span /> {hero.eyebrow}</p><h1 id="hero-title">{hero.title}</h1><p className="hero-lead">{hero.lead}</p><div className="hero-actions"><a className="button button-primary" href={hero.primaryCta.href} onClick={(event) => scrollToSection(event, "work")}>{hero.primaryCta.label} <FiArrowDown aria-hidden="true" /></a><a className="button button-secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label} <FiArrowUpRight aria-hidden="true" /></a></div><div className="hero-meta"><span><FiMapPin aria-hidden="true" /> {profile.location}</span><span>React · Next.js · Node.js · Python</span></div></div>
          <div className="hero-portrait-wrap"><div className="portrait-orbit orbit-one" aria-hidden="true" /><div className="portrait-orbit orbit-two" aria-hidden="true" /><div className="portrait-frame"><Image src="/mani-portrait-v2.png" alt="Mani Bharadwaj outdoors in Bengaluru" fill priority sizes="(max-width: 760px) 92vw, 40vw" className="portrait" /></div><div className="portrait-note"><span>Currently</span><strong>Building useful systems</strong></div></div>
        </section>

        <section className="proof-band" aria-label="Engineering focus"><div className="section-wrap proof-grid">{proofPoints.map((point, index) => <article className="proof-item" key={point.label}><span>0{index + 1}</span><p>{point.label}</p><strong>{point.value}</strong><small>{point.detail}</small></article>)}</div></section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title"><div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="work-title">Projects with real systems behind them.</h2><p>Three things I&apos;ve built that show how I think about products, edge cases, and the people using them.</p></div><div className="case-study-list">{caseStudies.map((project, index) => <article className={`case-study case-study-${index + 1}`} key={project.slug}><ProjectMedia project={project} /><div className="case-copy"><p className="case-index">0{index + 1} <span>{project.eyebrow}</span></p><h3>{project.name}</h3><p className="case-description">{project.description}</p><dl className="case-detail"><div><dt>The problem</dt><dd>{project.problem}</dd></div><div><dt>What I built</dt><dd>{project.solution}</dd></div></dl><ul className="outcome-list">{project.outcomes.slice(0, 2).map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><div className="case-footer"><div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><ExternalLink href={project.github} className="source-link">{project.repoLabel} <FiArrowUpRight aria-hidden="true" /></ExternalLink></div></div></article>)}</div></section>

        <section className="more-work section-wrap" aria-labelledby="more-work-title"><div className="section-heading compact"><p className="eyebrow">More builds</p><h2 id="more-work-title">A wider trail of experiments and tools.</h2></div><div className="more-work-list">{additionalWork.map((item, index) => <article className="more-work-item" key={item.name}><span className="more-work-number">0{index + 1}</span><div><h3>{item.name}</h3><p>{item.description}</p><span className="more-work-tech">{item.tech}</span></div><div className="more-work-links"><ExternalLink href={item.github}>GitHub <FiArrowUpRight aria-hidden="true" /></ExternalLink>{item.secondaryGithub && <ExternalLink href={item.secondaryGithub}>Server <FiArrowUpRight aria-hidden="true" /></ExternalLink>}{item.live && <ExternalLink href={item.live}>Live <FiArrowUpRight aria-hidden="true" /></ExternalLink>}</div></article>)}</div></section>

        <section className="build-section" aria-labelledby="build-title"><div className="section-wrap build-grid"><div><p className="eyebrow">How I build</p><h2 id="build-title">Useful beats flashy.</h2><p>I like working from the actual workflow: what is slowing someone down, where data moves, and what needs to be reliable when the product gets used for real.</p></div><ol className="build-steps"><li><span>01</span><div><strong>Understand the work</strong><p>Turn loose requirements into the flow, constraints, and decisions that matter.</p></div></li><li><span>02</span><div><strong>Build the system</strong><p>Shape the UI, services, and data around a product that can be understood and maintained.</p></div></li><li><span>03</span><div><strong>Ship with intent</strong><p>Validate edge cases, tighten the experience, and leave the next person a clearer path forward.</p></div></li></ol></div></section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title"><div className="section-heading compact"><p className="eyebrow">Experience</p><h2 id="experience-title">A quality-first path into software.</h2></div><div className="experience-list">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.period}`}><div className="experience-period">{item.period}{item.current && <span>Current</span>}</div><div><h3>{item.role}</h3><p className="company-line">{item.company} · {item.location}</p><p>{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div></section>

        <section className="stack-section" aria-labelledby="stack-title"><div className="section-wrap"><p className="eyebrow">Technical toolkit</p><h2 id="stack-title">Tools I reach for to make a product work.</h2><div className="stack-cloud">{stack.map((item) => <span key={item.name} data-category={item.category}>{item.name}</span>)}</div></div></section>
        <section className="contact-section section-wrap" aria-labelledby="contact-title"><div><p className="eyebrow">Contact</p><h2 id="contact-title">{contact.title}</h2><p>{contact.body}</p></div><div className="contact-links"><a className="contact-email" href={`mailto:${contact.email}`}>{contact.email} <FiArrowUpRight aria-hidden="true" /></a><div><ExternalLink href={contact.github}><FiGithub aria-hidden="true" /> GitHub</ExternalLink><ExternalLink href={contact.linkedin}><FiLinkedin aria-hidden="true" /> LinkedIn</ExternalLink></div></div></section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Mani Bharadwaj</span><span>Software Engineer I · Bengaluru</span></footer>
    </div>
  </>;
}
