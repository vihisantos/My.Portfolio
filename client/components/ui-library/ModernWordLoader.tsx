import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const ModernWordLoader = () => {
    return (
        <div className="modern-word-loader-wrapper">
            <style>
                {\`
                .modern-loader-card {
                    --bg-color: #111;
                    background-color: var(--bg-color);
                    padding: 1rem 2rem;
                    border-radius: 1.25rem;
                }
                
                .modern-loader {
                    color: rgb(124, 124, 124);
                    font-family: "Poppins", sans-serif;
                    font-weight: 500;
                    font-size: 25px;
                    -webkit-box-sizing: content-box;
                    box-sizing: content-box;
                    height: 40px;
                    padding: 10px 10px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    border-radius: 8px;
                }

                .modern-words {
                    overflow: hidden;
                    position: relative;
                }
                
                .modern-words::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        var(--bg-color) 10%,
                        transparent 30%,
                        transparent 70%,
                        var(--bg-color) 90%
                    );
                    z-index: 20;
                }

                .modern-word {
                    display: block;
                    height: 100%;
                    padding-left: 6px;
                    color: #956afa;
                    animation: modern_spin 4s infinite;
                }

                @keyframes modern_spin {
                    10% { transform: translateY(-102%); }
                    25% { transform: translateY(-100%); }
                    35% { transform: translateY(-202%); }
                    50% { transform: translateY(-200%); }
                    60% { transform: translateY(-302%); }
                    75% { transform: translateY(-300%); }
                    85% { transform: translateY(-402%); }
                    100% { transform: translateY(-400%); }
                }
                \`}
            </style>
            <div className="modern-loader-card">
                <div className="modern-loader">
                    <p>loading</p>
                    <div className="modern-words">
                        <span className="modern-word">buttons</span>
                        <span className="modern-word">forms</span>
                        <span className="modern-word">switches</span>
                        <span className="modern-word">cards</span>
                        <span className="modern-word">buttons</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernWordLoader;`;

export function ModernWordLoader() {
    return (
        <ComponentShowcase title="Modern Word Loader" code={code} className="min-h-[200px] flex items-center justify-center">
            <div className="modern-word-loader-view">
                <style>{`
                    .modern-word-loader-view .modern-loader-card {
                        --bg-color: #111;
                        background-color: var(--bg-color);
                        padding: 1rem 2rem;
                        border-radius: 1.25rem;
                    }
                    
                    .modern-word-loader-view .modern-loader {
                        color: rgb(124, 124, 124);
                        font-family: inherit;
                        font-weight: 500;
                        font-size: 25px;
                        height: 40px;
                        padding: 10px 10px;
                        display: flex;
                        border-radius: 8px;
                    }

                    .modern-word-loader-view .modern-words {
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .modern-word-loader-view .modern-words::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(
                            var(--bg-color) 10%,
                            transparent 30%,
                            transparent 70%,
                            var(--bg-color) 90%
                        );
                        z-index: 20;
                    }

                    .modern-word-loader-view .modern-word {
                        display: block;
                        height: 100%;
                        padding-left: 6px;
                        color: #956afa;
                        animation: modern_spin_preview 4s infinite;
                    }

                    @keyframes modern_spin_preview {
                        10% { transform: translateY(-102%); }
                        25% { transform: translateY(-100%); }
                        35% { transform: translateY(-202%); }
                        50% { transform: translateY(-200%); }
                        60% { transform: translateY(-302%); }
                        75% { transform: translateY(-300%); }
                        85% { transform: translateY(-402%); }
                        100% { transform: translateY(-400%); }
                    }
                `}</style>
                <div className="modern-loader-card">
                    <div className="modern-loader">
                        <p>loading</p>
                        <div className="modern-words">
                            <span className="modern-word">buttons</span>
                            <span className="modern-word">forms</span>
                            <span className="modern-word">switches</span>
                            <span className="modern-word">cards</span>
                            <span className="modern-word">buttons</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentShowcase>
    );
}
