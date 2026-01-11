import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const SoftInput = () => {
  return (
    <div className="soft-input-wrapper">
      <style>
        {\`
        .soft-input-wrapper .input {
          border: none;
          outline: none;
          border-radius: 15px;
          padding: 1em;
          background-color: #18181b; /* Dark bg to match theme */
          box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
          transition: 300ms ease-in-out;
          width: 100%;
          max-width: 300px;
          color: white;
        }

        .soft-input-wrapper .input:focus {
          background-color: #27272a;
          transform: scale(1.05);
          box-shadow: 13px 13px 100px #09090b,
                     -13px -13px 100px #3f3f46;
        }
        \`}
      </style>
      <input type="text" autoComplete="off" name="text" className="input" placeholder="Username" />
    </div>
  );
}

export default SoftInput;
`;

export function SoftInput() {
    return (
        <ComponentShowcase title="Soft Input" code={code} className="flex items-center justify-center p-12">
            <div className="soft-input-wrapper">
                <style>
                    {`
        .soft-input-wrapper .input {
          border: none;
          outline: none;
          border-radius: 15px;
          padding: 1em;
          background-color: #18181b; /* zinc-950 */
          box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
          transition: 300ms ease-in-out;
          width: 250px;
          color: white;
          font-family: inherit;
        }
        
        .soft-input-wrapper .input::placeholder {
           color: #71717a; /* zinc-500 */
        }

        .soft-input-wrapper .input:focus {
          background-color: #27272a; /* zinc-800 */
          transform: scale(1.05);
          box-shadow: 13px 13px 100px #09090b, /* Dark shadow */
                     -13px -13px 100px #3f3f46; /* Light highlight */
        }
        `}
                </style>
                <input type="text" autoComplete="off" name="text" className="input" placeholder="Username" />
            </div>
        </ComponentShowcase>
    );
}
