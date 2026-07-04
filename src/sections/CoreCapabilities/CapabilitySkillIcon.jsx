function MonoIcon({ children }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function FallbackIcon() {
  return (
    <MonoIcon>
      <circle cx="8" cy="8" r="2.2" />
      <path d="M8 3.2v1.2M8 11.6v1.2M3.2 8h1.2M11.6 8h1.2" />
    </MonoIcon>
  );
}

const skillIcons = {
  Python: (
    <MonoIcon>
      <path d="M5.6 3.6h3.2c1.6 0 2.8 1 2.8 2.4S10.4 8.4 8.8 8.4H6.8v2.4" />
      <path d="M10.4 12.4H7.2c-1.6 0-2.8-1-2.8-2.4s1.2-2.4 2.8-2.4h2v-2.4" />
      <circle cx="6.6" cy="5.6" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="9.4" cy="10.4" r="0.55" fill="currentColor" stroke="none" />
    </MonoIcon>
  ),
  Django: (
    <MonoIcon>
      <rect x="3.6" y="3.6" width="8.8" height="8.8" rx="1" />
      <path d="M5.6 5.6v4.8M5.6 5.6h2.4c1.2 0 1.8.6 1.8 1.4s-.6 1.4-1.8 1.4H5.6" />
    </MonoIcon>
  ),
  React: (
    <MonoIcon>
      <circle cx="8" cy="8" r="1.1" />
      <ellipse cx="8" cy="8" rx="5.2" ry="2" />
      <ellipse cx="8" cy="8" rx="5.2" ry="2" transform="rotate(60 8 8)" />
      <ellipse cx="8" cy="8" rx="5.2" ry="2" transform="rotate(120 8 8)" />
    </MonoIcon>
  ),
  "REST APIs": (
    <MonoIcon>
      <circle cx="4.8" cy="8" r="1.4" />
      <circle cx="11.2" cy="8" r="1.4" />
      <path d="M6.2 8h3.6M4.8 5.6h6.4M4.8 10.4h6.4" />
    </MonoIcon>
  ),
  MySQL: (
    <MonoIcon>
      <ellipse cx="8" cy="5.2" rx="4" ry="1.3" />
      <path d="M4 5.2v3.6c0 .7 1.8 1.3 4 1.3s4-.6 4-1.3V5.2" />
      <path d="M6.4 7.6h3.2" />
    </MonoIcon>
  ),
  SQLite: (
    <MonoIcon>
      <ellipse cx="8" cy="5.2" rx="4" ry="1.3" />
      <path d="M4 5.2v3.6c0 .7 1.8 1.3 4 1.3s4-.6 4-1.3V5.2" />
      <path d="M8 4v6.4" />
    </MonoIcon>
  ),
  Flask: (
    <MonoIcon>
      <path d="M6.4 3.2h3.2l.4 1.6h1.4L8.4 9.6v2.8c0 .6-.5 1.2-1.2 1.2H6.8c-.7 0-1.2-.6-1.2-1.2V9.6L4 4.8h1.4l.4-1.6Z" />
    </MonoIcon>
  ),
  "C# OOPs": (
    <MonoIcon>
      <path d="M8.4 4.4c-.8-.5-1.8-.6-2.7-.3-1 .3-1.7 1.2-1.7 2.2s.7 1.9 1.7 2.2c.9.3 1.9.2 2.7-.3" />
      <path d="M10.4 6.4h1.6v1.2h-1.6V8h1.6v1.2h-1.6v1.2H9.2V6.4h1.2Z" />
      <rect x="3.6" y="9.6" width="3.2" height="2.4" rx="0.4" />
      <rect x="9.2" y="9.6" width="3.2" height="2.4" rx="0.4" />
    </MonoIcon>
  ),
  JavaScript: (
    <MonoIcon>
      <rect x="3.6" y="3.6" width="8.8" height="8.8" rx="1.2" />
      <path d="M6.4 10.4c.4.6.8.8 1.4.8.8 0 1.2-.5 1.2-1.2V6.4M10 10.4c.4.6.8.8 1.4.8" />
    </MonoIcon>
  ),
  "Tailwind CSS": (
    <MonoIcon>
      <path d="M8 4.8c-1.4 0-2.2.8-2.6 2 1-.5 1.8-.2 2.4.4l.4.6c.5-.7 1.3-1.2 2.4-1.2 1.4 0 2.2.8 2.6 2-1-.5-1.8-.2-2.4.4l-.4.6Z" />
      <path d="M5.2 9.6c-1.4 0-2.2.8-2.6 2 1-.5 1.8-.2 2.4.4l.4.6" />
    </MonoIcon>
  ),
  GitHub: (
    <MonoIcon>
      <path d="M6.4 12.4c-2.4-.6-4-2.4-4-4.4 0-2.4 2-4.4 4.8-4.4s4.8 2 4.8 4.4c0 2-1.6 3.8-4 4.4v-1.6c0-.2.2-.4.4-.4.8-.2 1.2-.8 1.2-1.4 0-.8-.6-1.4-1.4-1.6.6-.2 1-.8 1-1.4 0-.6-.2-1-.6-1.4.6-.2 1-1 1-1.8 0-1-.8-1.8-1.8-1.8-.5 0-1 .2-1.4.4-.4-.8-1.2-1.4-2.2-1.4-1 0-1.8.6-2.2 1.4-.4-.2-.9-.4-1.4-.4-1 0-1.8.8-1.8 1.8 0 .8.4 1.4 1 1.8-.4.4-.6.8-.6 1.4 0 .6.4 1.2 1 1.4-.8.2-1.4.8-1.4 1.6 0 .6.4 1.2 1.2 1.4.2 0 .4.2.4.4v1.6Z" />
    </MonoIcon>
  ),
  HTML5: (
    <MonoIcon>
      <path d="M4.4 3.2h7.2l-.6 8.4-3 1-3-1L4.4 3.2Z" />
      <path d="M8 5.2v5.6l1.6-.4.3-3.2H7.2l.1-1.2h2.6l.1-1.2H6.8l.1-1.2h4.2l-.2 2.4H9.2l-.2 2L8 10.4V5.2Z" />
    </MonoIcon>
  ),
  Bootstrap: (
    <MonoIcon>
      <rect x="3.6" y="3.6" width="8.8" height="8.8" rx="1.2" />
      <path d="M5.6 5.2h2.8c1.4 0 2.2.7 2.2 1.8s-.8 1.8-2.2 1.8H5.6V5.2Zm0 3.6h3c1 0 1.6.5 1.6 1.3s-.6 1.3-1.6 1.3H5.6V8.8Z" />
    </MonoIcon>
  ),
  CSS3: (
    <MonoIcon>
      <path d="M4.4 3.2h7.2l-.6 8.4-3 1-3-1L4.4 3.2Z" />
      <path d="M8 5.2v5.6l1.6-.4.3-3.2H7.6l.4 3.2-.2.1-.8.2-.8-.2-.1-.1.1-1H6.4l.2 1.6 1.4.4 1.4-.4.3-3H6.8l.1-1.2h4.4l.1-1.2H6.8l.1-1.2h4.2l-.2 2.4H8.8l-.2 2Z" />
    </MonoIcon>
  ),
  AWS: (
    <MonoIcon>
      <path d="M4.4 10.4c2.2 1.2 5 1.2 7.2 0" />
      <path d="M8.2 4.8 10.4 8.8H9.4l-.4-.8H7l-.4.8H5.6L8.2 4.8Z" />
    </MonoIcon>
  ),
  "LLM Applications": (
    <MonoIcon>
      <circle cx="5" cy="6" r="1" />
      <circle cx="8" cy="4.8" r="1" />
      <circle cx="11" cy="6" r="1" />
      <rect x="4.8" y="8.4" width="6.4" height="2.4" rx="0.5" />
    </MonoIcon>
  ),
  "LLM Workflows": (
    <MonoIcon>
      <circle cx="4.8" cy="5.6" r="1" />
      <circle cx="8" cy="4.4" r="1" />
      <circle cx="11.2" cy="5.6" r="1" />
      <circle cx="8" cy="8.8" r="1" />
      <path d="M5.4 6 7.2 8M9.6 5.2 8.2 8M10.6 6 8.8 8" />
      <path d="M10 10.4h2.4l-.8 1.2-.8-1.2Z" />
    </MonoIcon>
  ),
  "Prompt Engineering": (
    <MonoIcon>
      <rect x="3.6" y="4.4" width="8.8" height="5.6" rx="0.8" />
      <path d="M5.2 6.4h5.6M5.2 8h3.6" />
      <path d="M10.8 3.6 11.8 5.6 9.8 5.2Z" />
    </MonoIcon>
  ),
  "AI-Assisted Development": (
    <MonoIcon>
      <path d="M4.2 6.2 6 8 4.2 9.8M11.8 6.2 10 8l1.8 1.8" />
      <path d="M8 4.4v1.2M8 10.4v1.2M11.2 5.2l-1 .8M5.8 10l1 .8" />
    </MonoIcon>
  ),
  "API Integration": (
    <MonoIcon>
      <circle cx="5.2" cy="8" r="1.4" />
      <circle cx="10.8" cy="8" r="1.4" />
      <path d="M6.6 8h2.8" />
      <path d="M3.6 5.2h8.8M3.6 10.8h8.8" />
    </MonoIcon>
  ),
  "Voice Recognition": (
    <MonoIcon>
      <path d="M3.6 8c0-2.4 2-4.4 4.4-4.4s4.4 2 4.4 4.4" />
      <path d="M4.4 8h1.2M6.8 6.4v3.2M8 5.6v4.8M9.2 6.8v2.4M10.4 8h1.2" />
    </MonoIcon>
  ),
  "AI Tools": (
    <MonoIcon>
      <path d="M5.2 4.2h5.6l-.4 7.4H5.6l-.4-7.4Z" />
      <path d="M6.6 7.8h2.8M8 6.4v2.8" />
      <path d="M11.6 4.6v1.2M12.2 5.2h-1.2" />
    </MonoIcon>
  ),
  "Chat Interface": (
    <MonoIcon>
      <path d="M3.6 4.8h5.6a1 1 0 0 1 1 1v2.8a1 1 0 0 1-1 1H6.4L4.4 10.8V5.8a1 1 0 0 1 1-1Z" />
      <path d="M8.8 6.4h3.6a1 1 0 0 1 1 1v2.4a1 1 0 0 1-1 1h-1.6L9.6 12v-2.4H8.8a1 1 0 0 1-1-1V7.4a1 1 0 0 1 1-1Z" />
    </MonoIcon>
  ),
  "Customer Support": (
    <MonoIcon>
      <path d="M4.2 7.2c0-2 1.6-3.6 3.6-3.6h.4c2 0 3.6 1.6 3.6 3.6v2.2H4.2V7.2Z" />
      <path d="M3.4 9.4h1.4v1.2c0 .8 2 1.4 3.8 1.4s3.8-.6 3.8-1.4V9.4" />
    </MonoIcon>
  ),
  "Customer Success": (
    <MonoIcon>
      <path d="M3.8 11 6.2 8.6l1.8 1.4 3.6-4" />
      <circle cx="5.2" cy="5.4" r="1.2" />
      <path d="M8.8 5.4h4.4" />
    </MonoIcon>
  ),
  "Technical Support": (
    <MonoIcon>
      <path d="M5.6 4.8 6.8 3.6h2.4l1.2 1.2v2.4l-1.6 1.6H7.2L5.6 7.2V4.8Z" />
      <path d="M6.4 9.6v1.6c0 .8.6 1.4 1.6 1.4s1.6-.6 1.6-1.4V9.6" />
    </MonoIcon>
  ),
  "Product Thinking": (
    <MonoIcon>
      <rect x="4.4" y="5.6" width="7.2" height="5.6" rx="0.7" />
      <path d="M6.4 5.6V4.8c0-.7.6-1.2 1.4-1.2h.4c.8 0 1.4.5 1.4 1.2v.8" />
      <path d="M8 7.6v2.2" />
    </MonoIcon>
  ),
  "Cross-functional Collaboration": (
    <MonoIcon>
      <circle cx="5.2" cy="6.2" r="1.2" />
      <circle cx="10.8" cy="6.2" r="1.2" />
      <circle cx="8" cy="10.4" r="1.2" />
      <path d="M6.2 6.8 7.4 9.6M9.8 6.8 8.6 9.6M6.4 6.6h3.2" />
    </MonoIcon>
  ),
  "Issue Resolution": (
    <MonoIcon>
      <circle cx="8" cy="8" r="3.6" />
      <path d="M5.8 8.2 7.2 9.6 10.4 6.4" />
    </MonoIcon>
  ),
  "API Design": (
    <MonoIcon>
      <rect x="3.2" y="4.4" width="9.6" height="7.2" rx="0.8" />
      <path d="M5.2 7h5.6M5.2 8.8h3.6" />
      <path d="M11.2 3.6 12.4 5.2 10.4 4.8Z" />
    </MonoIcon>
  ),
  "Database Design": (
    <MonoIcon>
      <ellipse cx="8" cy="5.4" rx="4" ry="1.3" />
      <path d="M4 5.4v3.2c0 .7 1.8 1.3 4 1.3s4-.6 4-1.3V5.4" />
      <path d="M5.2 10.2h5.6M11.2 4.2 12.4 5.4 11.2 6.6" />
    </MonoIcon>
  ),
  Documentation: (
    <MonoIcon>
      <rect x="4.2" y="3.4" width="7.6" height="9.2" rx="0.8" />
      <path d="M5.8 6h4.4M5.8 7.6h4.4M5.8 9.2h2.8" />
    </MonoIcon>
  ),
  "Testing & Quality Assurance": (
    <MonoIcon>
      <path d="M4.8 4.2h6.4l1.2 1.8v5.2H3.6V6l1.2-1.8Z" />
      <path d="M6.2 9.2 7.4 10.4 9.8 7.6" />
    </MonoIcon>
  ),
  "Code Review": (
    <MonoIcon>
      <rect x="3.6" y="4.8" width="8.8" height="6.4" rx="0.7" />
      <circle cx="8" cy="7.6" r="1.8" />
      <path d="M9.4 6.8 10.8 5.4" />
    </MonoIcon>
  ),
  "Responsive Design": (
    <MonoIcon>
      <rect x="3.2" y="4.4" width="4.8" height="7.2" rx="0.6" />
      <rect x="9.2" y="6" width="3.6" height="5.6" rx="0.5" />
      <path d="M5.6 11.6h.8" />
    </MonoIcon>
  ),
  Troubleshooting: (
    <MonoIcon>
      <circle cx="7.2" cy="7.2" r="2.8" />
      <path d="M9.4 9.4 12 12M7.2 5.8v2.2" />
    </MonoIcon>
  ),
  "Business Analysis": (
    <MonoIcon>
      <path d="M4.2 11.2V8.4M7.2 11.2V6.8M10.2 11.2V5.2" />
      <path d="M3.6 11.6h8.8" />
    </MonoIcon>
  ),
  "Root Cause Analysis": (
    <MonoIcon>
      <circle cx="8" cy="6.4" r="2.2" />
      <circle cx="8" cy="6.4" r="0.7" fill="currentColor" stroke="none" />
      <path d="M8 8.6v2.2M6.4 12h3.2" />
    </MonoIcon>
  ),
  "Performance Optimization": (
    <MonoIcon>
      <path d="M9.2 3.6 5.6 8.8h2.8L6.8 12.4l3.6-5.2H7.6l1.6-3.6Z" />
    </MonoIcon>
  ),
  "Process Improvement": (
    <MonoIcon>
      <path d="M10.8 4.8c-2.2 0-4 1.6-4 3.6s1.8 3.6 4 3.6" />
      <path d="M10.8 8.4h2.4l-1.2 2-1.2-2Z" />
      <path d="M5.2 11.2c2.2 0 4-1.6 4-3.6S7.4 4 5.2 4" />
    </MonoIcon>
  ),
  "Requirements Analysis": (
    <MonoIcon>
      <rect x="4" y="3.6" width="8" height="9.2" rx="0.8" />
      <path d="M5.6 6.4h4.8M5.6 8h4.8M5.6 9.6h2.8" />
      <circle cx="11.6" cy="10" r="1.8" />
      <path d="M11.1 10.1l.4.4.9-.9" />
    </MonoIcon>
  ),
  "Release Readiness": (
    <MonoIcon>
      <path d="M8 3.2 9.6 7.2H12l-2.4 1.8.9 2.8L8 10.4 5.5 11.8l.9-2.8L4 7.2h2.4L8 3.2Z" />
      <path d="M6 12.8h4" />
    </MonoIcon>
  ),
  "Workflow Coordination": (
    <MonoIcon>
      <rect x="3.2" y="4.4" width="3.6" height="2.8" rx="0.5" />
      <rect x="9.2" y="4.4" width="3.6" height="2.8" rx="0.5" />
      <rect x="6.2" y="8.8" width="3.6" height="2.8" rx="0.5" />
      <path d="M5 7.2 6.8 8.8M11 7.2 9.2 8.8" />
    </MonoIcon>
  ),
};

const skillIconAliases = {
  JS: "JavaScript",
  Tailwinds: "Tailwind CSS",
  "Software Documentation": "Documentation",
  "Voice Interfaces": "Voice Recognition",
  "Chat Interfaces": "Chat Interface",
  "Functional Collaboration": "Cross-functional Collaboration",
  "Testing & QA": "Testing & Quality Assurance",
};

function normalizeSkillLabel(label) {
  return String(label ?? "").trim().replace(/\s+/g, " ");
}

export default function CapabilitySkillIcon({ label }) {
  const normalized = normalizeSkillLabel(label);
  const iconKey = skillIconAliases[normalized] ?? normalized;
  return skillIcons[iconKey] ?? <FallbackIcon />;
}
