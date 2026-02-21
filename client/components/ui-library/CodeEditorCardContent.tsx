import React from 'react';

export const CodeEditorCardContent = () => {
    return (
        <div className="cec-wrapper">
            <style>
                {`
        .cec-wrapper .cec-card {
          max-width: 300px;
          background-color: #1d1e22;
          box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          padding: 2px;
          font-family: 'Courier New', Courier, monospace;
        }

        .cec-wrapper .cec-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 10px;
        }

        .cec-wrapper .cec-title {
          font-family: Lato, sans-serif;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 1.57px;
          color: rgb(212 212 212);
        }

        .cec-wrapper .cec-icon {
          width: 20px;
          transition: .2s ease;
        }

        .cec-wrapper .cec-icon:hover {
          cursor: pointer;
          border-radius: 50px;
          background-color: #6e7281;
        }

        .cec-wrapper .cec-content {
          margin: 0 10px 10px;
          color: white;
          font-size: 13px;
          white-space: normal;
          word-break: break-all;
        }

        .cec-wrapper .cec-property {
          margin-left: 30px;
        }

        .cec-wrapper .cec-property:hover {
          cursor: text;
        }

        .cec-wrapper .cec-color-0 {
          color: rgb(86 156 214);
        }

        .cec-wrapper .cec-color-1 {
          color: rgb(182 206 168);
        }

        .cec-wrapper .cec-color-2 {
          color: rgb(156 220 254);
        }

        .cec-wrapper .cec-color-3 {
          color: rgb(207 146 120);
        }

        .cec-wrapper .cec-color-preview-1,
        .cec-wrapper .cec-color-preview-2 {
          height: 8px;
          width: 8px;
          border: 1px solid #fff;
          display: inline-block;
          margin-right: 3px;
        }

        .cec-wrapper .cec-color-preview-1 {
          background-color: #1d1e22;
        }

        .cec-wrapper .cec-color-preview-2 {
          background-color: rgba(0, 0, 0, 0.5);
        }
        `}
            </style>
            <div className="cec-card">
                <div className="cec-header">
                    <span className="cec-title">CSS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="cec-icon">
                        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                        <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                        <g id="SVGRepo_iconCarrier">
                            <path strokeLinecap="round" strokeWidth={2} stroke="#4C4F5A" d="M6 6L18 18" />
                            <path strokeLinecap="round" strokeWidth={2} stroke="#4C4F5A" d="M18 6L6 18" />
                        </g>
                    </svg>
                </div>
                <div className="cec-content">
                    <code className="cec-code">
                        <p><span className="cec-color-0">.code-editor </span> <span>{'{'}</span></p>
                        <p className="cec-property">
                            <span className="cec-color-2">max-width</span><span>:</span> <span className="cec-color-1">300px</span>;
                        </p>
                        <p className="cec-property">
                            <span className="cec-color-2">background-color</span><span>:</span> <span className="cec-color-preview-1" /><span className="cec-color-1">#1d1e22</span>;
                        </p>
                        <p className="cec-property">
                            <span className="cec-color-2">box-shadow</span><span>:</span> <span className="cec-color-1">0px 4px 30px <span className="cec-color-preview-2" /><span className="cec-color-1">#0008</span></span>;
                        </p>
                        <p className="cec-property">
                            <span className="cec-color-2">border-radius</span><span>:</span> <span className="cec-color-1">8px</span>;
                        </p>
                        <span>{'}'}</span>
                    </code>
                </div>
            </div>
        </div>
    );
};
