import React from 'react';
import { Link } from 'react-router-dom';

interface GalaxyButtonProps {
  href: string;
  text: string;
  download?: boolean;
}

const GalaxyButton = ({ href, text, download }: GalaxyButtonProps) => {
  return (
    <div className="galaxy-button-wrapper w-full">
      <style>
        {`
        .uiverse {
          --duration: 7s;
          --easing: linear;
          /* Mapping to Portfolio Theme */
          --c-color-1: hsl(var(--accent)); 
          --c-color-2: hsl(var(--primary));
          --c-color-3: hsl(var(--secondary));
          --c-color-4: hsl(var(--accent));
          
          --c-shadow: rgba(255, 223, 87, 0.3);
          --c-shadow-inset-top: rgba(255, 255, 255, 0.2);
          --c-shadow-inset-bottom: rgba(0, 0, 0, 0.1);
          
          --c-radial-inner: hsl(var(--accent));
          --c-radial-outer: hsl(var(--secondary));
          --c-color: #fff;
          
          -webkit-tap-highlight-color: transparent;
          -webkit-appearance: none;
          outline: none;
          position: relative;
          cursor: pointer;
          border: none;
          display: table;
          border-radius: 24px;
          padding: 0;
          margin: 0;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.02em;
          line-height: 1.5;
          color: var(--c-color);
          
          background: radial-gradient(
            circle at center,
            var(--c-radial-inner),
            var(--c-radial-outer) 80%
          );
          box-shadow: 0 0 14px var(--c-shadow);
          
          width: 100%; 
        }

        .dark .uiverse {
             --c-shadow: rgba(120, 50, 255, 0.4);
             --c-radial-inner: hsl(var(--primary));
             --c-radial-outer: hsl(var(--background));
        }

        .uiverse:before {
          content: "";
          pointer-events: none;
          position: absolute;
          z-index: 3;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          box-shadow:
            inset 0 3px 12px var(--c-shadow-inset-top),
            inset 0 -3px 4px var(--c-shadow-inset-bottom);
        }

        .uiverse .wrapper {
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          overflow: hidden;
          border-radius: 24px;
          padding: 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .uiverse .wrapper span {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 1;
        }

        .uiverse:hover {
          --duration: 1400ms;
        }

        .uiverse .wrapper .circle {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          filter: blur(var(--blur, 8px));
          background: var(--background, transparent);
          transform: translate(calc(var(--x, 0) - 50px), calc(var(--y, 0) - 20px)) translateZ(0); /* Center offset */
          animation: var(--animation, none) var(--duration) var(--easing) infinite;
        }

        .uiverse .wrapper .circle.circle-1,
        .uiverse .wrapper .circle.circle-9,
        .uiverse .wrapper .circle.circle-10 {
          --background: var(--c-color-4);
        }

        .uiverse .wrapper .circle.circle-3,
        .uiverse .wrapper .circle.circle-4 {
          --background: var(--c-color-2);
          --blur: 14px;
        }

        .uiverse .wrapper .circle.circle-5,
        .uiverse .wrapper .circle.circle-6 {
          --background: var(--c-color-3);
          --blur: 16px;
        }

        .uiverse .wrapper .circle.circle-2,
        .uiverse .wrapper .circle.circle-7,
        .uiverse .wrapper .circle.circle-8,
        .uiverse .wrapper .circle.circle-11,
        .uiverse .wrapper .circle.circle-12 {
          --background: var(--c-color-1);
          --blur: 12px;
        }

        .uiverse .wrapper .circle.circle-1 {
          --x: 0;
          --y: -40px;
          --animation: circle-1;
        }

        .uiverse .wrapper .circle.circle-2 {
          --x: 92px;
          --y: 8px;
          --animation: circle-2;
        }

        .uiverse .wrapper .circle.circle-3 {
          --x: -12px;
          --y: -12px;
          --animation: circle-3;
        }

        .uiverse .wrapper .circle.circle-4 {
          --x: 80px;
          --y: -12px;
          --animation: circle-4;
        }

        .uiverse .wrapper .circle.circle-5 {
          --x: 12px;
          --y: -4px;
          --animation: circle-5;
        }

        .uiverse .wrapper .circle.circle-6 {
          --x: 56px;
          --y: 16px;
          --animation: circle-6;
        }

        .uiverse .wrapper .circle.circle-7 {
          --x: 8px;
          --y: 28px;
          --animation: circle-7;
        }

        .uiverse .wrapper .circle.circle-8 {
          --x: 28px;
          --y: -4px;
          --animation: circle-8;
        }

        .uiverse .wrapper .circle.circle-9 {
          --x: 20px;
          --y: -12px;
          --animation: circle-9;
        }

        .uiverse .wrapper .circle.circle-10 {
          --x: 64px;
          --y: 16px;
          --animation: circle-10;
        }

        .uiverse .wrapper .circle.circle-11 {
          --x: 4px;
          --y: 4px;
          --animation: circle-11;
        }

        .uiverse .wrapper .circle.circle-12 {
          --blur: 14px;
          --x: 52px;
          --y: 4px;
          --animation: circle-12;
        }

        @keyframes circle-1 {
          33% { transform: translate(calc(0px - 50px), calc(16px - 20px)) translateZ(0); }
          66% { transform: translate(calc(12px - 50px), calc(64px - 20px)) translateZ(0); }
        }

        @keyframes circle-2 {
          33% { transform: translate(calc(80px - 50px), calc(-10px - 20px)) translateZ(0); }
          66% { transform: translate(calc(72px - 50px), calc(-48px - 20px)) translateZ(0); }
        }

        @keyframes circle-3 {
          33% { transform: translate(calc(20px - 50px), calc(12px - 20px)) translateZ(0); }
          66% { transform: translate(calc(12px - 50px), calc(4px - 20px)) translateZ(0); }
        }

        @keyframes circle-4 {
          33% { transform: translate(calc(76px - 50px), calc(-12px - 20px)) translateZ(0); }
          66% { transform: translate(calc(112px - 50px), calc(-8px - 20px)) translateZ(0); }
        }

        @keyframes circle-5 {
          33% { transform: translate(calc(84px - 50px), calc(28px - 20px)) translateZ(0); }
          66% { transform: translate(calc(40px - 50px), calc(-32px - 20px)) translateZ(0); }
        }

        @keyframes circle-6 {
          33% { transform: translate(calc(28px - 50px), calc(-16px - 20px)) translateZ(0); }
          66% { transform: translate(calc(76px - 50px), calc(-56px - 20px)) translateZ(0); }
        }

        @keyframes circle-7 {
          33% { transform: translate(calc(8px - 50px), calc(28px - 20px)) translateZ(0); }
          66% { transform: translate(calc(20px - 50px), calc(-60px - 20px)) translateZ(0); }
        }

        @keyframes circle-8 {
          33% { transform: translate(calc(32px - 50px), calc(-4px - 20px)) translateZ(0); }
          66% { transform: translate(calc(56px - 50px), calc(-20px - 20px)) translateZ(0); }
        }

        @keyframes circle-9 {
          33% { transform: translate(calc(20px - 50px), calc(-12px - 20px)) translateZ(0); }
          66% { transform: translate(calc(80px - 50px), calc(-8px - 20px)) translateZ(0); }
        }

        @keyframes circle-10 {
          33% { transform: translate(calc(68px - 50px), calc(20px - 20px)) translateZ(0); }
          66% { transform: translate(calc(100px - 50px), calc(28px - 20px)) translateZ(0); }
        }

        @keyframes circle-11 {
          33% { transform: translate(calc(4px - 50px), calc(4px - 20px)) translateZ(0); }
          66% { transform: translate(calc(68px - 50px), calc(20px - 20px)) translateZ(0); }
        }

        @keyframes circle-12 {
          33% { transform: translate(calc(56px - 50px), calc(0px - 20px)) translateZ(0); }
          66% { transform: translate(calc(60px - 50px), calc(-32px - 20px)) translateZ(0); }
        }
        `}
      </style>

      {download || href.startsWith('http') ? (
        <a href={href} download={download} className="no-underline block w-full">
          <div className="uiverse w-full">
            <div className="wrapper">
              <span>{text}</span>
              <div className="circle circle-12" />
              <div className="circle circle-11" />
              <div className="circle circle-10" />
              <div className="circle circle-9" />
              <div className="circle circle-8" />
              <div className="circle circle-7" />
              <div className="circle circle-6" />
              <div className="circle circle-5" />
              <div className="circle circle-4" />
              <div className="circle circle-3" />
              <div className="circle circle-2" />
              <div className="circle circle-1" />
            </div>
          </div>
        </a>
      ) : (
        <Link to={href} className="no-underline block w-full">
          <div className="uiverse w-full">
            <div className="wrapper">
              <span>{text}</span>
              <div className="circle circle-12" />
              <div className="circle circle-11" />
              <div className="circle circle-10" />
              <div className="circle circle-9" />
              <div className="circle circle-8" />
              <div className="circle circle-7" />
              <div className="circle circle-6" />
              <div className="circle circle-5" />
              <div className="circle circle-4" />
              <div className="circle circle-3" />
              <div className="circle circle-2" />
              <div className="circle circle-1" />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default GalaxyButton;
