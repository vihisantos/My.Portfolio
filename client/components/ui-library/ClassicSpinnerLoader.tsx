import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="classic-spinner-wrapper">
      <style>
        {\`
        .classic-spinner {
          font-size: 28px;
          position: relative;
          display: inline-block;
          width: 1em;
          height: 1em;
        }

        .classic-spinner.center {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        .classic-spinner .classic-spinner-blade {
          position: absolute;
          left: 0.4629em;
          bottom: 0;
          width: 0.074em;
          height: 0.2777em;
          border-radius: 0.0555em;
          background-color: transparent;
          transform-origin: center -0.2222em;
          animation: classic-spinner-fade 1s infinite linear;
        }

        .classic-spinner .classic-spinner-blade:nth-child(1) { animation-delay: 0s; transform: rotate(0deg); }
        .classic-spinner .classic-spinner-blade:nth-child(2) { animation-delay: 0.083s; transform: rotate(30deg); }
        .classic-spinner .classic-spinner-blade:nth-child(3) { animation-delay: 0.166s; transform: rotate(60deg); }
        .classic-spinner .classic-spinner-blade:nth-child(4) { animation-delay: 0.249s; transform: rotate(90deg); }
        .classic-spinner .classic-spinner-blade:nth-child(5) { animation-delay: 0.332s; transform: rotate(120deg); }
        .classic-spinner .classic-spinner-blade:nth-child(6) { animation-delay: 0.415s; transform: rotate(150deg); }
        .classic-spinner .classic-spinner-blade:nth-child(7) { animation-delay: 0.498s; transform: rotate(180deg); }
        .classic-spinner .classic-spinner-blade:nth-child(8) { animation-delay: 0.581s; transform: rotate(210deg); }
        .classic-spinner .classic-spinner-blade:nth-child(9) { animation-delay: 0.664s; transform: rotate(240deg); }
        .classic-spinner .classic-spinner-blade:nth-child(10) { animation-delay: 0.747s; transform: rotate(270deg); }
        .classic-spinner .classic-spinner-blade:nth-child(11) { animation-delay: 0.83s; transform: rotate(300deg); }
        .classic-spinner .classic-spinner-blade:nth-child(12) { animation-delay: 0.913s; transform: rotate(330deg); }

        @keyframes classic-spinner-fade {
          0% {
            background-color: #69717d;
          }
          100% {
            background-color: transparent;
          }
        }
        \`}
      </style>
      <div className="classic-spinner center">
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
      </div>
    </div>
  );
}

export default Loader;
`;

export function ClassicSpinnerLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[250px]">
      <div className="classic-spinner-wrapper relative w-full h-[100px]">
        <style>
          {`
            .classic-spinner {
              font-size: 28px;
              position: relative;
              display: inline-block;
              width: 1em;
              height: 1em;
            }

            .classic-spinner.center {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
            }

            .classic-spinner .classic-spinner-blade {
              position: absolute;
              left: 0.4629em;
              bottom: 0;
              width: 0.074em;
              height: 0.2777em;
              border-radius: 0.0555em;
              background-color: transparent;
              transform-origin: center -0.2222em;
              animation: classic-spinner-fade 1s infinite linear;
            }

            .classic-spinner .classic-spinner-blade:nth-child(1) { animation-delay: 0s; transform: rotate(0deg); }
            .classic-spinner .classic-spinner-blade:nth-child(2) { animation-delay: 0.083s; transform: rotate(30deg); }
            .classic-spinner .classic-spinner-blade:nth-child(3) { animation-delay: 0.166s; transform: rotate(60deg); }
            .classic-spinner .classic-spinner-blade:nth-child(4) { animation-delay: 0.249s; transform: rotate(90deg); }
            .classic-spinner .classic-spinner-blade:nth-child(5) { animation-delay: 0.332s; transform: rotate(120deg); }
            .classic-spinner .classic-spinner-blade:nth-child(6) { animation-delay: 0.415s; transform: rotate(150deg); }
            .classic-spinner .classic-spinner-blade:nth-child(7) { animation-delay: 0.498s; transform: rotate(180deg); }
            .classic-spinner .classic-spinner-blade:nth-child(8) { animation-delay: 0.581s; transform: rotate(210deg); }
            .classic-spinner .classic-spinner-blade:nth-child(9) { animation-delay: 0.664s; transform: rotate(240deg); }
            .classic-spinner .classic-spinner-blade:nth-child(10) { animation-delay: 0.747s; transform: rotate(270deg); }
            .classic-spinner .classic-spinner-blade:nth-child(11) { animation-delay: 0.83s; transform: rotate(300deg); }
            .classic-spinner .classic-spinner-blade:nth-child(12) { animation-delay: 0.913s; transform: rotate(330deg); }

            @keyframes classic-spinner-fade {
              0% {
                background-color: #69717d;
              }
              100% {
                background-color: transparent;
              }
            }
            `}
        </style>
        <div className="classic-spinner center">
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
          <div className="classic-spinner-blade" />
        </div>
      </div>
    </div>
  );
}

export function ClassicSpinnerLoader() {
  return (
    <ComponentShowcase title="Classic Spinner" code={code} className="min-h-[250px]">
      <ClassicSpinnerLoaderContent />
    </ComponentShowcase>
  );
}
