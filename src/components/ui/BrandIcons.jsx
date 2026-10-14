import React from 'react';
import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

/**
 * Zalo inline SVG icon matching design specification.
 * Used when SiZalo is unavailable in simple-icons / react-icons.
 */
export function ZaloIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.03 2 11c0 2.7 1.3 5.1 3.4 6.8L4.5 22l4.3-2.2c1 .3 2.1.4 3.2.4 5.52 0 10-4.03 10-9S17.52 2 12 2zM8 8h8v1.7l-5.3 4.6H16V16H8v-1.7l5.3-4.6H8z"
      />
    </svg>
  );
}

// Re-export brand icons according to requirement 7
export { SiGithub, SiGmail, FaLinkedin };
export const SiZalo = ZaloIcon;

export default {
  SiGithub,
  SiGmail,
  FaLinkedin,
  ZaloIcon,
  SiZalo,
};
