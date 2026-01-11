import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const PegtopLoader = () => {
  return (
    <div className="pegtop-loader-wrapper">
      <style>
        {\`
        .pegtop-loader-wrapper .pegtop-loader {
          --fill-color: #5c3d99;
          --shine-color: #5c3d9933;
          transform: scale(0.5); /* You can change the size */
          width: 100px;
          height: 100px; /* Fixed height for container */
          position: relative;
          filter: drop-shadow(0 0 10px var(--shine-color));
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pegtop-loader-wrapper .pegtop-one {
          position: absolute;
          animation: pegtop-flow-one 1s linear infinite;
        }

        .pegtop-loader-wrapper .pegtop-two {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(-100px);
          animation: pegtop-flow-two 1s linear infinite;
          animation-delay: 0.3s;
        }

        .pegtop-loader-wrapper .pegtop-three {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(100px);
          animation: pegtop-flow-three 1s linear infinite;
          animation-delay: 0.6s;
        }

        .pegtop-loader-wrapper svg g path:first-child {
          fill: var(--fill-color);
        }

        @keyframes pegtop-flow-one {
          0% {
            transform: scale(0.5) translateY(-200px);
            opacity: 0;
          }
          25% {
            transform: scale(0.75) translateY(-100px);
            opacity: 1;
          }
          50% {
            transform: scale(1) translateY(0px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) translateY(50px);
            opacity: 1;
          }
          100% {
            transform: scale(0) translateY(100px);
            opacity: 0;
          }
        }

        @keyframes pegtop-flow-two {
          0% {
            transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
            opacity: 0;
          }
        }

        @keyframes pegtop-flow-three {
          0% {
            transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
            opacity: 0;
          }
        }
        \`}
      </style>
      <div className="pegtop-loader">
        <svg className="pegtop-one" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
          <defs>
            <filter id="pegtop-shine">
              <feGaussianBlur stdDeviation={3} />
            </filter>
            <mask id="pegtop-mask">
              <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white" />
            </mask>
            <radialGradient id="pegtop-gradient-1" cx={50} cy={66} fx={50} fy={66} r={30} gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="black" stopOpacity="0.3" />
              <stop offset="50%" stopColor="black" stopOpacity="0.1" />
              <stop offset="100%" stopColor="black" stopOpacity={0} />
            </radialGradient>
            <radialGradient id="pegtop-gradient-2" cx={55} cy={20} fx={55} fy={20} r={30} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </radialGradient>
            <radialGradient id="pegtop-gradient-3" cx={85} cy={50} fx={85} fy={50} xlinkHref="#pegtop-gradient-2" />
            <radialGradient id="pegtop-gradient-4" cx={50} cy={58} fx={50} fy={58} r={60} gradientTransform="translate(0 47) scale(1 0.2)" xlinkHref="#pegtop-gradient-3" />
            <linearGradient id="pegtop-gradient-5" x1={50} y1={90} x2={50} y2={10} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="black" stopOpacity="0.2" />
              <stop offset="40%" stopColor="black" stopOpacity={0} />
            </linearGradient>
          </defs>
          <g>
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
          </g>
        </svg>
        <svg className="pegtop-two" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
           {/* Reusing defs from first svg via ID references, but for strict isolation we duplicate with same IDs inside this component scope or rely on the previous definitions if they are in DOM. Best practice for isolated component: define unique IDs. Since these are identical shapes, I will reference the IDs defined in the first SVG of this component. */}
          <g>
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
          </g>
        </svg>
        <svg className="pegtop-three" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
           <g>
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default PegtopLoader;
`;

export function PegtopLoader() {
    return (
        <ComponentShowcase title="Pegtop Loader" code={code} className="flex items-center justify-center p-12 min-h-[400px]">
            <div className="pegtop-loader-wrapper">
                <style>
                    {`
        .pegtop-loader-wrapper .pegtop-loader {
          --fill-color: #5c3d99;
          --shine-color: #5c3d9933;
          transform: scale(0.5); /* You can change the size */
          width: 100px;
          height: 100px; /* Fixed height for container */
          position: relative;
          filter: drop-shadow(0 0 10px var(--shine-color));
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pegtop-loader-wrapper .pegtop-one {
          position: absolute;
          animation: pegtop-flow-one 1s linear infinite;
        }

        .pegtop-loader-wrapper .pegtop-two {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(-100px);
          animation: pegtop-flow-two 1s linear infinite;
          animation-delay: 0.3s;
        }

        .pegtop-loader-wrapper .pegtop-three {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(100px);
          animation: pegtop-flow-three 1s linear infinite;
          animation-delay: 0.6s;
        }

        .pegtop-loader-wrapper svg g path:first-child {
          fill: var(--fill-color);
        }

        @keyframes pegtop-flow-one {
          0% {
            transform: scale(0.5) translateY(-200px);
            opacity: 0;
          }
          25% {
            transform: scale(0.75) translateY(-100px);
            opacity: 1;
          }
          50% {
            transform: scale(1) translateY(0px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) translateY(50px);
            opacity: 1;
          }
          100% {
            transform: scale(0) translateY(100px);
            opacity: 0;
          }
        }

        @keyframes pegtop-flow-two {
          0% {
            transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
            opacity: 0;
          }
        }

        @keyframes pegtop-flow-three {
          0% {
            transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
            opacity: 0;
          }
        }
        `}
                </style>
                <div className="pegtop-loader">
                    <svg className="pegtop-one" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                        <defs>
                            <filter id="pegtop-shine">
                                <feGaussianBlur stdDeviation={3} />
                            </filter>
                            <mask id="pegtop-mask">
                                <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white" />
                            </mask>
                            <radialGradient id="pegtop-gradient-1" cx={50} cy={66} fx={50} fy={66} r={30} gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="black" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="black" stopOpacity={0} />
                            </radialGradient>
                            <radialGradient id="pegtop-gradient-2" cx={55} cy={20} fx={55} fy={20} r={30} gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="white" stopOpacity={0} />
                            </radialGradient>
                            <radialGradient id="pegtop-gradient-3" cx={85} cy={50} fx={85} fy={50} xlinkHref="#pegtop-gradient-2" />
                            <radialGradient id="pegtop-gradient-4" cx={50} cy={58} fx={50} fy={58} r={60} gradientTransform="translate(0 47) scale(1 0.2)" xlinkHref="#pegtop-gradient-3" />
                            <linearGradient id="pegtop-gradient-5" x1={50} y1={90} x2={50} y2={10} gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                                <stop offset="40%" stopColor="black" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <g>
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
                        </g>
                    </svg>
                    <svg className="pegtop-two" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                        <g>
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
                        </g>
                    </svg>
                    <svg className="pegtop-three" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                        <g>
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
                            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
                        </g>
                    </svg>
                </div>
            </div>
        </ComponentShowcase>
    );
}
