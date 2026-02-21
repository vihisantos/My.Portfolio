import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';
import styled, { keyframes } from 'styled-components';

const shineAnim = keyframes\`
  0% { background-position: 0; }
  60% { background-position: 180px; }
  100% { background-position: 180px; }
\`;

const ShineLink = styled.a\`
  padding: 12px 48px;
  color: #fff;
  background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: \${shineAnim} 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
\`;

const Button = () => {
  return (
    <div className="shine-btn-wrapper">
      <ShineLink href="#">Get early access</ShineLink>
    </div>
  );
}

export default Button;
`;

const shineAnim = keyframes`
  0% { background-position: 0; }
  60% { background-position: 180px; }
  100% { background-position: 180px; }
`;

const StyledShineLink = styled.a`
  --shine-base: #9ca3af; /* gray-400 */
  --shine-highlight: #ffffff;
  
  padding: 12px 48px;
  color: var(--shine-base);
  background: linear-gradient(to right, #4b5563 0, #ffffff 10%, #4b5563 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shineAnim} 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    scale: 1.05;
  }
`;

export function ShineButtonContent() {
  return (
    <div className="w-full h-full min-h-[100px] flex items-center justify-center bg-transparent rounded-lg transition-colors duration-300">
      <StyledShineLink href="#">Get early access</StyledShineLink>
    </div>
  );
}

export function ShineButton() {
  return (
    <ComponentShowcase title="Shine Button" code={code} className="min-h-[150px] flex items-center justify-center">
      <ShineButtonContent />
    </ComponentShowcase>
  );
}
