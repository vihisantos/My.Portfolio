import React from 'react';
import styled from 'styled-components';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Switch = () => {
  return (
    <div className="gooey-switch-wrapper">
      <style>
        {\`
        .gooey-switch-container {
          --active-color: #1868e3;
          --inactive-color: #d3d3d6;
          position: relative;
          aspect-ratio: 292 / 142;
          height: 1.875em;
        }

        .gooey-switch-input {
          appearance: none;
          margin: 0;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .gooey-switch-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .gooey-switch-background {
          fill: var(--inactive-color);
          transition: fill .4s;
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-background {
          fill: var(--active-color);
        }

        .gooey-switch-circle-center {
          transform-origin: center;
          transition: transform .6s;
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle-center {
          transform: translateX(150px);
        }

        .gooey-switch-circle {
          transform-origin: center;
          transition: transform .45s;
          backface-visibility: hidden;
        }

        .gooey-switch-circle.left {
          transform: scale(1);
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle.left {
          transform: scale(0);
        }

        .gooey-switch-circle.right {
          transform: scale(0);
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle.right {
          transform: scale(1);
        }

        .gooey-switch-icon {
          transition: fill .4s;
        }

        .gooey-switch-icon.on {
          fill: var(--inactive-color);
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-icon.on {
          fill: #fff;
        }

        .gooey-switch-icon.off {
          fill: #eaeaec;
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-icon.off {
          fill: var(--active-color);
        }
        \`}
      </style>
      <div className="gooey-switch-container">
        <input type="checkbox" className="gooey-switch-input" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 142" className="gooey-switch-svg">
          <path d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z" className="gooey-switch-background" />
          <rect rx={6} height={64} width={12} y={39} x={64} className="gooey-switch-icon on" />
          <path d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z" fillRule="evenodd" className="gooey-switch-icon off" />
          <g filter="url('#gooey-switch-filter')">
            <rect fill="#fff" rx={29} height={58} width={116} y={42} x={13} className="gooey-switch-circle-center" />
            <rect fill="#fff" rx={58} height={114} width={114} y={14} x={14} className="gooey-switch-circle left" />
            <rect fill="#fff" rx={58} height={114} width={114} y={14} x={164} className="gooey-switch-circle right" />
          </g>
          <defs>
            <filter id="gooey-switch-filter">
              <feGaussianBlur stdDeviation={10} result="blur" in="SourceGraphic" />
              <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Switch;
`;

const StyledWrapper = styled.div`
  .gooey-switch-container {
    --active-color: #1868e3;
    --inactive-color: #d3d3d6;
    position: relative;
    aspect-ratio: 292 / 142;
    height: 1.875em;
  }

  .gooey-switch-input {
    appearance: none;
    margin: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .gooey-switch-svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .gooey-switch-background {
    fill: var(--inactive-color);
    transition: fill .4s;
  }

  .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-background {
    fill: var(--active-color);
  }

  .gooey-switch-circle-center {
    transform-origin: center;
    transition: transform .6s;
  }

  .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle-center {
    transform: translateX(150px);
  }

  .gooey-switch-circle {
    transform-origin: center;
    transition: transform .45s;
    backface-visibility: hidden;
  }

  .gooey-switch-circle.left {
    transform: scale(1);
  }

  .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle.left {
    transform: scale(0);
  }

  .gooey-switch-circle.right {
    transform: scale(0);
  }

  .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle.right {
    transform: scale(1);
  }

  .gooey-switch-icon {
    transition: fill .4s;
  }

  .gooey-switch-icon.on {
    fill: var(--inactive-color);
  }

  .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-icon.on {
    fill: #fff;
  }

  .gooey-switch-icon.off {
    fill: #eaeaec;
  }

  .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-icon.off {
    fill: var(--active-color);
  }
`;

export function GooeySwitchContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[150px]">
      <StyledWrapper>
        <div className="gooey-switch-container">
          <input type="checkbox" className="gooey-switch-input" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 142" className="gooey-switch-svg">
            <path d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z" className="gooey-switch-background" />
            <rect rx={6} height={64} width={12} y={39} x={64} className="gooey-switch-icon on" />
            <path d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z" fillRule="evenodd" className="gooey-switch-icon off" />
            <g filter="url('#gooey-switch-filter')">
              <rect fill="#fff" rx={29} height={58} width={116} y={42} x={13} className="gooey-switch-circle-center" />
              <rect fill="#fff" rx={58} height={114} width={114} y={14} x={14} className="gooey-switch-circle left" />
              <rect fill="#fff" rx={58} height={114} width={114} y={14} x={164} className="gooey-switch-circle right" />
            </g>
            <defs>
              <filter id="gooey-switch-filter">
                <feGaussianBlur stdDeviation={10} result="blur" in="SourceGraphic" />
                <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur" />
              </filter>
            </defs>
          </svg>
        </div>
      </StyledWrapper>
    </div>
  );
}

export function GooeySwitch() {
  return (
    <ComponentShowcase title="Gooey Switch" code={code} className="min-h-[250px]">
      <GooeySwitchContent />
    </ComponentShowcase>
  );
}
