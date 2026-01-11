import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const ThemeRadio = () => {
  return (
    <div className="tr-wrapper">
      <style>
        {\`
        .tr-wrapper .tr-popup {
          --tr-text-color: #e0e0e0;
          --tr-bg: #3A3A3A;
          --tr-btn-hover: #5A5656;
          --tr-btn-active: #b9b9b970;
          color: var(--tr-text-color);
          position: relative;
          user-select: none;
        }

        .tr-wrapper .tr-input {
          display: none;
        }

        .tr-wrapper .tr-list-container {
          position: absolute;
          left: 0;
          top: 2.5em;
          display: none;
          z-index: 10;
        }

        .tr-wrapper .tr-button {
          background-color: var(--tr-bg);
          padding: 0 0.5em;
          height: 2em;
          display: inline-flex;
          align-items: center;
          gap: 0.3em;
          border-radius: 0.3em;
          cursor: pointer;
          font-weight: bold;
        }

        .tr-wrapper .tr-list {
          margin: 0;
          padding: 0.5em;
          list-style: none;
          background-color: var(--tr-bg);
          border-radius: 0.3em;
          display: flex;
          flex-direction: column;
          gap: 0.2em;
        }

        .tr-wrapper .tr-list label {
          display: flex;
          align-items: center;
          padding: 0.35em 1em;
          gap: 0.4em;
          border-radius: 0.25em;
          cursor: pointer;
          white-space: nowrap;
        }

        .tr-wrapper .tr-input:checked ~ .tr-list-container {
          display: block;
        }

        .tr-wrapper .tr-list label:hover,
        .tr-wrapper .tr-button:hover {
          background-color: var(--tr-btn-hover);
        }

        /* Active states */
        .tr-wrapper #tr-default:checked ~ .tr-list-container label[for="tr-default"],
        .tr-wrapper #tr-light:checked ~ .tr-list-container label[for="tr-light"],
        .tr-wrapper #tr-dark:checked ~ .tr-list-container label[for="tr-dark"] {
          background-color: var(--tr-btn-active);
        }

        /* Icon visibility */
        .tr-wrapper .tr-icon-svg { display: none; width: 14px; height: 14px; }
        
        .tr-wrapper #tr-default:checked ~ .tr-button .tr-default-icon,
        .tr-wrapper #tr-light:checked ~ .tr-button .tr-sun-icon,
        .tr-wrapper #tr-dark:checked ~ .tr-button .tr-moon-icon {
          display: block;
        }
        \`}
      </style>
      <div className="tr-popup">
        <input type="radio" name="tr-theme" id="tr-default" className="tr-input" defaultChecked />
        <input type="radio" name="tr-theme" id="tr-light" className="tr-input" />
        <input type="radio" name="tr-theme" id="tr-dark" className="tr-input" />
        <input type="checkbox" id="tr-checkbox" className="tr-input" />
        
        <label htmlFor="tr-checkbox" className="tr-button">
          {/* Default Icon */}
          <svg className="tr-icon-svg tr-default-icon" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 2.52267C6.13332 2.64713 4.86254 3.27802 3.9372 4.29146C3.01186 5.3049 2.49882 6.62766 2.49882 8C2.49882 9.37234 3.01186 10.6951 3.9372 11.7085C4.86254 12.722 6.13332 13.3529 7.5 13.4773V2.52267ZM1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8Z"/></svg>
          {/* Sun Icon */}
          <svg className="tr-icon-svg tr-sun-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M8 4C5.79 4 4 5.79 4 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-2.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm10.8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/></svg>
          {/* Moon Icon */}
          <svg className="tr-icon-svg tr-moon-icon" viewBox="0 0 14 14" fill="currentColor"><path d="M7.24 14c2.87 0 5.44-1.75 6.5-4.4-.5.2-1.1.2-1.7.2-3.1 0-5.6-2.5-5.6-5.6 0-.6.1-1.2.2-1.7C3.99.55.24 4.3.24 8.2c0 3.2 2.6 5.8 5.8 5.8z"/></svg>
          Theme
        </label>
        
        <div className="tr-list-container">
          <ul className="tr-list">
            <li><label htmlFor="tr-default">Default</label></li>
            <li><label htmlFor="tr-light">Light</label></li>
            <li><label htmlFor="tr-dark">Dark</label></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ThemeRadio;
`;

export function ThemeRadio() {
    return (
        <ComponentShowcase title="Theme Radio" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
            <div className="tr-wrapper">
                <style>
                    {`
        .tr-wrapper .tr-popup {
          --tr-text-color: #e0e0e0;
          --tr-bg: #3A3A3A;
          --tr-btn-hover: #5A5656;
          --tr-btn-active: #b9b9b970;
          color: var(--tr-text-color);
          position: relative;
          user-select: none;
          font-family: inherit;
        }

        .tr-wrapper .tr-input {
          display: none;
        }

        .tr-wrapper .tr-list-container {
          position: absolute;
          left: 0;
          top: 2.5em;
          display: none;
          z-index: 10;
        }

        .tr-wrapper .tr-button {
          background-color: var(--tr-bg);
          padding: 0 0.5em;
          height: 2em;
          display: inline-flex;
          align-items: center;
          gap: 0.3em;
          border-radius: 0.3em;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        }

        .tr-wrapper .tr-list {
          margin: 0;
          padding: 0.5em;
          list-style: none;
          background-color: var(--tr-bg);
          border-radius: 0.3em;
          display: flex;
          flex-direction: column;
          gap: 0.2em;
          width: 120px;
        }

        .tr-wrapper .tr-list label {
          display: flex;
          align-items: center;
          padding: 0.35em 1em;
          gap: 0.4em;
          border-radius: 0.25em;
          cursor: pointer;
          white-space: nowrap;
          font-size: 14px;
        }

        .tr-wrapper .tr-input:checked ~ .tr-list-container {
          display: block;
        }

        .tr-wrapper .tr-list label:hover,
        .tr-wrapper .tr-button:hover {
          background-color: var(--tr-btn-hover);
        }

        .tr-wrapper #tr-default:checked ~ .tr-list-container label[for="tr-default"],
        .tr-wrapper #tr-light:checked ~ .tr-list-container label[for="tr-light"],
        .tr-wrapper #tr-dark:checked ~ .tr-list-container label[for="tr-dark"] {
          background-color: var(--tr-btn-active);
        }

        .tr-wrapper .tr-icon-svg { display: none; width: 14px; height: 14px; }
        
        .tr-wrapper #tr-default:checked ~ .tr-button .tr-default-icon,
        .tr-wrapper #tr-light:checked ~ .tr-button .tr-sun-icon,
        .tr-wrapper #tr-dark:checked ~ .tr-button .tr-moon-icon {
          display: block;
        }
        `}
                </style>
                <div className="tr-popup">
                    <input type="radio" name="tr-theme" id="tr-default" className="tr-input" defaultChecked />
                    <input type="radio" name="tr-theme" id="tr-light" className="tr-input" />
                    <input type="radio" name="tr-theme" id="tr-dark" className="tr-input" />
                    <input type="checkbox" id="tr-checkbox" className="tr-input" />

                    <label htmlFor="tr-checkbox" className="tr-button">
                        <svg className="tr-icon-svg tr-default-icon" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 2.52267C6.13332 2.64713 4.86254 3.27802 3.9372 4.29146C3.01186 5.3049 2.49882 6.62766 2.49882 8C2.49882 9.37234 3.01186 10.6951 3.9372 11.7085C4.86254 12.722 6.13332 13.3529 7.5 13.4773V2.52267ZM1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8Z" /></svg>
                        <svg className="tr-icon-svg tr-sun-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M8 4C5.79 4 4 5.79 4 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-2.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm10.8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" /></svg>
                        <svg className="tr-icon-svg tr-moon-icon" viewBox="0 0 14 14" fill="currentColor"><path d="M7.24 14c2.87 0 5.44-1.75 6.5-4.4-.5.2-1.1.2-1.7.2-3.1 0-5.6-2.5-5.6-5.6 0-.6.1-1.2.2-1.7C3.99.55.24 4.3.24 8.2c0 3.2 2.6 5.8 5.8 5.8z" /></svg>
                        Theme
                    </label>

                    <div className="tr-list-container">
                        <ul className="tr-list">
                            <li><label htmlFor="tr-default">Default</label></li>
                            <li><label htmlFor="tr-light">Light</label></li>
                            <li><label htmlFor="tr-dark">Dark</label></li>
                        </ul>
                    </div>
                </div>
            </div>
        </ComponentShowcase>
    );
}
