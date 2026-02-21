import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="cola-loader-wrapper">
      <style>
        {\`
        .cola-loader-svg {
          --pathlength: 1384;
          width: 45px;
          height: 135px; /* Aspect ratio roughly matches viewbox 205 615 */
          fill: transparent;
          stroke: black;
          stroke-linecap: round;
          stroke-width: 15px;
          stroke-dashoffset: var(--pathlength);
          stroke-dasharray: 0 var(--pathlength);
          animation: cola-loader-anim 8s cubic-bezier(.5,.1,.5,1) infinite both;
        }

        @keyframes cola-loader-anim {
          90%, 100% {
            stroke-dashoffset: 0;
            stroke-dasharray: var(--pathlength) 0;
          }
        }
        \`}
      </style>
      <svg viewBox="0 0 205 615" className="cola-loader-svg">
        <path d="M47 595c-8 0-26-6-26-34V261c0-17 9-29 16-38s16-28 16-28L68 59l-4-5s3-30 7-36 14-6 32-6 28 0 32 6 7 36 7 36l-4 5 15 136s9 19 16 28 16 21 16 38v300c0 28-18 34-26 34H47z" />
      </svg>
    </div>
  );
}

export default Loader;
`;

export function ColaLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[200px]">
      <div className="cola-loader-wrapper">
        <style>{`
                    .cola-loader-svg { --pathlength: 1384; width: 45px; height: 135px; fill: transparent; stroke: white; stroke-linecap: round; stroke-width: 15px; stroke-dashoffset: var(--pathlength); stroke-dasharray: 0 var(--pathlength); animation: cola-loader-anim 8s cubic-bezier(.5,.1,.5,1) infinite both; }
                    @keyframes cola-loader-anim { 90%, 100% { stroke-dashoffset: 0; stroke-dasharray: var(--pathlength) 0; } }
                `}</style>
        <svg viewBox="0 0 205 615" className="cola-loader-svg">
          <path d="M47 595c-8 0-26-6-26-34V261c0-17 9-29 16-38s16-28 16-28L68 59l-4-5s3-30 7-36 14-6 32-6 28 0 32 6 7 36 7 36l-4 5 15 136s9 19 16 28 16 21 16 38v300c0 28-18 34-26 34H47z" />
        </svg>
      </div>
    </div>
  );
}

export function ColaLoader() {
  return (
    <ComponentShowcase title="Cola Loader" code={code} className="min-h-[200px] flex items-center justify-center">
      <ColaLoaderContent />
    </ComponentShowcase>
  );
}
