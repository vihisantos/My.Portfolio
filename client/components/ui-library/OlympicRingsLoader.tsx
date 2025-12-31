import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="olympic-rings-loader-wrapper">
      <style>
        {\`
        .olympic-rings-loader {
          width: 6em;
          height: 6em;
        }

        .olympic-rings-loader__ring {
          animation: olympic-rings-a 2s linear infinite;
        }

        .olympic-rings-loader__ring--a {
          stroke: #f42f25;
        }

        .olympic-rings-loader__ring--b {
          animation-name: olympic-rings-b;
          stroke: #f49725;
        }

        .olympic-rings-loader__ring--c {
          animation-name: olympic-rings-c;
          stroke: #255ff4;
        }

        .olympic-rings-loader__ring--d {
          animation-name: olympic-rings-d;
          stroke: #f42582;
        }

        /* Animations */
        @keyframes olympic-rings-a {
          from, 4% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
          12% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -335;
          }
          32% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -595;
          }
          40%, 54% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -660;
          }
          62% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -665;
          }
          82% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -925;
          }
          90%, to {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -990;
          }
        }

        @keyframes olympic-rings-b {
          from, 12% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -110;
          }
          20% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -115;
          }
          40% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -195;
          }
          48%, 62% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          70% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          90% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -305;
          }
          98%, to {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
        }

        @keyframes olympic-rings-c {
          from {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }
          8% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }
          28% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }
          36%, 58% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          66% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          86% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }
          94%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }

        @keyframes olympic-rings-d {
          from, 8% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }
          16% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }
          36% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }
          44%, 50% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          58% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          78% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }
          86%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }
        \`}
      </style>
      <svg className="olympic-rings-loader" width={240} height={240} viewBox="0 0 240 240">
        <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--a" cx={120} cy={120} r={105} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 660" strokeDashoffset={-330} strokeLinecap="round" />
        <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--b" cx={120} cy={120} r={35} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 220" strokeDashoffset={-110} strokeLinecap="round" />
        <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--c" cx={85} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
        <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--d" cx={155} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default Loader;
`;

export function OlympicRingsLoader() {
    return (
        <ComponentShowcase title="Olympic Rings Loader" code={code} className="min-h-[250px] flex items-center justify-center">
            <div className="olympic-rings-loader-wrapper scale-75">
                <style>
                    {`
            .olympic-rings-loader {
              width: 6em;
              height: 6em;
            }

            .olympic-rings-loader__ring {
              animation: olympic-rings-a 2s linear infinite;
            }

            .olympic-rings-loader__ring--a {
              stroke: #f42f25;
            }

            .olympic-rings-loader__ring--b {
              animation-name: olympic-rings-b;
              stroke: #f49725;
            }

            .olympic-rings-loader__ring--c {
              animation-name: olympic-rings-c;
              stroke: #255ff4;
            }

            .olympic-rings-loader__ring--d {
              animation-name: olympic-rings-d;
              stroke: #f42582;
            }

            /* Animations */
            @keyframes olympic-rings-a {
              from, 4% {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -330;
              }
              12% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -335;
              }
              32% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -595;
              }
              40%, 54% {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -660;
              }
              62% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -665;
              }
              82% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -925;
              }
              90%, to {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -990;
              }
            }

            @keyframes olympic-rings-b {
              from, 12% {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -110;
              }
              20% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -115;
              }
              40% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -195;
              }
              48%, 62% {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              70% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              90% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -305;
              }
              98%, to {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -330;
              }
            }

            @keyframes olympic-rings-c {
              from {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: 0;
              }
              8% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -5;
              }
              28% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -175;
              }
              36%, 58% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              66% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              86% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -395;
              }
              94%, to {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -440;
              }
            }

            @keyframes olympic-rings-d {
              from, 8% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: 0;
              }
              16% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -5;
              }
              36% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -175;
              }
              44%, 50% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              58% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              78% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -395;
              }
              86%, to {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -440;
              }
            }
            `}
                </style>
                <svg className="olympic-rings-loader" width={240} height={240} viewBox="0 0 240 240">
                    <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--a" cx={120} cy={120} r={105} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 660" strokeDashoffset={-330} strokeLinecap="round" />
                    <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--b" cx={120} cy={120} r={35} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 220" strokeDashoffset={-110} strokeLinecap="round" />
                    <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--c" cx={85} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
                    <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--d" cx={155} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
                </svg>
            </div>
        </ComponentShowcase>
    );
}
