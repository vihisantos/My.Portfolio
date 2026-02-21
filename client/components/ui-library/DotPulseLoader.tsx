import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';
import styled, { keyframes } from 'styled-components';

const dotPulse = keyframes\`
  0% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
\`;

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  .pulse-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 6px;
    border-radius: 50%;
    animation: \${dotPulse} 1.5s ease-in-out infinite;
  }

  .pulse-dot-1 { background-color: #4285f4; animation-delay: 0s; }
  .pulse-dot-2 { background-color: #34a853; animation-delay: 0.3s; }
  .pulse-dot-3 { background-color: #fbbc05; animation-delay: 0.6s; }
  .pulse-dot-4 { background-color: #ea4335; animation-delay: 0.9s; }
  .pulse-dot-5 { background-color: #4285f4; animation-delay: 1.2s; }
\`;

const Loader = () => {
  return (
    <Wrapper>
      <div className="pulse-dot pulse-dot-1" />
      <div className="pulse-dot pulse-dot-2" />
      <div className="pulse-dot pulse-dot-3" />
      <div className="pulse-dot pulse-dot-4" />
      <div className="pulse-dot pulse-dot-5" />
    </Wrapper>
  );
}

export default Loader;
`;

const dotPulse = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
  .pulse-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 6px;
    border-radius: 50%;
    animation: ${dotPulse} 1.5s ease-in-out infinite;
  }

  .pulse-dot-1 { background-color: #4285f4; animation-delay: 0s; }
  .pulse-dot-2 { background-color: #34a853; animation-delay: 0.3s; }
  .pulse-dot-3 { background-color: #fbbc05; animation-delay: 0.6s; }
  .pulse-dot-4 { background-color: #ea4335; animation-delay: 0.9s; }
  .pulse-dot-5 { background-color: #4285f4; animation-delay: 1.2s; }
`;

export function DotPulseLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[150px]">
      <StyledWrapper>
        <div className="pulse-dot pulse-dot-1" />
        <div className="pulse-dot pulse-dot-2" />
        <div className="pulse-dot pulse-dot-3" />
        <div className="pulse-dot pulse-dot-4" />
        <div className="pulse-dot pulse-dot-5" />
      </StyledWrapper>
    </div>
  );
}

export function DotPulseLoader() {
  return (
    <ComponentShowcase title="Dot Pulse Loader" code={code} className="min-h-[250px]">
      <DotPulseLoaderContent />
    </ComponentShowcase>
  );
}
