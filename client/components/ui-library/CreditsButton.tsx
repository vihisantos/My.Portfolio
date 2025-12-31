import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Button = () => {
  return (
    <div className="credits-button-wrapper">
      <style>
        {\`
        .credits-btn {
          --h-button: 48px;
          --w-button: 102px;
          --round: 0.75rem;
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.25s ease;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(223, 113, 255, 0.8) 0%,
              rgba(223, 113, 255, 0) 100%
            ),
            linear-gradient(0deg, #7a5af8, #7a5af8);
          border-radius: var(--round);
          border: none;
          outline: none;
          padding: 12px 18px;
        }
        .credits-btn::before,
        .credits-btn::after {
          content: "";
          position: absolute;
          inset: var(--space);
          transition: all 0.5s ease-in-out;
          border-radius: calc(var(--round) - var(--space));
          z-index: 0;
        }
        .credits-btn::before {
          --space: 1px;
          background: linear-gradient(
            177.95deg,
            rgba(255, 255, 255, 0.19) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        .credits-btn::after {
          --space: 2px;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(223, 113, 255, 0.8) 0%,
              rgba(223, 113, 255, 0) 100%
            ),
            linear-gradient(0deg, #7a5af8, #7a5af8);
        }
        .credits-btn:active {
          transform: scale(0.95);
        }

        .credits-fold {
          z-index: 1;
          position: absolute;
          top: 0;
          right: 0;
          height: 1rem;
          width: 1rem;
          display: inline-block;
          transition: all 0.5s ease-in-out;
          background: radial-gradient(
            100% 75% at 55%,
            rgba(223, 113, 255, 0.8) 0%,
            rgba(223, 113, 255, 0) 100%
          );
          box-shadow: 0 0 3px black;
          border-bottom-left-radius: 0.5rem;
          border-top-right-radius: var(--round);
        }
        .credits-fold::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 150%;
          height: 150%;
          transform: rotate(45deg) translateX(0%) translateY(-18px);
          background-color: #e8e8e8;
          pointer-events: none;
        }
        .credits-btn:hover .credits-fold {
          margin-top: -1rem;
          margin-right: -1rem;
        }

        .credits-points-wrapper {
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .credits-points-wrapper .credits-point {
          bottom: -10px;
          position: absolute;
          animation: credits-floating-points infinite ease-in-out;
          pointer-events: none;
          width: 2px;
          height: 2px;
          background-color: #fff;
          border-radius: 9999px;
        }
        @keyframes credits-floating-points {
          0% {
            transform: translateY(0);
          }
          85% {
            opacity: 0;
          }
          100% {
            transform: translateY(-55px);
            opacity: 0;
          }
        }
        .credits-points-wrapper .credits-point:nth-child(1) {
          left: 10%;
          opacity: 1;
          animation-duration: 2.35s;
          animation-delay: 0.2s;
        }
        .credits-points-wrapper .credits-point:nth-child(2) {
          left: 30%;
          opacity: 0.7;
          animation-duration: 2.5s;
          animation-delay: 0.5s;
        }
        .credits-points-wrapper .credits-point:nth-child(3) {
          left: 25%;
          opacity: 0.8;
          animation-duration: 2.2s;
          animation-delay: 0.1s;
        }
        .credits-points-wrapper .credits-point:nth-child(4) {
          left: 44%;
          opacity: 0.6;
          animation-duration: 2.05s;
        }
        .credits-points-wrapper .credits-point:nth-child(5) {
          left: 50%;
          opacity: 1;
          animation-duration: 1.9s;
        }
        .credits-points-wrapper .credits-point:nth-child(6) {
          left: 75%;
          opacity: 0.5;
          animation-duration: 1.5s;
          animation-delay: 1.5s;
        }
        .credits-points-wrapper .credits-point:nth-child(7) {
          left: 88%;
          opacity: 0.9;
          animation-duration: 2.2s;
          animation-delay: 0.2s;
        }
        .credits-points-wrapper .credits-point:nth-child(8) {
          left: 58%;
          opacity: 0.8;
          animation-duration: 2.25s;
          animation-delay: 0.2s;
        }
        .credits-points-wrapper .credits-point:nth-child(9) {
          left: 98%;
          opacity: 0.6;
          animation-duration: 2.6s;
          animation-delay: 0.1s;
        }
        .credits-points-wrapper .credits-point:nth-child(10) {
          left: 65%;
          opacity: 1;
          animation-duration: 2.5s;
          animation-delay: 0.2s;
        }

        .credits-inner {
          z-index: 2;
          gap: 6px;
          position: relative;
          width: 100%;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          transition: color 0.2s ease-in-out;
        }

        .credits-inner svg.credits-icon {
          width: 18px;
          height: 18px;
          transition: fill 0.1s linear;
        }

        .credits-btn:focus svg.credits-icon {
          fill: white;
        }
        .credits-btn:hover svg.credits-icon {
          fill: transparent;
          animation:
            credits-dasharray 1s linear forwards,
            credits-filled 0.1s linear forwards 0.95s;
        }
        @keyframes credits-dasharray {
          from {
            stroke-dasharray: 0 0 0 0;
          }
          to {
            stroke-dasharray: 68 68 0 0;
          }
        }
        @keyframes credits-filled {
          to {
            fill: white;
          }
        }
        \`}
      </style>
      <button type="button" className="credits-btn">
        <span className="credits-fold" />
        <div className="credits-points-wrapper">
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
        </div>
        <span className="credits-inner">
          <svg className="credits-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
          </svg>
          Credits
        </span>
      </button>
    </div>
  );
}

export default Button;
`;

export function CreditsButton() {
    return (
        <ComponentShowcase title="Credits Button" code={code} className="min-h-[250px]">
            <div className="credits-button-wrapper">
                <style>
                    {`
            .credits-btn {
              --h-button: 48px;
              --w-button: 102px;
              --round: 0.75rem;
              cursor: pointer;
              position: relative;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              transition: all 0.25s ease;
              background: radial-gradient(
                  65.28% 65.28% at 50% 100%,
                  rgba(223, 113, 255, 0.8) 0%,
                  rgba(223, 113, 255, 0) 100%
                ),
                linear-gradient(0deg, #7a5af8, #7a5af8);
              border-radius: var(--round);
              border: none;
              outline: none;
              padding: 12px 18px;
            }
            .credits-btn::before,
            .credits-btn::after {
              content: "";
              position: absolute;
              inset: var(--space);
              transition: all 0.5s ease-in-out;
              border-radius: calc(var(--round) - var(--space));
              z-index: 0;
            }
            .credits-btn::before {
              --space: 1px;
              background: linear-gradient(
                177.95deg,
                rgba(255, 255, 255, 0.19) 0%,
                rgba(255, 255, 255, 0) 100%
              );
            }
            .credits-btn::after {
              --space: 2px;
              background: radial-gradient(
                  65.28% 65.28% at 50% 100%,
                  rgba(223, 113, 255, 0.8) 0%,
                  rgba(223, 113, 255, 0) 100%
                ),
                linear-gradient(0deg, #7a5af8, #7a5af8);
            }
            .credits-btn:active {
              transform: scale(0.95);
            }

            .credits-fold {
              z-index: 1;
              position: absolute;
              top: 0;
              right: 0;
              height: 1rem;
              width: 1rem;
              display: inline-block;
              transition: all 0.5s ease-in-out;
              background: radial-gradient(
                100% 75% at 55%,
                rgba(223, 113, 255, 0.8) 0%,
                rgba(223, 113, 255, 0) 100%
              );
              box-shadow: 0 0 3px black;
              border-bottom-left-radius: 0.5rem;
              border-top-right-radius: var(--round);
            }
            .credits-fold::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              width: 150%;
              height: 150%;
              transform: rotate(45deg) translateX(0%) translateY(-18px);
              background-color: #e8e8e8;
              pointer-events: none;
            }
            .credits-btn:hover .credits-fold {
              margin-top: -1rem;
              margin-right: -1rem;
            }

            .credits-points-wrapper {
              overflow: hidden;
              width: 100%;
              height: 100%;
              pointer-events: none;
              position: absolute;
              z-index: 1;
            }

            .credits-points-wrapper .credits-point {
              bottom: -10px;
              position: absolute;
              animation: credits-floating-points infinite ease-in-out;
              pointer-events: none;
              width: 2px;
              height: 2px;
              background-color: #fff;
              border-radius: 9999px;
            }
            @keyframes credits-floating-points {
              0% {
                transform: translateY(0);
              }
              85% {
                opacity: 0;
              }
              100% {
                transform: translateY(-55px);
                opacity: 0;
              }
            }
            .credits-points-wrapper .credits-point:nth-child(1) {
              left: 10%;
              opacity: 1;
              animation-duration: 2.35s;
              animation-delay: 0.2s;
            }
            .credits-points-wrapper .credits-point:nth-child(2) {
              left: 30%;
              opacity: 0.7;
              animation-duration: 2.5s;
              animation-delay: 0.5s;
            }
            .credits-points-wrapper .credits-point:nth-child(3) {
              left: 25%;
              opacity: 0.8;
              animation-duration: 2.2s;
              animation-delay: 0.1s;
            }
            .credits-points-wrapper .credits-point:nth-child(4) {
              left: 44%;
              opacity: 0.6;
              animation-duration: 2.05s;
            }
            .credits-points-wrapper .credits-point:nth-child(5) {
              left: 50%;
              opacity: 1;
              animation-duration: 1.9s;
            }
            .credits-points-wrapper .credits-point:nth-child(6) {
              left: 75%;
              opacity: 0.5;
              animation-duration: 1.5s;
              animation-delay: 1.5s;
            }
            .credits-points-wrapper .credits-point:nth-child(7) {
              left: 88%;
              opacity: 0.9;
              animation-duration: 2.2s;
              animation-delay: 0.2s;
            }
            .credits-points-wrapper .credits-point:nth-child(8) {
              left: 58%;
              opacity: 0.8;
              animation-duration: 2.25s;
              animation-delay: 0.2s;
            }
            .credits-points-wrapper .credits-point:nth-child(9) {
              left: 98%;
              opacity: 0.6;
              animation-duration: 2.6s;
              animation-delay: 0.1s;
            }
            .credits-points-wrapper .credits-point:nth-child(10) {
              left: 65%;
              opacity: 1;
              animation-duration: 2.5s;
              animation-delay: 0.2s;
            }

            .credits-inner {
              z-index: 2;
              gap: 6px;
              position: relative;
              width: 100%;
              color: white;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              font-weight: 500;
              line-height: 1.5;
              transition: color 0.2s ease-in-out;
            }

            .credits-inner svg.credits-icon {
              width: 18px;
              height: 18px;
              transition: fill 0.1s linear;
            }

            .credits-btn:focus svg.credits-icon {
              fill: white;
            }
            .credits-btn:hover svg.credits-icon {
              fill: transparent;
              animation:
                credits-dasharray 1s linear forwards,
                credits-filled 0.1s linear forwards 0.95s;
            }
            @keyframes credits-dasharray {
              from {
                stroke-dasharray: 0 0 0 0;
              }
              to {
                stroke-dasharray: 68 68 0 0;
              }
            }
            @keyframes credits-filled {
              to {
                fill: white;
              }
            }
            `}
                </style>
                <button type="button" className="credits-btn">
                    <span className="credits-fold" />
                    <div className="credits-points-wrapper">
                        <i className="credits-point" />
                        <i className="credits-point" />
                        <i className="credits-point" />
                        <i className="credits-point" />
                        <i className="credits-point" />
                        <i className="credits-point" />
                        <i className="credits-point" />
                        <i className="credits-point" />
                        <i className="credits-point" />
                        <i className="credits-point" />
                    </div>
                    <span className="credits-inner">
                        <svg className="credits-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
                        </svg>
                        Credits
                    </span>
                </button>
            </div>
        </ComponentShowcase>
    );
}
