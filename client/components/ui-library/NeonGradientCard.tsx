import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

export const NeonGradientCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={\`neon-card-wrapper relative group \${className}\`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative h-full bg-background rounded-lg border leading-none flex items-center">
         {children}
      </div>
       <style>
        {\`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
        .animate-tilt {
            animation: tilt 10s infinite linear;
        }
        \`}
      </style>
    </div>
  );
};
`;

export const NeonGradientCardContent: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[300px]">
      <div className="relative group max-w-sm">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative px-7 py-6 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <span className="flex items-center space-x-5">
            <span className="pr-6 text-gray-100">Awesome Feature</span>
          </span>
          <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">See more &rarr;</span>
        </div>
      </div>
      <style>
        {`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        .animate-tilt {
            animation: tilt 5s infinite linear;
        }
        `}
      </style>
    </div>
  );
};

export function NeonGradientCard() {
  return (
    <ComponentShowcase title="Neon Gradient Card" code={code} className="flex items-center justify-center p-12 min-h-[300px]">
      <NeonGradientCardContent />
    </ComponentShowcase>
  );
}
