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
  "AI Integration": <ChipGlyph>AI</ChipGlyph>,
  LLM: <ChipGlyph>LLM</ChipGlyph>,
  "Speech-to-Text": <ChipGlyph>STT</ChipGlyph>,
  "Text-to-Speech (TTS)": <ChipGlyph>TTS</ChipGlyph>,
  "Responsive Design": <ChipGlyph>R</ChipGlyph>,
  "Component Architecture": <ChipGlyph>CA</ChipGlyph>,
  "Git & GitHub": <ChipGlyph>Git</ChipGlyph>,
  Postman: <ChipGlyph>PM</ChipGlyph>,
  "VS Code": <ChipGlyph>VS</ChipGlyph>,
};

export function SkillChipIcon({ label }) {
  return skillIcons[label] ?? <ChipGlyph>•</ChipGlyph>;
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
