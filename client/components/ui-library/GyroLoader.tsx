import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const GyroLoader = () => {
  return (
    <div className="gyro-wrapper">
      <style>
        {\`
        .gyro-wrapper .gyro-spinner {
          border: 0 solid transparent;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          position: relative;
        }

        .gyro-wrapper .gyro-loader {
          width: inherit;
          height: inherit;
          position: absolute;
        }

        .gyro-wrapper .gyro-loader::before,
        .gyro-wrapper .gyro-loader::after {
          content: '';
          border: 3px solid #505065;
          border-radius: 50%;
          width: inherit;
          height: inherit;
          position: absolute;
          opacity: 1;
        }

        .gyro-wrapper .gyro-l1::before,
        .gyro-wrapper .gyro-l1::after {
          animation: gyro-clockwiseZ 2.5s infinite;
        }

        .gyro-wrapper .gyro-l2::after,
        .gyro-wrapper .gyro-l2::before {
          animation: gyro-anticlockwiseZ 2.5s infinite;
        }

        @keyframes gyro-clockwiseZ {
          0%, 100% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(180deg) skew(-10deg, -5deg);
          }
        }

        @keyframes gyro-anticlockwiseZ {
          0%, 100% {
            transform: rotateX(0);
          }
          50% {
            transform: rotateX(-180deg) skew(10deg, 5deg);
          }
        }
        \`}
      </style>
      <div className="gyro-spinner">
        <div className="gyro-loader gyro-l1" />
        <div className="gyro-loader gyro-l2" />
      </div>
    </div>
  );
}

export default GyroLoader;
`;

export function GyroLoader() {
    return (
        <ComponentShowcase title="Gyro Loader" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
            <div className="gyro-wrapper">
                <style>
                    {`
        .gyro-wrapper .gyro-spinner {
          border: 0 solid transparent;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          position: relative;
        }

        .gyro-wrapper .gyro-loader {
          width: inherit;
          height: inherit;
          position: absolute;
        }

        .gyro-wrapper .gyro-loader::before,
        .gyro-wrapper .gyro-loader::after {
          content: '';
          border: 3px solid #505065;
          border-radius: 50%;
          width: inherit;
          height: inherit;
          position: absolute;
          opacity: 1;
        }

        .gyro-wrapper .gyro-l1::before,
        .gyro-wrapper .gyro-l1::after {
          animation: gyro-clockwiseZ 2.5s infinite;
        }

        .gyro-wrapper .gyro-l2::after,
        .gyro-wrapper .gyro-l2::before {
          animation: gyro-anticlockwiseZ 2.5s infinite;
        }

        @keyframes gyro-clockwiseZ {
          0%, 100% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(180deg) skew(-10deg, -5deg);
          }
        }

        @keyframes gyro-anticlockwiseZ {
          0%, 100% {
            transform: rotateX(0);
          }
          50% {
            transform: rotateX(-180deg) skew(10deg, 5deg);
          }
        }
        `}
                </style>
                <div className="gyro-spinner">
                    <div className="gyro-loader gyro-l1" />
                    <div className="gyro-loader gyro-l2" />
                </div>
            </div>
        </ComponentShowcase>
    );
}
