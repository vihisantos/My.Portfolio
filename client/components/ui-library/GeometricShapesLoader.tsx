import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const GeometricShapesLoader = () => {
  return (
    <div className="geo-loader-wrapper">
      <style>
        {\`
        .geo-loader-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .geo-loader {
          --path: #2f3545;
          --dot: #5628ee;
          --duration: 3s;
          width: 44px;
          height: 44px;
          position: relative;
          display: inline-block;
          margin: 0 16px;
        }

        .geo-loader:before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          display: block;
          background: var(--dot);
          top: 37px;
          left: 19px;
          transform: translate(-18px, -18px);
          animation: geo-dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .geo-loader svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .geo-loader svg rect,
        .geo-loader svg polygon,
        .geo-loader svg circle {
          fill: none;
          stroke: var(--path);
          stroke-width: 10px;
          stroke-linejoin: round;
          stroke-linecap: round;
        }

        .geo-loader svg polygon {
          stroke-dasharray: 145 76 145 76;
          stroke-dashoffset: 0;
          animation: geo-pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .geo-loader svg rect {
          stroke-dasharray: 192 64 192 64;
          stroke-dashoffset: 0;
          animation: geo-pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .geo-loader svg circle {
          stroke-dasharray: 150 50 150 50;
          stroke-dashoffset: 75;
          animation: geo-pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .geo-loader.geo-triangle {
          width: 48px;
        }

        .geo-loader.geo-triangle:before {
          left: 21px;
          transform: translate(-10px, -18px);
          animation: geo-dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        @keyframes geo-pathTriangle {
          33% { stroke-dashoffset: 74; }
          66% { stroke-dashoffset: 147; }
          100% { stroke-dashoffset: 221; }
        }

        @keyframes geo-dotTriangle {
          33% { transform: translate(0, 0); }
          66% { transform: translate(10px, -18px); }
          100% { transform: translate(-10px, -18px); }
        }

        @keyframes geo-pathRect {
          25% { stroke-dashoffset: 64; }
          50% { stroke-dashoffset: 128; }
          75% { stroke-dashoffset: 192; }
          100% { stroke-dashoffset: 256; }
        }

        @keyframes geo-dotRect {
          25% { transform: translate(0, 0); }
          50% { transform: translate(18px, -18px); }
          75% { transform: translate(0, -36px); }
          100% { transform: translate(-18px, -18px); }
        }

        @keyframes geo-pathCircle {
          25% { stroke-dashoffset: 125; }
          50% { stroke-dashoffset: 175; }
          75% { stroke-dashoffset: 225; }
          100% { stroke-dashoffset: 275; }
        }
        \`}
      </style>
      <div className="geo-loader-container">
        <div className="geo-loader">
          <svg viewBox="0 0 80 80">
            <circle r={32} cy={40} cx={40} />
          </svg>
        </div>
        <div className="geo-loader geo-triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72" />
          </svg>
        </div>
        <div className="geo-loader">
          <svg viewBox="0 0 80 80">
            <rect height={64} width={64} y={8} x={8} />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default GeometricShapesLoader;
`;

export function GeometricShapesLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[200px]">
      <div className="geo-loader-wrapper scale-75 sm:scale-100">
        <style>{`
                    .geo-loader-container { display: flex; align-items: center; justify-content: center; }
                    .geo-loader { --path: #2f3545; --dot: #5628ee; --duration: 3s; width: 44px; height: 44px; position: relative; display: inline-block; margin: 0 16px; }
                    .geo-loader:before { content: ""; width: 6px; height: 6px; border-radius: 50%; position: absolute; display: block; background: var(--dot); top: 37px; left: 19px; transform: translate(-18px,-18px); animation: geo-dotRect var(--duration) cubic-bezier(0.785,0.135,0.15,0.86) infinite; }
                    .geo-loader svg { display: block; width: 100%; height: 100%; }
                    .geo-loader svg rect, .geo-loader svg polygon, .geo-loader svg circle { fill: none; stroke: var(--path); stroke-width: 10px; stroke-linejoin: round; stroke-linecap: round; }
                    .geo-loader svg polygon { stroke-dasharray: 145 76 145 76; stroke-dashoffset: 0; animation: geo-pathTriangle var(--duration) cubic-bezier(0.785,0.135,0.15,0.86) infinite; }
                    .geo-loader svg rect { stroke-dasharray: 192 64 192 64; stroke-dashoffset: 0; animation: geo-pathRect 3s cubic-bezier(0.785,0.135,0.15,0.86) infinite; }
                    .geo-loader svg circle { stroke-dasharray: 150 50 150 50; stroke-dashoffset: 75; animation: geo-pathCircle var(--duration) cubic-bezier(0.785,0.135,0.15,0.86) infinite; }
                    .geo-loader.geo-triangle { width: 48px; }
                    .geo-loader.geo-triangle:before { left: 21px; transform: translate(-10px,-18px); animation: geo-dotTriangle var(--duration) cubic-bezier(0.785,0.135,0.15,0.86) infinite; }
                    @keyframes geo-pathTriangle { 33%{stroke-dashoffset:74} 66%{stroke-dashoffset:147} 100%{stroke-dashoffset:221} }
                    @keyframes geo-dotTriangle { 33%{transform:translate(0,0)} 66%{transform:translate(10px,-18px)} 100%{transform:translate(-10px,-18px)} }
                    @keyframes geo-pathRect { 25%{stroke-dashoffset:64} 50%{stroke-dashoffset:128} 75%{stroke-dashoffset:192} 100%{stroke-dashoffset:256} }
                    @keyframes geo-dotRect { 25%{transform:translate(0,0)} 50%{transform:translate(18px,-18px)} 75%{transform:translate(0,-36px)} 100%{transform:translate(-18px,-18px)} }
                    @keyframes geo-pathCircle { 25%{stroke-dashoffset:125} 50%{stroke-dashoffset:175} 75%{stroke-dashoffset:225} 100%{stroke-dashoffset:275} }
                `}</style>
        <div className="geo-loader-container">
          <div className="geo-loader"><svg viewBox="0 0 80 80"><circle r={32} cy={40} cx={40} /></svg></div>
          <div className="geo-loader geo-triangle"><svg viewBox="0 0 86 80"><polygon points="43 8 79 72 7 72" /></svg></div>
          <div className="geo-loader"><svg viewBox="0 0 80 80"><rect height={64} width={64} y={8} x={8} /></svg></div>
        </div>
      </div>
    </div>
  );
}

export function GeometricShapesLoader() {
  return (
    <ComponentShowcase title="Geometric Shapes Loader" code={code} className="min-h-[200px] flex items-center justify-center">
      <GeometricShapesLoaderContent />
    </ComponentShowcase>
  );
}
