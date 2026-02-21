import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const GradientSpinLoader = () => {
  return (
    <div className="gradient-spin-loader-wrapper">
      <style>
        {\`
        .gradient-spin-loader {
           position: relative;
           width: 60px;
           height: 60px;
           border-radius: 50%;
        }

        .gradient-spin-loader::before,
        .gradient-spin-loader:after {
           content: "";
           position: absolute;
           border-radius: inherit;
        }

        .gradient-spin-loader:before {
           width: 100%;
           height: 100%;
           background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
           animation: gradient-spin-anim .5s infinite linear;
        }

        .gradient-spin-loader:after {
           width: 85%;
           height: 85%;
           background-color: #212121;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
        }

        @keyframes gradient-spin-anim {
           to {
            transform: rotate(360deg);
           }
        }
        \`}
      </style>
      <div className="gradient-spin-loader" />
    </div>
  );
}

export default GradientSpinLoader;
`;

export function GradientSpinLoaderContent() {
   return (
      <div className="w-full h-full flex items-center justify-center min-h-[200px]">
         <div className="gradient-spin-loader-wrapper bg-transparent p-10 rounded-xl">
            <style>
               {`
            .gradient-spin-loader {
               position: relative;
               width: 60px;
               height: 60px;
               border-radius: 50%;
            }

            .gradient-spin-loader::before,
            .gradient-spin-loader:after {
               content: "";
               position: absolute;
               border-radius: inherit;
            }

            .gradient-spin-loader:before {
               width: 100%;
               height: 100%;
               background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
               animation: gradient-spin-anim .5s infinite linear;
            }

            .gradient-spin-loader:after {
               width: 85%;
               height: 85%;
               background-color: hsl(var(--card));
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
            }

            @keyframes gradient-spin-anim {
               to {
                transform: rotate(360deg);
               }
            }
            `}
            </style>
            <div className="gradient-spin-loader" />
         </div>
      </div>
   );
}

export function GradientSpinLoader() {
   return (
      <ComponentShowcase title="Gradient Spin Loader" code={code} className="min-h-[200px] flex items-center justify-center">
         <GradientSpinLoaderContent />
      </ComponentShowcase>
   );
}

