import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const UnlockProButton = () => {
  return (
    <div className="unlock-pro-btn-wrapper">
      <style>
        {\`
        .unlock-pro-btn-wrapper .unlock-pro-btn {
          width: fit-content;
          display: flex;
          padding: 0.8em 1.1em;
          gap: 0.4rem;
          border: none;
          font-weight: bold;
          border-radius: 30px;
          cursor: pointer;
          text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
          background: linear-gradient(
              15deg,
              #880088,
              #aa2068,
              #cc3f47,
              #de6f3d,
              #f09f33,
              #de6f3d,
              #cc3f47,
              #aa2068,
              #880088
            )
            no-repeat;
          background-size: 300%;
          background-position: left center;
          transition: background 0.3s ease;
          color: #fff;
          align-items: center;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn:hover {
          background-size: 320%;
          background-position: right center;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn:hover svg {
          fill: #fff;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn svg {
          width: 23px;
          fill: #f09f33;
          transition: 0.3s ease;
        }
        \`}
      </style>
      <button className="unlock-pro-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z" />
        </svg>
        Unlock Pro
      </button>
    </div>
  );
}

export default UnlockProButton;
`;

export function UnlockProButtonContent() {
  return (
    <div className="unlock-pro-btn-wrapper w-full h-full flex items-center justify-center p-4">
      <style>
        {`
        .unlock-pro-btn-wrapper .unlock-pro-btn {
          width: fit-content;
          display: flex;
          padding: 0.8em 1.1em;
          gap: 0.4rem;
          border: none;
          font-weight: bold;
          border-radius: 30px;
          cursor: pointer;
          text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
          background: linear-gradient(
              15deg,
              #880088,
              #aa2068,
              #cc3f47,
              #de6f3d,
              #f09f33,
              #de6f3d,
              #cc3f47,
              #aa2068,
              #880088
            )
            no-repeat;
          background-size: 300%;
          background-position: left center;
          transition: background 0.3s ease;
          color: #fff;
          align-items: center;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn:hover {
          background-size: 320%;
          background-position: right center;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn:hover svg {
          fill: #fff;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn svg {
          width: 23px;
          fill: #f09f33;
          transition: 0.3s ease;
        }
        `}
      </style>
      <button className="unlock-pro-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z" />
        </svg>
        Unlock Pro
      </button>
    </div>
  );
}

export function UnlockProButton() {
  return (
    <ComponentShowcase title="Unlock Pro Button" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
      <UnlockProButtonContent />
    </ComponentShowcase>
  );
}
