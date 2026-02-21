import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const SketchButton = () => {
  return (
    <div className="sketch-button-wrapper">
      <style>
        {\`
        .sketch-button-wrapper .type--A {
          --line_color: #555555;
          --back_color: #ffecf6;
        }
        .sketch-button-wrapper .type--B {
          --line_color: #1b1919;
          --back_color: #e9ecff;
        }
        .sketch-button-wrapper .type--C {
          --line_color: #00135c;
          --back_color: #defffa;
        }
        .sketch-button-wrapper .sketch-button {
          position: relative;
          z-index: 0;
          width: 240px;
          height: 56px;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          color: var(--line_color);
          letter-spacing: 2px;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .sketch-button-wrapper .sketch-button__text {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .sketch-button-wrapper .sketch-button::before,
        .sketch-button-wrapper .sketch-button::after,
        .sketch-button-wrapper .sketch-button__text::before,
        .sketch-button-wrapper .sketch-button__text::after {
          content: "";
          position: absolute;
          height: 3px;
          border-radius: 2px;
          background: var(--line_color);
          transition: all 0.5s ease;
        }
        .sketch-button-wrapper .sketch-button::before {
          top: 0;
          left: 54px;
          width: calc(100% - 56px * 2 - 16px);
        }
        .sketch-button-wrapper .sketch-button::after {
          top: 0;
          right: 54px;
          width: 8px;
        }
        .sketch-button-wrapper .sketch-button__text::before {
          bottom: 0;
          right: 54px;
          width: calc(100% - 56px * 2 - 16px);
        }
        .sketch-button-wrapper .sketch-button__text::after {
          bottom: 0;
          left: 54px;
          width: 8px;
        }
        .sketch-button-wrapper .sketch-button__line {
          position: absolute;
          top: 0;
          width: 56px;
          height: 100%;
          overflow: hidden;
        }
        .sketch-button-wrapper .sketch-button__line::before {
          content: "";
          position: absolute;
          top: 0;
          width: 150%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 300px;
          border: solid 3px var(--line_color);
        }
        .sketch-button-wrapper .sketch-button__line:nth-child(1),
        .sketch-button-wrapper .sketch-button__line:nth-child(1)::before {
          left: 0;
        }
        .sketch-button-wrapper .sketch-button__line:nth-child(2),
        .sketch-button-wrapper .sketch-button__line:nth-child(2)::before {
          right: 0;
        }
        .sketch-button-wrapper .sketch-button:hover {
          letter-spacing: 6px;
        }
        .sketch-button-wrapper .sketch-button:hover::before,
        .sketch-button-wrapper .sketch-button:hover .sketch-button__text::before {
          width: 8px;
        }
        .sketch-button-wrapper .sketch-button:hover::after,
        .sketch-button-wrapper .sketch-button:hover .sketch-button__text::after {
          width: calc(100% - 56px * 2 - 16px);
        }
        .sketch-button-wrapper .sketch-button__drow1,
        .sketch-button-wrapper .sketch-button__drow2 {
          position: absolute;
          z-index: -1;
          border-radius: 16px;
          transform-origin: 16px 16px;
        }
        .sketch-button-wrapper .sketch-button__drow1 {
          top: -16px;
          left: 40px;
          width: 32px;
          height: 0;
          transform: rotate(30deg);
        }
        .sketch-button-wrapper .sketch-button__drow2 {
          top: 44px;
          left: 77px;
          width: 32px;
          height: 0;
          transform: rotate(-127deg);
        }
        .sketch-button-wrapper .sketch-button__drow1::before,
        .sketch-button-wrapper .sketch-button__drow1::after,
        .sketch-button-wrapper .sketch-button__drow2::before,
        .sketch-button-wrapper .sketch-button__drow2::after {
          content: "";
          position: absolute;
        }
        .sketch-button-wrapper .sketch-button__drow1::before {
          bottom: 0;
          left: 0;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-60deg);
        }
        .sketch-button-wrapper .sketch-button__drow1::after {
          top: -10px;
          left: 45px;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(69deg);
        }
        .sketch-button-wrapper .sketch-button__drow2::before {
          bottom: 0;
          left: 0;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-146deg);
        }
        .sketch-button-wrapper .sketch-button__drow2::after {
          bottom: 26px;
          left: -40px;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-262deg);
        }
        .sketch-button-wrapper .sketch-button__drow1,
        .sketch-button-wrapper .sketch-button__drow1::before,
        .sketch-button-wrapper .sketch-button__drow1::after,
        .sketch-button-wrapper .sketch-button__drow2,
        .sketch-button-wrapper .sketch-button__drow2::before,
        .sketch-button-wrapper .sketch-button__drow2::after {
          background: var(--back_color);
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow1 {
          animation: sketch-drow1 ease-in 0.06s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow1::before {
          animation: sketch-drow2 linear 0.08s 0.06s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow1::after {
          animation: sketch-drow3 linear 0.03s 0.14s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow2 {
          animation: sketch-drow4 linear 0.06s 0.2s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow2::before {
          animation: sketch-drow3 linear 0.03s 0.26s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow2::after {
          animation: sketch-drow5 linear 0.06s 0.32s;
          animation-fill-mode: forwards;
        }
        @keyframes sketch-drow1 {
          0% {
            height: 0;
          }
          100% {
            height: 100px;
          }
        }
        @keyframes sketch-drow2 {
          0% {
            width: 0;
            opacity: 0;
          }
          10% {
            opacity: 0;
          }
          11% {
            opacity: 1;
          }
          100% {
            width: 120px;
          }
        }
        @keyframes sketch-drow3 {
          0% {
            width: 0;
          }
          100% {
            width: 80px;
          }
        }
        @keyframes sketch-drow4 {
          0% {
            height: 0;
          }
          100% {
            height: 120px;
          }
        }
        @keyframes sketch-drow5 {
          0% {
            width: 0;
          }
          100% {
            width: 124px;
          }
        }
        \`}
      </style>
      <div className="container">
        <a href="#" className="sketch-button type--C">
          <div className="sketch-button__line" />
          <div className="sketch-button__line" />
          <span className="sketch-button__text">ENTRY</span>
          <div className="sketch-button__drow1" />
          <div className="sketch-button__drow2" />
        </a>
      </div>
    </div>
  );
}

export default SketchButton;
`;

export const SketchButtonContent: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[300px]">
      <div className="sketch-button-wrapper">
        <style>
          {`
        .sketch-button-wrapper .type--A {
          --line_color: #555555;
          --back_color: #ffecf6;
        }
        .sketch-button-wrapper .type--B {
          --line_color: #1b1919;
          --back_color: #e9ecff;
        }
        .sketch-button-wrapper .type--C {
          --line_color: #00135c;
          --back_color: #defffa;
        }
        .sketch-button-wrapper .sketch-button {
          position: relative;
          z-index: 0;
          width: 240px;
          height: 56px;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          color: var(--line_color);
          letter-spacing: 2px;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .sketch-button-wrapper .sketch-button__text {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .sketch-button-wrapper .sketch-button::before,
        .sketch-button-wrapper .sketch-button::after,
        .sketch-button-wrapper .sketch-button__text::before,
        .sketch-button-wrapper .sketch-button__text::after {
          content: "";
          position: absolute;
          height: 3px;
          border-radius: 2px;
          background: var(--line_color);
          transition: all 0.5s ease;
        }
        .sketch-button-wrapper .sketch-button::before {
          top: 0;
          left: 54px;
          width: calc(100% - 56px * 2 - 16px);
        }
        .sketch-button-wrapper .sketch-button::after {
          top: 0;
          right: 54px;
          width: 8px;
        }
        .sketch-button-wrapper .sketch-button__text::before {
          bottom: 0;
          right: 54px;
          width: calc(100% - 56px * 2 - 16px);
        }
        .sketch-button-wrapper .sketch-button__text::after {
          bottom: 0;
          left: 54px;
          width: 8px;
        }
        .sketch-button-wrapper .sketch-button__line {
          position: absolute;
          top: 0;
          width: 56px;
          height: 100%;
          overflow: hidden;
        }
        .sketch-button-wrapper .sketch-button__line::before {
          content: "";
          position: absolute;
          top: 0;
          width: 150%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 300px;
          border: solid 3px var(--line_color);
        }
        .sketch-button-wrapper .sketch-button__line:nth-child(1),
        .sketch-button-wrapper .sketch-button__line:nth-child(1)::before {
          left: 0;
        }
        .sketch-button-wrapper .sketch-button__line:nth-child(2),
        .sketch-button-wrapper .sketch-button__line:nth-child(2)::before {
          right: 0;
        }
        .sketch-button-wrapper .sketch-button:hover {
          letter-spacing: 6px;
        }
        .sketch-button-wrapper .sketch-button:hover::before,
        .sketch-button-wrapper .sketch-button:hover .sketch-button__text::before {
          width: 8px;
        }
        .sketch-button-wrapper .sketch-button:hover::after,
        .sketch-button-wrapper .sketch-button:hover .sketch-button__text::after {
          width: calc(100% - 56px * 2 - 16px);
        }
        .sketch-button-wrapper .sketch-button__drow1,
        .sketch-button-wrapper .sketch-button__drow2 {
          position: absolute;
          z-index: -1;
          border-radius: 16px;
          transform-origin: 16px 16px;
        }
        .sketch-button-wrapper .sketch-button__drow1 {
          top: -16px;
          left: 40px;
          width: 32px;
          height: 0;
          transform: rotate(30deg);
        }
        .sketch-button-wrapper .sketch-button__drow2 {
          top: 44px;
          left: 77px;
          width: 32px;
          height: 0;
          transform: rotate(-127deg);
        }
        .sketch-button-wrapper .sketch-button__drow1::before,
        .sketch-button-wrapper .sketch-button__drow1::after,
        .sketch-button-wrapper .sketch-button__drow2::before,
        .sketch-button-wrapper .sketch-button__drow2::after {
          content: "";
          position: absolute;
        }
        .sketch-button-wrapper .sketch-button__drow1::before {
          bottom: 0;
          left: 0;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-60deg);
        }
        .sketch-button-wrapper .sketch-button__drow1::after {
          top: -10px;
          left: 45px;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(69deg);
        }
        .sketch-button-wrapper .sketch-button__drow2::before {
          bottom: 0;
          left: 0;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-146deg);
        }
        .sketch-button-wrapper .sketch-button__drow2::after {
          bottom: 26px;
          left: -40px;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-262deg);
        }
        .sketch-button-wrapper .sketch-button__drow1,
        .sketch-button-wrapper .sketch-button__drow1::before,
        .sketch-button-wrapper .sketch-button__drow1::after,
        .sketch-button-wrapper .sketch-button__drow2,
        .sketch-button-wrapper .sketch-button__drow2::before,
        .sketch-button-wrapper .sketch-button__drow2::after {
          background: var(--back_color);
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow1 {
          animation: sketch-drow1 ease-in 0.06s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow1::before {
          animation: sketch-drow2 linear 0.08s 0.06s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow1::after {
          animation: sketch-drow3 linear 0.03s 0.14s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow2 {
          animation: sketch-drow4 linear 0.06s 0.2s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow2::before {
          animation: sketch-drow3 linear 0.03s 0.26s;
          animation-fill-mode: forwards;
        }
        .sketch-button-wrapper .sketch-button:hover .sketch-button__drow2::after {
          animation: sketch-drow5 linear 0.06s 0.32s;
          animation-fill-mode: forwards;
        }
        @keyframes sketch-drow1 {
          0% {
            height: 0;
          }
          100% {
            height: 100px;
          }
        }
        @keyframes sketch-drow2 {
          0% {
            width: 0;
            opacity: 0;
          }
          10% {
            opacity: 0;
          }
          11% {
            opacity: 1;
          }
          100% {
            width: 120px;
          }
        }
        @keyframes sketch-drow3 {
          0% {
            width: 0;
          }
          100% {
            width: 80px;
          }
        }
        @keyframes sketch-drow4 {
          0% {
            height: 0;
          }
          100% {
            height: 120px;
          }
        }
        @keyframes sketch-drow5 {
          0% {
            width: 0;
          }
          100% {
            width: 124px;
          }
        }
        `}
        </style>
        <div className="container flex justify-center items-center">
          <a href="#" className="sketch-button type--C">
            <div className="sketch-button__line" />
            <div className="sketch-button__line" />
            <span className="sketch-button__text">ENTRY</span>
            <div className="sketch-button__drow1" />
            <div className="sketch-button__drow2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export function SketchButton() {
  return (
    <ComponentShowcase title="Sketch Button" code={code} className="flex items-center justify-center p-12 min-h-[300px]">
      <SketchButtonContent />
    </ComponentShowcase>
  );
}
