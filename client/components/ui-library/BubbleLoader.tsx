import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const BubbleLoader = () => {
  return (
    <div className="bubble-loader-wrapper">
      <style>
        {\`
        .bubble-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .bubble-loader-bubble {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-image: linear-gradient(to right, #ff6b81, #ff9a44);
          margin: 0 5px;
          animation: bubble-loader-anim 1.5s ease-in-out infinite;
        }

        .bubble-loader-bubble:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .bubble-loader-bubble:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes bubble-loader-anim {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }
        \`}
      </style>
      <div className="bubble-loader">
        <div className="bubble-loader-bubble" />
        <div className="bubble-loader-bubble" />
        <div className="bubble-loader-bubble" />
      </div>
    </div>
  );
}

export default BubbleLoader;
`;

export function BubbleLoader() {
    return (
        <ComponentShowcase title="Bubble Loader" code={code} className="min-h-[150px] flex items-center justify-center">
            <div className="bubble-loader-wrapper">
                <style>
                    {`
            .bubble-loader {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            }

            .bubble-loader-bubble {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-image: linear-gradient(to right, #ff6b81, #ff9a44);
              margin: 0 5px;
              animation: bubble-loader-anim 1.5s ease-in-out infinite;
            }

            .bubble-loader-bubble:nth-child(2) {
                animation-delay: 0.2s;
            }
            
            .bubble-loader-bubble:nth-child(3) {
                animation-delay: 0.4s;
            }

            @keyframes bubble-loader-anim {
              0%, 100% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.5);
                opacity: 0.5;
              }
            }
            `}
                </style>
                <div className="bubble-loader">
                    <div className="bubble-loader-bubble" />
                    <div className="bubble-loader-bubble" />
                    <div className="bubble-loader-bubble" />
                </div>
            </div>
        </ComponentShowcase>
    );
}
