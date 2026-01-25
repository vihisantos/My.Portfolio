
import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div\`
  .loader {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 8px solid #fff;
    border-left: 8px solid #fff;
    border-right: 8px solid #ff00;
    animation: loader .7s infinite linear;
  }

  @keyframes loader {
    to {
      transform: rotate(360deg);
    }
  }\`;

export default Loader;`;

export const CleanCircleLoader = () => {
    return (
        <ComponentShowcase title="Clean Circle Loader" code={code}>
            <div className="clean-circle-loader-wrapper">
                <div className="loader" />
            </div>
            <style>{`
        .clean-circle-loader-wrapper .loader {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          box-sizing: border-box;
          border-top: 8px solid #fff;
          border-left: 8px solid #fff;
          border-right: 8px solid transparent;
          animation: cleanCircleLoaderAnim .7s infinite linear;
        }

        @keyframes cleanCircleLoaderAnim {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </ComponentShowcase>
    );
}

export default CleanCircleLoader;
