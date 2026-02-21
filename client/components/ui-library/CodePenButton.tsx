import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

export const CodePenButtonContent = () => {
  return (
    <div className="codepen-btn-wrapper">
      <style>
        {\`
        .codepen-btn-wrapper .codepen-btn {
          display: block;
          cursor: pointer;
          color: white;
          margin: 0 auto;
          position: relative;
          text-decoration: none;
          font-weight: 600;
          border-radius: 6px;
          overflow: hidden;
          padding: 3px;
          isolation: isolate;
          width: fit-content;
        }

        .codepen-btn-wrapper .codepen-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 400%;
          height: 100%;
          background: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
          background-size: 25% 100%;
          animation: codepen-border-slide .75s linear infinite;
          animation-play-state: paused;
          translate: -5% 0%;
          transition: translate 0.25s ease-out;
        }

        .codepen-btn-wrapper .codepen-btn:hover::before {
          animation-play-state: running;
          transition-duration: 0.75s;
          translate: 0% 0%;
        }

        @keyframes codepen-border-slide {
          to {
            transform: translateX(-25%);
          }
        }

        .codepen-btn-wrapper .codepen-btn span {
          position: relative;
          display: block;
          padding: 1rem 1.5rem;
          font-size: 1.1rem;
          background: #000;
          border-radius: 3px;
          height: 100%;
        }
        \`}
      </style>
      <a className="codepen-btn"><span>Start Coding</span></a>
    </div>
  );
}

export default CodePenButtonContent;
`;

export const CodePenButtonContent = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[100px]">
      <style>
        {`
        .codepen-btn-wrapper .codepen-btn {
          display: block;
          cursor: pointer;
          color: white;
          margin: 0 auto;
          position: relative;
          text-decoration: none;
          font-weight: 600;
          border-radius: 6px;
          overflow: hidden;
          padding: 3px;
          isolation: isolate;
          width: fit-content;
        }

        .codepen-btn-wrapper .codepen-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 400%;
          height: 100%;
          background: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
          background-size: 25% 100%;
          animation: codepen-border-slide .75s linear infinite;
          animation-play-state: paused;
          translate: -5% 0%;
          transition: translate 0.25s ease-out;
        }

        .codepen-btn-wrapper .codepen-btn:hover::before {
          animation-play-state: running;
          transition-duration: 0.75s;
          translate: 0% 0%;
        }

        @keyframes codepen-border-slide {
          to {
            transform: translateX(-25%);
          }
        }

        .codepen-btn-wrapper .codepen-btn span {
          position: relative;
          display: block;
          padding: 1rem 1.5rem;
          font-size: 1.1rem;
          background: #000;
          border-radius: 3px;
          height: 100%;
        }
        `}
      </style>
      <div className="codepen-btn-wrapper">
        <a className="codepen-btn"><span>Start Coding</span></a>
      </div>
    </div>
  );
}

export function CodePenButton() {
  return (
    <ComponentShowcase title="CodePen Button" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
      <CodePenButtonContent />
    </ComponentShowcase>
  );
}
