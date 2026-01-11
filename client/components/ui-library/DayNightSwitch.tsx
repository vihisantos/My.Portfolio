import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const DayNightSwitch = () => {
  return (
    <div className="dn-switch-wrapper">
      <style>
        {\`
        .dn-switch-wrapper .dn-switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .dn-switch-wrapper #dn-input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .dn-switch-wrapper .dn-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #2196f3;
          transition: 0.4s;
          z-index: 0;
          overflow: hidden;
        }

        .dn-switch-wrapper .dn-sun-moon {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: yellow;
          transition: 0.4s;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider {
          background-color: black;
        }

        .dn-switch-wrapper #dn-input:focus + .dn-slider {
          box-shadow: 0 0 1px #2196f3;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-sun-moon {
          transform: translateX(26px);
          background-color: white;
          animation: dn-rotate-center 0.6s ease-in-out both;
        }

        .dn-switch-wrapper .dn-moon-dot {
          opacity: 0;
          transition: 0.4s;
          fill: gray;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-sun-moon .dn-moon-dot {
          opacity: 1;
        }

        .dn-switch-wrapper .dn-slider.dn-round {
          border-radius: 34px;
        }

        .dn-switch-wrapper .dn-slider.dn-round .dn-sun-moon {
          border-radius: 50%;
        }

        .dn-switch-wrapper #dn-moon-dot-1 {
          left: 10px;
          top: 3px;
          position: absolute;
          width: 6px;
          height: 6px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-moon-dot-2 {
          left: 2px;
          top: 10px;
          position: absolute;
          width: 10px;
          height: 10px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-moon-dot-3 {
          left: 16px;
          top: 18px;
          position: absolute;
          width: 3px;
          height: 3px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-light-ray-1 {
          left: -8px;
          top: -8px;
          position: absolute;
          width: 43px;
          height: 43px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper #dn-light-ray-2 {
          left: -50%;
          top: -50%;
          position: absolute;
          width: 55px;
          height: 55px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper #dn-light-ray-3 {
          left: -18px;
          top: -18px;
          position: absolute;
          width: 60px;
          height: 60px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper .dn-cloud-light {
          position: absolute;
          fill: #eee;
          animation-name: dn-cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
        }

        .dn-switch-wrapper .dn-cloud-dark {
          position: absolute;
          fill: #ccc;
          animation-name: dn-cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-delay: 1s;
        }

        .dn-switch-wrapper #dn-cloud-1 {
          left: 30px;
          top: 15px;
          width: 40px;
        }

        .dn-switch-wrapper #dn-cloud-2 {
          left: 44px;
          top: 10px;
          width: 20px;
        }

        .dn-switch-wrapper #dn-cloud-3 {
          left: 18px;
          top: 24px;
          width: 30px;
        }

        .dn-switch-wrapper #dn-cloud-4 {
          left: 36px;
          top: 18px;
          width: 40px;
        }

        .dn-switch-wrapper #dn-cloud-5 {
          left: 48px;
          top: 14px;
          width: 20px;
        }

        .dn-switch-wrapper #dn-cloud-6 {
          left: 22px;
          top: 26px;
          width: 30px;
        }

        @keyframes dn-cloud-move {
          0% { transform: translateX(0px); }
          40% { transform: translateX(4px); }
          80% { transform: translateX(-4px); }
          100% { transform: translateX(0px); }
        }

        .dn-switch-wrapper .dn-stars {
          transform: translateY(-32px);
          opacity: 0;
          transition: 0.4s;
        }

        .dn-switch-wrapper .dn-star {
          fill: white;
          position: absolute;
          transition: 0.4s;
          animation-name: dn-star-twinkle;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-stars {
          transform: translateY(0);
          opacity: 1;
        }

        .dn-switch-wrapper #dn-star-1 {
          width: 20px;
          top: 2px;
          left: 3px;
          animation-delay: 0.3s;
        }

        .dn-switch-wrapper #dn-star-2 {
          width: 6px;
          top: 16px;
          left: 3px;
        }

        .dn-switch-wrapper #dn-star-3 {
          width: 12px;
          top: 20px;
          left: 10px;
          animation-delay: 0.6s;
        }

        .dn-switch-wrapper #dn-star-4 {
          width: 18px;
          top: 0px;
          left: 18px;
          animation-delay: 1.3s;
        }

        @keyframes dn-star-twinkle {
          0% { transform: scale(1); }
          40% { transform: scale(1.2); }
          80% { transform: scale(0.8); }
          100% { transform: scale(1); }
        }

        @keyframes dn-rotate-center {
          0% { transform: rotate(0); translateX(26px); }
          100% { transform: rotate(360deg) translateX(26px); }
        }
        \`}
      </style>
      <label className="dn-switch">
        <input id="dn-input" type="checkbox" defaultChecked />
        <div className="dn-slider dn-round">
          <div className="dn-sun-moon">
            <svg id="dn-moon-dot-1" className="dn-moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-moon-dot-2" className="dn-moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-moon-dot-3" className="dn-moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-light-ray-1" className="dn-light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-light-ray-2" className="dn-light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-light-ray-3" className="dn-light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-1" className="dn-cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-2" className="dn-cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-3" className="dn-cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-4" className="dn-cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-5" className="dn-cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-6" className="dn-cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
          </div>
          <div className="dn-stars">
            <svg id="dn-star-1" className="dn-star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="dn-star-2" className="dn-star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="dn-star-3" className="dn-star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="dn-star-4" className="dn-star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
}

export default DayNightSwitch;
`;

export function DayNightSwitch() {
  return (
    <ComponentShowcase title="Day/Night Switch" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
      <div className="dn-switch-wrapper">
        <style>
          {`
        .dn-switch-wrapper .dn-switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .dn-switch-wrapper #dn-input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .dn-switch-wrapper .dn-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #2196f3;
          transition: 0.4s;
          z-index: 0;
          overflow: hidden;
        }

        .dn-switch-wrapper .dn-sun-moon {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: yellow;
          transition: 0.4s;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider {
          background-color: black;
        }

        .dn-switch-wrapper #dn-input:focus + .dn-slider {
          box-shadow: 0 0 1px #2196f3;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-sun-moon {
          transform: translateX(26px);
          background-color: white;
          animation: dn-rotate-center 0.6s ease-in-out both;
        }

        .dn-switch-wrapper .dn-moon-dot {
          opacity: 0;
          transition: 0.4s;
          fill: gray;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-sun-moon .dn-moon-dot {
          opacity: 1;
        }

        .dn-switch-wrapper .dn-slider.dn-round {
          border-radius: 34px;
        }

        .dn-switch-wrapper .dn-slider.dn-round .dn-sun-moon {
          border-radius: 50%;
        }

        .dn-switch-wrapper #dn-moon-dot-1 {
          left: 10px;
          top: 3px;
          position: absolute;
          width: 6px;
          height: 6px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-moon-dot-2 {
          left: 2px;
          top: 10px;
          position: absolute;
          width: 10px;
          height: 10px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-moon-dot-3 {
          left: 16px;
          top: 18px;
          position: absolute;
          width: 3px;
          height: 3px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-light-ray-1 {
          left: -8px;
          top: -8px;
          position: absolute;
          width: 43px;
          height: 43px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper #dn-light-ray-2 {
          left: -50%;
          top: -50%;
          position: absolute;
          width: 55px;
          height: 55px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper #dn-light-ray-3 {
          left: -18px;
          top: -18px;
          position: absolute;
          width: 60px;
          height: 60px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper .dn-cloud-light {
          position: absolute;
          fill: #eee;
          animation-name: dn-cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
        }

        .dn-switch-wrapper .dn-cloud-dark {
          position: absolute;
          fill: #ccc;
          animation-name: dn-cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-delay: 1s;
        }

        .dn-switch-wrapper #dn-cloud-1 {
          left: 30px;
          top: 15px;
          width: 40px;
        }

        .dn-switch-wrapper #dn-cloud-2 {
          left: 44px;
          top: 10px;
          width: 20px;
        }

        .dn-switch-wrapper #dn-cloud-3 {
          left: 18px;
          top: 24px;
          width: 30px;
        }

        .dn-switch-wrapper #dn-cloud-4 {
          left: 36px;
          top: 18px;
          width: 40px;
        }

        .dn-switch-wrapper #dn-cloud-5 {
          left: 48px;
          top: 14px;
          width: 20px;
        }

        .dn-switch-wrapper #dn-cloud-6 {
          left: 22px;
          top: 26px;
          width: 30px;
        }

        @keyframes dn-cloud-move {
          0% { transform: translateX(0px); }
          40% { transform: translateX(4px); }
          80% { transform: translateX(-4px); }
          100% { transform: translateX(0px); }
        }

        .dn-switch-wrapper .dn-stars {
          transform: translateY(-32px);
          opacity: 0;
          transition: 0.4s;
        }

        .dn-switch-wrapper .dn-star {
          fill: white;
          position: absolute;
          transition: 0.4s;
          animation-name: dn-star-twinkle;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-stars {
          transform: translateY(0);
          opacity: 1;
        }

        .dn-switch-wrapper #dn-star-1 {
          width: 20px;
          top: 2px;
          left: 3px;
          animation-delay: 0.3s;
        }

        .dn-switch-wrapper #dn-star-2 {
          width: 6px;
          top: 16px;
          left: 3px;
        }

        .dn-switch-wrapper #dn-star-3 {
          width: 12px;
          top: 20px;
          left: 10px;
          animation-delay: 0.6s;
        }

        .dn-switch-wrapper #dn-star-4 {
          width: 18px;
          top: 0px;
          left: 18px;
          animation-delay: 1.3s;
        }

        @keyframes dn-star-twinkle {
          0% { transform: scale(1); }
          40% { transform: scale(1.2); }
          80% { transform: scale(0.8); }
          100% { transform: scale(1); }
        }

        @keyframes dn-rotate-center {
          0% { transform: rotate(0); translateX(26px); }
          100% { transform: rotate(360deg) translateX(26px); }
        }
        `}
        </style>
        <label className="dn-switch">
          <input id="dn-input" type="checkbox" defaultChecked />
          <div className="dn-slider dn-round">
            <div className="dn-sun-moon">
              <svg id="dn-moon-dot-1" className="dn-moon-dot" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-moon-dot-2" className="dn-moon-dot" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-moon-dot-3" className="dn-moon-dot" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-light-ray-1" className="dn-light-ray" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-light-ray-2" className="dn-light-ray" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-light-ray-3" className="dn-light-ray" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-cloud-1" className="dn-cloud-dark" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-cloud-2" className="dn-cloud-dark" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-cloud-3" className="dn-cloud-dark" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-cloud-4" className="dn-cloud-light" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-cloud-5" className="dn-cloud-light" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
              <svg id="dn-cloud-6" className="dn-cloud-light" viewBox="0 0 100 100">
                <circle cx={50} cy={50} r={50} />
              </svg>
            </div>
            <div className="dn-stars">
              <svg id="dn-star-1" className="dn-star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
              </svg>
              <svg id="dn-star-2" className="dn-star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
              </svg>
              <svg id="dn-star-3" className="dn-star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
              </svg>
              <svg id="dn-star-4" className="dn-star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
              </svg>
            </div>
          </div>
        </label>
      </div>
    </ComponentShowcase>
  );
}
