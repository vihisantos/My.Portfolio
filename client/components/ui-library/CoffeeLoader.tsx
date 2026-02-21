import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="coffee-loader-wrapper">
      <style>
        {\`
        .coffee-loader-container {
          width: 100px;
          height: 100px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: coffee-shake 3s infinite ease-in-out;
        }

        .coffee-cup {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 30px;
          background-color: #5b4022cb;
          border: 1px solid #2e2e2e;
          border-radius: 3px 3px 10px 10px;
          z-index: 1;
          animation: coffee-cupPulse 6s infinite ease-in-out;
        }

        .coffee-cup::before {
          content: "";
          position: absolute;
          bottom: -5px;
          width: calc(100% - 2px);
          height: 6px;
          background: #5b4022cb;
          border: 1px solid #2e2e2e;
          border-top: none;
          border-radius: 50%;
          z-index: -1;
          animation: coffee-cupPulse 6s infinite ease-in-out;
        }

        .coffee-cup::after {
          content: "";
          position: absolute;
          top: -2px;
          left: 1px;
          width: calc(100% - 2px);
          height: 4px;
          background: #da8920ca;
          border: 1px solid #2e2e2e;
          border-radius: 50%;
          animation: coffee-coffeeGlow 6s infinite ease-in-out;
        }

        .coffee-cup-handle {
          position: absolute;
          top: 5px;
          right: -10px;
          width: 10px;
          height: 15px;
          border: 2px solid #2e2e2e;
          border-left: none;
          border-radius: 0 10px 10px 0;
          background: transparent;
        }

        .coffee-smoke {
          position: absolute;
          bottom: 100%;
          left: 50%;
          width: 10px;
          height: 25px;
          background: rgba(72, 67, 67, 0.501);
          border-radius: 50%;
          transform: translateX(-50%);
          animation: coffee-rise 3s infinite ease-in-out;
          filter: blur(8px);
        }

        .coffee-smoke.one {
          animation-delay: 0s;
        }
        .coffee-smoke.two {
          animation-delay: 0.8s;
        }
        .coffee-smoke.three {
          animation-delay: 1.6s;
        }

        .coffee-load-text {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          color: #2e2e2e;
          opacity: 0.6;
          white-space: nowrap;
          font-family: sans-serif;
        }

        @keyframes coffee-rise {
          0% {
            transform: translate(-50%, 0) scale(0.4);
            opacity: 0;
          }
          30% {
            opacity: 0.7;
          }
          60% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -120px) scale(1);
            opacity: 0;
          }
        }

        @keyframes coffee-shake {
          0% {
            transform: translateX(0) translateY(0) rotate(0);
          }
          25% {
            transform: translateX(-4px) translateY(-2px) rotate(-2deg);
          }
          50% {
            transform: translateX(0) translateY(0) rotate(0);
          }
          75% {
            transform: translateX(4px) translateY(-2px) rotate(2deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        @keyframes coffee-cupPulse {
          0%,
          100% {
            background-color: #5b4022cb;
          }
          50% {
            background-color: #f5f5f5bd;
          }
        }

        @keyframes coffee-coffeeGlow {
          0%,
          100% {
            background: #da8920ca;
          }
          50% {
            background: #fed197d5;
          }
        }
        \`}
      </style>
      <div className="coffee-loader-container">
        <div className="coffee-cup">
          <div className="coffee-cup-handle" />
          <div className="coffee-smoke one" />
          <div className="coffee-smoke two" />
          <div className="coffee-smoke three" />
        </div>
        <div className="coffee-load-text">Loading...</div>
      </div>
    </div>
  );
}

export default Loader;
`;

export function CoffeeLoader() {
  return (
    <ComponentShowcase title="Coffee Loader" code={code} className="min-h-[250px]">
      <div className="coffee-loader-wrapper">
        <style>
          {`
            .coffee-loader-container {
              width: 100px;
              height: 100px;
              position: relative;
              /* Center content inside the showcase */
              margin: 0 auto;
              animation: coffee-shake 3s infinite ease-in-out;
            }

            .coffee-cup {
              position: absolute;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              width: 40px;
              height: 30px;
              background-color: #5b4022cb;
              border: 1px solid #2e2e2e;
              border-radius: 3px 3px 10px 10px;
              z-index: 1;
              animation: coffee-cupPulse 6s infinite ease-in-out;
            }

            .coffee-cup::before {
              content: "";
              position: absolute;
              bottom: -5px;
              width: calc(100% - 2px);
              height: 6px;
              background: #5b4022cb;
              border: 1px solid #2e2e2e;
              border-top: none;
              border-radius: 50%;
              z-index: -1;
              animation: coffee-cupPulse 6s infinite ease-in-out;
            }

            .coffee-cup::after {
              content: "";
              position: absolute;
              top: -2px;
              left: 1px;
              width: calc(100% - 2px);
              height: 4px;
              background: #da8920ca;
              border: 1px solid #2e2e2e;
              border-radius: 50%;
              animation: coffee-coffeeGlow 6s infinite ease-in-out;
            }

            .coffee-cup-handle {
              position: absolute;
              top: 5px;
              right: -10px;
              width: 10px;
              height: 15px;
              border: 2px solid #2e2e2e;
              border-left: none;
              border-radius: 0 10px 10px 0;
              background: transparent;
            }

            .coffee-smoke {
              position: absolute;
              bottom: 100%;
              left: 50%;
              width: 10px;
              height: 25px;
              background: rgba(72, 67, 67, 0.501);
              border-radius: 50%;
              transform: translateX(-50%);
              animation: coffee-rise 3s infinite ease-in-out;
              filter: blur(8px);
            }

            .coffee-smoke.one {
              animation-delay: 0s;
            }
            .coffee-smoke.two {
              animation-delay: 0.8s;
            }
            .coffee-smoke.three {
              animation-delay: 1.6s;
            }

            .coffee-load-text {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              font-size: 12px;
              color: #2e2e2e;
              opacity: 0.6;
              white-space: nowrap;
              font-family: sans-serif;
            }

            @keyframes coffee-rise {
              0% {
                transform: translate(-50%, 0) scale(0.4);
                opacity: 0;
              }
              30% {
                opacity: 0.7;
              }
              60% {
                opacity: 0.4;
              }
              100% {
                transform: translate(-50%, -120px) scale(1);
                opacity: 0;
              }
            }

            @keyframes coffee-shake {
              0% {
                transform: translateX(0) translateY(0) rotate(0);
              }
              25% {
                transform: translateX(-4px) translateY(-2px) rotate(-2deg);
              }
              50% {
                transform: translateX(0) translateY(0) rotate(0);
              }
              75% {
                transform: translateX(4px) translateY(-2px) rotate(2deg);
              }
              100% {
                transform: translateX(0) translateY(0) rotate(0);
              }
            }

            @keyframes coffee-cupPulse {
              0%,
              100% {
                background-color: #5b4022cb;
              }
              50% {
                background-color: #f5f5f5bd;
              }
            }

            @keyframes coffee-coffeeGlow {
              0%,
              100% {
                background: #da8920ca;
              }
              50% {
                background: #fed197d5;
              }
            }
            `}
        </style>
        <div className="coffee-loader-container">
          <div className="coffee-cup">
            <div className="coffee-cup-handle" />
            <div className="coffee-smoke one" />
            <div className="coffee-smoke two" />
            <div className="coffee-smoke three" />
          </div>
          <div className="coffee-load-text">Loading...</div>
        </div>
      </div>
    </ComponentShowcase>
  );
}

export function CoffeeLoaderContent() {
  return (
    <div className="coffee-loader-wrapper">
      <style>{`
            .coffee-loader-container {
              width: 100px;
              height: 100px;
              position: relative;
              margin: 0 auto;
              animation: coffee-shake 3s infinite ease-in-out;
            }
            .coffee-cup {
              position: absolute;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              width: 40px;
              height: 30px;
              background-color: #5b4022cb;
              border: 1px solid #2e2e2e;
              border-radius: 3px 3px 10px 10px;
              z-index: 1;
              animation: coffee-cupPulse 6s infinite ease-in-out;
            }
            .coffee-cup::before {
              content: "";
              position: absolute;
              bottom: -5px;
              width: calc(100% - 2px);
              height: 6px;
              background: #5b4022cb;
              border: 1px solid #2e2e2e;
              border-top: none;
              border-radius: 50%;
              z-index: -1;
              animation: coffee-cupPulse 6s infinite ease-in-out;
            }
            .coffee-cup::after {
              content: "";
              position: absolute;
              top: -2px;
              left: 1px;
              width: calc(100% - 2px);
              height: 4px;
              background: #da8920ca;
              border: 1px solid #2e2e2e;
              border-radius: 50%;
              animation: coffee-coffeeGlow 6s infinite ease-in-out;
            }
            .coffee-cup-handle {
              position: absolute;
              top: 5px;
              right: -10px;
              width: 10px;
              height: 15px;
              border: 2px solid #2e2e2e;
              border-left: none;
              border-radius: 0 10px 10px 0;
              background: transparent;
            }
            .coffee-smoke {
              position: absolute;
              bottom: 100%;
              left: 50%;
              width: 10px;
              height: 25px;
              background: rgba(72, 67, 67, 0.501);
              border-radius: 50%;
              transform: translateX(-50%);
              animation: coffee-rise 3s infinite ease-in-out;
              filter: blur(8px);
            }
            .coffee-smoke.one { animation-delay: 0s; }
            .coffee-smoke.two { animation-delay: 0.8s; }
            .coffee-smoke.three { animation-delay: 1.6s; }
            .coffee-load-text {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              font-size: 12px;
              color: #2e2e2e;
              opacity: 0.6;
              white-space: nowrap;
              font-family: sans-serif;
            }
            @keyframes coffee-rise {
              0% { transform: translate(-50%, 0) scale(0.4); opacity: 0; }
              30% { opacity: 0.7; }
              60% { opacity: 0.4; }
              100% { transform: translate(-50%, -60px) scale(1); opacity: 0; }
            }
            @keyframes coffee-shake {
              0% { transform: translateX(0) translateY(0) rotate(0); }
              25% { transform: translateX(-4px) translateY(-2px) rotate(-2deg); }
              50% { transform: translateX(0) translateY(0) rotate(0); }
              75% { transform: translateX(4px) translateY(-2px) rotate(2deg); }
              100% { transform: translateX(0) translateY(0) rotate(0); }
            }
            @keyframes coffee-cupPulse {
              0%, 100% { background-color: #5b4022cb; }
              50% { background-color: #f5f5f5bd; }
            }
            @keyframes coffee-coffeeGlow {
              0%, 100% { background: #da8920ca; }
              50% { background: #fed197d5; }
            }
            `}</style>
      <div className="coffee-loader-container">
        <div className="coffee-cup">
          <div className="coffee-cup-handle" />
          <div className="coffee-smoke one" />
          <div className="coffee-smoke two" />
          <div className="coffee-smoke three" />
        </div>
        <div className="coffee-load-text">Loading...</div>
      </div>
    </div>
  );
}
