import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="holographic-loader-wrapper">
      <style>
        {\`
        .holographic-spinner {
          width: 44px;
          height: 44px;
          animation: holographic-spinner-anim 2s infinite ease;
          transform-style: preserve-3d;
        }

        .holographic-spinner > div {
          background-color: rgba(0,77,255,0.2);
          height: 100%;
          position: absolute;
          width: 100%;
          border: 2px solid #004dff;
        }

        .holographic-spinner div:nth-of-type(1) {
          transform: translateZ(-22px) rotateY(180deg);
        }

        .holographic-spinner div:nth-of-type(2) {
          transform: rotateY(-270deg) translateX(50%);
          transform-origin: top right;
        }

        .holographic-spinner div:nth-of-type(3) {
          transform: rotateY(270deg) translateX(-50%);
          transform-origin: center left;
        }

        .holographic-spinner div:nth-of-type(4) {
          transform: rotateX(90deg) translateY(-50%);
          transform-origin: top center;
        }

        .holographic-spinner div:nth-of-type(5) {
          transform: rotateX(-90deg) translateY(50%);
          transform-origin: bottom center;
        }

        .holographic-spinner div:nth-of-type(6) {
          transform: translateZ(22px);
        }

        @keyframes holographic-spinner-anim {
          0% {
            transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
          }
          50% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
          }
          100% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
          }
        }
        \`}
      </style>
      <div className="holographic-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
`;

export function HolographicLoader() {
  return (
    <ComponentShowcase title="Holographic Loader" code={code} className="min-h-[250px] flex items-center justify-center">
      <HolographicLoaderContent />
    </ComponentShowcase>
  );
}

export function HolographicLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[250px]">
      <div className="holographic-loader-wrapper scale-125">
        <style>{`
                    .holographic-spinner {
                      width: 44px;
                      height: 44px;
                      animation: holographic-spinner-anim 2s infinite ease;
                      transform-style: preserve-3d;
                    }
                    .holographic-spinner > div {
                      background-color: rgba(0,77,255,0.2);
                      height: 100%;
                      position: absolute;
                      width: 100%;
                      border: 2px solid #004dff;
                    }
                    .holographic-spinner div:nth-of-type(1) { transform: translateZ(-22px) rotateY(180deg); }
                    .holographic-spinner div:nth-of-type(2) { transform: rotateY(-270deg) translateX(50%); transform-origin: top right; }
                    .holographic-spinner div:nth-of-type(3) { transform: rotateY(270deg) translateX(-50%); transform-origin: center left; }
                    .holographic-spinner div:nth-of-type(4) { transform: rotateX(90deg) translateY(-50%); transform-origin: top center; }
                    .holographic-spinner div:nth-of-type(5) { transform: rotateX(-90deg) translateY(50%); transform-origin: bottom center; }
                    .holographic-spinner div:nth-of-type(6) { transform: translateZ(22px); }
                    @keyframes holographic-spinner-anim {
                      0%   { transform: rotate(45deg) rotateX(-25deg) rotateY(25deg); }
                      50%  { transform: rotate(45deg) rotateX(-385deg) rotateY(25deg); }
                      100% { transform: rotate(45deg) rotateX(-385deg) rotateY(385deg); }
                    }
                `}</style>
        <div className="holographic-spinner">
          <div /><div /><div /><div /><div /><div />
        </div>
      </div>
    </div>
  );
}
