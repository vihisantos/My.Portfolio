import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const CircularSpinnerLoader = () => {
    return (
        <div className="circular-spinner-container">
            <style>
                {\`
                .circular-spinner-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }

                .circular-loader {
                    border: 4px solid rgba(0, 0, 0, .1);
                    border-left-color: #3b82f6; /* Added a default color for visibility */
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    animation: spinCircular 1s linear infinite;
                }

                @keyframes spinCircular {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Dark mode adjustment */
                .dark .circular-loader {
                    border-color: rgba(255, 255, 255, .1);
                    border-left-color: #60a5fa;
                }
                \`}
            </style>
            <div className="circular-loader" />
        </div>
    );
};

export default CircularSpinnerLoader;`;

export function CircularSpinnerLoader() {
    return (
        <ComponentShowcase title="Circular Spinner Loader" code={code} className="min-h-[150px] flex items-center justify-center">
            <div className="circular-spinner-view">
                <style>{`
                    .circular-spinner-view .circular-loader {
                        border: 4px solid rgba(0, 0, 0, .1);
                        border-left-color: #3b82f6;
                        border-radius: 50%;
                        width: 36px;
                        height: 36px;
                        animation: spinCircularPreview 1s linear infinite;
                    }

                    @keyframes spinCircularPreview {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    .dark .circular-spinner-view .circular-loader {
                        border-color: rgba(255, 255, 255, .1);
                        border-left-color: #60a5fa;
                    }
                `}</style>
                <div className="circular-loader" />
            </div>
        </ComponentShowcase>
    );
}
