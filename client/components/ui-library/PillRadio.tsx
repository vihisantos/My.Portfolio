import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Radio = () => {
  return (
    <div className="pill-radio-wrapper">
      <style>
        {\`
        .pill-radio-container {
          --main-color: #ff6ec4;
          --secondary-color: #7873f5;
          --text-color: #ddd;
          --pill-bg: #1a1a1a;
          --total-options: 8;

          display: flex;
          position: relative;
          background: var(--pill-bg);
          border-radius: 3rem;
          padding: 0.5rem;
          gap: 1rem;
          box-shadow: 0 0 20px #000 inset;
          width: fit-content;
        }

        .pill-radio-container input {
          display: none;
        }

        .pill-radio-container label {
          position: relative;
          padding: 0.6rem 1.5rem;
          border-radius: 3rem;
          cursor: pointer;
          font-weight: 600;
          color: var(--text-color);
          transition: color 0.3s ease-in-out;
          z-index: 2;
        }

        .pill-radio-container input:checked + label {
          color: #fff;
        }

        .pill-radio-container label:hover {
          color: var(--main-color);
        }

        .pill-indicator {
          position: absolute;
          bottom: 5px;
          left: 0;
          height: 4px;
          width: calc(100% / var(--total-options));
          background: linear-gradient(
            to right,
            var(--main-color),
            var(--secondary-color)
          );
          border-radius: 2px;
          transition: transform 0.3s ease-in-out;
          z-index: 1;
        }

        /* Sliding effect */
        #pill-free:checked ~ .pill-indicator {
          transform: translateX(70%);
        }
        #pill-basic:checked ~ .pill-indicator {
          transform: translateX(300%);
        }
        #pill-premium:checked ~ .pill-indicator {
          transform: translateX(600%);
        }
        \`}
      </style>
      <div className="pill-radio-container">
        <input defaultChecked name="plan" id="pill-free" type="radio" />
        <label htmlFor="pill-free">Free</label>
        <input name="plan" id="pill-basic" type="radio" />
        <label htmlFor="pill-basic">Basic</label>
        <input name="plan" id="pill-premium" type="radio" />
        <label htmlFor="pill-premium">Premium</label>
        <div className="pill-indicator" />
      </div>
    </div>
  );
}

export default Radio;
`;

export function PillRadio() {
    return (
        <ComponentShowcase title="Pill Radio" code={code} className="min-h-[250px]">
            <div className="pill-radio-wrapper">
                <style>
                    {`
            .pill-radio-container {
            --main-color: #ff6ec4;
            --secondary-color: #7873f5;
            --text-color: #ddd;
            --pill-bg: #1a1a1a;
            --total-options: 8;

            display: flex;
            position: relative;
            background: var(--pill-bg);
            border-radius: 3rem;
            padding: 0.5rem;
            gap: 1rem;
            box-shadow: 0 0 20px #000 inset;
            width: fit-content;
            }

            .pill-radio-container input {
            display: none;
            }

            .pill-radio-container label {
            position: relative;
            padding: 0.6rem 1.5rem;
            border-radius: 3rem;
            cursor: pointer;
            font-weight: 600;
            color: var(--text-color);
            transition: color 0.3s ease-in-out;
            z-index: 2;
            }

            .pill-radio-container input:checked + label {
            color: #fff;
            }

            .pill-radio-container label:hover {
            color: var(--main-color);
            }

            .pill-indicator {
            position: absolute;
            bottom: 5px;
            left: 0;
            height: 4px;
            width: calc(100% / var(--total-options));
            background: linear-gradient(
                to right,
                var(--main-color),
                var(--secondary-color)
            );
            border-radius: 2px;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
            }

            /* Sliding effect */
            #pill-free:checked ~ .pill-indicator {
            transform: translateX(70%);
            }
            #pill-basic:checked ~ .pill-indicator {
            transform: translateX(300%);
            }
            #pill-premium:checked ~ .pill-indicator {
            transform: translateX(600%);
            }
            `}
                </style>
                <div className="pill-radio-container">
                    <input defaultChecked name="plan" id="pill-free" type="radio" />
                    <label htmlFor="pill-free">Free</label>
                    <input name="plan" id="pill-basic" type="radio" />
                    <label htmlFor="pill-basic">Basic</label>
                    <input name="plan" id="pill-premium" type="radio" />
                    <label htmlFor="pill-premium">Premium</label>
                    <div className="pill-indicator" />
                </div>
            </div>
        </ComponentShowcase>
    );
}
