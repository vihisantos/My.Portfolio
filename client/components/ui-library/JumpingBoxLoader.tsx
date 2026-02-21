import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="jumping-box-loader-wrapper">
      <style>
        {\`
        .jumping-loader {
          width: 48px;
          height: 48px;
          margin: auto;
          position: relative;
        }

        .jumping-loader:before {
          content: '';
          width: 48px;
          height: 5px;
          background: #f0808050;
          position: absolute;
          top: 60px;
          left: 0;
          border-radius: 50%;
          animation: shadow324 0.5s linear infinite;
        }

        .jumping-loader:after {
          content: '';
          width: 100%;
          height: 100%;
          background: #f08080;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 4px;
          animation: jump7456 0.5s linear infinite;
        }

        @keyframes jump7456 {
          15% {
            border-bottom-right-radius: 3px;
          }

          25% {
            transform: translateY(9px) rotate(22.5deg);
          }

          50% {
            transform: translateY(18px) scale(1, .9) rotate(45deg);
            border-bottom-right-radius: 40px;
          }

          75% {
            transform: translateY(9px) rotate(67.5deg);
          }

          100% {
            transform: translateY(0) rotate(90deg);
          }
        }

        @keyframes shadow324 {

          0%,
            100% {
            transform: scale(1, 1);
          }

          50% {
            transform: scale(1.2, 1);
          }
        }
        \`}
      </style>
      <div className="jumping-loader" />
    </div>
  );
}

export default Loader;
`;

export function JumpingBoxLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[250px]">
      <div className="jumping-box-loader-wrapper">
        <style>
          {`
            .jumping-loader {
            width: 48px;
            height: 48px;
            margin: auto;
            position: relative;
            }

            .jumping-loader:before {
            content: '';
            width: 48px;
            height: 5px;
            background: #f0808050;
            position: absolute;
            top: 60px;
            left: 0;
            border-radius: 50%;
            animation: shadow324 0.5s linear infinite;
            }

            .jumping-loader:after {
            content: '';
            width: 100%;
            height: 100%;
            background: #f08080;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 4px;
            animation: jump7456 0.5s linear infinite;
            }

            @keyframes jump7456 {
            15% {
                border-bottom-right-radius: 3px;
            }

            25% {
                transform: translateY(9px) rotate(22.5deg);
            }

            50% {
                transform: translateY(18px) scale(1, .9) rotate(45deg);
                border-bottom-right-radius: 40px;
            }

            75% {
                transform: translateY(9px) rotate(67.5deg);
            }

            100% {
                transform: translateY(0) rotate(90deg);
            }
            }

            @keyframes shadow324 {

            0%,
                100% {
                transform: scale(1, 1);
            }

            50% {
                transform: scale(1.2, 1);
            }
            }
            `}
        </style>
        <div className="jumping-loader" />
      </div>
    </div>
  );
}

export function JumpingBoxLoader() {
  return (
    <ComponentShowcase title="Jumping Box Loader" code={code} className="min-h-[250px]">
      <JumpingBoxLoaderContent />
    </ComponentShowcase>
  );
}
