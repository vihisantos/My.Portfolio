import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

export const HamburgerMenuContent = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[100px]">
      <style>
        {`
        .hamburger-wrapper {
          --h-color: var(--foreground, #ffffff);
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          z-index: 10;
          isolation: isolate;
          background: transparent;
        }

        .hamburger-input {
          display: none;
        }

        .hamburger-svg {
          width: 32px;
          height: 32px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: var(--h-color);
        }

        .line {
          fill: none;
          stroke: currentColor;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke-dasharray 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line-top {
          stroke-dasharray: 12 60;
          stroke-dashoffset: 0;
        }
        
        .line-middle {
          stroke-dasharray: 12 60;
          stroke-dashoffset: 0;
          opacity: 1;
        }

        .line-bottom {
          stroke-dasharray: 12 60;
          stroke-dashoffset: 0;
        }

        .hamburger-input:checked + .hamburger-svg {
          transform: rotate(45deg);
        }

        .hamburger-input:checked + .hamburger-svg .line-top {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32;
        }

        .hamburger-input:checked + .hamburger-svg .line-middle {
          opacity: 0;
        }

        .hamburger-input:checked + .hamburger-svg .line-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32;
        }
        `}
      </style>
      <label className="hamburger-wrapper">
        <input type="checkbox" className="hamburger-input" />
        <svg viewBox="0 0 32 32" className="hamburger-svg">
          <path className="line line-top" d="M27 10 13 10C10 10 10 16 13 16 16 16 27 16 27 16 27 16 27 6 27 4"></path>
          <path className="line line-middle" d="M27 16 5 16"></path>
          <path className="line line-bottom" d="M27 22 13 22C10 22 10 16 13 16 16 16 27 16 27 16 27 16 27 26 27 28"></path>
        </svg>
      </label>
    </div>
  );
};

const code = `import React from 'react';

export const HamburgerMenuContent = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[100px]">
      <style>
        {\`
        .hamburger-wrapper {
          --h-color: var(--foreground);
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .hamburger-input {
          display: none;
        }

        .hamburger-svg {
          width: 30px;
          height: 30px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line {
          fill: none;
          stroke: var(--h-color);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke-dasharray 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line-top {
          stroke-dasharray: 12 60;
          stroke-dashoffset: 0;
        }

        .line-middle {
          stroke-dasharray: 12 60;
          stroke-dashoffset: 0;
          opacity: 1;
        }

        .line-bottom {
          stroke-dasharray: 12 60;
          stroke-dashoffset: 0;
        }

        .hamburger-input:checked + .hamburger-svg {
          transform: rotate(45deg);
        }

        .hamburger-input:checked + .hamburger-svg .line-top {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32;
        }

        .hamburger-input:checked + .hamburger-svg .line-middle {
          opacity: 0;
        }

        .hamburger-input:checked + .hamburger-svg .line-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32;
        }
        \`}
      </style>
      <label className="hamburger-wrapper">
        <input type="checkbox" className="hamburger-input" />
        <svg viewBox="0 0 32 32" className="hamburger-svg">
          <path className="line line-top" d="M27 10 13 10C10 10 10 16 13 16 16 16 27 16 27 16 27 16 27 6 27 4"></path>
          <path className="line line-middle" d="M27 16 5 16"></path>
          <path className="line line-bottom" d="M27 22 13 22C10 22 10 16 13 16 16 16 27 16 27 16 27 16 27 26 27 28"></path>
        </svg>
      </label>
    </div>
  );
}

export default HamburgerMenuContent;
`;

export function HamburgerMenu() {
  return (
    <ComponentShowcase title="Hamburger Menu" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
      <HamburgerMenuContent />
    </ComponentShowcase>
  );
}
