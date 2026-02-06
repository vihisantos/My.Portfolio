import{j as i}from"./ui-BipaFs7C.js";import{C as e}from"./UILibrary-B2UNDNdm.js";import"./vendor-BZTSXe9S.js";import"./index-B751N4X4.js";import"./framer-D9CikaFD.js";import"./SEO-dQpLBxKc.js";import"./Navigation-DbhStsxW.js";import"./input-DrAQn1WP.js";const r=`import React from 'react';

const Pattern = () => {
  return (
    <div className="matrix-loader-wrapper">
      <style>
        {\`
        .matrix-container {
          background-color: #05050a;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
          grid-auto-rows: 40px;
          min-width: 100%; /* Adjusted for container */
          min-height: 100%; /* Adjusted for container */
          font-size: 32px;
          color: rgba(0, 150, 255, 0.4);
          font-family: "Courier New", Courier, monospace;
          justify-content: center;
          align-content: center;
        }

        .matrix-container > span {
          text-align: center;
          text-shadow: 0 0 5px rgba(0, 150, 255, 0.5);
          user-select: none;
          transition: color 0.5s, text-shadow 0.5s;
          line-height: 1;
        }

        /* Animation classes for random pulsing */
        .matrix-container > span:nth-child(19n + 2) { animation: matrix-pulse 3.5s ease-in-out infinite 0.2s; }
        .matrix-container > span:nth-child(29n + 1) { animation: matrix-pulse 4.1s ease-in-out infinite 0.7s; }
        .matrix-container > span:nth-child(11n) { color: rgba(100, 200, 255, 0.7); animation: matrix-pulse 2.9s ease-in-out infinite 1.1s; }
        .matrix-container > span:nth-child(37n + 10) { animation: matrix-pulse 5.3s ease-in-out infinite 1.5s; }
        /* ... more random selectors ... */

        @keyframes matrix-pulse {
          0%, 100% {
            color: rgba(0, 150, 255, 0.4);
            text-shadow: 0 0 5px rgba(0, 150, 255, 0.5);
          }
          30% {
            color: rgba(100, 200, 255, 1);
            text-shadow: 0 0 10px rgba(100, 200, 255, 1), 0 0 15px rgba(100, 200, 255, 1);
          }
          50% {
            color: rgba(255, 105, 180, 1);
            text-shadow: 0 0 10px rgba(255, 105, 180, 1), 0 0 15px rgba(255, 105, 180, 1);
          }
          70% {
            color: #ffffff;
            text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
          }
        }
        \`}
      </style>
      <div className="matrix-container">
        {/* Many spans with Japanese characters... */}
        <span>ア</span><span>イ</span><span>ウ</span>...
      </div>
    </div>
  );
}

export default Pattern;
`;function d(){const n=Array(200).fill("アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ").join("");return i.jsx(e,{title:"Matrix Loader",code:r,className:"min-h-[300px] flex items-center justify-center overflow-hidden",children:i.jsxs("div",{className:"matrix-loader-wrapper w-full h-full absolute inset-0",children:[i.jsx("style",{children:`
            .matrix-container {
              background-color: #05050a;
              width: 100%;
              height: 100%;
              overflow: hidden;
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(30px, 1fr)); /* Slightly smaller for card */
              grid-auto-rows: 30px;
              font-size: 24px; /* Slightly smaller for card */
              color: rgba(0, 150, 255, 0.4);
              font-family: "Courier New", Courier, monospace;
              justify-content: center;
              align-content: center;
            }

            .matrix-container > span {
              text-align: center;
              text-shadow: 0 0 5px rgba(0, 150, 255, 0.5);
              user-select: none;
              transition:
                color 0.5s,
                text-shadow 0.5s;
              line-height: 1;
            }

            .matrix-container > span:nth-child(19n + 2) {
              animation: matrix-pulse 3.5s ease-in-out infinite 0.2s;
            }
            .matrix-container > span:nth-child(29n + 1) {
              animation: matrix-pulse 4.1s ease-in-out infinite 0.7s;
            }
            .matrix-container > span:nth-child(11n) {
              color: rgba(100, 200, 255, 0.7);
              animation: matrix-pulse 2.9s ease-in-out infinite 1.1s;
            }
            .matrix-container > span:nth-child(37n + 10) {
              animation: matrix-pulse 5.3s ease-in-out infinite 1.5s;
            }
            .matrix-container > span:nth-child(41n + 1) {
              animation: matrix-pulse 3.9s ease-in-out infinite 0.4s;
            }
            .matrix-container > span:nth-child(17n + 9) {
              animation: matrix-pulse 2.8s ease-in-out infinite 0.9s;
            }
            .matrix-container > span:nth-child(23n + 18) {
              animation: matrix-pulse 4.3s ease-in-out infinite 1.3s;
            }
            .matrix-container > span:nth-child(31n + 4) {
              animation: matrix-pulse 5.6s ease-in-out infinite 0.1s;
            }
            .matrix-container > span:nth-child(43n + 20) {
              animation: matrix-pulse 3.6s ease-in-out infinite 1.8s;
            }
            .matrix-container > span:nth-child(13n + 6) {
              animation: matrix-pulse 3.2s ease-in-out infinite 1.2s;
            }
            .matrix-container > span:nth-child(53n + 5) {
              animation: matrix-pulse 4.9s ease-in-out infinite 0.5s;
            }
            .matrix-container > span:nth-child(47n + 15) {
              animation: matrix-pulse 5.9s ease-in-out infinite 1s;
            }

            @keyframes matrix-pulse {
              0%,
              100% {
                color: rgba(0, 150, 255, 0.4);
                text-shadow: 0 0 5px rgba(0, 150, 255, 0.5);
              }
              30% {
                color: rgba(100, 200, 255, 1);
                text-shadow:
                  0 0 10px rgba(100, 200, 255, 1),
                  0 0 15px rgba(100, 200, 255, 1);
              }
              50% {
                color: rgba(255, 105, 180, 1);
                text-shadow:
                  0 0 10px rgba(255, 105, 180, 1),
                  0 0 15px rgba(255, 105, 180, 1);
              }
              70% {
                color: #ffffff;
                text-shadow:
                  0 0 10px #fff,
                  0 0 15px #fff,
                  0 0 20px #fff;
              }
            }
            `}),i.jsx("div",{className:"matrix-container",children:n.split("").map((t,a)=>i.jsx("span",{children:t},a))})]})})}export{d as MatrixLoader};
