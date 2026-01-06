import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="bouncing-ball-loader-wrapper">
      <style>
        {\`
        .bouncing-ball-loader {
          position: relative;
          width: 120px;
          height: 90px;
          margin: 0 auto;
        }

        .bouncing-ball-loader:before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50px;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #2a9d8f;
          animation: bouncing-ball-bounce 0.5s ease-in-out infinite alternate;
        }

        .bouncing-ball-loader:after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          height: 7px;
          width: 45px;
          border-radius: 4px;
          box-shadow: 0 5px 0 #000, -35px 50px 0 #000, -70px 95px 0 #000;
          animation: bouncing-ball-step 1s ease-in-out infinite;
        }

        .dark .bouncing-ball-loader:after {
          box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
        }

        @keyframes bouncing-ball-bounce {
          0% { transform: scale(1, 0.7); }
          40% { transform: scale(0.8, 1.2); }
          60% { transform: scale(1, 1); }
          100% { bottom: 140px; }
        }

        @keyframes bouncing-ball-step {
          0% {
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                    0 10px 0 #000,
                    -35px 50px 0 #000,
                    -70px 90px 0 #000;
          }
          100% {
            box-shadow: 0 10px 0 #000,
                    -35px 50px 0 #000,
                    -70px 90px 0 #000,
                    -70px 90px 0 rgba(0, 0, 0, 0);
          }
        }

        @keyframes bouncing-ball-step-dark {
          0% {
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                    0 10px 0 #f2f2f2,
                    -35px 50px 0 #f2f2f2,
                    -70px 90px 0 #f2f2f2;
          }
          100% {
            box-shadow: 0 10px 0 #f2f2f2,
                    -35px 50px 0 #f2f2f2,
                    -70px 90px 0 #f2f2f2,
                    -70px 90px 0 rgba(0, 0, 0, 0);
          }
        }

        .dark .bouncing-ball-loader:after {
           animation-name: bouncing-ball-step-dark;
        }
        \`}
      </style>
      <div className="bouncing-ball-loader" />
    </div>
  );
}

export default Loader;
`;

export function BouncingBallLoader() {
  return (
    <ComponentShowcase title="Bouncing Ball Loader" code={code} className="min-h-[250px] flex items-center justify-center">
      <div className="bouncing-ball-loader-wrapper w-full h-full min-h-[200px] flex items-center justify-center bg-transparent rounded-lg">
        <style>
          {`
            .bouncing-ball-loader {
              position: relative;
              width: 120px;
              height: 90px;
              margin: 0 auto;
            }

            .bouncing-ball-loader:before {
              content: "";
              position: absolute;
              bottom: 30px;
              left: 50px;
              height: 30px;
              width: 30px;
              border-radius: 50%;
              background: #2a9d8f;
              animation: bouncing-ball-bounce 0.5s ease-in-out infinite alternate;
            }

            .bouncing-ball-loader:after {
              content: "";
              position: absolute;
              right: 0;
              top: 0;
              height: 7px;
              width: 45px;
              border-radius: 4px;
              box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
              animation: bouncing-ball-step 1s ease-in-out infinite;
            }

            @keyframes bouncing-ball-bounce {
              0% { transform: scale(1, 0.7); }
              40% { transform: scale(0.8, 1.2); }
              60% { transform: scale(1, 1); }
              100% { bottom: 140px; }
            }

            @keyframes bouncing-ball-step {
              0% {
                box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                        0 10px 0 #f2f2f2,
                        -35px 50px 0 #f2f2f2,
                        -70px 90px 0 #f2f2f2;
              }
              100% {
                box-shadow: 0 10px 0 #f2f2f2,
                        -35px 50px 0 #f2f2f2,
                        -70px 90px 0 #f2f2f2,
                        -70px 90px 0 rgba(0, 0, 0, 0);
              }
            }
            `}
        </style>
        <div className="bouncing-ball-loader" />
      </div>
    </ComponentShowcase>
  );
}
