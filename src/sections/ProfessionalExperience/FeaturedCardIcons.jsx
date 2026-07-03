function ChipGlyph({ children }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <text
        x="8"
        y="11"
        textAnchor="middle"
        fill="var(--color-primary)"
        fontSize="6.5"
        fontFamily="var(--font-body)"
        fontWeight="600"
      >
        {children}
      </text>
    </svg>
  );
}

function SoftIcon({ fill = "var(--color-primary-soft)", children }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill={fill} />
      {children}
    </svg>
  );
}

const skillIcons = {
  Python: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path fill="#3776AB" d="M8 2.2c-2.7 0-2.5.01-3.4.05-.9.04-1.5.19-2 .39-.55.21-.95.47-1.37.89-.42.42-.67.82-.89 1.37-.2.49-.35 1.08-.39 1.97C.01 7.2 2.2 7.2 2.2 7.2V8.8c0 0-2.2 0-2.33.16-.13.16-.05 1-.05 1.64 0 .64-.07 1.48.05 1.64.13.16 2.33.16 2.33.16V12c0 2.7 2.1 4.8 4.8 4.8h1.4V15c0 0 2.5.01 3.4-.05.9-.04 1.5-.19 2-.39.55-.21.95-.47 1.37-.89.42-.42.67-.82.89-1.37.2-.49.35-1.08.39-1.97.04-.89.05-1.16.05-1.8 0-.64.07-1.48-.05-1.64-.13-.16-2.33-.16-2.33-.16V8.8c0 0 2.2 0 2.33-.16.13-.16.05-1 .05-1.64Z" />
      <path fill="#FFD43B" d="M13.3 8.4c0 2.7-2.1 4.8-4.8 4.8H7.2V15c0 0 2.5-.01 3.4-.05.9-.04 1.5-.19 2-.39.55-.21.95-.47 1.37-.89.42-.42.67-.82.89-1.37.2-.49.35-1.08.39-1.97.04-.89.05-1.16.05-1.8 0-.64.07-1.48-.05-1.64-.13-.16-2.33-.16-2.33-.16V12c0 0 2.2 0 2.33-.16.13-.16.05-1 .05-1.64Z" />
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#092E20" />
      <path fill="#fff" d="M3.5 4.5h2.1v7H3.5v-7Zm3.2 0H9c1.9 0 3.1 1.1 3.1 3 0 2-1.2 3.1-3.3 3.1H6.7V4.5Zm2 4.7c.9 0 1.4-.5 1.4-1.4s-.5-1.3-1.4-1.3H8.7v2.7Z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="1.3" fill="#61DAFB" />
      <ellipse cx="8" cy="8" rx="6.2" ry="2.3" stroke="#61DAFB" strokeWidth="0.9" fill="none" />
      <ellipse cx="8" cy="8" rx="6.2" ry="2.3" stroke="#61DAFB" strokeWidth="0.9" fill="none" transform="rotate(60 8 8)" />
      <ellipse cx="8" cy="8" rx="6.2" ry="2.3" stroke="#61DAFB" strokeWidth="0.9" fill="none" transform="rotate(120 8 8)" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="2" fill="#F7DF1E" />
      <path fill="#000" d="M10.4 11.2c-.4.6-.8 1.1-1.7 1.1-.9 0-1.4-.6-1.4-1.3h1.2c0 .3.1.4.3.4.2 0 .4-.1.5-.5l.6-2.3H8.1V8h3.6l-.3 3.2ZM6.6 8 6.1 10.8c-.1.4-.3.8-.8.8-.4 0-.7-.2-.7-.7 0-.2 0-.3.1-.5l.7-2.4h1.2Z" />
    </svg>
  ),
  "C#": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="2" fill="#512BD4" />
      <path
        fill="#fff"
        d="M9.1 5.2c-.9-.6-2-.7-3-.4-1.2.4-2 1.5-2 2.8 0 1.3.8 2.4 2 2.8 1 .3 2.1.2 3-.4l.6.9c-1 .7-2.2 1-3.4.7C4.8 11.2 3.6 9.5 3.6 7.6c0-1.9 1.2-3.6 3-4.2 1.2-.4 2.4-.2 3.4.5l-.9.3Z"
      />
      <path
        fill="#fff"
        d="M11.2 6.1h1.1v.9h-1.1V8h1.1v.9h-1.1v1.1h-1.1V6.1h1.1Z"
      />
    </svg>
  ),
  "C# OOPs": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="2" fill="#512BD4" />
      <path
        fill="#fff"
        d="M8.4 4.2c-.8-.5-1.8-.6-2.7-.3-1 .3-1.7 1.2-1.7 2.2s.7 1.9 1.7 2.2c.9.3 1.9.2 2.7-.3l.5.7c-.8.6-1.8.8-2.8.6-1.4-.4-2.4-1.6-2.4-3 0-1.4 1-2.6 2.4-3 .9-.3 2-.1 2.8.5l-.7.6Z"
      />
      <rect x="9.2" y="9.1" width="3.2" height="2.4" rx="0.5" fill="#B794F6" />
      <rect x="8.1" y="10.6" width="2.4" height="1.8" rx="0.4" fill="#fff" opacity="0.95" />
      <rect x="10.3" y="10.6" width="2.4" height="1.8" rx="0.4" fill="#fff" opacity="0.95" />
    </svg>
  ),
  OOP: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="5.2" y="3.2" width="5.6" height="3.6" rx="0.7" fill="var(--color-primary)" />
      <path
        d="M8 6.8v1.2M5.8 9.2h4.4"
        stroke="var(--color-primary)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <rect x="3.4" y="9.8" width="3.8" height="2.8" rx="0.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.7" />
      <rect x="8.8" y="9.8" width="3.8" height="2.8" rx="0.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.7" />
    </svg>
  ),
  OOPs: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="5.2" y="3.2" width="5.6" height="3.6" rx="0.7" fill="var(--color-primary)" />
      <path
        d="M8 6.8v1.2M5.8 9.2h4.4"
        stroke="var(--color-primary)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <rect x="3.4" y="9.8" width="3.8" height="2.8" rx="0.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.7" />
      <rect x="8.8" y="9.8" width="3.8" height="2.8" rx="0.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.7" />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#00758F" />
      <ellipse cx="8" cy="5.2" rx="4.2" ry="1.5" fill="#fff" />
      <path
        fill="#fff"
        d="M3.8 5.2v4.8c0 .9 1.9 1.6 4.2 1.6s4.2-.7 4.2-1.6V5.2"
      />
      <ellipse cx="8" cy="10" rx="4.2" ry="1.5" fill="#fff" opacity="0.88" />
      <path
        d="M6.2 7.4h3.6M6.6 8.6h2.8"
        stroke="#00758F"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  API: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="2.8" y="4.2" width="10.4" height="7.6" rx="1" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.75" />
      <path
        d="M5 7.2h6M5 9.1h4.2"
        stroke="var(--color-primary)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="11.4" cy="9.1" r="0.7" fill="var(--color-primary)" />
      <path
        d="M8 2.8v1.4M5.6 2.8h4.8"
        stroke="var(--color-primary)"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <path
        d="M3.2 8h3.2M9.6 8H12.8M6.4 8h3.2"
        stroke="var(--color-primary)"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      <circle cx="6.4" cy="8" r="1.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.7" />
      <circle cx="9.6" cy="8" r="1.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.7" />
      <path
        d="M4.8 5.2h6.4M4.8 10.8h6.4"
        stroke="var(--color-primary)"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  ),
  "AI Integration": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#7C3AED" />
      <circle cx="8" cy="6.2" r="2.1" fill="#fff" />
      <path
        d="M5.2 10.2c.8-1.2 2-1.9 2.8-1.9s2 .7 2.8 1.9"
        stroke="#fff"
        strokeWidth="0.9"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M3.2 5.2 4.4 6.4M11.6 5.2 10.4 6.4M8 3.2V4.4"
        stroke="#DDD6FE"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  LLM: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#4F46E5" />
      <circle cx="4.8" cy="6" r="1.1" fill="#C7D2FE" />
      <circle cx="8" cy="4.8" r="1.1" fill="#E0E7FF" />
      <circle cx="11.2" cy="6" r="1.1" fill="#C7D2FE" />
      <circle cx="6.4" cy="9.2" r="1.1" fill="#E0E7FF" />
      <circle cx="9.6" cy="9.2" r="1.1" fill="#C7D2FE" />
      <path
        d="M5.2 6.2 7.2 5.2M8.8 5.2 10.8 6.2M5.8 8.4 7.4 8.8M8.6 8.8 10.2 8.4"
        stroke="#fff"
        strokeWidth="0.55"
        opacity="0.9"
      />
    </svg>
  ),
  "Speech-to-Text": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="6.1" y="3.2" width="3.8" height="5.8" rx="1.9" fill="var(--color-primary)" />
      <path d="M4.8 8.2c0 1.8 1.4 3.2 3.2 3.2s3.2-1.4 3.2-3.2" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" />
      <path d="M8 11.4v1.4M6.2 12.8h3.6" stroke="var(--color-primary)" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M3.2 13.2h9.6" stroke="var(--color-primary)" strokeWidth="0.7" strokeLinecap="round" opacity="0.55" />
    </svg>
  ),
  "Text-to-Speech (TTS)": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <path d="M4.2 6.8 6.8 5.2v5.6L4.2 9.2V6.8Z" fill="var(--color-primary)" />
      <path d="M10.2 6.4c.8.8 1.2 1.7 1.2 2.6s-.4 1.8-1.2 2.6" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M11.4 5c1.2 1.2 1.8 2.5 1.8 4s-.6 2.8-1.8 4" stroke="var(--color-primary)" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.65" />
    </svg>
  ),
  "Responsive Design": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="2.8" y="4.2" width="6.4" height="4.8" rx="0.7" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.7" />
      <rect x="8.8" y="6.2" width="4.4" height="7.2" rx="0.8" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.7" />
      <path d="M4.6 6.4h2.8M4.6 7.6h2" stroke="var(--color-primary)" strokeWidth="0.55" strokeLinecap="round" />
    </svg>
  ),
  "Component Architecture": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="2.8" y="2.8" width="10.4" height="3.2" rx="0.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <rect x="2.8" y="7.2" width="4.8" height="3.2" rx="0.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <rect x="8.4" y="7.2" width="4.8" height="3.2" rx="0.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <rect x="2.8" y="11.6" width="10.4" height="1.6" rx="0.4" fill="var(--color-primary)" opacity="0.25" />
    </svg>
  ),
  "Git & GitHub": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#24292F" />
      <path
        fill="#fff"
        d="M8 3.2c-2.7 0-4.8 2.2-4.8 4.9 0 2.2 1.4 4 3.4 4.6.2 0 .3-.1.3-.3v-1.1c-1.4.3-1.7-.7-1.7-.7-.2-.6-.6-.7-.6-.7-.5-.3 0-.3 0-.3.5 0 .8.5.8.5.5.8 1.2.6 1.5.4.1-.4.2-.6.4-.8-1.1-.1-2.3-.6-2.3-2.5 0-.6.2-1 .5-1.4 0-.1-.2-.7.1-1.4 0 0 .4-.1 1.4.5.4-.1.9-.2 1.3-.2s.9.1 1.3.2c1-.6 1.4-.5 1.4-.5.3.7.1 1.3.1 1.4.3.4.5.8.5 1.4 0 1.9-1.2 2.4-2.3 2.5.2.2.4.5.4 1v1.5c0 .2.1.3.3.3 2-.6 3.4-2.4 3.4-4.6C12.8 5.4 10.7 3.2 8 3.2Z"
      />
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#FF6C37" />
      <path
        fill="#fff"
        d="M8 3.4 4.6 8.2h2.2V12l3.2-4.8H7.8L8 3.4Z"
      />
    </svg>
  ),
  "VS Code": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#007ACC" />
      <path
        fill="#fff"
        d="M10.8 3.2 5.2 7.2l2 1.1-2 1.1 5.6 4V3.2Zm-5.2 8.8 1.4-.8v-6.8l-1.4-.8v8.4Z"
      />
    </svg>
  ),
  "Supply Chain": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#0F766E" />
      <rect x="2.4" y="6" width="3.4" height="2.8" rx="0.5" fill="#fff" opacity="0.95" />
      <rect x="6.3" y="6" width="3.4" height="2.8" rx="0.5" fill="#CCFBF1" />
      <rect x="10.2" y="6" width="3.4" height="2.8" rx="0.5" fill="#fff" opacity="0.95" />
      <path d="M4.1 5.2V4M8 5.2V4M11.9 5.2V4M4.1 4h7.8" stroke="#99F6E4" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M2.4 10.2h11.2" stroke="#5EEAD4" strokeWidth="0.7" strokeLinecap="round" />
    </svg>
  ),
  Procurement: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#EA580C" />
      <path d="M4.2 4.8h7.6l-.8 7.2H5L4.2 4.8Z" fill="#fff" />
      <path d="M6.2 3.6h3.6l.5 1.2H5.7l.5-1.2Z" fill="#FDBA74" />
      <path d="M6.6 7.4h2.8" stroke="#EA580C" strokeWidth="0.75" strokeLinecap="round" />
    </svg>
  ),
  Operations: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#4F46E5" />
      <circle cx="8" cy="8" r="2.4" fill="#fff" />
      <path
        d="M8 3v1.6M8 11.4v1.6M3 8h1.6M11.4 8h1.6M4.9 4.9l1.1 1.1M10 10l1.1 1.1M4.9 11.1l1.1-1.1M10 6l1.1-1.1"
        stroke="#C7D2FE"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="0.9" fill="#4F46E5" />
    </svg>
  ),
  "Customer Support": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#0EA5E9" />
      <path d="M4.2 7.2c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v2.4H4.2V7.2Z" fill="#fff" />
      <path d="M3.4 9.6h1.4v1.4c0 .8 2.2 1.4 4.2 1.4s4.2-.6 4.2-1.4V9.6" stroke="#fff" strokeWidth="0.7" fill="none" />
    </svg>
  ),
  CRM: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#2563EB" />
      <circle cx="6" cy="6.4" r="1.5" fill="#fff" />
      <circle cx="10.4" cy="6.4" r="1.5" fill="#DBEAFE" />
      <path d="M3.8 11.2c.6-1.4 1.8-2.2 2.2-2.2s1.6.8 2.2 2.2M9.8 11.2c.6-1.4 1.4-2.2 1.8-2.2s1.2.8 1.8 2.2" stroke="#fff" strokeWidth="0.75" fill="none" strokeLinecap="round" />
    </svg>
  ),
  "CRM Systems": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#1D4ED8" />
      <ellipse cx="8" cy="5.2" rx="3.6" ry="1.2" fill="#DBEAFE" />
      <path d="M4.4 5.2v3.2c0 .7 1.6 1.2 3.6 1.2s3.6-.5 3.6-1.2V5.2" fill="#fff" />
      <circle cx="5.8" cy="10.2" r="1.2" fill="#fff" />
      <circle cx="10.2" cy="10.2" r="1.2" fill="#BFDBFE" />
      <path d="M6.4 11.4h3.2" stroke="#93C5FD" strokeWidth="0.65" strokeLinecap="round" />
    </svg>
  ),
  Communication: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <path d="M3.2 4.8h7.2a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1H6.4L4.2 11.8V5.8a1 1 0 0 1 1-1Z" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <path d="M6.2 7.2h4.4M6.2 8.6h2.8" stroke="var(--color-primary)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M9.6 6.4h3.2v2.8l-1.6-1-1.6 1V6.4Z" fill="var(--color-primary)" opacity="0.85" />
    </svg>
  ),
  "Problem Solving": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#F59E0B" />
      <path d="M8 3.2c-1.8 0-3.2 1.3-3.2 3 0 1.2.7 2.2 1.7 2.8L6 11.2h4l-.5-2.2c1-.6 1.7-1.6 1.7-2.8 0-1.7-1.4-3-3.2-3Z" fill="#fff" />
      <path d="M6.6 12.4h2.8" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M8 5.2v1.8M8 8.4h.01" stroke="#F59E0B" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  ),
  "English Training": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#1D4ED8" />
      <path d="M4.2 4.2h7.6v7.6H4.2V4.2Z" fill="#fff" />
      <path d="M6 6.4h4.4M6 8h4.4M6 9.6H8.4" stroke="#1D4ED8" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M11.2 5.2v6.4" stroke="#fff" strokeWidth="0.8" />
    </svg>
  ),
  Sales: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#16A34A" />
      <path d="M3.6 11.2 6.4 8l2 1.8 3.6-4.2" stroke="#fff" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.8 5.6H12v1.8" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Sales Associate": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#15803D" />
      <circle cx="7" cy="5.8" r="1.5" fill="#fff" />
      <path d="M4.2 11c.7-1.6 1.8-2.4 2.8-2.4s2.1.8 2.8 2.4" stroke="#fff" strokeWidth="0.75" fill="none" strokeLinecap="round" />
      <path d="M10.8 7.2h2.4l-.4 4.8H9.2l-.4-4.8Z" fill="#BBF7D0" />
      <path d="M11 6.8v.4" stroke="#BBF7D0" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M10.4 9.6h2.4" stroke="#15803D" strokeWidth="0.55" strokeLinecap="round" />
    </svg>
  ),
  Biotechnology: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#059669" />
      <path d="M5.6 3.6c1.2 2.4 1.2 6.4 0 8.8M10.4 3.6c-1.2 2.4-1.2 6.4 0 8.8" stroke="#fff" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M4.8 6.4h6.4M4.4 9.6h7.2" stroke="#A7F3D0" strokeWidth="0.7" strokeLinecap="round" />
    </svg>
  ),
  "Client Relations": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <path d="M4.8 7.2c0-1.2 1.4-2.2 3.2-2.2s3.2 1 3.2 2.2" stroke="var(--color-primary)" strokeWidth="0.75" fill="none" />
      <path d="M3.6 10.4c.8-1.2 2.2-1.8 4.4-1.8s3.6.6 4.4 1.8" stroke="var(--color-primary)" strokeWidth="0.75" fill="none" strokeLinecap="round" />
      <circle cx="11.6" cy="5.6" r="1.2" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.6" />
    </svg>
  ),
  Teamwork: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <circle cx="5.6" cy="6.2" r="1.4" fill="var(--color-primary)" />
      <circle cx="10.4" cy="6.2" r="1.4" fill="var(--color-primary)" opacity="0.75" />
      <path d="M2.8 11.4c.8-1.6 2-2.4 2.8-2.4s2 .8 2.8 2.4M8.8 11.4c.8-1.6 1.8-2.4 2.6-2.4s1.6.8 2.2 2.4" stroke="var(--color-primary)" strokeWidth="0.75" fill="none" strokeLinecap="round" />
    </svg>
  ),
  SAP: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#0FAAFF" />
      <path
        d="M4.4 5.4c1-.7 2.2-.7 3.1 0 .8.6.8 1.5 0 2.1-.5.4-1.2.5-1.9.4-.2.9.2 1.6.7 2 .8.6 1.9.4 2.6-.4"
        stroke="#fff"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M9.4 5.6c.8.6 1 1.6.3 2.3-.5.5-1.1.7-1.7.6"
        stroke="#fff"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  Excel: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#217346" />
      <path d="M4.2 3.8h5.2l3.4 3.4v7.2H4.2V3.8Z" fill="#fff" />
      <path d="M9.4 3.8v3.4h3.4" fill="#E8F5EE" />
      <path d="M5.6 8.2h4.8M5.6 10h4.8M7.2 6.8v5.2" stroke="#217346" strokeWidth="0.55" />
    </svg>
  ),
  Reporting: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="3.2" y="3.6" width="9.6" height="9.6" rx="0.8" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <path d="M5.2 10.4V8.4M7.2 10.4V7.2M9.2 10.4V6.4" stroke="var(--color-primary)" strokeWidth="0.85" strokeLinecap="round" />
      <path d="M5 5.2h6" stroke="var(--color-primary)" strokeWidth="0.55" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  Inventory: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="3" y="4" width="4" height="3.2" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <rect x="8.8" y="4" width="4" height="3.2" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <rect x="3" y="8.4" width="4" height="3.2" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <rect x="8.8" y="8.4" width="4" height="3.2" rx="0.5" fill="var(--color-primary)" opacity="0.2" stroke="var(--color-primary)" strokeWidth="0.65" />
    </svg>
  ),
  Logistics: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="var(--color-primary-soft)" />
      <rect x="2.8" y="6.8" width="6.8" height="3.6" rx="0.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <path d="M9.6 7.8h2.4l1.2 2.6v2H9.6V7.8Z" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" strokeLinejoin="round" />
      <circle cx="5.2" cy="11.2" r="0.9" fill="var(--color-primary)" />
      <circle cx="11.4" cy="11.2" r="0.9" fill="var(--color-primary)" />
    </svg>
  ),
  Documentation: (
    <SoftIcon>
      <rect x="4.2" y="3.4" width="7.6" height="9.2" rx="0.8" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <path d="M5.8 6h4.4M5.8 7.6h4.4M5.8 9.2h2.8" stroke="var(--color-primary)" strokeWidth="0.6" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Issue Resolution": (
    <SoftIcon fill="#0EA5E9">
      <circle cx="8" cy="8" r="3.6" fill="#fff" />
      <path d="M5.8 8.2 7.2 9.6 10.4 6.4" stroke="#0EA5E9" strokeWidth="0.85" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 3.2v1.2M8 11.6v1.2" stroke="#BAE6FD" strokeWidth="0.65" strokeLinecap="round" />
    </SoftIcon>
  ),
  MySQL: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#00758F" />
      <ellipse cx="8" cy="5.2" rx="4.2" ry="1.5" fill="#fff" />
      <path fill="#fff" d="M3.8 5.2v4.8c0 .9 1.9 1.6 4.2 1.6s4.2-.7 4.2-1.6V5.2" />
      <ellipse cx="8" cy="10" rx="4.2" ry="1.5" fill="#fff" opacity="0.88" />
      <path d="M6.4 7.6c.8.6 1.6.9 2.4.6" stroke="#00758F" strokeWidth="0.7" fill="none" strokeLinecap="round" />
    </svg>
  ),
  SQLite: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#003B57" />
      <ellipse cx="8" cy="5.2" rx="4.2" ry="1.5" fill="#7CC5E2" />
      <path fill="#7CC5E2" d="M3.8 5.2v4.8c0 .9 1.9 1.6 4.2 1.6s4.2-.7 4.2-1.6V5.2" />
      <path d="M8 3.6v8.8" stroke="#fff" strokeWidth="0.55" opacity="0.45" />
    </svg>
  ),
  "LLM Applications": (
    <SoftIcon fill="#4F46E5">
      <circle cx="5.2" cy="6.4" r="1.1" fill="#C7D2FE" />
      <circle cx="8" cy="5.2" r="1.1" fill="#E0E7FF" />
      <circle cx="10.8" cy="6.4" r="1.1" fill="#C7D2FE" />
      <rect x="4.8" y="8.4" width="6.4" height="2.4" rx="0.5" fill="#fff" opacity="0.95" />
    </SoftIcon>
  ),
  "Prompt Engineering": (
    <SoftIcon fill="#7C3AED">
      <rect x="3.6" y="4.4" width="8.8" height="5.6" rx="0.8" fill="#fff" />
      <path d="M5.2 6.4h5.6M5.2 8h3.6" stroke="#7C3AED" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M10.8 3.6 11.8 5.6 9.8 5.2Z" fill="#DDD6FE" />
    </SoftIcon>
  ),
  "AI-Assisted Development": (
    <SoftIcon fill="#4F46E5">
      <path d="M4.2 6.2 6 8 4.2 9.8M11.8 6.2 10 8l1.8 1.8" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 4.4v1.2M8 10.4v1.2M11.2 5.2l-1 .8M5.8 10l1 .8" stroke="#C7D2FE" strokeWidth="0.6" strokeLinecap="round" />
    </SoftIcon>
  ),
  "API Integration": (
    <SoftIcon>
      <circle cx="5.2" cy="8" r="1.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <circle cx="10.8" cy="8" r="1.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <path d="M6.7 8h2.6" stroke="var(--color-primary)" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M3.6 5.2h8.8M3.6 10.8h8.8" stroke="var(--color-primary)" strokeWidth="0.55" strokeLinecap="round" opacity="0.45" />
    </SoftIcon>
  ),
  "Technical Support": (
    <SoftIcon fill="#0284C7">
      <path d="M4.2 7.2c0-2 1.6-3.6 3.6-3.6h.4c2 0 3.6 1.6 3.6 3.6v2.2H4.2V7.2Z" fill="#fff" />
      <path d="M3.4 9.4h1.4v1.2c0 .8 2 1.4 3.8 1.4s3.8-.6 3.8-1.4V9.4" stroke="#fff" strokeWidth="0.65" fill="none" />
      <path d="M8 4.8v1" stroke="#BAE6FD" strokeWidth="0.65" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Product Thinking": (
    <SoftIcon fill="#F59E0B">
      <rect x="4.4" y="5.6" width="7.2" height="5.6" rx="0.7" fill="#fff" />
      <path d="M6.4 5.6V4.8c0-.7.6-1.2 1.4-1.2h.4c.8 0 1.4.5 1.4 1.2v.8" stroke="#F59E0B" strokeWidth="0.65" fill="none" />
      <path d="M8 7.6v2.2" stroke="#F59E0B" strokeWidth="0.75" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Cross-functional Collaboration": (
    <SoftIcon>
      <circle cx="5.2" cy="6.2" r="1.3" fill="var(--color-primary)" />
      <circle cx="10.8" cy="6.2" r="1.3" fill="var(--color-primary)" opacity="0.75" />
      <circle cx="8" cy="10.4" r="1.3" fill="var(--color-primary)" opacity="0.55" />
      <path d="M6.2 6.8 7.4 9.6M9.8 6.8 8.6 9.6M6.4 6.6h3.2" stroke="var(--color-primary)" strokeWidth="0.6" strokeLinecap="round" />
    </SoftIcon>
  ),
  "System Architecture": (
    <SoftIcon>
      <rect x="3.2" y="3.2" width="9.6" height="2.4" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.6" />
      <rect x="3.2" y="6.8" width="4.4" height="2.4" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.6" />
      <rect x="8.4" y="6.8" width="4.4" height="2.4" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.6" />
      <rect x="3.2" y="10.4" width="9.6" height="2" rx="0.4" fill="var(--color-primary)" opacity="0.22" />
    </SoftIcon>
  ),
  "API Design": (
    <SoftIcon>
      <rect x="3.2" y="4.4" width="9.6" height="7.2" rx="0.8" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <path d="M5.2 7h5.6M5.2 8.8h3.6" stroke="var(--color-primary)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M11.2 3.6 12.4 5.2 10.4 4.8Z" fill="var(--color-primary)" />
    </SoftIcon>
  ),
  "Testing & Quality Assurance": (
    <SoftIcon fill="#16A34A">
      <path d="M4.8 4.2h6.4l1.2 1.8v5.2H3.6V6l1.2-1.8Z" fill="#fff" />
      <path d="M6.2 9.2 7.4 10.4 9.8 7.6" stroke="#16A34A" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </SoftIcon>
  ),
  "Code Review": (
    <SoftIcon>
      <rect x="3.6" y="4.8" width="8.8" height="6.4" rx="0.7" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.65" />
      <circle cx="8" cy="7.6" r="1.8" fill="none" stroke="var(--color-primary)" strokeWidth="0.7" />
      <path d="M9.4 6.8 10.8 5.4" stroke="var(--color-primary)" strokeWidth="0.65" strokeLinecap="round" />
    </SoftIcon>
  ),
  Troubleshooting: (
    <SoftIcon fill="#F59E0B">
      <circle cx="7.2" cy="7.2" r="2.8" fill="none" stroke="#fff" strokeWidth="0.9" />
      <path d="M9.4 9.4 12 12" stroke="#fff" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M7.2 5.8v2.2" stroke="#F59E0B" strokeWidth="0.75" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Business Analysis": (
    <SoftIcon>
      <path d="M4.2 11.2V8.4M7.2 11.2V6.8M10.2 11.2V5.2" stroke="var(--color-primary)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M3.6 11.6h8.8" stroke="var(--color-primary)" strokeWidth="0.65" strokeLinecap="round" opacity="0.45" />
    </SoftIcon>
  ),
  "Root Cause Analysis": (
    <SoftIcon fill="#DC2626">
      <circle cx="8" cy="6.4" r="2.2" fill="none" stroke="#fff" strokeWidth="0.8" />
      <circle cx="8" cy="6.4" r="0.7" fill="#fff" />
      <path d="M8 8.6v2.2M6.4 12h3.2" stroke="#fff" strokeWidth="0.7" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Performance Optimization": (
    <SoftIcon fill="#F59E0B">
      <path d="M9.2 3.6 5.6 8.8h2.8L6.8 12.4l3.6-5.2H7.6l1.6-3.6Z" fill="#fff" />
    </SoftIcon>
  ),
  "Process Improvement": (
    <SoftIcon>
      <path d="M10.8 4.8c-2.2 0-4 1.6-4 3.6s1.8 3.6 4 3.6" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M10.8 8.4h2.4l-1.2 2-1.2-2Z" fill="var(--color-primary)" />
      <path d="M5.2 11.2c2.2 0 4-1.6 4-3.6S7.4 4 5.2 4" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.55" />
    </SoftIcon>
  ),
  "Delivery Pipelines": (
    <SoftIcon>
      <circle cx="4.4" cy="8" r="1.2" fill="var(--color-primary)" />
      <circle cx="8" cy="8" r="1.2" fill="var(--color-primary)" opacity="0.75" />
      <circle cx="11.6" cy="8" r="1.2" fill="var(--color-primary)" opacity="0.55" />
      <path d="M5.6 8h1.6M9.2 8h1.6" stroke="#fff" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M4.4 5.2v5.6M11.6 5.2v5.6" stroke="var(--color-primary)" strokeWidth="0.55" strokeLinecap="round" opacity="0.35" />
    </SoftIcon>
  ),
  HTML5: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#E34F26" />
      <path d="M4.2 3.6h7.6l-.6 7.2-3.2.9-3.2-.9L4.2 3.6Z" fill="#fff" />
      <path d="M8 5.2v6.2l1.8-.5.3-3.4H7.2l.1-1.2h2.9l.1-1.4H6.1l.1-1.2h4.5l-.2 2.4H9.1l-.2 2.2L8 10.1V5.2Z" fill="#E34F26" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#1572B6" />
      <path d="M4.2 3.6h7.6l-.6 7.2-3.2.9-3.2-.9L4.2 3.6Z" fill="#fff" />
      <path d="M8 5.2v6.2l1.8-.5.3-3.4H7.4l.4 3.4-.2.1-.8.2-.8-.2-.1-.1.1-1h-1.2l.2 1.6 1.5.4 1.5-.4.3-3.2H6.8l.1-1.2h4.6l.1-1.4H6.1l.1-1.2h4.5l-.2 2.4H8Z" fill="#1572B6" />
    </svg>
  ),
  "Web Speech API (Speech-to-Text & Text-to-Speech)": (
    <SoftIcon>
      <rect x="3.2" y="4.8" width="3.2" height="5.2" rx="1.6" fill="var(--color-primary)" />
      <path d="M4.8 11.2c0 .8.6 1.4 1.4 1.4" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" />
      <path d="M9.6 6.8 11.2 5.6v4.8L9.6 9.2V6.8Z" fill="var(--color-primary)" />
      <path d="M12 7.2c.4.6.6 1.2.6 1.8s-.2 1.2-.6 1.8" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Voice Recognition": (
    <SoftIcon fill="#7C3AED">
      <path d="M3.6 8c0-2.4 2-4.4 4.4-4.4s4.4 2 4.4 4.4" stroke="#fff" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M4.4 8h1.2M6.8 6.4v3.2M8 5.6v4.8M9.2 6.8v2.4M10.4 8h1.2" stroke="#fff" strokeWidth="0.65" strokeLinecap="round" />
    </SoftIcon>
  ),
  "State Management": (
    <SoftIcon>
      <rect x="3.4" y="4" width="3.6" height="3.6" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.6" />
      <rect x="9" y="4" width="3.6" height="3.6" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.6" />
      <rect x="6.2" y="8.4" width="3.6" height="3.6" rx="0.5" fill="var(--color-primary)" opacity="0.18" stroke="var(--color-primary)" strokeWidth="0.6" />
      <path d="M5 7.2 7.2 8.2M11 7.2 8.8 8.2" stroke="var(--color-primary)" strokeWidth="0.55" />
    </SoftIcon>
  ),
  Bootstrap: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#7952B3" />
      <path fill="#fff" d="M5.2 4.8h3.4c1.8 0 2.8.9 2.8 2.2 0 .9-.5 1.6-1.3 2 .9.3 1.5 1.1 1.5 2.1 0 1.5-1.2 2.5-3.2 2.5H5.2V4.8Zm1.2 3.4h1.9c.8 0 1.2-.4 1.2-1s-.4-1-1.2-1H6.4v2Zm0 3.8h2.2c.9 0 1.4-.4 1.4-1.1s-.5-1.1-1.4-1.1H6.4v2.2Z" />
    </svg>
  ),
  Authentication: (
    <SoftIcon fill="#1D4ED8">
      <rect x="5.2" y="7.2" width="5.6" height="4.8" rx="0.8" fill="#fff" />
      <path d="M6.4 7.2V5.8c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v1.4" stroke="#fff" strokeWidth="0.75" fill="none" />
      <circle cx="8" cy="9.2" r="0.7" fill="#1D4ED8" />
    </SoftIcon>
  ),
  "CRUD Operations": (
    <SoftIcon>
      <rect x="3.2" y="3.6" width="4" height="3.6" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.55" />
      <rect x="8.8" y="3.6" width="4" height="3.6" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.55" />
      <rect x="3.2" y="8.8" width="4" height="3.6" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.55" />
      <rect x="8.8" y="8.8" width="4" height="3.6" rx="0.5" fill="var(--color-primary)" opacity="0.2" stroke="var(--color-primary)" strokeWidth="0.55" />
    </SoftIcon>
  ),
  "AI Recommendations": (
    <SoftIcon fill="#7C3AED">
      <path d="M8 3.6 9 6.2 11.6 6.6 9.8 8.4 10.4 11 8 9.6 5.6 11 6.2 8.4 4.4 6.6 7 6.2 8 3.6Z" fill="#fff" />
      <circle cx="12.4" cy="4.4" r="0.7" fill="#DDD6FE" />
    </SoftIcon>
  ),
  Streamlit: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#FF4B4B" />
      <path d="M4.8 4.8h6.4v1.6H8.8v6.4H7.2V6.4H4.8V4.8Z" fill="#fff" />
      <path d="M10.4 4.8h1.6v6.4h-1.6V4.8Z" fill="#fff" opacity="0.85" />
    </svg>
  ),
  "Session State": (
    <SoftIcon>
      <ellipse cx="8" cy="5.6" rx="3.6" ry="1.2" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.55" />
      <path d="M4.4 5.6v3.6c0 .7 1.6 1.2 3.6 1.2s3.6-.5 3.6-1.2V5.6" fill="none" stroke="var(--color-primary)" strokeWidth="0.55" />
      <circle cx="11.2" cy="10.8" r="1.6" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.55" />
      <path d="M11.2 9.8v.8l.5.5" stroke="var(--color-primary)" strokeWidth="0.5" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Chat Interface": (
    <SoftIcon fill="#0EA5E9">
      <path d="M3.6 4.8h5.6a1 1 0 0 1 1 1v2.8a1 1 0 0 1-1 1H6.4L4.4 10.8V5.8a1 1 0 0 1 1-1Z" fill="#fff" />
      <path d="M8.8 6.4h3.6a1 1 0 0 1 1 1v2.4a1 1 0 0 1-1 1h-1.6L9.6 12v-2.4H8.8a1 1 0 0 1-1-1V7.4a1 1 0 0 1 1-1Z" fill="#BAE6FD" />
    </SoftIcon>
  ),
  Flask: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#000" />
      <path
        fill="#fff"
        d="M6.2 3.2h3.6l.4 1.6h1.4l-2.8 5.2v3.6c0 .7-.6 1.2-1.4 1.2H7c-.8 0-1.4-.5-1.4-1.2V9.8L2.8 4.8h1.4l.4-1.6Z"
      />
      <path d="M6.4 4.8h3.2" stroke="#000" strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
    </svg>
  ),
  Git: (
    <SoftIcon fill="#F05032">
      <circle cx="5.4" cy="10.6" r="1.3" fill="#fff" />
      <circle cx="10.2" cy="6.2" r="1.3" fill="#fff" />
      <circle cx="10.2" cy="10.6" r="1.3" fill="#fff" />
      <path
        d="M5.4 9.3V7.2c0-.9.7-1.6 1.6-1.6h1.4"
        stroke="#fff"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M10.2 7.5v2.4" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
    </SoftIcon>
  ),
  GitHub: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#24292F" />
      <path
        fill="#fff"
        d="M8 3.2c-2.7 0-4.8 2.2-4.8 4.9 0 2.2 1.4 4 3.4 4.6.2 0 .3-.1.3-.3v-1.1c-1.4.3-1.7-.7-1.7-.7-.2-.6-.6-.7-.6-.7-.5-.3 0-.3 0-.3.5 0 .8.5.8.5.5.8 1.2.6 1.5.4.1-.4.2-.6.4-.8-1.1-.1-2.3-.6-2.3-2.5 0-.6.2-1 .5-1.4 0-.1-.2-.7.1-1.4 0 0 .4-.1 1.4.5.4-.1.9-.2 1.3-.2s.9.1 1.3.2c1-.6 1.4-.5 1.4-.5.3.7.1 1.3.1 1.4.3.4.5.8.5 1.4 0 1.9-1.2 2.4-2.3 2.5.2.2.4.5.4 1v1.5c0 .2.1.3.3.3 2-.6 3.4-2.4 3.4-4.6C12.8 5.4 10.7 3.2 8 3.2Z"
      />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#232F3E" />
      <path
        fill="#FF9900"
        d="M4.6 10.4c2.4 1.3 5.4 1.3 7.8 0 .2-.1.4 0 .5.2l.3.5c.1.2 0 .4-.2.5-2.7 1.5-6 1.5-8.7 0-.2-.1-.3-.3-.2-.5l.3-.5c.1-.2.3-.2.5-.2Z"
      />
      <path
        fill="#fff"
        d="m8.2 4.8 2.6 4.4H9.4l-.4-.7H6.6l-.4.7H5l2.8-4.7h.4Z"
      />
    </svg>
  ),
  "Database Design": (
    <SoftIcon>
      <ellipse cx="8" cy="5.4" rx="4" ry="1.3" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.55" />
      <path d="M4 5.4v3.2c0 .7 1.8 1.3 4 1.3s4-.6 4-1.3V5.4" fill="none" stroke="var(--color-primary)" strokeWidth="0.55" />
      <path d="M5.2 10.2h5.6M6.4 11.4h3.2" stroke="var(--color-primary)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M11.2 4.2 12.4 5.4 11.2 6.6" stroke="var(--color-primary)" strokeWidth="0.55" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </SoftIcon>
  ),
  "Continuous Improvement": (
    <SoftIcon fill="#16A34A">
      <path
        d="M8 4.2c-2.2 0-4 1.6-4 3.6 0 1.2.6 2.2 1.6 2.8"
        stroke="#fff"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M5.2 6.2 4.4 4.8 5.8 4.8" stroke="#fff" strokeWidth="0.75" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.4 10.8h5.2M9.2 8.4v4.8" stroke="#fff" strokeWidth="0.85" strokeLinecap="round" />
      <path d="M7.4 9.4 9.2 8.4 11 9.4" stroke="#fff" strokeWidth="0.75" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </SoftIcon>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#06B6D4" />
      <path
        d="M8 4.6c-1.5 0-2.4.9-2.9 2.2 1.1-.6 2-.3 2.6.3l.5.7c.5-.8 1.4-1.4 2.7-1.4 1.5 0 2.4.9 2.9 2.2-1.1-.6-2-.3-2.6.3-.2-.4-.7-.6-1.5-.6Zm-2.8 4.6c-1.5 0-2.4.9-2.9 2.2 1.1-.6 2-.3 2.6.3l.5.7c.5-.8 1.4-1.4 2.7-1.4 1.3 0 2.2.6 2.7 1.6-1-.5-1.8-.2-2.4.4l-.6.7Z"
        fill="#fff"
      />
    </svg>
  ),
  "Amazon APIs": (
    <SoftIcon fill="#232F3E">
      <path d="M4.2 11c2.2 1.1 4.8 1.1 7.6 0" stroke="#FF9900" strokeWidth="0.9" fill="none" strokeLinecap="round" />
      <path d="M8 4.4 10 8H9.1l-.2-.5H7.1L6.9 8H5.8L8 4.4Z" fill="#FF9900" />
      <rect x="10.8" y="5.2" width="1.2" height="4.8" rx="0.2" fill="#fff" opacity="0.9" />
    </SoftIcon>
  ),
  "LLM Workflows": (
    <SoftIcon fill="#4F46E5">
      <circle cx="4.8" cy="5.8" r="1" fill="#C7D2FE" />
      <circle cx="8" cy="4.6" r="1" fill="#E0E7FF" />
      <circle cx="11.2" cy="5.8" r="1" fill="#C7D2FE" />
      <circle cx="8" cy="8.8" r="1" fill="#fff" />
      <path d="M5.4 6.2 7.2 8.2M9.6 5.4 8.2 8.2M10.6 6.2 8.8 8.2" stroke="#fff" strokeWidth="0.5" />
      <path d="M10.2 10.2h2.2l-.7 1.2-.8-1.2Z" fill="#C7D2FE" />
    </SoftIcon>
  ),
  "AI Tools": (
    <SoftIcon fill="#7C3AED">
      <path d="M5.2 4.2h5.6l-.4 7.4H5.6l-.4-7.4Z" fill="#fff" />
      <path d="M6.6 7.8h2.8M8 6.4v2.8" stroke="#7C3AED" strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="11.6" cy="4.6" r="0.8" fill="#DDD6FE" />
      <path d="M11.2 4v1.2M12.4 4.6h-1.2" stroke="#fff" strokeWidth="0.5" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Customer Success": (
    <SoftIcon fill="#16A34A">
      <path d="M3.8 11 6.2 8.6l1.8 1.4 3.6-4" stroke="#fff" strokeWidth="0.85" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5.2" cy="5.4" r="1.2" fill="#fff" opacity="0.95" />
      <path d="M8.8 5.4h4.4" stroke="#BBF7D0" strokeWidth="0.65" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Requirements Analysis": (
    <SoftIcon>
      <rect x="4" y="3.6" width="8" height="9.2" rx="0.8" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.6" />
      <path d="M5.6 6.4h4.8M5.6 8h4.8M5.6 9.6h2.8" stroke="var(--color-primary)" strokeWidth="0.55" strokeLinecap="round" />
      <circle cx="11.6" cy="10" r="1.8" fill="var(--color-primary-soft)" stroke="var(--color-primary)" strokeWidth="0.55" />
      <path d="M11.1 10.1l.4.4.9-.9" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </SoftIcon>
  ),
  "Release Readiness": (
    <SoftIcon fill="#2563EB">
      <path d="M8 3.2 9.6 7.2H12l-2.4 1.8.9 2.8L8 10.4 5.5 11.8l.9-2.8L4 7.2h2.4L8 3.2Z" fill="#fff" />
      <path d="M6 12.8h4" stroke="#93C5FD" strokeWidth="0.7" strokeLinecap="round" />
    </SoftIcon>
  ),
  "Workflow Coordination": (
    <SoftIcon>
      <rect x="3.2" y="4.4" width="3.6" height="2.8" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.55" />
      <rect x="9.2" y="4.4" width="3.6" height="2.8" rx="0.5" fill="#fff" stroke="var(--color-primary)" strokeWidth="0.55" />
      <rect x="6.2" y="8.8" width="3.6" height="2.8" rx="0.5" fill="var(--color-primary)" opacity="0.2" stroke="var(--color-primary)" strokeWidth="0.55" />
      <path d="M5 7.2 6.8 8.8M11 7.2 9.2 8.8" stroke="var(--color-primary)" strokeWidth="0.55" />
    </SoftIcon>
  ),
  Teaching: (
    <SoftIcon fill="#1D4ED8">
      <path d="M3.6 5.2 8 3.6l4.4 1.6v4.4c0 1.4-2 2.4-4.4 2.4S3.6 11 3.6 9.6V5.2Z" fill="#fff" />
      <path d="M8 8.4v2.4" stroke="#fff" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M6.4 12h3.2" stroke="#93C5FD" strokeWidth="0.7" strokeLinecap="round" />
    </SoftIcon>
  ),
  Leadership: (
    <SoftIcon fill="#F59E0B">
      <circle cx="8" cy="5.6" r="1.5" fill="#fff" />
      <path d="M4.8 11.2c.8-1.8 2-2.6 3.2-2.6s2.4.8 3.2 2.6" stroke="#fff" strokeWidth="0.75" fill="none" strokeLinecap="round" />
      <path d="M11.6 4.4 12.8 6l-2 .2.6 1.8-.9-1.3-1.7.2.9-1.3Z" fill="#FDE68A" />
    </SoftIcon>
  ),
  "Web Speech API": (
    <SoftIcon>
      <rect x="3.2" y="4.8" width="3.2" height="5.2" rx="1.6" fill="var(--color-primary)" />
      <path d="M4.8 11.2c0 .8.6 1.4 1.4 1.4" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" />
      <path d="M9.6 6.8 11.2 5.6v4.8L9.6 9.2V6.8Z" fill="var(--color-primary)" />
      <path d="M12 7.2c.4.6.6 1.2.6 1.8s-.2 1.2-.6 1.8" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" strokeLinecap="round" />
    </SoftIcon>
  ),
  "TTS Speech API": (
    <SoftIcon fill="#7C3AED">
      <path d="M4.2 6.8 6.8 5.2v5.6L4.2 9.2V6.8Z" fill="#fff" />
      <path d="M10.2 6.4c.8.8 1.2 1.7 1.2 2.6s-.4 1.8-1.2 2.6" stroke="#fff" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M11.4 5c1.2 1.2 1.8 2.5 1.8 4s-.6 2.8-1.8 4" stroke="#fff" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.65" />
    </SoftIcon>
  ),
};

const skillIconAliases = {
  Supply: "Supply Chain",
  "CRM systems": "CRM Systems",
  "C#OOPS": "C# OOPs",
  "Software Documentation": "Documentation",
  "Technical Documentation": "Documentation",
  JS: "JavaScript",
  Tailwinds: "Tailwind CSS",
  "Web Speech": "Web Speech API",
  "Chat Interfaces": "Chat Interface",
  "Voice Interfaces": "Voice Recognition",
  "Functional Collaboration": "Cross-functional Collaboration",
  "Testing & QA": "Testing & Quality Assurance",
};

function normalizeSkillLabel(label) {
  return String(label ?? "").trim().replace(/\s+/g, " ");
}

export function SkillChipIcon({ label }) {
  const normalized = normalizeSkillLabel(label);
  const iconKey = skillIconAliases[normalized] ?? normalized;
  return skillIcons[iconKey] ?? <ChipGlyph>•</ChipGlyph>;
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 1.5 7.1 4.1 9.8 4.5 7.9 6.5 8.4 9.2 6 7.9 3.6 9.2 4.1 6.5 2.2 4.5 4.9 4.1 6 1.5Z" />
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 8.5 5 12l3 3.5M16 8.5l3 3.5-3 3.5M13.5 7l-3 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="11" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4.5 1.5v2M9.5 1.5v2M1.5 5.5h11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2 5.2 4.2 7.4 8 3.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
