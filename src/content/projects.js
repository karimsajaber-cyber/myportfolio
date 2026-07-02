import bitemenuImage from "../../review-screenshots/ss.png";
import brokershubPreviewImage from "../../review-screenshots/brokershub-preview.png";
import smartStudyPreviewImage from "../../review-screenshots/smart-study-preview.png";

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
      "Voice and manual ordering paths with seamless user interactions",
      "Live menu browsing with intuitive navigation and real-time updates",
      "Order flow optimized for fast and efficient front-of-house operations",
      "Responsive product interface across desktop, tablet, and mobile devices",
      "Production-oriented structure built for scalability and maintainability",
      "Deployment-ready product UI following modern frontend development",
    ],
    technicalHighlights: [
      "Python",
      "JavaScript",
      "TTS Speech API",
      "Voice Recognition",
      "State Management",
      "Web Speech"
    ],
    image: bitemenuImage,
    github: "https://github.com/karimsajaber-cyber/BiteMenu",
    liveDemo: null,
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
      "BrokersHub is a full-stack marketplace for discovering, comparing, and connecting with service providers through a streamlined booking workflow. It combines recommendations, order management, and role-specific dashboards in one surface.",
    contribution:
      "Led project architecture and implemented core backend and frontend features, with emphasis on scalable workflows, usability, and database design.",
    features: [
      "Reviews and ratings with verified customer feedback",
      "End-to-end booking workflow from request to completion",
      "ٌReal live Chat capability between customer and broker",
      "AI-powered provider chatbot for smarter customer assistance",
      "Built-in real-time chat for seamless client and broker",
      "Smart API integrations with e-commerce like Amazon and Shein",



    ],
    technicalHighlights: [
      "Python",
      "Django",
      "JavaScript",
      "SQLite",
      "Authentication",
      "Amazon APIs",
    ],
    image: brokershubPreviewImage,
    github: "https://github.com/karimsajaber-cyber/Brokers_Hub_2026",
    liveDemo: null,
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
    featuresLayout: "two-by-two",
    technicalHighlights: [
      "Python",
      "Chat Interface",
      "Streamlit",
      "Session State",
    ],
    image: smartStudyPreviewImage,
    github: "https://github.com/karimsajaber-cyber/smart-study-mock-chat",
    liveDemo: null,
    previewUrl: "localhost:8501",
    useIllustration: false,
  },
];
