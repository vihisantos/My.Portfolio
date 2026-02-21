import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="sleeping-loader-wrapper">
      <style>
        {\`
        .z {
          position: absolute;
          font-size: 32px;
          opacity: 0;
        }
        .z-1 {
          animation: swayUpToRight 2s ease-out infinite;
        }
        .z-2 {
          animation: swayUpToRight 2s ease-out 0.5s infinite;
        }
        .z-3 {
          animation: swayUpToRight 2s ease-out 1s infinite;
        }
        .z-4 {
          animation: swayUpToRight 2s ease-out 1.5s infinite;
        }
        @keyframes swayUpToRight {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(80px, -100px) rotate(30deg);
            opacity: 0;
          }
        }
        \`}
      </style>
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <div className="z z-1">Z</div>
        <div className="z z-2">Z</div>
        <div className="z z-3">Z</div>
        <div className="z z-4">Z</div>
      </div>
    </div>
  );
}

export default Loader;
`;

export function SleepingLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[250px]">
      <div className="sleeping-loader-wrapper">
        <style>
          {`
            .z {
            position: absolute;
            font-size: 32px;
            opacity: 0;
            }
            .z-1 {
            animation: swayUpToRight 2s ease-out infinite;
            }
            .z-2 {
            animation: swayUpToRight 2s ease-out 0.5s infinite;
            }
            .z-3 {
            animation: swayUpToRight 2s ease-out 1s infinite;
            }
            .z-4 {
            animation: swayUpToRight 2s ease-out 1.5s infinite;
            }
            @keyframes swayUpToRight {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translate(80px, -100px) rotate(30deg);
                opacity: 0;
            }
            }
            `}
        </style>
        <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div className="z z-1">Z</div>
          <div className="z z-2">Z</div>
          <div className="z z-3">Z</div>
          <div className="z z-4">Z</div>
        </div>
      </div>
    </div>
  );
}

export function SleepingLoader() {
  return (
    <ComponentShowcase title="Sleeping Loader" code={code} className="min-h-[250px]">
      <SleepingLoaderContent />
    </ComponentShowcase>
  );
}
