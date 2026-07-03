export function ProjectBrandIcon({ type }) {
  switch (type) {
    case "brokershub":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 18V6l8-3 8 3v12l-8 3-8-3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 9v12M4 6l8 3 8-3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "streamlit":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 6.5h14M5 12h9M5 17.5h12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="18.5" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7h16M4 12h10M4 17h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M17 10v7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function SectionDocumentIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6 3.5h5l3.5 3.5V16a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 16V5A1.5 1.5 0 0 1 6 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M11 3.5V7H14.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function SectionPersonIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="7" r="2.75" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5 16.5c.8-2.4 2.7-3.75 5-3.75s4.2 1.35 5 3.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SectionStarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="m10 4.25 1.35 2.74 3.02.44-2.18 2.13.52 3.01L10 11.2l-2.71 1.37.52-3.01-2.18-2.13 3.02-.44L10 4.25Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionLayersIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 4 4 7l6 3 6-3-6-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M4 10l6 3 6-3M4 13l6 3 6-3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.25 5 8.75 9.5 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6.5 3.5H3.75A1.25 1.25 0 0 0 2.5 4.75v7.5A1.25 1.25 0 0 0 3.75 13.5h7.5a1.25 1.25 0 0 0 1.25-1.25V9.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M8 8 13.5 2.5M13.5 2.5H10M13.5 2.5V6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5c-3.59 0-6.5 2.8-6.5 6.25 0 2.76 1.81 5.1 4.32 5.93.32.06.43-.14.43-.31v-1.1c-1.76.03-2.14-.85-2.14-.85-.29-.73-.71-.92-.71-.92-.58-.39.04-.38.04-.38.64.04.98.66.98.66.57.97 1.5.69 1.86.53.06-.42.22-.69.4-.85-1.4-.16-2.88-.7-2.88-3.1 0-.68.25-1.24.66-1.68-.07-.16-.29-.82.06-1.7 0 0 .54-.17 1.76.64a6.1 6.1 0 0 1 1.6-.22c.54 0 1.09.07 1.6.22 1.22-.81 1.76-.64 1.76-.64.35.88.13 1.54.06 1.7.41.44.66 1 .66 1.68 0 2.41-1.48 2.94-2.89 3.1.23.2.43.58.43 1.17v1.73c0 .17.11.37.44.31A6.48 6.48 0 0 0 14.5 7.75C14.5 4.3 11.59 1.5 8 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
