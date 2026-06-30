import bitemenuImage from "../../review-screenshots/ss.png";
import brokershubPreviewImage from "../../review-screenshots/brokershub-preview.png";

export const projectsSection = {
  eyebrow: "Case Studies",
  title: "Featured Projects",
  intro:
    "Product case studies focused on problem framing, implementation, and outcomes.",
};

export const projects = [
  {
    id: "bitemenu",
    icon: "bitemenu",
    title: "BiteMenu",
    tagline: "Voice-first ordering for restaurants and hospitality teams.",
    overview:
      "BiteMenu is a restaurant ordering product that lets guests place orders by voice or through a live menu. It combines conversational ordering with a standard menu flow so staff spend less time on repetitive order-taking.",
    contribution:
      "Owned core product flows end to end, from ordering logic and menu presentation through deployment-ready UI built for real service environments.",
    features: [
      "Voice and manual ordering paths",
      "Live menu browsing",
      "Order flow for front-of-house use",
      "Responsive product interface",
      "Production-oriented frontend structure",
      "Deployment-ready product UI",
    ],
    technicalHighlights: [
      "Python",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Speech API (Speech-to-Text & Text-to-Speech)",
      "Voice Recognition",
      "Component Architecture",
      "State Management",
      "Responsive Design",
    ],
    image: bitemenuImage,
    github: "#",
    liveDemo: "#",
    previewUrl: "bitemenu.app",
    useIllustration: false,
  },
  {
    id: "brokershub",
    icon: "brokershub",
    title: "BrokersHub",
    tagline:
      "AI-assisted marketplace for connecting clients with trusted service providers.",
    overview:
      "BrokersHub is a full-stack marketplace for discovering, comparing, and connecting with service providers through a streamlined booking workflow. It combines recommendations, order management, and role-specific dashboards in one product surface.",
    contribution:
      "Led project architecture and implemented core backend and frontend features, with emphasis on scalable workflows, usability, and database design.",
    features: [
      "AI-powered provider recommendations",
      "Smart search with category and city filters",
      "End-to-end booking workflow",
      "Role-based dashboards",
      "Reviews and ratings",
    ],
    technicalHighlights: [
      "Python",
      "Django",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "SQLite",
      "Authentication",
      "CRUD Operations",
      "REST APIs",
      "AI Recommendations",
      "Responsive Design",
    ],
    image: brokershubPreviewImage,
    github: "#",
    liveDemo: "#",
    previewUrl: "brokershub.app",
    useIllustration: false,
  },
  {
    id: "smart-study-mock-chat",
    icon: "streamlit",
    title: "Smart Study - Mock Chat",
    tagline: "Lightweight Streamlit chat prototype for study workflows.",
    overview:
      "Smart Study - Mock Chat is a small Streamlit prototype for multi-turn chat-style study sessions. It focuses on a simple conversation layout and session-based state rather than full product complexity.",
    contribution:
      "Built the Streamlit interface, chat flow, and session state handling as a focused mock for rapid study and iteration.",
    features: [
      "Sidebar navigation",
      "Multi-turn chat history",
      "Session-based conversation state",
      "Streamlit-native input controls",
    ],
    technicalHighlights: [
      "Python",
      "Streamlit",
      "Session State",
      "Chat Interface",
    ],
    image: null,
    github: "#",
    liveDemo: null,
    previewUrl: "localhost:8501",
    useIllustration: true,
  },
];
