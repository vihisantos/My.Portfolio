import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const AIMatrixLoader = () => {
  return (
    <div className="ai-matrix-loader-wrapper">
      <style>
        {\`
        .ai-matrix-loader-wrapper .ai-matrix-loader {
          width: 120px;
          height: 160px;
          margin: 30px auto;
          position: relative;
          perspective: 800px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
        }

        .ai-matrix-loader-wrapper .matrix-digit {
          color: #00ff88;
          font-family: monospace;
          font-size: 18px;
          text-align: center;
          text-shadow: 0 0 5px #00ff88;
          animation:
            ai-matrix-fall 2s infinite,
            ai-matrix-flicker 0.5s infinite;
          opacity: 0;
        }

        .ai-matrix-loader-wrapper .matrix-digit:nth-child(1) { animation-delay: 0.1s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(2) { animation-delay: 0.3s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(3) { animation-delay: 0.5s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(4) { animation-delay: 0.7s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(5) { animation-delay: 0.9s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(6) { animation-delay: 1.1s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(7) { animation-delay: 1.3s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(8) { animation-delay: 1.5s; }

        .ai-matrix-loader-wrapper .matrix-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.1) 0%,
            transparent 70%
          );
          animation: ai-matrix-pulse 2s infinite;
        }

        @keyframes ai-matrix-fall {
          0% {
            transform: translateY(-50px) rotateX(90deg);
            opacity: 0;
          }
          20%, 80% {
            transform: translateY(0) rotateX(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(50px) rotateX(-90deg);
            opacity: 0;
          }
        }

        @keyframes ai-matrix-flicker {
          0%, 19%, 21%, 100% {
            opacity: 0.8;
          }
          20% {
            opacity: 0.2;
          }
        }

        @keyframes ai-matrix-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        \`}
      </style>
      <div className="ai-matrix-loader">
        <div className="matrix-digit">0</div>
        <div className="matrix-digit">1</div>
        <div className="matrix-digit">0</div>
        <div className="matrix-digit">1</div>
        <div className="matrix-digit">1</div>
        <div className="matrix-digit">0</div>
        <div className="matrix-digit">0</div>
        <div className="matrix-digit">1</div>
        <div className="matrix-glow" />
      </div>
    </div>
  );
}

export default AIMatrixLoader;
`;

export function AIMatrixLoader() {
    return (
        <ComponentShowcase title="AI Matrix Loader" code={code} className="flex items-center justify-center p-12 min-h-[300px]">
            <div className="ai-matrix-loader-wrapper">
                <style>
                    {`
        .ai-matrix-loader-wrapper .ai-matrix-loader {
          width: 120px;
          height: 160px;
          margin: 30px auto;
          position: relative;
          perspective: 800px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
        }

        .ai-matrix-loader-wrapper .matrix-digit {
          color: #00ff88;
          font-family: monospace;
          font-size: 18px;
          text-align: center;
          text-shadow: 0 0 5px #00ff88;
          animation:
            ai-matrix-fall 2s infinite,
            ai-matrix-flicker 0.5s infinite;
          opacity: 0;
        }

        .ai-matrix-loader-wrapper .matrix-digit:nth-child(1) { animation-delay: 0.1s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(2) { animation-delay: 0.3s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(3) { animation-delay: 0.5s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(4) { animation-delay: 0.7s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(5) { animation-delay: 0.9s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(6) { animation-delay: 1.1s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(7) { animation-delay: 1.3s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(8) { animation-delay: 1.5s; }

        .ai-matrix-loader-wrapper .matrix-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.1) 0%,
            transparent 70%
          );
          animation: ai-matrix-pulse 2s infinite;
        }

        @keyframes ai-matrix-fall {
          0% {
            transform: translateY(-50px) rotateX(90deg);
            opacity: 0;
          }
          20%, 80% {
            transform: translateY(0) rotateX(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(50px) rotateX(-90deg);
            opacity: 0;
          }
        }

        @keyframes ai-matrix-flicker {
          0%, 19%, 21%, 100% {
            opacity: 0.8;
          }
          20% {
            opacity: 0.2;
          }
        }

        @keyframes ai-matrix-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        `}
                </style>
                <div className="ai-matrix-loader">
                    <div className="matrix-digit">0</div>
                    <div className="matrix-digit">1</div>
                    <div className="matrix-digit">0</div>
                    <div className="matrix-digit">1</div>
                    <div className="matrix-digit">1</div>
                    <div className="matrix-digit">0</div>
                    <div className="matrix-digit">0</div>
                    <div className="matrix-digit">1</div>
                    <div className="matrix-glow" />
                </div>
            </div>
        </ComponentShowcase>
    );
}
