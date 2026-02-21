import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";
import { Error404CardContent } from './Error404CardContent';

const code = `import React from 'react';

const Error404Card = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="scale-[0.4] sm:scale-50 origin-center bg-transparent flex items-center justify-center">
                {/* CSS definition and JSX omitted for brevity */}
            </div>
        </div>
    );
}

export default Error404Card;
`;

export function Error404Card() {
  return (
    <ComponentShowcase title="404 Error Card" code={code} className="min-h-[400px] flex items-center justify-center overflow-hidden">
      <Error404CardContent />
    </ComponentShowcase>
  );
}

export default Error404Card;
