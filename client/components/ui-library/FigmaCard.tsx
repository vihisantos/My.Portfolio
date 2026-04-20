import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";
import { FigmaCardContent } from "./FigmaCardContent";
export { FigmaCardContent } from "./FigmaCardContent";

const code = `// Figma Card Component
import React from 'react';

export const FigmaCard = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 614 390" height={390} width={614}>
      <g id="pg-frame">
        <g id="pg-box-figma">...</g>
        <g id="pg-box">...</g>
        <g id="pg-cursor">...</g>
      </g>
    </svg>
  );
};
// CSS animations included separately
`;

export function FigmaCard() {
    return (
        <ComponentShowcase title="Figma Card" code={code} className="flex items-center justify-center p-12 min-h-[400px] bg-slate-50">
            <FigmaCardContent />
        </ComponentShowcase>
    );
}