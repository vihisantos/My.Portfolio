import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="banter-loader-wrapper">
      <style>
        {\`
        .banter-loader {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 72px;
          height: 72px;
          margin-left: -36px;
          margin-top: -36px;
        }

        .banter-box {
          float: left;
          position: relative;
          width: 20px;
          height: 20px;
          margin-right: 6px;
        }

        .banter-box:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #fff;
        }

        .banter-box:nth-child(3n) {
          margin-right: 0;
          margin-bottom: 6px;
        }

        .banter-box:nth-child(1):before, .banter-box:nth-child(4):before { margin-left: 26px; }
        .banter-box:nth-child(3):before { margin-top: 52px; }
        .banter-box:last-child { margin-bottom: 0; }

        .banter-box:nth-child(1) { animation: banter-moveBox-1 4s infinite; }
        .banter-box:nth-child(2) { animation: banter-moveBox-2 4s infinite; }
        .banter-box:nth-child(3) { animation: banter-moveBox-3 4s infinite; }
        .banter-box:nth-child(4) { animation: banter-moveBox-4 4s infinite; }
        .banter-box:nth-child(5) { animation: banter-moveBox-5 4s infinite; }
        .banter-box:nth-child(6) { animation: banter-moveBox-6 4s infinite; }
        .banter-box:nth-child(7) { animation: banter-moveBox-7 4s infinite; }
        .banter-box:nth-child(8) { animation: banter-moveBox-8 4s infinite; }
        .banter-box:nth-child(9) { animation: banter-moveBox-9 4s infinite; }

        @keyframes banter-moveBox-1 {
          9.09% { transform: translate(-26px, 0); }
          18.18% { transform: translate(0px, 0); }
          27.27% { transform: translate(0px, 0); }
          36.36% { transform: translate(26px, 0); }
          45.45% { transform: translate(26px, 26px); }
          54.54% { transform: translate(26px, 26px); }
          63.63% { transform: translate(26px, 26px); }
          72.72% { transform: translate(26px, 0px); }
          81.81% { transform: translate(0px, 0px); }
          90.90% { transform: translate(-26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-2 {
          9.09% { transform: translate(0, 0); }
          18.18% { transform: translate(26px, 0); }
          27.27% { transform: translate(0px, 0); }
          36.36% { transform: translate(26px, 0); }
          45.45% { transform: translate(26px, 26px); }
          54.54% { transform: translate(26px, 26px); }
          63.63% { transform: translate(26px, 26px); }
          72.72% { transform: translate(26px, 26px); }
          81.81% { transform: translate(0px, 26px); }
          90.90% { transform: translate(0px, 26px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-3 {
          9.09% { transform: translate(-26px, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(0px, 0); }
          36.36% { transform: translate(-26px, 0); }
          45.45% { transform: translate(-26px, 0); }
          54.54% { transform: translate(-26px, 0); }
          63.63% { transform: translate(-26px, 0); }
          72.72% { transform: translate(-26px, 0); }
          81.81% { transform: translate(-26px, -26px); }
          90.90% { transform: translate(0px, -26px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-4 {
          9.09% { transform: translate(-26px, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(-26px, -26px); }
          36.36% { transform: translate(0px, -26px); }
          45.45% { transform: translate(0px, 0px); }
          54.54% { transform: translate(0px, -26px); }
          63.63% { transform: translate(0px, -26px); }
          72.72% { transform: translate(0px, -26px); }
          81.81% { transform: translate(-26px, -26px); }
          90.90% { transform: translate(-26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-5 {
          9.09% { transform: translate(0, 0); }
          18.18% { transform: translate(0, 0); }
          27.27% { transform: translate(0, 0); }
          36.36% { transform: translate(26px, 0); }
          45.45% { transform: translate(26px, 0); }
          54.54% { transform: translate(26px, 0); }
          63.63% { transform: translate(26px, 0); }
          72.72% { transform: translate(26px, 0); }
          81.81% { transform: translate(26px, -26px); }
          90.90% { transform: translate(0px, -26px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-6 {
          9.09% { transform: translate(0, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(-26px, 0); }
          36.36% { transform: translate(0px, 0); }
          45.45% { transform: translate(0px, 0); }
          54.54% { transform: translate(0px, 0); }
          63.63% { transform: translate(0px, 0); }
          72.72% { transform: translate(0px, 26px); }
          81.81% { transform: translate(-26px, 26px); }
          90.90% { transform: translate(-26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-7 {
          9.09% { transform: translate(26px, 0); }
          18.18% { transform: translate(26px, 0); }
          27.27% { transform: translate(26px, 0); }
          36.36% { transform: translate(0px, 0); }
          45.45% { transform: translate(0px, -26px); }
          54.54% { transform: translate(26px, -26px); }
          63.63% { transform: translate(0px, -26px); }
          72.72% { transform: translate(0px, -26px); }
          81.81% { transform: translate(0px, 0px); }
          90.90% { transform: translate(26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-8 {
          9.09% { transform: translate(0, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(-26px, -26px); }
          36.36% { transform: translate(0px, -26px); }
          45.45% { transform: translate(0px, -26px); }
          54.54% { transform: translate(0px, -26px); }
          63.63% { transform: translate(0px, -26px); }
          72.72% { transform: translate(0px, -26px); }
          81.81% { transform: translate(26px, -26px); }
          90.90% { transform: translate(26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-9 {
          9.09% { transform: translate(-26px, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(0px, 0); }
          36.36% { transform: translate(-26px, 0); }
          45.45% { transform: translate(0px, 0); }
          54.54% { transform: translate(0px, 0); }
          63.63% { transform: translate(-26px, 0); }
          72.72% { transform: translate(-26px, 0); }
          81.81% { transform: translate(-52px, 0); }
          90.90% { transform: translate(-26px, 0); }
          100% { transform: translate(0px, 0); }
        }
        \`}
      </style>
      <div className="banter-loader">
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
      </div>
    </div>
  );
}

export default Loader;
`;

export function BanterLoader() {
    return (
        <ComponentShowcase title="Banter Loader" code={code} className="min-h-[250px] flex items-center justify-center">
            <div className="banter-loader-wrapper w-full h-full min-h-[150px] relative bg-slate-800 rounded-lg">
                <style>
                    {`
            .banter-loader {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 72px;
              height: 72px;
              margin-left: -36px;
              margin-top: -36px;
            }

            .banter-box {
              float: left;
              position: relative;
              width: 20px;
              height: 20px;
              margin-right: 6px;
            }

            .banter-box:before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: #fff;
            }

            .banter-box:nth-child(3n) {
              margin-right: 0;
              margin-bottom: 6px;
            }

            .banter-box:nth-child(1):before, .banter-box:nth-child(4):before { margin-left: 26px; }
            .banter-box:nth-child(3):before { margin-top: 52px; }
            .banter-box:last-child { margin-bottom: 0; }

            .banter-box:nth-child(1) { animation: banter-moveBox-1 4s infinite; }
            .banter-box:nth-child(2) { animation: banter-moveBox-2 4s infinite; }
            .banter-box:nth-child(3) { animation: banter-moveBox-3 4s infinite; }
            .banter-box:nth-child(4) { animation: banter-moveBox-4 4s infinite; }
            .banter-box:nth-child(5) { animation: banter-moveBox-5 4s infinite; }
            .banter-box:nth-child(6) { animation: banter-moveBox-6 4s infinite; }
            .banter-box:nth-child(7) { animation: banter-moveBox-7 4s infinite; }
            .banter-box:nth-child(8) { animation: banter-moveBox-8 4s infinite; }
            .banter-box:nth-child(9) { animation: banter-moveBox-9 4s infinite; }

            @keyframes banter-moveBox-1 {
              9.09% { transform: translate(-26px, 0); }
              18.18% { transform: translate(0px, 0); }
              27.27% { transform: translate(0px, 0); }
              36.36% { transform: translate(26px, 0); }
              45.45% { transform: translate(26px, 26px); }
              54.54% { transform: translate(26px, 26px); }
              63.63% { transform: translate(26px, 26px); }
              72.72% { transform: translate(26px, 0px); }
              81.81% { transform: translate(0px, 0px); }
              90.90% { transform: translate(-26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-2 {
              9.09% { transform: translate(0, 0); }
              18.18% { transform: translate(26px, 0); }
              27.27% { transform: translate(0px, 0); }
              36.36% { transform: translate(26px, 0); }
              45.45% { transform: translate(26px, 26px); }
              54.54% { transform: translate(26px, 26px); }
              63.63% { transform: translate(26px, 26px); }
              72.72% { transform: translate(26px, 26px); }
              81.81% { transform: translate(0px, 26px); }
              90.90% { transform: translate(0px, 26px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-3 {
              9.09% { transform: translate(-26px, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(0px, 0); }
              36.36% { transform: translate(-26px, 0); }
              45.45% { transform: translate(-26px, 0); }
              54.54% { transform: translate(-26px, 0); }
              63.63% { transform: translate(-26px, 0); }
              72.72% { transform: translate(-26px, 0); }
              81.81% { transform: translate(-26px, -26px); }
              90.90% { transform: translate(0px, -26px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-4 {
              9.09% { transform: translate(-26px, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(-26px, -26px); }
              36.36% { transform: translate(0px, -26px); }
              45.45% { transform: translate(0px, 0px); }
              54.54% { transform: translate(0px, -26px); }
              63.63% { transform: translate(0px, -26px); }
              72.72% { transform: translate(0px, -26px); }
              81.81% { transform: translate(-26px, -26px); }
              90.90% { transform: translate(-26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-5 {
              9.09% { transform: translate(0, 0); }
              18.18% { transform: translate(0, 0); }
              27.27% { transform: translate(0, 0); }
              36.36% { transform: translate(26px, 0); }
              45.45% { transform: translate(26px, 0); }
              54.54% { transform: translate(26px, 0); }
              63.63% { transform: translate(26px, 0); }
              72.72% { transform: translate(26px, 0); }
              81.81% { transform: translate(26px, -26px); }
              90.90% { transform: translate(0px, -26px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-6 {
              9.09% { transform: translate(0, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(-26px, 0); }
              36.36% { transform: translate(0px, 0); }
              45.45% { transform: translate(0px, 0); }
              54.54% { transform: translate(0px, 0); }
              63.63% { transform: translate(0px, 0); }
              72.72% { transform: translate(0px, 26px); }
              81.81% { transform: translate(-26px, 26px); }
              90.90% { transform: translate(-26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-7 {
              9.09% { transform: translate(26px, 0); }
              18.18% { transform: translate(26px, 0); }
              27.27% { transform: translate(26px, 0); }
              36.36% { transform: translate(0px, 0); }
              45.45% { transform: translate(0px, -26px); }
              54.54% { transform: translate(26px, -26px); }
              63.63% { transform: translate(0px, -26px); }
              72.72% { transform: translate(0px, -26px); }
              81.81% { transform: translate(0px, 0px); }
              90.90% { transform: translate(26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-8 {
              9.09% { transform: translate(0, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(-26px, -26px); }
              36.36% { transform: translate(0px, -26px); }
              45.45% { transform: translate(0px, -26px); }
              54.54% { transform: translate(0px, -26px); }
              63.63% { transform: translate(0px, -26px); }
              72.72% { transform: translate(0px, -26px); }
              81.81% { transform: translate(26px, -26px); }
              90.90% { transform: translate(26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-9 {
              9.09% { transform: translate(-26px, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(0px, 0); }
              36.36% { transform: translate(-26px, 0); }
              45.45% { transform: translate(0px, 0); }
              54.54% { transform: translate(0px, 0); }
              63.63% { transform: translate(-26px, 0); }
              72.72% { transform: translate(-26px, 0); }
              81.81% { transform: translate(-52px, 0); }
              90.90% { transform: translate(-26px, 0); }
              100% { transform: translate(0px, 0); }
            }
            `}
                </style>
                <div className="banter-loader">
                    <div className="banter-box" />
                    <div className="banter-box" />
                    <div className="banter-box" />
                    <div className="banter-box" />
                    <div className="banter-box" />
                    <div className="banter-box" />
                    <div className="banter-box" />
                    <div className="banter-box" />
                    <div className="banter-box" />
                </div>
            </div>
        </ComponentShowcase>
    );
}
