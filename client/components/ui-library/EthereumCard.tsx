import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const EthereumCard = () => {
  return (
    <div className="eth-card-wrapper">
      <style>
        {\`
        .eth-card-wrapper .eth-card {
          width: 195px;
          height: 285px;
          background: #313131;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.2s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .eth-card-wrapper .eth-img {
          height: 30%;
          position: absolute;
          transition: 0.2s ease-in-out;
          z-index: 1;
        }

        .eth-card-wrapper .eth-text-box {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          transition: 0.2s ease-in-out;
          z-index: 2;
        }

        .eth-card-wrapper .eth-text-box > .eth-text {
          font-weight: bold;
        }

        .eth-card-wrapper .eth-text-box > .eth-head {
          font-size: 20px;
        }

        .eth-card-wrapper .eth-text-box > .eth-price {
          font-size: 17px;
        }

        .eth-card-wrapper .eth-text-box > span {
          font-size: 12px;
          color: lightgrey;
        }

        .eth-card-wrapper .eth-card:hover > .eth-text-box {
          opacity: 1;
        }

        .eth-card-wrapper .eth-card:hover > .eth-img {
          height: 65%;
          filter: blur(7px);
          animation: eth-float 3s infinite;
        }

        @keyframes eth-float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .eth-card-wrapper .eth-card:hover {
          transform: scale(1.04) rotate(-1deg);
        }
        \`}
      </style>
      <div className="eth-card">
        <svg className="eth-img" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39">
          <g id="eth-layer-1">
            <g id="eth-layer-group">
              <g>
                <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" />
                <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
                <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" />
                <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
                <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
                <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
              </g>
            </g>
          </g>
        </svg>
        <div className="eth-text-box">
          <p className="eth-text eth-head">Ethereum</p>
          <span>Cryptocurrency</span>
          <p className="eth-text eth-price">1.654,34€</p>
        </div>
      </div>
    </div>
  );
}

export default EthereumCard;
`;

export function EthereumCard() {
    return (
        <ComponentShowcase title="Ethereum Card" code={code} className="flex items-center justify-center p-12 min-h-[400px]">
            <div className="eth-card-wrapper">
                <style>
                    {`
        .eth-card-wrapper .eth-card {
          width: 195px;
          height: 285px;
          background: #313131;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.2s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .eth-card-wrapper .eth-img {
          height: 30%;
          position: absolute;
          transition: 0.2s ease-in-out;
          z-index: 1;
        }

        .eth-card-wrapper .eth-text-box {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          transition: 0.2s ease-in-out;
          z-index: 2;
        }

        .eth-card-wrapper .eth-text-box > .eth-text {
          font-weight: bold;
        }

        .eth-card-wrapper .eth-text-box > .eth-head {
          font-size: 20px;
        }

        .eth-card-wrapper .eth-text-box > .eth-price {
          font-size: 17px;
        }

        .eth-card-wrapper .eth-text-box > span {
          font-size: 12px;
          color: lightgrey;
        }

        .eth-card-wrapper .eth-card:hover > .eth-text-box {
          opacity: 1;
        }

        .eth-card-wrapper .eth-card:hover > .eth-img {
          height: 65%;
          filter: blur(7px);
          animation: eth-float 3s infinite;
        }

        @keyframes eth-float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .eth-card-wrapper .eth-card:hover {
          transform: scale(1.04) rotate(-1deg);
        }
        `}
                </style>
                <div className="eth-card">
                    <svg className="eth-img" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39">
                        <g id="eth-layer-1">
                            <g id="eth-layer-group">
                                <g>
                                    <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" />
                                    <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
                                    <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" />
                                    <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
                                    <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
                                    <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="eth-text-box">
                        <p className="eth-text eth-head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="eth-text eth-price">1.654,34€</p>
                    </div>
                </div>
            </div>
        </ComponentShowcase>
    );
}
