
import React, { useRef } from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button data-label="Register" className="rainbow-hover">
        <span className="sp">Register</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div\`
  .rainbow-hover {
    font-size: 16px;
    font-weight: 700;
    color: #ff7576;
    background-color: #2B3044;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 12px 24px;
    position: relative;
    line-height: 24px;
    border-radius: 9px;
    box-shadow: 0px 1px 2px #2B3044,
      0px 4px 16px #2B3044;
    transform-style: preserve-3d;
    transform: scale(var(--s, 1)) perspective(600px)
      rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
    perspective: 600px;
    transition: transform 0.1s;
  }

  .sp {
    background: linear-gradient(
        90deg,
        #866ee7,
        #ea60da,
        #ed8f57,
        #fbd41d,
        #2cca91
      );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    display: block;
  }

  .rainbow-hover:active {
    transition: 0.3s;
    transform: scale(0.93);
  }\`;

export default Button;`;

export const RainbowButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    // Max rotation 15deg
    const width = rect.width;
    const height = rect.height;

    // ry: varies from -15 to 15 based on x
    const ry = ((x / width) - 0.5) * 30; // 0.5 * 30 * 2 ?? No ((0..1) - 0.5) = -0.5..0.5 -> *30 = -15..15

    // rx: varies from 15 to -15 based on y (inverted because y goes down)
    const rx = ((y / height) - 0.5) * -30;

    btn.style.setProperty('--rx', `${rx}deg`);
    btn.style.setProperty('--ry', `${ry}deg`);
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    const btn = btnRef.current;
    btn.style.setProperty('--rx', '0deg');
    btn.style.setProperty('--ry', '0deg');
  };

  return (
    <ComponentShowcase title="Rainbow Button" code={code} scale={0.85}>
      <div className="rainbow-button-wrapper">
        <button
          ref={btnRef}
          data-label="Register"
          className="rainbow-hover"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <span className="sp">Register</span>
        </button>
      </div>
      <style>{`
        .rainbow-button-wrapper .rainbow-hover {
          font-size: 16px;
          font-weight: 700;
          color: #ff7576;
          background-color: #2B3044;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 12px 24px;
          position: relative;
          line-height: 24px;
          border-radius: 9px;
          box-shadow: 0px 1px 2px #2B3044,
            0px 4px 16px #2B3044;
          transform-style: preserve-3d;
          transform: scale(var(--s, 1)) perspective(600px)
            rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          perspective: 600px;
          transition: transform 0.1s;
          will-change: transform;
        }

        .rainbow-button-wrapper .sp {
          background: linear-gradient(
              90deg,
              #866ee7,
              #ea60da,
              #ed8f57,
              #fbd41d,
              #2cca91
            );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          display: block;
        }

        .rainbow-button-wrapper .rainbow-hover:active {
          transition: 0.3s;
          transform: scale(0.93) perspectiva(600px) rotateX(0deg) rotateY(0deg); /* Reset rotation on click for feel */
        }
      `}</style>
    </ComponentShowcase>
  );
}

export default RainbowButton;
