function NavIconBase({ children }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function NavAboutIcon() {
  return (
    <NavIconBase>
      <circle cx="8" cy="5.2" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M4.2 12.4c.8-2 1.8-3 3.8-3s3 .9 3.8 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </NavIconBase>
  );
}

export function NavExperienceIcon() {
  return (
    <NavIconBase>
      <rect
        x="3.2"
        y="5.2"
        width="9.6"
        height="7.2"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M6 5.2V4.4c0-.9.7-1.6 1.6-1.6h.8c.9 0 1.6.7 1.6 1.6v.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M3.2 8.8h9.6" stroke="currentColor" strokeWidth="1.2" />
    </NavIconBase>
  );
}

export function NavContactIcon() {
  return (
    <NavIconBase>
      <rect
        x="2.8"
        y="4"
        width="10.4"
        height="8"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="m3.6 5.2 4.4 3.6 4.4-3.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </NavIconBase>
  );
}

export function NavProjectsIcon() {
  return (
    <NavIconBase>
      <path
        d="M3.2 4.8h4.8l1.6 1.6H12.8v7.2H3.2V4.8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M8 4.8v1.6H12.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M6 9.2h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </NavIconBase>
  );
}

export function AvailabilityIcon() {
  return (
    <NavIconBase>
      <circle cx="8" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <circle cx="8" cy="8" r="2.2" fill="currentColor" />
    </NavIconBase>
  );
}

const navIconMap = {
  about: NavAboutIcon,
  experience: NavExperienceIcon,
  contact: NavContactIcon,
  projects: NavProjectsIcon,
};

export function HeroNavIcon({ name }) {
  const Icon = navIconMap[name];

  if (!Icon) {
    return null;
  }

  return <Icon />;
}
