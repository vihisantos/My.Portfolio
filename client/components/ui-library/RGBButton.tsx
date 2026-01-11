import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const RGBButton = () => {
  return (
    <div className="rgb-button-wrapper">
      <style>
        {\`
        .rgb-button-wrapper .rgb-gradient-button {
          position: relative;
          padding: 16px 32px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 50px;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .rgb-button-wrapper .rgb-gradient-button:hover {
          transform: scale(1.03);
        }

        .rgb-button-wrapper .rgb-gradient-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #feca57,
            #ff9ff3,
            #ff6b6b
          );
          z-index: -2;
          filter: blur(10px);
          transform: rotate(0deg);
          transition: transform 1.5s ease-in-out;
        }

        .rgb-button-wrapper .rgb-gradient-button:hover::before {
          transform: rotate(180deg);
        }

        .rgb-button-wrapper .rgb-gradient-button::after {
          content: "";
          position: absolute;
          inset: 3px;
          background: black;
          border-radius: 47px;
          z-index: -1;
          filter: blur(5px);
        }

        .rgb-button-wrapper .rgb-gradient-text {
          color: transparent;
          background: conic-gradient(
            from 0deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #feca57,
            #ff9ff3,
            #ff6b6b
          );
          background-clip: text;
          -webkit-background-clip: text; /* Added for compatibility */
          filter: hue-rotate(0deg);
        }

        .rgb-button-wrapper .rgb-gradient-button:hover .rgb-gradient-text {
          animation: rgb-hue-rotating 2s linear infinite;
        }

        .rgb-button-wrapper .rgb-gradient-button:active {
          transform: scale(0.99);
        }

        @keyframes rgb-hue-rotating {
          to {
            filter: hue-rotate(360deg);
          }
        }
        \`}
      </style>
      <button className="rgb-gradient-button">
        <span className="rgb-gradient-text">Simple text</span>
      </button>
    </div>
  );
}

export default RGBButton;
`;

export function RGBButton() {
    return (
        <ComponentShowcase title="RGB Button" code={code} className="flex items-center justify-center p-12">
            <div className="rgb-button-wrapper">
                <style>
                    {`
        .rgb-button-wrapper .rgb-gradient-button {
          position: relative;
          padding: 16px 32px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 50px;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .rgb-button-wrapper .rgb-gradient-button:hover {
          transform: scale(1.03);
        }

        .rgb-button-wrapper .rgb-gradient-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #feca57,
            #ff9ff3,
            #ff6b6b
          );
          z-index: -2;
          filter: blur(10px);
          transform: rotate(0deg);
          transition: transform 1.5s ease-in-out;
        }

        .rgb-button-wrapper .rgb-gradient-button:hover::before {
          transform: rotate(180deg);
        }

        .rgb-button-wrapper .rgb-gradient-button::after {
          content: "";
          position: absolute;
          inset: 3px;
          background: black;
          border-radius: 47px;
          z-index: -1;
          filter: blur(5px);
        }

        .rgb-button-wrapper .rgb-gradient-text {
          color: transparent;
          background: conic-gradient(
            from 0deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #feca57,
            #ff9ff3,
            #ff6b6b
          );
          background-clip: text;
          -webkit-background-clip: text;
          filter: hue-rotate(0deg);
        }

        .rgb-button-wrapper .rgb-gradient-button:hover .rgb-gradient-text {
          animation: rgb-hue-rotating 2s linear infinite;
        }

        .rgb-button-wrapper .rgb-gradient-button:active {
          transform: scale(0.99);
        }

        @keyframes rgb-hue-rotating {
          to {
            filter: hue-rotate(360deg);
          }
        }
        `}
                </style>
                <button className="rgb-gradient-button">
                    <span className="rgb-gradient-text">Simple text</span>
                </button>
            </div>
        </ComponentShowcase>
    );
}
