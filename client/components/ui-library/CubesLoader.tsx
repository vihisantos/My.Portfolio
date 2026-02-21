import React from 'react';
import styled from 'styled-components';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="cl-loop cl-cubes">
        <div className="cl-item cl-cubes" />
        <div className="cl-item cl-cubes" />
        <div className="cl-item cl-cubes" />
        <div className="cl-item cl-cubes" />
        <div className="cl-item cl-cubes" />
        <div className="cl-item cl-cubes" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div\`
  .cl-cubes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
  }

  .cl-loop {
    transform: rotateX(-35deg) rotateY(-45deg) translateZ(1.5625em);
  }

  @keyframes s {
    to {
      transform: scale3d(0.2, 0.2, 0.2);
    }
  }

  .cl-item {
    margin: -1.5625em;
    width: 3.125em;
    height: 3.125em;
    transform-origin: 50% 50% -1.5625em;
    box-shadow: 0 0 0.125em currentColor;
    background: currentColor;
    animation: s 0.6s cubic-bezier(0.45, 0.03, 0.51, 0.95) infinite alternate;
  }

  .cl-item:before,
  .cl-item:after {
    position: absolute;
    width: inherit;
    height: inherit;
    transform-origin: 0 100%;
    box-shadow: inherit;
    background: currentColor;
    content: "";
  }

  .cl-item:before {
    bottom: 100%;
    transform: rotateX(90deg);
  }

  .cl-item:after {
    left: 100%;
    transform: rotateY(90deg);
  }

  .cl-item:nth-child(1) {
    margin-top: 6.25em;
    color: #fe1e52;
    animation-delay: -1.2s;
  }

  .cl-item:nth-child(1):before {
    color: #ff6488;
  }

  .cl-item:nth-child(1):after {
    color: #ff416d;
  }

  .cl-item:nth-child(2) {
    margin-top: 3.125em;
    color: #fe4252;
    animation-delay: -1s;
  }

  .cl-item:nth-child(2):before {
    color: #ff8892;
  }

  .cl-item:nth-child(2):after {
    color: #ff6572;
  }

  .cl-item:nth-child(3) {
    margin-top: 0em;
    color: #fe6553;
    animation-delay: -0.8s;
  }

  .cl-item:nth-child(3):before {
    color: #ffa499;
  }

  .cl-item:nth-child(3):after {
    color: #ff8476;
  }

  .cl-item:nth-child(4) {
    margin-top: -3.125em;
    color: #fe8953;
    animation-delay: -0.6s;
  }

  .cl-item:nth-child(4):before {
    color: #ffb999;
  }

  .cl-item:nth-child(4):after {
    color: #ffa176;
  }

  .cl-item:nth-child(5) {
    margin-top: -6.25em;
    color: #feac54;
    animation-delay: -0.4s;
  }

  .cl-item:nth-child(5):before {
    color: #ffce9a;
  }

  .cl-item:nth-child(5):after {
    color: #ffbd77;
  }

  .cl-item:nth-child(6) {
    margin-top: -9.375em;
    color: #fed054;
    animation-delay: -0.2s;
  }

  .cl-item:nth-child(6):before {
    color: #ffe49a;
  }

  .cl-item:nth-child(6):after {
    color: #ffda77;
  }
\`;`;

export const CubesLoaderContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[300px]">
      <StyledWrapper>
        <div className="cl-loop cl-cubes">
          <div className="cl-item cl-cubes" />
          <div className="cl-item cl-cubes" />
          <div className="cl-item cl-cubes" />
          <div className="cl-item cl-cubes" />
          <div className="cl-item cl-cubes" />
          <div className="cl-item cl-cubes" />
        </div>
      </StyledWrapper>
    </div>
  );
}

export function CubesLoader() {
  return (
    <ComponentShowcase title="3D Cubes Loader" code={code} className="min-h-[300px]">
      <CubesLoaderContent />
    </ComponentShowcase>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Scale down slightly to fit the card if needed */
  /* transform: scale(0.6); */

  .cl-cubes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
  }

  .cl-loop {
    transform: rotateX(-35deg) rotateY(-45deg) translateZ(1.5625em);
  }

  @keyframes s {
    to {
      transform: scale3d(0.2, 0.2, 0.2);
    }
  }

  .cl-item {
    margin: -1.5625em;
    width: 3.125em;
    height: 3.125em;
    transform-origin: 50% 50% -1.5625em;
    box-shadow: 0 0 0.125em currentColor;
    background: currentColor;
    animation: s 0.6s cubic-bezier(0.45, 0.03, 0.51, 0.95) infinite alternate;
  }

  .cl-item:before,
  .cl-item:after {
    position: absolute;
    width: inherit;
    height: inherit;
    transform-origin: 0 100%;
    box-shadow: inherit;
    background: currentColor;
    content: "";
  }

  .cl-item:before {
    bottom: 100%;
    transform: rotateX(90deg);
  }

  .cl-item:after {
    left: 100%;
    transform: rotateY(90deg);
  }

  .cl-item:nth-child(1) {
    margin-top: 6.25em;
    color: #fe1e52;
    animation-delay: -1.2s;
  }

  .cl-item:nth-child(1):before {
    color: #ff6488;
  }

  .cl-item:nth-child(1):after {
    color: #ff416d;
  }

  .cl-item:nth-child(2) {
    margin-top: 3.125em;
    color: #fe4252;
    animation-delay: -1s;
  }

  .cl-item:nth-child(2):before {
    color: #ff8892;
  }

  .cl-item:nth-child(2):after {
    color: #ff6572;
  }

  .cl-item:nth-child(3) {
    margin-top: 0em;
    color: #fe6553;
    animation-delay: -0.8s;
  }

  .cl-item:nth-child(3):before {
    color: #ffa499;
  }

  .cl-item:nth-child(3):after {
    color: #ff8476;
  }

  .cl-item:nth-child(4) {
    margin-top: -3.125em;
    color: #fe8953;
    animation-delay: -0.6s;
  }

  .cl-item:nth-child(4):before {
    color: #ffb999;
  }

  .cl-item:nth-child(4):after {
    color: #ffa176;
  }

  .cl-item:nth-child(5) {
    margin-top: -6.25em;
    color: #feac54;
    animation-delay: -0.4s;
  }

  .cl-item:nth-child(5):before {
    color: #ffce9a;
  }

  .cl-item:nth-child(5):after {
    color: #ffbd77;
  }

  .cl-item:nth-child(6) {
    margin-top: -9.375em;
    color: #fed054;
    animation-delay: -0.2s;
  }

  .cl-item:nth-child(6):before {
    color: #ffe49a;
  }

  .cl-item:nth-child(6):after {
    color: #ffda77;
  }
`;

export default CubesLoader;
