import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const LiquidLoader = () => {
  return (
    <div className="liquid-loader-wrapper">
      <style>
        {\`
        .liquid-loader-wrapper .liquid-loader {
          --color-one: #ffbf48;
          --color-two: #be4a1d;
          --color-three: #ffbf4780;
          --color-four: #bf4a1d80;
          --color-five: #ffbf4740;
          --time-animation: 2s;
          --size: 1;
          position: relative;
          border-radius: 50%;
          transform: scale(var(--size));
          box-shadow:
            0 0 25px 0 var(--color-three),
            0 20px 50px 0 var(--color-four);
          animation: liquid-colorize calc(var(--time-animation) * 3) ease-in-out infinite;
          width: 100px;
          height: 100px;
        }

        .liquid-loader-wrapper .liquid-loader::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border-top: solid 1px var(--color-one);
          border-bottom: solid 1px var(--color-two);
          background: linear-gradient(180deg, var(--color-five), var(--color-four));
          box-shadow:
            inset 0 10px 10px 0 var(--color-three),
            inset 0 -10px 10px 0 var(--color-four);
        }

        .liquid-loader-wrapper .liquid-loader .liquid-box {
          width: 100px;
          height: 100px;
          background: linear-gradient(
            180deg,
            var(--color-one) 30%,
            var(--color-two) 70%
          );
          mask: url(#liquid-clipping);
          -webkit-mask: url(#liquid-clipping);
        }

        .liquid-loader-wrapper .liquid-loader svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping {
          filter: contrast(15);
          animation: liquid-roundness calc(var(--time-animation) / 2) linear infinite;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon {
          filter: blur(7px);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(1) {
          transform-origin: 75% 25%;
          transform: rotate(90deg);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(2) {
          transform-origin: 50% 50%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(3) {
          transform-origin: 50% 60%;
          animation: liquid-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -3);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(4) {
          transform-origin: 40% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(5) {
          transform-origin: 40% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
          animation-delay: calc(var(--time-animation) / -2);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(6) {
          transform-origin: 60% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(7) {
          transform-origin: 60% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -1.5);
        }

        @keyframes liquid-rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes liquid-roundness {
          0% {
            filter: contrast(15);
          }
          20% {
            filter: contrast(3);
          }
          40% {
            filter: contrast(3);
          }
          60% {
            filter: contrast(15);
          }
          100% {
            filter: contrast(15);
          }
        }

        @keyframes liquid-colorize {
          0% {
            filter: hue-rotate(0deg);
          }
          20% {
            filter: hue-rotate(-30deg);
          }
          40% {
            filter: hue-rotate(-60deg);
          }
          60% {
            filter: hue-rotate(-90deg);
          }
          80% {
            filter: hue-rotate(-45deg);
          }
          100% {
            filter: hue-rotate(0deg);
          }
        }
        \`}
      </style>
      <div className="liquid-loader">
        <svg width={100} height={100} viewBox="0 0 100 100">
          <defs>
            <mask id="liquid-clipping">
              <polygon points="0,0 100,0 100,100 0,100" fill="black" />
              <polygon points="25,25 75,25 50,75" fill="white" />
              <polygon points="50,25 75,75 25,75" fill="white" />
              <polygon points="35,35 65,35 50,65" fill="white" />
              <polygon points="35,35 65,35 50,65" fill="white" />
              <polygon points="35,35 65,35 50,65" fill="white" />
              <polygon points="35,35 65,35 50,65" fill="white" />
            </mask>
          </defs>
        </svg>
        <div className="liquid-box" />
      </div>
    </div>
  );
}

export default LiquidLoader;
`;

export function LiquidLoader() {
    return (
        <ComponentShowcase title="Liquid Loader" code={code} className="flex items-center justify-center p-12">
            <div className="liquid-loader-wrapper">
                <style>
                    {`
        .liquid-loader-wrapper .liquid-loader {
          --color-one: #ffbf48;
          --color-two: #be4a1d;
          --color-three: #ffbf4780;
          --color-four: #bf4a1d80;
          --color-five: #ffbf4740;
          --time-animation: 2s;
          --size: 1;
          position: relative;
          border-radius: 50%;
          transform: scale(var(--size));
          box-shadow:
            0 0 25px 0 var(--color-three),
            0 20px 50px 0 var(--color-four);
          animation: liquid-colorize calc(var(--time-animation) * 3) ease-in-out infinite;
          width: 100px;
          height: 100px;
        }

        .liquid-loader-wrapper .liquid-loader::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border-top: solid 1px var(--color-one);
          border-bottom: solid 1px var(--color-two);
          background: linear-gradient(180deg, var(--color-five), var(--color-four));
          box-shadow:
            inset 0 10px 10px 0 var(--color-three),
            inset 0 -10px 10px 0 var(--color-four);
        }

        .liquid-loader-wrapper .liquid-loader .liquid-box {
          width: 100px;
          height: 100px;
          background: linear-gradient(
            180deg,
            var(--color-one) 30%,
            var(--color-two) 70%
          );
          mask: url(#liquid-clipping);
          -webkit-mask: url(#liquid-clipping);
        }

        .liquid-loader-wrapper .liquid-loader svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping {
          filter: contrast(15);
          animation: liquid-roundness calc(var(--time-animation) / 2) linear infinite;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon {
          filter: blur(7px);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(1) {
          transform-origin: 75% 25%;
          transform: rotate(90deg);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(2) {
          transform-origin: 50% 50%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(3) {
          transform-origin: 50% 60%;
          animation: liquid-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -3);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(4) {
          transform-origin: 40% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(5) {
          transform-origin: 40% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
          animation-delay: calc(var(--time-animation) / -2);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(6) {
          transform-origin: 60% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(7) {
          transform-origin: 60% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -1.5);
        }

        @keyframes liquid-rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes liquid-roundness {
          0% {
            filter: contrast(15);
          }
          20% {
            filter: contrast(3);
          }
          40% {
            filter: contrast(3);
          }
          60% {
            filter: contrast(15);
          }
          100% {
            filter: contrast(15);
          }
        }

        @keyframes liquid-colorize {
          0% {
            filter: hue-rotate(0deg);
          }
          20% {
            filter: hue-rotate(-30deg);
          }
          40% {
            filter: hue-rotate(-60deg);
          }
          60% {
            filter: hue-rotate(-90deg);
          }
          80% {
            filter: hue-rotate(-45deg);
          }
          100% {
            filter: hue-rotate(0deg);
          }
        }
        `}
                </style>
                <div className="liquid-loader">
                    <svg width={100} height={100} viewBox="0 0 100 100">
                        <defs>
                            <mask id="liquid-clipping">
                                <polygon points="0,0 100,0 100,100 0,100" fill="black" />
                                <polygon points="25,25 75,25 50,75" fill="white" />
                                <polygon points="50,25 75,75 25,75" fill="white" />
                                <polygon points="35,35 65,35 50,65" fill="white" />
                                <polygon points="35,35 65,35 50,65" fill="white" />
                                <polygon points="35,35 65,35 50,65" fill="white" />
                                <polygon points="35,35 65,35 50,65" fill="white" />
                            </mask>
                        </defs>
                    </svg>
                    <div className="liquid-box" />
                </div>
            </div>
        </ComponentShowcase>
    );
}
