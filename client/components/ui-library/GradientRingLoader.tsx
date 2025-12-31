import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const GradientRingLoader = () => {
    return (
        <div className="gradient-ring-loader-container">
            <style>
                {\`
                .gradient-ring-loader-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 120px;
                }

                .g-ring {
                    position: relative;
                    border-radius: 50%;
                    height: 96px;
                    width: 96px;
                    animation: g-rotate 1.2s linear infinite;
                    background-color: #9b59b6;
                    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
                }

                .g-ring span {
                    position: absolute;
                    border-radius: 50%;
                    height: 100%;
                    width: 100%;
                    background-color: #9b59b6;
                    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
                }

                .g-ring span:nth-of-type(1) { filter: blur(5px); }
                .g-ring span:nth-of-type(2) { filter: blur(10px); }
                .g-ring span:nth-of-type(3) { filter: blur(25px); }
                .g-ring span:nth-of-type(4) { filter: blur(50px); }

                .g-ring::after {
                    content: "";
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    right: 10px;
                    bottom: 10px;
                    background-color: #fff;
                    border: solid 5px #ffffff;
                    border-radius: 50%;
                }

                @keyframes g-rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                /* Dark mode adjustment */
                .dark .g-ring::after {
                    background-color: #000;
                    border-color: #000;
                }
                \`}
            </style>
            <div className="g-ring">
                <span />
                <span />
                <span />
                <span />
            </div>
        </div>
    );
};

export default GradientRingLoader;`;

export function GradientRingLoader() {
    return (
        <ComponentShowcase title="Gradient Ring Loader" code={code} className="min-h-[200px] flex items-center justify-center">
            <div className="gradient-ring-view">
                <style>{`
                    .gradient-ring-view .g-ring {
                        position: relative;
                        border-radius: 50%;
                        height: 96px;
                        width: 96px;
                        animation: g-rotate-preview 1.2s linear infinite;
                        background-color: #9b59b6;
                        background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
                    }

                    .gradient-ring-view .g-ring span {
                        position: absolute;
                        border-radius: 50%;
                        height: 100%;
                        width: 100%;
                        background-color: #9b59b6;
                        background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
                    }

                    .gradient-ring-view .g-ring span:nth-of-type(1) { filter: blur(5px); }
                    .gradient-ring-view .g-ring span:nth-of-type(2) { filter: blur(10px); }
                    .gradient-ring-view .g-ring span:nth-of-type(3) { filter: blur(25px); }
                    .gradient-ring-view .g-ring span:nth-of-type(4) { filter: blur(50px); }

                    .gradient-ring-view .g-ring::after {
                        content: "";
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        right: 10px;
                        bottom: 10px;
                        background-color: #fff;
                        border: solid 5px #ffffff;
                        border-radius: 50%;
                    }

                    @keyframes g-rotate-preview {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }

                    .dark .gradient-ring-view .g-ring::after {
                        background-color: #0a0a0a;
                        border-color: #0a0a0a;
                    }
                `}</style>
                <div className="g-ring">
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </ComponentShowcase>
    );
}
