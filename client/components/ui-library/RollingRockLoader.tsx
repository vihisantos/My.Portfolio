import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="rolling-rock-wrapper">
      <style>
        {\`
        .rolling-rock-loader {
          position: relative;
          font-size: 16px;
          width: 5.5em;
          height: 5.5em;
        }

        .rolling-rock-loader:before {
          content: '';
          position: absolute;
          transform: translate(-50%, -50%) rotate(45deg);
          height: 100%;
          width: 4px;
          background: #9ca3af;
          left: 50%;
          top: 50%;
        }

        .rolling-rock-loader:after {
          content: '';
          position: absolute;
          left: 0.2em;
          bottom: 0.18em;
          width: 1em;
          height: 1em;
          background-color: orange;
          border-radius: 15%;
          animation: rollingRock-anim 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
        }

        @keyframes rollingRock-anim {
          0% {
            transform: translate(0, -1em) rotate(-45deg)
          }

          5% {
            transform: translate(0, -1em) rotate(-50deg)
          }

          20% {
            transform: translate(1em, -2em) rotate(47deg)
          }

          25% {
            transform: translate(1em, -2em) rotate(45deg)
          }

          30% {
            transform: translate(1em, -2em) rotate(40deg)
          }

          45% {
            transform: translate(2em, -3em) rotate(137deg)
          }

          50% {
            transform: translate(2em, -3em) rotate(135deg)
          }

          55% {
            transform: translate(2em, -3em) rotate(130deg)
          }

          70% {
            transform: translate(3em, -4em) rotate(217deg)
          }

          75% {
            transform: translate(3em, -4em) rotate(220deg)
          }

          100% {
            transform: translate(0, -1em) rotate(-225deg)
          }
        }
        \`}
      </style>
      <div className="rolling-rock-loader" />
    </div>
  );
}

export default Loader;
`;

export function RollingRockLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[250px]">
      <div className="rolling-rock-wrapper">
        <style>
          {`
            .rolling-rock-loader {
              position: relative;
              font-size: 16px;
              width: 5.5em;
              height: 5.5em;
              margin: 0 auto;
            }

            .rolling-rock-loader:before {
              content: '';
              position: absolute;
              transform: translate(-50%, -50%) rotate(45deg);
              height: 100%;
              width: 4px;
              background: #9ca3af;
              left: 50%;
              top: 50%;
            }

            .rolling-rock-loader:after {
              content: '';
              position: absolute;
              left: 0.2em;
              bottom: 0.18em;
              width: 1em;
              height: 1em;
              background-color: orange;
              border-radius: 15%;
              animation: rollingRock-anim 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
            }

            @keyframes rollingRock-anim {
              0% {
                transform: translate(0, -1em) rotate(-45deg)
              }

              5% {
                transform: translate(0, -1em) rotate(-50deg)
              }

              20% {
                transform: translate(1em, -2em) rotate(47deg)
              }

              25% {
                transform: translate(1em, -2em) rotate(45deg)
              }

              30% {
                transform: translate(1em, -2em) rotate(40deg)
              }

              45% {
                transform: translate(2em, -3em) rotate(137deg)
              }

              50% {
                transform: translate(2em, -3em) rotate(135deg)
              }

              55% {
                transform: translate(2em, -3em) rotate(130deg)
              }

              70% {
                transform: translate(3em, -4em) rotate(217deg)
              }

              75% {
                transform: translate(3em, -4em) rotate(220deg)
              }

              100% {
                transform: translate(0, -1em) rotate(-225deg)
              }
            }
            `}
        </style>
        <div className="rolling-rock-loader" />
      </div>
    </div>
  );
}

export function RollingRockLoader() {
  return (
    <ComponentShowcase title="Rolling Rock Loader" code={code} className="min-h-[250px]">
      <RollingRockLoaderContent />
    </ComponentShowcase>
  );
}
