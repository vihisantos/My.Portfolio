import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="circular-pulse-wrapper">
      <style>
        {\`
        .circular-pulse {
          --uib-size: 2.8rem;
          --uib-speed: .9s;
          --uib-color: #183153;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: var(--uib-size);
          width: var(--uib-size);
        }

        .circular-pulse-dot {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 100%;
          width: 100%;
        }

        .circular-pulse-dot::before {
          content: '';
          height: 20%;
          width: 20%;
          border-radius: 50%;
          background-color: var(--uib-color);
          transform: scale(0);
          opacity: 0.5;
          animation: circular-pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
          box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
          padding-bottom: 222px; /* Restored "spiky" padding */
        }

        .circular-pulse-dot:nth-child(2) { transform: rotate(45deg); }
        .circular-pulse-dot:nth-child(2)::before { animation-delay: calc(var(--uib-speed) * -0.875); }

        .circular-pulse-dot:nth-child(3) { transform: rotate(90deg); }
        .circular-pulse-dot:nth-child(3)::before { animation-delay: calc(var(--uib-speed) * -0.75); }

        .circular-pulse-dot:nth-child(4) { transform: rotate(135deg); }
        .circular-pulse-dot:nth-child(4)::before { animation-delay: calc(var(--uib-speed) * -0.625); }

        .circular-pulse-dot:nth-child(5) { transform: rotate(180deg); }
        .circular-pulse-dot:nth-child(5)::before { animation-delay: calc(var(--uib-speed) * -0.5); }

        .circular-pulse-dot:nth-child(6) { transform: rotate(225deg); }
        .circular-pulse-dot:nth-child(6)::before { animation-delay: calc(var(--uib-speed) * -0.375); }

        /* 
           Original code had a selector mismatch (.dot-spinner__dot vs .loaders), 
           causing the 7th element NOT to rotate. Replicating that behavior here.
        */
        /* .circular-pulse-dot:nth-child(7) { transform: rotate(270deg); } */ 
        
        .circular-pulse-dot:nth-child(7)::before { animation-delay: calc(var(--uib-speed) * -0.25); }

        .circular-pulse-dot:nth-child(8) { transform: rotate(315deg); }
        .circular-pulse-dot:nth-child(8)::before { animation-delay: calc(var(--uib-speed) * -0.125); }

        @keyframes circular-pulse0112 {
          0%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
        \`}
      </style>
      <div className="circular-pulse">
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
      </div>
    </div>
  );
}

export default Loader;
`;

export function CircularPulseLoader() {
  return (
    /* Added overflow-hidden to prevent the giant spikes from breaking layout */
    <ComponentShowcase title="Circular Pulse Loader" code={code} className="min-h-[250px] flex items-center justify-center overflow-hidden">
      <div className="circular-pulse-wrapper scale-[0.5] sm:scale-100">
        <style>
          {`
            .circular-pulse {
              --uib-size: 2.8rem;
              --uib-speed: .9s;
              --uib-color: #183153;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              height: var(--uib-size);
              width: var(--uib-size);
            }

            .circular-pulse-dot {
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              height: 100%;
              width: 100%;
            }

            .circular-pulse-dot::before {
              content: '';
              height: 20%;
              width: 20%;
              border-radius: 50%;
              background-color: var(--uib-color);
              transform: scale(0);
              opacity: 0.5;
              animation: circular-pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
              box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
              padding-bottom: 222px; /* Restored "spiky" padding */
            }

            .circular-pulse-dot:nth-child(2) { transform: rotate(45deg); }
            .circular-pulse-dot:nth-child(2)::before { animation-delay: calc(var(--uib-speed) * -0.875); }

            .circular-pulse-dot:nth-child(3) { transform: rotate(90deg); }
            .circular-pulse-dot:nth-child(3)::before { animation-delay: calc(var(--uib-speed) * -0.75); }

            .circular-pulse-dot:nth-child(4) { transform: rotate(135deg); }
            .circular-pulse-dot:nth-child(4)::before { animation-delay: calc(var(--uib-speed) * -0.625); }

            .circular-pulse-dot:nth-child(5) { transform: rotate(180deg); }
            .circular-pulse-dot:nth-child(5)::before { animation-delay: calc(var(--uib-speed) * -0.5); }

            .circular-pulse-dot:nth-child(6) { transform: rotate(225deg); }
            .circular-pulse-dot:nth-child(6)::before { animation-delay: calc(var(--uib-speed) * -0.375); }

            /* 7th rotation omitted to match original behavior */
            .circular-pulse-dot:nth-child(7)::before { animation-delay: calc(var(--uib-speed) * -0.25); }

            .circular-pulse-dot:nth-child(8) { transform: rotate(315deg); }
            .circular-pulse-dot:nth-child(8)::before { animation-delay: calc(var(--uib-speed) * -0.125); }

            @keyframes circular-pulse0112 {
              0%, 100% {
                transform: scale(0);
                opacity: 0.5;
              }
              50% {
                transform: scale(1);
                opacity: 1;
              }
            }
            `}
        </style>
        <div className="circular-pulse">
          <div className="circular-pulse-dot" />
          <div className="circular-pulse-dot" />
          <div className="circular-pulse-dot" />
          <div className="circular-pulse-dot" />
          <div className="circular-pulse-dot" />
          <div className="circular-pulse-dot" />
          <div className="circular-pulse-dot" />
          <div className="circular-pulse-dot" />
        </div>
      </div>
    </ComponentShowcase>
  );
}

export function CircularPulseLoaderContent() {
  return (
    <div className="circular-pulse-wrapper flex items-center justify-center h-full" style={{ overflow: 'hidden' }}>
      <style>{`
            .circular-pulse {
              --uib-size: 2.8rem;
              --uib-speed: .9s;
              --uib-color: #5D3FD3;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              height: var(--uib-size);
              width: var(--uib-size);
            }
            .circular-pulse-dot {
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              height: 100%;
              width: 100%;
            }
            .circular-pulse-dot::before {
              content: '';
              height: 20%;
              width: 20%;
              border-radius: 50%;
              background-color: var(--uib-color);
              transform: scale(0);
              opacity: 0.5;
              animation: circular-pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
              box-shadow: 0 0 20px rgba(93, 63, 211, 0.3);
            }
            .circular-pulse-dot:nth-child(2) { transform: rotate(45deg); }
            .circular-pulse-dot:nth-child(2)::before { animation-delay: calc(var(--uib-speed) * -0.875); }
            .circular-pulse-dot:nth-child(3) { transform: rotate(90deg); }
            .circular-pulse-dot:nth-child(3)::before { animation-delay: calc(var(--uib-speed) * -0.75); }
            .circular-pulse-dot:nth-child(4) { transform: rotate(135deg); }
            .circular-pulse-dot:nth-child(4)::before { animation-delay: calc(var(--uib-speed) * -0.625); }
            .circular-pulse-dot:nth-child(5) { transform: rotate(180deg); }
            .circular-pulse-dot:nth-child(5)::before { animation-delay: calc(var(--uib-speed) * -0.5); }
            .circular-pulse-dot:nth-child(6) { transform: rotate(225deg); }
            .circular-pulse-dot:nth-child(6)::before { animation-delay: calc(var(--uib-speed) * -0.375); }
            .circular-pulse-dot:nth-child(7)::before { animation-delay: calc(var(--uib-speed) * -0.25); }
            .circular-pulse-dot:nth-child(8) { transform: rotate(315deg); }
            .circular-pulse-dot:nth-child(8)::before { animation-delay: calc(var(--uib-speed) * -0.125); }
            @keyframes circular-pulse0112 {
              0%, 100% { transform: scale(0); opacity: 0.5; }
              50% { transform: scale(1); opacity: 1; }
            }
            `}</style>
      <div className="circular-pulse">
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
      </div>
    </div>
  );
}
