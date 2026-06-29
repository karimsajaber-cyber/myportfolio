import bitemenuImage from "../../review-screenshots/ss.png";
import brokershubLandingImage from "../../review-screenshots/brokershub-landing.png";

/**
 * Featured projects — replace placeholder strings with real copy when ready.
 * Image paths reuse files in /review-screenshots (no duplicates).
 */
export const projectsSection = {
  eyebrow: "Case Studies",
  title: "Featured Projects",
  intro:
    "[Section intro placeholder — a brief line on the kinds of products you build and the problems they solve.]",
};

export const projects = [
  {
    id: "bitemenu",
    title: "BiteMenu",
    category: "[Category placeholder]",
    status: "Featured",
    problem: "[Problem placeholder — describe the user or business pain.]",
    solution: "[Solution placeholder — describe what was built.]",
    outcome: "[Outcome placeholder — describe the result.]",
    technologies: [
      "[Technology 1]",
      "[Technology 2]",
      "[Technology 3]",
    ],
    image: bitemenuImage,
    github: "#",
    liveDemo: "#",
    previewUrl: "bitemenu.app",
    previewAspectRatio: null,
    useIllustration: false,
  },
  {
    id: "brokershub",
    title: "BrokersHub",
    category: "[Category placeholder]",
    status: "Personal Project",
    problem: "[Problem placeholder — describe the user or business pain.]",
    solution: "[Solution placeholder — describe what was built.]",
    outcome: "[Outcome placeholder — describe the result.]",
    technologies: [
      "[Technology 1]",
      "[Technology 2]",
      "[Technology 3]",
    ],
    image: brokershubLandingImage,
    github: "#",
    liveDemo: "#",
    previewUrl: "brokershub.app",
    previewAspectRatio: null,
    useIllustration: false,
  },
  {
    id: "streamlit-chat",
    title: "Streamlit Chat",
    category: "[Category placeholder]",
    status: "AI Product",
    problem: "[Problem placeholder — describe the user or business pain.]",
    solution: "[Solution placeholder — describe what was built.]",
    outcome: "[Outcome placeholder — describe the result.]",
    technologies: [
      "[Technology 1]",
      "[Technology 2]",
      "[Technology 3]",
    ],
    image: null,
    github: "#",
    liveDemo: null,
    previewUrl: "localhost:8501",
    previewAspectRatio: null,
    useIllustration: true,
  },
];
