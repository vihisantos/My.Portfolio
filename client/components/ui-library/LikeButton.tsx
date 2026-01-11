import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const LikeButton = () => {
  return (
    <div className="like-btn-wrapper">
      <style>
        {\`
        .like-btn-wrapper .like-container {
          --like-heart-color: rgb(255, 91, 137);
          position: relative;
          width: 50px;
          height: 50px;
          transition: .3s;
        }

        .like-btn-wrapper .like-checkbox {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 20;
          cursor: pointer;
        }

        .like-btn-wrapper .like-svg-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .like-btn-wrapper .like-svg-outline,
        .like-btn-wrapper .like-svg-filled {
          fill: var(--like-heart-color);
          position: absolute;
        }

        .like-btn-wrapper .like-svg-filled {
          animation: like-heart-filled-anim 1s;
          display: none;
        }

        .like-btn-wrapper .like-svg-celebrate {
          position: absolute;
          animation: like-heart-celebrate-anim .5s;
          animation-fill-mode: forwards;
          display: none;
          stroke: var(--like-heart-color);
          fill: var(--like-heart-color);
          stroke-width: 2px;
        }

        .like-btn-wrapper .like-checkbox:checked ~ .like-svg-container .like-svg-filled {
          display: block
        }

        .like-btn-wrapper .like-checkbox:checked ~ .like-svg-container .like-svg-celebrate {
          display: block
        }

        @keyframes like-heart-filled-anim {
          0% { transform: scale(0); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); filter: brightness(1.5); }
        }

        @keyframes like-heart-celebrate-anim {
          0% { transform: scale(0); }
          50% { opacity: 1; filter: brightness(1.5); }
          100% { transform: scale(1.4); opacity: 0; display: none; }
        }
        \`}
      </style>
      <div className="like-container" title="Like">
        <input type="checkbox" className="like-checkbox" id="like-btn-checkbox" />
        <div className="like-svg-container">
          <svg viewBox="0 0 24 24" className="like-svg-outline" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
            </path>
          </svg>
          <svg viewBox="0 0 24 24" className="like-svg-filled" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
            </path>
          </svg>
          <svg className="like-svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="10,10 20,20" />
            <polygon points="10,50 20,50" />
            <polygon points="20,80 30,70" />
            <polygon points="90,10 80,20" />
            <polygon points="90,50 80,50" />
            <polygon points="80,80 70,70" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LikeButton;
`;

export function LikeButton() {
    return (
        <ComponentShowcase title="Like Button" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
            <div className="like-btn-wrapper">
                <style>
                    {`
        .like-btn-wrapper .like-container {
          --like-heart-color: rgb(255, 91, 137);
          position: relative;
          width: 50px;
          height: 50px;
          transition: .3s;
        }

        .like-btn-wrapper .like-checkbox {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 20;
          cursor: pointer;
        }

        .like-btn-wrapper .like-svg-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .like-btn-wrapper .like-svg-outline,
        .like-btn-wrapper .like-svg-filled {
          fill: var(--like-heart-color);
          position: absolute;
        }

        .like-btn-wrapper .like-svg-filled {
          animation: like-heart-filled-anim 1s;
          display: none;
        }

        .like-btn-wrapper .like-svg-celebrate {
          position: absolute;
          animation: like-heart-celebrate-anim .5s;
          animation-fill-mode: forwards;
          display: none;
          stroke: var(--like-heart-color);
          fill: var(--like-heart-color);
          stroke-width: 2px;
        }

        .like-btn-wrapper .like-checkbox:checked ~ .like-svg-container .like-svg-filled {
          display: block
        }

        .like-btn-wrapper .like-checkbox:checked ~ .like-svg-container .like-svg-celebrate {
          display: block
        }

        @keyframes like-heart-filled-anim {
          0% { transform: scale(0); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); filter: brightness(1.5); }
        }

        @keyframes like-heart-celebrate-anim {
          0% { transform: scale(0); }
          50% { opacity: 1; filter: brightness(1.5); }
          100% { transform: scale(1.4); opacity: 0; display: none; }
        }
        `}
                </style>
                <div className="like-container" title="Like">
                    <input type="checkbox" className="like-checkbox" id="like-btn-checkbox" />
                    <div className="like-svg-container">
                        <svg viewBox="0 0 24 24" className="like-svg-outline" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                            </path>
                        </svg>
                        <svg viewBox="0 0 24 24" className="like-svg-filled" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                            </path>
                        </svg>
                        <svg className="like-svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="10,10 20,20" />
                            <polygon points="10,50 20,50" />
                            <polygon points="20,80 30,70" />
                            <polygon points="90,10 80,20" />
                            <polygon points="90,50 80,50" />
                            <polygon points="80,80 70,70" />
                        </svg>
                    </div>
                </div>
            </div>
        </ComponentShowcase>
    );
}
