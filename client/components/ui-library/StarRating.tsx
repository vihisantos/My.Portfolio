import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const StarRating = () => {
  return (
    <div className="sr-wrapper">
      <style>
        {\`
        .sr-wrapper .sr-rating {
          display: flex;
          flex-direction: row-reverse;
          gap: 0.3rem;
          --sr-stroke: #666;
          --sr-fill: #ffc73a;
        }

        .sr-wrapper .sr-rating input {
          appearance: unset;
        }

        .sr-wrapper .sr-rating label {
          cursor: pointer;
        }

        .sr-wrapper .sr-rating svg {
          width: 2rem;
          height: 2rem;
          overflow: visible;
          fill: transparent;
          stroke: var(--sr-stroke);
          stroke-linejoin: bevel;
          stroke-dasharray: 12;
          animation: sr-idle 4s linear infinite;
          transition: stroke 0.2s, fill 0.5s;
        }

        @keyframes sr-idle {
          from {
            stroke-dashoffset: 24;
          }
        }

        .sr-wrapper .sr-rating label:hover svg {
          stroke: var(--sr-fill);
        }

        .sr-wrapper .sr-rating input:checked ~ label svg {
          transition: 0s;
          animation: sr-idle 4s linear infinite, sr-yippee 0.75s backwards;
          fill: var(--sr-fill);
          stroke: var(--sr-fill);
          stroke-opacity: 0;
          stroke-dasharray: 0;
          stroke-linejoin: miter;
          stroke-width: 8px;
        }

        @keyframes sr-yippee {
          0% {
            transform: scale(1);
            fill: var(--sr-fill);
            fill-opacity: 0;
            stroke-opacity: 1;
            stroke: var(--sr-stroke);
            stroke-dasharray: 10;
            stroke-width: 1px;
            stroke-linejoin: bevel;
          }

          30% {
            transform: scale(0);
            fill: var(--sr-fill);
            fill-opacity: 0;
            stroke-opacity: 1;
            stroke: var(--sr-stroke);
            stroke-dasharray: 10;
            stroke-width: 1px;
            stroke-linejoin: bevel;
          }

          30.1% {
            stroke: var(--sr-fill);
            stroke-dasharray: 0;
            stroke-linejoin: miter;
            stroke-width: 8px;
          }

          60% {
            transform: scale(1.2);
            fill: var(--sr-fill);
          }
        }
        \`}
      </style>
      <div className="sr-rating">
        <input type="radio" id="sr-star-5" name="sr-star-radio" defaultValue="5" />
        <label htmlFor="sr-star-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
        </label>
        <input type="radio" id="sr-star-4" name="sr-star-radio" defaultValue="4" />
        <label htmlFor="sr-star-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
        </label>
        <input type="radio" id="sr-star-3" name="sr-star-radio" defaultValue="3" />
        <label htmlFor="sr-star-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
        </label>
        <input type="radio" id="sr-star-2" name="sr-star-radio" defaultValue="2" />
        <label htmlFor="sr-star-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
        </label>
        <input type="radio" id="sr-star-1" name="sr-star-radio" defaultValue="1" />
        <label htmlFor="sr-star-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
        </label>
      </div>
    </div>
  );
}

export default StarRating;
`;

export function StarRating() {
    return (
        <ComponentShowcase title="Star Rating" code={code} className="flex items-center justify-center p-12 min-h-[200px]">
            <div className="sr-wrapper">
                <style>
                    {`
        .sr-wrapper .sr-rating {
          display: flex;
          flex-direction: row-reverse;
          gap: 0.3rem;
          --sr-stroke: #666;
          --sr-fill: #ffc73a;
        }

        .sr-wrapper .sr-rating input {
          appearance: unset;
        }

        .sr-wrapper .sr-rating label {
          cursor: pointer;
        }

        .sr-wrapper .sr-rating svg {
          width: 2rem;
          height: 2rem;
          overflow: visible;
          fill: transparent;
          stroke: var(--sr-stroke);
          stroke-linejoin: bevel;
          stroke-dasharray: 12;
          animation: sr-idle 4s linear infinite;
          transition: stroke 0.2s, fill 0.5s;
        }

        @keyframes sr-idle {
          from {
            stroke-dashoffset: 24;
          }
        }

        .sr-wrapper .sr-rating label:hover svg {
          stroke: var(--sr-fill);
        }

        .sr-wrapper .sr-rating input:checked ~ label svg {
          transition: 0s;
          animation: sr-idle 4s linear infinite, sr-yippee 0.75s backwards;
          fill: var(--sr-fill);
          stroke: var(--sr-fill);
          stroke-opacity: 0;
          stroke-dasharray: 0;
          stroke-linejoin: miter;
          stroke-width: 8px;
        }

        @keyframes sr-yippee {
          0% {
            transform: scale(1);
            fill: var(--sr-fill);
            fill-opacity: 0;
            stroke-opacity: 1;
            stroke: var(--sr-stroke);
            stroke-dasharray: 10;
            stroke-width: 1px;
            stroke-linejoin: bevel;
          }

          30% {
            transform: scale(0);
            fill: var(--sr-fill);
            fill-opacity: 0;
            stroke-opacity: 1;
            stroke: var(--sr-stroke);
            stroke-dasharray: 10;
            stroke-width: 1px;
            stroke-linejoin: bevel;
          }

          30.1% {
            stroke: var(--sr-fill);
            stroke-dasharray: 0;
            stroke-linejoin: miter;
            stroke-width: 8px;
          }

          60% {
            transform: scale(1.2);
            fill: var(--sr-fill);
          }
        }
        `}
                </style>
                <div className="sr-rating">
                    <input type="radio" id="sr-star-5" name="sr-star-radio" defaultValue="5" />
                    <label htmlFor="sr-star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </label>
                    <input type="radio" id="sr-star-4" name="sr-star-radio" defaultValue="4" />
                    <label htmlFor="sr-star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </label>
                    <input type="radio" id="sr-star-3" name="sr-star-radio" defaultValue="3" />
                    <label htmlFor="sr-star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </label>
                    <input type="radio" id="sr-star-2" name="sr-star-radio" defaultValue="2" />
                    <label htmlFor="sr-star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </label>
                    <input type="radio" id="sr-star-1" name="sr-star-radio" defaultValue="1" />
                    <label htmlFor="sr-star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength={360} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                    </label>
                </div>
            </div>
        </ComponentShowcase>
    );
}
