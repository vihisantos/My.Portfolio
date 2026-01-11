import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const TerminalCard = () => {
  return (
    <div className="terminal-card-wrapper">
      <style>
        {\`
        .terminal-card-wrapper .terminal-card {
          width: 250px;
          height: 250px;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          font-family: 'Courier New', Courier, monospace;
        }

        .terminal-card-wrapper .terminal-toolbar {
          display: flex;
          height: 30px;
          align-items: center;
          padding: 0 8px;
          box-sizing: border-box;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background: #212121;
          justify-content: space-between;
        }

        .terminal-card-wrapper .terminal-controls {
          display: flex;
          align-items: center;
        }

        .terminal-card-wrapper .terminal-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin-right: 5px;
          font-size: 8px;
          height: 12px;
          width: 12px;
          box-sizing: border-box;
          border: none;
          border-radius: 100%;
          background: linear-gradient(#7d7871 0%, #595953 100%);
          text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
          box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
        }

        .terminal-card-wrapper .terminal-btn-close {
          background: #ee411a;
          background: linear-gradient(#f37458 0%, #de4c12 100%);
        }

        .terminal-card-wrapper .terminal-btn:hover {
          cursor: pointer;
        }

        .terminal-card-wrapper .terminal-btn:focus {
          outline: none;
        }

        .terminal-card-wrapper .terminal-add-tab {
          border: 1px solid #fff;
          color: #fff;
          padding: 0 6px;
          border-radius: 4px 4px 0 0;
          border-bottom: none;
          cursor: pointer;
          font-size: 12px;
        }

        .terminal-card-wrapper .terminal-header-user {
          color: #d5d0ce;
          margin-left: 6px;
          font-size: 14px;
          line-height: 15px;
        }

        .terminal-card-wrapper .terminal-body {
          background: rgba(0, 0, 0, 0.9);
          height: calc(100% - 30px);
          padding: 10px;
          box-sizing: border-box;
          margin-top: -1px;
          font-size: 12px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        .terminal-card-wrapper .terminal-prompt {
          display: flex;
          flex-wrap: wrap;
        }

        .terminal-card-wrapper .terminal-prompt span {
          margin-right: 4px;
        }

        .terminal-card-wrapper .terminal-prompt-user {
          color: #1eff8e;
        }

        .terminal-card-wrapper .terminal-location {
          color: #4878c0;
        }

        .terminal-card-wrapper .terminal-bling {
          color: #dddddd;
        }

        .terminal-card-wrapper .terminal-cursor {
          display: inline-block;
          height: 12px;
          width: 6px;
          background: #ffffff;
          animation: terminal-cursor-blink 1200ms linear infinite;
          vertical-align: middle;
          margin-left: 2px;
        }

        @keyframes terminal-cursor-blink {
          0% { background: #ffffff; }
          49% { background: #ffffff; }
          60% { background: transparent; }
          99% { background: transparent; }
          100% { background: #ffffff; }
        }
        \`}
      </style>
      <div className="terminal-card">
        <div className="terminal-toolbar">
          <div className="terminal-controls">
            <button className="terminal-btn terminal-btn-close" />
            <button className="terminal-btn" />
            <button className="terminal-btn" />
          </div>
          <p className="terminal-header-user">admin@portfolio: ~</p>
          <div className="terminal-add-tab">
            +
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-prompt">
            <span className="terminal-prompt-user">visitor@portfolio</span>
            <span className="terminal-location">~</span>
            <span className="terminal-bling">$</span>
            <span style={{ color: '#fff' }}>echo "Hello World!"</span>
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalCard;
`;

export function TerminalCard() {
    return (
        <ComponentShowcase title="Terminal Card" code={code} className="flex items-center justify-center p-12 min-h-[400px]">
            <div className="terminal-card-wrapper">
                <style>
                    {`
        .terminal-card-wrapper .terminal-card {
          width: 250px;
          height: 250px;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          font-family: 'Courier New', Courier, monospace;
        }

        .terminal-card-wrapper .terminal-toolbar {
          display: flex;
          height: 30px;
          align-items: center;
          padding: 0 8px;
          box-sizing: border-box;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background: #212121;
          justify-content: space-between;
        }

        .terminal-card-wrapper .terminal-controls {
          display: flex;
          align-items: center;
        }

        .terminal-card-wrapper .terminal-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin-right: 5px;
          font-size: 8px;
          height: 12px;
          width: 12px;
          box-sizing: border-box;
          border: none;
          border-radius: 100%;
          background: linear-gradient(#7d7871 0%, #595953 100%);
          text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
          box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
        }

        .terminal-card-wrapper .terminal-btn-close {
          background: #ee411a;
          background: linear-gradient(#f37458 0%, #de4c12 100%);
        }

        .terminal-card-wrapper .terminal-btn:hover {
          cursor: pointer;
        }

        .terminal-card-wrapper .terminal-btn:focus {
          outline: none;
        }

        .terminal-card-wrapper .terminal-add-tab {
          border: 1px solid #fff;
          color: #fff;
          padding: 0 6px;
          border-radius: 4px 4px 0 0;
          border-bottom: none;
          cursor: pointer;
          font-size: 12px;
        }

        .terminal-card-wrapper .terminal-header-user {
          color: #d5d0ce;
          margin-left: 6px;
          font-size: 14px;
          line-height: 15px;
        }

        .terminal-card-wrapper .terminal-body {
          background: rgba(0, 0, 0, 0.9);
          height: calc(100% - 30px);
          padding: 10px;
          box-sizing: border-box;
          margin-top: -1px;
          font-size: 12px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        .terminal-card-wrapper .terminal-prompt {
          display: flex;
          flex-wrap: wrap;
        }

        .terminal-card-wrapper .terminal-prompt span {
          margin-right: 4px;
        }

        .terminal-card-wrapper .terminal-prompt-user {
          color: #1eff8e;
        }

        .terminal-card-wrapper .terminal-location {
          color: #4878c0;
        }

        .terminal-card-wrapper .terminal-bling {
          color: #dddddd;
        }

        .terminal-card-wrapper .terminal-cursor {
          display: inline-block;
          height: 12px;
          width: 6px;
          background: #ffffff;
          animation: terminal-cursor-blink 1200ms linear infinite;
          vertical-align: middle;
          margin-left: 2px;
        }

        @keyframes terminal-cursor-blink {
          0% { background: #ffffff; }
          49% { background: #ffffff; }
          60% { background: transparent; }
          99% { background: transparent; }
          100% { background: #ffffff; }
        }
        `}
                </style>
                <div className="terminal-card">
                    <div className="terminal-toolbar">
                        <div className="terminal-controls">
                            <button className="terminal-btn terminal-btn-close" />
                            <button className="terminal-btn" />
                            <button className="terminal-btn" />
                        </div>
                        <p className="terminal-header-user">admin@portfolio: ~</p>
                        <div className="terminal-add-tab">
                            +
                        </div>
                    </div>
                    <div className="terminal-body">
                        <div className="terminal-prompt">
                            <span className="terminal-prompt-user">visitor@portfolio</span>
                            <span className="terminal-location">~</span>
                            <span className="terminal-bling">$</span>
                            <span style={{ color: '#fff' }}>echo "Hello World!"</span>
                            <span className="terminal-cursor" />
                        </div>
                    </div>
                </div>
            </div>
        </ComponentShowcase>
    );
}
