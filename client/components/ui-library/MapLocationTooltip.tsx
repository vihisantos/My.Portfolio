import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";
import { MapLocationTooltipContent } from "./MapLocationTooltipContent";

const code = `import React from 'react';

const Tooltip = () => {
  return (
    <div className="map-tooltip-wrapper">
      <style>
        {\`
        .map-tooltip-app {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .map-tooltip-reference {
          position: relative;
        }

        .map-tooltip-main-title {
          font-size: 1.2rem;
          color: #4e8e5b;
          font-weight: 600;
        }
        
        .map-tooltip-hover-text {
            font-style: italic; 
            color: #226630;
            cursor: pointer;
            text-decoration: underline;
            text-decoration-style: dotted;
        }

        .map-tooltip-card {
          position: absolute;
          top: -100px;
          left: 15%;
          transition: transform 0.3s cubic-bezier(0.74, -0.03, 0.05, 1.24);
          width: 160px;
          height: 95px;
          will-change: transform;
          transform-origin: 50% 100%;
          transform: scale(0);
          filter: blur(10px);
          background: white;
          border-radius: 18px;
          box-shadow:
            0 0 0 2px #b0dbbf,
            1px 4px 5px 4px #ededed54;
          padding: 2px;
          animation-duration: 0.3s;
          animation-delay: 0.1s;
          animation-fill-mode: both;
          overflow: hidden;
          z-index: 10;
          display: block !important; /* Force display for animation */
        }

        /* Show card on hover of the text */
        .map-tooltip-reference:hover .map-tooltip-card {
          transform: scale(1);
          animation-name: map-tooltip-coolfadeIn;
        }

        .map-tooltip-card:hover {
          pointer-events: all;
        }

        .map-tooltip-bg-map {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 0;
          background: #e6f7ff; /* Fallback */
          /* Simulated map pattern */
          background-image: radial-gradient(#a3d8f7 1px, transparent 1px);
          background-size: 10px 10px;
        }

        .map-tooltip-elements {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .map-tooltip-details {
          z-index: 1;
          margin-bottom: -10%;
          margin-top: -12%;
          flex: 1 1 0;
          background: #daecdd;
          filter: blur(6px);
        }
        .map-tooltip-description {
          padding: 15px;
          z-index: 1;
          position: relative;
        }

        .map-tooltip-card-title {
           font-size: 1.2rem;
           color: #4e8e5b;
           font-weight: 600;
           display: block;
        }

        .map-tooltip-second-title {
          font-size: 0.9em;
          color: #5e836b;
          font-weight: 500;
          margin: 0;
        }

        .map-tooltip-inner-card {
          position: relative;
          border-radius: calc(18px - 2%);
          height: 100%;
          width: 100%;
          border: 2px solid #2d2d2d45;
          background: #daecdd;
          overflow: hidden;
        }

        .map-tooltip-blur-item {
          position: absolute;
          left: 0;
          top: 0;
          min-width: 60px;
          filter: blur(10px);
          background: #daecdd;
          z-index: -1;
          height: 110%;
        }

        .map-tooltip-location {
          background-color: #226630;
          position: absolute;
          top: 24%;
          z-index: 1000;
          left: 60%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          box-shadow: 0 0 10px 7px #c1c1c180;
          border: 5px solid white;
          animation: map-tooltip-pulse 3s infinite;
        }

        @keyframes map-tooltip-pulse {
          0% {
            transform: scale(0.95);
            box-shadow:
              0 0 0 0 rgba(72, 72, 72, 0.7),
              0 0 8px 5px #d9d9d980;
          }

          70% {
            transform: scale(1);
            box-shadow:
              0 0 0 10px rgba(72, 72, 72, 0),
              0 0 8px 5px #d9d9d980;
          }

          100% {
            transform: scale(0.95);
            box-shadow:
              0 0 0 0 rgba(72, 72, 72, 0),
              0 0 8px 5px #d9d9d980;
          }
        }

        @keyframes map-tooltip-coolfadeIn {
          0% {
            filter: brightness(1) blur(10px);
          }

          10% {
            filter: brightness(1) blur(20px);
          }

          100% {
            filter: brightness(1) blur(0px);
          }
        }

        @keyframes map-tooltip-movingClouds {
          from {
            transform: translateX(-100px);
          }
          to {
            transform: translateX(100px);
          }
        }

        .map-tooltip-cloud {
          z-index: 1;
          position: absolute;
          border-radius: 50%;
          animation-name: map-tooltip-movingClouds;
          animation-timing-function: ease;
          animation-iteration-count: infinite;
        }

        .map-tooltip-cloud:nth-child(1) {
          animation-duration: 45s;
          height: 1em;
          width: 1.4em;
          top: 3.5em;
          left: 50%;
          filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
            drop-shadow(-0.625em 0.313em #ffffffae);
          background: linear-gradient(to top right, #ffffffae, #ffffffae);
          transition: 0.4s;
        }

        .map-tooltip-cloud:nth-child(2) {
          animation-duration: 30s;
          top: 0.325em;
          right: -1em;
          width: 4.075em;
          height: 1.575em;
          background: #ebebebdb;
          filter: blur(0.425em) drop-shadow(-0.313em 0.812em #e0dfdfae)
            drop-shadow(-1.625em 0.812em #bbbbbbae) drop-shadow(-1em 0.063em #cfcfcfae);
        }

        .map-tooltip-cloud:nth-child(3) {
          animation-duration: 60s;
          top: 2.45em;
          right: 4.938em;
          width: 1.075em;
          height: 0.575em;
          background: #ffffff;
          filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
            drop-shadow(-0.625em 0.313em #ffffffae);
          transition: 0.8s;
        }

        .map-tooltip-cloud:nth-child(4) {
          animation-duration: 40s;
          top: 4.45em;
          right: 4.938em;
          width: 1.075em;
          height: 0.375em;
          background: #ffffff;
          filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
            drop-shadow(-0.625em 0.313em #ffffffae);
          transition: 0.8s;
        }
        \`}
      </style>
      <div id="app" className="map-tooltip-app">
        <div className="map-tooltip-reference">
          <p className="map-tooltip-main-title">
            Location&nbsp;
            <span className="map-tooltip-hover-text">Paris</span>, France
          </p>
          <div className="map-tooltip-card">
            <div className="map-tooltip-cloud" />
            <div className="map-tooltip-cloud" />
            <div className="map-tooltip-cloud" />
            <div className="map-tooltip-cloud" />
            <div className="map-tooltip-inner-card">
              <div className="map-tooltip-bg-map" />
              <div className="map-tooltip-location" />
              <div className="map-tooltip-elements">
                <div className="map-tooltip-description">
                  <div className="map-tooltip-blur-item" />
                  <span className="map-tooltip-card-title">Paris</span>
                  <p className="map-tooltip-second-title">France</p>
                </div>
                <div className="map-tooltip-details">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
`;

export function MapLocationTooltip() {
  return (
    <ComponentShowcase title="Map Location Tooltip" code={code} className="flex items-center justify-center p-12 min-h-[400px]">
      <MapLocationTooltipContent />
    </ComponentShowcase>
  );
}
