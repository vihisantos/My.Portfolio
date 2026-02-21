import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";
import { GlitchTextContent } from "./GlitchTextContent";

const code = `import React from 'react';

const GlitchText = ({ text = "CYBERPUNK", className = "" }: { text?: string, className?: string }) => {
  return (
    <div className={\`glitch-wrapper \${className}\`}>
      <style>
        {\`
        .glitch-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glitch-text {
          position: relative;
          font-size: 4rem;
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.1em;
          z-index: 1;
          font-family: 'Courier New', Courier, monospace; /* Fallback/Cyber style */
        }

        .glitch-text::before,
        .glitch-text::after {
          display: block;
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
          z-index: -1;
        }

        .glitch-text::before {
          color: #0ff;
          animation: glitch-anim-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }

        .glitch-text::after {
          color: #f0f;
          animation: glitch-anim-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }

        @keyframes glitch-anim-1 {
          0% { clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%); transform: translate(0); }
          10% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); transform: translate(-2px); }
          20% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); transform: translate(2px); }
          30% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); transform: translate(-2px); }
          40% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); transform: translate(0); }
          50% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); transform: translate(2px); }
          60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); transform: translate(-2px); }
          70% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); transform: translate(2px); }
          80% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); transform: translate(-2px); }
          90% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); transform: translate(2px); }
          100% { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); transform: translate(-2px); }
        }

        @keyframes glitch-anim-2 {
          0% { clip-path: polygon(0 20%, 100% 20%, 100% 30%, 0 30%); transform: translate(0); }
          10% { clip-path: polygon(0 10%, 100% 10%, 100% 15%, 0 15%); transform: translate(2px); }
          20% { clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%); transform: translate(-2px); }
          30% { clip-path: polygon(0 30%, 100% 30%, 100% 35%, 0 35%); transform: translate(2px); }
          40% { clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%); transform: translate(-2px); }
          50% { clip-path: polygon(0 15%, 100% 15%, 100% 55%, 0 55%); transform: translate(2px); }
          60% { clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%); transform: translate(-2px); }
          70% { clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); transform: translate(2px); }
          80% { clip-path: polygon(0 65%, 100% 65%, 100% 70%, 0 70%); transform: translate(-2px); }
          90% { clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%); transform: translate(2px); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); transform: translate(-2px); }
        }
        \`}
      </style>
      <h1 className="glitch-text" data-text={text}>
        {text}
      </h1>
    </div>
  );
};

export default GlitchText;
`;

export function GlitchText({ text = "ERROR", className = "" }: { text?: string, className?: string }) {
  return (
    <ComponentShowcase title="Glitch Text" code={code} className={`flex justify-center items-center bg-[#111] min-h-[400px] ${className}`}>
      <GlitchTextContent text={text} />
    </ComponentShowcase>
  );
}
