import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const MatrixCube = () => {
  return (
    <div className="mc-wrapper">
      <style>
        {\`
        .mc-wrapper {
          perspective: 1000px;
        }

        @keyframes mc-animate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .mc-wrapper .mc-container {
          position: relative;
          transform: skewY(-20deg);
          animation: mc-animate 5s linear infinite;
        }

        .mc-wrapper .mc-cube {
          position: relative;
          z-index: 2;
        }

        .mc-wrapper .mc-cube:nth-child(2) {
          z-index: 1;
          translate: -60px -60px;
        }

        .mc-wrapper .mc-cube:nth-child(3) {
          z-index: 3;
          translate: 60px 60px;
        }

        .mc-wrapper .mc-div {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 30px;
          translate: calc(-70px * var(--x)) calc(-60px * var(--y));
        }

        .mc-wrapper .mc-span {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 50px;
          background: #dcdcdc;
          z-index: calc(1 * var(--i));
          transition: 1.5s;
        }

        .mc-wrapper .mc-span:hover {
          transition: 0s;
          background: #ef4149;
          filter: drop-shadow(0 0 30px #ef4149);
        }

        .mc-wrapper .mc-span:hover:before,
        .mc-wrapper .mc-span:hover:after {
          transition: 0s;
          background: #ef4149;
        }

        .mc-wrapper .mc-span:before {
          content: "";
          position: absolute;
          left: -40px;
          width: 40px;
          height: 100%;
          background: #fff;
          transform-origin: right;
          transform: skewY(45deg);
          transition: 1.5s;
        }

        .mc-wrapper .mc-span:after {
          content: "";
          position: absolute;
          top: -40px;
          left: 0px;
          width: 100%;
          height: 40px;
          background: #f2f2f2;
          transform-origin: bottom;
          transform: skewX(45deg);
          transition: 1.5s;
        }
        \`}
      </style>
      <div className="mc-container">
        {[0, 1, 2].map((k) => (
          <div className="mc-cube" key={k}>
            <div className="mc-div" style={{'--x': -1, '--y': 0} as React.CSSProperties}>
              <span className="mc-span" style={{'--i': 3} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 2} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 1} as React.CSSProperties} />
            </div>
            <div className="mc-div" style={{'--x': 0, '--y': 0} as React.CSSProperties}>
              <span className="mc-span" style={{'--i': 3} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 2} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 1} as React.CSSProperties} />
            </div>
            <div className="mc-div" style={{'--x': 1, '--y': 0} as React.CSSProperties}>
              <span className="mc-span" style={{'--i': 3} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 2} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 1} as React.CSSProperties} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatrixCube;
`;

export function MatrixCube() {
    return (
        <ComponentShowcase title="Matrix Cube" code={code} className="flex items-center justify-center p-12 min-h-[400px]">
            <div className="mc-wrapper">
                <style>
                    {`
        .mc-wrapper {
          perspective: 1000px;
          padding: 100px;
        }

        @keyframes mc-animate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .mc-wrapper .mc-container {
          position: relative;
          transform: skewY(-20deg);
          animation: mc-animate 5s linear infinite;
        }

        .mc-wrapper .mc-cube {
          position: relative;
          z-index: 2;
        }

        .mc-wrapper .mc-cube:nth-child(2) {
          z-index: 1;
          translate: -60px -60px;
        }

        .mc-wrapper .mc-cube:nth-child(3) {
          z-index: 3;
          translate: 60px 60px;
        }

        .mc-wrapper .mc-div {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 30px;
          translate: calc(-70px * var(--x)) calc(-60px * var(--y));
        }

        .mc-wrapper .mc-span {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 50px;
          background: #dcdcdc;
          z-index: calc(1 * var(--i));
          transition: 1.5s;
        }

        .mc-wrapper .mc-span:hover {
          transition: 0s;
          background: #ef4149;
          filter: drop-shadow(0 0 30px #ef4149);
        }

        .mc-wrapper .mc-span:hover:before,
        .mc-wrapper .mc-span:hover:after {
          transition: 0s;
          background: #ef4149;
        }

        .mc-wrapper .mc-span:before {
          content: "";
          position: absolute;
          left: -40px;
          width: 40px;
          height: 100%;
          background: #fff;
          transform-origin: right;
          transform: skewY(45deg);
          transition: 1.5s;
        }

        .mc-wrapper .mc-span:after {
          content: "";
          position: absolute;
          top: -40px;
          left: 0px;
          width: 100%;
          height: 40px;
          background: #f2f2f2;
          transform-origin: bottom;
          transform: skewX(45deg);
          transition: 1.5s;
        }
        `}
                </style>
                <div className="mc-container">
                    {[0, 1, 2].map((k) => (
                        <div className="mc-cube" key={k}>
                            <div className="mc-div" style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
                                <span className="mc-span" style={{ '--i': 3 } as React.CSSProperties} />
                                <span className="mc-span" style={{ '--i': 2 } as React.CSSProperties} />
                                <span className="mc-span" style={{ '--i': 1 } as React.CSSProperties} />
                            </div>
                            <div className="mc-div" style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
                                <span className="mc-span" style={{ '--i': 3 } as React.CSSProperties} />
                                <span className="mc-span" style={{ '--i': 2 } as React.CSSProperties} />
                                <span className="mc-span" style={{ '--i': 1 } as React.CSSProperties} />
                            </div>
                            <div className="mc-div" style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
                                <span className="mc-span" style={{ '--i': 3 } as React.CSSProperties} />
                                <span className="mc-span" style={{ '--i': 2 } as React.CSSProperties} />
                                <span className="mc-span" style={{ '--i': 1 } as React.CSSProperties} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ComponentShowcase>
    );
}
