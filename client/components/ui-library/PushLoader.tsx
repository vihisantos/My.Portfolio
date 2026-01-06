import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const PushLoader = () => {
  return (
    <div className="push-loader-wrapper">
      <style>
        {\`
        .push-loader {
          display: block;
          width: 84px;
          height: 84px;
          position: relative;
        }

        .push-loader:before, .push-loader:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: hsl(var(--primary));
          transform: translate(-50% , -100%)  scale(0);
          animation: push-loader-anim 2s infinite linear;
        }

        .dark .push-loader:before, .dark .push-loader:after {
          background: #FFF;
        }

        .push-loader:after {
          animation-delay: 1s;
        }

        @keyframes push-loader-anim {
          0% , 50% {
            transform: translate(-50% , 0%)  scale(1)
          }
          100% {
            transform: translate(-50%, -100%) scale(0)
          }
        }
        \`}
      </style>
      <span className="push-loader" />
    </div>
  );
}

export default PushLoader;
`;

export function PushLoader() {
  return (
    <ComponentShowcase title="Push Loader" code={code} className="min-h-[200px] flex items-center justify-center">
      <div className="push-loader-wrapper bg-transparent p-8 rounded-xl relative overflow-hidden">
        <style>
          {`
            .push-loader {
              display: block;
              width: 84px;
              height: 84px;
              position: relative;
            }

            .push-loader:before, .push-loader:after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: 0;
              width: 64px;
              height: 64px;
              border-radius: 50%;
              background: #000;
              transform: translate(-50% , -100%)  scale(0);
              animation: push-loader-anim 2s infinite linear;
            }

            .dark .push-loader:before, .dark .push-loader:after {
              background: #FFF;
            }

            .push-loader:after {
              animation-delay: 1s;
            }

            @keyframes push-loader-anim {
              0% , 50% {
                transform: translate(-50% , 0%)  scale(1)
              }
              100% {
                transform: translate(-50%, -100%) scale(0)
              }
            }
            `}
        </style>
        <span className="push-loader" />
      </div>
    </ComponentShowcase>
  );
}
