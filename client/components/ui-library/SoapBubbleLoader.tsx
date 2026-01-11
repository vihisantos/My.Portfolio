import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const SoapBubbleLoader = () => {
  return (
    <div className="soap-bubble-loader-wrapper">
      <style>
        {\`
        .soap-bubble-loader-wrapper .soap-container {
          position: relative;
          width: 100%;
          height: 300px; /* Adjusted container height for visibility */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .soap-bubble-loader-wrapper .soap-bubble {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.25);
          animation: soap-bubble-animate 8s ease-in-out infinite;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(2) {
          position: relative;
          zoom: 0.45;
          left: -10px;
          top: -100px;
          animation-delay: -4s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(3) {
          position: relative;
          zoom: 0.45;
          right: -80px;
          top: -300px;
          animation-delay: -6s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(4) {
          position: relative;
          zoom: 0.35;
          left: -120px;
          bottom: -200px;
          animation-delay: -3s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(5) {
          position: relative;
          zoom: 0.5;
          left: 0px;
          top: 200px;
          animation-delay: -5s;
        }

        @keyframes soap-bubble-animate {
          0%, 100% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .soap-bubble-loader-wrapper .soap-bubble::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 45px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .soap-bubble-loader-wrapper .soap-bubble::after {
          content: '';
          position: absolute;
          top: 80px;
          left: 80px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span {
          position: absolute;
          border-radius: 50%;
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(1) {
          inset: 10px;
          border-left: 15px solid #0fb4ff;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(2) {
          inset: 10px;
          border-right: 15px solid #ff4484;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(3) {
          inset: 10px;
          border-top: 15px solid #ffeb3b;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(4) {
          inset: 30px;
          border-left: 15px solid #ff4484;
          filter: blur(12px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(5) {
          inset: 10px;
          border-bottom: 10px solid #fff;
          filter: blur(8px);
          transform: rotate(330deg);
        }
        \`}
      </style>
      <div className="soap-container">
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default SoapBubbleLoader;
`;

export function SoapBubbleLoader() {
    return (
        <ComponentShowcase title="Soap Bubble Loader" code={code} className="flex items-center justify-center p-12 min-h-[400px]">
            <div className="soap-bubble-loader-wrapper">
                <style>
                    {`
        .soap-bubble-loader-wrapper .soap-container {
          position: relative;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .soap-bubble-loader-wrapper .soap-bubble {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.25);
          animation: soap-bubble-animate 8s ease-in-out infinite;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(2) {
          position: relative;
          zoom: 0.45;
          left: -10px;
          top: -100px;
          animation-delay: -4s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(3) {
          position: relative;
          zoom: 0.45;
          right: -80px;
          top: -300px;
          animation-delay: -6s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(4) {
          position: relative;
          zoom: 0.35;
          left: -120px;
          bottom: -200px;
          animation-delay: -3s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(5) {
          position: relative;
          zoom: 0.5;
          left: 0px;
          top: 200px;
          animation-delay: -5s;
        }

        @keyframes soap-bubble-animate {
          0%, 100% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .soap-bubble-loader-wrapper .soap-bubble::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 45px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .soap-bubble-loader-wrapper .soap-bubble::after {
          content: '';
          position: absolute;
          top: 80px;
          left: 80px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span {
          position: absolute;
          border-radius: 50%;
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(1) {
          inset: 10px;
          border-left: 15px solid #0fb4ff;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(2) {
          inset: 10px;
          border-right: 15px solid #ff4484;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(3) {
          inset: 10px;
          border-top: 15px solid #ffeb3b;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(4) {
          inset: 30px;
          border-left: 15px solid #ff4484;
          filter: blur(12px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(5) {
          inset: 10px;
          border-bottom: 10px solid #fff;
          filter: blur(8px);
          transform: rotate(330deg);
        }
        `}
                </style>
                <div className="soap-container">
                    <div className="soap-bubble">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="soap-bubble">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="soap-bubble">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="soap-bubble">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="soap-bubble">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </ComponentShowcase>
    );
}
