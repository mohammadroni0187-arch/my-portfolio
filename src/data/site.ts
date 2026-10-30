import type { ComponentType } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Single source of truth for every personal link/detail used across the site.
 * Update these values once and the Hero, Contact, Footer and Navbar all update.
 */
export const site = {
  name: "Mohammad Roni",
  image: "/Image.png",
  role: "Full-Stack Web Developer",
  location: "Bangladesh",
  email: "mohammadroni0187@gmail.com",
  github: "https://github.com/mohammadroni0187-arch",
  // TODO: Replace with your real LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/",
  /** Drop your real resume at `public/resume.pdf` — this link downloads it. */
  resumePath: "/resume.pdf",
  education: {
    degree: "Bachelor of Business Studies (BBS)",
    institution: "Chengarchar Gov. Degree College",
    period: "2017 — 2022",
  },
} as const;

export type Social = {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  external: boolean;
};

export const socials: Social[] = [
  { label: "GitHub", href: site.github, icon: FaGithub, external: true },
  { label: "LinkedIn", href: site.linkedin, icon: FaLinkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, icon: FaEnvelope, external: false },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/** Every scroll-spy target on the page (the logo links to `#home`). */
export const sectionIds = ["home", ...navLinks.map((link) => link.href.slice(1))];
