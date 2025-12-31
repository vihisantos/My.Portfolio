import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="ghost-loader-wrapper">
      <style>
        {\`
        .ghost-container {
          position: relative;
          scale: 0.8;
          width: 140px;
          height: 140px;
        }

        .ghost-body {
          animation: ghost-upNDown infinite 0.5s;
          position: relative;
          width: 140px;
          height: 140px;
          display: grid;
          grid-template-columns: repeat(14, 1fr);
          grid-template-rows: repeat(14, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          grid-template-areas:
            "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
            "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
            "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
            "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
            "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
            "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
            "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
        }

        @keyframes ghost-upNDown {
          0%, 49% { transform: translateY(0px); }
          50%, 100% { transform: translateY(-10px); }
        }

        .ghost-pixel { background-color: red; }
        
        .ghost-top0 { grid-area: top0; }
        .ghost-top1 { grid-area: top1; }
        .ghost-top2 { grid-area: top2; }
        .ghost-top3 { grid-area: top3; }
        .ghost-top4 { grid-area: top4; }
        
        .ghost-st0 { grid-area: st0; }
        .ghost-st1 { grid-area: st1; }
        .ghost-st2 { grid-area: st2; }
        .ghost-st3 { grid-area: st3; }
        .ghost-st4 { grid-area: st4; }
        .ghost-st5 { grid-area: st5; }

        .ghost-an1 { grid-area: an1; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an18 { grid-area: an18; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an2 { grid-area: an2; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an17 { grid-area: an17; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an3 { grid-area: an3; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an16 { grid-area: an16; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an4 { grid-area: an4; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an15 { grid-area: an15; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an6 { grid-area: an6; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an12 { grid-area: an12; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an7 { grid-area: an7; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an13 { grid-area: an13; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an9 { grid-area: an9; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an10 { grid-area: an10; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an8 { grid-area: an8; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an11 { grid-area: an11; animation: ghost-flicker0 infinite 0.5s; }

        @keyframes ghost-flicker0 {
          0%, 49% { background-color: red; }
          50%, 100% { background-color: transparent; }
        }

        @keyframes ghost-flicker1 {
          0%, 49% { background-color: transparent; }
          50%, 100% { background-color: red; }
        }

        .ghost-eye {
          width: 40px; height: 50px; position: absolute; top: 30px; left: 10px;
        }
        .ghost-eye::before {
          content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute;
        }
        .ghost-eye::after {
          content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute;
        }

        .ghost-eye-right {
          width: 40px; height: 50px; position: absolute; top: 30px; right: 30px;
        }
        .ghost-eye-right::before {
          content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute;
        }
        .ghost-eye-right::after {
          content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute;
        }

        .ghost-pupil {
          width: 20px; height: 20px; background-color: blue; position: absolute; top: 50px; left: 10px; z-index: 1; animation: ghost-eyesMovement infinite 3s;
        }
        .ghost-pupil-right {
          width: 20px; height: 20px; background-color: blue; position: absolute; top: 50px; right: 50px; z-index: 1; animation: ghost-eyesMovement infinite 3s;
        }

        @keyframes ghost-eyesMovement {
          0%, 49% { transform: translateX(0px); }
          50%, 99% { transform: translateX(10px); }
          100% { transform: translateX(0px); }
        }

        .ghost-shadow {
          background-color: black; width: 140px; height: 140px; position: absolute; border-radius: 50%; transform: rotateX(80deg); filter: blur(20px); top: 80%; animation: ghost-shadowMovement infinite 0.5s;
        }

        @keyframes ghost-shadowMovement {
          0%, 49% { opacity: 0.5; }
          50%, 100% { opacity: 0.2; }
        }
        \`}
      </style>
      <div className="ghost-container">
        <div className="ghost-body">
          <div className="ghost-pupil" />
          <div className="ghost-pupil-right" />
          <div className="ghost-eye" />
          <div className="ghost-eye-right" />
          <div className="ghost-pixel ghost-top0" />
          <div className="ghost-pixel ghost-top1" />
          <div className="ghost-pixel ghost-top2" />
          <div className="ghost-pixel ghost-top3" />
          <div className="ghost-pixel ghost-top4" />
          <div className="ghost-pixel ghost-st0" />
          <div className="ghost-pixel ghost-st1" />
          <div className="ghost-pixel ghost-st2" />
          <div className="ghost-pixel ghost-st3" />
          <div className="ghost-pixel ghost-st4" />
          <div className="ghost-pixel ghost-st5" />
          <div className="ghost-an1" />
          <div className="ghost-an2" />
          <div className="ghost-an3" />
          <div className="ghost-an4" />
          <div className="ghost-an5" />
          <div className="ghost-an6" />
          <div className="ghost-an7" />
          <div className="ghost-an8" />
          <div className="ghost-an9" />
          <div className="ghost-an10" />
          <div className="ghost-an11" />
          <div className="ghost-an12" />
          <div className="ghost-an13" />
          <div className="ghost-an14" />
          <div className="ghost-an15" />
          <div className="ghost-an16" />
          <div className="ghost-an17" />
          <div className="ghost-an18" />
        </div>
        <div className="ghost-shadow" />
      </div>
    </div>
  );
}

export default Loader;
`;

export function GhostLoader() {
    return (
        <ComponentShowcase title="Ghost Loader" code={code} className="min-h-[250px] flex items-center justify-center">
            <div className="ghost-loader-wrapper scale-75">
                <style>
                    {`
            .ghost-container {
              position: relative;
              scale: 0.8;
              width: 140px;
              height: 140px;
            }

            .ghost-body {
              animation: ghost-upNDown infinite 0.5s;
              position: relative;
              width: 140px;
              height: 140px;
              display: grid;
              grid-template-columns: repeat(14, 1fr);
              grid-template-rows: repeat(14, 1fr);
              grid-column-gap: 0px;
              grid-row-gap: 0px;
              grid-template-areas:
                "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
                "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
                "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
                "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
                "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
                "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
                "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
            }

            @keyframes ghost-upNDown {
              0%, 49% { transform: translateY(0px); }
              50%, 100% { transform: translateY(-10px); }
            }

            .ghost-pixel { background-color: red; }
            
            .ghost-top0 { grid-area: top0; }
            .ghost-top1 { grid-area: top1; }
            .ghost-top2 { grid-area: top2; }
            .ghost-top3 { grid-area: top3; }
            .ghost-top4 { grid-area: top4; }
            
            .ghost-st0 { grid-area: st0; }
            .ghost-st1 { grid-area: st1; }
            .ghost-st2 { grid-area: st2; }
            .ghost-st3 { grid-area: st3; }
            .ghost-st4 { grid-area: st4; }
            .ghost-st5 { grid-area: st5; }

            .ghost-an1 { grid-area: an1; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an18 { grid-area: an18; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an2 { grid-area: an2; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an17 { grid-area: an17; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an3 { grid-area: an3; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an16 { grid-area: an16; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an4 { grid-area: an4; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an15 { grid-area: an15; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an6 { grid-area: an6; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an12 { grid-area: an12; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an7 { grid-area: an7; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an13 { grid-area: an13; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an9 { grid-area: an9; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an10 { grid-area: an10; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an8 { grid-area: an8; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an11 { grid-area: an11; animation: ghost-flicker0 infinite 0.5s; }

            @keyframes ghost-flicker0 {
              0%, 49% { background-color: red; }
              50%, 100% { background-color: transparent; }
            }

            @keyframes ghost-flicker1 {
              0%, 49% { background-color: transparent; }
              50%, 100% { background-color: red; }
            }

            .ghost-eye {
              width: 40px; height: 50px; position: absolute; top: 30px; left: 10px;
            }
            .ghost-eye::before {
              content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute;
            }
            .ghost-eye::after {
              content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute;
            }

            .ghost-eye-right {
              width: 40px; height: 50px; position: absolute; top: 30px; right: 30px;
            }
            .ghost-eye-right::before {
              content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute;
            }
            .ghost-eye-right::after {
              content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute;
            }

            .ghost-pupil {
              width: 20px; height: 20px; background-color: blue; position: absolute; top: 50px; left: 10px; z-index: 1; animation: ghost-eyesMovement infinite 3s;
            }
            .ghost-pupil-right {
              width: 20px; height: 20px; background-color: blue; position: absolute; top: 50px; right: 50px; z-index: 1; animation: ghost-eyesMovement infinite 3s;
            }

            @keyframes ghost-eyesMovement {
              0%, 49% { transform: translateX(0px); }
              50%, 99% { transform: translateX(10px); }
              100% { transform: translateX(0px); }
            }

            .ghost-shadow {
              background-color: black; width: 140px; height: 140px; position: absolute; border-radius: 50%; transform: rotateX(80deg); filter: blur(20px); top: 80%; animation: ghost-shadowMovement infinite 0.5s;
            }

            @keyframes ghost-shadowMovement {
              0%, 49% { opacity: 0.5; }
              50%, 100% { opacity: 0.2; }
            }
            `}
                </style>
                <div className="ghost-container">
                    <div className="ghost-body">
                        <div className="ghost-pupil" />
                        <div className="ghost-pupil-right" />
                        <div className="ghost-eye" />
                        <div className="ghost-eye-right" />
                        <div className="ghost-pixel ghost-top0" />
                        <div className="ghost-pixel ghost-top1" />
                        <div className="ghost-pixel ghost-top2" />
                        <div className="ghost-pixel ghost-top3" />
                        <div className="ghost-pixel ghost-top4" />
                        <div className="ghost-pixel ghost-st0" />
                        <div className="ghost-pixel ghost-st1" />
                        <div className="ghost-pixel ghost-st2" />
                        <div className="ghost-pixel ghost-st3" />
                        <div className="ghost-pixel ghost-st4" />
                        <div className="ghost-pixel ghost-st5" />
                        <div className="ghost-an1" />
                        <div className="ghost-an2" />
                        <div className="ghost-an3" />
                        <div className="ghost-an4" />
                        <div className="ghost-an5" />
                        <div className="ghost-an6" />
                        <div className="ghost-an7" />
                        <div className="ghost-an8" />
                        <div className="ghost-an9" />
                        <div className="ghost-an10" />
                        <div className="ghost-an11" />
                        <div className="ghost-an12" />
                        <div className="ghost-an13" />
                        <div className="ghost-an14" />
                        <div className="ghost-an15" />
                        <div className="ghost-an16" />
                        <div className="ghost-an17" />
                        <div className="ghost-an18" />
                    </div>
                    <div className="ghost-shadow" />
                </div>
            </div>
        </ComponentShowcase>
    );
}
