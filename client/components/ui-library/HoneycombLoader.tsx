import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const HoneycombLoader = () => {
  return (
    <div className="honeycomb-wrapper">
      <style>
        {\`
        @keyframes honeycomb-animate {
          0%, 20%, 80%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          30%, 70% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .honeycomb-wrapper .honeycomb-loader {
          height: 24px;
          position: relative;
          width: 24px;
        }

        .honeycomb-wrapper .honeycomb-loader div {
          animation: honeycomb-animate 2.1s infinite backwards;
          background: #f3f3f3;
          height: 12px;
          margin-top: 6px;
          position: absolute;
          width: 24px;
        }

        .honeycomb-wrapper .honeycomb-loader div:after,
        .honeycomb-wrapper .honeycomb-loader div:before {
          content: '';
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          position: absolute;
          left: 0;
          right: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:after {
          top: -6px;
          border-bottom: 6px solid #f3f3f3;
        }

        .honeycomb-wrapper .honeycomb-loader div:before {
          bottom: -6px;
          border-top: 6px solid #f3f3f3;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(1) {
          animation-delay: 0s;
          left: -28px;
          top: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(2) {
          animation-delay: 0.1s;
          left: -14px;
          top: 22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(3) {
          animation-delay: 0.2s;
          left: 14px;
          top: 22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(4) {
          animation-delay: 0.3s;
          left: 28px;
          top: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(5) {
          animation-delay: 0.4s;
          left: 14px;
          top: -22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(6) {
          animation-delay: 0.5s;
          left: -14px;
          top: -22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(7) {
          animation-delay: 0.6s;
          left: 0;
          top: 0;
        }
        \`}
      </style>
      <div className="honeycomb-loader">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default HoneycombLoader;
`;

export function HoneycombLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[200px]">
      <div className="honeycomb-wrapper">
        <style>
          {`
        @keyframes honeycomb-animate {
          0%, 20%, 80%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          30%, 70% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .honeycomb-wrapper .honeycomb-loader {
          height: 24px;
          position: relative;
          width: 24px;
        }

        .honeycomb-wrapper .honeycomb-loader div {
          animation: honeycomb-animate 2.1s infinite backwards;
          background: #f3f3f3;
          height: 12px;
          margin-top: 6px;
          position: absolute;
          width: 24px;
        }

        .honeycomb-wrapper .honeycomb-loader div:after,
        .honeycomb-wrapper .honeycomb-loader div:before {
          content: '';
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          position: absolute;
          left: 0;
          right: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:after {
          top: -6px;
          border-bottom: 6px solid #f3f3f3;
        }

        .honeycomb-wrapper .honeycomb-loader div:before {
          bottom: -6px;
          border-top: 6px solid #f3f3f3;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(1) {
          animation-delay: 0s;
          left: -28px;
          top: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(2) {
          animation-delay: 0.1s;
          left: -14px;
          top: 22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(3) {
          animation-delay: 0.2s;
          left: 14px;
          top: 22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(4) {
          animation-delay: 0.3s;
          left: 28px;
          top: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(5) {
          animation-delay: 0.4s;
          left: 14px;
          top: -22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(6) {
          animation-delay: 0.5s;
          left: -14px;
          top: -22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(7) {
          animation-delay: 0.6s;
          left: 0;
          top: 0;
        }
        `}
        </style>
        <div className="honeycomb-loader">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export function HoneycombLoader() {
  return (
    <ComponentShowcase title="Honeycomb Loader" code={code} className="flex items-center justify-center p-20 min-h-[200px]">
      <HoneycombLoaderContent />
    </ComponentShowcase>
  );
}
