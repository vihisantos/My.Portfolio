import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const CloudSaveButton = () => {
  return (
    <div className="cloud-save-btn-wrapper">
      <style>
        {\`
        .cloud-save-btn-wrapper .cloud-save-btn {
          font-family: inherit;
          font-size: 20px;
          background: #212121;
          color: white;
          fill: rgb(155, 153, 153);
          padding: 0.7em 1em;
          padding-left: 0.9em;
          display: flex;
          align-items: center;
          cursor: pointer;
          border: none;
          border-radius: 15px;
          font-weight: 1000;
          transition: 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover {
          background: #000;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover .cloud-svg-wrapper {
          transform: scale(1.25);
          transition: 0.5s linear;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover svg {
          transform: translateX(1.2em) scale(1.1);
          fill: #fff;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover span {
          opacity: 0;
          transition: 0.5s linear;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:active {
          transform: scale(0.95);
        }
        \`}
      </style>
      <button className="cloud-save-btn">
        <div className="cloud-svg-wrapper-1">
          <div className="cloud-svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" className="icon">
              <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z" />
            </svg>
          </div>
        </div>
        <span>Save</span>
      </button>
    </div>
  );
}

export default CloudSaveButton;
`;

export function CloudSaveButton() {
    return (
        <ComponentShowcase title="Cloud Save Button" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
            <div className="cloud-save-btn-wrapper">
                <style>
                    {`
        .cloud-save-btn-wrapper .cloud-save-btn {
          font-family: inherit;
          font-size: 20px;
          background: #212121;
          color: white;
          fill: rgb(155, 153, 153);
          padding: 0.7em 1em;
          padding-left: 0.9em;
          display: flex;
          align-items: center;
          cursor: pointer;
          border: none;
          border-radius: 15px;
          font-weight: 1000;
          transition: 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover {
          background: #000;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover .cloud-svg-wrapper {
          transform: scale(1.25);
          transition: 0.5s linear;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover svg {
          transform: translateX(1.2em) scale(1.1);
          fill: #fff;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover span {
          opacity: 0;
          transition: 0.5s linear;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:active {
          transform: scale(0.95);
        }
        `}
                </style>
                <button className="cloud-save-btn">
                    <div className="cloud-svg-wrapper-1">
                        <div className="cloud-svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" className="icon">
                                <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z" />
                            </svg>
                        </div>
                    </div>
                    <span>Save</span>
                </button>
            </div>
        </ComponentShowcase>
    );
}
