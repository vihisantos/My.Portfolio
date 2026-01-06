import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="speeder-loader-wrapper">
      <style>
        {\`
        .speeder-loader-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #fff; /* Ensure contrast for black shapes */
          min-height: 200px;
        }

        .speeder-loader {
          position: absolute;
          top: 50%;
          margin-left: -50px;
          left: 50%;
          animation: speeder-anim 0.4s linear infinite;
        }
        
        .speeder-loader > span {
          height: 5px;
          width: 35px;
          background: #000;
          position: absolute;
          top: -19px;
          left: 60px;
          border-radius: 2px 10px 1px 0;
        }
        
        .speeder-base span {
          position: absolute;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-right: 100px solid #000;
          border-bottom: 6px solid transparent;
        }
        
        .speeder-base span:before {
          content: "";
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: #000;
          position: absolute;
          right: -110px;
          top: -16px;
        }
        
        .speeder-base span:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 0 solid transparent;
          border-right: 55px solid #000;
          border-bottom: 16px solid transparent;
          top: -16px;
          right: -98px;
        }
        
        .speeder-face {
          position: absolute;
          height: 12px;
          width: 20px;
          background: #000;
          border-radius: 20px 20px 0 0;
          transform: rotate(-40deg);
          right: -125px;
          top: -15px;
        }
        
        .speeder-face:after {
          content: "";
          height: 12px;
          width: 12px;
          background: #000;
          right: 4px;
          top: 7px;
          position: absolute;
          transform: rotate(40deg);
          transform-origin: 50% 50%;
          border-radius: 0 0 0 2px;
        }
        
        .speeder-loader > span > span:nth-child(1),
        .speeder-loader > span > span:nth-child(2),
        .speeder-loader > span > span:nth-child(3),
        .speeder-loader > span > span:nth-child(4) {
          width: 30px;
          height: 1px;
          background: #000;
          position: absolute;
          animation: speeder-fazer1 0.2s linear infinite;
        }
        
        .speeder-loader > span > span:nth-child(2) {
          top: 3px;
          animation: speeder-fazer2 0.4s linear infinite;
        }
        
        .speeder-loader > span > span:nth-child(3) {
          top: 1px;
          animation: speeder-fazer3 0.4s linear infinite;
          animation-delay: -1s;
        }
        
        .speeder-loader > span > span:nth-child(4) {
          top: 4px;
          animation: speeder-fazer4 1s linear infinite;
          animation-delay: -1s;
        }
        
        @keyframes speeder-fazer1 {
          0% { left: 0; }
          100% { left: -80px; opacity: 0; }
        }
        
        @keyframes speeder-fazer2 {
          0% { left: 0; }
          100% { left: -100px; opacity: 0; }
        }
        
        @keyframes speeder-fazer3 {
          0% { left: 0; }
          100% { left: -50px; opacity: 0; }
        }
        
        @keyframes speeder-fazer4 {
          0% { left: 0; }
          100% { left: -150px; opacity: 0; }
        }
        
        @keyframes speeder-anim {
          0% { transform: translate(2px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -3px) rotate(-1deg); }
          20% { transform: translate(-2px, 0px) rotate(1deg); }
          30% { transform: translate(1px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 3px) rotate(-1deg); }
          60% { transform: translate(-1px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-2px, -1px) rotate(1deg); }
          90% { transform: translate(2px, 1px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        
        .speeder-longfazers {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .speeder-longfazers span {
          position: absolute;
          height: 2px;
          width: 20%;
          background: #000;
        }
        
        .speeder-longfazers span:nth-child(1) {
          top: 20%;
          animation: speeder-lf 0.6s linear infinite;
          animation-delay: -5s;
        }
        
        .speeder-longfazers span:nth-child(2) {
          top: 40%;
          animation: speeder-lf2 0.8s linear infinite;
          animation-delay: -1s;
        }
        
        .speeder-longfazers span:nth-child(3) {
          top: 60%;
          animation: speeder-lf3 0.6s linear infinite;
        }
        
        .speeder-longfazers span:nth-child(4) {
          top: 80%;
          animation: speeder-lf4 0.5s linear infinite;
          animation-delay: -3s;
        }
        
        @keyframes speeder-lf {
          0% { left: 200%; }
          100% { left: -200%; opacity: 0; }
        }
        
        @keyframes speeder-lf2 {
          0% { left: 200%; }
          100% { left: -200%; opacity: 0; }
        }
        
        @keyframes speeder-lf3 {
          0% { left: 200%; }
          100% { left: -100%; opacity: 0; }
        }
        
        @keyframes speeder-lf4 {
          0% { left: 200%; }
          100% { left: -100%; opacity: 0; }
        }
        \`}
      </style>
      <div className="speeder-loader-container">
        <div className="speeder-loader">
          <span><span /><span /><span /><span /></span>
          <div className="speeder-base">
            <span />
            <div className="speeder-face" />
          </div>
        </div>
        <div className="speeder-longfazers">
          <span /><span /><span /><span />
        </div>
      </div>
    </div>
  );
}

export default Loader;
`;

export function SpeederLoader() {
  return (
    <ComponentShowcase title="Speeder Loader" code={code} className="min-h-[250px] flex items-center justify-center">
      <div className="speeder-loader-wrapper w-full h-full min-h-[200px] flex items-center justify-center bg-transparent rounded-lg overflow-hidden relative">
        <style>
          {`
            .speeder-loader-container {
              --speeder-color: #000;
              position: relative;
              width: 100%;
              height: 100%;
              overflow: hidden;
              background: transparent;
              min-height: 200px;
            }

            .dark .speeder-loader-container {
              --speeder-color: #fff;
            }

            .speeder-loader {
              position: absolute;
              top: 50%;
              margin-left: -50px;
              left: 50%;
              animation: speeder-anim 0.4s linear infinite;
            }
            
            .speeder-loader > span {
              height: 5px;
              width: 35px;
              background: var(--speeder-color);
              position: absolute;
              top: -19px;
              left: 60px;
              border-radius: 2px 10px 1px 0;
            }
            
            .speeder-base span {
              position: absolute;
              width: 0;
              height: 0;
              border-top: 6px solid transparent;
              border-right: 100px solid var(--speeder-color);
              border-bottom: 6px solid transparent;
            }
            
            .speeder-base span:before {
              content: "";
              height: 22px;
              width: 22px;
              border-radius: 50%;
              background: var(--speeder-color);
              position: absolute;
              right: -110px;
              top: -16px;
            }
            
            .speeder-base span:after {
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              border-top: 0 solid transparent;
              border-right: 55px solid var(--speeder-color);
              border-bottom: 16px solid transparent;
              top: -16px;
              right: -98px;
            }
            
            .speeder-face {
              position: absolute;
              height: 12px;
              width: 20px;
              background: var(--speeder-color);
              border-radius: 20px 20px 0 0;
              transform: rotate(-40deg);
              right: -125px;
              top: -15px;
            }
            
            .speeder-face:after {
              content: "";
              height: 12px;
              width: 12px;
              background: var(--speeder-color);
              right: 4px;
              top: 7px;
              position: absolute;
              transform: rotate(40deg);
              transform-origin: 50% 50%;
              border-radius: 0 0 0 2px;
            }
            
            .speeder-loader > span > span:nth-child(1),
            .speeder-loader > span > span:nth-child(2),
            .speeder-loader > span > span:nth-child(3),
            .speeder-loader > span > span:nth-child(4) {
              width: 30px;
              height: 1px;
              background: var(--speeder-color);
              position: absolute;
              animation: speeder-fazer1 0.2s linear infinite;
            }
            
            .speeder-loader > span > span:nth-child(2) {
              top: 3px;
              animation: speeder-fazer2 0.4s linear infinite;
            }
            
            .speeder-loader > span > span:nth-child(3) {
              top: 1px;
              animation: speeder-fazer3 0.4s linear infinite;
              animation-delay: -1s;
            }
            
            .speeder-loader > span > span:nth-child(4) {
              top: 4px;
              animation: speeder-fazer4 1s linear infinite;
              animation-delay: -1s;
            }
            
            @keyframes speeder-fazer1 {
              0% { left: 0; }
              100% { left: -80px; opacity: 0; }
            }
            
            @keyframes speeder-fazer2 {
              0% { left: 0; }
              100% { left: -100px; opacity: 0; }
            }
            
            @keyframes speeder-fazer3 {
              0% { left: 0; }
              100% { left: -50px; opacity: 0; }
            }
            
            @keyframes speeder-fazer4 {
              0% { left: 0; }
              100% { left: -150px; opacity: 0; }
            }
            
            @keyframes speeder-anim {
              0% { transform: translate(2px, 1px) rotate(0deg); }
              10% { transform: translate(-1px, -3px) rotate(-1deg); }
              20% { transform: translate(-2px, 0px) rotate(1deg); }
              30% { transform: translate(1px, 2px) rotate(0deg); }
              40% { transform: translate(1px, -1px) rotate(1deg); }
              50% { transform: translate(-1px, 3px) rotate(-1deg); }
              60% { transform: translate(-1px, 1px) rotate(0deg); }
              70% { transform: translate(3px, 1px) rotate(-1deg); }
              80% { transform: translate(-2px, -1px) rotate(1deg); }
              90% { transform: translate(2px, 1px) rotate(0deg); }
              100% { transform: translate(1px, -2px) rotate(-1deg); }
            }
            
            .speeder-longfazers {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
            }
            
            .speeder-longfazers span {
              position: absolute;
              height: 2px;
              width: 20%;
              background: var(--speeder-color);
            }
            
            .speeder-longfazers span:nth-child(1) {
              top: 20%;
              animation: speeder-lf 0.6s linear infinite;
              animation-delay: -5s;
            }
            
            .speeder-longfazers span:nth-child(2) {
              top: 40%;
              animation: speeder-lf2 0.8s linear infinite;
              animation-delay: -1s;
            }
            
            .speeder-longfazers span:nth-child(3) {
              top: 60%;
              animation: speeder-lf3 0.6s linear infinite;
            }
            
            .speeder-longfazers span:nth-child(4) {
              top: 80%;
              animation: speeder-lf4 0.5s linear infinite;
              animation-delay: -3s;
            }
            
            @keyframes speeder-lf {
              0% { left: 200%; }
              100% { left: -200%; opacity: 0; }
            }
            
            @keyframes speeder-lf2 {
              0% { left: 200%; }
              100% { left: -200%; opacity: 0; }
            }
            
            @keyframes speeder-lf3 {
              0% { left: 200%; }
              100% { left: -100%; opacity: 0; }
            }
            
            @keyframes speeder-lf4 {
              0% { left: 200%; }
              100% { left: -100%; opacity: 0; }
            }
            `}
        </style>
        <div className="speeder-loader-container">
          <div className="speeder-loader">
            <span><span /><span /><span /><span /></span>
            <div className="speeder-base">
              <span />
              <div className="speeder-face" />
            </div>
          </div>
          <div className="speeder-longfazers">
            <span /><span /><span /><span />
          </div>
        </div>
      </div>
    </ComponentShowcase>
  );
}
