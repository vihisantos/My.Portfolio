import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="crystal-loader-wrapper">
      <style>
        {\`
        .crystal-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .crystal-loader {
          position: relative;
          width: 200px;
          height: 200px;
          perspective: 800px;
        }

        .crystal-shard {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          opacity: 0;
          transform-origin: bottom center;
          transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
          animation: crystal-spin 4s linear infinite, crystal-emerge 2s ease-in-out infinite alternate,
            crystal-fadeIn 0.3s ease-out forwards;
          border-radius: 10px;
          visibility: hidden;
        }

        @keyframes crystal-spin {
          from {
            transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotateX(45deg) rotateZ(360deg);
          }
        }

        @keyframes crystal-emerge {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        @keyframes crystal-fadeIn {
          to {
            visibility: visible;
            opacity: 0.8;
          }
        }

        .crystal-shard:nth-child(1) {
          background: linear-gradient(45deg, #003366, #336699);
          animation-delay: 0s;
        }

        .crystal-shard:nth-child(2) {
          background: linear-gradient(45deg, #003399, #3366cc);
          animation-delay: 0.3s;
        }

        .crystal-shard:nth-child(3) {
          background: linear-gradient(45deg, #0066cc, #3399ff);
          animation-delay: 0.6s;
        }

        .crystal-shard:nth-child(4) {
          background: linear-gradient(45deg, #0099ff, #66ccff);
          animation-delay: 0.9s;
        }

        .crystal-shard:nth-child(5) {
          background: linear-gradient(45deg, #33ccff, #99ccff);
          animation-delay: 1.2s;
        }

        .crystal-shard:nth-child(6) {
          background: linear-gradient(45deg, #66ffff, #ccffff);
          animation-delay: 1.5s;
        }
        \`}
      </style>
      <div className="crystal-container">
        <div className="crystal-loader">
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
`;

export function CrystalLoader() {
  return (
    <ComponentShowcase title="Crystal Loader" code={code} className="min-h-[250px] flex items-center justify-center">
      <div className="crystal-loader-wrapper">
        <style>
          {`
            .crystal-container {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .crystal-loader {
              position: relative;
              width: 200px;
              height: 200px;
              perspective: 800px;
            }

            .crystal-shard {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 60px;
              height: 60px;
              opacity: 0;
              transform-origin: bottom center;
              transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
              animation: crystal-spin 4s linear infinite, crystal-emerge 2s ease-in-out infinite alternate,
                crystal-fadeIn 0.3s ease-out forwards;
              border-radius: 10px;
              visibility: hidden;
            }

            @keyframes crystal-spin {
              from {
                transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
              }
              to {
                transform: translate(-50%, -50%) rotateX(45deg) rotateZ(360deg);
              }
            }

            @keyframes crystal-emerge {
              0%,
              100% {
                transform: translate(-50%, -50%) scale(0.5);
                opacity: 0;
              }
              50% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
              }
            }

            @keyframes crystal-fadeIn {
              to {
                visibility: visible;
                opacity: 0.8;
              }
            }

            .crystal-shard:nth-child(1) {
              background: linear-gradient(45deg, #003366, #336699);
              animation-delay: 0s;
            }

            .crystal-shard:nth-child(2) {
              background: linear-gradient(45deg, #003399, #3366cc);
              animation-delay: 0.3s;
            }

            .crystal-shard:nth-child(3) {
              background: linear-gradient(45deg, #0066cc, #3399ff);
              animation-delay: 0.6s;
            }

            .crystal-shard:nth-child(4) {
              background: linear-gradient(45deg, #0099ff, #66ccff);
              animation-delay: 0.9s;
            }

            .crystal-shard:nth-child(5) {
              background: linear-gradient(45deg, #33ccff, #99ccff);
              animation-delay: 1.2s;
            }

            .crystal-shard:nth-child(6) {
              background: linear-gradient(45deg, #66ffff, #ccffff);
              animation-delay: 1.5s;
            }
            `}
        </style>
        <div className="crystal-container">
          <div className="crystal-loader">
            <div className="crystal-shard" />
            <div className="crystal-shard" />
            <div className="crystal-shard" />
            <div className="crystal-shard" />
            <div className="crystal-shard" />
            <div className="crystal-shard" />
          </div>
        </div>
      </div>
    </ComponentShowcase>
  );
}

export function CrystalLoaderContent() {
  return (
    <div className="crystal-loader-wrapper">
      <style>{`
            .crystal-container {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .crystal-loader {
              position: relative;
              width: 120px;
              height: 120px;
              perspective: 800px;
            }
            .crystal-shard {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 60px;
              height: 60px;
              opacity: 0;
              transform-origin: bottom center;
              transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
              animation: crystal-spin 4s linear infinite, crystal-emerge 2s ease-in-out infinite alternate, crystal-fadeIn 0.3s ease-out forwards;
              border-radius: 10px;
              visibility: hidden;
            }
            @keyframes crystal-spin {
              from { transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg); }
              to { transform: translate(-50%, -50%) rotateX(45deg) rotateZ(360deg); }
            }
            @keyframes crystal-emerge {
              0%, 100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
              50% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            @keyframes crystal-fadeIn {
              to { visibility: visible; opacity: 0.8; }
            }
            .crystal-shard:nth-child(1) { background: linear-gradient(45deg, #003366, #336699); animation-delay: 0s; }
            .crystal-shard:nth-child(2) { background: linear-gradient(45deg, #003399, #3366cc); animation-delay: 0.3s; }
            .crystal-shard:nth-child(3) { background: linear-gradient(45deg, #0066cc, #3399ff); animation-delay: 0.6s; }
            .crystal-shard:nth-child(4) { background: linear-gradient(45deg, #0099ff, #66ccff); animation-delay: 0.9s; }
            .crystal-shard:nth-child(5) { background: linear-gradient(45deg, #33ccff, #99ccff); animation-delay: 1.2s; }
            .crystal-shard:nth-child(6) { background: linear-gradient(45deg, #66ffff, #ccffff); animation-delay: 1.5s; }
            `}</style>
      <div className="crystal-container">
        <div className="crystal-loader">
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
        </div>
      </div>
    </div>
  );
}
