import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Button = () => {
  return (
    <div className="shine-btn-wrapper">
      <style>
        {\`
        .shine-btn {
          padding: 12px 48px;
          color: #fff;
          background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
          background-position: 0;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine-anim 3s infinite linear;
          animation-fill-mode: forwards;
          -webkit-text-size-adjust: none;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          white-space: nowrap;
          font-family: "Poppins", sans-serif;
          cursor: pointer;
        }

        @keyframes shine-anim {
          0% {
            background-position: 0;
          }
          60% {
            background-position: 180px;
          }
          100% {
            background-position: 180px;
          }
        }
        \`}
      </style>
      <a href="#" className="shine-btn">Get early access</a>
    </div>
  );
}

export default Button;
`;

export function ShineButton() {
  return (
    <ComponentShowcase title="Shine Button" code={code} className="min-h-[150px] flex items-center justify-center">
      <div className="shine-btn-wrapper w-full h-full min-h-[100px] flex items-center justify-center bg-transparent rounded-lg transition-colors duration-300">
        <style>
          {`
            .shine-btn {
              --shine-base: #4b5563;
              --shine-highlight: #ffffff;
              
              padding: 12px 48px;
              color: var(--shine-base);
              background: linear-gradient(to right, var(--shine-base) 0, var(--shine-highlight) 10%, var(--shine-base) 20%);
              background-position: 0;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: shine-anim 3s infinite linear;
              animation-fill-mode: forwards;
              -webkit-text-size-adjust: none;
              font-weight: 600;
              font-size: 16px;
              text-decoration: none;
              white-space: nowrap;
              font-family: "Poppins", sans-serif;
              cursor: pointer;
              transition: all 0.3s;
            }

            /* Dark Mode Overrides - assumes .dark class on parent/html */
            .dark .shine-btn {
               --shine-base: #cbd5e1; /* slate-300 for better visibility in dark mode */
               background: linear-gradient(to right, var(--shine-base) 0, var(--shine-highlight) 10%, var(--shine-base) 20%);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
            }

            @keyframes shine-anim {
              0% {
                background-position: 0;
              }
              60% {
                background-position: 180px;
              }
              100% {
                background-position: 180px;
              }
            }
            `}
        </style>
        <a href="#" className="shine-btn">Get early access</a>
      </div>
    </ComponentShowcase>
  );
}
