import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Loader = () => {
  return (
    <div className="music-equalizer-wrapper">
      <style>
        {\`
        .music-equalizer-loader {
          display: flex;
          align-items: center;
        }

        .music-bar {
          display: inline-block;
          width: 3px;
          height: 20px;
          background-color: rgba(0, 0, 0, .5);
          border-radius: 10px;
          animation: music-scale-up 1s linear infinite;
        }

        .dark .music-bar {
          background-color: rgba(255, 255, 255, .5);
        }

        .music-bar:nth-child(2) {
          height: 35px;
          margin: 0 5px;
          animation-delay: .25s;
        }

        .music-bar:nth-child(3) {
          animation-delay: .5s;
        }

        @keyframes music-scale-up {
          20% {
            background-color: #000;
            transform: scaleY(1.5);
          }
          40% {
            transform: scaleY(1);
          }
        }

        @keyframes music-scale-up-dark {
          20% {
            background-color: #ffff;
            transform: scaleY(1.5);
          }
          40% {
            transform: scaleY(1);
          }
        }

        .dark .music-bar {
           animation-name: music-scale-up-dark;
        }
        \`}
      </style>
      <div className="music-equalizer-loader">
        <span className="music-bar" />
        <span className="music-bar" />
        <span className="music-bar" />
      </div>
    </div>
  );
}

export default Loader;
`;

export function MusicEqualizerLoader() {
  return (
    <ComponentShowcase title="Music Equalizer Loader" code={code} className="min-h-[250px] flex items-center justify-center">
      <div className="music-equalizer-wrapper w-full h-full min-h-[150px] flex items-center justify-center bg-transparent rounded-lg">
        <style>
          {`
            .music-equalizer-loader {
              display: flex;
              align-items: center;
            }

            .music-bar {
              display: inline-block;
              width: 3px;
              height: 20px;
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 10px;
              animation: music-scale-up 1s linear infinite;
            }

            .dark .music-bar {
              background-color: rgba(255, 255, 255, .5);
            }

            .music-bar:nth-child(2) {
              height: 35px;
              margin: 0 5px;
              animation-delay: .25s;
            }

            .music-bar:nth-child(3) {
              animation-delay: .5s;
            }

            @keyframes music-scale-up {
              20% {
                background-color: #000;
                transform: scaleY(1.5);
              }
              40% {
                transform: scaleY(1);
              }
            }

            @keyframes music-scale-up-dark {
              20% {
                background-color: #ffff;
                transform: scaleY(1.5);
              }
              40% {
                transform: scaleY(1);
              }
            }

            .dark .music-bar {
               animation-name: music-scale-up-dark;
            }
            `}
        </style>
        <div className="music-equalizer-loader scale-[2]">
          <span className="music-bar" />
          <span className="music-bar" />
          <span className="music-bar" />
        </div>
      </div>
    </ComponentShowcase>
  );
}
