import React from 'react';
import styled from 'styled-components';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div\`
  .input {
    border: none;
    outline: none;
    border-radius: 15px;
    padding: 1em;
    background-color: #18181b; 
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
    transition: 300ms ease-in-out;
    width: 250px;
    color: white;
    font-family: inherit;
  }

  .input::placeholder {
    color: #71717a;
  }

  .input:focus {
    background-color: #27272a;
    transform: scale(1.05);
    box-shadow: 13px 13px 100px #09090b,
               -13px -13px 100px #3f3f46;
  }
\`;

const SoftInput = () => {
  return (
    <StyledWrapper>
      <input type="text" autoComplete="off" name="text" className="input" placeholder="Username" />
    </StyledWrapper>
  );
}

export default SoftInput;
`;

const StyledWrapper = styled.div`
  .input {
    border: none;
    outline: none;
    border-radius: 15px;
    padding: 1em;
    background-color: #d4d4d8; /* light mode default zinc-300 */
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.1);
    transition: 300ms ease-in-out;
    width: 250px;
    color: #18181b;
    font-family: inherit;
  }

  /* Dark mode overrides if parent has .dark, but since we are isolated in styled-components 
     we might need to rely on Tailwind classes or context. 
     For this specific component, the user's original code was hardcoded dark. 
     I will make it dark by default to match the "Soft Input" vibe usually associated with neomorphic dark.
     Actually, let's Stick to the requested Dark Theme from the original file for now to ensure it looks "cool".
  */
  .input {
    background-color: #18181b; /* zinc-950 */
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
    color: white;
  }

  .input::placeholder {
     color: #71717a; /* zinc-500 */
  }

  .input:focus {
    background-color: #27272a; /* zinc-800 */
    transform: scale(1.05);
    box-shadow: 13px 13px 100px #09090b, /* Dark shadow */
               -13px -13px 100px #3f3f46; /* Light highlight */
  }
`;

export function SoftInputContent() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <StyledWrapper>
        <input type="text" autoComplete="off" name="text" className="input" placeholder="Username" />
      </StyledWrapper>
    </div>
  );
}

export function SoftInput() {
  return (
    <ComponentShowcase title="Soft Input" code={code} className="min-h-[200px]">
      <SoftInputContent />
    </ComponentShowcase>
  );
}
