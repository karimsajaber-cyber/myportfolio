import { site } from "./site";

/**
 * Contact — reach-out links for the Let's Start a Conversation section.
 */
export const contactSection = {
  eyebrow: "Contact",
  title: "Let's Start a Conversation",
  intro:
    "Have a project, opportunity, or question? I'd love to hear from you",
};

export const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/karim-jaber-b90a65125",
    href: site.linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/karimsajaber-cyber",
    href: site.github,
  },
  {
    id: "resume",
    label: "Resume",
    value: "Karim-Jaber-CV.pdf",
    href: site.resume.href,
  },
];
