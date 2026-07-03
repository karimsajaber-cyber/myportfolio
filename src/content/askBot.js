export const greetingMessage =
  "Hi, I'm Karim's portfolio assistant. Ask me about his projects, experience, skills, resume, or contact details.";

export const fallbackResponse =
  "I can help with Karim's projects, skills, experience, education, research, resume, availability, and contact details. Try asking about BiteMenu, BrokersHub, his tech stack, or how to reach him.";

export const askBotPhoneNumber = "+970598396658";
export const askBotPhoneDisplay = "+970-598396658";

export const recommendationFormEndpoint = "https://formspree.io/f/mwvdwqkz";
export const recommendationFormSource = "Karim portfolio AskBot";

export const quickQuestions = [
  "What projects has Karim built?",
  "What technologies does Karim use?",
  "Tell me about BiteMenu",
  "Tell me about BrokersHub",
  "Research publication",
  "How can I contact Karim?",
];

export const botResponses = [
  {
    id: "bitemenu",
    keywords: ["bitemenu", "bite menu", "voice ordering", "restaurant ordering"],
    answer:
      "BiteMenu is a voice-first restaurant ordering product built with Python, Django, JavaScript, and the Web Speech API, focused on customer-facing ordering flows.",
    actions: [
      {
        label: "See BiteMenu",
        href: "#bitemenu",
        external: false,
      },
      {
        label: "BiteMenu GitHub",
        href: "https://github.com/karimsajaber-cyber/BiteMenu",
        external: true,
      },
    ],
  },
  {
    id: "brokershub",
    keywords: ["brokershub", "brokers hub", "broker marketplace", "service marketplace"],
    answer:
      "BrokersHub is an AI-assisted service marketplace connecting clients with brokers, including booking workflows, role-based dashboards, chat, recommendations, reviews, and APIs.",
    actions: [
      {
        label: "See BrokersHub",
        href: "#brokershub",
        external: false,
      },
      {
        label: "BrokersHub GitHub",
        href: "https://github.com/karimsajaber-cyber/Brokers_Hub_2026",
        external: true,
      },
    ],
  },
  {
    id: "smart-study",
    keywords: ["smart study", "mock chat", "streamlit", "study chat"],
    answer:
      "Smart Study - Mock Chat is a Streamlit chat prototype focused on multi-turn conversation UI and session-based state.",
    actions: [
      {
        label: "See Smart Study",
        href: "#smart-study-mock-chat",
        external: false,
      },
      {
        label: "Smart Study GitHub",
        href: "https://github.com/karimsajaber-cyber/smart-study-mock-chat",
        external: true,
      },
    ],
  },
  {
    id: "github",
    keywords: ["github", "repo", "repository", "repositories", "code"],
    answer: "You can explore Karim's GitHub profile and project repositories.",
    actions: [
      {
        label: "See Projects",
        href: "#projects",
        external: false,
      },
      {
        label: "Open GitHub",
        href: "https://github.com/karimsajaber-cyber",
        external: true,
      },
    ],
  },
  {
    id: "linkedin",
    keywords: ["linkedin", "linked in"],
    answer: "You can connect with Karim on LinkedIn.",
    actions: [
      {
        label: "Open LinkedIn",
        href: "https://www.linkedin.com/in/karim-jaber-b90a65125/",
        external: true,
      },
    ],
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download resume", "curriculum"],
    answer: "You can view Karim's resume here.",
    actions: [
      {
        label: "View Resume",
        href: "/Karim-Jaber-CV.pdf",
        external: false,
      },
    ],
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "reach",
      "get in touch",
      "how can i contact",
    ],
    answer:
      "You can reach Karim by email or phone, or connect through LinkedIn.",
    actions: [
      {
        label: "Call Karim",
        type: "phonePopup",
      },
      {
        label: "Email Karim",
        href: "mailto:karim.s.a.jaber@gmail.com",
        external: false,
      },
      {
        label: "Open LinkedIn",
        href: "https://www.linkedin.com/in/karim-jaber-b90a65125/",
        external: true,
      },
      {
        label: "Open GitHub",
        href: "https://github.com/karimsajaber-cyber",
        external: true,
      },
    ],
  },
  {
    id: "research",
    keywords: [
      "research publication",
      "research",
      "publication",
      "peer-reviewed",
      "camel whey",
      "biotechnology paper",
    ],
    answer:
      "Karim is a co-author of a peer-reviewed publication titled “Antibacterial Effect of Camel Whey Protein with Various Plant Extracts.” The work reflects his research background, analytical thinking, laboratory experience, and scientific documentation skills.",
    actions: [
      {
        label: "See Publication",
        href: "#research",
        external: false,
      },
    ],
  },
  {
    id: "education",
    keywords: [
      "education",
      "certification",
      "certifications",
      "bootcamp",
      "axsos",
      "biotechnology",
      "ielts",
      "university",
      "degree",
    ],
    answer:
      "Karim studied at Axsos Academy Full-Stack Software Development Bootcamp, holds a B.Sc. in Biotechnology from An-Najah National University, IELTS certification from the British Council, and graduate-level Agricultural Management studies at CIHEAM Bari / LUM University.",
    actions: [
      {
        label: "See Education",
        href: "#education",
        external: false,
      },
    ],
  },
  {
    id: "ministry-health",
    keywords: [
      "ministry of health",
      "supply chain",
      "procurement",
      "logistics",
      "inventory",
      "palestinian ministry",
    ],
    answer:
      "Karim worked as a Supply Chain & Customer Care Officer at the Palestinian Ministry of Health, supporting procurement, logistics, inventory coordination, stakeholder communication, and operational reporting.",
    actions: [
      {
        label: "See Experience",
        href: "#experience",
        external: false,
      },
    ],
  },
  {
    id: "customer-support",
    keywords: [
      "customer support",
      "technical support",
      "paltel",
      "reach",
      "support experience",
      "helpdesk",
    ],
    answer:
      "Karim has customer support experience through Paltel and Reach, focused on issue resolution, communication, documentation, and service quality.",
    actions: [
      {
        label: "See Experience",
        href: "#experience",
        external: false,
      },
    ],
  },
  {
    id: "availability",
    keywords: [
      "availability",
      "available",
      "hiring",
      "opportunity",
      "opportunities",
      "open to",
      "looking for",
      "job",
      "roles",
    ],
    answer:
      "Karim is open to roles where software engineering, technical support, product thinking, and real-world problem solving meet. He is interested in full-stack development, technical customer success, software support, English co-instructor, and product-focused engineering roles.",
    actions: [
      {
        label: "View Resume",
        href: "/Karim-Jaber-CV.pdf",
        external: false,
      },
      {
        label: "Email Karim",
        href: "mailto:karim.s.a.jaber@gmail.com",
        external: false,
      },
      {
        label: "Open LinkedIn",
        href: "https://www.linkedin.com/in/karim-jaber-b90a65125/",
        external: true,
      },
    ],
  },
  {
    id: "skills",
    keywords: [
      "skill",
      "skills",
      "tech stack",
      "technologies",
      "technology",
      "python",
      "django",
      "react",
      "javascript",
      "full-stack",
      "full stack",
    ],
    answer:
      "Karim works across Python, Django, JavaScript, React, APIs, databases, customer-facing product flows, documentation, and cross-functional collaboration. His project work also includes Streamlit, Web Speech API, and product-focused full-stack delivery.",
    actions: [
      {
        label: "See Projects",
        href: "#projects",
        external: false,
      },
    ],
  },
  {
    id: "experience",
    keywords: ["experience", "background", "career", "work history", "professional"],
    answer:
      "Karim combines full-stack development, technical and customer support, supply chain operations, documentation, stakeholder communication, and cross-functional collaboration.",
    actions: [
      {
        label: "See Experience",
        href: "#experience",
        external: false,
      },
    ],
  },
  {
    id: "projects",
    keywords: ["project", "projects", "portfolio", "built", "case study", "case studies"],
    answer:
      "Karim's featured projects include BiteMenu (voice-first restaurant ordering), BrokersHub (AI-assisted broker marketplace), and Smart Study - Mock Chat (Streamlit conversation prototype).",
    actions: [
      {
        label: "See Projects",
        href: "#projects",
        external: false,
      },
      {
        label: "Open GitHub",
        href: "https://github.com/karimsajaber-cyber",
        external: true,
      },
    ],
  },
];

export function findBotResponse(input) {
  const normalized = input.toLowerCase().trim();

  if (!normalized) {
    return null;
  }

  const match = botResponses.find((response) =>
    response.keywords.some((keyword) => normalized.includes(keyword)),
  );

  if (match) {
    return {
      answer: match.answer,
      actions: match.actions ?? [],
    };
  }

  return {
    answer: fallbackResponse,
    actions: [],
  };
}
