import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const TriangleLoader = () => {
    return (
        <div className="triangle-loader-container">
            <style>
                {\`
                .triangle-loader-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #triangle {
                    height: 200px; /* Reduced for library display */
                    width: 200px;
                    animation: triangle-float 4s both infinite;
                }

                .cls-1 {
                    fill: #f15a24;
                    animation: cls1-anim 4s ease infinite both;
                    stroke-width: 0px;
                }

                .cls-2 {
                    fill: #f7931e;
                    animation: cls2-anim 4s ease infinite both;
                    stroke-width: 0px;
                }

                .cls-3 {
                    fill: #ed1c24;
                    animation: cls3-anim 4s ease infinite both;
                    stroke-width: 0px;
                }

                @keyframes triangle-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(15px); }
                }

                @keyframes cls1-anim {
                    0%, 100% { fill: #f15a24; }
                    34% { fill: #ed1c24; }
                    66% { fill: #f7931e; }
                }

                @keyframes cls2-anim {
                    0%, 100% { fill: #f7931e; }
                    34% { fill: #f15a24; }
                    66% { fill: #ed1c24; }
                }

                @keyframes cls3-anim {
                    0%, 100% { fill: #ed1c24; }
                    34% { fill: #f7931e; }
                    66% { fill: #f15a24; }
                }
                \`}
            </style>
            <div id="triangle">
                <svg id="Layer_1" data-name="Layer 1" version="1.1" viewBox="0 0 2000 2000">
                    <polygon className="cls-1" points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781" />
                    <polygon className="cls-3" points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97" />
                    <g id="Layer_2" data-name="Layer 2">
                        <polygon className="cls-2" points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default TriangleLoader;`;

export function TriangleLoaderContent() {
    return (
        <div className="triangle-loader-view w-full h-full flex items-center justify-center p-4">
            <style>{`
                .triangle-loader-view #triangle {
                    height: 120px;
                    width: 120px;
                    animation: triangle-float-preview 4s both infinite;
                }

                .triangle-loader-view .cls-1 {
                    fill: #f15a24;
                    animation: cls1-anim-preview 4s ease infinite both;
                    stroke-width: 0px;
                }

                .triangle-loader-view .cls-2 {
                    fill: #f7931e;
                    animation: cls2-anim-preview 4s ease infinite both;
                    stroke-width: 0px;
                }

                .triangle-loader-view .cls-3 {
                    fill: #ed1c24;
                    animation: cls3-anim-preview 4s ease infinite both;
                    stroke-width: 0px;
                }

                @keyframes triangle-float-preview {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(15px); }
                }

                @keyframes cls1-anim-preview {
                    0%, 100% { fill: #f15a24; }
                    34% { fill: #ed1c24; }
                    66% { fill: #f7931e; }
                }

                @keyframes cls2-anim-preview {
                    0%, 100% { fill: #f7931e; }
                    34% { fill: #f15a24; }
                    66% { fill: #ed1c24; }
                }

                @keyframes cls3-anim-preview {
                    0%, 100% { fill: #ed1c24; }
                    34% { fill: #f7931e; }
                    66% { fill: #f15a24; }
                }
            `}</style>
            <div id="triangle">
                <svg id="Layer_1" data-name="Layer 1" version="1.1" viewBox="0 0 2000 2000">
                    <polygon className="cls-1" points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781" />
                    <polygon className="cls-3" points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97" />
                    <g id="Layer_2" data-name="Layer 2">
                        <polygon className="cls-2" points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

export function TriangleLoader() {
    return (
        <ComponentShowcase title="Triangle Loader" code={code} className="min-h-[250px] flex items-center justify-center">
            <TriangleLoaderContent />
        </ComponentShowcase>
    );
}
