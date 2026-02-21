import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const RealismButton = () => {
  return (
    <div className="realism-button-wrapper">
      <style>
        {\`
        .realism-button {
          cursor: pointer;
          font-size: 1.4rem;
          border-radius: 16px;
          border: none;
          padding: 2px;
          background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
          position: relative;
          transition: transform 0.2s;
        }

        .realism-button:active {
          transform: scale(0.95);
        }

        .realism-button::after {
          content: "";
          position: absolute;
          width: 65%;
          height: 60%;
          border-radius: 120px;
          top: 0;
          right: 0;
          box-shadow: 0 0 20px #ffffff38;
          z-index: -1;
        }

        .realism-blob1 {
          position: absolute;
          width: 70px;
          height: 100%;
          border-radius: 16px;
          bottom: 0;
          left: 0;
          background: radial-gradient(
            circle 60px at 0% 100%,
            #3fe9ff,
            #0000ff80,
            transparent
          );
          box-shadow: -10px 10px 30px #0051ff2d;
        }

        .realism-blob2 {
           position: absolute;
           width: 70px;
           height: 100%;
           border-radius: 16px;
           top: 0;
           right: 0;
           background: radial-gradient(
             circle 60px at 100% 0%,
             #3fe9ff,
             #0000ff80,
             transparent
           );
           box-shadow: 10px -10px 30px #0051ff2d;
           opacity: 0.5; /* Guessing style since it was missing in original */
        }

        .realism-inner {
          padding: 14px 25px;
          border-radius: 14px;
          color: #fff;
          z-index: 3;
          position: relative;
          background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
          font-family: inherit;
        }
        
        .realism-inner::before {
          content: "";
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 14px;
          background: radial-gradient(
            circle 60px at 0% 100%,
            #00e1ff1a,
            #0000ff11,
            transparent
          );
          position: absolute;
        }
        \`}
      </style>
      <button className="realism-button">
        <div className="realism-blob1" />
        <div className="realism-blob2" />
        <div className="realism-inner">Realism</div>
      </button>
    </div>
  );
}

export default RealismButton;
`;

export function RealismButtonContent() {
  return (
    <div className="realism-button-wrapper w-full h-full flex items-center justify-center p-4">
      <style>
        {`
        .realism-button {
          cursor: pointer;
          font-size: 1.4rem;
          border-radius: 16px;
          border: none;
          padding: 2px;
          /* Default (Light Mode) Background */
          background: radial-gradient(circle 80px at 80% -10%, #ffffff, #e2e2e2);
          position: relative;
          transition: transform 0.2s, background 0.3s;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        /* Dark Mode Override */
        .dark .realism-button {
          background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
          box-shadow: none;
        }
        
        .realism-button:active {
            transform: scale(0.95);
        }

        .realism-button::after {
          content: "";
          position: absolute;
          width: 65%;
          height: 60%;
          border-radius: 120px;
          top: 0;
          right: 0;
          box-shadow: 0 0 20px #ffffff38;
          z-index: -1;
        }

        .realism-blob1 {
          position: absolute;
          width: 70px;
          height: 100%;
          border-radius: 16px;
          bottom: 0;
          left: 0;
          background: radial-gradient(
            circle 60px at 0% 100%,
            #3fe9ff,
            #0000ff80,
            transparent
          );
          box-shadow: -10px 10px 30px #0051ff2d;
        }

        .realism-blob2 {
           position: absolute;
           width: 70px;
           height: 100%;
           border-radius: 16px;
           top: 0;
           right: 0;
           background: radial-gradient(
             circle 60px at 100% 0%,
             #3fe9ff,
             #0000ff80,
             transparent
           );
           box-shadow: 10px -10px 30px #0051ff2d;
           opacity: 0.5;
        }

        .realism-inner {
          padding: 14px 25px;
          border-radius: 14px;
          z-index: 3;
          position: relative;
          
          /* Default (Light Mode) Styles */
          color: #333;
          background: radial-gradient(circle 80px at 80% -50%, #ffffff, #e5e5e5);
          
          font-family: inherit;
          font-weight: 600;
          transition: color 0.3s, background 0.3s;
        }

        /* Dark Mode Override */
        .dark .realism-inner {
            color: #fff;
            background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
        }

        .realism-inner::before {
          content: "";
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 14px;
          background: radial-gradient(
            circle 60px at 0% 100%,
            #00e1ff1a,
            #0000ff11,
            transparent
          );
          position: absolute;
        }
        `}
      </style>
      <button className="realism-button">
        <div className="realism-blob1" />
        <div className="realism-blob2" />
        <div className="realism-inner">Realism</div>
      </button>
    </div>
  );
}

export function RealismButton() {
  return (
    <ComponentShowcase title="Realism Button" code={code} className="flex items-center justify-center p-12 transition-colors duration-300 min-h-[200px]">
      <RealismButtonContent />
    </ComponentShowcase>
  );
}
