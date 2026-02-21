import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="geometric-spinner-wrapper">
      <style>
        {\`
        .geometric-loader {
          --size: 15vmin;
          --duration: 4s;
          --direction: 1;
          --pull: -1.25;
          perspective: 30rem;
          display: grid;
          grid-template-areas: "figure";
          place-items: center;
          inline-size: var(--size);
          aspect-ratio: 1;
          animation: spin var(--duration) ease-in-out infinite;
        }

        .geometric-loader > * {
          --radius: calc(var(--size) / 2);
          --deg: calc(var(--i) * (360deg / 12));
          --hs: 225 100%;
          --transform-start: translate3d(
              calc(cos(var(--deg)) * var(--radius)),
              calc(sin(var(--deg)) * var(--radius)),
              0
            )
            rotate(calc(var(--deg)));
          grid-area: figure;
          background-color: hsl(var(--hs) var(--l, 60%));
          inline-size: calc(var(--size) / 4);
          aspect-ratio: 1;
          clip-path: polygon(25% 25%, 100% 50%, 25% 75%, 0% 50%);
          transform: var(--transform-start);
          transform-style: preserve-3d;
          animation: diamonds var(--duration) cubic-bezier(0.87, 0, 0.13, 1) infinite;
        }

        @keyframes spin {
          0%,
          25% {
            transform: scaleX(var(--direction)) rotate(0);
          }

          75%,
          100% {
            transform: scaleX(var(--direction)) rotate(1turn);
          }
        }

        @keyframes diamonds {
          0%,
          20% {
            transform: var(--transform-start);
          }

          50% {
            clip-path: polygon(75% 25%, 100% 50%, 75% 75%, 0% 50%);
            transform: translate3d(
                calc(cos(var(--deg)) * var(--radius) * var(--pull)),
                calc(sin(var(--deg)) * var(--radius) * var(--pull)),
                5rem
              )
              rotate(calc(var(--deg) + 90deg));
          }
        }
        \`}
      </style>
      <figure className="geometric-loader">
        <div style={{ "--i": 1 } as React.CSSProperties} />
        <div style={{ "--i": 2 } as React.CSSProperties} />
        <div style={{ "--i": 3 } as React.CSSProperties} />
        <div style={{ "--i": 4 } as React.CSSProperties} />
        <div style={{ "--i": 5 } as React.CSSProperties} />
        <div style={{ "--i": 6 } as React.CSSProperties} />
        <div style={{ "--i": 7 } as React.CSSProperties} />
        <div style={{ "--i": 8 } as React.CSSProperties} />
        <div style={{ "--i": 9 } as React.CSSProperties} />
        <div style={{ "--i": 10 } as React.CSSProperties} />
        <div style={{ "--i": 11 } as React.CSSProperties} />
        <div style={{ "--i": 12 } as React.CSSProperties} />
      </figure>
    </div>
  );
}

export default Loader;
`;

export function GeometricSpinnerLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[300px]">
      <div className="geometric-spinner-wrapper">
        <style>
          {`
            .geometric-loader {
              --size: 100px; /* Adjusted size for the container */
              --duration: 4s;
              --direction: 1;
              --pull: -1.25;
              perspective: 30rem;
              display: grid;
              grid-template-areas: "figure";
              place-items: center;
              inline-size: var(--size);
              aspect-ratio: 1;
              animation: spin var(--duration) ease-in-out infinite;
            }

            .geometric-loader > * {
              --radius: calc(var(--size) / 2);
              --deg: calc(var(--i) * (360deg / 12));
              --hs: 225 100%;
              --transform-start: translate3d(
                  calc(cos(var(--deg)) * var(--radius)),
                  calc(sin(var(--deg)) * var(--radius)),
                  0
                )
                rotate(calc(var(--deg)));
              grid-area: figure;
              background-color: hsl(var(--hs) var(--l, 60%));
              inline-size: calc(var(--size) / 4);
              aspect-ratio: 1;
              clip-path: polygon(25% 25%, 100% 50%, 25% 75%, 0% 50%);
              transform: var(--transform-start);
              transform-style: preserve-3d;
              animation: diamonds var(--duration) cubic-bezier(0.87, 0, 0.13, 1) infinite;
            }

            @keyframes spin {
              0%,
              25% {
                transform: scaleX(var(--direction)) rotate(0);
              }

              75%,
              100% {
                transform: scaleX(var(--direction)) rotate(1turn);
              }
            }

            @keyframes diamonds {
              0%,
              20% {
                transform: var(--transform-start);
              }

              50% {
                clip-path: polygon(75% 25%, 100% 50%, 75% 75%, 0% 50%);
                transform: translate3d(
                    calc(cos(var(--deg)) * var(--radius) * var(--pull)),
                    calc(sin(var(--deg)) * var(--radius) * var(--pull)),
                    5rem
                  )
                  rotate(calc(var(--deg) + 90deg));
              }
            }
            `}
        </style>
        <figure className="geometric-loader">
          <div style={{ "--i": 1 } as React.CSSProperties} />
          <div style={{ "--i": 2 } as React.CSSProperties} />
          <div style={{ "--i": 3 } as React.CSSProperties} />
          <div style={{ "--i": 4 } as React.CSSProperties} />
          <div style={{ "--i": 5 } as React.CSSProperties} />
          <div style={{ "--i": 6 } as React.CSSProperties} />
          <div style={{ "--i": 7 } as React.CSSProperties} />
          <div style={{ "--i": 8 } as React.CSSProperties} />
          <div style={{ "--i": 9 } as React.CSSProperties} />
          <div style={{ "--i": 10 } as React.CSSProperties} />
          <div style={{ "--i": 11 } as React.CSSProperties} />
          <div style={{ "--i": 12 } as React.CSSProperties} />
        </figure>
      </div>
    </div>
  );
}

export function GeometricSpinnerLoader() {
  return (
    <ComponentShowcase title="Geometric Spinner" code={code} className="min-h-[300px]">
      <GeometricSpinnerLoaderContent />
    </ComponentShowcase>
  );
}
