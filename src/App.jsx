import { useState } from 'react';
import logo from './assets/logo (1).png';
import jsIcon from './assets/js.svg';
import nextIcon from './assets/nodejs.png';
import htmlIcon from './assets/html.svg';
import cssIcon from './assets/css.png';
import reactIcon from './assets/react.svg';
import instagramIcon from './assets/instagram.svg';
import xIcon from './assets/x.svg';
import youtubeIcon from './assets/youtube.svg';
import htmlProject from './assets/1st Project.png';
import cssProject from './assets/2nd Project.png';
import avatarNewProfile from './assets/avatar-newprofile.png';
import googleLogo from './assets/google-logo.png';
import appleLogo from './assets/apple-logo.png';
import metaLogo from './assets/meta-logo.png';

const projects = [
  { title: 'POWER OF HTML', label: 'HTML TUTORIAL', theme: 'html', image: htmlProject },
  { title: 'CSS MAGIC', label: 'CSS TUTORIAL', theme: 'css', image: cssProject },
];
const experience = [
  { logo: googleLogo, role: 'Lead Software Engineer at Google', date: 'Nov 2019 - Present', company: 'google', description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide." },
  { logo: appleLogo, role: 'Junior Software Engineer at Apple', date: 'Jan 2016 - Dec 2017', company: 'apple', description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team." },
  { logo: metaLogo, role: 'Software Engineer at Meta', date: 'Jan 2017 - Oct 2019', company: 'meta', description: "At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability." },
];

function Avatar() { return <div className="avatar-frame"><div className="avatar" aria-label="Developer illustration"><img className="avatar-profile-image" src={avatarNewProfile} alt="Profile avatar" /></div></div>; }

function Header() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Projects', 'Experience', 'Contact'];
  return <header className="navbar"><a href="#top" className="brand" aria-label="Home"><img src={logo} alt="JM signature logo" /></a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>☰</button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</nav></header>;
}

function Hero() { return <section className="hero" id="top"><Avatar /><h1>I do code and<br />make content <em>about it!</em></h1><p className="intro">I am a seasoned full-stack software engineer with over<br className="desktop-break" /> 8 years of professional experience, specializing in backend development.<br className="desktop-break" /> My expertise lies in crafting robust and scalable SaaS-based<br className="desktop-break" /> architectures on the Amazon AWS platform.</p><div className="hero-actions"><a className="button button-primary" href="mailto:hello@bhavesh.dev">Get In Touch</a><a className="button button-outline" href="#contact">Download CV</a></div><p className="experience-with">EXPERIENCE WITH</p><div className="tech-row" aria-label="Technologies"><img src={jsIcon} alt="JavaScript" /><img src={nextIcon} alt="Node.js" /><img src={htmlIcon} alt="HTML5" /><img src={cssIcon} alt="CSS3" /><img src={reactIcon} alt="React" /></div></section>; }

function Projects() { return <section className="section projects" id="projects"><p className="eyebrow orange">PROJECTS</p><div className="project-grid">{projects.map((project) => <a className={`project-card ${project.theme}-card`} href="#contact" key={project.title}><div className="card-art"><img src={project.image} alt={`${project.title} project preview`} /></div></a>)}</div></section>; }

function Experience() { return <section className="section experience" id="experience"><p className="eyebrow blue">EXPERIENCE</p>{experience.map(({ logo, role, date, company, description }) => <article className="experience-item" key={role}><div className={`company-icon ${company}`}><img className="company-logo" src={logo} alt={`${company} logo`} /></div><div className="experience-copy"><div className="role-line"><h2><span className="role-text">{role}</span></h2><time>{date}</time></div><p>{description}</p></div></article>)}</section>; }

function Footer() { return <footer className="footer" id="contact"><div className="footer-inner"><p className="footer-title">Contact</p><p className="footer-copy">Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing<br className="desktop-break" /> and implementing robust, scalable, and innovative web solutions. Adept at leveraging a<br className="desktop-break" /> comprehensive skill set encompassing front-end and back-end technologies</p><a className="email" href="mailto:abmcodehub@gmail.com">✉ &nbsp; abmcodehub@gmail.com</a><div className="socials"><a href="#contact"><img src={instagramIcon} alt="Instagram" /></a><a href="#contact"><img src={xIcon} alt="X" /></a><a href="#contact"><img src={youtubeIcon} alt="YouTube" /></a></div></div></footer>; }

export default function App() { return <main className="site-shell"><Header /><Hero /><Projects /><Experience /><Footer /></main>; }
