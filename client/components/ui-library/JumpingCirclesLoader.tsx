import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const JumpingCirclesLoader = () => {
  return (
    <div className="jumping-circles-view">
      <style>
        {\`
        .jumping-circles-wrapper {
          width: 200px;
          height: 60px;
          position: relative;
          z-index: 1;
        }

        .jumping-circle {
          width: 20px;
          height: 20px;
          position: absolute;
          border-radius: 50%;
          background-color: #fff;
          left: 15%;
          transform-origin: 50%;
          animation: jumping-circle-anim .5s alternate infinite ease;
        }

        @keyframes jumping-circle-anim {
          0% {
            top: 60px;
            height: 5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
          }
          40% {
            height: 20px;
            border-radius: 50%;
            transform: scaleX(1);
          }
          100% {
            top: 0%;
          }
        }

        .jumping-circle:nth-child(2) {
          left: 45%;
          animation-delay: .2s;
        }

        .jumping-circle:nth-child(3) {
          left: auto;
          right: 15%;
          animation-delay: .3s;
        }

        .jumping-shadow {
          width: 20px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.5);
          position: absolute;
          top: 62px;
          transform-origin: 50%;
          z-index: -1;
          left: 15%;
          filter: blur(1px);
          animation: jumping-shadow-anim .5s alternate infinite ease;
        }

        @keyframes jumping-shadow-anim {
          0% {
            transform: scaleX(1.5);
          }
          40% {
            transform: scaleX(1);
            opacity: .7;
          }
          100% {
            transform: scaleX(.2);
            opacity: .4;
          }
        }

        .jumping-shadow:nth-child(4) {
          left: 45%;
          animation-delay: .2s
        }

        .jumping-shadow:nth-child(5) {
          left: auto;
          right: 15%;
          animation-delay: .3s;
        }
        \`}
      </style>
      <div className="jumping-circles-wrapper">
        <div className="jumping-circle" />
        <div className="jumping-circle" />
        <div className="jumping-circle" />
        <div className="jumping-shadow" />
        <div className="jumping-shadow" />
        <div className="jumping-shadow" />
      </div>
    </div>
  );
}

export default JumpingCirclesLoader;
`;

export function JumpingCirclesLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[200px]">
      <div className="jumping-circles-view bg-transparent p-10 rounded-xl flex items-center justify-center overflow-hidden">
        <style>
          {`
            .jumping-circles-wrapper {
              width: 200px;
              height: 60px;
              position: relative;
              z-index: 1;
            }

            .jumping-circle {
              width: 20px;
              height: 20px;
              position: absolute;
              border-radius: 50%;
              background-color: hsl(var(--primary));
              left: 15%;
              transform-origin: 50%;
              animation: jumping-circle-anim .5s alternate infinite ease;
            }

            @keyframes jumping-circle-anim {
              0% {
                top: 60px;
                height: 5px;
                border-radius: 50px 50px 25px 25px;
                transform: scaleX(1.7);
              }
              40% {
                height: 20px;
                border-radius: 50%;
                transform: scaleX(1);
              }
              100% {
                top: 0%;
              }
            }

            .jumping-circle:nth-child(2) {
              left: 45%;
              animation-delay: .2s;
            }

            .jumping-circle:nth-child(3) {
              left: auto;
              right: 15%;
              animation-delay: .3s;
            }

            .jumping-shadow {
              width: 20px;
              height: 4px;
              border-radius: 50%;
              background-color: rgba(0,0,0,0.5);
              position: absolute;
              top: 62px;
              transform-origin: 50%;
              z-index: -1;
              left: 15%;
              filter: blur(1px);
              animation: jumping-shadow-anim .5s alternate infinite ease;
            }

            @keyframes jumping-shadow-anim {
              0% {
                transform: scaleX(1.5);
              }
              40% {
                transform: scaleX(1);
                opacity: .7;
              }
              100% {
                transform: scaleX(.2);
                opacity: .4;
              }
            }

            .jumping-shadow:nth-child(4) {
              left: 45%;
              animation-delay: .2s
            }

            .jumping-shadow:nth-child(5) {
              left: auto;
              right: 15%;
              animation-delay: .3s;
            }
            `}
        </style>
        <div className="jumping-circles-wrapper scale-75 sm:scale-100">
          <div className="jumping-circle" />
          <div className="jumping-circle" />
          <div className="jumping-circle" />
          <div className="jumping-shadow" />
          <div className="jumping-shadow" />
          <div className="jumping-shadow" />
        </div>
      </div>
    </div>
  );
}

export function JumpingCirclesLoader() {
  return (
    <ComponentShowcase title="Jumping Circles Loader" code={code} className="min-h-[200px] flex items-center justify-center">
      <JumpingCirclesLoaderContent />
    </ComponentShowcase>
  );
}

