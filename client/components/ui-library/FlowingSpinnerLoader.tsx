import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="flowing-spinner-wrapper">
      <style>
        {\`
        .flowing-spinner {
          position: absolute;
          width: 9px;
          height: 9px;
        }

        .flowing-spinner div {
          position: absolute;
          width: 50%;
          height: 150%;
          background: #000000;
          transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
          animation: flowing-spinner-anim 1s calc(var(--delay) * 1s) infinite ease;
        }

        .flowing-spinner div:nth-child(1) { --delay: 0.1; --rotation: 36; --translation: 150; }
        .flowing-spinner div:nth-child(2) { --delay: 0.2; --rotation: 72; --translation: 150; }
        .flowing-spinner div:nth-child(3) { --delay: 0.3; --rotation: 108; --translation: 150; }
        .flowing-spinner div:nth-child(4) { --delay: 0.4; --rotation: 144; --translation: 150; }
        .flowing-spinner div:nth-child(5) { --delay: 0.5; --rotation: 180; --translation: 150; }
        .flowing-spinner div:nth-child(6) { --delay: 0.6; --rotation: 216; --translation: 150; }
        .flowing-spinner div:nth-child(7) { --delay: 0.7; --rotation: 252; --translation: 150; }
        .flowing-spinner div:nth-child(8) { --delay: 0.8; --rotation: 288; --translation: 150; }
        .flowing-spinner div:nth-child(9) { --delay: 0.9; --rotation: 324; --translation: 150; }
        .flowing-spinner div:nth-child(10) { --delay: 1; --rotation: 360; --translation: 150; }

        @keyframes flowing-spinner-anim {
          0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
          }
          50% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
          }
        }
        \`}
      </style>
      <div className="flowing-spinner">
        <div />
        <div />
        <div />
        <div />
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

export function FlowingSpinnerLoader() {
  return (
    <ComponentShowcase title="Flowing Spinner" code={code} className="min-h-[250px] flex items-center justify-center">
      <div className="flowing-spinner-wrapper relative w-10 h-10 flex items-center justify-center scale-[3]">
        <style>
          {`
            .flowing-spinner {
              position: relative;
              width: 9px;
              height: 9px;
            }

            .flowing-spinner div {
              position: absolute;
              width: 50%;
              height: 150%;
              background: #000000;
              transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
              animation: flowing-spinner-anim 1s calc(var(--delay) * 1s) infinite ease;
            }

            .flowing-spinner div:nth-child(1) { --delay: 0.1; --rotation: 36; --translation: 150; }
            .flowing-spinner div:nth-child(2) { --delay: 0.2; --rotation: 72; --translation: 150; }
            .flowing-spinner div:nth-child(3) { --delay: 0.3; --rotation: 108; --translation: 150; }
            .flowing-spinner div:nth-child(4) { --delay: 0.4; --rotation: 144; --translation: 150; }
            .flowing-spinner div:nth-child(5) { --delay: 0.5; --rotation: 180; --translation: 150; }
            .flowing-spinner div:nth-child(6) { --delay: 0.6; --rotation: 216; --translation: 150; }
            .flowing-spinner div:nth-child(7) { --delay: 0.7; --rotation: 252; --translation: 150; }
            .flowing-spinner div:nth-child(8) { --delay: 0.8; --rotation: 288; --translation: 150; }
            .flowing-spinner div:nth-child(9) { --delay: 0.9; --rotation: 324; --translation: 150; }
            .flowing-spinner div:nth-child(10) { --delay: 1; --rotation: 360; --translation: 150; }

            @keyframes flowing-spinner-anim {
              0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
                transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
              }
              50% {
                transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
              }
            }
            `}
        </style>
        <div className="flowing-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </ComponentShowcase>
  );
}

export function FlowingSpinnerLoaderContent() {
  return (
    <div className="flowing-spinner-wrapper relative w-10 h-10 flex items-center justify-center scale-[1.5]">
      <style>{`
            .flowing-spinner {
              position: relative;
              width: 9px;
              height: 9px;
            }
            .flowing-spinner div {
              position: absolute;
              width: 50%;
              height: 150%;
              background: #5D3FD3;
              transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
              animation: flowing-spinner-anim 1s calc(var(--delay) * 1s) infinite ease;
            }
            .flowing-spinner div:nth-child(1) { --delay: 0.1; --rotation: 36; --translation: 150; }
            .flowing-spinner div:nth-child(2) { --delay: 0.2; --rotation: 72; --translation: 150; }
            .flowing-spinner div:nth-child(3) { --delay: 0.3; --rotation: 108; --translation: 150; }
            .flowing-spinner div:nth-child(4) { --delay: 0.4; --rotation: 144; --translation: 150; }
            .flowing-spinner div:nth-child(5) { --delay: 0.5; --rotation: 180; --translation: 150; }
            .flowing-spinner div:nth-child(6) { --delay: 0.6; --rotation: 216; --translation: 150; }
            .flowing-spinner div:nth-child(7) { --delay: 0.7; --rotation: 252; --translation: 150; }
            .flowing-spinner div:nth-child(8) { --delay: 0.8; --rotation: 288; --translation: 150; }
            .flowing-spinner div:nth-child(9) { --delay: 0.9; --rotation: 324; --translation: 150; }
            .flowing-spinner div:nth-child(10) { --delay: 1; --rotation: 360; --translation: 150; }
            @keyframes flowing-spinner-anim {
              0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
                transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
              }
              50% {
                transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
              }
            }
            `}</style>
      <div className="flowing-spinner">
        <div /><div /><div /><div /><div />
        <div /><div /><div /><div /><div />
      </div>
    </div>
  );
}
