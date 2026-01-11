import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const ScrollDownButton = () => {
  return (
    <div className="sdb-wrapper">
      <style>
        {\`
        .sdb-wrapper .sdb-scrolldown {
          --sdb-color: skyblue;
          --sdb-sizeX: 30px;
          --sdb-sizeY: 50px;
          position: relative;
          width: var(--sdb-sizeX);
          height: var(--sdb-sizeY);
          margin-left: var(sizeX / 2);
          border: calc(var(--sdb-sizeX) / 10) solid var(--sdb-color);
          border-radius: 50px;
          box-sizing: border-box;
          margin-bottom: 16px;
          cursor: pointer;
        }

        .sdb-wrapper .sdb-scrolldown::before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          background-color: var(--sdb-color);
          border-radius: 100%;
          animation: sdb-scrolldown-anim 2s infinite;
          box-sizing: border-box;
          box-shadow: 0px -5px 3px 1px #2a547066;
        }

        @keyframes sdb-scrolldown-anim {
          0% {
            opacity: 0;
            height: 6px;
          }
          40% {
            opacity: 1;
            height: 10px;
          }
          80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
          }
          100% {
            height: 3px;
            opacity: 0;
          }
        }

        .sdb-wrapper .sdb-chevrons {
          padding: 6px 0 0 0;
          margin-left: -3px;
          margin-top: 48px;
          width: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sdb-wrapper .sdb-chevrondown {
          margin-top: -6px;
          position: relative;
          border: solid var(--sdb-color);
          border-width: 0 3px 3px 0;
          display: inline-block;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }

        .sdb-wrapper .sdb-chevrondown:nth-child(odd) {
          animation: sdb-pulse 500ms ease infinite alternate;
        }

        .sdb-wrapper .sdb-chevrondown:nth-child(even) {
          animation: sdb-pulse 500ms ease infinite alternate 250ms;
        }

        @keyframes sdb-pulse {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.5;
          }
        }
        \`}
      </style>
      <div className="sdb-scrolldown">
        <div className="sdb-chevrons">
          <div className="sdb-chevrondown" />
          <div className="sdb-chevrondown" />
        </div>
      </div>
    </div>
  );
}

export default ScrollDownButton;
`;

export function ScrollDownButton() {
    return (
        <ComponentShowcase title="Scroll Down Button" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
            <div className="sdb-wrapper">
                <style>
                    {`
        .sdb-wrapper .sdb-scrolldown {
          --sdb-color: skyblue;
          --sdb-sizeX: 30px;
          --sdb-sizeY: 50px;
          position: relative;
          width: var(--sdb-sizeX);
          height: var(--sdb-sizeY);
          margin-left: var(sizeX / 2);
          border: calc(var(--sdb-sizeX) / 10) solid var(--sdb-color);
          border-radius: 50px;
          box-sizing: border-box;
          margin-bottom: 16px;
          cursor: pointer;
        }

        .sdb-wrapper .sdb-scrolldown::before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          background-color: var(--sdb-color);
          border-radius: 100%;
          animation: sdb-scrolldown-anim 2s infinite;
          box-sizing: border-box;
          box-shadow: 0px -5px 3px 1px #2a547066;
        }

        @keyframes sdb-scrolldown-anim {
          0% {
            opacity: 0;
            height: 6px;
          }
          40% {
            opacity: 1;
            height: 10px;
          }
          80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
          }
          100% {
            height: 3px;
            opacity: 0;
          }
        }

        .sdb-wrapper .sdb-chevrons {
          padding: 6px 0 0 0;
          margin-left: -3px;
          margin-top: 48px;
          width: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sdb-wrapper .sdb-chevrondown {
          margin-top: -6px;
          position: relative;
          border: solid var(--sdb-color);
          border-width: 0 3px 3px 0;
          display: inline-block;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }

        .sdb-wrapper .sdb-chevrondown:nth-child(odd) {
          animation: sdb-pulse 500ms ease infinite alternate;
        }

        .sdb-wrapper .sdb-chevrondown:nth-child(even) {
          animation: sdb-pulse 500ms ease infinite alternate 250ms;
        }

        @keyframes sdb-pulse {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.5;
          }
        }
        `}
                </style>
                <div className="sdb-scrolldown">
                    <div className="sdb-chevrons">
                        <div className="sdb-chevrondown" />
                        <div className="sdb-chevrondown" />
                    </div>
                </div>
            </div>
        </ComponentShowcase>
    );
}
