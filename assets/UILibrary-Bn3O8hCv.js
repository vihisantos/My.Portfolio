import{j as e,ag as Qa,ah as Ja,ai as Ka,aj as ei,P as ti,ak as ri,N as ai,al as ii,am as oi}from"./ui-BsGXfM19.js";import{a as T}from"./vendor-CyIqNf1X.js";import{N as si}from"./Navigation-HszfF-92.js";import{B as Nr}from"./button-BtTNyNXa.js";import{c as be,a as ni,u as li}from"./index-CKzDpMGa.js";import{m as he,c as _t,d as ci,a as Cr,b as zr,A as di}from"./framer-DWneAvh4.js";function k({title:l,children:t,code:r,className:a,scale:i=.65,renderScale:o=1.5}){const[s,n]=T.useState(!1),[c,d]=T.useState(!1),p=x=>{x.stopPropagation(),navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)},m=`${o*100}%`,f=`${o*100}%`;return e.jsxs("div",{className:be("group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",a),children:[e.jsx("style",{children:`
                .component-showcase-content * {
                    animation-play-state: paused !important;
                }
                .group:hover .component-showcase-content * {
                    animation-play-state: running !important;
                }
                `}),e.jsx("div",{className:"absolute top-3 left-4 z-20 flex items-center gap-2",children:e.jsx("h3",{className:"font-semibold text-sm text-foreground/80",children:l})}),e.jsx("div",{className:be("absolute top-3 right-3 z-30 transition-opacity duration-200",c?"opacity-100":"opacity-0 group-hover:opacity-100"),children:e.jsx(Nr,{size:"icon",variant:"ghost",className:"h-8 w-8 bg-background/50 backdrop-blur-sm hover:bg-background border",onClick:()=>d(!c),title:c?"Hide Code":"Show Code",children:c?e.jsx(Qa,{className:"h-4 w-4"}):e.jsx(Ja,{className:"h-4 w-4"})})}),e.jsx("div",{className:be("component-showcase-content relative flex h-64 w-full items-center justify-center p-0 transition-all duration-300 ease-in-out overflow-hidden",c?"opacity-0 scale-95":"opacity-100 scale-100"),children:e.jsx("div",{className:"flex items-center justify-center origin-center",style:{width:m,height:f,transform:`scale(${i})`},children:t})}),e.jsxs("div",{className:be("absolute inset-0 z-10 flex flex-col bg-zinc-950/95 p-6 transition-all duration-300",c?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"),children:[e.jsx("div",{className:"absolute right-2 top-12",children:e.jsx(Nr,{size:"icon",variant:"ghost",className:"h-8 w-8 text-zinc-400 hover:text-white",onClick:p,children:s?e.jsx(Ka,{className:"h-4 w-4"}):e.jsx(ei,{className:"h-4 w-4"})})}),e.jsx("pre",{className:"h-full w-full overflow-auto rounded-md bg-transparent pt-8 p-2 text-xs text-zinc-200 scrollbar-none",children:e.jsx("code",{children:r})})]})]})}const pi=`import React from 'react';

const Loader = () => {
  return (
    <>
      <style>
        {\`
        .loader {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }

        .truckWrapper {
          width: 200px;
          height: 100px;
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
        }
        /* truck upper body */
        .truckBody {
          width: 130px;
          height: fit-content;
          margin-bottom: 6px;
          animation: motion 1s linear infinite;
        }
        /* truck suspension animation*/
        @keyframes motion {
          0% { transform: translateY(0px); }
          50% { transform: translateY(3px); }
          100% { transform: translateY(0px); }
        }
        /* truck's tires */
        .truckTires {
          width: 130px;
          height: fit-content;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0px 10px 0px 15px;
          position: absolute;
          bottom: 0;
        }
        .truckTires svg {
          width: 24px;
        }

        .road {
          width: 100%;
          height: 1.5px;
          background-color: #282828;
          position: relative;
          bottom: 0;
          align-self: flex-end;
          border-radius: 3px;
        }
        .road::before, .road::after {
          content: "";
          position: absolute;
          background-color: #282828;
          border-radius: 3px;
          animation: roadAnimation 1.4s linear infinite;
        }
        .road::before {
          width: 20px;
          height: 100%;
          right: -50%;
          border-left: 10px solid white;
        }
        .road::after {
          width: 10px;
          height: 100%;
          right: -65%;
          border-left: 4px solid white;
        }

        .lampPost {
          position: absolute;
          bottom: 0;
          right: -30%;
          height: 80px;
          animation: roadAnimation 1.4s linear infinite;
          fill: #282828;
        }

        @keyframes roadAnimation {
          0% { transform: translateX(0px); }
          100% { transform: translateX(-350px); }
        }
        \`}
      </style>
      <div className="loader">
        <div className="truckWrapper">
          <div className="truckBody">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 198 93" className="trucksvg">
              <path strokeWidth={3} stroke="#282828" fill="#F83D3D" d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z" />
              <path strokeWidth={3} stroke="#282828" fill="#7D7C7C" d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z" />
              <path strokeWidth={2} stroke="#282828" fill="#282828" d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z" />
              <rect strokeWidth={2} stroke="#282828" fill="#FFFCAB" rx={1} height={7} width={5} y={63} x={187} />
              <rect strokeWidth={2} stroke="#282828" fill="#282828" rx={1} height={11} width={4} y={81} x={193} />
              <rect strokeWidth={3} stroke="#282828" fill="#DFDFDF" rx="2.5" height={90} width={121} y="1.5" x="6.5" />
              <rect strokeWidth={2} stroke="#282828" fill="#DFDFDF" rx={2} height={4} width={6} y={84} x={1} />
            </svg>
          </div>
          <div className="truckTires">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="tiresvg">
              <circle strokeWidth={3} stroke="#282828" fill="#282828" r="13.5" cy={15} cx={15} />
              <circle fill="#DFDFDF" r={7} cy={15} cx={15} />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="tiresvg">
              <circle strokeWidth={3} stroke="#282828" fill="#282828" r="13.5" cy={15} cx={15} />
              <circle fill="#DFDFDF" r={7} cy={15} cx={15} />
            </svg>
          </div>
          <div className="road" />
          <svg xmlSpace="preserve" viewBox="0 0 453.459 453.459" xmlns="http://www.w3.org/2000/svg" className="lampPost">
            <path d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
      c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
      c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
      c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
      h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
      v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
      V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
      M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
      h78.747C231.693,100.736,232.77,106.162,232.77,111.694z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Loader;
`;function hi(){return e.jsxs(k,{title:"Truck Loader",code:pi,className:"min-h-[250px]",children:[e.jsx("style",{children:`
        .truck-loader-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
          overflow: hidden;
        }

        .truckWrapper {
          width: 200px;
          height: 100px;
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
        }
        /* truck upper body */
        .truckBody {
          width: 130px;
          height: fit-content;
          margin-bottom: 6px;
          animation: motion 1s linear infinite;
        }
        /* truck suspension animation*/
        @keyframes motion {
          0% { transform: translateY(0px); }
          50% { transform: translateY(3px); }
          100% { transform: translateY(0px); }
        }
        /* truck's tires */
        .truckTires {
          width: 130px;
          height: fit-content;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0px 10px 0px 15px;
          position: absolute;
          bottom: 0;
        }
        .truckTires svg {
          width: 24px;
        }

        .road {
          width: 100%;
          height: 1.5px;
          background-color: #282828;
          position: relative;
          bottom: 0;
          align-self: flex-end;
          border-radius: 3px;
        }
        .road::before, .road::after {
          content: "";
          position: absolute;
          background-color: #282828;
          border-radius: 3px;
          animation: roadAnimation 1.4s linear infinite;
        }
        .road::before {
          width: 20px;
          height: 100%;
          right: -50%;
          border-left: 10px solid white;
        }
        .road::after {
          width: 10px;
          height: 100%;
          right: -65%;
          border-left: 4px solid white;
        }

        .lampPost {
          position: absolute;
          bottom: 0px;
          right: -30%;
          height: 80px;
          animation: roadAnimation 1.4s linear infinite;
          fill: #282828;
        }

        @keyframes roadAnimation {
          0% { transform: translateX(0px); }
          100% { transform: translateX(-350px); }
        }
        `}),e.jsx("div",{className:"truck-loader-container",children:e.jsxs("div",{className:"truckWrapper",children:[e.jsx("div",{className:"truckBody",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 198 93",className:"trucksvg",children:[e.jsx("path",{strokeWidth:3,stroke:"#282828",fill:"#F83D3D",d:"M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"}),e.jsx("path",{strokeWidth:3,stroke:"#282828",fill:"#7D7C7C",d:"M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"}),e.jsx("path",{strokeWidth:2,stroke:"#282828",fill:"#282828",d:"M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"}),e.jsx("rect",{strokeWidth:2,stroke:"#282828",fill:"#FFFCAB",rx:1,height:7,width:5,y:63,x:187}),e.jsx("rect",{strokeWidth:2,stroke:"#282828",fill:"#282828",rx:1,height:11,width:4,y:81,x:193}),e.jsx("rect",{strokeWidth:3,stroke:"#282828",fill:"#DFDFDF",rx:"2.5",height:90,width:121,y:"1.5",x:"6.5"}),e.jsx("rect",{strokeWidth:2,stroke:"#282828",fill:"#DFDFDF",rx:2,height:4,width:6,y:84,x:1})]})}),e.jsxs("div",{className:"truckTires",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",className:"tiresvg",children:[e.jsx("circle",{strokeWidth:3,stroke:"#282828",fill:"#282828",r:"13.5",cy:15,cx:15}),e.jsx("circle",{fill:"#DFDFDF",r:7,cy:15,cx:15})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",className:"tiresvg",children:[e.jsx("circle",{strokeWidth:3,stroke:"#282828",fill:"#282828",r:"13.5",cy:15,cx:15}),e.jsx("circle",{fill:"#DFDFDF",r:7,cy:15,cx:15})]})]}),e.jsx("div",{className:"road"}),e.jsx("svg",{xmlSpace:"preserve",viewBox:"0 0 453.459 453.459",xmlns:"http://www.w3.org/2000/svg",className:"lampPost",children:e.jsx("path",{d:`M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
      c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
      c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
      c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
      h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
      v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
      V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
      M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
      h78.747C231.693,100.736,232.77,106.162,232.77,111.694z`})})]})})]})}const mi=`import React from 'react';

const Loader = () => {
  return (
    <div className="newtons-cradle-container">
      <style>
        {\`
        .newtons-cradle {
         --uib-size: 50px;
         --uib-speed: 1.2s;
         --uib-color: #474554;
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
         width: var(--uib-size);
         height: var(--uib-size);
        }

        .newtons-cradle__dot {
         position: relative;
         display: flex;
         align-items: center;
         height: 100%;
         width: 25%;
         transform-origin: center top;
        }

        .newtons-cradle__dot::after {
         content: '';
         display: block;
         width: 100%;
         height: 25%;
         border-radius: 50%;
         background-color: var(--uib-color);
        }

        .newtons-cradle__dot:first-child {
         animation: swing var(--uib-speed) linear infinite;
        }

        .newtons-cradle__dot:last-child {
         animation: swing2 var(--uib-speed) linear infinite;
        }

        @keyframes swing {
         0% {
          transform: rotate(0deg);
          animation-timing-function: ease-out;
         }

         25% {
          transform: rotate(70deg);
          animation-timing-function: ease-in;
         }

         50% {
          transform: rotate(0deg);
          animation-timing-function: linear;
         }
        }

        @keyframes swing2 {
         0% {
          transform: rotate(0deg);
          animation-timing-function: linear;
         }

         50% {
          transform: rotate(0deg);
          animation-timing-function: ease-out;
         }

         75% {
          transform: rotate(-70deg);
          animation-timing-function: ease-in;
         }
        }
        \`}
      </style>
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
      </div>
    </div>
  );
}

export default Loader;
`;function fi(){return e.jsx(k,{title:"Newton's Cradle",code:mi,className:"min-h-[250px]",children:e.jsxs("div",{className:"newtons-cradle-container",children:[e.jsx("style",{children:`
            .newtons-cradle {
            --uib-size: 50px;
            --uib-speed: 1.2s;
            --uib-color: #474554;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: var(--uib-size);
            height: var(--uib-size);
            }

            .newtons-cradle__dot {
            position: relative;
            display: flex;
            align-items: center;
            height: 100%;
            width: 25%;
            transform-origin: center top;
            }

            .newtons-cradle__dot::after {
            content: '';
            display: block;
            width: 100%;
            height: 25%;
            border-radius: 50%;
            background-color: var(--uib-color);
            }

            .newtons-cradle__dot:first-child {
            animation: swing var(--uib-speed) linear infinite;
            }

            .newtons-cradle__dot:last-child {
            animation: swing2 var(--uib-speed) linear infinite;
            }

            @keyframes swing {
            0% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
            }

            25% {
            transform: rotate(70deg);
            animation-timing-function: ease-in;
            }

            50% {
            transform: rotate(0deg);
            animation-timing-function: linear;
            }
            }

            @keyframes swing2 {
            0% {
            transform: rotate(0deg);
            animation-timing-function: linear;
            }

            50% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
            }

            75% {
            transform: rotate(-70deg);
            animation-timing-function: ease-in;
            }
            }
            `}),e.jsxs("div",{className:"newtons-cradle",children:[e.jsx("div",{className:"newtons-cradle__dot"}),e.jsx("div",{className:"newtons-cradle__dot"}),e.jsx("div",{className:"newtons-cradle__dot"}),e.jsx("div",{className:"newtons-cradle__dot"})]})]})})}const xi=`import React from 'react';

const Loader = () => {
  return (
    <div className="hand-loader-wrapper">
      <style>
        {\`
        .🤚 {
          --skin-color: #E4C560;
          --tap-speed: 0.6s;
          --tap-stagger: 0.1s;
          position: relative;
          width: 80px;
          height: 60px;
          margin-left: 80px;
        }

        .🤚:before {
          content: '';
          display: block;
          width: 180%;
          height: 75%;
          position: absolute;
          top: 70%;
          right: 20%;
          background-color: black;
          border-radius: 40px 10px;
          filter: blur(10px);
          opacity: 0.3;
        }

        .🌴 {
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--skin-color);
          border-radius: 10px 40px;
        }

        .👍 {
          position: absolute;
          width: 120%;
          height: 38px;
          background-color: var(--skin-color);
          bottom: -18%;
          right: 1%;
          transform-origin: calc(100% - 20px) 20px;
          transform: rotate(-20deg);
          border-radius: 30px 20px 20px 10px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.1);
          border-left: 2px solid rgba(0, 0, 0, 0.1);
        }

        .👍:after {
          width: 20%;
          height: 60%;
          content: '';
          background-color: rgba(255, 255, 255, 0.3);
          position: absolute;
          bottom: -8%;
          left: 5px;
          border-radius: 60% 10% 10% 30%;
          border-right: 2px solid rgba(0, 0, 0, 0.05);
        }

        .👉 {
          position: absolute;
          width: 80%;
          height: 35px;
          background-color: var(--skin-color);
          bottom: 32%;
          right: 64%;
          transform-origin: 100% 20px;
          animation-duration: calc(var(--tap-speed) * 2);
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          transform: rotate(10deg);
        }

        .👉:before {
          content: '';
          position: absolute;
          width: 140%;
          height: 30px;
          background-color: var(--skin-color);
          bottom: 8%;
          right: 65%;
          transform-origin: calc(100% - 20px) 20px;
          transform: rotate(-60deg);
          border-radius: 20px;
        }

        .👉:nth-child(1) {
          animation-delay: 0;
          filter: brightness(70%);
          animation-name: tap-upper-1;
        }

        .👉:nth-child(2) {
          animation-delay: var(--tap-stagger);
          filter: brightness(80%);
          animation-name: tap-upper-2;
        }

        .👉:nth-child(3) {
          animation-delay: calc(var(--tap-stagger) * 2);
          filter: brightness(90%);
          animation-name: tap-upper-3;
        }

        .👉:nth-child(4) {
          animation-delay: calc(var(--tap-stagger) * 3);
          filter: brightness(100%);
          animation-name: tap-upper-4;
        }

        @keyframes tap-upper-1 {
          0%, 50%, 100% {
            transform: rotate(10deg) scale(0.4);
          }

          40% {
            transform: rotate(50deg) scale(0.4);
          }
        }

        @keyframes tap-upper-2 {
          0%, 50%, 100% {
            transform: rotate(10deg) scale(0.6);
          }

          40% {
            transform: rotate(50deg) scale(0.6);
          }
        }

        @keyframes tap-upper-3 {
          0%, 50%, 100% {
            transform: rotate(10deg) scale(0.8);
          }

          40% {
            transform: rotate(50deg) scale(0.8);
          }
        }

        @keyframes tap-upper-4 {
          0%, 50%, 100% {
            transform: rotate(10deg) scale(1);
          }

          40% {
            transform: rotate(50deg) scale(1);
          }
        }
        \`}
      </style>
      <div className="🤚">
        <div className="👉" />
        <div className="👉" />
        <div className="👉" />
        <div className="👉" />
        <div className="🌴" />		
        <div className="👍" />
      </div>
    </div>
  );
}

export default Loader;
`;function gi(){return e.jsxs(k,{title:"Hand Loader",code:xi,className:"min-h-[250px]",children:[e.jsx("style",{children:`
        .🤚 {
          --skin-color: #E4C560;
          --tap-speed: 0.6s;
          --tap-stagger: 0.1s;
          position: relative;
          width: 80px;
          height: 60px;
          margin-left: 80px;
        }

        .🤚:before {
          content: '';
          display: block;
          width: 180%;
          height: 75%;
          position: absolute;
          top: 70%;
          right: 20%;
          background-color: black;
          border-radius: 40px 10px;
          filter: blur(10px);
          opacity: 0.3;
        }

        .🌴 {
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--skin-color);
          border-radius: 10px 40px;
        }

        .👍 {
          position: absolute;
          width: 120%;
          height: 38px;
          background-color: var(--skin-color);
          bottom: -18%;
          right: 1%;
          transform-origin: calc(100% - 20px) 20px;
          transform: rotate(-20deg);
          border-radius: 30px 20px 20px 10px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.1);
          border-left: 2px solid rgba(0, 0, 0, 0.1);
        }

        .👍:after {
          width: 20%;
          height: 60%;
          content: '';
          background-color: rgba(255, 255, 255, 0.3);
          position: absolute;
          bottom: -8%;
          left: 5px;
          border-radius: 60% 10% 10% 30%;
          border-right: 2px solid rgba(0, 0, 0, 0.05);
        }

        .👉 {
          position: absolute;
          width: 80%;
          height: 35px;
          background-color: var(--skin-color);
          bottom: 32%;
          right: 64%;
          transform-origin: 100% 20px;
          animation-duration: calc(var(--tap-speed) * 2);
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          transform: rotate(10deg);
        }

        .👉:before {
          content: '';
          position: absolute;
          width: 140%;
          height: 30px;
          background-color: var(--skin-color);
          bottom: 8%;
          right: 65%;
          transform-origin: calc(100% - 20px) 20px;
          transform: rotate(-60deg);
          border-radius: 20px;
        }

        .👉:nth-child(1) {
          animation-delay: 0;
          filter: brightness(70%);
          animation-name: tap-upper-1;
        }

        .👉:nth-child(2) {
          animation-delay: var(--tap-stagger);
          filter: brightness(80%);
          animation-name: tap-upper-2;
        }

        .👉:nth-child(3) {
          animation-delay: calc(var(--tap-stagger) * 2);
          filter: brightness(90%);
          animation-name: tap-upper-3;
        }

        .👉:nth-child(4) {
          animation-delay: calc(var(--tap-stagger) * 3);
          filter: brightness(100%);
          animation-name: tap-upper-4;
        }

        @keyframes tap-upper-1 {
          0%, 50%, 100% {
            transform: rotate(10deg) scale(0.4);
          }

          40% {
            transform: rotate(50deg) scale(0.4);
          }
        }

        @keyframes tap-upper-2 {
          0%, 50%, 100% {
            transform: rotate(10deg) scale(0.6);
          }

          40% {
            transform: rotate(50deg) scale(0.6);
          }
        }

        @keyframes tap-upper-3 {
          0%, 50%, 100% {
            transform: rotate(10deg) scale(0.8);
          }

          40% {
            transform: rotate(50deg) scale(0.8);
          }
        }

        @keyframes tap-upper-4 {
          0%, 50%, 100% {
            transform: rotate(10deg) scale(1);
          }

          40% {
            transform: rotate(50deg) scale(1);
          }
        }
        `}),e.jsxs("div",{className:"🤚",children:[e.jsx("div",{className:"👉"}),e.jsx("div",{className:"👉"}),e.jsx("div",{className:"👉"}),e.jsx("div",{className:"👉"}),e.jsx("div",{className:"🌴"}),e.jsx("div",{className:"👍"})]})]})}const ui=`import React from 'react';

const Loader = () => {
  return (
    <div className="ecg-loader-wrapper">
      <style>
        {\`
        .loading svg polyline {
          fill: none;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .loading svg polyline#back {
          fill: none;
          stroke: #ff4d5033;
        }

        .loading svg polyline#front {
          fill: none;
          stroke: #ff4d4f;
          stroke-dasharray: 48, 144;
          stroke-dashoffset: 192;
          animation: dash_682 1.4s linear infinite;
        }

        @keyframes dash_682 {
          72.5% {
            opacity: 0;
          }

          to {
            stroke-dashoffset: 0;
          }
        }
        \`}
      </style>
      <div className="loading">
        <svg width="64px" height="48px">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back" />
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front" />
        </svg>
      </div>
    </div>
  );
}

export default Loader;
`;function bi(){return e.jsx(k,{title:"ECG Loader",code:ui,className:"min-h-[250px]",children:e.jsxs("div",{className:"ecg-loader-wrapper",children:[e.jsx("style",{children:`
            .loading svg polyline {
            fill: none;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            }

            .loading svg polyline#back {
            fill: none;
            stroke: #ff4d5033;
            }

            .loading svg polyline#front {
            fill: none;
            stroke: #ff4d4f;
            stroke-dasharray: 48, 144;
            stroke-dashoffset: 192;
            animation: dash_682 1.4s linear infinite;
            }

            @keyframes dash_682 {
            72.5% {
                opacity: 0;
            }

            to {
                stroke-dashoffset: 0;
            }
            }
            `}),e.jsx("div",{className:"loading",children:e.jsxs("svg",{width:"64px",height:"48px",children:[e.jsx("polyline",{points:"0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24",id:"back"}),e.jsx("polyline",{points:"0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24",id:"front"})]})})]})})}const vi=`import React from 'react';

const Loader = () => {
  return (
    <div className="sleeping-loader-wrapper">
      <style>
        {\`
        .z {
          position: absolute;
          font-size: 32px;
          opacity: 0;
        }
        .z-1 {
          animation: swayUpToRight 2s ease-out infinite;
        }
        .z-2 {
          animation: swayUpToRight 2s ease-out 0.5s infinite;
        }
        .z-3 {
          animation: swayUpToRight 2s ease-out 1s infinite;
        }
        .z-4 {
          animation: swayUpToRight 2s ease-out 1.5s infinite;
        }
        @keyframes swayUpToRight {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(80px, -100px) rotate(30deg);
            opacity: 0;
          }
        }
        \`}
      </style>
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <div className="z z-1">Z</div>
        <div className="z z-2">Z</div>
        <div className="z z-3">Z</div>
        <div className="z z-4">Z</div>
      </div>
    </div>
  );
}

export default Loader;
`;function wi(){return e.jsx(k,{title:"Sleeping Loader",code:vi,className:"min-h-[250px]",children:e.jsxs("div",{className:"sleeping-loader-wrapper",children:[e.jsx("style",{children:`
            .z {
            position: absolute;
            font-size: 32px;
            opacity: 0;
            }
            .z-1 {
            animation: swayUpToRight 2s ease-out infinite;
            }
            .z-2 {
            animation: swayUpToRight 2s ease-out 0.5s infinite;
            }
            .z-3 {
            animation: swayUpToRight 2s ease-out 1s infinite;
            }
            .z-4 {
            animation: swayUpToRight 2s ease-out 1.5s infinite;
            }
            @keyframes swayUpToRight {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translate(80px, -100px) rotate(30deg);
                opacity: 0;
            }
            }
            `}),e.jsxs("div",{style:{position:"relative",width:"100px",height:"100px",display:"flex",alignItems:"flex-end",justifyContent:"center"},children:[e.jsx("div",{className:"z z-1",children:"Z"}),e.jsx("div",{className:"z z-2",children:"Z"}),e.jsx("div",{className:"z z-3",children:"Z"}),e.jsx("div",{className:"z z-4",children:"Z"})]})]})})}const yi=`import React from 'react';

const Loader = () => {
  return (
    <div className="tower-loader-wrapper">
      <style>
        {\`
        /* 3D tower loader made by: csozi | Website: www.csozi.hu*/

        .loader {
          scale: 3;
          height: 50px;
          width: 40px;
        }

        .box {
          position: relative;
          opacity: 0;
          left: 10px;
        }

        .side-left {
          position: absolute;
          background-color: #286cb5;
          width: 19px;
          height: 5px;
          transform: skew(0deg, -25deg);
          top: 14px;
          left: 10px;
        }

        .side-right {
          position: absolute;
          background-color: #2f85e0;
          width: 19px;
          height: 5px;
          transform: skew(0deg, 25deg);
          top: 14px;
          left: -9px;
        }

        .side-top {
          position: absolute;
          background-color: #5fa8f5;
          width: 20px;
          height: 20px;
          rotate: 45deg;
          transform: skew(-20deg, -20deg);
        }

        .box-1 {
          animation: from-left 4s infinite;
        }

        .box-2 {
          animation: from-right 4s infinite;
          animation-delay: 1s;
        }

        .box-3 {
          animation: from-left 4s infinite;
          animation-delay: 2s;
        }

        .box-4 {
          animation: from-right 4s infinite;
          animation-delay: 3s;
        }

        @keyframes from-left {
          0% {
            z-index: 20;
            opacity: 0;
            translate: -20px -6px;
          }

          20% {
            z-index: 10;
            opacity: 1;
            translate: 0px 0px;
          }

          40% {
            z-index: 9;
            translate: 0px 4px;
          }

          60% {
            z-index: 8;
            translate: 0px 8px;
          }

          80% {
            z-index: 7;
            opacity: 1;
            translate: 0px 12px;
          }

          100% {
            z-index: 5;
            translate: 0px 30px;
            opacity: 0;
          }
        }

        @keyframes from-right {
          0% {
            z-index: 20;
            opacity: 0;
            translate: 20px -6px;
          }

          20% {
            z-index: 10;
            opacity: 1;
            translate: 0px 0px;
          }

          40% {
            z-index: 9;
            translate: 0px 4px;
          }

          60% {
            z-index: 8;
            translate: 0px 8px;
          }

          80% {
            z-index: 7;
            opacity: 1;
            translate: 0px 12px;
          }

          100% {
            z-index: 5;
            translate: 0px 30px;
            opacity: 0;
          }
        }
        \`}
      </style>
      <div className="loader">
        <div className="box box-1">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
        <div className="box box-2">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
        <div className="box box-3">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
        <div className="box box-4">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
`;function ki(){return e.jsx(k,{title:"Tower Loader",code:yi,className:"min-h-[250px]",children:e.jsxs("div",{className:"tower-loader-wrapper",children:[e.jsx("style",{children:`
            /* 3D tower loader made by: csozi | Website: www.csozi.hu*/

            .loader {
            scale: 3;
            height: 50px;
            width: 40px;
            }

            .box {
            position: relative;
            opacity: 0;
            left: 10px;
            }

            .side-left {
            position: absolute;
            background-color: #286cb5;
            width: 19px;
            height: 5px;
            transform: skew(0deg, -25deg);
            top: 14px;
            left: 10px;
            }

            .side-right {
            position: absolute;
            background-color: #2f85e0;
            width: 19px;
            height: 5px;
            transform: skew(0deg, 25deg);
            top: 14px;
            left: -9px;
            }

            .side-top {
            position: absolute;
            background-color: #5fa8f5;
            width: 20px;
            height: 20px;
            rotate: 45deg;
            transform: skew(-20deg, -20deg);
            }

            .box-1 {
            animation: from-left 4s infinite;
            }

            .box-2 {
            animation: from-right 4s infinite;
            animation-delay: 1s;
            }

            .box-3 {
            animation: from-left 4s infinite;
            animation-delay: 2s;
            }

            .box-4 {
            animation: from-right 4s infinite;
            animation-delay: 3s;
            }

            @keyframes from-left {
            0% {
                z-index: 20;
                opacity: 0;
                translate: -20px -6px;
            }

            20% {
                z-index: 10;
                opacity: 1;
                translate: 0px 0px;
            }

            40% {
                z-index: 9;
                translate: 0px 4px;
            }

            60% {
                z-index: 8;
                translate: 0px 8px;
            }

            80% {
                z-index: 7;
                opacity: 1;
                translate: 0px 12px;
            }

            100% {
                z-index: 5;
                translate: 0px 30px;
                opacity: 0;
            }
            }

            @keyframes from-right {
            0% {
                z-index: 20;
                opacity: 0;
                translate: 20px -6px;
            }

            20% {
                z-index: 10;
                opacity: 1;
                translate: 0px 0px;
            }

            40% {
                z-index: 9;
                translate: 0px 4px;
            }

            60% {
                z-index: 8;
                translate: 0px 8px;
            }

            80% {
                z-index: 7;
                opacity: 1;
                translate: 0px 12px;
            }

            100% {
                z-index: 5;
                translate: 0px 30px;
                opacity: 0;
            }
            }
            `}),e.jsxs("div",{className:"loader",children:[e.jsxs("div",{className:"box box-1",children:[e.jsx("div",{className:"side-left"}),e.jsx("div",{className:"side-right"}),e.jsx("div",{className:"side-top"})]}),e.jsxs("div",{className:"box box-2",children:[e.jsx("div",{className:"side-left"}),e.jsx("div",{className:"side-right"}),e.jsx("div",{className:"side-top"})]}),e.jsxs("div",{className:"box box-3",children:[e.jsx("div",{className:"side-left"}),e.jsx("div",{className:"side-right"}),e.jsx("div",{className:"side-top"})]}),e.jsxs("div",{className:"box box-4",children:[e.jsx("div",{className:"side-left"}),e.jsx("div",{className:"side-right"}),e.jsx("div",{className:"side-top"})]})]})]})})}const Ai=`import React from 'react';

const Loader = () => {
  return (
    <div className="jumping-box-loader-wrapper">
      <style>
        {\`
        .jumping-loader {
          width: 48px;
          height: 48px;
          margin: auto;
          position: relative;
        }

        .jumping-loader:before {
          content: '';
          width: 48px;
          height: 5px;
          background: #f0808050;
          position: absolute;
          top: 60px;
          left: 0;
          border-radius: 50%;
          animation: shadow324 0.5s linear infinite;
        }

        .jumping-loader:after {
          content: '';
          width: 100%;
          height: 100%;
          background: #f08080;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 4px;
          animation: jump7456 0.5s linear infinite;
        }

        @keyframes jump7456 {
          15% {
            border-bottom-right-radius: 3px;
          }

          25% {
            transform: translateY(9px) rotate(22.5deg);
          }

          50% {
            transform: translateY(18px) scale(1, .9) rotate(45deg);
            border-bottom-right-radius: 40px;
          }

          75% {
            transform: translateY(9px) rotate(67.5deg);
          }

          100% {
            transform: translateY(0) rotate(90deg);
          }
        }

        @keyframes shadow324 {

          0%,
            100% {
            transform: scale(1, 1);
          }

          50% {
            transform: scale(1.2, 1);
          }
        }
        \`}
      </style>
      <div className="jumping-loader" />
    </div>
  );
}

export default Loader;
`;function ji(){return e.jsx(k,{title:"Jumping Box Loader",code:Ai,className:"min-h-[250px]",children:e.jsxs("div",{className:"jumping-box-loader-wrapper",children:[e.jsx("style",{children:`
            .jumping-loader {
            width: 48px;
            height: 48px;
            margin: auto;
            position: relative;
            }

            .jumping-loader:before {
            content: '';
            width: 48px;
            height: 5px;
            background: #f0808050;
            position: absolute;
            top: 60px;
            left: 0;
            border-radius: 50%;
            animation: shadow324 0.5s linear infinite;
            }

            .jumping-loader:after {
            content: '';
            width: 100%;
            height: 100%;
            background: #f08080;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 4px;
            animation: jump7456 0.5s linear infinite;
            }

            @keyframes jump7456 {
            15% {
                border-bottom-right-radius: 3px;
            }

            25% {
                transform: translateY(9px) rotate(22.5deg);
            }

            50% {
                transform: translateY(18px) scale(1, .9) rotate(45deg);
                border-bottom-right-radius: 40px;
            }

            75% {
                transform: translateY(9px) rotate(67.5deg);
            }

            100% {
                transform: translateY(0) rotate(90deg);
            }
            }

            @keyframes shadow324 {

            0%,
                100% {
                transform: scale(1, 1);
            }

            50% {
                transform: scale(1.2, 1);
            }
            }
            `}),e.jsx("div",{className:"jumping-loader"})]})})}const _i=`import React from 'react';

const Loader = () => {
  return (
    <div className="word-spinner-wrapper">
      <style>
        {\`
        .spinnerContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .spinner {
          width: 56px;
          height: 56px;
          display: grid;
          border: 4px solid #0000;
          border-radius: 50%;
          border-right-color: #299fff;
          animation: tri-spinner 1s infinite linear;
        }

        .spinner::before,
        .spinner::after {
          content: "";
          grid-area: 1/1;
          margin: 2px;
          border: inherit;
          border-radius: 50%;
          animation: tri-spinner 2s infinite;
        }

        .spinner::after {
          margin: 8px;
          animation-duration: 3s;
        }

        @keyframes tri-spinner {
          100% {
            transform: rotate(1turn);
          }
        }

        .word-loader {
          color: #4a4a4a;
          font-family: "Poppins",sans-serif;
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

        .words {
          overflow: hidden;
        }

        .word {
          display: block;
          height: 100%;
          padding-left: 6px;
          color: #299fff;
          animation: cycle-words 5s infinite;
        }

        @keyframes cycle-words {
          10% {
            -webkit-transform: translateY(-105%);
            transform: translateY(-105%);
          }

          25% {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
          }

          35% {
            -webkit-transform: translateY(-205%);
            transform: translateY(-205%);
          }

          50% {
            -webkit-transform: translateY(-200%);
            transform: translateY(-200%);
          }

          60% {
            -webkit-transform: translateY(-305%);
            transform: translateY(-305%);
          }

          75% {
            -webkit-transform: translateY(-300%);
            transform: translateY(-300%);
          }

          85% {
            -webkit-transform: translateY(-405%);
            transform: translateY(-405%);
          }

          100% {
            -webkit-transform: translateY(-400%);
            transform: translateY(-400%);
          }
        }
        \`}
      </style>
      <div className="spinnerContainer">
        <div className="spinner" />
        <div className="word-loader">
          <p>loading</p>
          <div className="words">
            <span className="word">posts</span>
            <span className="word">images</span>
            <span className="word">followers</span>
            <span className="word">hashtags</span>
            <span className="word">posts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
`;function Ni(){return e.jsx(k,{title:"Word Spinner Loader",code:_i,className:"min-h-[250px]",children:e.jsxs("div",{className:"word-spinner-wrapper",children:[e.jsx("style",{children:`
            .spinnerContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            }

            .spinner {
            width: 56px;
            height: 56px;
            display: grid;
            border: 4px solid #0000;
            border-radius: 50%;
            border-right-color: #299fff;
            animation: tri-spinner 1s infinite linear;
            }

            .spinner::before,
            .spinner::after {
            content: "";
            grid-area: 1/1;
            margin: 2px;
            border: inherit;
            border-radius: 50%;
            animation: tri-spinner 2s infinite;
            }

            .spinner::after {
            margin: 8px;
            animation-duration: 3s;
            }

            @keyframes tri-spinner {
            100% {
                transform: rotate(1turn);
            }
            }

            .word-loader {
            color: #4a4a4a;
            font-family: "Poppins",sans-serif;
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

            .words {
            overflow: hidden;
            }

            .word {
            display: block;
            height: 100%;
            padding-left: 6px;
            color: #299fff;
            animation: cycle-words 5s infinite;
            }

            @keyframes cycle-words {
            10% {
                -webkit-transform: translateY(-105%);
                transform: translateY(-105%);
            }

            25% {
                -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
            }

            35% {
                -webkit-transform: translateY(-205%);
                transform: translateY(-205%);
            }

            50% {
                -webkit-transform: translateY(-200%);
                transform: translateY(-200%);
            }

            60% {
                -webkit-transform: translateY(-305%);
                transform: translateY(-305%);
            }

            75% {
                -webkit-transform: translateY(-300%);
                transform: translateY(-300%);
            }

            85% {
                -webkit-transform: translateY(-405%);
                transform: translateY(-405%);
            }

            100% {
                -webkit-transform: translateY(-400%);
                transform: translateY(-400%);
            }
            }
            `}),e.jsxs("div",{className:"spinnerContainer",children:[e.jsx("div",{className:"spinner"}),e.jsxs("div",{className:"word-loader",children:[e.jsx("p",{children:"loading"}),e.jsxs("div",{className:"words",children:[e.jsx("span",{className:"word",children:"posts"}),e.jsx("span",{className:"word",children:"images"}),e.jsx("span",{className:"word",children:"followers"}),e.jsx("span",{className:"word",children:"hashtags"}),e.jsx("span",{className:"word",children:"posts"})]})]})]})]})})}const Ci=`import React from 'react';

const Button = () => {
  return (
    <div className="share-button-wrapper">
      <style>
        {\`
        .share-btn {
          width: 130px;
          height: 40px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          border: 1px solid black;
          color: black;
          cursor: pointer;
        }

        .share-btn,
        .share-socials {
          border-radius: 20px;
          background-color: transparent;
          filter: drop-shadow(1px 1px 3px rgba(122, 122, 122, 0.808));
        }

        .share-socials {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          list-style: none;
          top: 0;
          left: 0;
          transition: .2s linear;
          opacity: 0;
          visibility: hidden;
          padding: 0;
          margin: 0;
        }

        .share-btn:hover > .share-socials {
          opacity: 1;
          visibility: visible;
          top: -120%;
        }
        \`}
      </style>
      <button className="share-btn">
        Share 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20px" width="20px">
          <path strokeLinecap="round" strokeWidth={2} stroke="#000000" d="M15.2141 7.39294L8.68387 10.6581M8.68387 10.6581C8.19134 9.67492 7.17449 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C7.17449 15 8.19134 14.3251 8.68387 13.3419M8.68387 10.6581C8.88616 11.0619 9 11.5176 9 12C9 12.4824 8.88616 12.9381 8.68387 13.3419M15.2141 16.6071L8.68387 13.3419M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" />
        </svg>
        <ul className="share-socials">
          <li>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 -4 48 48" height="20px" width="20px">
              <g fillRule="evenodd" fill="none" strokeWidth={1} stroke="none" id="Icons">
                <g fill="#00AAEC" transform="translate(-300.000000, -164.000000)" id="Color-">
                  <path id="Twitter" d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283">
                  </path>
                </g>
              </g>
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" height="20px" width="20px">
              <rect fill="url(#paint0_radial_87_7153)" rx={6} height={28} width={28} y={2} x={2} />
              <rect fill="url(#paint1_radial_87_7153)" rx={6} height={28} width={28} y={2} x={2} />
              <rect fill="url(#paint2_radial_87_7153)" rx={6} height={28} width={28} y={2} x={2} />
              <path fill="white" d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" />
              <path fill="white" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" clipRule="evenodd" fillRule="evenodd" />
              <path fill="white" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" clipRule="evenodd" fillRule="evenodd" />
              <defs>
                <radialGradient gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)" gradientUnits="userSpaceOnUse" r={1} cy={0} cx={0} id="paint0_radial_87_7153">
                  <stop stopColor="#B13589" />
                  <stop stopColor="#C62F94" offset="0.79309" />
                  <stop stopColor="#8A3AC8" offset={1} />
                </radialGradient>
                <radialGradient gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)" gradientUnits="userSpaceOnUse" r={1} cy={0} cx={0} id="paint1_radial_87_7153">
                  <stop stopColor="#E0E8B7" />
                  <stop stopColor="#FB8A2E" offset="0.444662" />
                  <stop stopColor="#E2425C" offset="0.71474" />
                  <stop stopOpacity={0} stopColor="#E2425C" offset={1} />
                </radialGradient>
                <radialGradient gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)" gradientUnits="userSpaceOnUse" r={1} cy={0} cx={0} id="paint2_radial_87_7153">
                  <stop stopColor="#406ADC" offset="0.156701" />
                  <stop stopColor="#6A45BE" offset="0.467799" />
                  <stop stopOpacity={0} stopColor="#6A45BE" offset={1} />
                </radialGradient>
              </defs>
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" height="20px" width="20px">
              <circle fill="url(#paint0_linear_87_7208)" r={14} cy={16} cx={16} />
              <path fill="white" d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" y2="29.917" x2={16} y1={2} x1={16} id="paint0_linear_87_7208">
                  <stop stopColor="#18ACFE" />
                  <stop stopColor="#0163E0" offset={1} />
                </linearGradient>
              </defs>
            </svg>
          </li>
        </ul>
      </button>
    </div>
  );
}

export default Button;
`;function zi(){return e.jsx(k,{title:"Share Button",code:Ci,className:"min-h-[250px]",children:e.jsxs("div",{className:"share-button-wrapper",children:[e.jsx("style",{children:`
                .share-btn {
                    width: 130px;
                    height: 40px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    border: 1px solid black;
                    color: black;
                    cursor: pointer;
                }

                .share-btn,
                .share-socials {
                    border-radius: 20px;
                    background-color: transparent;
                    filter: drop-shadow(1px 1px 3px rgba(122, 122, 122, 0.808));
                }

                .share-socials {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    list-style: none;
                    top: 0;
                    left: 0;
                    transition: .2s linear;
                    opacity: 0;
                    visibility: hidden;
                    padding: 0;
                    margin: 0;
                }

                .share-btn:hover > .share-socials {
                    opacity: 1;
                    visibility: visible;
                    top: -120%;
                }
                `}),e.jsxs("button",{className:"share-btn",children:["Share",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",height:"20px",width:"20px",children:e.jsx("path",{strokeLinecap:"round",strokeWidth:2,stroke:"#000000",d:"M15.2141 7.39294L8.68387 10.6581M8.68387 10.6581C8.19134 9.67492 7.17449 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C7.17449 15 8.19134 14.3251 8.68387 13.3419M8.68387 10.6581C8.88616 11.0619 9 11.5176 9 12C9 12.4824 8.88616 12.9381 8.68387 13.3419M15.2141 16.6071L8.68387 13.3419M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"})}),e.jsxs("ul",{className:"share-socials",children:[e.jsx("li",{children:e.jsx("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 -4 48 48",height:"20px",width:"20px",children:e.jsx("g",{fillRule:"evenodd",fill:"none",strokeWidth:1,stroke:"none",id:"Icons",children:e.jsx("g",{fill:"#00AAEC",transform:"translate(-300.000000, -164.000000)",id:"Color-",children:e.jsx("path",{id:"Twitter",d:"M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"})})})})}),e.jsx("li",{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32",height:"20px",width:"20px",children:[e.jsx("rect",{fill:"url(#paint0_radial_87_7153)",rx:6,height:28,width:28,y:2,x:2}),e.jsx("rect",{fill:"url(#paint1_radial_87_7153)",rx:6,height:28,width:28,y:2,x:2}),e.jsx("rect",{fill:"url(#paint2_radial_87_7153)",rx:6,height:28,width:28,y:2,x:2}),e.jsx("path",{fill:"white",d:"M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"}),e.jsx("path",{fill:"white",d:"M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z",clipRule:"evenodd",fillRule:"evenodd"}),e.jsx("path",{fill:"white",d:"M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z",clipRule:"evenodd",fillRule:"evenodd"}),e.jsxs("defs",{children:[e.jsxs("radialGradient",{gradientTransform:"translate(12 23) rotate(-55.3758) scale(25.5196)",gradientUnits:"userSpaceOnUse",r:1,cy:0,cx:0,id:"paint0_radial_87_7153",children:[e.jsx("stop",{stopColor:"#B13589"}),e.jsx("stop",{stopColor:"#C62F94",offset:"0.79309"}),e.jsx("stop",{stopColor:"#8A3AC8",offset:1})]}),e.jsxs("radialGradient",{gradientTransform:"translate(11 31) rotate(-65.1363) scale(22.5942)",gradientUnits:"userSpaceOnUse",r:1,cy:0,cx:0,id:"paint1_radial_87_7153",children:[e.jsx("stop",{stopColor:"#E0E8B7"}),e.jsx("stop",{stopColor:"#FB8A2E",offset:"0.444662"}),e.jsx("stop",{stopColor:"#E2425C",offset:"0.71474"}),e.jsx("stop",{stopOpacity:0,stopColor:"#E2425C",offset:1})]}),e.jsxs("radialGradient",{gradientTransform:"translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)",gradientUnits:"userSpaceOnUse",r:1,cy:0,cx:0,id:"paint2_radial_87_7153",children:[e.jsx("stop",{stopColor:"#406ADC",offset:"0.156701"}),e.jsx("stop",{stopColor:"#6A45BE",offset:"0.467799"}),e.jsx("stop",{stopOpacity:0,stopColor:"#6A45BE",offset:1})]})]})]})}),e.jsx("li",{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32",height:"20px",width:"20px",children:[e.jsx("circle",{fill:"url(#paint0_linear_87_7208)",r:14,cy:16,cx:16}),e.jsx("path",{fill:"white",d:"M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"}),e.jsx("defs",{children:e.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",y2:"29.917",x2:16,y1:2,x1:16,id:"paint0_linear_87_7208",children:[e.jsx("stop",{stopColor:"#18ACFE"}),e.jsx("stop",{stopColor:"#0163E0",offset:1})]})})]})})]})]})]})})}const Li=`import React from 'react';

const Button = () => {
  return (
    <div className="payment-button-wrapper">
      <style>
        {\`
        .payment-button {
          text-decoration: none;
          line-height: 1;
          border-radius: 1.5rem;
          overflow: hidden;
          position: relative;
          box-shadow: 10px 10px 20px rgba(0,0,0,.05);
          background-color: #fff;
          color: #121212;
          border: none;
          cursor: pointer;
        }

        .payment-button-decor {
          position: absolute;
          inset: 0;
          background-color: var(--clr);
          transform: translateX(-100%);
          transition: transform .3s;
          z-index: 0;
        }

        .payment-button-content {
          display: flex;
          align-items: center;
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .payment-button__icon {
          width: 48px;
          height: 40px;
          background-color: var(--clr);
          display: grid;
          place-items: center;
        }

        .payment-button__text {
          display: inline-block;
          transition: color .2s;
          padding: 2px 1.5rem 2px;
          padding-left: .75rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 150px;
        }

        .payment-button:hover .payment-button__text {
          color: #fff;
        }

        .payment-button:hover .payment-button-decor {
          transform: translate(0);
        }
        \`}
      </style>
      <button className="payment-button" style={{ "--clr": "#00ad54" } as React.CSSProperties}>
        <span className="payment-button-decor" />
        <div className="payment-button-content">
          <div className="payment-button__icon">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width={24}>
              <circle opacity="0.5" cx={25} cy={25} r={23} fill="url(#icon-payments-cat_svg__paint0_linear_1141_21101)" />
              <mask id="icon-payments-cat_svg__a" fill="#fff">
                <path fillRule="evenodd" clipRule="evenodd" d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z">
                </path>
              </mask>
              <path fillRule="evenodd" clipRule="evenodd" d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z" fill="#fff" />
              <path d="M25.958 20.962l-1.47-1.632 1.47 1.632zm2.067.109l-1.632 1.469 1.632-1.469zm-.109 2.068l-1.469-1.633 1.47 1.633zm-5.154 4.638l-1.469-1.632 1.469 1.632zm-.276 1.841l-1.883 1.13 1.883-1.13zM34.42 15.93l-2.084-.695 2.084.695zm-19.725 6.42l18.568-6.189-1.39-4.167-18.567 6.19 1.389 4.166zm5.265 1.75l-5.12-3.072-2.26 3.766 5.12 3.072 2.26-3.766zm2.072 3.348l5.394-4.854-2.938-3.264-5.394 4.854 2.938 3.264zm5.394-4.854a.732.732 0 01-1.034-.054l3.265-2.938a3.66 3.66 0 00-5.17-.272l2.939 3.265zm-1.034-.054a.732.732 0 01.054-1.034l2.938 3.265a3.66 3.66 0 00.273-5.169l-3.265 2.938zm.054-1.034l-5.154 4.639 2.938 3.264 5.154-4.638-2.938-3.265zm1.023 12.152l-3.101-5.17-3.766 2.26 3.101 5.17 3.766-2.26zm4.867-18.423l-6.189 18.568 4.167 1.389 6.19-18.568-4.168-1.389zm-8.633 20.682c1.61 2.682 5.622 2.241 6.611-.725l-4.167-1.39a.732.732 0 011.322-.144l-3.766 2.26zm-6.003-8.05a3.66 3.66 0 004.332-.419l-2.938-3.264a.732.732 0 01.866-.084l-2.26 3.766zm3.592-1.722a3.66 3.66 0 00-.69 4.603l3.766-2.26c.18.301.122.687-.138.921l-2.938-3.264zm11.97-9.984a.732.732 0 01-.925-.926l4.166 1.389c.954-2.861-1.768-5.583-4.63-4.63l1.39 4.167zm-19.956 2.022c-2.967.99-3.407 5.003-.726 6.611l2.26-3.766a.732.732 0 01-.145 1.322l-1.39-4.167z" fill="#fff" mask="url(#icon-payments-cat_svg__a)" />
              <defs>
                <linearGradient id="icon-payments-cat_svg__paint0_linear_1141_21101" x1={25} y1={2} x2={25} y2={48} gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity="0.71" />
                  <stop offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="payment-button__text">Payments</span>
        </div>
      </button>
    </div>
  );
}

export default Button;
`;function Mi(){return e.jsx(k,{title:"Payment Button",code:Li,className:"min-h-[250px]",children:e.jsxs("div",{className:"payment-button-wrapper",children:[e.jsx("style",{children:`
            .payment-button {
              text-decoration: none;
              line-height: 1;
              border-radius: 1.5rem;
              overflow: hidden;
              position: relative;
              box-shadow: 10px 10px 20px rgba(0,0,0,.05);
              background-color: #fff;
              color: #121212;
              border: none;
              cursor: pointer;
            }

            .payment-button-decor {
              position: absolute;
              inset: 0;
              background-color: var(--clr);
              transform: translateX(-100%);
              transition: transform .3s;
              z-index: 0;
            }

            .payment-button-content {
              display: flex;
              align-items: center;
              font-weight: 600;
              position: relative;
              overflow: hidden;
            }

            .payment-button__icon {
              width: 48px;
              height: 40px;
              background-color: var(--clr);
              display: grid;
              place-items: center;
            }

            .payment-button__text {
              display: inline-block;
              transition: color .2s;
              padding: 2px 1.5rem 2px;
              padding-left: .75rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              max-width: 150px;
            }

            .payment-button:hover .payment-button__text {
              color: #fff;
            }

            .payment-button:hover .payment-button-decor {
              transform: translate(0);
            }
            `}),e.jsxs("button",{className:"payment-button",style:{"--clr":"#00ad54"},children:[e.jsx("span",{className:"payment-button-decor"}),e.jsxs("div",{className:"payment-button-content",children:[e.jsx("div",{className:"payment-button__icon",children:e.jsxs("svg",{viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:24,children:[e.jsx("circle",{opacity:"0.5",cx:25,cy:25,r:23,fill:"url(#icon-payments-cat_svg__paint0_linear_1141_21101)"}),e.jsx("mask",{id:"icon-payments-cat_svg__a",fill:"#fff",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"})}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z",fill:"#fff"}),e.jsx("path",{d:"M25.958 20.962l-1.47-1.632 1.47 1.632zm2.067.109l-1.632 1.469 1.632-1.469zm-.109 2.068l-1.469-1.633 1.47 1.633zm-5.154 4.638l-1.469-1.632 1.469 1.632zm-.276 1.841l-1.883 1.13 1.883-1.13zM34.42 15.93l-2.084-.695 2.084.695zm-19.725 6.42l18.568-6.189-1.39-4.167-18.567 6.19 1.389 4.166zm5.265 1.75l-5.12-3.072-2.26 3.766 5.12 3.072 2.26-3.766zm2.072 3.348l5.394-4.854-2.938-3.264-5.394 4.854 2.938 3.264zm5.394-4.854a.732.732 0 01-1.034-.054l3.265-2.938a3.66 3.66 0 00-5.17-.272l2.939 3.265zm-1.034-.054a.732.732 0 01.054-1.034l2.938 3.265a3.66 3.66 0 00.273-5.169l-3.265 2.938zm.054-1.034l-5.154 4.639 2.938 3.264 5.154-4.638-2.938-3.265zm1.023 12.152l-3.101-5.17-3.766 2.26 3.101 5.17 3.766-2.26zm4.867-18.423l-6.189 18.568 4.167 1.389 6.19-18.568-4.168-1.389zm-8.633 20.682c1.61 2.682 5.622 2.241 6.611-.725l-4.167-1.39a.732.732 0 011.322-.144l-3.766 2.26zm-6.003-8.05a3.66 3.66 0 004.332-.419l-2.938-3.264a.732.732 0 01.866-.084l-2.26 3.766zm3.592-1.722a3.66 3.66 0 00-.69 4.603l3.766-2.26c.18.301.122.687-.138.921l-2.938-3.264zm11.97-9.984a.732.732 0 01-.925-.926l4.166 1.389c.954-2.861-1.768-5.583-4.63-4.63l1.39 4.167zm-19.956 2.022c-2.967.99-3.407 5.003-.726 6.611l2.26-3.766a.732.732 0 01-.145 1.322l-1.39-4.167z",fill:"#fff",mask:"url(#icon-payments-cat_svg__a)"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"icon-payments-cat_svg__paint0_linear_1141_21101",x1:25,y1:2,x2:25,y2:48,gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#fff",stopOpacity:"0.71"}),e.jsx("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]})}),e.jsx("span",{className:"payment-button__text",children:"Payments"})]})]})]})})}const Bi=`import React from 'react';

const Button = () => {
  return (
    <div className="credits-button-wrapper">
      <style>
        {\`
        .credits-btn {
          --h-button: 48px;
          --w-button: 102px;
          --round: 0.75rem;
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.25s ease;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(223, 113, 255, 0.8) 0%,
              rgba(223, 113, 255, 0) 100%
            ),
            linear-gradient(0deg, #7a5af8, #7a5af8);
          border-radius: var(--round);
          border: none;
          outline: none;
          padding: 12px 18px;
        }
        .credits-btn::before,
        .credits-btn::after {
          content: "";
          position: absolute;
          inset: var(--space);
          transition: all 0.5s ease-in-out;
          border-radius: calc(var(--round) - var(--space));
          z-index: 0;
        }
        .credits-btn::before {
          --space: 1px;
          background: linear-gradient(
            177.95deg,
            rgba(255, 255, 255, 0.19) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        .credits-btn::after {
          --space: 2px;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(223, 113, 255, 0.8) 0%,
              rgba(223, 113, 255, 0) 100%
            ),
            linear-gradient(0deg, #7a5af8, #7a5af8);
        }
        .credits-btn:active {
          transform: scale(0.95);
        }

        .credits-fold {
          z-index: 1;
          position: absolute;
          top: 0;
          right: 0;
          height: 1rem;
          width: 1rem;
          display: inline-block;
          transition: all 0.5s ease-in-out;
          background: radial-gradient(
            100% 75% at 55%,
            rgba(223, 113, 255, 0.8) 0%,
            rgba(223, 113, 255, 0) 100%
          );
          box-shadow: 0 0 3px black;
          border-bottom-left-radius: 0.5rem;
          border-top-right-radius: var(--round);
        }
        .credits-fold::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 150%;
          height: 150%;
          transform: rotate(45deg) translateX(0%) translateY(-18px);
          background-color: #e8e8e8;
          pointer-events: none;
        }
        .credits-btn:hover .credits-fold {
          margin-top: -1rem;
          margin-right: -1rem;
        }

        .credits-points-wrapper {
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .credits-points-wrapper .credits-point {
          bottom: -10px;
          position: absolute;
          animation: credits-floating-points infinite ease-in-out;
          pointer-events: none;
          width: 2px;
          height: 2px;
          background-color: #fff;
          border-radius: 9999px;
        }
        @keyframes credits-floating-points {
          0% {
            transform: translateY(0);
          }
          85% {
            opacity: 0;
          }
          100% {
            transform: translateY(-55px);
            opacity: 0;
          }
        }
        .credits-points-wrapper .credits-point:nth-child(1) {
          left: 10%;
          opacity: 1;
          animation-duration: 2.35s;
          animation-delay: 0.2s;
        }
        .credits-points-wrapper .credits-point:nth-child(2) {
          left: 30%;
          opacity: 0.7;
          animation-duration: 2.5s;
          animation-delay: 0.5s;
        }
        .credits-points-wrapper .credits-point:nth-child(3) {
          left: 25%;
          opacity: 0.8;
          animation-duration: 2.2s;
          animation-delay: 0.1s;
        }
        .credits-points-wrapper .credits-point:nth-child(4) {
          left: 44%;
          opacity: 0.6;
          animation-duration: 2.05s;
        }
        .credits-points-wrapper .credits-point:nth-child(5) {
          left: 50%;
          opacity: 1;
          animation-duration: 1.9s;
        }
        .credits-points-wrapper .credits-point:nth-child(6) {
          left: 75%;
          opacity: 0.5;
          animation-duration: 1.5s;
          animation-delay: 1.5s;
        }
        .credits-points-wrapper .credits-point:nth-child(7) {
          left: 88%;
          opacity: 0.9;
          animation-duration: 2.2s;
          animation-delay: 0.2s;
        }
        .credits-points-wrapper .credits-point:nth-child(8) {
          left: 58%;
          opacity: 0.8;
          animation-duration: 2.25s;
          animation-delay: 0.2s;
        }
        .credits-points-wrapper .credits-point:nth-child(9) {
          left: 98%;
          opacity: 0.6;
          animation-duration: 2.6s;
          animation-delay: 0.1s;
        }
        .credits-points-wrapper .credits-point:nth-child(10) {
          left: 65%;
          opacity: 1;
          animation-duration: 2.5s;
          animation-delay: 0.2s;
        }

        .credits-inner {
          z-index: 2;
          gap: 6px;
          position: relative;
          width: 100%;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          transition: color 0.2s ease-in-out;
        }

        .credits-inner svg.credits-icon {
          width: 18px;
          height: 18px;
          transition: fill 0.1s linear;
        }

        .credits-btn:focus svg.credits-icon {
          fill: white;
        }
        .credits-btn:hover svg.credits-icon {
          fill: transparent;
          animation:
            credits-dasharray 1s linear forwards,
            credits-filled 0.1s linear forwards 0.95s;
        }
        @keyframes credits-dasharray {
          from {
            stroke-dasharray: 0 0 0 0;
          }
          to {
            stroke-dasharray: 68 68 0 0;
          }
        }
        @keyframes credits-filled {
          to {
            fill: white;
          }
        }
        \`}
      </style>
      <button type="button" className="credits-btn">
        <span className="credits-fold" />
        <div className="credits-points-wrapper">
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
          <i className="credits-point" />
        </div>
        <span className="credits-inner">
          <svg className="credits-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
          </svg>
          Credits
        </span>
      </button>
    </div>
  );
}

export default Button;
`;function Ri(){return e.jsx(k,{title:"Credits Button",code:Bi,className:"min-h-[250px]",children:e.jsxs("div",{className:"credits-button-wrapper",children:[e.jsx("style",{children:`
            .credits-btn {
              --h-button: 48px;
              --w-button: 102px;
              --round: 0.75rem;
              cursor: pointer;
              position: relative;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              transition: all 0.25s ease;
              background: radial-gradient(
                  65.28% 65.28% at 50% 100%,
                  rgba(223, 113, 255, 0.8) 0%,
                  rgba(223, 113, 255, 0) 100%
                ),
                linear-gradient(0deg, #7a5af8, #7a5af8);
              border-radius: var(--round);
              border: none;
              outline: none;
              padding: 12px 18px;
            }
            .credits-btn::before,
            .credits-btn::after {
              content: "";
              position: absolute;
              inset: var(--space);
              transition: all 0.5s ease-in-out;
              border-radius: calc(var(--round) - var(--space));
              z-index: 0;
            }
            .credits-btn::before {
              --space: 1px;
              background: linear-gradient(
                177.95deg,
                rgba(255, 255, 255, 0.19) 0%,
                rgba(255, 255, 255, 0) 100%
              );
            }
            .credits-btn::after {
              --space: 2px;
              background: radial-gradient(
                  65.28% 65.28% at 50% 100%,
                  rgba(223, 113, 255, 0.8) 0%,
                  rgba(223, 113, 255, 0) 100%
                ),
                linear-gradient(0deg, #7a5af8, #7a5af8);
            }
            .credits-btn:active {
              transform: scale(0.95);
            }

            .credits-fold {
              z-index: 1;
              position: absolute;
              top: 0;
              right: 0;
              height: 1rem;
              width: 1rem;
              display: inline-block;
              transition: all 0.5s ease-in-out;
              background: radial-gradient(
                100% 75% at 55%,
                rgba(223, 113, 255, 0.8) 0%,
                rgba(223, 113, 255, 0) 100%
              );
              box-shadow: 0 0 3px black;
              border-bottom-left-radius: 0.5rem;
              border-top-right-radius: var(--round);
            }
            .credits-fold::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              width: 150%;
              height: 150%;
              transform: rotate(45deg) translateX(0%) translateY(-18px);
              background-color: #e8e8e8;
              pointer-events: none;
            }
            .credits-btn:hover .credits-fold {
              margin-top: -1rem;
              margin-right: -1rem;
            }

            .credits-points-wrapper {
              overflow: hidden;
              width: 100%;
              height: 100%;
              pointer-events: none;
              position: absolute;
              z-index: 1;
            }

            .credits-points-wrapper .credits-point {
              bottom: -10px;
              position: absolute;
              animation: credits-floating-points infinite ease-in-out;
              pointer-events: none;
              width: 2px;
              height: 2px;
              background-color: #fff;
              border-radius: 9999px;
            }
            @keyframes credits-floating-points {
              0% {
                transform: translateY(0);
              }
              85% {
                opacity: 0;
              }
              100% {
                transform: translateY(-55px);
                opacity: 0;
              }
            }
            .credits-points-wrapper .credits-point:nth-child(1) {
              left: 10%;
              opacity: 1;
              animation-duration: 2.35s;
              animation-delay: 0.2s;
            }
            .credits-points-wrapper .credits-point:nth-child(2) {
              left: 30%;
              opacity: 0.7;
              animation-duration: 2.5s;
              animation-delay: 0.5s;
            }
            .credits-points-wrapper .credits-point:nth-child(3) {
              left: 25%;
              opacity: 0.8;
              animation-duration: 2.2s;
              animation-delay: 0.1s;
            }
            .credits-points-wrapper .credits-point:nth-child(4) {
              left: 44%;
              opacity: 0.6;
              animation-duration: 2.05s;
            }
            .credits-points-wrapper .credits-point:nth-child(5) {
              left: 50%;
              opacity: 1;
              animation-duration: 1.9s;
            }
            .credits-points-wrapper .credits-point:nth-child(6) {
              left: 75%;
              opacity: 0.5;
              animation-duration: 1.5s;
              animation-delay: 1.5s;
            }
            .credits-points-wrapper .credits-point:nth-child(7) {
              left: 88%;
              opacity: 0.9;
              animation-duration: 2.2s;
              animation-delay: 0.2s;
            }
            .credits-points-wrapper .credits-point:nth-child(8) {
              left: 58%;
              opacity: 0.8;
              animation-duration: 2.25s;
              animation-delay: 0.2s;
            }
            .credits-points-wrapper .credits-point:nth-child(9) {
              left: 98%;
              opacity: 0.6;
              animation-duration: 2.6s;
              animation-delay: 0.1s;
            }
            .credits-points-wrapper .credits-point:nth-child(10) {
              left: 65%;
              opacity: 1;
              animation-duration: 2.5s;
              animation-delay: 0.2s;
            }

            .credits-inner {
              z-index: 2;
              gap: 6px;
              position: relative;
              width: 100%;
              color: white;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              font-weight: 500;
              line-height: 1.5;
              transition: color 0.2s ease-in-out;
            }

            .credits-inner svg.credits-icon {
              width: 18px;
              height: 18px;
              transition: fill 0.1s linear;
            }

            .credits-btn:focus svg.credits-icon {
              fill: white;
            }
            .credits-btn:hover svg.credits-icon {
              fill: transparent;
              animation:
                credits-dasharray 1s linear forwards,
                credits-filled 0.1s linear forwards 0.95s;
            }
            @keyframes credits-dasharray {
              from {
                stroke-dasharray: 0 0 0 0;
              }
              to {
                stroke-dasharray: 68 68 0 0;
              }
            }
            @keyframes credits-filled {
              to {
                fill: white;
              }
            }
            `}),e.jsxs("button",{type:"button",className:"credits-btn",children:[e.jsx("span",{className:"credits-fold"}),e.jsxs("div",{className:"credits-points-wrapper",children:[e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"}),e.jsx("i",{className:"credits-point"})]}),e.jsxs("span",{className:"credits-inner",children:[e.jsx("svg",{className:"credits-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",children:e.jsx("polyline",{points:"13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"})}),"Credits"]})]})]})})}const Si=`import React from 'react';

const Button = () => {
  return (
    <div className="openai-button-wrapper">
      <style>
        {\`
        .openai-button-container {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        /* Common styles for both buttons */
        .openai-brutalist-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 142px;
          height: 142px;
          color: #e5dede;
          font-weight: bold;
          text-decoration: none;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        /* Styles for the first button */
        .openai-button-1 {
          background-color: #063525;
          border: 3px solid #42c498;
          border-radius: 12px;
          box-shadow: 4px 4px 1px #000000;
        }

        .openai-button-1:hover {
          background-color: #1a5c46;
          border-color: #030504;
          transform: translate(-6px, -6px) rotate(1deg);
          box-shadow: 10px 10px 0 #000000, 15px 15px 20px rgba(64, 164, 122, 0.2);
        }

        .openai-button-1::before,
        .openai-button-1::after {
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: 0.6s;
        }

        .openai-button-1::before {
          left: -100%;
        }
        .openai-button-1::after {
          left: 100%;
        }

        .openai-button-1:hover::before {
          animation: openai-swipeRight 1.5s infinite;
        }
        .openai-button-1:hover::after {
          animation: openai-swipeLeft 1.5s infinite;
        }

        @keyframes openai-swipeRight {
          100% {
            transform: translateX(200%) skew(-45deg);
          }
        }

        @keyframes openai-swipeLeft {
          100% {
            transform: translateX(-200%) skew(-45deg);
          }
        }

        /* Hover effects */
        .openai-brutalist-button:hover .openai-logo-container {
          transform: translateY(-10px);
        }

        .openai-brutalist-button:hover .openai-icon-svg {
          width: 40px;
          height: 40px;
        }

        /* Styles for the OpenAI logo and text */
        .openai-logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          z-index: 3;
        }

        .openai-icon-svg {
          width: 64px;
          height: 64px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .openai-button-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.2;
          text-align: center;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          z-index: 3;
        }

        .openai-button-text span:first-child {
          font-size: 12px;
          font-weight: normal;
        }

        .openai-button-text span:last-child {
          font-size: 16px;
        }

        /* Hover effects */
        .openai-brutalist-button:hover .openai-button-text {
          opacity: 1;
          max-height: 60px;
          margin-top: 8px;
        }

        /* Animation for the OpenAI logo */
        @keyframes openai-spin-and-zoom {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        .openai-brutalist-button:hover .openai-icon-svg {
          animation: openai-spin-and-zoom 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
        }

        .openai-brutalist-button:active .openai-icon-svg,
        .openai-brutalist-button:active .openai-button-text {
          transform: scale(0.95);
        }
        \`}
      </style>
      <div className="openai-button-container">
        <button className="openai-brutalist-button openai-button-1">
          <div className="openai-logo-container">
            <svg className="openai-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5907 8.3829 14.6108 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#10A37F" />
            </svg>
          </div>
          <div className="openai-button-text">
            <span>Powered By</span>
            <span>GPT-Omni</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Button;
`;function Ti(){return e.jsx(k,{title:"OpenAI Button",code:Si,className:"min-h-[250px]",children:e.jsxs("div",{className:"openai-button-wrapper",children:[e.jsx("style",{children:`
            .openai-button-container {
              display: flex;
              justify-content: center;
              gap: 20px;
            }

            /* Common styles for both buttons */
            .openai-brutalist-button {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 142px;
              height: 142px;
              color: #e5dede;
              font-weight: bold;
              text-decoration: none;
              position: relative;
              cursor: pointer;
              overflow: hidden;
              transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            }

            /* Styles for the first button */
            .openai-button-1 {
              background-color: #063525;
              border: 3px solid #42c498;
              border-radius: 12px;
              box-shadow: 4px 4px 1px #000000;
            }

            .openai-button-1:hover {
              background-color: #1a5c46;
              border-color: #030504;
              transform: translate(-6px, -6px) rotate(1deg);
              box-shadow: 10px 10px 0 #000000, 15px 15px 20px rgba(64, 164, 122, 0.2);
            }

            .openai-button-1::before,
            .openai-button-1::after {
              content: "";
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
              );
              transition: 0.6s;
            }

            .openai-button-1::before {
              left: -100%;
            }
            .openai-button-1::after {
              left: 100%;
            }

            .openai-button-1:hover::before {
              animation: openai-swipeRight 1.5s infinite;
            }
            .openai-button-1:hover::after {
              animation: openai-swipeLeft 1.5s infinite;
            }

            @keyframes openai-swipeRight {
              100% {
                transform: translateX(200%) skew(-45deg);
              }
            }

            @keyframes openai-swipeLeft {
              100% {
                transform: translateX(-200%) skew(-45deg);
              }
            }

            /* Hover effects */
            .openai-brutalist-button:hover .openai-logo-container {
              transform: translateY(-10px);
            }

            .openai-brutalist-button:hover .openai-icon-svg {
              width: 40px;
              height: 40px;
            }

            /* Styles for the OpenAI logo and text */
            .openai-logo-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
              z-index: 3;
            }

            .openai-icon-svg {
              width: 64px;
              height: 64px;
              transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            }

            .openai-button-text {
              display: flex;
              flex-direction: column;
              align-items: center;
              line-height: 1.2;
              text-align: center;
              opacity: 0;
              max-height: 0;
              overflow: hidden;
              transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
              z-index: 3;
            }

            .openai-button-text span:first-child {
              font-size: 12px;
              font-weight: normal;
            }

            .openai-button-text span:last-child {
              font-size: 16px;
            }

            /* Hover effects */
            .openai-brutalist-button:hover .openai-button-text {
              opacity: 1;
              max-height: 60px;
              margin-top: 8px;
            }

            /* Animation for the OpenAI logo */
            @keyframes openai-spin-and-zoom {
              0% {
                transform: rotate(0deg) scale(1);
              }
              50% {
                transform: rotate(180deg) scale(1.1);
              }
              100% {
                transform: rotate(360deg) scale(1);
              }
            }

            .openai-brutalist-button:hover .openai-icon-svg {
              animation: openai-spin-and-zoom 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
            }

            .openai-brutalist-button:active .openai-icon-svg,
            .openai-brutalist-button:active .openai-button-text {
              transform: scale(0.95);
            }
            `}),e.jsxs("button",{className:"openai-brutalist-button openai-button-1",children:[e.jsx("div",{className:"openai-logo-container",children:e.jsx("svg",{className:"openai-icon-svg",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5907 8.3829 14.6108 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",fill:"#10A37F"})})}),e.jsxs("div",{className:"openai-button-text",children:[e.jsx("span",{children:"Powered By"}),e.jsx("span",{children:"GPT-Omni"})]})]})]})})}const Yi=`// The code for this component is quite large due to SVGs. 
// Please copy the file content directly.
import React from 'react';

const Loader = () => {
  return (
    <div className="walking-man-wrapper">
      <style>
        {\`
        .walking-loader {
          scale: 0.75;
          position: relative;
          width: 200px;
          height: 200px;
          translate: 10px -20px;
        }
        .walking-loader svg {
          position: absolute;
          top: 0;
          left: 0;
        }
        .head {
          translate: 27px -30px;
          z-index: 3;
          animation: bob 1s infinite ease-in;
        }
        .bod {
          translate: 0px 30px;
          z-index: 3;
          animation: bob 1s infinite ease-in-out;
        }
        .legr {
          translate: 75px 135px;
          z-index: 0;
          animation: rstep 1s infinite ease-in;
        }
        .legr {
          animation-delay: 0.45s;
        }

        .legl {
          translate: 30px 155px;
          z-index: 3;
          animation: lstep 1s infinite ease-in;
        }

        @keyframes bob {
          0% {
            transform: translateY(0) rotate(3deg);
          }
          5% {
            transform: translateY(0) rotate(3deg);
          }
          25% {
            transform: translateY(5px) rotate(0deg);
          }
          50% {
            transform: translateY(0px) rotate(-3deg);
          }
          70% {
            transform: translateY(5px) rotate(0deg);
          }
          100% {
            transform: translateY(0) rotate(3deg);
          }
        }

        @keyframes lstep {
          0% {
            transform: translateY(0) rotate(-5deg);
          }
          33% {
            transform: translateY(-15px) translate(32px) rotate(35deg);
          }
          66% {
            transform: translateY(0) translate(25px) rotate(-25deg);
          }
          100% {
            transform: translateY(0) rotate(-5deg);
          }
        }

        @keyframes rstep {
          0% {
            transform: translateY(0) translate(0px) rotate(-5deg);
          }
          33% {
            transform: translateY(-10px) translate(30px) rotate(35deg);
          }
          66% {
            transform: translateY(0) translate(20px) rotate(-25deg);
          }
          100% {
            transform: translateY(0) translate(0px) rotate(-5deg);
          }
        }

        #gnd {
          translate: -140px 0;
          rotate: 10deg;
          z-index: -1;
          filter: blur(0.5px) drop-shadow(1px 3px 5px #000000);
          opacity: 0.25;
          animation: scroll 5s infinite linear;
        }

        @keyframes scroll {
          0% {
            transform: translateY(25px) translate(50px);
            opacity: 0;
          }
          33% {
            opacity: 0.25;
          }
          66% {
            opacity: 0.25;
          }
          to {
            transform: translateY(-50px) translate(-100px);
            opacity: 0;
          }
        }
        \`}
      </style>
      <div className="walking-loader">
        <svg className="legr" version="1.1" xmlns="http://www.w3.org/2000/svg" width="41.02537" height="64.85502" viewBox="0,0,41.02537,64.85502">
          {/* ... SVG content truncated for preview ... */}
        </svg>
        {/* ... other SVGs ... */}
      </div>
    </div>
  );
}

export default Loader;
`;function Zi(){return e.jsx(k,{title:"Walking Man",code:Yi,className:"min-h-[250px]",children:e.jsxs("div",{className:"walking-man-wrapper",children:[e.jsx("style",{children:`
            .walking-loader {
              scale: 0.75;
              position: relative;
              width: 200px;
              height: 200px;
              translate: 10px -20px;
            }
            .walking-loader svg {
              position: absolute;
              top: 0;
              left: 0;
            }
            .head {
              translate: 27px -30px;
              z-index: 3;
              animation: bob 1s infinite ease-in;
            }
            .bod {
              translate: 0px 30px;
              z-index: 3;
              animation: bob 1s infinite ease-in-out;
            }
            .legr {
              translate: 75px 135px;
              z-index: 0;
              animation: rstep 1s infinite ease-in;
            }
            .legr {
              animation-delay: 0.45s;
            }

            .legl {
              translate: 30px 155px;
              z-index: 3;
              animation: lstep 1s infinite ease-in;
            }

            @keyframes bob {
              0% {
                transform: translateY(0) rotate(3deg);
              }
              5% {
                transform: translateY(0) rotate(3deg);
              }
              25% {
                transform: translateY(5px) rotate(0deg);
              }
              50% {
                transform: translateY(0px) rotate(-3deg);
              }
              70% {
                transform: translateY(5px) rotate(0deg);
              }
              100% {
                transform: translateY(0) rotate(3deg);
              }
            }

            @keyframes lstep {
              0% {
                transform: translateY(0) rotate(-5deg);
              }
              33% {
                transform: translateY(-15px) translate(32px) rotate(35deg);
              }
              66% {
                transform: translateY(0) translate(25px) rotate(-25deg);
              }
              100% {
                transform: translateY(0) rotate(-5deg);
              }
            }

            @keyframes rstep {
              0% {
                transform: translateY(0) translate(0px) rotate(-5deg);
              }
              33% {
                transform: translateY(-10px) translate(30px) rotate(35deg);
              }
              66% {
                transform: translateY(0) translate(20px) rotate(-25deg);
              }
              100% {
                transform: translateY(0) translate(0px) rotate(-5deg);
              }
            }

            #gnd {
              translate: -140px 0;
              rotate: 10deg;
              z-index: -1;
              filter: blur(0.5px) drop-shadow(1px 3px 5px #000000);
              opacity: 0.25;
              animation: scroll 5s infinite linear;
            }

            @keyframes scroll {
              0% {
                transform: translateY(25px) translate(50px);
                opacity: 0;
              }
              33% {
                opacity: 0.25;
              }
              66% {
                opacity: 0.25;
              }
              to {
                transform: translateY(-50px) translate(-100px);
                opacity: 0;
              }
            }
            `}),e.jsxs("div",{className:"walking-loader",children:[e.jsx("svg",{className:"legl",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20.69332",height:"68.19944",viewBox:"0,0,20.69332,68.19944",children:e.jsx("g",{transform:"translate(-201.44063,-235.75466)",children:e.jsxs("g",{strokeMiterlimit:10,children:[e.jsx("path",{d:"M0,0",fill:"#ffffff",stroke:"none",strokeWidth:"0.5"}),e.jsx("path",{d:"M0,0",fillOpacity:"0.26667",fill:"#97affd",strokeOpacity:"0.48627",stroke:"#ffffff",strokeWidth:0}),e.jsx("path",{d:"M218.11971,301.20087c-2.20708,1.73229 -4.41416,0 -4.41416,0l-1.43017,-1.1437c-1.42954,-1.40829 -3.04351,-2.54728 -4.56954,-3.87927c-0.95183,-0.8308 -2.29837,-1.49883 -2.7652,-2.55433c-0.42378,-0.95815 0.14432,-2.02654 0.29355,-3.03399c0.41251,-2.78499 1.82164,-5.43386 2.41472,-8.22683c1.25895,-4.44509 2.73863,-8.98683 3.15318,-13.54796c0.22615,-2.4883 -0.21672,-5.0155 -0.00278,-7.50605c0.30636,-3.56649 1.24602,-7.10406 1.59992,-10.6738c0.29105,-2.93579 -0.00785,-5.9806 -0.00785,-8.93046c0,0 0,-2.44982 3.12129,-2.44982c3.12129,0 3.12129,2.44982 3.12129,2.44982c0,3.06839 0.28868,6.22201 -0.00786,9.27779c-0.34637,3.56935 -1.30115,7.10906 -1.59992,10.6738c-0.2103,2.50918 0.22586,5.05326 -0.00278,7.56284c-0.43159,4.7371 -1.94029,9.46317 -3.24651,14.07835c-0.47439,2.23403 -1.29927,4.31705 -2.05805,6.47156c-0.18628,0.52896 -0.1402,1.0974 -0.327,1.62624c-0.09463,0.26791 -0.64731,0.47816 -0.50641,0.73323c0.19122,0.34617 0.86423,0.3445 1.2346,0.58502c1.88637,1.22503 3.50777,2.79494 5.03,4.28305l0.96971,0.73991c0,0 2.20708,1.73229 0,3.46457z",fill:"none",stroke:"#191e2e",strokeWidth:7})]})})}),e.jsx("svg",{className:"legr",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"41.02537",height:"64.85502",viewBox:"0,0,41.02537,64.85502",children:e.jsx("g",{transform:"translate(-241.54137,-218.44347)",children:e.jsxs("g",{strokeMiterlimit:10,children:[e.jsx("path",{d:"M279.06674,279.42662c-2.27967,1.98991 -6.08116,0.58804 -6.08116,0.58804l-2.47264,-0.92915c-2.58799,-1.18826 -5.31176,-2.08831 -7.99917,-3.18902c-1.67622,-0.68654 -3.82471,-1.16116 -4.93147,-2.13229c-1.00468,-0.88156 -0.69132,-2.00318 -0.92827,-3.00935c-0.65501,-2.78142 0.12275,-5.56236 -0.287,-8.37565c-0.2181,-4.51941 -0.17458,-9.16283 -1.60696,-13.68334c-0.78143,-2.46614 -2.50162,-4.88125 -3.30086,-7.34796c-1.14452,-3.53236 -1.40387,-7.12078 -2.48433,-10.66266c-0.88858,-2.91287 -2.63779,-5.85389 -3.93351,-8.74177c0,0 -1.07608,-2.39835 3.22395,-2.81415c4.30003,-0.41581 2.41605,1.98254 2.41605,1.98254c1.34779,3.00392 3.13072,6.05282 4.06444,9.0839c1.09065,3.54049 1.33011,7.13302 2.48433,10.66266c0.81245,2.48448 2.5308,4.917 3.31813,7.40431c1.48619,4.69506 1.48366,9.52281 1.71137,14.21503c0.32776,2.25028 0.10631,4.39942 0.00736,6.60975c-0.02429,0.54266 0.28888,1.09302 0.26382,1.63563c-0.01269,0.27488 -0.68173,0.55435 -0.37558,0.78529c0.41549,0.31342 1.34191,0.22213 1.95781,0.40826c3.13684,0.94799 6.06014,2.26892 8.81088,3.52298l1.66093,0.59519c0,0 6.76155,1.40187 4.48187,3.39177z",fill:"none",stroke:"#000000",strokeWidth:7}),e.jsx("path",{d:"M0,0",fill:"#ffffff",stroke:"none",strokeWidth:"0.5"}),e.jsx("path",{d:"M0,0",fillOpacity:"0.26667",fill:"#97affd",strokeOpacity:"0.48627",stroke:"#ffffff",strokeWidth:0})]})})}),e.jsxs("div",{className:"bod",children:[e.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"144.10576",height:"144.91623",viewBox:"0,0,144.10576,144.91623",children:e.jsx("g",{transform:"translate(-164.41679,-112.94712)",children:e.jsxs("g",{strokeMiterlimit:10,children:[e.jsx("path",{d:"M166.9168,184.02633c0,-36.49454 35.0206,-66.07921 72.05288,-66.07921c37.03228,0 67.05288,29.58467 67.05288,66.07921c0,6.94489 -1.08716,13.63956 -3.10292,19.92772c-2.71464,8.46831 -7.1134,16.19939 -12.809,22.81158c-2.31017,2.68194 -7.54471,12.91599 -7.54471,12.91599c0,0 -5.46714,-1.18309 -8.44434,0.6266c-3.86867,2.35159 -10.95356,10.86714 -10.95356,10.86714c0,0 -6.96906,-3.20396 -9.87477,-2.58085c-2.64748,0.56773 -6.72538,5.77072 -6.72538,5.77072c0,0 -5.5023,-4.25969 -7.5982,-4.25969c-3.08622,0 -9.09924,3.48259 -9.09924,3.48259c0,0 -6.0782,-5.11244 -9.00348,-5.91884c-4.26461,-1.17561 -12.23343,0.75049 -12.23343,0.75049c0,0 -5.18164,-8.26065 -7.60688,-9.90388c-3.50443,-2.37445 -8.8271,-3.95414 -8.8271,-3.95414c0,0 -5.33472,-8.81718 -7.27019,-11.40895c-4.81099,-6.44239 -13.46422,-9.83437 -15.65729,-17.76175c-1.53558,-5.55073 -2.35527,-21.36472 -2.35527,-21.36472z",fill:"#191e2e",stroke:"#000000",strokeWidth:5,strokeLinecap:"butt"}),e.jsx("path",{d:"M167.94713,180c0,-37.03228 35.0206,-67.05288 72.05288,-67.05288c37.03228,0 67.05288,30.0206 67.05288,67.05288c0,7.04722 -1.08716,13.84053 -3.10292,20.22135c-2.71464,8.59309 -7.1134,16.43809 -12.809,23.14771c-2.31017,2.72146 -7.54471,13.1063 -7.54471,13.1063c0,0 -5.46714,-1.20052 -8.44434,0.63584c-3.86867,2.38624 -10.95356,11.02726 -10.95356,11.02726c0,0 -6.96906,-3.25117 -9.87477,-2.61888c-2.64748,0.5761 -6.72538,5.85575 -6.72538,5.85575c0,0 -5.5023,-4.32246 -7.5982,-4.32246c-3.08622,0 -9.09924,3.5339 -9.09924,3.5339c0,0 -6.0782,-5.18777 -9.00348,-6.00605c-4.26461,-1.19293 -12.23343,0.76155 -12.23343,0.76155c0,0 -5.18164,-8.38236 -7.60688,-10.04981c-3.50443,-2.40943 -8.8271,-4.0124 -8.8271,-4.0124c0,0 -5.33472,-8.9471 -7.27019,-11.57706c-4.81099,-6.53732 -13.46422,-9.97928 -15.65729,-18.02347c-1.53558,-5.63252 -2.35527,-21.67953 -2.35527,-21.67953z",fill:"#191e2e",stroke:"none",strokeWidth:0,strokeLinecap:"butt"}),e.jsx("path",{d:"M0,0",fill:"#ffffff",stroke:"none",strokeWidth:"0.5",strokeLinecap:"butt"}),e.jsx("path",{d:"M0,0",fillOpacity:"0.26667",fill:"#97affd",strokeOpacity:"0.48627",stroke:"#ffffff",strokeWidth:0,strokeLinecap:"butt"}),e.jsx("path",{d:"M216.22445,188.06994c0,0 1.02834,11.73245 -3.62335,21.11235c-4.65169,9.3799 -13.06183,10.03776 -13.06183,10.03776c0,0 7.0703,-3.03121 10.89231,-10.7381c4.34839,-8.76831 5.79288,-20.41201 5.79288,-20.41201z",fill:"none",stroke:"#2f3a50",strokeWidth:3,strokeLinecap:"round"})]})})}),e.jsx("svg",{className:"head",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"115.68559",height:"88.29441",viewBox:"0,0,115.68559,88.29441",children:e.jsx("g",{transform:"translate(-191.87889,-75.62023)",children:e.jsxs("g",{strokeMiterlimit:10,children:[e.jsx("path",{d:"M0,0",fill:"#ffffff",stroke:"none",strokeWidth:"0.5",strokeLinecap:"butt"}),e.jsx("path",{d:"M195.12889,128.77752c0,-26.96048 21.33334,-48.81626 47.64934,-48.81626c26.316,0 47.64935,21.85578 47.64935,48.81626c0,0.60102 -9.22352,20.49284 -9.22352,20.49284l-7.75885,0.35623l-7.59417,6.15039l-8.64295,-1.74822l-11.70703,6.06119l-6.38599,-4.79382l-6.45999,2.36133l-7.01451,-7.38888l-8.11916,1.29382l-6.19237,-6.07265l-7.6263,-1.37795l-4.19835,-7.87062l-4.24236,-4.16907c0,0 -0.13314,-2.0999 -0.13314,-3.29458z",fill:"none",stroke:"#2f3a50",strokeWidth:6,strokeLinecap:"butt"}),e.jsx("path",{d:"M195.31785,124.43649c0,-26.96048 21.33334,-48.81626 47.64934,-48.81626c26.316,0 47.64935,21.85578 47.64935,48.81626c0,1.03481 -0.08666,2.8866 -0.08666,2.8866c0,0 16.8538,15.99287 16.21847,17.23929c-0.66726,1.30905 -23.05667,-4.14265 -23.05667,-4.14265l-2.29866,4.5096l-7.75885,0.35623l-7.59417,6.15039l-8.64295,-1.74822l-11.70703,6.06119l-6.38599,-4.79382l-6.45999,2.36133l-7.01451,-7.38888l-8.11916,1.29382l-6.19237,-6.07265l-7.6263,-1.37795l-4.19835,-7.87062l-4.24236,-4.16907c0,0 -0.13314,-2.0999 -0.13314,-3.29458z",fill:"#191e2e",strokeOpacity:"0.48627",stroke:"#ffffff",strokeWidth:0,strokeLinecap:"butt"}),e.jsx("path",{d:"M271.10348,122.46768l10.06374,-3.28166l24.06547,24.28424",fill:"none",stroke:"#2f3a50",strokeWidth:6,strokeLinecap:"round"}),e.jsx("path",{d:"M306.56448,144.85764l-41.62024,-8.16845l2.44004,-7.87698",fill:"none",stroke:"#000000",strokeWidth:"3.5",strokeLinecap:"round"}),e.jsx("path",{d:"M276.02738,115.72434c-0.66448,-4.64715 2.56411,-8.95308 7.21127,-9.61756c4.64715,-0.66448 8.95309,2.56411 9.61757,7.21126c0.46467,3.24972 -1.94776,8.02206 -5.96624,9.09336c-2.11289,-1.73012 -5.08673,-5.03426 -5.08673,-5.03426c0,0 -4.12095,1.16329 -4.60481,1.54229c-0.16433,-0.04891 -0.62732,-0.38126 -0.72803,-0.61269c-0.30602,-0.70328 -0.36302,-2.02286 -0.44303,-2.58239z",fill:"#ffffff",stroke:"none",strokeWidth:"0.5",strokeLinecap:"butt"}),e.jsx("path",{d:"M242.49281,125.6424c0,-4.69442 3.80558,-8.5 8.5,-8.5c4.69442,0 8.5,3.80558 8.5,8.5c0,4.69442 -3.80558,8.5 -8.5,8.5c-4.69442,0 -8.5,-3.80558 -8.5,-8.5z",fill:"#ffffff",stroke:"none",strokeWidth:"0.5",strokeLinecap:"butt"}),e.jsx("path",{d:"M0,0",fillOpacity:"0.26667",fill:"#97affd",strokeOpacity:"0.48627",stroke:"#ffffff",strokeWidth:0,strokeLinecap:"butt"})]})})})]}),e.jsx("svg",{id:"gnd",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:475,height:530,viewBox:"0,0,163.40011,85.20095",children:e.jsx("g",{transform:"translate(-176.25,-207.64957)",children:e.jsxs("g",{stroke:"#000000",strokeWidth:"2.5",strokeLinecap:"round",strokeMiterlimit:10,children:[e.jsx("path",{d:"M295.5,273.1829c0,0 -57.38915,6.69521 -76.94095,-9.01465c-13.65063,-10.50609 15.70098,-20.69467 -2.5451,-19.94465c-30.31027,2.05753 -38.51396,-26.84135 -38.51396,-26.84135c0,0 6.50084,13.30023 18.93224,19.17888c9.53286,4.50796 26.23632,-1.02541 32.09529,4.95137c3.62417,3.69704 2.8012,6.33005 0.66517,8.49452c-3.79415,3.84467 -11.7312,6.21103 -6.24682,10.43645c22.01082,16.95812 72.55412,12.73944 72.55412,12.73944z",fill:"#000000"}),e.jsx("path",{d:"M338.92138,217.76285c0,0 -17.49626,12.55408 -45.36424,10.00353c-8.39872,-0.76867 -17.29557,-6.23066 -17.29557,-6.23066c0,0 3.06461,-2.23972 15.41857,0.72484c26.30467,6.31228 47.24124,-4.49771 47.24124,-4.49771z",fill:"#000000"}),e.jsx("path",{d:"M209.14443,223.00182l1.34223,15.4356l-10.0667,-15.4356",fill:"none"}),e.jsx("path",{d:"M198.20391,230.41806l12.95386,7.34824l6.71113,-12.08004",fill:"none"}),e.jsx("path",{d:"M211.19621,238.53825l8.5262,-6.09014",fill:"none"}),e.jsx("path",{d:"M317.57068,215.80173l5.27812,6.49615l0.40601,-13.39831",fill:"none"}),e.jsx("path",{d:"M323.66082,222.70389l6.09014,-9.33822",fill:"none"})]})})})]})]})})}const Di=`import React from 'react';

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
`;function Pi(){return e.jsx(k,{title:"Geometric Spinner",code:Di,className:"min-h-[300px]",children:e.jsxs("div",{className:"geometric-spinner-wrapper",children:[e.jsx("style",{children:`
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
            `}),e.jsxs("figure",{className:"geometric-loader",children:[e.jsx("div",{style:{"--i":1}}),e.jsx("div",{style:{"--i":2}}),e.jsx("div",{style:{"--i":3}}),e.jsx("div",{style:{"--i":4}}),e.jsx("div",{style:{"--i":5}}),e.jsx("div",{style:{"--i":6}}),e.jsx("div",{style:{"--i":7}}),e.jsx("div",{style:{"--i":8}}),e.jsx("div",{style:{"--i":9}}),e.jsx("div",{style:{"--i":10}}),e.jsx("div",{style:{"--i":11}}),e.jsx("div",{style:{"--i":12}})]})]})})}const Ei=`import React from 'react';

const Loader = () => {
  return (
    <div className="dot-pulse-wrapper">
      <style>
        {\`
        .dot-pulse-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .pulse-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          margin-right: 6px;
          border-radius: 50%;
          animation: dot-pulse2 1.5s ease-in-out infinite;
        }

        .pulse-dot-1 {
          background-color: #4285f4;
          animation-delay: 0s;
        }

        .pulse-dot-2 {
          background-color: #34a853;
          animation-delay: 0.3s;
        }

        .pulse-dot-3 {
          background-color: #fbbc05;
          animation-delay: 0.6s;
        }

        .pulse-dot-4 {
          background-color: #ea4335;
          animation-delay: 0.9s;
        }

        .pulse-dot-5 {
          background-color: #4285f4;
          animation-delay: 1.2s;
        }

        @keyframes dot-pulse2 {
          0% {
            transform: scale(0.5);
            opacity: 0.5;
          }

          50% {
            transform: scale(1);
            opacity: 1;
          }

          100% {
            transform: scale(0.5);
            opacity: 0.5;
          }
        }
        \`}
      </style>
      <div className="dot-pulse-loader">
        <div className="pulse-dot pulse-dot-1" />
        <div className="pulse-dot pulse-dot-2" />
        <div className="pulse-dot pulse-dot-3" />
        <div className="pulse-dot pulse-dot-4" />
        <div className="pulse-dot pulse-dot-5" />
      </div>
    </div>
  );
}

export default Loader;
`;function Ii(){return e.jsx(k,{title:"Dot Pulse Loader",code:Ei,className:"min-h-[250px]",children:e.jsxs("div",{className:"dot-pulse-wrapper",children:[e.jsx("style",{children:`
            .dot-pulse-loader {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            }

            .pulse-dot {
              display: inline-block;
              width: 10px;
              height: 10px;
              margin-right: 6px;
              border-radius: 50%;
              animation: dot-pulse2 1.5s ease-in-out infinite;
            }

            .pulse-dot-1 {
              background-color: #4285f4;
              animation-delay: 0s;
            }

            .pulse-dot-2 {
              background-color: #34a853;
              animation-delay: 0.3s;
            }

            .pulse-dot-3 {
              background-color: #fbbc05;
              animation-delay: 0.6s;
            }

            .pulse-dot-4 {
              background-color: #ea4335;
              animation-delay: 0.9s;
            }

            .pulse-dot-5 {
              background-color: #4285f4;
              animation-delay: 1.2s;
            }

            @keyframes dot-pulse2 {
              0% {
                transform: scale(0.5);
                opacity: 0.5;
              }

              50% {
                transform: scale(1);
                opacity: 1;
              }

              100% {
                transform: scale(0.5);
                opacity: 0.5;
              }
            }
            `}),e.jsxs("div",{className:"dot-pulse-loader",children:[e.jsx("div",{className:"pulse-dot pulse-dot-1"}),e.jsx("div",{className:"pulse-dot pulse-dot-2"}),e.jsx("div",{className:"pulse-dot pulse-dot-3"}),e.jsx("div",{className:"pulse-dot pulse-dot-4"}),e.jsx("div",{className:"pulse-dot pulse-dot-5"})]})]})})}const Oi=`import React from 'react';

const Loader = () => {
  return (
    <div className="three-body-wrapper">
      <style>
        {\`
        .three-body-loader {
         --uib-size: 35px;
         --uib-speed: 0.8s;
         --uib-color: #5D3FD3;
         position: relative;
         display: inline-block;
         height: var(--uib-size);
         width: var(--uib-size);
         animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
        }

        .three-body-loader__dot {
         position: absolute;
         height: 100%;
         width: 30%;
        }

        .three-body-loader__dot:after {
         content: '';
         position: absolute;
         height: 0%;
         width: 100%;
         padding-bottom: 100%;
         background-color: var(--uib-color);
         border-radius: 50%;
        }

        .three-body-loader__dot:nth-child(1) {
         bottom: 5%;
         left: 0;
         transform: rotate(60deg);
         transform-origin: 50% 85%;
        }

        .three-body-loader__dot:nth-child(1)::after {
         bottom: 0;
         left: 0;
         animation: wobble1 var(--uib-speed) infinite ease-in-out;
         animation-delay: calc(var(--uib-speed) * -0.3);
        }

        .three-body-loader__dot:nth-child(2) {
         bottom: 5%;
         right: 0;
         transform: rotate(-60deg);
         transform-origin: 50% 85%;
        }

        .three-body-loader__dot:nth-child(2)::after {
         bottom: 0;
         left: 0;
         animation: wobble1 var(--uib-speed) infinite
            calc(var(--uib-speed) * -0.15) ease-in-out;
        }

        .three-body-loader__dot:nth-child(3) {
         bottom: -5%;
         left: 0;
         transform: translateX(116.666%);
        }

        .three-body-loader__dot:nth-child(3)::after {
         top: 0;
         left: 0;
         animation: wobble2 var(--uib-speed) infinite ease-in-out;
        }

        @keyframes spin78236 {
         0% {
          transform: rotate(0deg);
         }

         100% {
          transform: rotate(360deg);
         }
        }

        @keyframes wobble1 {
         0%,
          100% {
          transform: translateY(0%) scale(1);
          opacity: 1;
         }

         50% {
          transform: translateY(-66%) scale(0.65);
          opacity: 0.8;
         }
        }

        @keyframes wobble2 {
         0%,
          100% {
          transform: translateY(0%) scale(1);
          opacity: 1;
         }

         50% {
          transform: translateY(66%) scale(0.65);
          opacity: 0.8;
         }
        }
        \`}
      </style>
      <div className="three-body-loader">
        <div className="three-body-loader__dot" />
        <div className="three-body-loader__dot" />
        <div className="three-body-loader__dot" />
      </div>
    </div>
  );
}

export default Loader;
`;function Xi(){return e.jsx(k,{title:"Three Body Loader",code:Oi,className:"min-h-[250px]",children:e.jsxs("div",{className:"three-body-wrapper",children:[e.jsx("style",{children:`
            .three-body-loader {
             --uib-size: 35px;
             --uib-speed: 0.8s;
             --uib-color: #5D3FD3;
             position: relative;
             display: inline-block;
             height: var(--uib-size);
             width: var(--uib-size);
             animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
            }

            .three-body-loader__dot {
             position: absolute;
             height: 100%;
             width: 30%;
            }

            .three-body-loader__dot:after {
             content: '';
             position: absolute;
             height: 0%;
             width: 100%;
             padding-bottom: 100%;
             background-color: var(--uib-color);
             border-radius: 50%;
            }

            .three-body-loader__dot:nth-child(1) {
             bottom: 5%;
             left: 0;
             transform: rotate(60deg);
             transform-origin: 50% 85%;
            }

            .three-body-loader__dot:nth-child(1)::after {
             bottom: 0;
             left: 0;
             animation: wobble1 var(--uib-speed) infinite ease-in-out;
             animation-delay: calc(var(--uib-speed) * -0.3);
            }

            .three-body-loader__dot:nth-child(2) {
             bottom: 5%;
             right: 0;
             transform: rotate(-60deg);
             transform-origin: 50% 85%;
            }

            .three-body-loader__dot:nth-child(2)::after {
             bottom: 0;
             left: 0;
             animation: wobble1 var(--uib-speed) infinite
                calc(var(--uib-speed) * -0.15) ease-in-out;
            }

            .three-body-loader__dot:nth-child(3) {
             bottom: -5%;
             left: 0;
             transform: translateX(116.666%);
            }

            .three-body-loader__dot:nth-child(3)::after {
             top: 0;
             left: 0;
             animation: wobble2 var(--uib-speed) infinite ease-in-out;
            }

            @keyframes spin78236 {
             0% {
              transform: rotate(0deg);
             }

             100% {
              transform: rotate(360deg);
             }
            }

            @keyframes wobble1 {
             0%,
              100% {
              transform: translateY(0%) scale(1);
              opacity: 1;
             }

             50% {
              transform: translateY(-66%) scale(0.65);
              opacity: 0.8;
             }
            }

            @keyframes wobble2 {
             0%,
              100% {
              transform: translateY(0%) scale(1);
              opacity: 1;
             }

             50% {
              transform: translateY(66%) scale(0.65);
              opacity: 0.8;
             }
            }
            `}),e.jsxs("div",{className:"three-body-loader",children:[e.jsx("div",{className:"three-body-loader__dot"}),e.jsx("div",{className:"three-body-loader__dot"}),e.jsx("div",{className:"three-body-loader__dot"})]})]})})}const Fi=`import React from 'react';

const Loader = () => {
  return (
    <div className="coffee-loader-wrapper">
      <style>
        {\`
        .coffee-loader-container {
          width: 100px;
          height: 100px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: coffee-shake 3s infinite ease-in-out;
        }

        .coffee-cup {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 30px;
          background-color: #5b4022cb;
          border: 1px solid #2e2e2e;
          border-radius: 3px 3px 10px 10px;
          z-index: 1;
          animation: coffee-cupPulse 6s infinite ease-in-out;
        }

        .coffee-cup::before {
          content: "";
          position: absolute;
          bottom: -5px;
          width: calc(100% - 2px);
          height: 6px;
          background: #5b4022cb;
          border: 1px solid #2e2e2e;
          border-top: none;
          border-radius: 50%;
          z-index: -1;
          animation: coffee-cupPulse 6s infinite ease-in-out;
        }

        .coffee-cup::after {
          content: "";
          position: absolute;
          top: -2px;
          left: 1px;
          width: calc(100% - 2px);
          height: 4px;
          background: #da8920ca;
          border: 1px solid #2e2e2e;
          border-radius: 50%;
          animation: coffee-coffeeGlow 6s infinite ease-in-out;
        }

        .coffee-cup-handle {
          position: absolute;
          top: 5px;
          right: -10px;
          width: 10px;
          height: 15px;
          border: 2px solid #2e2e2e;
          border-left: none;
          border-radius: 0 10px 10px 0;
          background: transparent;
        }

        .coffee-smoke {
          position: absolute;
          bottom: 100%;
          left: 50%;
          width: 10px;
          height: 25px;
          background: rgba(72, 67, 67, 0.501);
          border-radius: 50%;
          transform: translateX(-50%);
          animation: coffee-rise 3s infinite ease-in-out;
          filter: blur(8px);
        }

        .coffee-smoke.one {
          animation-delay: 0s;
        }
        .coffee-smoke.two {
          animation-delay: 0.8s;
        }
        .coffee-smoke.three {
          animation-delay: 1.6s;
        }

        .coffee-load-text {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          color: #2e2e2e;
          opacity: 0.6;
          white-space: nowrap;
          font-family: sans-serif;
        }

        @keyframes coffee-rise {
          0% {
            transform: translate(-50%, 0) scale(0.4);
            opacity: 0;
          }
          30% {
            opacity: 0.7;
          }
          60% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -120px) scale(1);
            opacity: 0;
          }
        }

        @keyframes coffee-shake {
          0% {
            transform: translateX(0) translateY(0) rotate(0);
          }
          25% {
            transform: translateX(-4px) translateY(-2px) rotate(-2deg);
          }
          50% {
            transform: translateX(0) translateY(0) rotate(0);
          }
          75% {
            transform: translateX(4px) translateY(-2px) rotate(2deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        @keyframes coffee-cupPulse {
          0%,
          100% {
            background-color: #5b4022cb;
          }
          50% {
            background-color: #f5f5f5bd;
          }
        }

        @keyframes coffee-coffeeGlow {
          0%,
          100% {
            background: #da8920ca;
          }
          50% {
            background: #fed197d5;
          }
        }
        \`}
      </style>
      <div className="coffee-loader-container">
        <div className="coffee-cup">
          <div className="coffee-cup-handle" />
          <div className="coffee-smoke one" />
          <div className="coffee-smoke two" />
          <div className="coffee-smoke three" />
        </div>
        <div className="coffee-load-text">Loading...</div>
      </div>
    </div>
  );
}

export default Loader;
`;function Vi(){return e.jsx(k,{title:"Coffee Loader",code:Fi,className:"min-h-[250px]",children:e.jsxs("div",{className:"coffee-loader-wrapper",children:[e.jsx("style",{children:`
            .coffee-loader-container {
              width: 100px;
              height: 100px;
              position: relative;
              /* Center content inside the showcase */
              margin: 0 auto;
              animation: coffee-shake 3s infinite ease-in-out;
            }

            .coffee-cup {
              position: absolute;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              width: 40px;
              height: 30px;
              background-color: #5b4022cb;
              border: 1px solid #2e2e2e;
              border-radius: 3px 3px 10px 10px;
              z-index: 1;
              animation: coffee-cupPulse 6s infinite ease-in-out;
            }

            .coffee-cup::before {
              content: "";
              position: absolute;
              bottom: -5px;
              width: calc(100% - 2px);
              height: 6px;
              background: #5b4022cb;
              border: 1px solid #2e2e2e;
              border-top: none;
              border-radius: 50%;
              z-index: -1;
              animation: coffee-cupPulse 6s infinite ease-in-out;
            }

            .coffee-cup::after {
              content: "";
              position: absolute;
              top: -2px;
              left: 1px;
              width: calc(100% - 2px);
              height: 4px;
              background: #da8920ca;
              border: 1px solid #2e2e2e;
              border-radius: 50%;
              animation: coffee-coffeeGlow 6s infinite ease-in-out;
            }

            .coffee-cup-handle {
              position: absolute;
              top: 5px;
              right: -10px;
              width: 10px;
              height: 15px;
              border: 2px solid #2e2e2e;
              border-left: none;
              border-radius: 0 10px 10px 0;
              background: transparent;
            }

            .coffee-smoke {
              position: absolute;
              bottom: 100%;
              left: 50%;
              width: 10px;
              height: 25px;
              background: rgba(72, 67, 67, 0.501);
              border-radius: 50%;
              transform: translateX(-50%);
              animation: coffee-rise 3s infinite ease-in-out;
              filter: blur(8px);
            }

            .coffee-smoke.one {
              animation-delay: 0s;
            }
            .coffee-smoke.two {
              animation-delay: 0.8s;
            }
            .coffee-smoke.three {
              animation-delay: 1.6s;
            }

            .coffee-load-text {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              font-size: 12px;
              color: #2e2e2e;
              opacity: 0.6;
              white-space: nowrap;
              font-family: sans-serif;
            }

            @keyframes coffee-rise {
              0% {
                transform: translate(-50%, 0) scale(0.4);
                opacity: 0;
              }
              30% {
                opacity: 0.7;
              }
              60% {
                opacity: 0.4;
              }
              100% {
                transform: translate(-50%, -120px) scale(1);
                opacity: 0;
              }
            }

            @keyframes coffee-shake {
              0% {
                transform: translateX(0) translateY(0) rotate(0);
              }
              25% {
                transform: translateX(-4px) translateY(-2px) rotate(-2deg);
              }
              50% {
                transform: translateX(0) translateY(0) rotate(0);
              }
              75% {
                transform: translateX(4px) translateY(-2px) rotate(2deg);
              }
              100% {
                transform: translateX(0) translateY(0) rotate(0);
              }
            }

            @keyframes coffee-cupPulse {
              0%,
              100% {
                background-color: #5b4022cb;
              }
              50% {
                background-color: #f5f5f5bd;
              }
            }

            @keyframes coffee-coffeeGlow {
              0%,
              100% {
                background: #da8920ca;
              }
              50% {
                background: #fed197d5;
              }
            }
            `}),e.jsxs("div",{className:"coffee-loader-container",children:[e.jsxs("div",{className:"coffee-cup",children:[e.jsx("div",{className:"coffee-cup-handle"}),e.jsx("div",{className:"coffee-smoke one"}),e.jsx("div",{className:"coffee-smoke two"}),e.jsx("div",{className:"coffee-smoke three"})]}),e.jsx("div",{className:"coffee-load-text",children:"Loading..."})]})]})})}const Hi=`import React from 'react';

const Loader = () => {
  return (
    <div className="hiding-loader-wrapper">
      <style>
        {\`
        .hiding-loader {
          --ANIMATION-DELAY-MULTIPLIER: 70ms;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .hiding-loader span {
          padding: 0;
          margin: 0;
          letter-spacing: -5rem;
          animation-delay: 0s;
          transform: translateY(4rem);
          animation: hiding-hideAndSeek 1s alternate infinite cubic-bezier(0.86, 0, 0.07, 1);
        }
        /* ... delays for each letter (l, o, a, d, i, n, g) ... */
        .hiding-loader .l { animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 0); }
        .hiding-loader .o { animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 1); }
        .hiding-loader .a { animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 2); }
        .hiding-loader .d { animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 3); }
        .hiding-loader .ispan { animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 4); }
        .hiding-loader .n { animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 5); }
        .hiding-loader .g { animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 6); }
        
        .hiding-letter {
          width: fit-content;
          height: 3rem;
        }
        .i {
          margin-inline: 5px;
        }
        @keyframes hiding-hideAndSeek {
          0% {
            transform: translateY(4rem);
          }
          100% {
            transform: translateY(0rem);
          }
        }
        \`}
      </style>
      <div className="hiding-loader">
        <span className="l">
          <svg ... />
        </span>
        {/* ... other letters ... */}
      </div>
    </div>
  );
}

export default Loader;
`;function Gi(){return e.jsx(k,{title:"Hiding Seaking Loader",code:Hi,className:"min-h-[250px]",children:e.jsxs("div",{className:"hiding-loader-wrapper",children:[e.jsx("style",{children:`
            .hiding-loader {
              --ANIMATION-DELAY-MULTIPLIER: 70ms;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              overflow: hidden;
            }
            .hiding-loader span {
              padding: 0;
              margin: 0;
              letter-spacing: -5rem;
              animation-delay: 0s;
              transform: translateY(4rem);
              animation: hiding-hideAndSeek 1s alternate infinite cubic-bezier(0.86, 0, 0.07, 1);
            }
            .hiding-loader .l {
              animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 0);
            }
            .hiding-loader .o {
              animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 1);
            }
            .hiding-loader .a {
              animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 2);
            }
            .hiding-loader .d {
              animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 3);
            }
            .hiding-loader .ispan {
              animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 4);
            }
            .hiding-loader .n {
              animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 5);
            }
            .hiding-loader .g {
              animation-delay: calc(var(--ANIMATION-DELAY-MULTIPLIER) * 6);
            }
            .hiding-letter {
              width: fit-content;
              height: 3rem;
            }
            .i {
              margin-inline: 5px;
            }
            @keyframes hiding-hideAndSeek {
              0% {
                transform: translateY(4rem);
              }
              100% {
                transform: translateY(0rem);
              }
            }
            `}),e.jsxs("div",{className:"hiding-loader",children:[e.jsx("span",{className:"l",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 11 18",height:18,width:11,className:"hiding-letter",children:e.jsx("path",{fill:"black",d:"M0.28 16.14V0.94L3.7 0.64L5.7 1.64V12.3L8.5 12.06L10.5 13.06V16.44L2.28 17.14L0.28 16.14ZM3.5 12.7V0.859999L0.48 1.12V15.94L8.3 15.26V12.28L3.5 12.7Z"})})}),e.jsx("span",{className:"o",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 18",height:18,width:16,className:"hiding-letter",children:e.jsx("path",{fill:"black",d:"M8.94 17.24C8.84667 17.2533 8.74667 17.26 8.64 17.26C8.54667 17.26 8.45333 17.26 8.36 17.26C7.66667 17.26 7.02667 17.16 6.44 16.96C5.86667 16.7733 5.30667 16.5533 4.76 16.3C3.33333 15.5933 2.28667 14.6 1.62 13.32C0.966667 12.0267 0.64 10.4933 0.64 8.72C0.64 7.68 0.766667 6.67333 1.02 5.7C1.28667 4.71333 1.68 3.82667 2.2 3.04C2.72 2.24 3.36667 1.58667 4.14 1.08C4.92667 0.573332 5.84667 0.273333 6.9 0.18C7.00667 0.166666 7.10667 0.159999 7.2 0.159999C7.29333 0.159999 7.38667 0.159999 7.48 0.159999C8.14667 0.159999 8.74 0.246666 9.26 0.419999C9.78 0.579999 10.3067 0.766666 10.84 0.979999C11.8 1.36667 12.6 1.94 13.24 2.7C13.88 3.46 14.36 4.35333 14.68 5.38C15 6.39333 15.16 7.48 15.16 8.64C15.16 9.72 15.0333 10.7533 14.78 11.74C14.5267 12.7267 14.14 13.62 13.62 14.42C13.1133 15.2067 12.4667 15.8467 11.68 16.34C10.9067 16.8467 9.99333 17.1467 8.94 17.24ZM6.92 16.04C7.94667 15.96 8.84 15.68 9.6 15.2C10.36 14.7067 10.9867 14.0733 11.48 13.3C11.9733 12.5133 12.34 11.64 12.58 10.68C12.8333 9.70667 12.96 8.69333 12.96 7.64C12.96 6.68 12.8467 5.76667 12.62 4.9C12.4067 4.02 12.0733 3.24 11.62 2.56C11.1667 1.88 10.5933 1.34667 9.9 0.959999C9.22 0.559999 8.41333 0.359999 7.48 0.359999C7.38667 0.359999 7.29333 0.359999 7.2 0.359999C7.12 0.359999 7.02667 0.366666 6.92 0.38C5.89333 0.473333 5 0.766666 4.24 1.26C3.48 1.74 2.84667 2.37333 2.34 3.16C1.83333 3.93333 1.45333 4.8 1.2 5.76C0.96 6.70667 0.84 7.69333 0.84 8.72C0.84 9.72 0.953333 10.6667 1.18 11.56C1.40667 12.44 1.74667 13.22 2.2 13.9C2.65333 14.5667 3.22667 15.0933 3.92 15.48C4.61333 15.8667 5.42 16.06 6.34 16.06C6.44667 16.06 6.54667 16.06 6.64 16.06C6.73333 16.06 6.82667 16.0533 6.92 16.04ZM6.92 12.94C6.86667 12.94 6.81333 12.9467 6.76 12.96C6.72 12.96 6.67333 12.96 6.62 12.96C5.82 12.96 5.18667 12.6133 4.72 11.92C4.26667 11.2267 4.04 10.0667 4.04 8.44C4.04 7.28 4.16667 6.34667 4.42 5.64C4.67333 4.93333 5.02 4.41333 5.46 4.08C5.9 3.73333 6.38667 3.54 6.92 3.5C6.97333 3.5 7.02667 3.5 7.08 3.5C7.13333 3.48667 7.18667 3.48 7.24 3.48C8.02667 3.48 8.64 3.82 9.08 4.5C9.52 5.16667 9.74 6.31333 9.74 7.94C9.74 9.67333 9.47333 10.9267 8.94 11.7C8.42 12.46 7.74667 12.8733 6.92 12.94ZM6.86 12.74C7.64667 12.6733 8.28667 12.2733 8.78 11.54C9.28667 10.8067 9.54 9.60667 9.54 7.94C9.54 7.18 9.49333 6.53333 9.4 6C9.30667 5.46667 9.16667 5.03333 8.98 4.7C8.91333 4.68667 8.84667 4.68 8.78 4.68C8.71333 4.66667 8.64667 4.66 8.58 4.66C7.79333 4.66 7.20667 5.07333 6.82 5.9C6.43333 6.71333 6.24 7.89333 6.24 9.44C6.24 10.2133 6.29333 10.8733 6.4 11.42C6.50667 11.9533 6.66 12.3933 6.86 12.74Z"})})}),e.jsx("span",{className:"a",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 15 18",height:18,width:15,className:"hiding-letter",children:e.jsx("path",{fill:"black",d:"M9.28 15.76L8.54 13.38L6.96 13.52L5.98 17.02L2.58 17.32L0.58 16.32L4.96 0.699999L8.26 0.419999L10.26 1.42L14.72 16.48L11.28 16.76L9.28 15.76ZM5.12 0.899999L0.88 16.08L3.8 15.84L4.8 12.34L8.36 12.02L9.42 15.56L12.44 15.3L8.1 0.64L5.12 0.899999ZM5.5 9.42C5.75333 8.59333 5.96 7.80667 6.12 7.06C6.29333 6.31333 6.44 5.56667 6.56 4.82H6.64C6.74667 5.55333 6.88 6.27333 7.04 6.98C7.21333 7.67333 7.42 8.42 7.66 9.22L5.5 9.42Z"})})}),e.jsx("span",{className:"d",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 18",height:18,width:14,className:"hiding-letter",children:e.jsx("path",{fill:"black",d:"M0.28 16.24V1.04L4.44 0.679999C4.61333 0.666666 4.78 0.66 4.94 0.66C5.1 0.646666 5.24667 0.64 5.38 0.64C6.11333 0.64 6.76667 0.726666 7.34 0.899999C7.92667 1.07333 8.56667 1.32667 9.26 1.66C10.1933 2.08667 10.9533 2.61333 11.54 3.24C12.1267 3.85333 12.56 4.61333 12.84 5.52C13.12 6.41333 13.26 7.50667 13.26 8.8C13.26 10.4933 12.9733 11.92 12.4 13.08C11.84 14.24 11.0667 15.1333 10.08 15.76C9.09333 16.3733 7.95333 16.74 6.66 16.86L2.28 17.24L0.28 16.24ZM4.64 15.68C5.89333 15.5733 7 15.2133 7.96 14.6C8.93333 13.9867 9.69333 13.1133 10.24 11.98C10.7867 10.8467 11.06 9.45333 11.06 7.8C11.06 5.53333 10.5733 3.80667 9.6 2.62C8.64 1.43333 7.21333 0.84 5.32 0.84C5.18667 0.84 5.04667 0.846666 4.9 0.859999C4.75333 0.859999 4.60667 0.866666 4.46 0.879999L0.48 1.2V16.02L4.64 15.68ZM3.5 3.9L4.08 3.86C4.22667 3.84667 4.36 3.84 4.48 3.84C4.61333 3.82667 4.74667 3.82 4.88 3.82C5.57333 3.82 6.14 3.94667 6.58 4.2C7.03333 4.45333 7.36667 4.88667 7.58 5.5C7.80667 6.11333 7.92 6.97333 7.92 8.08C7.92 9.65333 7.59333 10.8067 6.94 11.54C6.28667 12.26 5.4 12.6667 4.28 12.76L3.5 12.82V3.9ZM5.7 12.2C6.38 11.9067 6.88667 11.4333 7.22 10.78C7.55333 10.1133 7.72 9.21333 7.72 8.08C7.72 6.66667 7.52 5.65333 7.12 5.04C7.06667 5.02667 7.01333 5.02 6.96 5.02C6.90667 5.02 6.85333 5.02 6.8 5.02C6.68 5.02 6.56 5.02667 6.44 5.04C6.33333 5.04 6.22 5.04667 6.1 5.06L5.7 5.08V12.2Z"})})}),e.jsx("span",{className:"ispan",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 17",height:18,width:6,className:"hiding-letter i",children:e.jsx("path",{fill:"black",d:"M0.38 15.96V0.76L3.86 0.439999L5.86 1.44V16.64L2.38 16.94L0.38 15.96ZM0.58 0.94V15.74L3.66 15.46V0.66L0.58 0.94Z"})})}),e.jsx("span",{className:"n",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 13 18",height:18,width:13,className:"hiding-letter",children:e.jsx("path",{fill:"black",d:"M7.22 15.82L5.72 12.44V16.92L2.28 17.22L0.28 16.22V1.02L3.52 0.74L5.52 1.74L7 4.94V0.64L10.48 0.319999L12.48 1.32V16.54L9.22 16.82L7.22 15.82ZM7.2 0.819999V6.42C7.2 6.56667 7.20667 6.80667 7.22 7.14C7.23333 7.46 7.24667 7.8 7.26 8.16C7.28667 8.50667 7.30667 8.80667 7.32 9.06C7.33333 9.3 7.34 9.42 7.34 9.42L7.28 9.46C7.28 9.46 7.26 9.38667 7.22 9.24C7.19333 9.09333 7.14667 8.92 7.08 8.72C7.01333 8.50667 6.94 8.31333 6.86 8.14L3.4 0.959999L0.48 1.2V16L3.52 15.76V10.52C3.52 10.36 3.51333 10.0867 3.5 9.7C3.48667 9.31333 3.47333 8.90667 3.46 8.48C3.46 8.05333 3.45333 7.69333 3.44 7.4C3.42667 7.09333 3.42 6.94 3.42 6.94L3.48 6.92C3.48 6.92 3.51333 7.05333 3.58 7.32C3.66 7.57333 3.76667 7.84 3.9 8.12L7.4 15.62L10.28 15.36V0.539999L7.2 0.819999Z"})})}),e.jsx("span",{className:"g",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 15 18",height:18,width:15,className:"hiding-letter",children:e.jsx("path",{fill:"black",d:"M14.04 13.72C13.64 14.6533 12.9933 15.44 12.1 16.08C11.22 16.72 10.1333 17.0933 8.84 17.2C8.72 17.2133 8.6 17.22 8.48 17.22C8.36 17.22 8.24 17.22 8.12 17.22C7.12 17.22 6.16667 17.0467 5.26 16.7C4.36667 16.3533 3.57333 15.8333 2.88 15.14C2.18667 14.4333 1.64 13.54 1.24 12.46C0.84 11.38 0.64 10.1 0.64 8.62C0.64 7.48667 0.78 6.42667 1.06 5.44C1.34 4.44 1.74667 3.55333 2.28 2.78C2.82667 2.00667 3.48667 1.38667 4.26 0.92C5.03333 0.453333 5.90667 0.179999 6.88 0.0999997C6.96 0.0866657 7.04 0.0799987 7.12 0.0799987C7.2 0.0799987 7.28 0.0799987 7.36 0.0799987C8.33333 0.0799987 9.28 0.299999 10.2 0.74C11.1333 1.18 11.9467 1.78 12.64 2.54C13.3467 3.3 13.8467 4.16 14.14 5.12L11.76 6.46L12.04 6.44L14.04 7.44V13.72ZM5.9 7.16V10L8.98 9.74V11.46C8.80667 11.8067 8.52667 12.1067 8.14 12.36C7.76667 12.6 7.37333 12.7333 6.96 12.76C6.90667 12.7733 6.84667 12.78 6.78 12.78C6.72667 12.78 6.66667 12.78 6.6 12.78C5.73333 12.78 5.08 12.4333 4.64 11.74C4.2 11.0467 3.98 9.92 3.98 8.36C3.98 6.94667 4.20667 5.82 4.66 4.98C5.11333 4.14 5.84 3.68 6.84 3.6H7.06C7.60667 3.6 8.07333 3.76 8.46 4.08C8.86 4.4 9.14667 4.86667 9.32 5.48L11.9 4.02C11.6733 3.38 11.36 2.78 10.96 2.22C10.5733 1.64667 10.0867 1.18 9.5 0.819999C8.91333 0.459999 8.2 0.28 7.36 0.28C7.29333 0.28 7.22 0.28 7.14 0.28C7.06 0.28 6.98 0.286666 6.9 0.299999C5.63333 0.406666 4.54667 0.846666 3.64 1.62C2.73333 2.38 2.04 3.37333 1.56 4.6C1.08 5.81333 0.84 7.15333 0.84 8.62C0.84 10.14 1.06 11.4533 1.5 12.56C1.94 13.6667 2.56667 14.52 3.38 15.12C4.19333 15.72 5.16 16.02 6.28 16.02C6.37333 16.02 6.46 16.02 6.54 16.02C6.63333 16.02 6.72667 16.0133 6.82 16C8.07333 15.8933 9.12667 15.54 9.98 14.94C10.8467 14.3267 11.4733 13.5733 11.86 12.68V6.66L5.9 7.16ZM9.2 5.78C9.14667 5.59333 9.08667 5.42 9.02 5.26C8.95333 5.08667 8.8 4.93333 8.8 4.8C8.2 4.85333 7.70667 5.06667 7.32 5.44C6.94667 5.8 6.66667 6.29333 6.48 6.92L10.8 6.56L9.2 5.78ZM7.8 11.26L6.24 10.46C6.26667 10.9933 6.32 11.4133 6.4 11.72C6.49333 12.0133 6.62667 12.3 6.8 12.58C6.84 12.5667 6.88667 12.56 6.94 12.56C7.28667 12.5333 7.63333 12.4267 7.98 12.24C8.32667 12.04 8.59333 11.8067 8.78 11.54V11.14L7.8 11.26Z"})})})]})]})})}const qi=`import React from 'react';

const Loader = () => {
  return (
    <div className="rolling-rock-wrapper">
      <style>
        {\`
        .rolling-rock-loader {
          position: relative;
          font-size: 16px;
          width: 5.5em;
          height: 5.5em;
        }

        .rolling-rock-loader:before {
          content: '';
          position: absolute;
          transform: translate(-50%, -50%) rotate(45deg);
          height: 100%;
          width: 4px;
          background: #9ca3af;
          left: 50%;
          top: 50%;
        }

        .rolling-rock-loader:after {
          content: '';
          position: absolute;
          left: 0.2em;
          bottom: 0.18em;
          width: 1em;
          height: 1em;
          background-color: orange;
          border-radius: 15%;
          animation: rollingRock-anim 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
        }

        @keyframes rollingRock-anim {
          0% {
            transform: translate(0, -1em) rotate(-45deg)
          }

          5% {
            transform: translate(0, -1em) rotate(-50deg)
          }

          20% {
            transform: translate(1em, -2em) rotate(47deg)
          }

          25% {
            transform: translate(1em, -2em) rotate(45deg)
          }

          30% {
            transform: translate(1em, -2em) rotate(40deg)
          }

          45% {
            transform: translate(2em, -3em) rotate(137deg)
          }

          50% {
            transform: translate(2em, -3em) rotate(135deg)
          }

          55% {
            transform: translate(2em, -3em) rotate(130deg)
          }

          70% {
            transform: translate(3em, -4em) rotate(217deg)
          }

          75% {
            transform: translate(3em, -4em) rotate(220deg)
          }

          100% {
            transform: translate(0, -1em) rotate(-225deg)
          }
        }
        \`}
      </style>
      <div className="rolling-rock-loader" />
    </div>
  );
}

export default Loader;
`;function Wi(){return e.jsx(k,{title:"Rolling Rock Loader",code:qi,className:"min-h-[250px]",children:e.jsxs("div",{className:"rolling-rock-wrapper",children:[e.jsx("style",{children:`
            .rolling-rock-loader {
              position: relative;
              font-size: 16px;
              width: 5.5em;
              height: 5.5em;
              margin: 0 auto;
            }

            .rolling-rock-loader:before {
              content: '';
              position: absolute;
              transform: translate(-50%, -50%) rotate(45deg);
              height: 100%;
              width: 4px;
              background: #9ca3af;
              left: 50%;
              top: 50%;
            }

            .rolling-rock-loader:after {
              content: '';
              position: absolute;
              left: 0.2em;
              bottom: 0.18em;
              width: 1em;
              height: 1em;
              background-color: orange;
              border-radius: 15%;
              animation: rollingRock-anim 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
            }

            @keyframes rollingRock-anim {
              0% {
                transform: translate(0, -1em) rotate(-45deg)
              }

              5% {
                transform: translate(0, -1em) rotate(-50deg)
              }

              20% {
                transform: translate(1em, -2em) rotate(47deg)
              }

              25% {
                transform: translate(1em, -2em) rotate(45deg)
              }

              30% {
                transform: translate(1em, -2em) rotate(40deg)
              }

              45% {
                transform: translate(2em, -3em) rotate(137deg)
              }

              50% {
                transform: translate(2em, -3em) rotate(135deg)
              }

              55% {
                transform: translate(2em, -3em) rotate(130deg)
              }

              70% {
                transform: translate(3em, -4em) rotate(217deg)
              }

              75% {
                transform: translate(3em, -4em) rotate(220deg)
              }

              100% {
                transform: translate(0, -1em) rotate(-225deg)
              }
            }
            `}),e.jsx("div",{className:"rolling-rock-loader"})]})})}const Ui=`import React from 'react';

const Loader = () => {
  return (
    <div className="classic-spinner-wrapper">
      <style>
        {\`
        .classic-spinner {
          font-size: 28px;
          position: relative;
          display: inline-block;
          width: 1em;
          height: 1em;
        }

        .classic-spinner.center {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        .classic-spinner .classic-spinner-blade {
          position: absolute;
          left: 0.4629em;
          bottom: 0;
          width: 0.074em;
          height: 0.2777em;
          border-radius: 0.0555em;
          background-color: transparent;
          transform-origin: center -0.2222em;
          animation: classic-spinner-fade 1s infinite linear;
        }

        .classic-spinner .classic-spinner-blade:nth-child(1) { animation-delay: 0s; transform: rotate(0deg); }
        .classic-spinner .classic-spinner-blade:nth-child(2) { animation-delay: 0.083s; transform: rotate(30deg); }
        .classic-spinner .classic-spinner-blade:nth-child(3) { animation-delay: 0.166s; transform: rotate(60deg); }
        .classic-spinner .classic-spinner-blade:nth-child(4) { animation-delay: 0.249s; transform: rotate(90deg); }
        .classic-spinner .classic-spinner-blade:nth-child(5) { animation-delay: 0.332s; transform: rotate(120deg); }
        .classic-spinner .classic-spinner-blade:nth-child(6) { animation-delay: 0.415s; transform: rotate(150deg); }
        .classic-spinner .classic-spinner-blade:nth-child(7) { animation-delay: 0.498s; transform: rotate(180deg); }
        .classic-spinner .classic-spinner-blade:nth-child(8) { animation-delay: 0.581s; transform: rotate(210deg); }
        .classic-spinner .classic-spinner-blade:nth-child(9) { animation-delay: 0.664s; transform: rotate(240deg); }
        .classic-spinner .classic-spinner-blade:nth-child(10) { animation-delay: 0.747s; transform: rotate(270deg); }
        .classic-spinner .classic-spinner-blade:nth-child(11) { animation-delay: 0.83s; transform: rotate(300deg); }
        .classic-spinner .classic-spinner-blade:nth-child(12) { animation-delay: 0.913s; transform: rotate(330deg); }

        @keyframes classic-spinner-fade {
          0% {
            background-color: #69717d;
          }
          100% {
            background-color: transparent;
          }
        }
        \`}
      </style>
      <div className="classic-spinner center">
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
        <div className="classic-spinner-blade" />
      </div>
    </div>
  );
}

export default Loader;
`;function $i(){return e.jsx(k,{title:"Classic Spinner",code:Ui,className:"min-h-[250px]",children:e.jsxs("div",{className:"classic-spinner-wrapper relative w-full h-[100px]",children:[e.jsx("style",{children:`
            .classic-spinner {
              font-size: 28px;
              position: relative;
              display: inline-block;
              width: 1em;
              height: 1em;
            }

            .classic-spinner.center {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
            }

            .classic-spinner .classic-spinner-blade {
              position: absolute;
              left: 0.4629em;
              bottom: 0;
              width: 0.074em;
              height: 0.2777em;
              border-radius: 0.0555em;
              background-color: transparent;
              transform-origin: center -0.2222em;
              animation: classic-spinner-fade 1s infinite linear;
            }

            .classic-spinner .classic-spinner-blade:nth-child(1) { animation-delay: 0s; transform: rotate(0deg); }
            .classic-spinner .classic-spinner-blade:nth-child(2) { animation-delay: 0.083s; transform: rotate(30deg); }
            .classic-spinner .classic-spinner-blade:nth-child(3) { animation-delay: 0.166s; transform: rotate(60deg); }
            .classic-spinner .classic-spinner-blade:nth-child(4) { animation-delay: 0.249s; transform: rotate(90deg); }
            .classic-spinner .classic-spinner-blade:nth-child(5) { animation-delay: 0.332s; transform: rotate(120deg); }
            .classic-spinner .classic-spinner-blade:nth-child(6) { animation-delay: 0.415s; transform: rotate(150deg); }
            .classic-spinner .classic-spinner-blade:nth-child(7) { animation-delay: 0.498s; transform: rotate(180deg); }
            .classic-spinner .classic-spinner-blade:nth-child(8) { animation-delay: 0.581s; transform: rotate(210deg); }
            .classic-spinner .classic-spinner-blade:nth-child(9) { animation-delay: 0.664s; transform: rotate(240deg); }
            .classic-spinner .classic-spinner-blade:nth-child(10) { animation-delay: 0.747s; transform: rotate(270deg); }
            .classic-spinner .classic-spinner-blade:nth-child(11) { animation-delay: 0.83s; transform: rotate(300deg); }
            .classic-spinner .classic-spinner-blade:nth-child(12) { animation-delay: 0.913s; transform: rotate(330deg); }

            @keyframes classic-spinner-fade {
              0% {
                background-color: #69717d;
              }
              100% {
                background-color: transparent;
              }
            }
            `}),e.jsxs("div",{className:"classic-spinner center",children:[e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"}),e.jsx("div",{className:"classic-spinner-blade"})]})]})})}const Qi=`import React from 'react';

const Loader = () => {
  return (
    <div className="car-loader-wrapper">
      <style>
        {\`
        .car-loader-container {
          position: relative; /* Changed from absolute to relative for component context */
          width: 400px;
          height: 300px; /* Reduced height to fit better */
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: transparent;
        }

        .car-loader-car {
          position: absolute;
          background-color: rgb(204, 204, 204);
          width: 200px;
          height: 120px;
          left: 50px;
          border-top: 4px solid rgb(162, 162, 162);
          top: 85px; /* Adjusted top */
          animation: car-loader-bounce 0.4s infinite;
        }

        @keyframes car-loader-bounce {
          0% { top: 85px; }
          50% { top: 82px; }
        }

        .car-loader-car::before {
          content: "";
          position: absolute;
          width: 290px;
          height: 20px;
          background-color: rgb(46, 46, 81);
          bottom: -10px;
        }

        .car-loader-car::after {
          content: "";
          position: absolute;
          background-color: rgb(229, 229, 229);
          width: 80px;
          height: 90px;
          right: -90px;
          bottom: 10px;
          clip-path: polygon(0% 0%, 50% 0, 100% 60%, 100% 100%, 0% 100%);
        }

        .car-loader-window {
          position: absolute;
          background-color: rgb(126, 191, 226);
          width: 50px;
          height: 40px;
          right: -75px;
          top: 26px;
          z-index: 1;
          clip-path: polygon(0% 0%, 40% 0, 100% 100%, 0% 100%);
          border: 2px solid rgb(135, 135, 135);
        }

        .car-loader-window::before {
          content: "";
          position: absolute;
          background-color: rgb(186, 225, 247);
          width: 5px;
          height: 40px;
          left: 5px;
          transform: skew(-36deg);
          box-shadow: 9px 0px rgb(186, 225, 247);
        }
        .car-loader-window::after {
          content: "";
          position: absolute;
          background-color: rgb(108, 107, 107);
          width: 10px;
          height: 10px;
          bottom: 2px;
          right: 10px;
          box-shadow:
            2px 6px 0px -2px rgb(229, 229, 229),
            inset 2px 0px rgb(203, 203, 204);
        }

        .car-loader-wheels {
          position: absolute;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #bcbcbc;
          border: 10px solid rgb(4, 4, 4);
          bottom: 58px; /* Adjusted bottom */
          left: 90px;
          box-shadow: 0px 0px 0px 4px;
          animation: car-loader-rotation 0.3s linear infinite;
        }

        @keyframes car-loader-rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .car-loader-wheels::before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: rgb(67, 67, 67);
          top: 10px;
          left: 3px;
          border-radius: 50%;
          box-shadow:
            14.5px 0px rgb(67, 67, 67),
            7px -7px rgb(67, 67, 67),
            7px 7px rgb(67, 67, 67),
            7px 0px 0px 4px rgb(67, 67, 67);
        }

        .car-loader-wheels2 {
          left: 270px;
        }

        .car-loader-cargo-details {
          position: absolute;
          width: 185px;
          height: 20px;
          background-color: #e9e9e9;
          left: 8px;
          top: 5px;
          box-shadow:
            0px 23px #e9e9e9,
            0px 46px #e9e9e9,
            0px 69px #e9e9e9;
        }

        .car-loader-cargo-details::before {
          position: absolute;
          content: "";
          width: 10px;
          height: 4px;
          background-color: red;
          bottom: -72px;
          box-shadow:
            10px 0px white,
            20px 0px red,
            30px 0px white,
            40px 0px red,
            50px 0px white,
            60px 0px red,
            70px 0px white,
            80px 0px red,
            90px 0px white,
            100px 0px red,
            110px 0px white,
            120px 0px red,
            130px 0px white,
            140px 0px red,
            150px 0px white,
            160px 0px red,
            170px 0px white,
            175px 0px red;
        }

        .car-loader-cargo-details::after {
          position: absolute;
          content: "";
          width: 10px;
          height: 6px;
          background-color: rgb(135, 135, 135);
          top: -6px;
          left: -10px;
          box-shadow:
            195px 0px rgb(135, 135, 135),
            0px 125px rgb(46, 46, 81);
        }

        .car-loader-door {
          position: absolute;
          width: 10px;
          height: 4px;
          background-color: black;
          right: -31px;
          bottom: 40px;
          z-index: 2;
        }

        .car-loader-door::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 20px;
          background-color: rgb(85, 84, 85);
          left: -21px;
          z-index: -1;
          bottom: -30px;
          box-shadow: inset 0px 4px rgb(163, 163, 163);
        }

        .car-loader-lights {
          position: absolute;
          width: 12px;
          height: 20px;
          background-color: rgb(255, 237, 191);
          right: -90px;
          bottom: 0px;
          z-index: 1;
          box-shadow: inset 0px -8px rgba(172, 2, 2, 0.719);
          animation: car-loader-lighting1 1.5s infinite ease-in-out;
        }

        @keyframes car-loader-lighting1 {
          0% {
            background-color: rgb(255, 237, 191);
            box-shadow: inset 0px -8px rgba(172, 2, 2, 0.719);
          }
          50% {
            box-shadow: inset 0px -8px rgba(217, 83, 1, 0.719);
          }
        }

        .car-loader-lights::before {
          content: "";
          position: absolute;
          width: 6px;
          height: 15px;
          background-color: rgb(207, 2, 2);
          left: -280px;
          bottom: 0px;
          box-shadow: inset 0px 7px rgb(207, 2, 2);
          animation: car-loader-lighting 1.5s infinite ease-in-out;
        }

        @keyframes car-loader-lighting {
          0% { box-shadow: inset 0px 9px rgb(207, 2, 2); }
          50% { box-shadow: inset 0px 9px rgb(255, 0, 0); }
        }

        .car-loader-lights::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 2px;
          background-color: rgb(81, 81, 81);
          top: -8px;
          box-shadow:
            0px -6px rgb(81, 81, 81),
            0px -12px rgb(81, 81, 81);
          right: 0px;
        }

        .car-loader-street {
          height: 2px;
          width: 70px;
          background-color: black;
          position: absolute;
          bottom: 55px; /* Adjusted bottom */
          left: 0;
          box-shadow:
            90px 0,
            180px 0,
            270px 0,
            360px 0;
          animation: car-loader-motion 2s linear infinite;
        }

        .car-loader-street::before {
          content: "";
          height: 2px;
          width: 70px;
          background-color: black;
          position: absolute;
          bottom: 0;
          left: 450px;
          box-shadow:
            90px 0,
            180px 0,
            270px 0,
            360px 0;
        }

        @keyframes car-loader-motion {
          0% { left: 0; }
          100% { left: -450px; }
        }

        .car-loader-post {
          position: absolute;
          width: 5px;
          height: 180px;
          background-color: black;
          right: -15px;
          top: 65px; /* Adjusted top */
          animation: car-loader-moving 2.9s infinite linear;
          z-index: -2;
        }

        @keyframes car-loader-moving {
          0% { transform: translateX(0px); }
          100% { transform: translateX(-650px); }
        }

        .car-loader-post::before {
          width: 20px;
          height: 20px;
          position: absolute;
          content: "";
          background-color: black;
          top: -15px;
          left: -7px;
          clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
        }

        .car-loader-post::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-bottom: 20px solid transparent;
          border-left: 10px solid transparent;
          border-left: 20px solid black;
          transform: rotate(45deg);
          top: -23px;
          left: -7px;
        }
        \`}
      </style>
      <div className="car-loader-container">
        <div className="car-loader-car">
          <div className="car-loader-window" />
          <div className="car-loader-cargo-details" />
          <div className="car-loader-door" />
          <div className="car-loader-lights" />
        </div>
        <div className="car-loader-wheels car-loader-wheels1" />
        <div className="car-loader-wheels car-loader-wheels2" />
        <div className="car-loader-street" />
        <div className="car-loader-post" />
      </div>
    </div>
  );
}

export default Loader;
`;function Ji(){return e.jsx(k,{title:"Car Loader",code:Qi,className:"min-h-[250px] overflow-hidden",children:e.jsxs("div",{className:"car-loader-wrapper scale-75 origin-center",children:[e.jsx("style",{children:`
            .car-loader-container {
              position: relative;
              width: 400px;
              height: 300px;
              margin: auto;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              background-color: transparent;
            }

            .car-loader-car {
              position: absolute;
              background-color: rgb(204, 204, 204);
              width: 200px;
              height: 120px;
              left: 50px;
              border-top: 4px solid rgb(162, 162, 162);
              top: 85px;
              animation: car-loader-bounce 0.4s infinite;
            }

            @keyframes car-loader-bounce {
              0% { top: 85px; }
              50% { top: 82px; }
            }

            .car-loader-car::before {
              content: "";
              position: absolute;
              width: 290px;
              height: 20px;
              background-color: rgb(46, 46, 81);
              bottom: -10px;
            }

            .car-loader-car::after {
              content: "";
              position: absolute;
              background-color: rgb(229, 229, 229);
              width: 80px;
              height: 90px;
              right: -90px;
              bottom: 10px;
              clip-path: polygon(0% 0%, 50% 0, 100% 60%, 100% 100%, 0% 100%);
            }

            .car-loader-window {
              position: absolute;
              background-color: rgb(126, 191, 226);
              width: 50px;
              height: 40px;
              right: -75px;
              top: 26px;
              z-index: 1;
              clip-path: polygon(0% 0%, 40% 0, 100% 100%, 0% 100%);
              border: 2px solid rgb(135, 135, 135);
            }

            .car-loader-window::before {
              content: "";
              position: absolute;
              background-color: rgb(186, 225, 247);
              width: 5px;
              height: 40px;
              left: 5px;
              transform: skew(-36deg);
              box-shadow: 9px 0px rgb(186, 225, 247);
            }
            .car-loader-window::after {
              content: "";
              position: absolute;
              background-color: rgb(108, 107, 107);
              width: 10px;
              height: 10px;
              bottom: 2px;
              right: 10px;
              box-shadow:
                2px 6px 0px -2px rgb(229, 229, 229),
                inset 2px 0px rgb(203, 203, 204);
            }

            .car-loader-wheels {
              position: absolute;
              width: 45px;
              height: 45px;
              border-radius: 50%;
              background-color: #bcbcbc;
              border: 10px solid rgb(4, 4, 4);
              bottom: 58px;
              left: 90px;
              box-shadow: 0px 0px 0px 4px;
              animation: car-loader-rotation 0.3s linear infinite;
            }

            @keyframes car-loader-rotation {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            .car-loader-wheels::before {
              content: "";
              position: absolute;
              width: 5px;
              height: 5px;
              background-color: rgb(67, 67, 67);
              top: 10px;
              left: 3px;
              border-radius: 50%;
              box-shadow:
                14.5px 0px rgb(67, 67, 67),
                7px -7px rgb(67, 67, 67),
                7px 7px rgb(67, 67, 67),
                7px 0px 0px 4px rgb(67, 67, 67);
            }

            .car-loader-wheels2 {
              left: 270px;
            }

            .car-loader-cargo-details {
              position: absolute;
              width: 185px;
              height: 20px;
              background-color: #e9e9e9;
              left: 8px;
              top: 5px;
              box-shadow:
                0px 23px #e9e9e9,
                0px 46px #e9e9e9,
                0px 69px #e9e9e9;
            }

            .car-loader-cargo-details::before {
              position: absolute;
              content: "";
              width: 10px;
              height: 4px;
              background-color: red;
              bottom: -72px;
              box-shadow:
                10px 0px white,
                20px 0px red,
                30px 0px white,
                40px 0px red,
                50px 0px white,
                60px 0px red,
                70px 0px white,
                80px 0px red,
                90px 0px white,
                100px 0px red,
                110px 0px white,
                120px 0px red,
                130px 0px white,
                140px 0px red,
                150px 0px white,
                160px 0px red,
                170px 0px white,
                175px 0px red;
            }

            .car-loader-cargo-details::after {
              position: absolute;
              content: "";
              width: 10px;
              height: 6px;
              background-color: rgb(135, 135, 135);
              top: -6px;
              left: -10px;
              box-shadow:
                195px 0px rgb(135, 135, 135),
                0px 125px rgb(46, 46, 81);
            }

            .car-loader-door {
              position: absolute;
              width: 10px;
              height: 4px;
              background-color: black;
              right: -31px;
              bottom: 40px;
              z-index: 2;
            }

            .car-loader-door::before {
              content: "";
              position: absolute;
              width: 10px;
              height: 20px;
              background-color: rgb(85, 84, 85);
              left: -21px;
              z-index: -1;
              bottom: -30px;
              box-shadow: inset 0px 4px rgb(163, 163, 163);
            }

            .car-loader-lights {
              position: absolute;
              width: 12px;
              height: 20px;
              background-color: rgb(255, 237, 191);
              right: -90px;
              bottom: 0px;
              z-index: 1;
              box-shadow: inset 0px -8px rgba(172, 2, 2, 0.719);
              animation: car-loader-lighting1 1.5s infinite ease-in-out;
            }

            @keyframes car-loader-lighting1 {
              0% {
                background-color: rgb(255, 237, 191);
                box-shadow: inset 0px -8px rgba(172, 2, 2, 0.719);
              }
              50% {
                box-shadow: inset 0px -8px rgba(217, 83, 1, 0.719);
              }
            }

            .car-loader-lights::before {
              content: "";
              position: absolute;
              width: 6px;
              height: 15px;
              background-color: rgb(207, 2, 2);
              left: -280px;
              bottom: 0px;
              box-shadow: inset 0px 7px rgb(207, 2, 2);
              animation: car-loader-lighting 1.5s infinite ease-in-out;
            }

            @keyframes car-loader-lighting {
              0% { box-shadow: inset 0px 9px rgb(207, 2, 2); }
              50% { box-shadow: inset 0px 9px rgb(255, 0, 0); }
            }

            .car-loader-lights::after {
              content: "";
              position: absolute;
              width: 8px;
              height: 2px;
              background-color: rgb(81, 81, 81);
              top: -8px;
              box-shadow:
                0px -6px rgb(81, 81, 81),
                0px -12px rgb(81, 81, 81);
              right: 0px;
            }

            .car-loader-street {
              height: 2px;
              width: 70px;
              background-color: black;
              position: absolute;
              bottom: 55px;
              left: 0;
              box-shadow:
                90px 0,
                180px 0,
                270px 0,
                360px 0;
              animation: car-loader-motion 2s linear infinite;
            }

            .car-loader-street::before {
              content: "";
              height: 2px;
              width: 70px;
              background-color: black;
              position: absolute;
              bottom: 0;
              left: 450px;
              box-shadow:
                90px 0,
                180px 0,
                270px 0,
                360px 0;
            }

            @keyframes car-loader-motion {
              0% { left: 0; }
              100% { left: -450px; }
            }

            .car-loader-post {
              position: absolute;
              width: 5px;
              height: 180px;
              background-color: black;
              right: -15px;
              top: 65px;
              animation: car-loader-moving 2.9s infinite linear;
              z-index: -2;
            }

            @keyframes car-loader-moving {
              0% { transform: translateX(0px); }
              100% { transform: translateX(-650px); }
            }

            .car-loader-post::before {
              width: 20px;
              height: 20px;
              position: absolute;
              content: "";
              background-color: black;
              top: -15px;
              left: -7px;
              clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
            }

            .car-loader-post::after {
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              border-bottom: 20px solid transparent;
              border-left: 10px solid transparent;
              border-left: 20px solid black;
              transform: rotate(45deg);
              top: -23px;
              left: -7px;
            }
            `}),e.jsxs("div",{className:"car-loader-container",children:[e.jsxs("div",{className:"car-loader-car",children:[e.jsx("div",{className:"car-loader-window"}),e.jsx("div",{className:"car-loader-cargo-details"}),e.jsx("div",{className:"car-loader-door"}),e.jsx("div",{className:"car-loader-lights"})]}),e.jsx("div",{className:"car-loader-wheels car-loader-wheels1"}),e.jsx("div",{className:"car-loader-wheels car-loader-wheels2"}),e.jsx("div",{className:"car-loader-street"}),e.jsx("div",{className:"car-loader-post"})]})]})})}const Ki=`import React from 'react';

const Loader = () => {
  return (
    <div className="flowing-spinner-wrapper">
      <style>
        {\`
        .flowing-spinner {
          position: absolute;
          width: 9px;
          height: 9px;
        }

        .flowing-spinner div {
          position: absolute;
          width: 50%;
          height: 150%;
          background: #000000;
          transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
          animation: flowing-spinner-anim 1s calc(var(--delay) * 1s) infinite ease;
        }

        .flowing-spinner div:nth-child(1) { --delay: 0.1; --rotation: 36; --translation: 150; }
        .flowing-spinner div:nth-child(2) { --delay: 0.2; --rotation: 72; --translation: 150; }
        .flowing-spinner div:nth-child(3) { --delay: 0.3; --rotation: 108; --translation: 150; }
        .flowing-spinner div:nth-child(4) { --delay: 0.4; --rotation: 144; --translation: 150; }
        .flowing-spinner div:nth-child(5) { --delay: 0.5; --rotation: 180; --translation: 150; }
        .flowing-spinner div:nth-child(6) { --delay: 0.6; --rotation: 216; --translation: 150; }
        .flowing-spinner div:nth-child(7) { --delay: 0.7; --rotation: 252; --translation: 150; }
        .flowing-spinner div:nth-child(8) { --delay: 0.8; --rotation: 288; --translation: 150; }
        .flowing-spinner div:nth-child(9) { --delay: 0.9; --rotation: 324; --translation: 150; }
        .flowing-spinner div:nth-child(10) { --delay: 1; --rotation: 360; --translation: 150; }

        @keyframes flowing-spinner-anim {
          0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
          }
          50% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
          }
        }
        \`}
      </style>
      <div className="flowing-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
`;function eo(){return e.jsx(k,{title:"Flowing Spinner",code:Ki,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"flowing-spinner-wrapper relative w-10 h-10 flex items-center justify-center scale-[3]",children:[e.jsx("style",{children:`
            .flowing-spinner {
              position: relative;
              width: 9px;
              height: 9px;
            }

            .flowing-spinner div {
              position: absolute;
              width: 50%;
              height: 150%;
              background: #000000;
              transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
              animation: flowing-spinner-anim 1s calc(var(--delay) * 1s) infinite ease;
            }

            .flowing-spinner div:nth-child(1) { --delay: 0.1; --rotation: 36; --translation: 150; }
            .flowing-spinner div:nth-child(2) { --delay: 0.2; --rotation: 72; --translation: 150; }
            .flowing-spinner div:nth-child(3) { --delay: 0.3; --rotation: 108; --translation: 150; }
            .flowing-spinner div:nth-child(4) { --delay: 0.4; --rotation: 144; --translation: 150; }
            .flowing-spinner div:nth-child(5) { --delay: 0.5; --rotation: 180; --translation: 150; }
            .flowing-spinner div:nth-child(6) { --delay: 0.6; --rotation: 216; --translation: 150; }
            .flowing-spinner div:nth-child(7) { --delay: 0.7; --rotation: 252; --translation: 150; }
            .flowing-spinner div:nth-child(8) { --delay: 0.8; --rotation: 288; --translation: 150; }
            .flowing-spinner div:nth-child(9) { --delay: 0.9; --rotation: 324; --translation: 150; }
            .flowing-spinner div:nth-child(10) { --delay: 1; --rotation: 360; --translation: 150; }

            @keyframes flowing-spinner-anim {
              0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
                transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
              }
              50% {
                transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
              }
            }
            `}),e.jsxs("div",{className:"flowing-spinner",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})]})})}const to=`import React from 'react';

const Loader = () => {
  return (
    <div className="circular-pulse-wrapper">
      <style>
        {\`
        .circular-pulse {
          --uib-size: 2.8rem;
          --uib-speed: .9s;
          --uib-color: #183153;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: var(--uib-size);
          width: var(--uib-size);
        }

        .circular-pulse-dot {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 100%;
          width: 100%;
        }

        .circular-pulse-dot::before {
          content: '';
          height: 20%;
          width: 20%;
          border-radius: 50%;
          background-color: var(--uib-color);
          transform: scale(0);
          opacity: 0.5;
          animation: circular-pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
          box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
          padding-bottom: 222px; /* Restored "spiky" padding */
        }

        .circular-pulse-dot:nth-child(2) { transform: rotate(45deg); }
        .circular-pulse-dot:nth-child(2)::before { animation-delay: calc(var(--uib-speed) * -0.875); }

        .circular-pulse-dot:nth-child(3) { transform: rotate(90deg); }
        .circular-pulse-dot:nth-child(3)::before { animation-delay: calc(var(--uib-speed) * -0.75); }

        .circular-pulse-dot:nth-child(4) { transform: rotate(135deg); }
        .circular-pulse-dot:nth-child(4)::before { animation-delay: calc(var(--uib-speed) * -0.625); }

        .circular-pulse-dot:nth-child(5) { transform: rotate(180deg); }
        .circular-pulse-dot:nth-child(5)::before { animation-delay: calc(var(--uib-speed) * -0.5); }

        .circular-pulse-dot:nth-child(6) { transform: rotate(225deg); }
        .circular-pulse-dot:nth-child(6)::before { animation-delay: calc(var(--uib-speed) * -0.375); }

        /* 
           Original code had a selector mismatch (.dot-spinner__dot vs .loaders), 
           causing the 7th element NOT to rotate. Replicating that behavior here.
        */
        /* .circular-pulse-dot:nth-child(7) { transform: rotate(270deg); } */ 
        
        .circular-pulse-dot:nth-child(7)::before { animation-delay: calc(var(--uib-speed) * -0.25); }

        .circular-pulse-dot:nth-child(8) { transform: rotate(315deg); }
        .circular-pulse-dot:nth-child(8)::before { animation-delay: calc(var(--uib-speed) * -0.125); }

        @keyframes circular-pulse0112 {
          0%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
        \`}
      </style>
      <div className="circular-pulse">
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
        <div className="circular-pulse-dot" />
      </div>
    </div>
  );
}

export default Loader;
`;function ro(){return e.jsx(k,{title:"Circular Pulse Loader",code:to,className:"min-h-[250px] flex items-center justify-center overflow-hidden",children:e.jsxs("div",{className:"circular-pulse-wrapper scale-[0.5] sm:scale-100",children:[e.jsx("style",{children:`
            .circular-pulse {
              --uib-size: 2.8rem;
              --uib-speed: .9s;
              --uib-color: #183153;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              height: var(--uib-size);
              width: var(--uib-size);
            }

            .circular-pulse-dot {
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              height: 100%;
              width: 100%;
            }

            .circular-pulse-dot::before {
              content: '';
              height: 20%;
              width: 20%;
              border-radius: 50%;
              background-color: var(--uib-color);
              transform: scale(0);
              opacity: 0.5;
              animation: circular-pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
              box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
              padding-bottom: 222px; /* Restored "spiky" padding */
            }

            .circular-pulse-dot:nth-child(2) { transform: rotate(45deg); }
            .circular-pulse-dot:nth-child(2)::before { animation-delay: calc(var(--uib-speed) * -0.875); }

            .circular-pulse-dot:nth-child(3) { transform: rotate(90deg); }
            .circular-pulse-dot:nth-child(3)::before { animation-delay: calc(var(--uib-speed) * -0.75); }

            .circular-pulse-dot:nth-child(4) { transform: rotate(135deg); }
            .circular-pulse-dot:nth-child(4)::before { animation-delay: calc(var(--uib-speed) * -0.625); }

            .circular-pulse-dot:nth-child(5) { transform: rotate(180deg); }
            .circular-pulse-dot:nth-child(5)::before { animation-delay: calc(var(--uib-speed) * -0.5); }

            .circular-pulse-dot:nth-child(6) { transform: rotate(225deg); }
            .circular-pulse-dot:nth-child(6)::before { animation-delay: calc(var(--uib-speed) * -0.375); }

            /* 7th rotation omitted to match original behavior */
            .circular-pulse-dot:nth-child(7)::before { animation-delay: calc(var(--uib-speed) * -0.25); }

            .circular-pulse-dot:nth-child(8) { transform: rotate(315deg); }
            .circular-pulse-dot:nth-child(8)::before { animation-delay: calc(var(--uib-speed) * -0.125); }

            @keyframes circular-pulse0112 {
              0%, 100% {
                transform: scale(0);
                opacity: 0.5;
              }
              50% {
                transform: scale(1);
                opacity: 1;
              }
            }
            `}),e.jsxs("div",{className:"circular-pulse",children:[e.jsx("div",{className:"circular-pulse-dot"}),e.jsx("div",{className:"circular-pulse-dot"}),e.jsx("div",{className:"circular-pulse-dot"}),e.jsx("div",{className:"circular-pulse-dot"}),e.jsx("div",{className:"circular-pulse-dot"}),e.jsx("div",{className:"circular-pulse-dot"}),e.jsx("div",{className:"circular-pulse-dot"}),e.jsx("div",{className:"circular-pulse-dot"})]})]})})}const ao=`import React from 'react';

const Loader = () => {
  return (
    <div className="crystal-loader-wrapper">
      <style>
        {\`
        .crystal-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .crystal-loader {
          position: relative;
          width: 200px;
          height: 200px;
          perspective: 800px;
        }

        .crystal-shard {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          opacity: 0;
          transform-origin: bottom center;
          transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
          animation: crystal-spin 4s linear infinite, crystal-emerge 2s ease-in-out infinite alternate,
            crystal-fadeIn 0.3s ease-out forwards;
          border-radius: 10px;
          visibility: hidden;
        }

        @keyframes crystal-spin {
          from {
            transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotateX(45deg) rotateZ(360deg);
          }
        }

        @keyframes crystal-emerge {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        @keyframes crystal-fadeIn {
          to {
            visibility: visible;
            opacity: 0.8;
          }
        }

        .crystal-shard:nth-child(1) {
          background: linear-gradient(45deg, #003366, #336699);
          animation-delay: 0s;
        }

        .crystal-shard:nth-child(2) {
          background: linear-gradient(45deg, #003399, #3366cc);
          animation-delay: 0.3s;
        }

        .crystal-shard:nth-child(3) {
          background: linear-gradient(45deg, #0066cc, #3399ff);
          animation-delay: 0.6s;
        }

        .crystal-shard:nth-child(4) {
          background: linear-gradient(45deg, #0099ff, #66ccff);
          animation-delay: 0.9s;
        }

        .crystal-shard:nth-child(5) {
          background: linear-gradient(45deg, #33ccff, #99ccff);
          animation-delay: 1.2s;
        }

        .crystal-shard:nth-child(6) {
          background: linear-gradient(45deg, #66ffff, #ccffff);
          animation-delay: 1.5s;
        }
        \`}
      </style>
      <div className="crystal-container">
        <div className="crystal-loader">
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
          <div className="crystal-shard" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
`;function io(){return e.jsx(k,{title:"Crystal Loader",code:ao,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"crystal-loader-wrapper",children:[e.jsx("style",{children:`
            .crystal-container {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .crystal-loader {
              position: relative;
              width: 200px;
              height: 200px;
              perspective: 800px;
            }

            .crystal-shard {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 60px;
              height: 60px;
              opacity: 0;
              transform-origin: bottom center;
              transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
              animation: crystal-spin 4s linear infinite, crystal-emerge 2s ease-in-out infinite alternate,
                crystal-fadeIn 0.3s ease-out forwards;
              border-radius: 10px;
              visibility: hidden;
            }

            @keyframes crystal-spin {
              from {
                transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
              }
              to {
                transform: translate(-50%, -50%) rotateX(45deg) rotateZ(360deg);
              }
            }

            @keyframes crystal-emerge {
              0%,
              100% {
                transform: translate(-50%, -50%) scale(0.5);
                opacity: 0;
              }
              50% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
              }
            }

            @keyframes crystal-fadeIn {
              to {
                visibility: visible;
                opacity: 0.8;
              }
            }

            .crystal-shard:nth-child(1) {
              background: linear-gradient(45deg, #003366, #336699);
              animation-delay: 0s;
            }

            .crystal-shard:nth-child(2) {
              background: linear-gradient(45deg, #003399, #3366cc);
              animation-delay: 0.3s;
            }

            .crystal-shard:nth-child(3) {
              background: linear-gradient(45deg, #0066cc, #3399ff);
              animation-delay: 0.6s;
            }

            .crystal-shard:nth-child(4) {
              background: linear-gradient(45deg, #0099ff, #66ccff);
              animation-delay: 0.9s;
            }

            .crystal-shard:nth-child(5) {
              background: linear-gradient(45deg, #33ccff, #99ccff);
              animation-delay: 1.2s;
            }

            .crystal-shard:nth-child(6) {
              background: linear-gradient(45deg, #66ffff, #ccffff);
              animation-delay: 1.5s;
            }
            `}),e.jsx("div",{className:"crystal-container",children:e.jsxs("div",{className:"crystal-loader",children:[e.jsx("div",{className:"crystal-shard"}),e.jsx("div",{className:"crystal-shard"}),e.jsx("div",{className:"crystal-shard"}),e.jsx("div",{className:"crystal-shard"}),e.jsx("div",{className:"crystal-shard"}),e.jsx("div",{className:"crystal-shard"})]})})]})})}const oo=`import React from 'react';

const GyroLoader = () => {
  return (
    <div className="gyro-wrapper">
      <style>
        {\`
        .gyro-wrapper .gyro-spinner {
          border: 0 solid transparent;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          position: relative;
        }

        .gyro-wrapper .gyro-loader {
          width: inherit;
          height: inherit;
          position: absolute;
        }

        .gyro-wrapper .gyro-loader::before,
        .gyro-wrapper .gyro-loader::after {
          content: '';
          border: 3px solid #505065;
          border-radius: 50%;
          width: inherit;
          height: inherit;
          position: absolute;
          opacity: 1;
        }

        .gyro-wrapper .gyro-l1::before,
        .gyro-wrapper .gyro-l1::after {
          animation: gyro-clockwiseZ 2.5s infinite;
        }

        .gyro-wrapper .gyro-l2::after,
        .gyro-wrapper .gyro-l2::before {
          animation: gyro-anticlockwiseZ 2.5s infinite;
        }

        @keyframes gyro-clockwiseZ {
          0%, 100% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(180deg) skew(-10deg, -5deg);
          }
        }

        @keyframes gyro-anticlockwiseZ {
          0%, 100% {
            transform: rotateX(0);
          }
          50% {
            transform: rotateX(-180deg) skew(10deg, 5deg);
          }
        }
        \`}
      </style>
      <div className="gyro-spinner">
        <div className="gyro-loader gyro-l1" />
        <div className="gyro-loader gyro-l2" />
      </div>
    </div>
  );
}

export default GyroLoader;
`;function so(){return e.jsx(k,{title:"Gyro Loader",code:oo,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"gyro-wrapper",children:[e.jsx("style",{children:`
        .gyro-wrapper .gyro-spinner {
          border: 0 solid transparent;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          position: relative;
        }

        .gyro-wrapper .gyro-loader {
          width: inherit;
          height: inherit;
          position: absolute;
        }

        .gyro-wrapper .gyro-loader::before,
        .gyro-wrapper .gyro-loader::after {
          content: '';
          border: 3px solid #505065;
          border-radius: 50%;
          width: inherit;
          height: inherit;
          position: absolute;
          opacity: 1;
        }

        .gyro-wrapper .gyro-l1::before,
        .gyro-wrapper .gyro-l1::after {
          animation: gyro-clockwiseZ 2.5s infinite;
        }

        .gyro-wrapper .gyro-l2::after,
        .gyro-wrapper .gyro-l2::before {
          animation: gyro-anticlockwiseZ 2.5s infinite;
        }

        @keyframes gyro-clockwiseZ {
          0%, 100% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(180deg) skew(-10deg, -5deg);
          }
        }

        @keyframes gyro-anticlockwiseZ {
          0%, 100% {
            transform: rotateX(0);
          }
          50% {
            transform: rotateX(-180deg) skew(10deg, 5deg);
          }
        }
        `}),e.jsxs("div",{className:"gyro-spinner",children:[e.jsx("div",{className:"gyro-loader gyro-l1"}),e.jsx("div",{className:"gyro-loader gyro-l2"})]})]})})}const no=`import React from 'react';

const LikeButton = () => {
  return (
    <div className="like-btn-wrapper">
      <style>
        {\`
        .like-btn-wrapper .like-container {
          --like-heart-color: rgb(255, 91, 137);
          position: relative;
          width: 50px;
          height: 50px;
          transition: .3s;
        }

        .like-btn-wrapper .like-checkbox {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 20;
          cursor: pointer;
        }

        .like-btn-wrapper .like-svg-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .like-btn-wrapper .like-svg-outline,
        .like-btn-wrapper .like-svg-filled {
          fill: var(--like-heart-color);
          position: absolute;
        }

        .like-btn-wrapper .like-svg-filled {
          animation: like-heart-filled-anim 1s;
          display: none;
        }

        .like-btn-wrapper .like-svg-celebrate {
          position: absolute;
          animation: like-heart-celebrate-anim .5s;
          animation-fill-mode: forwards;
          display: none;
          stroke: var(--like-heart-color);
          fill: var(--like-heart-color);
          stroke-width: 2px;
        }

        .like-btn-wrapper .like-checkbox:checked ~ .like-svg-container .like-svg-filled {
          display: block
        }

        .like-btn-wrapper .like-checkbox:checked ~ .like-svg-container .like-svg-celebrate {
          display: block
        }

        @keyframes like-heart-filled-anim {
          0% { transform: scale(0); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); filter: brightness(1.5); }
        }

        @keyframes like-heart-celebrate-anim {
          0% { transform: scale(0); }
          50% { opacity: 1; filter: brightness(1.5); }
          100% { transform: scale(1.4); opacity: 0; display: none; }
        }
        \`}
      </style>
      <div className="like-container" title="Like">
        <input type="checkbox" className="like-checkbox" id="like-btn-checkbox" />
        <div className="like-svg-container">
          <svg viewBox="0 0 24 24" className="like-svg-outline" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
            </path>
          </svg>
          <svg viewBox="0 0 24 24" className="like-svg-filled" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
            </path>
          </svg>
          <svg className="like-svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="10,10 20,20" />
            <polygon points="10,50 20,50" />
            <polygon points="20,80 30,70" />
            <polygon points="90,10 80,20" />
            <polygon points="90,50 80,50" />
            <polygon points="80,80 70,70" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LikeButton;
`;function lo(){return e.jsx(k,{title:"Like Button",code:no,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"like-btn-wrapper",children:[e.jsx("style",{children:`
        .like-btn-wrapper .like-container {
          --like-heart-color: rgb(255, 91, 137);
          position: relative;
          width: 50px;
          height: 50px;
          transition: .3s;
        }

        .like-btn-wrapper .like-checkbox {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 20;
          cursor: pointer;
        }

        .like-btn-wrapper .like-svg-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .like-btn-wrapper .like-svg-outline,
        .like-btn-wrapper .like-svg-filled {
          fill: var(--like-heart-color);
          position: absolute;
        }

        .like-btn-wrapper .like-svg-filled {
          animation: like-heart-filled-anim 1s;
          display: none;
        }

        .like-btn-wrapper .like-svg-celebrate {
          position: absolute;
          animation: like-heart-celebrate-anim .5s;
          animation-fill-mode: forwards;
          display: none;
          stroke: var(--like-heart-color);
          fill: var(--like-heart-color);
          stroke-width: 2px;
        }

        .like-btn-wrapper .like-checkbox:checked ~ .like-svg-container .like-svg-filled {
          display: block
        }

        .like-btn-wrapper .like-checkbox:checked ~ .like-svg-container .like-svg-celebrate {
          display: block
        }

        @keyframes like-heart-filled-anim {
          0% { transform: scale(0); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); filter: brightness(1.5); }
        }

        @keyframes like-heart-celebrate-anim {
          0% { transform: scale(0); }
          50% { opacity: 1; filter: brightness(1.5); }
          100% { transform: scale(1.4); opacity: 0; display: none; }
        }
        `}),e.jsxs("div",{className:"like-container",title:"Like",children:[e.jsx("input",{type:"checkbox",className:"like-checkbox",id:"like-btn-checkbox"}),e.jsxs("div",{className:"like-svg-container",children:[e.jsx("svg",{viewBox:"0 0 24 24",className:"like-svg-outline",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"})}),e.jsx("svg",{viewBox:"0 0 24 24",className:"like-svg-filled",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"})}),e.jsxs("svg",{className:"like-svg-celebrate",width:"100",height:"100",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("polygon",{points:"10,10 20,20"}),e.jsx("polygon",{points:"10,50 20,50"}),e.jsx("polygon",{points:"20,80 30,70"}),e.jsx("polygon",{points:"90,10 80,20"}),e.jsx("polygon",{points:"90,50 80,50"}),e.jsx("polygon",{points:"80,80 70,70"})]})]})]})]})})}const co=`import React from 'react';

const Loader = () => {
  return (
    <div className="banter-loader-wrapper">
      <style>
        {\`
        .banter-loader {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 72px;
          height: 72px;
          margin-left: -36px;
          margin-top: -36px;
        }

        .banter-box {
          float: left;
          position: relative;
          width: 20px;
          height: 20px;
          margin-right: 6px;
        }

        .banter-box:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #fff;
        }

        .banter-box:nth-child(3n) {
          margin-right: 0;
          margin-bottom: 6px;
        }

        .banter-box:nth-child(1):before, .banter-box:nth-child(4):before { margin-left: 26px; }
        .banter-box:nth-child(3):before { margin-top: 52px; }
        .banter-box:last-child { margin-bottom: 0; }

        .banter-box:nth-child(1) { animation: banter-moveBox-1 4s infinite; }
        .banter-box:nth-child(2) { animation: banter-moveBox-2 4s infinite; }
        .banter-box:nth-child(3) { animation: banter-moveBox-3 4s infinite; }
        .banter-box:nth-child(4) { animation: banter-moveBox-4 4s infinite; }
        .banter-box:nth-child(5) { animation: banter-moveBox-5 4s infinite; }
        .banter-box:nth-child(6) { animation: banter-moveBox-6 4s infinite; }
        .banter-box:nth-child(7) { animation: banter-moveBox-7 4s infinite; }
        .banter-box:nth-child(8) { animation: banter-moveBox-8 4s infinite; }
        .banter-box:nth-child(9) { animation: banter-moveBox-9 4s infinite; }

        @keyframes banter-moveBox-1 {
          9.09% { transform: translate(-26px, 0); }
          18.18% { transform: translate(0px, 0); }
          27.27% { transform: translate(0px, 0); }
          36.36% { transform: translate(26px, 0); }
          45.45% { transform: translate(26px, 26px); }
          54.54% { transform: translate(26px, 26px); }
          63.63% { transform: translate(26px, 26px); }
          72.72% { transform: translate(26px, 0px); }
          81.81% { transform: translate(0px, 0px); }
          90.90% { transform: translate(-26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-2 {
          9.09% { transform: translate(0, 0); }
          18.18% { transform: translate(26px, 0); }
          27.27% { transform: translate(0px, 0); }
          36.36% { transform: translate(26px, 0); }
          45.45% { transform: translate(26px, 26px); }
          54.54% { transform: translate(26px, 26px); }
          63.63% { transform: translate(26px, 26px); }
          72.72% { transform: translate(26px, 26px); }
          81.81% { transform: translate(0px, 26px); }
          90.90% { transform: translate(0px, 26px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-3 {
          9.09% { transform: translate(-26px, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(0px, 0); }
          36.36% { transform: translate(-26px, 0); }
          45.45% { transform: translate(-26px, 0); }
          54.54% { transform: translate(-26px, 0); }
          63.63% { transform: translate(-26px, 0); }
          72.72% { transform: translate(-26px, 0); }
          81.81% { transform: translate(-26px, -26px); }
          90.90% { transform: translate(0px, -26px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-4 {
          9.09% { transform: translate(-26px, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(-26px, -26px); }
          36.36% { transform: translate(0px, -26px); }
          45.45% { transform: translate(0px, 0px); }
          54.54% { transform: translate(0px, -26px); }
          63.63% { transform: translate(0px, -26px); }
          72.72% { transform: translate(0px, -26px); }
          81.81% { transform: translate(-26px, -26px); }
          90.90% { transform: translate(-26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-5 {
          9.09% { transform: translate(0, 0); }
          18.18% { transform: translate(0, 0); }
          27.27% { transform: translate(0, 0); }
          36.36% { transform: translate(26px, 0); }
          45.45% { transform: translate(26px, 0); }
          54.54% { transform: translate(26px, 0); }
          63.63% { transform: translate(26px, 0); }
          72.72% { transform: translate(26px, 0); }
          81.81% { transform: translate(26px, -26px); }
          90.90% { transform: translate(0px, -26px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-6 {
          9.09% { transform: translate(0, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(-26px, 0); }
          36.36% { transform: translate(0px, 0); }
          45.45% { transform: translate(0px, 0); }
          54.54% { transform: translate(0px, 0); }
          63.63% { transform: translate(0px, 0); }
          72.72% { transform: translate(0px, 26px); }
          81.81% { transform: translate(-26px, 26px); }
          90.90% { transform: translate(-26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-7 {
          9.09% { transform: translate(26px, 0); }
          18.18% { transform: translate(26px, 0); }
          27.27% { transform: translate(26px, 0); }
          36.36% { transform: translate(0px, 0); }
          45.45% { transform: translate(0px, -26px); }
          54.54% { transform: translate(26px, -26px); }
          63.63% { transform: translate(0px, -26px); }
          72.72% { transform: translate(0px, -26px); }
          81.81% { transform: translate(0px, 0px); }
          90.90% { transform: translate(26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-8 {
          9.09% { transform: translate(0, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(-26px, -26px); }
          36.36% { transform: translate(0px, -26px); }
          45.45% { transform: translate(0px, -26px); }
          54.54% { transform: translate(0px, -26px); }
          63.63% { transform: translate(0px, -26px); }
          72.72% { transform: translate(0px, -26px); }
          81.81% { transform: translate(26px, -26px); }
          90.90% { transform: translate(26px, 0px); }
          100% { transform: translate(0px, 0px); }
        }

        @keyframes banter-moveBox-9 {
          9.09% { transform: translate(-26px, 0); }
          18.18% { transform: translate(-26px, 0); }
          27.27% { transform: translate(0px, 0); }
          36.36% { transform: translate(-26px, 0); }
          45.45% { transform: translate(0px, 0); }
          54.54% { transform: translate(0px, 0); }
          63.63% { transform: translate(-26px, 0); }
          72.72% { transform: translate(-26px, 0); }
          81.81% { transform: translate(-52px, 0); }
          90.90% { transform: translate(-26px, 0); }
          100% { transform: translate(0px, 0); }
        }
        \`}
      </style>
      <div className="banter-loader">
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
        <div className="banter-box" />
      </div>
    </div>
  );
}

export default Loader;
`;function po(){return e.jsx(k,{title:"Banter Loader",code:co,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"banter-loader-wrapper w-full h-full min-h-[150px] relative bg-transparent rounded-lg",children:[e.jsx("style",{children:`
            .banter-loader {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 72px;
              height: 72px;
              margin-left: -36px;
              margin-top: -36px;
            }

            .banter-box {
              float: left;
              position: relative;
              width: 20px;
              height: 20px;
              margin-right: 6px;
            }

            .banter-box:before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: #000;
            }

            .dark .banter-box:before {
              background: #fff;
            }

            .banter-box:nth-child(3n) {
              margin-right: 0;
              margin-bottom: 6px;
            }

            .banter-box:nth-child(1):before, .banter-box:nth-child(4):before { margin-left: 26px; }
            .banter-box:nth-child(3):before { margin-top: 52px; }
            .banter-box:last-child { margin-bottom: 0; }

            .banter-box:nth-child(1) { animation: banter-moveBox-1 4s infinite; }
            .banter-box:nth-child(2) { animation: banter-moveBox-2 4s infinite; }
            .banter-box:nth-child(3) { animation: banter-moveBox-3 4s infinite; }
            .banter-box:nth-child(4) { animation: banter-moveBox-4 4s infinite; }
            .banter-box:nth-child(5) { animation: banter-moveBox-5 4s infinite; }
            .banter-box:nth-child(6) { animation: banter-moveBox-6 4s infinite; }
            .banter-box:nth-child(7) { animation: banter-moveBox-7 4s infinite; }
            .banter-box:nth-child(8) { animation: banter-moveBox-8 4s infinite; }
            .banter-box:nth-child(9) { animation: banter-moveBox-9 4s infinite; }

            @keyframes banter-moveBox-1 {
              9.09% { transform: translate(-26px, 0); }
              18.18% { transform: translate(0px, 0); }
              27.27% { transform: translate(0px, 0); }
              36.36% { transform: translate(26px, 0); }
              45.45% { transform: translate(26px, 26px); }
              54.54% { transform: translate(26px, 26px); }
              63.63% { transform: translate(26px, 26px); }
              72.72% { transform: translate(26px, 0px); }
              81.81% { transform: translate(0px, 0px); }
              90.90% { transform: translate(-26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-2 {
              9.09% { transform: translate(0, 0); }
              18.18% { transform: translate(26px, 0); }
              27.27% { transform: translate(0px, 0); }
              36.36% { transform: translate(26px, 0); }
              45.45% { transform: translate(26px, 26px); }
              54.54% { transform: translate(26px, 26px); }
              63.63% { transform: translate(26px, 26px); }
              72.72% { transform: translate(26px, 26px); }
              81.81% { transform: translate(0px, 26px); }
              90.90% { transform: translate(0px, 26px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-3 {
              9.09% { transform: translate(-26px, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(0px, 0); }
              36.36% { transform: translate(-26px, 0); }
              45.45% { transform: translate(-26px, 0); }
              54.54% { transform: translate(-26px, 0); }
              63.63% { transform: translate(-26px, 0); }
              72.72% { transform: translate(-26px, 0); }
              81.81% { transform: translate(-26px, -26px); }
              90.90% { transform: translate(0px, -26px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-4 {
              9.09% { transform: translate(-26px, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(-26px, -26px); }
              36.36% { transform: translate(0px, -26px); }
              45.45% { transform: translate(0px, 0px); }
              54.54% { transform: translate(0px, -26px); }
              63.63% { transform: translate(0px, -26px); }
              72.72% { transform: translate(0px, -26px); }
              81.81% { transform: translate(-26px, -26px); }
              90.90% { transform: translate(-26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-5 {
              9.09% { transform: translate(0, 0); }
              18.18% { transform: translate(0, 0); }
              27.27% { transform: translate(0, 0); }
              36.36% { transform: translate(26px, 0); }
              45.45% { transform: translate(26px, 0); }
              54.54% { transform: translate(26px, 0); }
              63.63% { transform: translate(26px, 0); }
              72.72% { transform: translate(26px, 0); }
              81.81% { transform: translate(26px, -26px); }
              90.90% { transform: translate(0px, -26px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-6 {
              9.09% { transform: translate(0, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(-26px, 0); }
              36.36% { transform: translate(0px, 0); }
              45.45% { transform: translate(0px, 0); }
              54.54% { transform: translate(0px, 0); }
              63.63% { transform: translate(0px, 0); }
              72.72% { transform: translate(0px, 26px); }
              81.81% { transform: translate(-26px, 26px); }
              90.90% { transform: translate(-26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-7 {
              9.09% { transform: translate(26px, 0); }
              18.18% { transform: translate(26px, 0); }
              27.27% { transform: translate(26px, 0); }
              36.36% { transform: translate(0px, 0); }
              45.45% { transform: translate(0px, -26px); }
              54.54% { transform: translate(26px, -26px); }
              63.63% { transform: translate(0px, -26px); }
              72.72% { transform: translate(0px, -26px); }
              81.81% { transform: translate(0px, 0px); }
              90.90% { transform: translate(26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-8 {
              9.09% { transform: translate(0, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(-26px, -26px); }
              36.36% { transform: translate(0px, -26px); }
              45.45% { transform: translate(0px, -26px); }
              54.54% { transform: translate(0px, -26px); }
              63.63% { transform: translate(0px, -26px); }
              72.72% { transform: translate(0px, -26px); }
              81.81% { transform: translate(26px, -26px); }
              90.90% { transform: translate(26px, 0px); }
              100% { transform: translate(0px, 0px); }
            }

            @keyframes banter-moveBox-9 {
              9.09% { transform: translate(-26px, 0); }
              18.18% { transform: translate(-26px, 0); }
              27.27% { transform: translate(0px, 0); }
              36.36% { transform: translate(-26px, 0); }
              45.45% { transform: translate(0px, 0); }
              54.54% { transform: translate(0px, 0); }
              63.63% { transform: translate(-26px, 0); }
              72.72% { transform: translate(-26px, 0); }
              81.81% { transform: translate(-52px, 0); }
              90.90% { transform: translate(-26px, 0); }
              100% { transform: translate(0px, 0); }
            }
            `}),e.jsxs("div",{className:"banter-loader",children:[e.jsx("div",{className:"banter-box"}),e.jsx("div",{className:"banter-box"}),e.jsx("div",{className:"banter-box"}),e.jsx("div",{className:"banter-box"}),e.jsx("div",{className:"banter-box"}),e.jsx("div",{className:"banter-box"}),e.jsx("div",{className:"banter-box"}),e.jsx("div",{className:"banter-box"}),e.jsx("div",{className:"banter-box"})]})]})})}const ho=`import React from 'react';

const Pattern = () => {
  return (
    <div className="matrix-loader-wrapper">
      <style>
        {\`
        .matrix-container {
          background-color: #05050a;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
          grid-auto-rows: 40px;
          min-width: 100%; /* Adjusted for container */
          min-height: 100%; /* Adjusted for container */
          font-size: 32px;
          color: rgba(0, 150, 255, 0.4);
          font-family: "Courier New", Courier, monospace;
          justify-content: center;
          align-content: center;
        }

        .matrix-container > span {
          text-align: center;
          text-shadow: 0 0 5px rgba(0, 150, 255, 0.5);
          user-select: none;
          transition: color 0.5s, text-shadow 0.5s;
          line-height: 1;
        }

        /* Animation classes for random pulsing */
        .matrix-container > span:nth-child(19n + 2) { animation: matrix-pulse 3.5s ease-in-out infinite 0.2s; }
        .matrix-container > span:nth-child(29n + 1) { animation: matrix-pulse 4.1s ease-in-out infinite 0.7s; }
        .matrix-container > span:nth-child(11n) { color: rgba(100, 200, 255, 0.7); animation: matrix-pulse 2.9s ease-in-out infinite 1.1s; }
        .matrix-container > span:nth-child(37n + 10) { animation: matrix-pulse 5.3s ease-in-out infinite 1.5s; }
        /* ... more random selectors ... */

        @keyframes matrix-pulse {
          0%, 100% {
            color: rgba(0, 150, 255, 0.4);
            text-shadow: 0 0 5px rgba(0, 150, 255, 0.5);
          }
          30% {
            color: rgba(100, 200, 255, 1);
            text-shadow: 0 0 10px rgba(100, 200, 255, 1), 0 0 15px rgba(100, 200, 255, 1);
          }
          50% {
            color: rgba(255, 105, 180, 1);
            text-shadow: 0 0 10px rgba(255, 105, 180, 1), 0 0 15px rgba(255, 105, 180, 1);
          }
          70% {
            color: #ffffff;
            text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
          }
        }
        \`}
      </style>
      <div className="matrix-container">
        {/* Many spans with Japanese characters... */}
        <span>ア</span><span>イ</span><span>ウ</span>...
      </div>
    </div>
  );
}

export default Pattern;
`;function mo(){const t=Array(200).fill("アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ").join("");return e.jsx(k,{title:"Matrix Loader",code:ho,className:"min-h-[300px] flex items-center justify-center overflow-hidden",children:e.jsxs("div",{className:"matrix-loader-wrapper w-full h-full absolute inset-0",children:[e.jsx("style",{children:`
            .matrix-container {
              background-color: #05050a;
              width: 100%;
              height: 100%;
              overflow: hidden;
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(30px, 1fr)); /* Slightly smaller for card */
              grid-auto-rows: 30px;
              font-size: 24px; /* Slightly smaller for card */
              color: rgba(0, 150, 255, 0.4);
              font-family: "Courier New", Courier, monospace;
              justify-content: center;
              align-content: center;
            }

            .matrix-container > span {
              text-align: center;
              text-shadow: 0 0 5px rgba(0, 150, 255, 0.5);
              user-select: none;
              transition:
                color 0.5s,
                text-shadow 0.5s;
              line-height: 1;
            }

            .matrix-container > span:nth-child(19n + 2) {
              animation: matrix-pulse 3.5s ease-in-out infinite 0.2s;
            }
            .matrix-container > span:nth-child(29n + 1) {
              animation: matrix-pulse 4.1s ease-in-out infinite 0.7s;
            }
            .matrix-container > span:nth-child(11n) {
              color: rgba(100, 200, 255, 0.7);
              animation: matrix-pulse 2.9s ease-in-out infinite 1.1s;
            }
            .matrix-container > span:nth-child(37n + 10) {
              animation: matrix-pulse 5.3s ease-in-out infinite 1.5s;
            }
            .matrix-container > span:nth-child(41n + 1) {
              animation: matrix-pulse 3.9s ease-in-out infinite 0.4s;
            }
            .matrix-container > span:nth-child(17n + 9) {
              animation: matrix-pulse 2.8s ease-in-out infinite 0.9s;
            }
            .matrix-container > span:nth-child(23n + 18) {
              animation: matrix-pulse 4.3s ease-in-out infinite 1.3s;
            }
            .matrix-container > span:nth-child(31n + 4) {
              animation: matrix-pulse 5.6s ease-in-out infinite 0.1s;
            }
            .matrix-container > span:nth-child(43n + 20) {
              animation: matrix-pulse 3.6s ease-in-out infinite 1.8s;
            }
            .matrix-container > span:nth-child(13n + 6) {
              animation: matrix-pulse 3.2s ease-in-out infinite 1.2s;
            }
            .matrix-container > span:nth-child(53n + 5) {
              animation: matrix-pulse 4.9s ease-in-out infinite 0.5s;
            }
            .matrix-container > span:nth-child(47n + 15) {
              animation: matrix-pulse 5.9s ease-in-out infinite 1s;
            }

            @keyframes matrix-pulse {
              0%,
              100% {
                color: rgba(0, 150, 255, 0.4);
                text-shadow: 0 0 5px rgba(0, 150, 255, 0.5);
              }
              30% {
                color: rgba(100, 200, 255, 1);
                text-shadow:
                  0 0 10px rgba(100, 200, 255, 1),
                  0 0 15px rgba(100, 200, 255, 1);
              }
              50% {
                color: rgba(255, 105, 180, 1);
                text-shadow:
                  0 0 10px rgba(255, 105, 180, 1),
                  0 0 15px rgba(255, 105, 180, 1);
              }
              70% {
                color: #ffffff;
                text-shadow:
                  0 0 10px #fff,
                  0 0 15px #fff,
                  0 0 20px #fff;
              }
            }
            `}),e.jsx("div",{className:"matrix-container",children:t.split("").map((r,a)=>e.jsx("span",{children:r},a))})]})})}const fo=`import React from 'react';

const Loader = () => {
  return (
    <div className="hamster-loader-wrapper">
      <style>
        {\`
        .hamster-wheel-and-hamster {
          --dur: 1s;
          position: relative;
          width: 12em;
          height: 12em;
          font-size: 14px;
        }

        .hamster-wheel,
        .hamster,
        .hamster div,
        .hamster-spoke {
          position: absolute;
        }

        .hamster-wheel,
        .hamster-spoke {
          border-radius: 50%;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hamster-wheel {
          background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
          z-index: 2;
        }

        .hamster {
          animation: hamsterAnim var(--dur) ease-in-out infinite;
          top: 50%;
          left: calc(50% - 3.5em);
          width: 7em;
          height: 3.75em;
          transform: rotate(4deg) translate(-0.8em,1.85em);
          transform-origin: 50% 0;
          z-index: 1;
        }

        .hamster__head {
          animation: hamsterHeadAnim var(--dur) ease-in-out infinite;
          background: hsl(30,90%,55%);
          border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
          box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
            0.75em -1.55em 0 hsl(30,90%,90%) inset;
          top: 0;
          left: -2em;
          width: 2.75em;
          height: 2.5em;
          transform-origin: 100% 50%;
        }

        .hamster__ear {
          animation: hamsterEarAnim var(--dur) ease-in-out infinite;
          background: hsl(0,90%,85%);
          border-radius: 50%;
          box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
          top: -0.25em;
          right: -0.25em;
          width: 0.75em;
          height: 0.75em;
          transform-origin: 50% 75%;
        }

        .hamster__eye {
          animation: hamsterEyeAnim var(--dur) linear infinite;
          background-color: hsl(0,0%,0%);
          border-radius: 50%;
          top: 0.375em;
          left: 1.25em;
          width: 0.5em;
          height: 0.5em;
        }

        .hamster__nose {
          background: hsl(0,90%,75%);
          border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
          top: 0.75em;
          left: 0;
          width: 0.2em;
          height: 0.25em;
        }

        .hamster__body {
          animation: hamsterBodyAnim var(--dur) ease-in-out infinite;
          background: hsl(30,90%,90%);
          border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
          box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
            0.15em -0.5em 0 hsl(30,90%,80%) inset;
          top: 0.25em;
          left: 2em;
          width: 4.5em;
          height: 3em;
          transform-origin: 17% 50%;
          transform-style: preserve-3d;
        }

        .hamster__limb--fr,
        .hamster__limb--fl {
          clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
          top: 2em;
          left: 0.5em;
          width: 1em;
          height: 1.5em;
          transform-origin: 50% 0;
        }

        .hamster__limb--fr {
          animation: hamsterFRLimbAnim var(--dur) linear infinite;
          background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
          transform: rotate(15deg) translateZ(-1px);
        }

        .hamster__limb--fl {
          animation: hamsterFLLimbAnim var(--dur) linear infinite;
          background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
          transform: rotate(15deg);
        }

        .hamster__limb--br,
        .hamster__limb--bl {
          border-radius: 0.75em 0.75em 0 0;
          clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
          top: 1em;
          left: 2.8em;
          width: 1.5em;
          height: 2.5em;
          transform-origin: 50% 30%;
        }

        .hamster__limb--br {
          animation: hamsterBRLimbAnim var(--dur) linear infinite;
          background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
          transform: rotate(-25deg) translateZ(-1px);
        }

        .hamster__limb--bl {
          animation: hamsterBLLimbAnim var(--dur) linear infinite;
          background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
          transform: rotate(-25deg);
        }

        .hamster__tail {
          animation: hamsterTailAnim var(--dur) linear infinite;
          background: hsl(0,90%,85%);
          border-radius: 0.25em 50% 50% 0.25em;
          box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
          top: 1.5em;
          right: -0.5em;
          width: 1em;
          height: 0.5em;
          transform: rotate(30deg) translateZ(-1px);
          transform-origin: 0.25em 0.25em;
        }

        .hamster-spoke {
          animation: hamsterSpokeAnim var(--dur) linear infinite;
          background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
            linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
        }

        /* Animations */
        @keyframes hamsterAnim {
          from, to { transform: rotate(4deg) translate(-0.8em,1.85em); }
          50% { transform: rotate(0) translate(-0.8em,1.85em); }
        }

        @keyframes hamsterHeadAnim {
          from, 25%, 50%, 75%, to { transform: rotate(0); }
          12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(8deg); }
        }

        @keyframes hamsterEyeAnim {
          from, 90%, to { transform: scaleY(1); }
          95% { transform: scaleY(0); }
        }

        @keyframes hamsterEarAnim {
          from, 25%, 50%, 75%, to { transform: rotate(0); }
          12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(12deg); }
        }

        @keyframes hamsterBodyAnim {
          from, 25%, 50%, 75%, to { transform: rotate(0); }
          12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(-2deg); }
        }

        @keyframes hamsterFRLimbAnim {
          from, 25%, 50%, 75%, to { transform: rotate(50deg) translateZ(-1px); }
          12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(-30deg) translateZ(-1px); }
        }

        @keyframes hamsterFLLimbAnim {
          from, 25%, 50%, 75%, to { transform: rotate(-30deg); }
          12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(50deg); }
        }

        @keyframes hamsterBRLimbAnim {
          from, 25%, 50%, 75%, to { transform: rotate(-60deg) translateZ(-1px); }
          12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(20deg) translateZ(-1px); }
        }

        @keyframes hamsterBLLimbAnim {
          from, 25%, 50%, 75%, to { transform: rotate(20deg); }
          12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(-60deg); }
        }

        @keyframes hamsterTailAnim {
          from, 25%, 50%, 75%, to { transform: rotate(30deg) translateZ(-1px); }
          12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(10deg) translateZ(-1px); }
        }

        @keyframes hamsterSpokeAnim {
          from { transform: rotate(0); }
          to { transform: rotate(-1turn); }
        }
        \`}
      </style>
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="hamster-wheel-and-hamster">
        <div className="hamster-wheel" />
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear" />
              <div className="hamster__eye" />
              <div className="hamster__nose" />
            </div>
            <div className="hamster__limb hamster__limb--fr" />
            <div className="hamster__limb hamster__limb--fl" />
            <div className="hamster__limb hamster__limb--br" />
            <div className="hamster__limb hamster__limb--bl" />
            <div className="hamster__tail" />
          </div>
        </div>
        <div className="hamster-spoke" />
      </div>
    </div>
  );
}

export default Loader;
`;function xo(){return e.jsx(k,{title:"Hamster Loader",code:fo,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"hamster-loader-wrapper scale-75",children:[e.jsx("style",{children:`
            .hamster-wheel-and-hamster {
              --dur: 1s;
              position: relative;
              width: 12em;
              height: 12em;
              font-size: 14px;
            }

            .hamster-wheel,
            .hamster,
            .hamster div,
            .hamster-spoke {
              position: absolute;
            }

            .hamster-wheel,
            .hamster-spoke {
              border-radius: 50%;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            .hamster-wheel {
              background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
              z-index: 2;
            }

            .hamster {
              animation: hamsterAnim var(--dur) ease-in-out infinite;
              top: 50%;
              left: calc(50% - 3.5em);
              width: 7em;
              height: 3.75em;
              transform: rotate(4deg) translate(-0.8em,1.85em);
              transform-origin: 50% 0;
              z-index: 1;
            }

            .hamster__head {
              animation: hamsterHeadAnim var(--dur) ease-in-out infinite;
              background: hsl(30,90%,55%);
              border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
              box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
                0.75em -1.55em 0 hsl(30,90%,90%) inset;
              top: 0;
              left: -2em;
              width: 2.75em;
              height: 2.5em;
              transform-origin: 100% 50%;
            }

            .hamster__ear {
              animation: hamsterEarAnim var(--dur) ease-in-out infinite;
              background: hsl(0,90%,85%);
              border-radius: 50%;
              box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
              top: -0.25em;
              right: -0.25em;
              width: 0.75em;
              height: 0.75em;
              transform-origin: 50% 75%;
            }

            .hamster__eye {
              animation: hamsterEyeAnim var(--dur) linear infinite;
              background-color: hsl(0,0%,0%);
              border-radius: 50%;
              top: 0.375em;
              left: 1.25em;
              width: 0.5em;
              height: 0.5em;
            }

            .hamster__nose {
              background: hsl(0,90%,75%);
              border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
              top: 0.75em;
              left: 0;
              width: 0.2em;
              height: 0.25em;
            }

            .hamster__body {
              animation: hamsterBodyAnim var(--dur) ease-in-out infinite;
              background: hsl(30,90%,90%);
              border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
              box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
                0.15em -0.5em 0 hsl(30,90%,80%) inset;
              top: 0.25em;
              left: 2em;
              width: 4.5em;
              height: 3em;
              transform-origin: 17% 50%;
              transform-style: preserve-3d;
            }

            .hamster__limb--fr,
            .hamster__limb--fl {
              clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
              top: 2em;
              left: 0.5em;
              width: 1em;
              height: 1.5em;
              transform-origin: 50% 0;
            }

            .hamster__limb--fr {
              animation: hamsterFRLimbAnim var(--dur) linear infinite;
              background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
              transform: rotate(15deg) translateZ(-1px);
            }

            .hamster__limb--fl {
              animation: hamsterFLLimbAnim var(--dur) linear infinite;
              background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
              transform: rotate(15deg);
            }

            .hamster__limb--br,
            .hamster__limb--bl {
              border-radius: 0.75em 0.75em 0 0;
              clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
              top: 1em;
              left: 2.8em;
              width: 1.5em;
              height: 2.5em;
              transform-origin: 50% 30%;
            }

            .hamster__limb--br {
              animation: hamsterBRLimbAnim var(--dur) linear infinite;
              background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
              transform: rotate(-25deg) translateZ(-1px);
            }

            .hamster__limb--bl {
              animation: hamsterBLLimbAnim var(--dur) linear infinite;
              background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
              transform: rotate(-25deg);
            }

            .hamster__tail {
              animation: hamsterTailAnim var(--dur) linear infinite;
              background: hsl(0,90%,85%);
              border-radius: 0.25em 50% 50% 0.25em;
              box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
              top: 1.5em;
              right: -0.5em;
              width: 1em;
              height: 0.5em;
              transform: rotate(30deg) translateZ(-1px);
              transform-origin: 0.25em 0.25em;
            }

            .hamster-spoke {
              animation: hamsterSpokeAnim var(--dur) linear infinite;
              background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
                linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
            }

            /* Animations */
            @keyframes hamsterAnim {
              from, to { transform: rotate(4deg) translate(-0.8em,1.85em); }
              50% { transform: rotate(0) translate(-0.8em,1.85em); }
            }

            @keyframes hamsterHeadAnim {
              from, 25%, 50%, 75%, to { transform: rotate(0); }
              12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(8deg); }
            }

            @keyframes hamsterEyeAnim {
              from, 90%, to { transform: scaleY(1); }
              95% { transform: scaleY(0); }
            }

            @keyframes hamsterEarAnim {
              from, 25%, 50%, 75%, to { transform: rotate(0); }
              12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(12deg); }
            }

            @keyframes hamsterBodyAnim {
              from, 25%, 50%, 75%, to { transform: rotate(0); }
              12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(-2deg); }
            }

            @keyframes hamsterFRLimbAnim {
              from, 25%, 50%, 75%, to { transform: rotate(50deg) translateZ(-1px); }
              12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(-30deg) translateZ(-1px); }
            }

            @keyframes hamsterFLLimbAnim {
              from, 25%, 50%, 75%, to { transform: rotate(-30deg); }
              12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(50deg); }
            }

            @keyframes hamsterBRLimbAnim {
              from, 25%, 50%, 75%, to { transform: rotate(-60deg) translateZ(-1px); }
              12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(20deg) translateZ(-1px); }
            }

            @keyframes hamsterBLLimbAnim {
              from, 25%, 50%, 75%, to { transform: rotate(20deg); }
              12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(-60deg); }
            }

            @keyframes hamsterTailAnim {
              from, 25%, 50%, 75%, to { transform: rotate(30deg) translateZ(-1px); }
              12.5%, 37.5%, 62.5%, 87.5% { transform: rotate(10deg) translateZ(-1px); }
            }

            @keyframes hamsterSpokeAnim {
              from { transform: rotate(0); }
              to { transform: rotate(-1turn); }
            }
            `}),e.jsxs("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"hamster-wheel-and-hamster",children:[e.jsx("div",{className:"hamster-wheel"}),e.jsx("div",{className:"hamster",children:e.jsxs("div",{className:"hamster__body",children:[e.jsxs("div",{className:"hamster__head",children:[e.jsx("div",{className:"hamster__ear"}),e.jsx("div",{className:"hamster__eye"}),e.jsx("div",{className:"hamster__nose"})]}),e.jsx("div",{className:"hamster__limb hamster__limb--fr"}),e.jsx("div",{className:"hamster__limb hamster__limb--fl"}),e.jsx("div",{className:"hamster__limb hamster__limb--br"}),e.jsx("div",{className:"hamster__limb hamster__limb--bl"}),e.jsx("div",{className:"hamster__tail"})]})}),e.jsx("div",{className:"hamster-spoke"})]})]})})}const go=`import React from 'react';

const Button = () => {
  return (
    <div className="shine-btn-wrapper">
      <style>
        {\`
        .shine-btn {
          padding: 12px 48px;
          color: #fff;
          background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
          background-position: 0;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine-anim 3s infinite linear;
          animation-fill-mode: forwards;
          -webkit-text-size-adjust: none;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          white-space: nowrap;
          font-family: "Poppins", sans-serif;
          cursor: pointer;
        }

        @keyframes shine-anim {
          0% {
            background-position: 0;
          }
          60% {
            background-position: 180px;
          }
          100% {
            background-position: 180px;
          }
        }
        \`}
      </style>
      <a href="#" className="shine-btn">Get early access</a>
    </div>
  );
}

export default Button;
`;function uo(){return e.jsx(k,{title:"Shine Button",code:go,className:"min-h-[150px] flex items-center justify-center",children:e.jsxs("div",{className:"shine-btn-wrapper w-full h-full min-h-[100px] flex items-center justify-center bg-transparent rounded-lg transition-colors duration-300",children:[e.jsx("style",{children:`
            .shine-btn {
              --shine-base: #4b5563;
              --shine-highlight: #ffffff;
              
              padding: 12px 48px;
              color: var(--shine-base);
              background: linear-gradient(to right, var(--shine-base) 0, var(--shine-highlight) 10%, var(--shine-base) 20%);
              background-position: 0;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: shine-anim 3s infinite linear;
              animation-fill-mode: forwards;
              -webkit-text-size-adjust: none;
              font-weight: 600;
              font-size: 16px;
              text-decoration: none;
              white-space: nowrap;
              font-family: "Poppins", sans-serif;
              cursor: pointer;
              transition: all 0.3s;
            }

            /* Dark Mode Overrides - assumes .dark class on parent/html */
            .dark .shine-btn {
               --shine-base: #cbd5e1; /* slate-300 for better visibility in dark mode */
               background: linear-gradient(to right, var(--shine-base) 0, var(--shine-highlight) 10%, var(--shine-base) 20%);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
            }

            @keyframes shine-anim {
              0% {
                background-position: 0;
              }
              60% {
                background-position: 180px;
              }
              100% {
                background-position: 180px;
              }
            }
            `}),e.jsx("a",{href:"#",className:"shine-btn",children:"Get early access"})]})})}const bo=`import React from 'react';

const Tooltip = () => {
  return (
    <div className="faq-tooltip-wrapper">
      <style>
        {\`
        .faq-tooltip-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background-color: #ffe53b;
          background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
          position: relative;
        }
        .faq-tooltip-btn svg {
          height: 1.5em;
          fill: white;
        }
        .faq-tooltip-btn:hover svg {
          animation: faq-jello-vertical 0.7s both;
        }
        @keyframes faq-jello-vertical {
          0% { transform: scale3d(1, 1, 1); }
          30% { transform: scale3d(0.75, 1.25, 1); }
          40% { transform: scale3d(1.25, 0.75, 1); }
          50% { transform: scale3d(0.85, 1.15, 1); }
          65% { transform: scale3d(1.05, 0.95, 1); }
          75% { transform: scale3d(0.95, 1.05, 1); }
          100% { transform: scale3d(1, 1, 1); }
        }

        .faq-tooltip-text {
          position: absolute;
          top: -20px;
          opacity: 0;
          background-color: #ffe53b;
          background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition-duration: 0.2s;
          pointer-events: none;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .faq-tooltip-text::before {
          position: absolute;
          content: "";
          width: 10px;
          height: 10px;
          background-color: #ff2525;
          background-size: 1000%;
          background-position: center;
          transform: rotate(45deg);
          bottom: -15%;
          transition-duration: 0.3s;
        }

        .faq-tooltip-btn:hover .faq-tooltip-text {
          top: -40px;
          opacity: 1;
          transition-duration: 0.3s;
        }
        \`}
      </style>
      <button className="faq-tooltip-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
        </svg>
        <span className="faq-tooltip-text">FAQ</span>
      </button>
    </div>
  );
}

export default Tooltip;
`;function vo({text:l="FAQ"}){return e.jsx(k,{title:"FAQ Tooltip",code:bo,className:"min-h-[150px] flex items-center justify-center",children:e.jsxs("div",{className:"faq-tooltip-wrapper pt-10",children:[e.jsx("style",{children:`
            .faq-tooltip-btn {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              border: none;
              background-color: #ffe53b;
              background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
              position: relative;
            }
            .faq-tooltip-btn svg {
              height: 1.5em;
              fill: white;
            }
            .faq-tooltip-btn:hover svg {
              animation: faq-jello-vertical 0.7s both;
            }
            @keyframes faq-jello-vertical {
              0% { transform: scale3d(1, 1, 1); }
              30% { transform: scale3d(0.75, 1.25, 1); }
              40% { transform: scale3d(1.25, 0.75, 1); }
              50% { transform: scale3d(0.85, 1.15, 1); }
              65% { transform: scale3d(1.05, 0.95, 1); }
              75% { transform: scale3d(0.95, 1.05, 1); }
              100% { transform: scale3d(1, 1, 1); }
            }

            .faq-tooltip-text {
              position: absolute;
              top: -20px;
              opacity: 0;
              background-color: #ffe53b;
              background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
              color: white;
              padding: 5px 10px;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition-duration: 0.2s;
              pointer-events: none;
              letter-spacing: 0.5px;
              white-space: nowrap;
            }

            .faq-tooltip-text::before {
              position: absolute;
              content: "";
              width: 10px;
              height: 10px;
              background-color: #ff2525;
              background-size: 1000%;
              background-position: center;
              transform: rotate(45deg);
              bottom: -15%;
              transition-duration: 0.3s;
            }

            .faq-tooltip-btn:hover .faq-tooltip-text {
              top: -40px;
              opacity: 1;
              transition-duration: 0.3s;
            }
            `}),e.jsxs("button",{className:"faq-tooltip-btn",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:e.jsx("path",{d:"M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"})}),e.jsx("span",{className:"faq-tooltip-text",children:l})]})]})})}const wo=`import React from 'react';

const Button = () => {
  return (
    <div className="flex gap-6 items-center justify-center p-8 bg-neutral-900 rounded-xl">
      <button className="p-5 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-current text-white group-hover:text-white/90 transition-colors duration-300">
            <path d="M5.164 0L.16 18.928L18.836 24L23.84 5.072L5.164 0ZM14.023 15.208L8.792 13.469L10.436 8.152L15.667 9.891L14.023 15.208Z" />
          </svg>
        </div>
      </button>
      <button className="p-5 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-7 h-7 text-green-500 fill-current group-hover:text-green-400 transition-colors duration-300">
            <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
          </svg>
        </div>
      </button>
      <button className="p-5 rounded-full backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10">
          <svg className="w-7 h-7 fill-current text-indigo-500 group-hover:text-indigo-400 transition-colors duration-300" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91 483.689 483.689 0 0 0-119.688 37.107 1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375 487.666 487.666 0 0 0 146.825 74.189 1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126 251.047 251.047 0 0 0 9.109-7.137 1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233 234.533 234.533 0 0 0 9.132 7.16 1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541zM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241z" />
          </svg>
        </div>
      </button>
      <button className="p-5 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10">
          <svg className="w-7 h-7 fill-current text-red-500 group-hover:text-red-400 transition-colors duration-300" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Button;
`;function yo(){return e.jsx(k,{title:"Glass Icons",code:wo,className:"min-h-[150px] flex items-center justify-center",children:e.jsx("div",{className:"glass-icons-wrapper",children:e.jsxs("div",{className:"flex gap-4 items-center justify-center p-4",children:[e.jsxs("button",{className:"p-4 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"}),e.jsx("div",{className:"relative z-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-6 h-6 fill-current text-white group-hover:text-white/90 transition-colors duration-300",children:e.jsx("path",{d:"M5.164 0L.16 18.928L18.836 24L23.84 5.072L5.164 0ZM14.023 15.208L8.792 13.469L10.436 8.152L15.667 9.891L14.023 15.208Z"})})})]}),e.jsxs("button",{className:"p-4 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"}),e.jsx("div",{className:"relative z-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",className:"w-6 h-6 text-green-500 fill-current group-hover:text-green-400 transition-colors duration-300",children:e.jsx("path",{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"})})})]}),e.jsxs("button",{className:"p-4 rounded-full backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"}),e.jsx("div",{className:"relative z-10",children:e.jsx("svg",{className:"w-6 h-6 fill-current text-indigo-500 group-hover:text-indigo-400 transition-colors duration-300",viewBox:"0 0 640 512",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91 483.689 483.689 0 0 0-119.688 37.107 1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375 487.666 487.666 0 0 0 146.825 74.189 1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126 251.047 251.047 0 0 0 9.109-7.137 1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233 234.533 234.533 0 0 0 9.132 7.16 1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541zM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241z"})})})]}),e.jsxs("button",{className:"p-4 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"}),e.jsx("div",{className:"relative z-10",children:e.jsx("svg",{className:"w-6 h-6 fill-current text-red-500 group-hover:text-red-400 transition-colors duration-300",viewBox:"0 0 576 512",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"})})})]})]})})})}const ko=`import React from 'react';

const Button = () => {
  return (
    <div className="group grid grid-cols-3 gap-0 hover:gap-2 duration-500 relative shadow-sm">
      <h1 className="absolute z-10 group-hover:hidden duration-200 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <svg viewBox="0 0 24 24" fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-7 h-7 text-gray-800">
          <path d="M5 7h14M5 12h14M5 17h14" strokeWidth={2} strokeLinecap="round" stroke="currentColor" />
        </svg>
      </h1>
      <a href="#" className="w-12 h-12">
        <svg className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-[#cc39a4] backdrop-blur-md group-hover:shadow-xl rounded-tl-lg flex justify-center items-center w-full h-full text-[#cc39a4] hover:text-white duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
          <path className="opacity-0 group-hover:opacity-100 duration-200" fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
        </svg>
      </a>
      <a href="#" className="w-12 h-12">
        <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-blue-500 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-blue-500 hover:text-white duration-200">
          <path clipRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" fillRule="evenodd" className="opacity-0 group-hover:opacity-100 duration-200" />
        </svg>
      </a>
      <a href="#" className="w-12 h-12">
        <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-red-500 backdrop-blur-md group-hover:shadow-xl rounded-tr-lg flex justify-center items-center w-full h-full text-red-400 hover:text-white duration-200">
          <path clipRule="evenodd" d="M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" fillRule="evenodd" className="opacity-0 group-hover:opacity-100 duration-200" />
        </svg>
      </a>
      <a href="#" className="w-12 h-12">
        <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-green-500 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-green-500 hover:text-white duration-200">
          <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" className="opacity-0 group-hover:opacity-100 duration-200" />
        </svg>
      </a>
      <a href="#" className="w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-black backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-black hover:text-white duration-200">
          <path d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" className="opacity-0 group-hover:opacity-100 duration-200" />
        </svg>
      </a>
      <a href="#" className="w-12 h-12">
        <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-blue-600 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-blue-700 hover:text-white duration-200">
          <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" className="opacity-0 group-hover:opacity-100 duration-200" />
        </svg>
      </a>
      <a href="#" className="w-12 h-12">
        <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-black backdrop-blur-md group-hover:shadow-xl rounded-bl-lg flex justify-center items-center w-full h-full text-black hover:text-white duration-200">
          <path clipRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" fillRule="evenodd" className="opacity-0 group-hover:opacity-100 duration-200" />
        </svg>
      </a>
      <a href="#" className="w-12 h-12">
        <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-blue-600 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-blue-600 hover:text-white duration-200">
          <path clipRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" fillRule="evenodd" className="opacity-0 group-hover:opacity-100 duration-200" />
        </svg>
      </a>
      <a href="#" className="w-12 h-12">
        <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-red-500 backdrop-blur-md group-hover:shadow-xl rounded-br-lg flex justify-center items-center w-full h-full text-red-500 hover:text-white duration-200">
          <path clipRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" fillRule="evenodd" className="opacity-0 group-hover:opacity-100 duration-200" />
        </svg>
      </a>
    </div>
  );
}

export default Button;
`;function Ao(){return e.jsx(k,{title:"Social Grid",code:ko,className:"min-h-[250px] flex items-center justify-center",children:e.jsx("div",{className:"social-grid-wrapper bg-slate-100 p-8 rounded-lg flex items-center justify-center",children:e.jsxs("div",{className:"group grid grid-cols-3 gap-0 hover:gap-2 duration-500 relative shadow-sm",children:[e.jsx("h1",{className:"absolute z-10 group-hover:hidden duration-200 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"w-7 h-7 text-gray-800",children:e.jsx("path",{d:"M5 7h14M5 12h14M5 17h14",strokeWidth:2,strokeLinecap:"round",stroke:"currentColor"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-[#cc39a4] backdrop-blur-md group-hover:shadow-xl rounded-tl-lg flex justify-center items-center w-full h-full text-[#cc39a4] hover:text-white duration-200","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{className:"opacity-0 group-hover:opacity-100 duration-200",fill:"currentColor",fillRule:"evenodd",d:"M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z",clipRule:"evenodd"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-blue-500 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-blue-500 hover:text-white duration-200",children:e.jsx("path",{clipRule:"evenodd",d:"M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z",fillRule:"evenodd",className:"opacity-0 group-hover:opacity-100 duration-200"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-red-500 backdrop-blur-md group-hover:shadow-xl rounded-tr-lg flex justify-center items-center w-full h-full text-red-400 hover:text-white duration-200",children:e.jsx("path",{clipRule:"evenodd",d:"M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z",fillRule:"evenodd",className:"opacity-0 group-hover:opacity-100 duration-200"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-green-500 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-green-500 hover:text-white duration-200",children:e.jsx("path",{d:"M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z",className:"opacity-0 group-hover:opacity-100 duration-200"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-black backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-black hover:text-white duration-200",children:e.jsx("path",{d:"M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",stroke:"currentColor",className:"opacity-0 group-hover:opacity-100 duration-200"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-blue-600 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-blue-700 hover:text-white duration-200",children:e.jsx("path",{d:"M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z",className:"opacity-0 group-hover:opacity-100 duration-200"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-black backdrop-blur-md group-hover:shadow-xl rounded-bl-lg flex justify-center items-center w-full h-full text-black hover:text-white duration-200",children:e.jsx("path",{clipRule:"evenodd",d:"M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z",fillRule:"evenodd",className:"opacity-0 group-hover:opacity-100 duration-200"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-blue-600 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-blue-600 hover:text-white duration-200",children:e.jsx("path",{clipRule:"evenodd",d:"M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z",fillRule:"evenodd",className:"opacity-0 group-hover:opacity-100 duration-200"})})}),e.jsx("a",{href:"#",className:"w-12 h-12 flex",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:24,width:24,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-red-500 backdrop-blur-md group-hover:shadow-xl rounded-br-lg flex justify-center items-center w-full h-full text-red-500 hover:text-white duration-200",children:e.jsx("path",{clipRule:"evenodd",d:"M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z",fillRule:"evenodd",className:"opacity-0 group-hover:opacity-100 duration-200"})})})]})})})}const jo=`import React from 'react';

const Loader = () => {
  return (
    <div className="ghost-loader-wrapper">
      <style>
        {\`
        .ghost-container {
          position: relative;
          scale: 0.8;
          width: 140px;
          height: 140px;
        }

        .ghost-body {
          animation: ghost-upNDown infinite 0.5s;
          position: relative;
          width: 140px;
          height: 140px;
          display: grid;
          grid-template-columns: repeat(14, 1fr);
          grid-template-rows: repeat(14, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          grid-template-areas:
            "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
            "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
            "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
            "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
            "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
            "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
            "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
        }

        @keyframes ghost-upNDown {
          0%, 49% { transform: translateY(0px); }
          50%, 100% { transform: translateY(-10px); }
        }

        .ghost-pixel { background-color: red; }
        
        .ghost-top0 { grid-area: top0; }
        .ghost-top1 { grid-area: top1; }
        .ghost-top2 { grid-area: top2; }
        .ghost-top3 { grid-area: top3; }
        .ghost-top4 { grid-area: top4; }
        
        .ghost-st0 { grid-area: st0; }
        .ghost-st1 { grid-area: st1; }
        .ghost-st2 { grid-area: st2; }
        .ghost-st3 { grid-area: st3; }
        .ghost-st4 { grid-area: st4; }
        .ghost-st5 { grid-area: st5; }

        .ghost-an1 { grid-area: an1; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an18 { grid-area: an18; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an2 { grid-area: an2; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an17 { grid-area: an17; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an3 { grid-area: an3; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an16 { grid-area: an16; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an4 { grid-area: an4; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an15 { grid-area: an15; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an6 { grid-area: an6; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an12 { grid-area: an12; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an7 { grid-area: an7; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an13 { grid-area: an13; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an9 { grid-area: an9; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an10 { grid-area: an10; animation: ghost-flicker1 infinite 0.5s; }
        .ghost-an8 { grid-area: an8; animation: ghost-flicker0 infinite 0.5s; }
        .ghost-an11 { grid-area: an11; animation: ghost-flicker0 infinite 0.5s; }

        @keyframes ghost-flicker0 {
          0%, 49% { background-color: red; }
          50%, 100% { background-color: transparent; }
        }

        @keyframes ghost-flicker1 {
          0%, 49% { background-color: transparent; }
          50%, 100% { background-color: red; }
        }

        .ghost-eye {
          width: 40px; height: 50px; position: absolute; top: 30px; left: 10px;
        }
        .ghost-eye::before {
          content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute;
        }
        .ghost-eye::after {
          content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute;
        }

        .ghost-eye-right {
          width: 40px; height: 50px; position: absolute; top: 30px; right: 30px;
        }
        .ghost-eye-right::before {
          content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute;
        }
        .ghost-eye-right::after {
          content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute;
        }

        .ghost-pupil {
          width: 20px; height: 20px; background-color: blue; position: absolute; top: 50px; left: 10px; z-index: 1; animation: ghost-eyesMovement infinite 3s;
        }
        .ghost-pupil-right {
          width: 20px; height: 20px; background-color: blue; position: absolute; top: 50px; right: 50px; z-index: 1; animation: ghost-eyesMovement infinite 3s;
        }

        @keyframes ghost-eyesMovement {
          0%, 49% { transform: translateX(0px); }
          50%, 99% { transform: translateX(10px); }
          100% { transform: translateX(0px); }
        }

        .ghost-shadow {
          background-color: black; width: 140px; height: 140px; position: absolute; border-radius: 50%; transform: rotateX(80deg); filter: blur(20px); top: 80%; animation: ghost-shadowMovement infinite 0.5s;
        }

        @keyframes ghost-shadowMovement {
          0%, 49% { opacity: 0.5; }
          50%, 100% { opacity: 0.2; }
        }
        \`}
      </style>
      <div className="ghost-container">
        <div className="ghost-body">
          <div className="ghost-pupil" />
          <div className="ghost-pupil-right" />
          <div className="ghost-eye" />
          <div className="ghost-eye-right" />
          <div className="ghost-pixel ghost-top0" />
          <div className="ghost-pixel ghost-top1" />
          <div className="ghost-pixel ghost-top2" />
          <div className="ghost-pixel ghost-top3" />
          <div className="ghost-pixel ghost-top4" />
          <div className="ghost-pixel ghost-st0" />
          <div className="ghost-pixel ghost-st1" />
          <div className="ghost-pixel ghost-st2" />
          <div className="ghost-pixel ghost-st3" />
          <div className="ghost-pixel ghost-st4" />
          <div className="ghost-pixel ghost-st5" />
          <div className="ghost-an1" />
          <div className="ghost-an2" />
          <div className="ghost-an3" />
          <div className="ghost-an4" />
          <div className="ghost-an5" />
          <div className="ghost-an6" />
          <div className="ghost-an7" />
          <div className="ghost-an8" />
          <div className="ghost-an9" />
          <div className="ghost-an10" />
          <div className="ghost-an11" />
          <div className="ghost-an12" />
          <div className="ghost-an13" />
          <div className="ghost-an14" />
          <div className="ghost-an15" />
          <div className="ghost-an16" />
          <div className="ghost-an17" />
          <div className="ghost-an18" />
        </div>
        <div className="ghost-shadow" />
      </div>
    </div>
  );
}

export default Loader;
`;function _o(){return e.jsx(k,{title:"Ghost Loader",code:jo,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"ghost-loader-wrapper scale-75",children:[e.jsx("style",{children:`
            .ghost-container {
              position: relative;
              scale: 0.8;
              width: 140px;
              height: 140px;
            }

            .ghost-body {
              animation: ghost-upNDown infinite 0.5s;
              position: relative;
              width: 140px;
              height: 140px;
              display: grid;
              grid-template-columns: repeat(14, 1fr);
              grid-template-rows: repeat(14, 1fr);
              grid-column-gap: 0px;
              grid-row-gap: 0px;
              grid-template-areas:
                "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
                "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
                "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
                "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
                "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
                "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
                "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
                "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
            }

            @keyframes ghost-upNDown {
              0%, 49% { transform: translateY(0px); }
              50%, 100% { transform: translateY(-10px); }
            }

            .ghost-pixel { background-color: red; }
            
            .ghost-top0 { grid-area: top0; }
            .ghost-top1 { grid-area: top1; }
            .ghost-top2 { grid-area: top2; }
            .ghost-top3 { grid-area: top3; }
            .ghost-top4 { grid-area: top4; }
            
            .ghost-st0 { grid-area: st0; }
            .ghost-st1 { grid-area: st1; }
            .ghost-st2 { grid-area: st2; }
            .ghost-st3 { grid-area: st3; }
            .ghost-st4 { grid-area: st4; }
            .ghost-st5 { grid-area: st5; }

            .ghost-an1 { grid-area: an1; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an18 { grid-area: an18; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an2 { grid-area: an2; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an17 { grid-area: an17; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an3 { grid-area: an3; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an16 { grid-area: an16; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an4 { grid-area: an4; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an15 { grid-area: an15; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an6 { grid-area: an6; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an12 { grid-area: an12; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an7 { grid-area: an7; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an13 { grid-area: an13; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an9 { grid-area: an9; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an10 { grid-area: an10; animation: ghost-flicker1 infinite 0.5s; }
            .ghost-an8 { grid-area: an8; animation: ghost-flicker0 infinite 0.5s; }
            .ghost-an11 { grid-area: an11; animation: ghost-flicker0 infinite 0.5s; }

            @keyframes ghost-flicker0 {
              0%, 49% { background-color: red; }
              50%, 100% { background-color: transparent; }
            }

            @keyframes ghost-flicker1 {
              0%, 49% { background-color: transparent; }
              50%, 100% { background-color: red; }
            }

            .ghost-eye {
              width: 40px; height: 50px; position: absolute; top: 30px; left: 10px;
            }
            .ghost-eye::before {
              content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute;
            }
            .ghost-eye::after {
              content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute;
            }

            .ghost-eye-right {
              width: 40px; height: 50px; position: absolute; top: 30px; right: 30px;
            }
            .ghost-eye-right::before {
              content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute;
            }
            .ghost-eye-right::after {
              content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute;
            }

            .ghost-pupil {
              width: 20px; height: 20px; background-color: blue; position: absolute; top: 50px; left: 10px; z-index: 1; animation: ghost-eyesMovement infinite 3s;
            }
            .ghost-pupil-right {
              width: 20px; height: 20px; background-color: blue; position: absolute; top: 50px; right: 50px; z-index: 1; animation: ghost-eyesMovement infinite 3s;
            }

            @keyframes ghost-eyesMovement {
              0%, 49% { transform: translateX(0px); }
              50%, 99% { transform: translateX(10px); }
              100% { transform: translateX(0px); }
            }

            .ghost-shadow {
              background-color: black; width: 140px; height: 140px; position: absolute; border-radius: 50%; transform: rotateX(80deg); filter: blur(20px); top: 80%; animation: ghost-shadowMovement infinite 0.5s;
            }

            @keyframes ghost-shadowMovement {
              0%, 49% { opacity: 0.5; }
              50%, 100% { opacity: 0.2; }
            }
            `}),e.jsxs("div",{className:"ghost-container",children:[e.jsxs("div",{className:"ghost-body",children:[e.jsx("div",{className:"ghost-pupil"}),e.jsx("div",{className:"ghost-pupil-right"}),e.jsx("div",{className:"ghost-eye"}),e.jsx("div",{className:"ghost-eye-right"}),e.jsx("div",{className:"ghost-pixel ghost-top0"}),e.jsx("div",{className:"ghost-pixel ghost-top1"}),e.jsx("div",{className:"ghost-pixel ghost-top2"}),e.jsx("div",{className:"ghost-pixel ghost-top3"}),e.jsx("div",{className:"ghost-pixel ghost-top4"}),e.jsx("div",{className:"ghost-pixel ghost-st0"}),e.jsx("div",{className:"ghost-pixel ghost-st1"}),e.jsx("div",{className:"ghost-pixel ghost-st2"}),e.jsx("div",{className:"ghost-pixel ghost-st3"}),e.jsx("div",{className:"ghost-pixel ghost-st4"}),e.jsx("div",{className:"ghost-pixel ghost-st5"}),e.jsx("div",{className:"ghost-an1"}),e.jsx("div",{className:"ghost-an2"}),e.jsx("div",{className:"ghost-an3"}),e.jsx("div",{className:"ghost-an4"}),e.jsx("div",{className:"ghost-an5"}),e.jsx("div",{className:"ghost-an6"}),e.jsx("div",{className:"ghost-an7"}),e.jsx("div",{className:"ghost-an8"}),e.jsx("div",{className:"ghost-an9"}),e.jsx("div",{className:"ghost-an10"}),e.jsx("div",{className:"ghost-an11"}),e.jsx("div",{className:"ghost-an12"}),e.jsx("div",{className:"ghost-an13"}),e.jsx("div",{className:"ghost-an14"}),e.jsx("div",{className:"ghost-an15"}),e.jsx("div",{className:"ghost-an16"}),e.jsx("div",{className:"ghost-an17"}),e.jsx("div",{className:"ghost-an18"})]}),e.jsx("div",{className:"ghost-shadow"})]})]})})}const No=`import React from 'react';

const Loader = () => {
  return (
    <div className="holographic-loader-wrapper">
      <style>
        {\`
        .holographic-spinner {
          width: 44px;
          height: 44px;
          animation: holographic-spinner-anim 2s infinite ease;
          transform-style: preserve-3d;
        }

        .holographic-spinner > div {
          background-color: rgba(0,77,255,0.2);
          height: 100%;
          position: absolute;
          width: 100%;
          border: 2px solid #004dff;
        }

        .holographic-spinner div:nth-of-type(1) {
          transform: translateZ(-22px) rotateY(180deg);
        }

        .holographic-spinner div:nth-of-type(2) {
          transform: rotateY(-270deg) translateX(50%);
          transform-origin: top right;
        }

        .holographic-spinner div:nth-of-type(3) {
          transform: rotateY(270deg) translateX(-50%);
          transform-origin: center left;
        }

        .holographic-spinner div:nth-of-type(4) {
          transform: rotateX(90deg) translateY(-50%);
          transform-origin: top center;
        }

        .holographic-spinner div:nth-of-type(5) {
          transform: rotateX(-90deg) translateY(50%);
          transform-origin: bottom center;
        }

        .holographic-spinner div:nth-of-type(6) {
          transform: translateZ(22px);
        }

        @keyframes holographic-spinner-anim {
          0% {
            transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
          }
          50% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
          }
          100% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
          }
        }
        \`}
      </style>
      <div className="holographic-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
`;function Co(){return e.jsx(k,{title:"Holographic Loader",code:No,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"holographic-loader-wrapper scale-125",children:[e.jsx("style",{children:`
            .holographic-spinner {
              width: 44px;
              height: 44px;
              animation: holographic-spinner-anim 2s infinite ease;
              transform-style: preserve-3d;
            }

            .holographic-spinner > div {
              background-color: rgba(0,77,255,0.2);
              height: 100%;
              position: absolute;
              width: 100%;
              border: 2px solid #004dff;
            }

            .holographic-spinner div:nth-of-type(1) {
              transform: translateZ(-22px) rotateY(180deg);
            }

            .holographic-spinner div:nth-of-type(2) {
              transform: rotateY(-270deg) translateX(50%);
              transform-origin: top right;
            }

            .holographic-spinner div:nth-of-type(3) {
              transform: rotateY(270deg) translateX(-50%);
              transform-origin: center left;
            }

            .holographic-spinner div:nth-of-type(4) {
              transform: rotateX(90deg) translateY(-50%);
              transform-origin: top center;
            }

            .holographic-spinner div:nth-of-type(5) {
              transform: rotateX(-90deg) translateY(50%);
              transform-origin: bottom center;
            }

            .holographic-spinner div:nth-of-type(6) {
              transform: translateZ(22px);
            }

            @keyframes holographic-spinner-anim {
              0% {
                transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
              }
              50% {
                transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
              }
              100% {
                transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
              }
            }
            `}),e.jsxs("div",{className:"holographic-spinner",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})]})})}const zo=`import React from 'react';

const BubbleLoader = () => {
  return (
    <div className="bubble-loader-wrapper">
      <style>
        {\`
        .bubble-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .bubble-loader-bubble {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-image: linear-gradient(to right, #ff6b81, #ff9a44);
          margin: 0 5px;
          animation: bubble-loader-anim 1.5s ease-in-out infinite;
        }

        .bubble-loader-bubble:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .bubble-loader-bubble:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes bubble-loader-anim {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }
        \`}
      </style>
      <div className="bubble-loader">
        <div className="bubble-loader-bubble" />
        <div className="bubble-loader-bubble" />
        <div className="bubble-loader-bubble" />
      </div>
    </div>
  );
}

export default BubbleLoader;
`;function Lo(){return e.jsx(k,{title:"Bubble Loader",code:zo,className:"min-h-[150px] flex items-center justify-center",children:e.jsxs("div",{className:"bubble-loader-wrapper",children:[e.jsx("style",{children:`
            .bubble-loader {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            }

            .bubble-loader-bubble {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-image: linear-gradient(to right, #ff6b81, #ff9a44);
              margin: 0 5px;
              animation: bubble-loader-anim 1.5s ease-in-out infinite;
            }

            .bubble-loader-bubble:nth-child(2) {
                animation-delay: 0.2s;
            }
            
            .bubble-loader-bubble:nth-child(3) {
                animation-delay: 0.4s;
            }

            @keyframes bubble-loader-anim {
              0%, 100% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.5);
                opacity: 0.5;
              }
            }
            `}),e.jsxs("div",{className:"bubble-loader",children:[e.jsx("div",{className:"bubble-loader-bubble"}),e.jsx("div",{className:"bubble-loader-bubble"}),e.jsx("div",{className:"bubble-loader-bubble"})]})]})})}const Mo=`import React from 'react';

const Loader = () => {
  return (
    <div className="bouncing-ball-loader-wrapper">
      <style>
        {\`
        .bouncing-ball-loader {
          position: relative;
          width: 120px;
          height: 90px;
          margin: 0 auto;
        }

        .bouncing-ball-loader:before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50px;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #2a9d8f;
          animation: bouncing-ball-bounce 0.5s ease-in-out infinite alternate;
        }

        .bouncing-ball-loader:after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          height: 7px;
          width: 45px;
          border-radius: 4px;
          box-shadow: 0 5px 0 #000, -35px 50px 0 #000, -70px 95px 0 #000;
          animation: bouncing-ball-step 1s ease-in-out infinite;
        }

        .dark .bouncing-ball-loader:after {
          box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
        }

        @keyframes bouncing-ball-bounce {
          0% { transform: scale(1, 0.7); }
          40% { transform: scale(0.8, 1.2); }
          60% { transform: scale(1, 1); }
          100% { bottom: 140px; }
        }

        @keyframes bouncing-ball-step {
          0% {
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                    0 10px 0 #000,
                    -35px 50px 0 #000,
                    -70px 90px 0 #000;
          }
          100% {
            box-shadow: 0 10px 0 #000,
                    -35px 50px 0 #000,
                    -70px 90px 0 #000,
                    -70px 90px 0 rgba(0, 0, 0, 0);
          }
        }

        @keyframes bouncing-ball-step-dark {
          0% {
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                    0 10px 0 #f2f2f2,
                    -35px 50px 0 #f2f2f2,
                    -70px 90px 0 #f2f2f2;
          }
          100% {
            box-shadow: 0 10px 0 #f2f2f2,
                    -35px 50px 0 #f2f2f2,
                    -70px 90px 0 #f2f2f2,
                    -70px 90px 0 rgba(0, 0, 0, 0);
          }
        }

        .dark .bouncing-ball-loader:after {
           animation-name: bouncing-ball-step-dark;
        }
        \`}
      </style>
      <div className="bouncing-ball-loader" />
    </div>
  );
}

export default Loader;
`;function Bo(){return e.jsx(k,{title:"Bouncing Ball Loader",code:Mo,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"bouncing-ball-loader-wrapper w-full h-full min-h-[200px] flex items-center justify-center bg-transparent rounded-lg",children:[e.jsx("style",{children:`
            .bouncing-ball-loader {
              position: relative;
              width: 120px;
              height: 90px;
              margin: 0 auto;
            }

            .bouncing-ball-loader:before {
              content: "";
              position: absolute;
              bottom: 30px;
              left: 50px;
              height: 30px;
              width: 30px;
              border-radius: 50%;
              background: #2a9d8f;
              animation: bouncing-ball-bounce 0.5s ease-in-out infinite alternate;
            }

            .bouncing-ball-loader:after {
              content: "";
              position: absolute;
              right: 0;
              top: 0;
              height: 7px;
              width: 45px;
              border-radius: 4px;
              box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
              animation: bouncing-ball-step 1s ease-in-out infinite;
            }

            @keyframes bouncing-ball-bounce {
              0% { transform: scale(1, 0.7); }
              40% { transform: scale(0.8, 1.2); }
              60% { transform: scale(1, 1); }
              100% { bottom: 140px; }
            }

            @keyframes bouncing-ball-step {
              0% {
                box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                        0 10px 0 #f2f2f2,
                        -35px 50px 0 #f2f2f2,
                        -70px 90px 0 #f2f2f2;
              }
              100% {
                box-shadow: 0 10px 0 #f2f2f2,
                        -35px 50px 0 #f2f2f2,
                        -70px 90px 0 #f2f2f2,
                        -70px 90px 0 rgba(0, 0, 0, 0);
              }
            }
            `}),e.jsx("div",{className:"bouncing-ball-loader"})]})})}const Ro=`import React from 'react';

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
`;function So(){return e.jsx(k,{title:"Music Equalizer Loader",code:Ro,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"music-equalizer-wrapper w-full h-full min-h-[150px] flex items-center justify-center bg-transparent rounded-lg",children:[e.jsx("style",{children:`
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
            `}),e.jsxs("div",{className:"music-equalizer-loader scale-[2]",children:[e.jsx("span",{className:"music-bar"}),e.jsx("span",{className:"music-bar"}),e.jsx("span",{className:"music-bar"})]})]})})}const To=`import React from 'react';

const Loader = () => {
  return (
    <div className="olympic-rings-loader-wrapper">
      <style>
        {\`
        .olympic-rings-loader {
          width: 6em;
          height: 6em;
        }

        .olympic-rings-loader__ring {
          animation: olympic-rings-a 2s linear infinite;
        }

        .olympic-rings-loader__ring--a {
          stroke: #f42f25;
        }

        .olympic-rings-loader__ring--b {
          animation-name: olympic-rings-b;
          stroke: #f49725;
        }

        .olympic-rings-loader__ring--c {
          animation-name: olympic-rings-c;
          stroke: #255ff4;
        }

        .olympic-rings-loader__ring--d {
          animation-name: olympic-rings-d;
          stroke: #f42582;
        }

        /* Animations */
        @keyframes olympic-rings-a {
          from, 4% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
          12% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -335;
          }
          32% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -595;
          }
          40%, 54% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -660;
          }
          62% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -665;
          }
          82% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -925;
          }
          90%, to {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -990;
          }
        }

        @keyframes olympic-rings-b {
          from, 12% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -110;
          }
          20% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -115;
          }
          40% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -195;
          }
          48%, 62% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          70% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          90% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -305;
          }
          98%, to {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
        }

        @keyframes olympic-rings-c {
          from {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }
          8% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }
          28% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }
          36%, 58% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          66% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          86% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }
          94%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }

        @keyframes olympic-rings-d {
          from, 8% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }
          16% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }
          36% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }
          44%, 50% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          58% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          78% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }
          86%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }
        \`}
      </style>
      <svg className="olympic-rings-loader" width={240} height={240} viewBox="0 0 240 240">
        <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--a" cx={120} cy={120} r={105} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 660" strokeDashoffset={-330} strokeLinecap="round" />
        <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--b" cx={120} cy={120} r={35} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 220" strokeDashoffset={-110} strokeLinecap="round" />
        <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--c" cx={85} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
        <circle className="olympic-rings-loader__ring olympic-rings-loader__ring--d" cx={155} cy={120} r={70} fill="none" stroke="#000" strokeWidth={20} strokeDasharray="0 440" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default Loader;
`;function Yo(){return e.jsx(k,{title:"Olympic Rings Loader",code:To,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"olympic-rings-loader-wrapper scale-75",children:[e.jsx("style",{children:`
            .olympic-rings-loader {
              width: 6em;
              height: 6em;
            }

            .olympic-rings-loader__ring {
              animation: olympic-rings-a 2s linear infinite;
            }

            .olympic-rings-loader__ring--a {
              stroke: #f42f25;
            }

            .olympic-rings-loader__ring--b {
              animation-name: olympic-rings-b;
              stroke: #f49725;
            }

            .olympic-rings-loader__ring--c {
              animation-name: olympic-rings-c;
              stroke: #255ff4;
            }

            .olympic-rings-loader__ring--d {
              animation-name: olympic-rings-d;
              stroke: #f42582;
            }

            /* Animations */
            @keyframes olympic-rings-a {
              from, 4% {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -330;
              }
              12% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -335;
              }
              32% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -595;
              }
              40%, 54% {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -660;
              }
              62% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -665;
              }
              82% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -925;
              }
              90%, to {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -990;
              }
            }

            @keyframes olympic-rings-b {
              from, 12% {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -110;
              }
              20% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -115;
              }
              40% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -195;
              }
              48%, 62% {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              70% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              90% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -305;
              }
              98%, to {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -330;
              }
            }

            @keyframes olympic-rings-c {
              from {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: 0;
              }
              8% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -5;
              }
              28% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -175;
              }
              36%, 58% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              66% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              86% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -395;
              }
              94%, to {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -440;
              }
            }

            @keyframes olympic-rings-d {
              from, 8% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: 0;
              }
              16% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -5;
              }
              36% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -175;
              }
              44%, 50% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              58% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              78% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -395;
              }
              86%, to {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -440;
              }
            }
            `}),e.jsxs("svg",{className:"olympic-rings-loader",width:240,height:240,viewBox:"0 0 240 240",children:[e.jsx("circle",{className:"olympic-rings-loader__ring olympic-rings-loader__ring--a",cx:120,cy:120,r:105,fill:"none",stroke:"#000",strokeWidth:20,strokeDasharray:"0 660",strokeDashoffset:-330,strokeLinecap:"round"}),e.jsx("circle",{className:"olympic-rings-loader__ring olympic-rings-loader__ring--b",cx:120,cy:120,r:35,fill:"none",stroke:"#000",strokeWidth:20,strokeDasharray:"0 220",strokeDashoffset:-110,strokeLinecap:"round"}),e.jsx("circle",{className:"olympic-rings-loader__ring olympic-rings-loader__ring--c",cx:85,cy:120,r:70,fill:"none",stroke:"#000",strokeWidth:20,strokeDasharray:"0 440",strokeLinecap:"round"}),e.jsx("circle",{className:"olympic-rings-loader__ring olympic-rings-loader__ring--d",cx:155,cy:120,r:70,fill:"none",stroke:"#000",strokeWidth:20,strokeDasharray:"0 440",strokeLinecap:"round"})]})]})})}const Zo=`import React from 'react';

const Loader = () => {
  return (
    <div className="cloud-sync-loader-wrapper">
      <style>
        {\`
        .cloud-sync-loader {
          --cloud-color: #4387f4;
          --arrows-color: #80b1ff;
          --time-animation: 1s;
          transform: scale(1.5);
        }

        .cloud-sync-loader #cloud-sync-svg {
          width: 100px;
          height: 100px;
        }

        .cloud-sync-loader #cloud-sync-svg rect {
          fill: var(--cloud-color);
        }

        /* Arrows rotation */
        .cloud-sync-loader #cloud-sync-svg > g:nth-child(3) {
          transform-origin: 50% 72.8938%;
          fill: var(--arrows-color);
          filter: drop-shadow(0 0 8px black);
          animation: cloud-sync-rotation var(--time-animation) linear infinite;
        }

        /* Bubbles inside cloud animation */
        .cloud-sync-loader #cloud-sync-shapes g g circle {
          animation: cloud-sync-cloud calc(var(--time-animation) * 2) linear infinite;
        }

        .cloud-sync-loader #cloud-sync-shapes g g circle:nth-child(2) {
          animation-delay: calc((var(--time-animation) * 2) / -3);
        }

        .cloud-sync-loader #cloud-sync-shapes g g circle:nth-child(3) {
          animation-delay: calc((var(--time-animation) * 2) / -1.5);
        }

        /* Rain lines animation */
        .cloud-sync-loader #cloud-sync-lines g line {
          stroke-width: 5;
          transform-origin: 50% 50%;
          rotate: -65deg;
          animation: cloud-sync-lines calc(var(--time-animation) / 1.33) linear infinite;
        }

        @keyframes cloud-sync-rotation {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes cloud-sync-lines {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(8px); }
        }

        @keyframes cloud-sync-cloud {
          0% { cx: 20; cy: 60; r: 15; }
          50% { cx: 50; cy: 45; r: 20; }
          100% { cx: 80; cy: 60; r: 15; }
        }
        \`}
      </style>
      <div className="cloud-sync-loader">
        <svg id="cloud-sync-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <filter id="cloud-sync-roundness">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
              <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" />
            </filter>
            <mask id="cloud-sync-shapes">
              <g fill="white">
                <polygon points="50 37.5 80 75 20 75 50 37.5" />
                <circle cx={20} cy={60} r={15} />
                <circle cx={80} cy={60} r={15} />
                <g>
                  <circle cx={20} cy={60} r={15} />
                  <circle cx={20} cy={60} r={15} />
                  <circle cx={20} cy={60} r={15} />
                </g>
              </g>
            </mask>
            <mask id="cloud-sync-clipping" clipPathUnits="userSpaceOnUse">
              <g id="cloud-sync-lines" filter="url(#cloud-sync-roundness)">
                <g mask="url(#cloud-sync-shapes)" stroke="white">
                  <line x1={-50} y1={-40} x2={150} y2={-40} />
                  <line x1={-50} y1={-31} x2={150} y2={-31} />
                  {/* ... more lines ... */}
                  <line x1={-50} y1={140} x2={150} y2={140} />
                </g>
              </g>
            </mask>
          </defs>
          <rect x={0} y={0} width={100} height={100} rx={0} ry={0} mask="url(#cloud-sync-clipping)" />
          <g>
            <path d="M33.52,68.12 C35.02..." />
            <path d="M69.95,74.85 C68.35..." />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Loader;
`;function Do(){return e.jsx(k,{title:"Cloud Sync Loader",code:Zo,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"cloud-sync-loader-wrapper scale-125",children:[e.jsx("style",{children:`
            .cloud-sync-loader {
              --cloud-color: #4387f4;
              --arrows-color: #80b1ff;
              --time-animation: 1s;
            }

            .cloud-sync-loader #cloud-sync-svg {
              width: 100px;
              height: 100px;
            }

            .cloud-sync-loader #cloud-sync-svg rect {
              fill: var(--cloud-color);
            }

            .cloud-sync-loader #cloud-sync-svg > g:nth-child(3) {
              transform-origin: 50% 72.8938%;
              fill: var(--arrows-color);
              filter: drop-shadow(0 0 8px black);
              animation: cloud-sync-rotation var(--time-animation) linear infinite;
            }

            .cloud-sync-loader #cloud-sync-shapes g g circle {
              animation: cloud-sync-cloud calc(var(--time-animation) * 2) linear infinite;
            }

            .cloud-sync-loader #cloud-sync-shapes g g circle:nth-child(2) {
              animation-delay: calc((var(--time-animation) * 2) / -3);
            }

            .cloud-sync-loader #cloud-sync-shapes g g circle:nth-child(3) {
              animation-delay: calc((var(--time-animation) * 2) / -1.5);
            }

            .cloud-sync-loader #cloud-sync-lines g line {
              stroke-width: 5;
              transform-origin: 50% 50%;
              rotate: -65deg;
              animation: cloud-sync-lines calc(var(--time-animation) / 1.33) linear infinite;
            }

            @keyframes cloud-sync-rotation {
              0% { transform: rotate(0deg); }
              50% { transform: rotate(180deg); }
              100% { transform: rotate(360deg); }
            }

            @keyframes cloud-sync-lines {
              0% { transform: translateY(-10px); }
              100% { transform: translateY(8px); }
            }

            @keyframes cloud-sync-cloud {
              0% { cx: 20; cy: 60; r: 15; }
              50% { cx: 50; cy: 45; r: 20; }
              100% { cx: 80; cy: 60; r: 15; }
            }
            `}),e.jsx("div",{className:"cloud-sync-loader",children:e.jsxs("svg",{id:"cloud-sync-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:[e.jsxs("defs",{children:[e.jsxs("filter",{id:"cloud-sync-roundness",children:[e.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1.5"}),e.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"})]}),e.jsx("mask",{id:"cloud-sync-shapes",children:e.jsxs("g",{fill:"white",children:[e.jsx("polygon",{points:"50 37.5 80 75 20 75 50 37.5"}),e.jsx("circle",{cx:20,cy:60,r:15}),e.jsx("circle",{cx:80,cy:60,r:15}),e.jsxs("g",{children:[e.jsx("circle",{cx:20,cy:60,r:15}),e.jsx("circle",{cx:20,cy:60,r:15}),e.jsx("circle",{cx:20,cy:60,r:15})]})]})}),e.jsx("mask",{id:"cloud-sync-clipping",clipPathUnits:"userSpaceOnUse",children:e.jsx("g",{id:"cloud-sync-lines",filter:"url(#cloud-sync-roundness)",children:e.jsxs("g",{mask:"url(#cloud-sync-shapes)",stroke:"white",children:[e.jsx("line",{x1:-50,y1:-40,x2:150,y2:-40}),e.jsx("line",{x1:-50,y1:-31,x2:150,y2:-31}),e.jsx("line",{x1:-50,y1:-22,x2:150,y2:-22}),e.jsx("line",{x1:-50,y1:-13,x2:150,y2:-13}),e.jsx("line",{x1:-50,y1:-4,x2:150,y2:-4}),e.jsx("line",{x1:-50,y1:5,x2:150,y2:5}),e.jsx("line",{x1:-50,y1:14,x2:150,y2:14}),e.jsx("line",{x1:-50,y1:23,x2:150,y2:23}),e.jsx("line",{x1:-50,y1:32,x2:150,y2:32}),e.jsx("line",{x1:-50,y1:41,x2:150,y2:41}),e.jsx("line",{x1:-50,y1:50,x2:150,y2:50}),e.jsx("line",{x1:-50,y1:59,x2:150,y2:59}),e.jsx("line",{x1:-50,y1:68,x2:150,y2:68}),e.jsx("line",{x1:-50,y1:77,x2:150,y2:77}),e.jsx("line",{x1:-50,y1:86,x2:150,y2:86}),e.jsx("line",{x1:-50,y1:95,x2:150,y2:95}),e.jsx("line",{x1:-50,y1:104,x2:150,y2:104}),e.jsx("line",{x1:-50,y1:113,x2:150,y2:113}),e.jsx("line",{x1:-50,y1:122,x2:150,y2:122}),e.jsx("line",{x1:-50,y1:131,x2:150,y2:131}),e.jsx("line",{x1:-50,y1:140,x2:150,y2:140})]})})})]}),e.jsx("rect",{x:0,y:0,width:100,height:100,rx:0,ry:0,mask:"url(#cloud-sync-clipping)"}),e.jsxs("g",{children:[e.jsx("path",{d:"M33.52,68.12 C35.02,62.8 39.03,58.52 44.24,56.69 C49.26,54.93 54.68,55.61 59.04,58.4 C59.04,58.4 56.24,60.53 56.24,60.53 C55.45,61.13 55.68,62.37 56.63,62.64 C56.63,62.64 67.21,65.66 67.21,65.66 C67.98,65.88 68.75,65.3 68.74,64.5 C68.74,64.5 68.68,53.5 68.68,53.5 C68.67,52.51 67.54,51.95 66.75,52.55 C66.75,52.55 64.04,54.61 64.04,54.61 C57.88,49.79 49.73,48.4 42.25,51.03 C35.2,53.51 29.78,59.29 27.74,66.49 C27.29,68.08 28.22,69.74 29.81,70.19 C30.09,70.27 30.36,70.31 30.63,70.31 C31.94,70.31 33.14,69.44 33.52,68.12Z"}),e.jsx("path",{d:"M69.95,74.85 C68.35,74.4 66.7,75.32 66.25,76.92 C64.74,82.24 60.73,86.51 55.52,88.35 C50.51,90.11 45.09,89.43 40.73,86.63 C40.73,86.63 43.53,84.51 43.53,84.51 C44.31,83.91 44.08,82.67 43.13,82.4 C43.13,82.4 32.55,79.38 32.55,79.38 C31.78,79.16 31.02,79.74 31.02,80.54 C31.02,80.54 31.09,91.54 31.09,91.54 C31.09,92.53 32.22,93.09 33.01,92.49 C33.01,92.49 35.72,90.43 35.72,90.43 C39.81,93.63 44.77,95.32 49.84,95.32 C52.41,95.32 55,94.89 57.51,94.01 C64.56,91.53 69.99,85.75 72.02,78.55 C72.47,76.95 71.54,75.3 69.95,74.85Z"})]})]})})]})})}const Po=`import React from 'react';

const Loader = () => {
  return (
    <div className="speeder-loader-wrapper">
      <style>
        {\`
        .speeder-loader-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #fff; /* Ensure contrast for black shapes */
          min-height: 200px;
        }

        .speeder-loader {
          position: absolute;
          top: 50%;
          margin-left: -50px;
          left: 50%;
          animation: speeder-anim 0.4s linear infinite;
        }
        
        .speeder-loader > span {
          height: 5px;
          width: 35px;
          background: #000;
          position: absolute;
          top: -19px;
          left: 60px;
          border-radius: 2px 10px 1px 0;
        }
        
        .speeder-base span {
          position: absolute;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-right: 100px solid #000;
          border-bottom: 6px solid transparent;
        }
        
        .speeder-base span:before {
          content: "";
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: #000;
          position: absolute;
          right: -110px;
          top: -16px;
        }
        
        .speeder-base span:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 0 solid transparent;
          border-right: 55px solid #000;
          border-bottom: 16px solid transparent;
          top: -16px;
          right: -98px;
        }
        
        .speeder-face {
          position: absolute;
          height: 12px;
          width: 20px;
          background: #000;
          border-radius: 20px 20px 0 0;
          transform: rotate(-40deg);
          right: -125px;
          top: -15px;
        }
        
        .speeder-face:after {
          content: "";
          height: 12px;
          width: 12px;
          background: #000;
          right: 4px;
          top: 7px;
          position: absolute;
          transform: rotate(40deg);
          transform-origin: 50% 50%;
          border-radius: 0 0 0 2px;
        }
        
        .speeder-loader > span > span:nth-child(1),
        .speeder-loader > span > span:nth-child(2),
        .speeder-loader > span > span:nth-child(3),
        .speeder-loader > span > span:nth-child(4) {
          width: 30px;
          height: 1px;
          background: #000;
          position: absolute;
          animation: speeder-fazer1 0.2s linear infinite;
        }
        
        .speeder-loader > span > span:nth-child(2) {
          top: 3px;
          animation: speeder-fazer2 0.4s linear infinite;
        }
        
        .speeder-loader > span > span:nth-child(3) {
          top: 1px;
          animation: speeder-fazer3 0.4s linear infinite;
          animation-delay: -1s;
        }
        
        .speeder-loader > span > span:nth-child(4) {
          top: 4px;
          animation: speeder-fazer4 1s linear infinite;
          animation-delay: -1s;
        }
        
        @keyframes speeder-fazer1 {
          0% { left: 0; }
          100% { left: -80px; opacity: 0; }
        }
        
        @keyframes speeder-fazer2 {
          0% { left: 0; }
          100% { left: -100px; opacity: 0; }
        }
        
        @keyframes speeder-fazer3 {
          0% { left: 0; }
          100% { left: -50px; opacity: 0; }
        }
        
        @keyframes speeder-fazer4 {
          0% { left: 0; }
          100% { left: -150px; opacity: 0; }
        }
        
        @keyframes speeder-anim {
          0% { transform: translate(2px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -3px) rotate(-1deg); }
          20% { transform: translate(-2px, 0px) rotate(1deg); }
          30% { transform: translate(1px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 3px) rotate(-1deg); }
          60% { transform: translate(-1px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-2px, -1px) rotate(1deg); }
          90% { transform: translate(2px, 1px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        
        .speeder-longfazers {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .speeder-longfazers span {
          position: absolute;
          height: 2px;
          width: 20%;
          background: #000;
        }
        
        .speeder-longfazers span:nth-child(1) {
          top: 20%;
          animation: speeder-lf 0.6s linear infinite;
          animation-delay: -5s;
        }
        
        .speeder-longfazers span:nth-child(2) {
          top: 40%;
          animation: speeder-lf2 0.8s linear infinite;
          animation-delay: -1s;
        }
        
        .speeder-longfazers span:nth-child(3) {
          top: 60%;
          animation: speeder-lf3 0.6s linear infinite;
        }
        
        .speeder-longfazers span:nth-child(4) {
          top: 80%;
          animation: speeder-lf4 0.5s linear infinite;
          animation-delay: -3s;
        }
        
        @keyframes speeder-lf {
          0% { left: 200%; }
          100% { left: -200%; opacity: 0; }
        }
        
        @keyframes speeder-lf2 {
          0% { left: 200%; }
          100% { left: -200%; opacity: 0; }
        }
        
        @keyframes speeder-lf3 {
          0% { left: 200%; }
          100% { left: -100%; opacity: 0; }
        }
        
        @keyframes speeder-lf4 {
          0% { left: 200%; }
          100% { left: -100%; opacity: 0; }
        }
        \`}
      </style>
      <div className="speeder-loader-container">
        <div className="speeder-loader">
          <span><span /><span /><span /><span /></span>
          <div className="speeder-base">
            <span />
            <div className="speeder-face" />
          </div>
        </div>
        <div className="speeder-longfazers">
          <span /><span /><span /><span />
        </div>
      </div>
    </div>
  );
}

export default Loader;
`;function Eo(){return e.jsx(k,{title:"Speeder Loader",code:Po,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"speeder-loader-wrapper w-full h-full min-h-[200px] flex items-center justify-center bg-transparent rounded-lg overflow-hidden relative",children:[e.jsx("style",{children:`
            .speeder-loader-container {
              --speeder-color: #000;
              position: relative;
              width: 100%;
              height: 100%;
              overflow: hidden;
              background: transparent;
              min-height: 200px;
            }

            .dark .speeder-loader-container {
              --speeder-color: #fff;
            }

            .speeder-loader {
              position: absolute;
              top: 50%;
              margin-left: -50px;
              left: 50%;
              animation: speeder-anim 0.4s linear infinite;
            }
            
            .speeder-loader > span {
              height: 5px;
              width: 35px;
              background: var(--speeder-color);
              position: absolute;
              top: -19px;
              left: 60px;
              border-radius: 2px 10px 1px 0;
            }
            
            .speeder-base span {
              position: absolute;
              width: 0;
              height: 0;
              border-top: 6px solid transparent;
              border-right: 100px solid var(--speeder-color);
              border-bottom: 6px solid transparent;
            }
            
            .speeder-base span:before {
              content: "";
              height: 22px;
              width: 22px;
              border-radius: 50%;
              background: var(--speeder-color);
              position: absolute;
              right: -110px;
              top: -16px;
            }
            
            .speeder-base span:after {
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              border-top: 0 solid transparent;
              border-right: 55px solid var(--speeder-color);
              border-bottom: 16px solid transparent;
              top: -16px;
              right: -98px;
            }
            
            .speeder-face {
              position: absolute;
              height: 12px;
              width: 20px;
              background: var(--speeder-color);
              border-radius: 20px 20px 0 0;
              transform: rotate(-40deg);
              right: -125px;
              top: -15px;
            }
            
            .speeder-face:after {
              content: "";
              height: 12px;
              width: 12px;
              background: var(--speeder-color);
              right: 4px;
              top: 7px;
              position: absolute;
              transform: rotate(40deg);
              transform-origin: 50% 50%;
              border-radius: 0 0 0 2px;
            }
            
            .speeder-loader > span > span:nth-child(1),
            .speeder-loader > span > span:nth-child(2),
            .speeder-loader > span > span:nth-child(3),
            .speeder-loader > span > span:nth-child(4) {
              width: 30px;
              height: 1px;
              background: var(--speeder-color);
              position: absolute;
              animation: speeder-fazer1 0.2s linear infinite;
            }
            
            .speeder-loader > span > span:nth-child(2) {
              top: 3px;
              animation: speeder-fazer2 0.4s linear infinite;
            }
            
            .speeder-loader > span > span:nth-child(3) {
              top: 1px;
              animation: speeder-fazer3 0.4s linear infinite;
              animation-delay: -1s;
            }
            
            .speeder-loader > span > span:nth-child(4) {
              top: 4px;
              animation: speeder-fazer4 1s linear infinite;
              animation-delay: -1s;
            }
            
            @keyframes speeder-fazer1 {
              0% { left: 0; }
              100% { left: -80px; opacity: 0; }
            }
            
            @keyframes speeder-fazer2 {
              0% { left: 0; }
              100% { left: -100px; opacity: 0; }
            }
            
            @keyframes speeder-fazer3 {
              0% { left: 0; }
              100% { left: -50px; opacity: 0; }
            }
            
            @keyframes speeder-fazer4 {
              0% { left: 0; }
              100% { left: -150px; opacity: 0; }
            }
            
            @keyframes speeder-anim {
              0% { transform: translate(2px, 1px) rotate(0deg); }
              10% { transform: translate(-1px, -3px) rotate(-1deg); }
              20% { transform: translate(-2px, 0px) rotate(1deg); }
              30% { transform: translate(1px, 2px) rotate(0deg); }
              40% { transform: translate(1px, -1px) rotate(1deg); }
              50% { transform: translate(-1px, 3px) rotate(-1deg); }
              60% { transform: translate(-1px, 1px) rotate(0deg); }
              70% { transform: translate(3px, 1px) rotate(-1deg); }
              80% { transform: translate(-2px, -1px) rotate(1deg); }
              90% { transform: translate(2px, 1px) rotate(0deg); }
              100% { transform: translate(1px, -2px) rotate(-1deg); }
            }
            
            .speeder-longfazers {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
            }
            
            .speeder-longfazers span {
              position: absolute;
              height: 2px;
              width: 20%;
              background: var(--speeder-color);
            }
            
            .speeder-longfazers span:nth-child(1) {
              top: 20%;
              animation: speeder-lf 0.6s linear infinite;
              animation-delay: -5s;
            }
            
            .speeder-longfazers span:nth-child(2) {
              top: 40%;
              animation: speeder-lf2 0.8s linear infinite;
              animation-delay: -1s;
            }
            
            .speeder-longfazers span:nth-child(3) {
              top: 60%;
              animation: speeder-lf3 0.6s linear infinite;
            }
            
            .speeder-longfazers span:nth-child(4) {
              top: 80%;
              animation: speeder-lf4 0.5s linear infinite;
              animation-delay: -3s;
            }
            
            @keyframes speeder-lf {
              0% { left: 200%; }
              100% { left: -200%; opacity: 0; }
            }
            
            @keyframes speeder-lf2 {
              0% { left: 200%; }
              100% { left: -200%; opacity: 0; }
            }
            
            @keyframes speeder-lf3 {
              0% { left: 200%; }
              100% { left: -100%; opacity: 0; }
            }
            
            @keyframes speeder-lf4 {
              0% { left: 200%; }
              100% { left: -100%; opacity: 0; }
            }
            `}),e.jsxs("div",{className:"speeder-loader-container",children:[e.jsxs("div",{className:"speeder-loader",children:[e.jsxs("span",{children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"speeder-base",children:[e.jsx("span",{}),e.jsx("div",{className:"speeder-face"})]})]}),e.jsxs("div",{className:"speeder-longfazers",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})})}const Io=`import React from 'react';

const Switch = () => {
  return (
    <div className="minecraft-switch-wrapper">
      <style>
        {\`
        .minecraft-switch {
          font-size: 17px;
          position: relative;
          display: inline-block;
          width: 4em;
          height: 2em;
        }

        .minecraft-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .minecraft-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: 4px; /* Optional enhancement */
        }

        .minecraft-off {
          position: absolute;
          content: "";
          height: 2em;
          width: 2em;
          background-color: white;
          transition: .4s;
          image-rendering: pixelated;
          opacity: 1;
        }

        .minecraft-on {
          position: absolute;
          content: "";
          height: 2em;
          width: 2em;
          background-color: white;
          transition: .4s;
          image-rendering: pixelated;
          opacity: 0;
        }

        .minecraft-switch input:checked + .minecraft-slider {
          background-color: #a8d9ad; /* Slight green tint for ON state if desired, or keep #ccc */
        }

        .minecraft-switch input:focus + .minecraft-slider {
          box-shadow: 0 0 1px #ccc;
        }

        .minecraft-switch input:checked ~ .minecraft-off {
          transform: translateX(2em);
        }

        .minecraft-switch input:checked ~ .minecraft-on {
          transform: translateX(2em);
          opacity: 1;
        }
        \`}
      </style>
      <label className="minecraft-switch">
        <input type="checkbox" />
        <span className="minecraft-slider" />
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAIxAAAgIABQQDAAAAAAAAAAAAAQMCBAAREiExBUFRcROBsf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAWEQADAAAAAAAAAAAAAAAAAAAAEiL/2gAMAwEAAhEDEQA/AMBTp03dNglMVuttjqnKQ2UPOfntkOThbqVVUJ12BKnogZQZpy+Ucc8knwePWJrWqyqEHVmrTahEBqpbBoAH1n635wt3a9mjN1p8X2pw0qVEbKB/CO/c4OphSVP/2Q==" className="minecraft-off" />
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBf/EACMQAAEDAwQDAQEAAAAAAAAAAAQBAgUDESEAEjFBBlFhMkL/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGBEAAwEBAAAAAAAAAAAAAAAAABIiMUH/2gAMAwEAAhEDEQA/AM+Bg4mS8coRccMOdNG01qVyH/kRvHPKKmMdr8uujPwUTG+NkRpw1AKWCbvHKa2zTGphc9u9p0q+rLqeMl4kSCGkYgtoE0HTahIz3bWGNanPrdyqWzn7p5ibh5CArnyZNMyVLpK0QSkt2BNXtVX+7ol1wuLJiyaHt+6Kyp//2Q==" className="minecraft-on" />
      </label>
    </div>
  );
}

export default Switch;
`;function Oo(){return e.jsx(k,{title:"Minecraft Switch",code:Io,className:"min-h-[150px] flex items-center justify-center",children:e.jsxs("div",{className:"minecraft-switch-wrapper scale-150",children:[e.jsx("style",{children:`
            .minecraft-switch {
              font-size: 17px;
              position: relative;
              display: inline-block;
              width: 4em;
              height: 2em;
            }

            .minecraft-switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            .minecraft-slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              transition: .4s;
              border-radius: 4px;
            }

            .minecraft-off {
              position: absolute;
              top: 0;
              left: 0;
              content: "";
              height: 2em;
              width: 2em;
              background-color: white;
              transition: .4s;
              image-rendering: pixelated;
              opacity: 1;
            }

            .minecraft-on {
              position: absolute;
              top: 0;
              left: 0;
              content: "";
              height: 2em;
              width: 2em;
              background-color: white;
              transition: .4s;
              image-rendering: pixelated;
              opacity: 0;
            }

            .minecraft-switch input:checked + .minecraft-slider {
              background-color: #a8d9ad;
            }

            .minecraft-switch input:focus + .minecraft-slider {
              box-shadow: 0 0 1px #ccc;
            }

            .minecraft-switch input:checked ~ .minecraft-off {
              transform: translateX(2em);
            }

            .minecraft-switch input:checked ~ .minecraft-on {
              transform: translateX(2em);
              opacity: 1;
            }
            `}),e.jsxs("label",{className:"minecraft-switch",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"minecraft-slider"}),e.jsx("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAIxAAAgIABQQDAAAAAAAAAAAAAQMCBAAREiExBUFRcROBsf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAWEQADAAAAAAAAAAAAAAAAAAAAEiL/2gAMAwEAAhEDEQA/AMBTp03dNglMVuttjqnKQ2UPOfntkOThbqVVUJ12BKnogZQZpy+Ucc8knwePWJrWqyqEHVmrTahEBqpbBoAH1n635wt3a9mjN1p8X2pw0qVEbKB/CO/c4OphSVP/2Q==",className:"minecraft-off"}),e.jsx("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBf/EACMQAAEDAwQDAQEAAAAAAAAAAAQBAgUDESEAEjFBBlFhMkL/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGBEAAwEBAAAAAAAAAAAAAAAAABIiMUH/2gAMAwEAAhEDEQA/AM+Bg4mS8coRccMOdNG01qVyH/kRvHPKKmMdr8uujPwUTG+NkRpw1AKWCbvHKa2zTGphc9u9p0q+rLqeMl4kSCGkYgtoE0HTahIz3bWGNanPrdyqWzn7p5ibh5CArnyZNMyVLpK0QSkt2BNXtVX+7ol1wuLJiyaHt+6Kyp//2Q==",className:"minecraft-on"})]})]})})}const Xo=`import React from 'react';

const Radio = () => {
  return (
    <div className="pill-radio-wrapper">
      <style>
        {\`
        .pill-radio-container {
          --main-color: #ff6ec4;
          --secondary-color: #7873f5;
          --text-color: #ddd;
          --pill-bg: #1a1a1a;
          --total-options: 8;

          display: flex;
          position: relative;
          background: var(--pill-bg);
          border-radius: 3rem;
          padding: 0.5rem;
          gap: 1rem;
          box-shadow: 0 0 20px #000 inset;
          width: fit-content;
        }

        .pill-radio-container input {
          display: none;
        }

        .pill-radio-container label {
          position: relative;
          padding: 0.6rem 1.5rem;
          border-radius: 3rem;
          cursor: pointer;
          font-weight: 600;
          color: var(--text-color);
          transition: color 0.3s ease-in-out;
          z-index: 2;
        }

        .pill-radio-container input:checked + label {
          color: #fff;
        }

        .pill-radio-container label:hover {
          color: var(--main-color);
        }

        .pill-indicator {
          position: absolute;
          bottom: 5px;
          left: 0;
          height: 4px;
          width: calc(100% / var(--total-options));
          background: linear-gradient(
            to right,
            var(--main-color),
            var(--secondary-color)
          );
          border-radius: 2px;
          transition: transform 0.3s ease-in-out;
          z-index: 1;
        }

        /* Sliding effect */
        #pill-free:checked ~ .pill-indicator {
          transform: translateX(70%);
        }
        #pill-basic:checked ~ .pill-indicator {
          transform: translateX(300%);
        }
        #pill-premium:checked ~ .pill-indicator {
          transform: translateX(600%);
        }
        \`}
      </style>
      <div className="pill-radio-container">
        <input defaultChecked name="plan" id="pill-free" type="radio" />
        <label htmlFor="pill-free">Free</label>
        <input name="plan" id="pill-basic" type="radio" />
        <label htmlFor="pill-basic">Basic</label>
        <input name="plan" id="pill-premium" type="radio" />
        <label htmlFor="pill-premium">Premium</label>
        <div className="pill-indicator" />
      </div>
    </div>
  );
}

export default Radio;
`;function Fo(){return e.jsx(k,{title:"Pill Radio",code:Xo,className:"min-h-[250px]",children:e.jsxs("div",{className:"pill-radio-wrapper",children:[e.jsx("style",{children:`
            .pill-radio-container {
            --main-color: #ff6ec4;
            --secondary-color: #7873f5;
            --text-color: #ddd;
            --pill-bg: #1a1a1a;
            --total-options: 8;

            display: flex;
            position: relative;
            background: var(--pill-bg);
            border-radius: 3rem;
            padding: 0.5rem;
            gap: 1rem;
            box-shadow: 0 0 20px #000 inset;
            width: fit-content;
            }

            .pill-radio-container input {
            display: none;
            }

            .pill-radio-container label {
            position: relative;
            padding: 0.6rem 1.5rem;
            border-radius: 3rem;
            cursor: pointer;
            font-weight: 600;
            color: var(--text-color);
            transition: color 0.3s ease-in-out;
            z-index: 2;
            }

            .pill-radio-container input:checked + label {
            color: #fff;
            }

            .pill-radio-container label:hover {
            color: var(--main-color);
            }

            .pill-indicator {
            position: absolute;
            bottom: 5px;
            left: 0;
            height: 4px;
            width: calc(100% / var(--total-options));
            background: linear-gradient(
                to right,
                var(--main-color),
                var(--secondary-color)
            );
            border-radius: 2px;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
            }

            /* Sliding effect */
            #pill-free:checked ~ .pill-indicator {
            transform: translateX(70%);
            }
            #pill-basic:checked ~ .pill-indicator {
            transform: translateX(300%);
            }
            #pill-premium:checked ~ .pill-indicator {
            transform: translateX(600%);
            }
            `}),e.jsxs("div",{className:"pill-radio-container",children:[e.jsx("input",{defaultChecked:!0,name:"plan",id:"pill-free",type:"radio"}),e.jsx("label",{htmlFor:"pill-free",children:"Free"}),e.jsx("input",{name:"plan",id:"pill-basic",type:"radio"}),e.jsx("label",{htmlFor:"pill-basic",children:"Basic"}),e.jsx("input",{name:"plan",id:"pill-premium",type:"radio"}),e.jsx("label",{htmlFor:"pill-premium",children:"Premium"}),e.jsx("div",{className:"pill-indicator"})]})]})})}const Vo=`import React from 'react';

const Switch = () => {
  return (
    <div className="gooey-switch-wrapper">
      <style>
        {\`
        .gooey-switch-container {
          --active-color: #1868e3;
          --inactive-color: #d3d3d6;
          position: relative;
          aspect-ratio: 292 / 142;
          height: 1.875em;
        }

        .gooey-switch-input {
          appearance: none;
          margin: 0;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .gooey-switch-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .gooey-switch-background {
          fill: var(--inactive-color);
          transition: fill .4s;
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-background {
          fill: var(--active-color);
        }

        .gooey-switch-circle-center {
          transform-origin: center;
          transition: transform .6s;
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle-center {
          transform: translateX(150px);
        }

        .gooey-switch-circle {
          transform-origin: center;
          transition: transform .45s;
          backface-visibility: hidden;
        }

        .gooey-switch-circle.left {
          transform: scale(1);
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle.left {
          transform: scale(0);
        }

        .gooey-switch-circle.right {
          transform: scale(0);
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle.right {
          transform: scale(1);
        }

        .gooey-switch-icon {
          transition: fill .4s;
        }

        .gooey-switch-icon.on {
          fill: var(--inactive-color);
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-icon.on {
          fill: #fff;
        }

        .gooey-switch-icon.off {
          fill: #eaeaec;
        }

        .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-icon.off {
          fill: var(--active-color);
        }
        \`}
      </style>
      <div className="gooey-switch-container">
        <input type="checkbox" className="gooey-switch-input" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 142" className="gooey-switch-svg">
          <path d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z" className="gooey-switch-background" />
          <rect rx={6} height={64} width={12} y={39} x={64} className="gooey-switch-icon on" />
          <path d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z" fillRule="evenodd" className="gooey-switch-icon off" />
          <g filter="url('#gooey-switch-filter')">
            <rect fill="#fff" rx={29} height={58} width={116} y={42} x={13} className="gooey-switch-circle-center" />
            <rect fill="#fff" rx={58} height={114} width={114} y={14} x={14} className="gooey-switch-circle left" />
            <rect fill="#fff" rx={58} height={114} width={114} y={14} x={164} className="gooey-switch-circle right" />
          </g>
          <defs>
            <filter id="gooey-switch-filter">
              <feGaussianBlur stdDeviation={10} result="blur" in="SourceGraphic" />
              <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Switch;
`;function Ho(){return e.jsx(k,{title:"Gooey Switch",code:Vo,className:"min-h-[250px]",children:e.jsxs("div",{className:"gooey-switch-wrapper",children:[e.jsx("style",{children:`
            .gooey-switch-container {
              --active-color: #1868e3;
              --inactive-color: #d3d3d6;
              position: relative;
              aspect-ratio: 292 / 142;
              height: 1.875em;
            }

            .gooey-switch-input {
              appearance: none;
              margin: 0;
              position: absolute;
              z-index: 1;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              cursor: pointer;
            }

            .gooey-switch-svg {
              width: 100%;
              height: 100%;
              overflow: visible;
            }

            .gooey-switch-background {
              fill: var(--inactive-color);
              transition: fill .4s;
            }

            .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-background {
              fill: var(--active-color);
            }

            .gooey-switch-circle-center {
              transform-origin: center;
              transition: transform .6s;
            }

            .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle-center {
              transform: translateX(150px);
            }

            .gooey-switch-circle {
              transform-origin: center;
              transition: transform .45s;
              backface-visibility: hidden;
            }

            .gooey-switch-circle.left {
              transform: scale(1);
            }

            .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle.left {
              transform: scale(0);
            }

            .gooey-switch-circle.right {
              transform: scale(0);
            }

            .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-circle.right {
              transform: scale(1);
            }

            .gooey-switch-icon {
              transition: fill .4s;
            }

            .gooey-switch-icon.on {
              fill: var(--inactive-color);
            }

            .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-icon.on {
              fill: #fff;
            }

            .gooey-switch-icon.off {
              fill: #eaeaec;
            }

            .gooey-switch-input:checked + .gooey-switch-svg .gooey-switch-icon.off {
              fill: var(--active-color);
            }
            `}),e.jsxs("div",{className:"gooey-switch-container",children:[e.jsx("input",{type:"checkbox",className:"gooey-switch-input"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 292 142",className:"gooey-switch-svg",children:[e.jsx("path",{d:"M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z",className:"gooey-switch-background"}),e.jsx("rect",{rx:6,height:64,width:12,y:39,x:64,className:"gooey-switch-icon on"}),e.jsx("path",{d:"M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z",fillRule:"evenodd",className:"gooey-switch-icon off"}),e.jsxs("g",{filter:"url('#gooey-switch-filter')",children:[e.jsx("rect",{fill:"#fff",rx:29,height:58,width:116,y:42,x:13,className:"gooey-switch-circle-center"}),e.jsx("rect",{fill:"#fff",rx:58,height:114,width:114,y:14,x:14,className:"gooey-switch-circle left"}),e.jsx("rect",{fill:"#fff",rx:58,height:114,width:114,y:14,x:164,className:"gooey-switch-circle right"})]}),e.jsx("defs",{children:e.jsxs("filter",{id:"gooey-switch-filter",children:[e.jsx("feGaussianBlur",{stdDeviation:10,result:"blur",in:"SourceGraphic"}),e.jsx("feColorMatrix",{result:"goo",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",mode:"matrix",in:"blur"})]})})]})]})]})})}const Go=`import React from 'react';

const Tooltip = () => {
  return (
    <div className="map-tooltip-wrapper">
      <style>
        {\`
        .map-tooltip-app {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .map-tooltip-reference {
          position: relative;
        }

        .map-tooltip-main-title {
          font-size: 1.2rem;
          color: #4e8e5b;
          font-weight: 600;
        }
        
        .map-tooltip-hover-text {
            font-style: italic; 
            color: #226630;
            cursor: pointer;
            text-decoration: underline;
            text-decoration-style: dotted;
        }

        .map-tooltip-card {
          position: absolute;
          top: -100px;
          left: 15%;
          transition: transform 0.3s cubic-bezier(0.74, -0.03, 0.05, 1.24);
          width: 160px;
          height: 95px;
          will-change: transform;
          transform-origin: 50% 100%;
          transform: scale(0);
          filter: blur(10px);
          background: white;
          border-radius: 18px;
          box-shadow:
            0 0 0 2px #b0dbbf,
            1px 4px 5px 4px #ededed54;
          padding: 2px;
          animation-duration: 0.3s;
          animation-delay: 0.1s;
          animation-fill-mode: both;
          overflow: hidden;
          z-index: 10;
          display: block !important; /* Force display for animation */
        }

        /* Show card on hover of the text */
        .map-tooltip-reference:hover .map-tooltip-card {
          transform: scale(1);
          animation-name: map-tooltip-coolfadeIn;
        }

        .map-tooltip-card:hover {
          pointer-events: all;
        }

        .map-tooltip-bg-map {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 0;
          background: #e6f7ff; /* Fallback */
          /* Simulated map pattern */
          background-image: radial-gradient(#a3d8f7 1px, transparent 1px);
          background-size: 10px 10px;
        }

        .map-tooltip-elements {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .map-tooltip-details {
          z-index: 1;
          margin-bottom: -10%;
          margin-top: -12%;
          flex: 1 1 0;
          background: #daecdd;
          filter: blur(6px);
        }
        .map-tooltip-description {
          padding: 15px;
          z-index: 1;
          position: relative;
        }

        .map-tooltip-card-title {
           font-size: 1.2rem;
           color: #4e8e5b;
           font-weight: 600;
           display: block;
        }

        .map-tooltip-second-title {
          font-size: 0.9em;
          color: #5e836b;
          font-weight: 500;
          margin: 0;
        }

        .map-tooltip-inner-card {
          position: relative;
          border-radius: calc(18px - 2%);
          height: 100%;
          width: 100%;
          border: 2px solid #2d2d2d45;
          background: #daecdd;
          overflow: hidden;
        }

        .map-tooltip-blur-item {
          position: absolute;
          left: 0;
          top: 0;
          min-width: 60px;
          filter: blur(10px);
          background: #daecdd;
          z-index: -1;
          height: 110%;
        }

        .map-tooltip-location {
          background-color: #226630;
          position: absolute;
          top: 24%;
          z-index: 1000;
          left: 60%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          box-shadow: 0 0 10px 7px #c1c1c180;
          border: 5px solid white;
          animation: map-tooltip-pulse 3s infinite;
        }

        @keyframes map-tooltip-pulse {
          0% {
            transform: scale(0.95);
            box-shadow:
              0 0 0 0 rgba(72, 72, 72, 0.7),
              0 0 8px 5px #d9d9d980;
          }

          70% {
            transform: scale(1);
            box-shadow:
              0 0 0 10px rgba(72, 72, 72, 0),
              0 0 8px 5px #d9d9d980;
          }

          100% {
            transform: scale(0.95);
            box-shadow:
              0 0 0 0 rgba(72, 72, 72, 0),
              0 0 8px 5px #d9d9d980;
          }
        }

        @keyframes map-tooltip-coolfadeIn {
          0% {
            filter: brightness(1) blur(10px);
          }

          10% {
            filter: brightness(1) blur(20px);
          }

          100% {
            filter: brightness(1) blur(0px);
          }
        }

        @keyframes map-tooltip-movingClouds {
          from {
            transform: translateX(-100px);
          }
          to {
            transform: translateX(100px);
          }
        }

        .map-tooltip-cloud {
          z-index: 1;
          position: absolute;
          border-radius: 50%;
          animation-name: map-tooltip-movingClouds;
          animation-timing-function: ease;
          animation-iteration-count: infinite;
        }

        .map-tooltip-cloud:nth-child(1) {
          animation-duration: 45s;
          height: 1em;
          width: 1.4em;
          top: 3.5em;
          left: 50%;
          filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
            drop-shadow(-0.625em 0.313em #ffffffae);
          background: linear-gradient(to top right, #ffffffae, #ffffffae);
          transition: 0.4s;
        }

        .map-tooltip-cloud:nth-child(2) {
          animation-duration: 30s;
          top: 0.325em;
          right: -1em;
          width: 4.075em;
          height: 1.575em;
          background: #ebebebdb;
          filter: blur(0.425em) drop-shadow(-0.313em 0.812em #e0dfdfae)
            drop-shadow(-1.625em 0.812em #bbbbbbae) drop-shadow(-1em 0.063em #cfcfcfae);
        }

        .map-tooltip-cloud:nth-child(3) {
          animation-duration: 60s;
          top: 2.45em;
          right: 4.938em;
          width: 1.075em;
          height: 0.575em;
          background: #ffffff;
          filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
            drop-shadow(-0.625em 0.313em #ffffffae);
          transition: 0.8s;
        }

        .map-tooltip-cloud:nth-child(4) {
          animation-duration: 40s;
          top: 4.45em;
          right: 4.938em;
          width: 1.075em;
          height: 0.375em;
          background: #ffffff;
          filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
            drop-shadow(-0.625em 0.313em #ffffffae);
          transition: 0.8s;
        }
        \`}
      </style>
      <div id="app" className="map-tooltip-app">
        <div className="map-tooltip-reference">
          <p className="map-tooltip-main-title">
            Location&nbsp;
            <span className="map-tooltip-hover-text">Paris</span>, France
          </p>
          <div className="map-tooltip-card">
            <div className="map-tooltip-cloud" />
            <div className="map-tooltip-cloud" />
            <div className="map-tooltip-cloud" />
            <div className="map-tooltip-cloud" />
            <div className="map-tooltip-inner-card">
              <div className="map-tooltip-bg-map" />
              <div className="map-tooltip-location" />
              <div className="map-tooltip-elements">
                <div className="map-tooltip-description">
                  <div className="map-tooltip-blur-item" />
                  <span className="map-tooltip-card-title">Paris</span>
                  <p className="map-tooltip-second-title">France</p>
                </div>
                <div className="map-tooltip-details">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
`;function qo(){return e.jsx(k,{title:"Map Location Tooltip",code:Go,className:"min-h-[250px] overflow-visible",children:e.jsxs("div",{className:"map-tooltip-wrapper",children:[e.jsx("style",{children:`
            .map-tooltip-app {
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: system-ui, -apple-system, sans-serif;
            }

            .map-tooltip-reference {
              position: relative;
            }

            .map-tooltip-main-title {
              font-size: 1.2rem;
              color: #4e8e5b;
              font-weight: 600;
              margin: 0;
            }
            
            .map-tooltip-hover-text {
                font-style: italic; 
                color: #226630;
                cursor: pointer;
                text-decoration: underline;
                text-decoration-style: dotted;
            }

            .map-tooltip-card {
              position: absolute;
              top: -100px;
              left: 15%;
              transition: transform 0.3s cubic-bezier(0.74, -0.03, 0.05, 1.24);
              width: 160px;
              height: 95px;
              will-change: transform;
              transform-origin: 50% 100%;
              transform: scale(0);
              filter: blur(10px);
              background: white;
              border-radius: 18px;
              box-shadow:
                0 0 0 2px #b0dbbf,
                1px 4px 5px 4px #ededed54;
              padding: 2px;
              animation-duration: 0.3s;
              animation-delay: 0.1s;
              animation-fill-mode: both;
              overflow: hidden;
              z-index: 10;
              display: block !important;
            }

            /* Show card on hover of the text */
            .map-tooltip-reference:hover .map-tooltip-card {
              transform: scale(1);
              animation-name: map-tooltip-coolfadeIn;
            }

            .map-tooltip-card:hover {
              pointer-events: all;
            }

            .map-tooltip-bg-map {
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: 0;
              background: #e6f7ff;
              background-image: radial-gradient(#a3d8f7 1px, transparent 1px);
              background-size: 10px 10px;
            }

            .map-tooltip-elements {
              height: 100%;
              display: flex;
              flex-direction: column;
              gap: 20px;
            }

            .map-tooltip-details {
              z-index: 1;
              margin-bottom: -10%;
              margin-top: -12%;
              flex: 1 1 0;
              background: #daecdd;
              filter: blur(6px);
            }
            .map-tooltip-description {
              padding: 15px;
              z-index: 1;
              position: relative;
            }

            .map-tooltip-card-title {
               font-size: 1.2rem;
               color: #4e8e5b;
               font-weight: 600;
               display: block;
            }

            .map-tooltip-second-title {
              font-size: 0.9em;
              color: #5e836b;
              font-weight: 500;
              margin: 0;
            }

            .map-tooltip-inner-card {
              position: relative;
              border-radius: calc(18px - 2%);
              height: 100%;
              width: 100%;
              border: 2px solid #2d2d2d45;
              background: #daecdd;
              overflow: hidden;
            }

            .map-tooltip-blur-item {
              position: absolute;
              left: 0;
              top: 0;
              min-width: 60px;
              filter: blur(10px);
              background: #daecdd;
              z-index: -1;
              height: 110%;
            }

            .map-tooltip-location {
              background-color: #226630;
              position: absolute;
              top: 24%;
              z-index: 1000;
              left: 60%;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              box-shadow: 0 0 10px 7px #c1c1c180;
              border: 5px solid white;
              animation: map-tooltip-pulse 3s infinite;
            }

            @keyframes map-tooltip-pulse {
              0% {
                transform: scale(0.95);
                box-shadow:
                  0 0 0 0 rgba(72, 72, 72, 0.7),
                  0 0 8px 5px #d9d9d980;
              }

              70% {
                transform: scale(1);
                box-shadow:
                  0 0 0 10px rgba(72, 72, 72, 0),
                  0 0 8px 5px #d9d9d980;
              }

              100% {
                transform: scale(0.95);
                box-shadow:
                  0 0 0 0 rgba(72, 72, 72, 0),
                  0 0 8px 5px #d9d9d980;
              }
            }

            @keyframes map-tooltip-coolfadeIn {
              0% {
                filter: brightness(1) blur(10px);
              }

              10% {
                filter: brightness(1) blur(20px);
              }

              100% {
                filter: brightness(1) blur(0px);
              }
            }

            @keyframes map-tooltip-movingClouds {
              from {
                transform: translateX(-100px);
              }
              to {
                transform: translateX(100px);
              }
            }

            .map-tooltip-cloud {
              z-index: 1;
              position: absolute;
              border-radius: 50%;
              animation-name: map-tooltip-movingClouds;
              animation-timing-function: ease;
              animation-iteration-count: infinite;
            }

            .map-tooltip-cloud:nth-child(1) {
              animation-duration: 45s;
              height: 1em;
              width: 1.4em;
              top: 3.5em;
              left: 50%;
              filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
                drop-shadow(-0.625em 0.313em #ffffffae);
              background: linear-gradient(to top right, #ffffffae, #ffffffae);
              transition: 0.4s;
            }

            .map-tooltip-cloud:nth-child(2) {
              animation-duration: 30s;
              top: 0.325em;
              right: -1em;
              width: 4.075em;
              height: 1.575em;
              background: #ebebebdb;
              filter: blur(0.425em) drop-shadow(-0.313em 0.812em #e0dfdfae)
                drop-shadow(-1.625em 0.812em #bbbbbbae) drop-shadow(-1em 0.063em #cfcfcfae);
            }

            .map-tooltip-cloud:nth-child(3) {
              animation-duration: 60s;
              top: 2.45em;
              right: 4.938em;
              width: 1.075em;
              height: 0.575em;
              background: #ffffff;
              filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
                drop-shadow(-0.625em 0.313em #ffffffae);
              transition: 0.8s;
            }

            .map-tooltip-cloud:nth-child(4) {
              animation-duration: 40s;
              top: 4.45em;
              right: 4.938em;
              width: 1.075em;
              height: 0.375em;
              background: #ffffff;
              filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
                drop-shadow(-0.625em 0.313em #ffffffae);
              transition: 0.8s;
            }
            `}),e.jsx("div",{className:"map-tooltip-app",children:e.jsxs("div",{className:"map-tooltip-reference",children:[e.jsxs("p",{className:"map-tooltip-main-title",children:["Location ",e.jsx("span",{className:"map-tooltip-hover-text",children:"Paris"}),", France"]}),e.jsxs("div",{className:"map-tooltip-card",children:[e.jsx("div",{className:"map-tooltip-cloud"}),e.jsx("div",{className:"map-tooltip-cloud"}),e.jsx("div",{className:"map-tooltip-cloud"}),e.jsx("div",{className:"map-tooltip-cloud"}),e.jsxs("div",{className:"map-tooltip-inner-card",children:[e.jsx("div",{className:"map-tooltip-bg-map"}),e.jsx("div",{className:"map-tooltip-location"}),e.jsxs("div",{className:"map-tooltip-elements",children:[e.jsxs("div",{className:"map-tooltip-description",children:[e.jsx("div",{className:"map-tooltip-blur-item"}),e.jsx("span",{className:"map-tooltip-card-title",children:"Paris"}),e.jsx("p",{className:"map-tooltip-second-title",children:"France"})]}),e.jsx("div",{className:"map-tooltip-details"})]})]})]})]})})]})})}const Wo=`import React from 'react';

const FolderCard = () => {
  return (
    <section className="relative group flex flex-col items-center justify-center w-full h-full min-h-[250px] p-4">
      <div className="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
        <div className="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]" />
        <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]" />
        <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]" />
        <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]" />
        <div className="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]" />
      </div>
      <p className="text-xl md:text-3xl pt-8 opacity-20 font-bold transition-opacity group-hover:opacity-100">Hover over</p>
    </section>
  );
}

export default FolderCard;
`;function Uo(){return e.jsx(k,{title:"Folder Card",code:Wo,className:"min-h-[350px] flex items-center justify-center",children:e.jsxs("section",{className:"relative group flex flex-col items-center justify-center w-full h-full p-4",children:[e.jsxs("div",{className:"file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50",children:[e.jsx("div",{className:"work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"}),e.jsx("div",{className:"work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"}),e.jsx("div",{className:"work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"}),e.jsx("div",{className:"work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"}),e.jsx("div",{className:"work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]"})]}),e.jsx("p",{className:"text-xl md:text-3xl pt-8 opacity-20 font-bold transition-opacity group-hover:opacity-100",children:"Hover over"})]})})}const $o=`import React from 'react';

const Loader = () => {
  return (
    <div className="cola-loader-wrapper">
      <style>
        {\`
        .cola-loader-svg {
          --pathlength: 1384;
          width: 45px;
          height: 135px; /* Aspect ratio roughly matches viewbox 205 615 */
          fill: transparent;
          stroke: black;
          stroke-linecap: round;
          stroke-width: 15px;
          stroke-dashoffset: var(--pathlength);
          stroke-dasharray: 0 var(--pathlength);
          animation: cola-loader-anim 8s cubic-bezier(.5,.1,.5,1) infinite both;
        }

        @keyframes cola-loader-anim {
          90%, 100% {
            stroke-dashoffset: 0;
            stroke-dasharray: var(--pathlength) 0;
          }
        }
        \`}
      </style>
      <svg viewBox="0 0 205 615" className="cola-loader-svg">
        <path d="M47 595c-8 0-26-6-26-34V261c0-17 9-29 16-38s16-28 16-28L68 59l-4-5s3-30 7-36 14-6 32-6 28 0 32 6 7 36 7 36l-4 5 15 136s9 19 16 28 16 21 16 38v300c0 28-18 34-26 34H47z" />
      </svg>
    </div>
  );
}

export default Loader;
`;function Qo(){return e.jsx(k,{title:"Cola Loader",code:$o,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"cola-loader-wrapper",children:[e.jsx("style",{children:`
            .cola-loader-svg {
              --pathlength: 1384;
              width: 45px;
              height: 135px;
              fill: transparent;
              stroke: black;
              stroke-linecap: round;
              stroke-width: 15px;
              stroke-dashoffset: var(--pathlength);
              stroke-dasharray: 0 var(--pathlength);
              animation: cola-loader-anim 8s cubic-bezier(.5,.1,.5,1) infinite both;
            }

            @keyframes cola-loader-anim {
              90%, 100% {
                stroke-dashoffset: 0;
                stroke-dasharray: var(--pathlength) 0;
              }
            }
            `}),e.jsx("svg",{viewBox:"0 0 205 615",className:"cola-loader-svg",children:e.jsx("path",{d:"M47 595c-8 0-26-6-26-34V261c0-17 9-29 16-38s16-28 16-28L68 59l-4-5s3-30 7-36 14-6 32-6 28 0 32 6 7 36 7 36l-4 5 15 136s9 19 16 28 16 21 16 38v300c0 28-18 34-26 34H47z"})})]})})}const Jo=`import React from 'react';

const Input = () => {
  return (
    <div className="threed-input-wrapper">
      <style>
        {\`
        .threed-input-container {
          position: relative;
          background: rgba(255, 255, 255, 0.664);
          padding: 10px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          border-radius: 22px;
          max-width: 300px;
          transition: transform 400ms;
          transform-style: preserve-3d;
          transform: rotateX(15deg) rotateY(-20deg);
          perspective: 500px;
        }

        .threed-input-shadow {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          z-index: -1;
          filter: blur(30px);
          border-radius: 20px;
          background-color: #999cff;
          background-image: radial-gradient(at 85% 51%, hsla(60,60%,61%,1) 0px, transparent 50%),
            radial-gradient(at 74% 68%, hsla(235,69%,77%,1) 0px, transparent 50%),
            radial-gradient(at 64% 79%, hsla(284,72%,73%,1) 0px, transparent 50%),
            radial-gradient(at 75% 16%, hsla(283,60%,72%,1) 0px, transparent 50%),
            radial-gradient(at 90% 65%, hsla(153,70%,64%,1) 0px, transparent 50%),
            radial-gradient(at 91% 83%, hsla(283,74%,69%,1) 0px, transparent 50%),
            radial-gradient(at 72% 91%, hsla(213,75%,75%,1) 0px, transparent 50%);
        }

        .threed-input-btn {
          cursor: pointer;
          border: none;
          background: none;
          transition: transform 400ms, background 400ms;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          padding: 5px;
        }

        .threed-input-btn:hover {
          background: rgba(255, 255, 255, 0.411);
        }

        .threed-input-field {
          width: 100%;
          border-radius: 20px;
          outline: none;
          border: none;
          padding: 8px;
          position: relative;
          background: transparent; /* Changed from default to transparent for better blend */
        }
        \`}
      </style>
      <div className="threed-input-container">
        <div className="threed-input-shadow" />
        <button className="threed-input-btn">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
            <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#17202A" />
          </svg>
        </button>
        <input type="text" name="text" className="threed-input-field" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Input;
`;function Ko(){return e.jsx(k,{title:"3D Input",code:Jo,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"threed-input-wrapper py-10",children:[e.jsx("style",{children:`
            .threed-input-container {
              position: relative;
              background: rgba(255, 255, 255, 0.664);
              padding: 10px 15px;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              border-radius: 22px;
              max-width: 300px;
              transition: transform 400ms;
              transform-style: preserve-3d;
              transform: rotateX(15deg) rotateY(-20deg);
              perspective: 500px;
            }

            .threed-input-shadow {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              bottom: 0;
              z-index: -1;
              filter: blur(30px);
              border-radius: 20px;
              background-color: #999cff;
              background-image: radial-gradient(at 85% 51%, hsla(60,60%,61%,1) 0px, transparent 50%),
                radial-gradient(at 74% 68%, hsla(235,69%,77%,1) 0px, transparent 50%),
                radial-gradient(at 64% 79%, hsla(284,72%,73%,1) 0px, transparent 50%),
                radial-gradient(at 75% 16%, hsla(283,60%,72%,1) 0px, transparent 50%),
                radial-gradient(at 90% 65%, hsla(153,70%,64%,1) 0px, transparent 50%),
                radial-gradient(at 91% 83%, hsla(283,74%,69%,1) 0px, transparent 50%),
                radial-gradient(at 72% 91%, hsla(213,75%,75%,1) 0px, transparent 50%);
            }

            .threed-input-btn {
              cursor: pointer;
              border: none;
              background: none;
              transition: transform 400ms, background 400ms;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 12px;
              padding: 5px;
            }

            .threed-input-btn:hover {
              background: rgba(255, 255, 255, 0.411);
            }

            .threed-input-field {
              width: 100%;
              border-radius: 20px;
              outline: none;
              border: none;
              padding: 8px;
              position: relative;
              background: transparent;
            }
            `}),e.jsxs("div",{className:"threed-input-container",children:[e.jsx("div",{className:"threed-input-shadow"}),e.jsx("button",{className:"threed-input-btn",children:e.jsx("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",height:"20px",width:"20px",children:e.jsx("path",{d:"M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z",fillRule:"evenodd",fill:"#17202A"})})}),e.jsx("input",{type:"text",name:"text",className:"threed-input-field",placeholder:"Search..."})]})]})})}const es=`import React from 'react';

const PushLoader = () => {
  return (
    <div className="push-loader-wrapper">
      <style>
        {\`
        .push-loader {
          display: block;
          width: 84px;
          height: 84px;
          position: relative;
        }

        .push-loader:before, .push-loader:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: hsl(var(--primary));
          transform: translate(-50% , -100%)  scale(0);
          animation: push-loader-anim 2s infinite linear;
        }

        .dark .push-loader:before, .dark .push-loader:after {
          background: #FFF;
        }

        .push-loader:after {
          animation-delay: 1s;
        }

        @keyframes push-loader-anim {
          0% , 50% {
            transform: translate(-50% , 0%)  scale(1)
          }
          100% {
            transform: translate(-50%, -100%) scale(0)
          }
        }
        \`}
      </style>
      <span className="push-loader" />
    </div>
  );
}

export default PushLoader;
`;function ts(){return e.jsx(k,{title:"Push Loader",code:es,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"push-loader-wrapper bg-transparent p-8 rounded-xl relative overflow-hidden",children:[e.jsx("style",{children:`
            .push-loader {
              display: block;
              width: 84px;
              height: 84px;
              position: relative;
            }

            .push-loader:before, .push-loader:after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: 0;
              width: 64px;
              height: 64px;
              border-radius: 50%;
              background: #000;
              transform: translate(-50% , -100%)  scale(0);
              animation: push-loader-anim 2s infinite linear;
            }

            .dark .push-loader:before, .dark .push-loader:after {
              background: #FFF;
            }

            .push-loader:after {
              animation-delay: 1s;
            }

            @keyframes push-loader-anim {
              0% , 50% {
                transform: translate(-50% , 0%)  scale(1)
              }
              100% {
                transform: translate(-50%, -100%) scale(0)
              }
            }
            `}),e.jsx("span",{className:"push-loader"})]})})}const rs=`import React from 'react';

const GeometricShapesLoader = () => {
  return (
    <div className="geo-loader-wrapper">
      <style>
        {\`
        .geo-loader-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .geo-loader {
          --path: #2f3545;
          --dot: #5628ee;
          --duration: 3s;
          width: 44px;
          height: 44px;
          position: relative;
          display: inline-block;
          margin: 0 16px;
        }

        .geo-loader:before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          display: block;
          background: var(--dot);
          top: 37px;
          left: 19px;
          transform: translate(-18px, -18px);
          animation: geo-dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .geo-loader svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .geo-loader svg rect,
        .geo-loader svg polygon,
        .geo-loader svg circle {
          fill: none;
          stroke: var(--path);
          stroke-width: 10px;
          stroke-linejoin: round;
          stroke-linecap: round;
        }

        .geo-loader svg polygon {
          stroke-dasharray: 145 76 145 76;
          stroke-dashoffset: 0;
          animation: geo-pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .geo-loader svg rect {
          stroke-dasharray: 192 64 192 64;
          stroke-dashoffset: 0;
          animation: geo-pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .geo-loader svg circle {
          stroke-dasharray: 150 50 150 50;
          stroke-dashoffset: 75;
          animation: geo-pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        .geo-loader.geo-triangle {
          width: 48px;
        }

        .geo-loader.geo-triangle:before {
          left: 21px;
          transform: translate(-10px, -18px);
          animation: geo-dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }

        @keyframes geo-pathTriangle {
          33% { stroke-dashoffset: 74; }
          66% { stroke-dashoffset: 147; }
          100% { stroke-dashoffset: 221; }
        }

        @keyframes geo-dotTriangle {
          33% { transform: translate(0, 0); }
          66% { transform: translate(10px, -18px); }
          100% { transform: translate(-10px, -18px); }
        }

        @keyframes geo-pathRect {
          25% { stroke-dashoffset: 64; }
          50% { stroke-dashoffset: 128; }
          75% { stroke-dashoffset: 192; }
          100% { stroke-dashoffset: 256; }
        }

        @keyframes geo-dotRect {
          25% { transform: translate(0, 0); }
          50% { transform: translate(18px, -18px); }
          75% { transform: translate(0, -36px); }
          100% { transform: translate(-18px, -18px); }
        }

        @keyframes geo-pathCircle {
          25% { stroke-dashoffset: 125; }
          50% { stroke-dashoffset: 175; }
          75% { stroke-dashoffset: 225; }
          100% { stroke-dashoffset: 275; }
        }
        \`}
      </style>
      <div className="geo-loader-container">
        <div className="geo-loader">
          <svg viewBox="0 0 80 80">
            <circle r={32} cy={40} cx={40} />
          </svg>
        </div>
        <div className="geo-loader geo-triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72" />
          </svg>
        </div>
        <div className="geo-loader">
          <svg viewBox="0 0 80 80">
            <rect height={64} width={64} y={8} x={8} />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default GeometricShapesLoader;
`;function as(){return e.jsx(k,{title:"Geometric Shapes Loader",code:rs,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"geo-loader-wrapper scale-75 sm:scale-100",children:[e.jsx("style",{children:`
            .geo-loader-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .geo-loader {
              --path: #2f3545;
              --dot: #5628ee;
              --duration: 3s;
              width: 44px;
              height: 44px;
              position: relative;
              display: inline-block;
              margin: 0 16px;
            }

            .geo-loader:before {
              content: "";
              width: 6px;
              height: 6px;
              border-radius: 50%;
              position: absolute;
              display: block;
              background: var(--dot);
              top: 37px;
              left: 19px;
              transform: translate(-18px, -18px);
              animation: geo-dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
            }

            .geo-loader svg {
              display: block;
              width: 100%;
              height: 100%;
            }

            .geo-loader svg rect,
            .geo-loader svg polygon,
            .geo-loader svg circle {
              fill: none;
              stroke: var(--path);
              stroke-width: 10px;
              stroke-linejoin: round;
              stroke-linecap: round;
            }

            .geo-loader svg polygon {
              stroke-dasharray: 145 76 145 76;
              stroke-dashoffset: 0;
              animation: geo-pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
            }

            .geo-loader svg rect {
              stroke-dasharray: 192 64 192 64;
              stroke-dashoffset: 0;
              animation: geo-pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
            }

            .geo-loader svg circle {
              stroke-dasharray: 150 50 150 50;
              stroke-dashoffset: 75;
              animation: geo-pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
            }

            .geo-loader.geo-triangle {
              width: 48px;
            }

            .geo-loader.geo-triangle:before {
              left: 21px;
              transform: translate(-10px, -18px);
              animation: geo-dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
            }

            @keyframes geo-pathTriangle {
                33% { stroke-dashoffset: 74; }
                66% { stroke-dashoffset: 147; }
                100% { stroke-dashoffset: 221; }
            }

            @keyframes geo-dotTriangle {
                33% { transform: translate(0, 0); }
                66% { transform: translate(10px, -18px); }
                100% { transform: translate(-10px, -18px); }
            }

            @keyframes geo-pathRect {
                25% { stroke-dashoffset: 64; }
                50% { stroke-dashoffset: 128; }
                75% { stroke-dashoffset: 192; }
                100% { stroke-dashoffset: 256; }
            }

            @keyframes geo-dotRect {
                25% { transform: translate(0, 0); }
                50% { transform: translate(18px, -18px); }
                75% { transform: translate(0, -36px); }
                100% { transform: translate(-18px, -18px); }
            }

            @keyframes geo-pathCircle {
                25% { stroke-dashoffset: 125; }
                50% { stroke-dashoffset: 175; }
                75% { stroke-dashoffset: 225; }
                100% { stroke-dashoffset: 275; }
            }
            `}),e.jsxs("div",{className:"geo-loader-container",children:[e.jsx("div",{className:"geo-loader",children:e.jsx("svg",{viewBox:"0 0 80 80",children:e.jsx("circle",{r:32,cy:40,cx:40})})}),e.jsx("div",{className:"geo-loader geo-triangle",children:e.jsx("svg",{viewBox:"0 0 86 80",children:e.jsx("polygon",{points:"43 8 79 72 7 72"})})}),e.jsx("div",{className:"geo-loader",children:e.jsx("svg",{viewBox:"0 0 80 80",children:e.jsx("rect",{height:64,width:64,y:8,x:8})})})]})]})})}const is=`import React from 'react';

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
`;function os(){return e.jsx(k,{title:"Gradient Spin Loader",code:is,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"gradient-spin-loader-wrapper bg-transparent p-10 rounded-xl",children:[e.jsx("style",{children:`
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
            `}),e.jsx("div",{className:"gradient-spin-loader"})]})})}const ss=`import React from 'react';

const JumpingCirclesLoader = () => {
  return (
    <div className="jumping-circles-view">
      <style>
        {\`
        .jumping-circles-wrapper {
          width: 200px;
          height: 60px;
          position: relative;
          z-index: 1;
        }

        .jumping-circle {
          width: 20px;
          height: 20px;
          position: absolute;
          border-radius: 50%;
          background-color: #fff;
          left: 15%;
          transform-origin: 50%;
          animation: jumping-circle-anim .5s alternate infinite ease;
        }

        @keyframes jumping-circle-anim {
          0% {
            top: 60px;
            height: 5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
          }
          40% {
            height: 20px;
            border-radius: 50%;
            transform: scaleX(1);
          }
          100% {
            top: 0%;
          }
        }

        .jumping-circle:nth-child(2) {
          left: 45%;
          animation-delay: .2s;
        }

        .jumping-circle:nth-child(3) {
          left: auto;
          right: 15%;
          animation-delay: .3s;
        }

        .jumping-shadow {
          width: 20px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.5);
          position: absolute;
          top: 62px;
          transform-origin: 50%;
          z-index: -1;
          left: 15%;
          filter: blur(1px);
          animation: jumping-shadow-anim .5s alternate infinite ease;
        }

        @keyframes jumping-shadow-anim {
          0% {
            transform: scaleX(1.5);
          }
          40% {
            transform: scaleX(1);
            opacity: .7;
          }
          100% {
            transform: scaleX(.2);
            opacity: .4;
          }
        }

        .jumping-shadow:nth-child(4) {
          left: 45%;
          animation-delay: .2s
        }

        .jumping-shadow:nth-child(5) {
          left: auto;
          right: 15%;
          animation-delay: .3s;
        }
        \`}
      </style>
      <div className="jumping-circles-wrapper">
        <div className="jumping-circle" />
        <div className="jumping-circle" />
        <div className="jumping-circle" />
        <div className="jumping-shadow" />
        <div className="jumping-shadow" />
        <div className="jumping-shadow" />
      </div>
    </div>
  );
}

export default JumpingCirclesLoader;
`;function ns(){return e.jsx(k,{title:"Jumping Circles Loader",code:ss,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"jumping-circles-view bg-transparent p-10 rounded-xl flex items-center justify-center overflow-hidden",children:[e.jsx("style",{children:`
            .jumping-circles-wrapper {
              width: 200px;
              height: 60px;
              position: relative;
              z-index: 1;
            }

            .jumping-circle {
              width: 20px;
              height: 20px;
              position: absolute;
              border-radius: 50%;
              background-color: hsl(var(--primary));
              left: 15%;
              transform-origin: 50%;
              animation: jumping-circle-anim .5s alternate infinite ease;
            }

            @keyframes jumping-circle-anim {
              0% {
                top: 60px;
                height: 5px;
                border-radius: 50px 50px 25px 25px;
                transform: scaleX(1.7);
              }
              40% {
                height: 20px;
                border-radius: 50%;
                transform: scaleX(1);
              }
              100% {
                top: 0%;
              }
            }

            .jumping-circle:nth-child(2) {
              left: 45%;
              animation-delay: .2s;
            }

            .jumping-circle:nth-child(3) {
              left: auto;
              right: 15%;
              animation-delay: .3s;
            }

            .jumping-shadow {
              width: 20px;
              height: 4px;
              border-radius: 50%;
              background-color: rgba(0,0,0,0.5);
              position: absolute;
              top: 62px;
              transform-origin: 50%;
              z-index: -1;
              left: 15%;
              filter: blur(1px);
              animation: jumping-shadow-anim .5s alternate infinite ease;
            }

            @keyframes jumping-shadow-anim {
              0% {
                transform: scaleX(1.5);
              }
              40% {
                transform: scaleX(1);
                opacity: .7;
              }
              100% {
                transform: scaleX(.2);
                opacity: .4;
              }
            }

            .jumping-shadow:nth-child(4) {
              left: 45%;
              animation-delay: .2s
            }

            .jumping-shadow:nth-child(5) {
              left: auto;
              right: 15%;
              animation-delay: .3s;
            }
            `}),e.jsxs("div",{className:"jumping-circles-wrapper scale-75 sm:scale-100",children:[e.jsx("div",{className:"jumping-circle"}),e.jsx("div",{className:"jumping-circle"}),e.jsx("div",{className:"jumping-circle"}),e.jsx("div",{className:"jumping-shadow"}),e.jsx("div",{className:"jumping-shadow"}),e.jsx("div",{className:"jumping-shadow"})]})]})})}const ls=`import React from 'react';

const Error404Card = () => {
  return (
    <div className="error404-wrapper">
      <style>
        {\`
        .error404-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30em;
          height: 30em;
          font-size: 10px; /* Base font size for em units */
        }

        .error404-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 5em;
        }

        .error404-antenna {
          width: 5em;
          height: 5em;
          border-radius: 50%;
          border: 2px solid black;
          background-color: #f27405;
          margin-bottom: -6em;
          margin-left: 0em;
          z-index: -1;
          position: relative;
        }
        .error404-antenna_shadow {
          position: absolute;
          background-color: transparent;
          width: 50px;
          height: 56px;
          margin-left: 1.68em;
          border-radius: 45%;
          transform: rotate(140deg);
          border: 4px solid transparent;
          box-shadow: inset 0px 16px #a85103, inset 0px 16px 1px 1px #a85103;
        }
        .error404-antenna::after {
          content: "";
          position: absolute;
          margin-top: -9.4em;
          margin-left: 0.4em;
          transform: rotate(-25deg);
          width: 1em;
          height: 0.5em;
          border-radius: 50%;
          background-color: #f69e50;
        }
        .error404-antenna::before {
          content: "";
          position: absolute;
          margin-top: 0.2em;
          margin-left: 1.25em;
          transform: rotate(-20deg);
          width: 1.5em;
          height: 0.8em;
          border-radius: 50%;
          background-color: #f69e50;
        }
        .error404-a1 {
          position: relative;
          top: -102%;
          left: -130%;
          width: 12em;
          height: 5.5em;
          border-radius: 50px;
          background-image: linear-gradient(#171717, #171717, #353535, #353535, #171717);
          transform: rotate(-29deg);
          clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
        }
        .error404-a1d {
          position: relative;
          top: -211%;
          left: -35%;
          transform: rotate(45deg);
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          border: 2px solid black;
          background-color: #979797;
          z-index: 99;
        }
        .error404-a2 {
          position: relative;
          top: -210%;
          left: -10%;
          width: 12em;
          height: 4em;
          border-radius: 50px;
          background-color: #171717;
          background-image: linear-gradient(#171717, #171717, #353535, #353535, #171717);
          margin-right: 5em;
          clip-path: polygon(47% 0, 47% 0, 34% 34%, 54% 25%, 32% 100%, 29% 96%, 49% 32%, 30% 38%);
          transform: rotate(-8deg);
        }
        .error404-a2d {
          position: relative;
          top: -294%;
          left: 94%;
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          border: 2px solid black;
          background-color: #979797;
          z-index: 99;
        }

        .error404-notfound_text {
          background-color: black;
          padding-left: 0.3em;
          padding-right: 0.3em;
          font-size: 0.75em;
          color: white;
          letter-spacing: 0;
          border-radius: 5px;
          z-index: 10;
        }
        .error404-tv {
          width: 17em;
          height: 9em;
          margin-top: 3em;
          border-radius: 15px;
          background-color: #d36604;
          display: flex;
          justify-content: center;
          border: 2px solid #1d0e01;
          box-shadow: inset 0.2em 0.2em #e69635;
          position: relative;
        }
        .error404-tv::after {
          content: "";
          position: absolute;
          width: 17em;
          height: 9em;
          border-radius: 15px;
          background: repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px 2500px;
          background-blend-mode: difference;
          opacity: 0.09;
          top: 0;
          left: 0;
        }
        .error404-curve_svg {
          position: absolute;
          margin-top: 0.25em;
          margin-left: -0.25em;
          height: 12px;
          width: 12px;
        }
        .error404-display_div {
          display: flex;
          align-items: center;
          align-self: center;
          justify-content: center;
          border-radius: 15px;
          box-shadow: 3.5px 3.5px 0px #e69635;
          z-index: 10;
        }
        .error404-screen_out {
          width: auto;
          height: auto;
          border-radius: 10px;
        }
        .error404-screen_out1 {
          width: 11em;
          height: 7.75em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .error404-screen {
          width: 13em;
          height: 7.85em;
          font-family: Montserrat, sans-serif;
          border: 2px solid #1d0e01;
          background: repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px 2500px;
          background-blend-mode: difference;
          animation: error404-b 0.2s infinite alternate;
          border-radius: 10px;
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #252525;
          letter-spacing: 0.15em;
          text-align: center;
        }
        
        /* Always show screen, hide screenM as per generic usage */
        .error404-screenM {
            display: none;
        }
        
        @keyframes error404-b {
          100% {
            background-position: 50% 0, 60% 50%;
          }
        }

        .error404-lines {
          display: flex;
          column-gap: 0.1em;
          align-self: flex-end;
        }
        .error404-line1,
        .error404-line3 {
          width: 2px;
          height: 0.5em;
          background-color: black;
          border-radius: 25px 25px 0px 0px;
          margin-top: 0.5em;
        }
        .error404-line2 {
          flex-grow: 1;
          width: 2px;
          height: 1em;
          background-color: black;
          border-radius: 25px 25px 0px 0px;
        }

        .error404-buttons_div {
          width: 4.25em;
          align-self: center;
          height: 8em;
          background-color: #e69635;
          border: 2px solid #1d0e01;
          padding: 0.6em;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          row-gap: 0.75em;
          box-shadow: 3px 3px 0px #e69635;
        }
        .error404-b1 {
          width: 1.65em;
          height: 1.65em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 2px solid black;
          box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721, -2px 0px 0px 1px black;
          position: relative;
        }
        .error404-b1::before {
          content: "";
          position: absolute;
          margin-top: 1em;
          margin-left: 0.5em;
          transform: rotate(47deg);
          border-radius: 5px;
          width: 0.1em;
          height: 0.4em;
          background-color: #000000;
        }
        .error404-b1::after {
          content: "";
          position: absolute;
          margin-top: 0.9em;
          margin-left: 0.8em;
          transform: rotate(47deg);
          border-radius: 5px;
          width: 0.1em;
          height: 0.55em;
          background-color: #000000;
        }
        .error404-b1 div {
          content: "";
          position: absolute;
          margin-top: -0.1em;
          margin-left: 0.65em;
          transform: rotate(45deg);
          width: 0.15em;
          height: 1.5em;
          background-color: #000000;
        }
        .error404-b2 {
          width: 1.65em;
          height: 1.65em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 2px solid black;
          box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721, -2px 0px 0px 1px black;
          position: relative;
        }
        .error404-b2::before {
          content: "";
          position: absolute;
          margin-top: 1.05em;
          margin-left: 0.8em;
          transform: rotate(-45deg);
          border-radius: 5px;
          width: 0.15em;
          height: 0.4em;
          background-color: #000000;
        }
        .error404-b2::after {
          content: "";
          position: absolute;
          margin-top: -0.1em;
          margin-left: 0.65em;
          transform: rotate(-45deg);
          width: 0.15em;
          height: 1.5em;
          background-color: #000000;
        }
        .error404-speakers {
          display: flex;
          flex-direction: column;
          row-gap: 0.5em;
        }
        .error404-speakers .error404-g1 {
          display: flex;
          column-gap: 0.25em;
        }
        .error404-speakers .error404-g1 .error404-g11,
        .error404-g12,
        .error404-g13 {
          width: 0.65em;
          height: 0.65em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 2px solid black;
          box-shadow: inset 1.25px 1.25px 1px #b49577;
        }
        .error404-speakers .error404-g {
          width: auto;
          height: 2px;
          background-color: #171717;
        }

        .error404-bottom {
          width: 100%;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 8.7em;
        }
        .error404-base1 {
          height: 1em;
          width: 2em;
          border: 2px solid #171717;
          background-color: #4d4d4d;
          margin-top: -0.15em;
          z-index: -1;
        }
        .error404-base2 {
          height: 1em;
          width: 2em;
          border: 2px solid #171717;
          background-color: #4d4d4d;
          margin-top: -0.15em;
          z-index: -1;
        }
        .error404-base3 {
          position: absolute;
          height: 0.15em;
          width: 17.5em;
          background-color: #171717;
          margin-top: 0.8em;
        }

        .error404-text {
          position: absolute;
          display: flex;
          flex-direction: row;
          column-gap: 6em;
          z-index: -5;
          margin-bottom: 2em;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          font-family: Montserrat, sans-serif;
        }
        .error404-text1, .error404-text2, .error404-text3 {
          transform: scaleY(24.5) scaleX(9);
        }
        \`}
      </style>
      <div className="error404-main">
        <div className="error404-antenna">
          <div className="error404-antenna_shadow" />
          <div className="error404-a1" />
          <div className="error404-a1d" />
          <div className="error404-a2" />
          <div className="error404-a2d" />
          <div className="error404-a_base" />
        </div>
        <div className="error404-tv">
          <div className="error404-cruve">
            <svg className="error404-curve_svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 189.929 189.929">
              <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13 C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
            </svg>
          </div>
          <div className="error404-display_div">
            <div className="error404-screen_out">
              <div className="error404-screen_out1">
                <div className="error404-screen">
                  <span className="error404-notfound_text"> NOT FOUND</span>
                </div>
              </div>
            </div>
          </div>
          <div className="error404-lines">
            <div className="error404-line1" />
            <div className="error404-line2" />
            <div className="error404-line3" />
          </div>
          <div className="error404-buttons_div">
            <div className="error404-b1"><div /></div>
            <div className="error404-b2" />
            <div className="error404-speakers">
              <div className="error404-g1">
                <div className="error404-g11" />
                <div className="error404-g12" />
                <div className="error404-g13" />
              </div>
              <div className="error404-g" />
              <div className="error404-g" />
            </div>
          </div>
        </div>
        <div className="error404-bottom">
          <div className="error404-base1" />
          <div className="error404-base2" />
          <div className="error404-base3" />
        </div>
      </div>
      <div className="error404-text">
        <div className="error404-text1">4</div>
        <div className="error404-text2">0</div>
        <div className="error404-text3">4</div>
      </div>
    </div>
  );
}

export default Error404Card;
`;function cs(){return e.jsx(k,{title:"404 Error Card",code:ls,className:"min-h-[400px] flex items-center justify-center overflow-hidden",children:e.jsxs("div",{className:"scale-[0.4] sm:scale-50 origin-center bg-transparent",children:[e.jsx("style",{children:`
                .error404-wrapper {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 30em;
                  height: 30em;
                  font-size: 10px;
                }

                .error404-main {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  margin-top: 5em;
                }

                .error404-antenna {
                  width: 5em;
                  height: 5em;
                  border-radius: 50%;
                  border: 2px solid black;
                  background-color: #f27405;
                  margin-bottom: -6em;
                  margin-left: 0em;
                  z-index: -1;
                  position: relative;
                }
                .error404-antenna_shadow {
                  position: absolute;
                  background-color: transparent;
                  width: 50px;
                  height: 56px;
                  margin-left: 1.68em;
                  border-radius: 45%;
                  transform: rotate(140deg);
                  border: 4px solid transparent;
                  box-shadow: inset 0px 16px #a85103, inset 0px 16px 1px 1px #a85103;
                }
                .error404-antenna::after {
                  content: "";
                  position: absolute;
                  margin-top: -9.4em;
                  margin-left: 0.4em;
                  transform: rotate(-25deg);
                  width: 1em;
                  height: 0.5em;
                  border-radius: 50%;
                  background-color: #f69e50;
                }
                .error404-antenna::before {
                  content: "";
                  position: absolute;
                  margin-top: 0.2em;
                  margin-left: 1.25em;
                  transform: rotate(-20deg);
                  width: 1.5em;
                  height: 0.8em;
                  border-radius: 50%;
                  background-color: #f69e50;
                }
                .error404-a1 {
                  position: relative;
                  top: -102%;
                  left: -130%;
                  width: 12em;
                  height: 5.5em;
                  border-radius: 50px;
                  background-image: linear-gradient(#171717, #171717, #353535, #353535, #171717);
                  transform: rotate(-29deg);
                  clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
                }
                .error404-a1d {
                  position: relative;
                  top: -211%;
                  left: -35%;
                  transform: rotate(45deg);
                  width: 0.5em;
                  height: 0.5em;
                  border-radius: 50%;
                  border: 2px solid black;
                  background-color: #979797;
                  z-index: 99;
                }
                .error404-a2 {
                  position: relative;
                  top: -210%;
                  left: -10%;
                  width: 12em;
                  height: 4em;
                  border-radius: 50px;
                  background-color: #171717;
                  background-image: linear-gradient(#171717, #171717, #353535, #353535, #171717);
                  margin-right: 5em;
                  clip-path: polygon(47% 0, 47% 0, 34% 34%, 54% 25%, 32% 100%, 29% 96%, 49% 32%, 30% 38%);
                  transform: rotate(-8deg);
                }
                .error404-a2d {
                  position: relative;
                  top: -294%;
                  left: 94%;
                  width: 0.5em;
                  height: 0.5em;
                  border-radius: 50%;
                  border: 2px solid black;
                  background-color: #979797;
                  z-index: 99;
                }

                .error404-notfound_text {
                  background-color: black;
                  padding-left: 0.3em;
                  padding-right: 0.3em;
                  font-size: 0.75em;
                  color: white;
                  letter-spacing: 0;
                  border-radius: 5px;
                  z-index: 10;
                }
                .error404-tv {
                  width: 17em;
                  height: 9em;
                  margin-top: 3em;
                  border-radius: 15px;
                  background-color: #d36604;
                  display: flex;
                  justify-content: center;
                  border: 2px solid #1d0e01;
                  box-shadow: inset 0.2em 0.2em #e69635;
                  position: relative;
                }
                .error404-tv::after {
                  content: "";
                  position: absolute;
                  width: 17em;
                  height: 9em;
                  border-radius: 15px;
                  background: repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px 2500px;
                  background-blend-mode: difference;
                  opacity: 0.09;
                  top: 0;
                  left: 0;
                }
                .error404-curve_svg {
                  position: absolute;
                  margin-top: 0.25em;
                  margin-left: -0.25em;
                  height: 12px;
                  width: 12px;
                }
                .error404-display_div {
                  display: flex;
                  align-items: center;
                  align-self: center;
                  justify-content: center;
                  border-radius: 15px;
                  box-shadow: 3.5px 3.5px 0px #e69635;
                  z-index: 10;
                }
                .error404-screen_out {
                  width: auto;
                  height: auto;
                  border-radius: 10px;
                }
                .error404-screen_out1 {
                  width: 11em;
                  height: 7.75em;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 10px;
                }
                .error404-screen {
                  width: 13em;
                  height: 7.85em;
                  font-family: Montserrat, sans-serif;
                  border: 2px solid #1d0e01;
                  background: repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px 2500px, repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px 2500px;
                  background-blend-mode: difference;
                  animation: error404-b 0.2s infinite alternate;
                  border-radius: 10px;
                  z-index: 99;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                  color: #252525;
                  letter-spacing: 0.15em;
                  text-align: center;
                }

                /* Always show screen */
                .error404-screenM {
                    display: none;
                }

                @keyframes error404-b {
                  100% {
                    background-position: 50% 0, 60% 50%;
                  }
                }

                .error404-lines {
                  display: flex;
                  column-gap: 0.1em;
                  align-self: flex-end;
                }
                .error404-line1,
                .error404-line3 {
                  width: 2px;
                  height: 0.5em;
                  background-color: black;
                  border-radius: 25px 25px 0px 0px;
                  margin-top: 0.5em;
                }
                .error404-line2 {
                  flex-grow: 1;
                  width: 2px;
                  height: 1em;
                  background-color: black;
                  border-radius: 25px 25px 0px 0px;
                }

                .error404-buttons_div {
                  width: 4.25em;
                  align-self: center;
                  height: 8em;
                  background-color: #e69635;
                  border: 2px solid #1d0e01;
                  padding: 0.6em;
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  row-gap: 0.75em;
                  box-shadow: 3px 3px 0px #e69635;
                }
                .error404-b1 {
                  width: 1.65em;
                  height: 1.65em;
                  border-radius: 50%;
                  background-color: #7f5934;
                  border: 2px solid black;
                  box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721, -2px 0px 0px 1px black;
                  position: relative;
                }
                .error404-b1::before {
                  content: "";
                  position: absolute;
                  margin-top: 1em;
                  margin-left: 0.5em;
                  transform: rotate(47deg);
                  border-radius: 5px;
                  width: 0.1em;
                  height: 0.4em;
                  background-color: #000000;
                }
                .error404-b1::after {
                  content: "";
                  position: absolute;
                  margin-top: 0.9em;
                  margin-left: 0.8em;
                  transform: rotate(47deg);
                  border-radius: 5px;
                  width: 0.1em;
                  height: 0.55em;
                  background-color: #000000;
                }
                .error404-b1 div {
                  content: "";
                  position: absolute;
                  margin-top: -0.1em;
                  margin-left: 0.65em;
                  transform: rotate(45deg);
                  width: 0.15em;
                  height: 1.5em;
                  background-color: #000000;
                }
                .error404-b2 {
                  width: 1.65em;
                  height: 1.65em;
                  border-radius: 50%;
                  background-color: #7f5934;
                  border: 2px solid black;
                  box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721, -2px 0px 0px 1px black;
                  position: relative;
                }
                .error404-b2::before {
                  content: "";
                  position: absolute;
                  margin-top: 1.05em;
                  margin-left: 0.8em;
                  transform: rotate(-45deg);
                  border-radius: 5px;
                  width: 0.15em;
                  height: 0.4em;
                  background-color: #000000;
                }
                .error404-b2::after {
                  content: "";
                  position: absolute;
                  margin-top: -0.1em;
                  margin-left: 0.65em;
                  transform: rotate(-45deg);
                  width: 0.15em;
                  height: 1.5em;
                  background-color: #000000;
                }
                .error404-speakers {
                  display: flex;
                  flex-direction: column;
                  row-gap: 0.5em;
                }
                .error404-speakers .error404-g1 {
                  display: flex;
                  column-gap: 0.25em;
                }
                .error404-speakers .error404-g1 .error404-g11,
                .error404-g12,
                .error404-g13 {
                  width: 0.65em;
                  height: 0.65em;
                  border-radius: 50%;
                  background-color: #7f5934;
                  border: 2px solid black;
                  box-shadow: inset 1.25px 1.25px 1px #b49577;
                }
                .error404-speakers .error404-g {
                  width: auto;
                  height: 2px;
                  background-color: #171717;
                }

                .error404-bottom {
                  width: 100%;
                  height: auto;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  column-gap: 8.7em;
                }
                .error404-base1 {
                  height: 1em;
                  width: 2em;
                  border: 2px solid #171717;
                  background-color: #4d4d4d;
                  margin-top: -0.15em;
                  z-index: -1;
                }
                .error404-base2 {
                  height: 1em;
                  width: 2em;
                  border: 2px solid #171717;
                  background-color: #4d4d4d;
                  margin-top: -0.15em;
                  z-index: -1;
                }
                .error404-base3 {
                  position: absolute;
                  height: 0.15em;
                  width: 17.5em;
                  background-color: #171717;
                  margin-top: 0.8em;
                }

                .error404-text {
                  position: absolute;
                  display: flex;
                  flex-direction: row;
                  column-gap: 6em;
                  z-index: -5;
                  margin-bottom: 2em;
                  align-items: center;
                  justify-content: center;
                  opacity: 0.5;
                  font-family: Montserrat, sans-serif;
                }
                .error404-text1, .error404-text2, .error404-text3 {
                  transform: scaleY(24.5) scaleX(9);
                }
                `}),e.jsxs("div",{className:"error404-wrapper",children:[e.jsxs("div",{className:"error404-main",children:[e.jsxs("div",{className:"error404-antenna",children:[e.jsx("div",{className:"error404-antenna_shadow"}),e.jsx("div",{className:"error404-a1"}),e.jsx("div",{className:"error404-a1d"}),e.jsx("div",{className:"error404-a2"}),e.jsx("div",{className:"error404-a2d"}),e.jsx("div",{className:"error404-a_base"})]}),e.jsxs("div",{className:"error404-tv",children:[e.jsx("div",{className:"error404-cruve",children:e.jsx("svg",{className:"error404-curve_svg",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 189.929 189.929",children:e.jsx("path",{d:"M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13 C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"})})}),e.jsx("div",{className:"error404-display_div",children:e.jsx("div",{className:"error404-screen_out",children:e.jsx("div",{className:"error404-screen_out1",children:e.jsx("div",{className:"error404-screen",children:e.jsx("span",{className:"error404-notfound_text",children:" NOT FOUND"})})})})}),e.jsxs("div",{className:"error404-lines",children:[e.jsx("div",{className:"error404-line1"}),e.jsx("div",{className:"error404-line2"}),e.jsx("div",{className:"error404-line3"})]}),e.jsxs("div",{className:"error404-buttons_div",children:[e.jsx("div",{className:"error404-b1",children:e.jsx("div",{})}),e.jsx("div",{className:"error404-b2"}),e.jsxs("div",{className:"error404-speakers",children:[e.jsxs("div",{className:"error404-g1",children:[e.jsx("div",{className:"error404-g11"}),e.jsx("div",{className:"error404-g12"}),e.jsx("div",{className:"error404-g13"})]}),e.jsx("div",{className:"error404-g"}),e.jsx("div",{className:"error404-g"})]})]})]}),e.jsxs("div",{className:"error404-bottom",children:[e.jsx("div",{className:"error404-base1"}),e.jsx("div",{className:"error404-base2"}),e.jsx("div",{className:"error404-base3"})]})]}),e.jsxs("div",{className:"error404-text",children:[e.jsx("div",{className:"error404-text1",children:"4"}),e.jsx("div",{className:"error404-text2",children:"0"}),e.jsx("div",{className:"error404-text3",children:"4"})]})]})]})})}const Dt=({className:l,color:t="#2D5A27"})=>e.jsx("svg",{viewBox:"0 0 500 500",className:l,fill:t,xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M477.16,292.045c0,0-62.848-4.221-125.061,22.069c11.664-13.634,23.084-28.804,33.416-45.603 c51.428-83.723,56.047-174.385,56.047-174.385s-78.774,45.1-130.221,128.822c-7.563,12.3-13.99,24.738-19.668,37.029 c3.467-20.557,5.744-42.617,5.744-65.72C297.417,86.977,249.892,0,249.892,0s-47.506,86.977-47.506,194.259 c0,23.102,2.279,45.163,5.742,65.713c-5.68-12.293-12.123-24.723-19.67-37.023C137.017,139.227,58.238,94.127,58.238,94.127 s4.623,90.662,56.05,174.385c10.329,16.799,21.75,31.969,33.416,45.603C85.472,287.824,22.64,292.045,22.64,292.045 s37.99,47.329,100.418,73.905c23.818,10.137,47.734,15.764,68.231,18.881c-9.681,0.716-19.997,2.132-30.503,4.71 c-45.443,11.111-77.006,38.909-77.006,38.909s42.105,9.768,87.561-1.351c29.467-7.217,52.928-21.347,65.893-30.448l-10.852,86.821 c-0.506,4.125,0.635,8.272,3.157,11.404c2.522,3.125,6.147,4.923,9.974,4.923h20.791c3.826,0,7.451-1.798,9.975-4.923 c2.522-3.132,3.66-7.279,3.156-11.404l-10.852-86.814c12.967,9.103,36.426,23.225,65.875,30.441 c45.457,11.118,87.561,1.351,87.561,1.351s-31.564-27.798-77.002-38.909c-10.512-2.578-20.828-3.994-30.508-4.71 c20.504-3.117,44.42-8.744,68.238-18.881C439.173,339.374,477.16,292.045,477.16,292.045z"})}),ds=`import React from 'react';

const CannabisGrowButton = () => {
    return (
        <div className="cannabis-btn-box">
            <style>
                {\`
                .cannabis-btn-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 40px;
                }

                .c-btn {
                    position: relative;
                    padding: 14px 40px;
                    background: #1a1a1a;
                    color: #fff;
                    font-size: 18px;
                    font-weight: 700;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    overflow: visible;
                }

                .c-leaf {
                    position: absolute;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%) scale(0) rotate(0deg);
                    width: 0;
                    height: 0;
                    opacity: 0;
                    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    pointer-events: none;
                }

                .l-1 { transition-delay: 0.1s; }
                .l-2 { transition-delay: 0.2s; }
                .l-3 { transition-delay: 0.3s; }

                .c-btn:hover {
                    background: #2D5A27;
                    box-shadow: 0 15px 30px rgba(45, 90, 39, 0.4);
                    transform: translateY(-5px);
                    border-color: rgba(255,255,255,0.3);
                }

                .c-btn:hover .c-leaf {
                    opacity: 1;
                    scale: 1;
                }

                .c-btn:hover .l-1 {
                    transform: translateX(-50%) translateY(-20px) scale(1) rotate(0deg);
                    width: 80px; height: 80px;
                    fill: #488C3E;
                }

                .c-btn:hover .l-2 {
                    transform: translateX(40px) translateY(-10px) scale(0.8) rotate(25deg);
                    width: 70px; height: 70px;
                    fill: #2D5A27;
                    opacity: 0.8;
                }

                .c-btn:hover .l-3 {
                    transform: translateX(-110px) translateY(-10px) scale(0.8) rotate(-25deg);
                    width: 70px; height: 70px;
                    fill: #2D5A27;
                    opacity: 0.8;
                }

                .c-btn:active {
                    transform: translateY(-2px) scale(0.98);
                }
                \`}
            </style>
            <button className="c-btn">
                High Quality
                <svg viewBox="0 0 500 500" className="c-leaf l-1"><path d="M477.16,292.045c0,0-62.848-4.221-125.061,22.069c11.664-13.634,23.084-28.804,33.416-45.603 c51.428-83.723,56.047-174.385,56.047-174.385s-78.774,45.1-130.221,128.822c-7.563,12.3-13.99,24.738-19.668,37.029 c3.467-20.557,5.744-42.617,5.744-65.72C297.417,86.977,249.892,0,249.892,0s-47.506,86.977-47.506,194.259 c0,23.102,2.279,45.163,5.742,65.713c-5.68-12.293-12.123-24.723-19.67-37.023C137.017,139.227,58.238,94.127,58.238,94.127 s4.623,90.662,56.05,174.385c10.329,16.799,21.75,31.969,33.416,45.603C85.472,287.824,22.64,292.045,22.64,292.045 s37.99,47.329,100.418,73.905c23.818,10.137,47.734,15.764,68.231,18.881c-9.681,0.716-19.997,2.132-30.503,4.71 c-45.443,11.111-77.006,38.909-77.006,38.909s42.105,9.768,87.561-1.351c29.467-7.217,52.928-21.347,65.893-30.448l-10.852,86.821 c-0.506,4.125,0.635,8.272,3.157,11.404c2.522,3.125,6.147,4.923,9.974,4.923h20.791c3.826,0,7.451-1.798,9.975-4.923 c2.522-3.132,3.66-7.279,3.156-11.404l-10.852-86.814c12.967,9.103,36.426,23.225,65.875,30.441 c45.457,11.118,87.561,1.351,87.561,1.351s-31.564-27.798-77.002-38.909c-10.512-2.578-20.828-3.994-30.508-4.71 c20.504-3.117,44.42-8.744,68.238-18.881C439.173,339.374,477.16,292.045,477.16,292.045z"/></svg>
                <svg viewBox="0 0 500 500" className="c-leaf l-2"><path d="M477.16,292.045c0,0-62.848-4.221-125.061,22.069c11.664-13.634,23.084-28.804,33.416-45.603 c51.428-83.723,56.047-174.385,56.047-174.385s-78.774,45.1-130.221,128.822c-7.563,12.3-13.99,24.738-19.668,37.029 c3.467-20.557,5.744-42.617,5.744-65.72C297.417,86.977,249.892,0,249.892,0s-47.506,86.977-47.506,194.259 c0,23.102,2.279,45.163,5.742,65.713c-5.68-12.293-12.123-24.723-19.67-37.023C137.017,139.227,58.238,94.127,58.238,94.127 s4.623,90.662,56.05,174.385c10.329,16.799,21.75,31.969,33.416,45.603C85.472,287.824,22.64,292.045,22.64,292.045 s37.99,47.329,100.418,73.905c23.818,10.137,47.734,15.764,68.231,18.881c-9.681,0.716-19.997,2.132-30.503,4.71 c-45.443,11.111-77.006,38.909-77.006,38.909s42.105,9.768,87.561-1.351c29.467-7.217,52.928-21.347,65.893-30.448l-10.852,86.821 c-0.506,4.125,0.635,8.272,3.157,11.404c2.522,3.125,6.147,4.923,9.974,4.923h20.791c3.826,0,7.451-1.798,9.975-4.923 c2.522-3.132,3.66-7.279,3.156-11.404l-10.852-86.814c12.967,9.103,36.426,23.225,65.875,30.441 c45.457,11.118,87.561,1.351,87.561,1.351s-31.564-27.798-77.002-38.909c-10.512-2.578-20.828-3.994-30.508-4.71 c20.504-3.117,44.42-8.744,68.238-18.881C439.173,339.374,477.16,292.045,477.16,292.045z"/></svg>
                <svg viewBox="0 0 500 500" className="c-leaf l-3"><path d="M477.16,292.045c0,0-62.848-4.221-125.061,22.069c11.664-13.634,23.084-28.804,33.416-45.603 c51.428-83.723,56.047-174.385,56.047-174.385s-78.774,45.1-130.221,128.822c-7.563,12.3-13.99,24.738-19.668,37.029 c3.467-20.557,5.744-42.617,5.744-65.72C297.417,86.977,249.892,0,249.892,0s-47.506,86.977-47.506,194.259 c0,23.102,2.279,45.163,5.742,65.713c-5.68-12.293-12.123-24.723-19.67-37.023C137.017,139.227,58.238,94.127,58.238,94.127 s4.623,90.662,56.05,174.385c10.329,16.799,21.75,31.969,33.416,45.603C85.472,287.824,22.64,292.045,22.64,292.045 s37.99,47.329,100.418,73.905c23.818,10.137,47.734,15.764,68.231,18.881c-9.681,0.716-19.997,2.132-30.503,4.71 c-45.443,11.111-77.006,38.909-77.006,38.909s42.105,9.768,87.561-1.351c29.467-7.217,52.928-21.347,65.893-30.448l-10.852,86.821 c-0.506,4.125,0.635,8.272,3.157,11.404c2.522,3.125,6.147,4.923,9.974,4.923h20.791c3.826,0,7.451-1.798,9.975-4.923 c2.522-3.132,3.66-7.279,3.156-11.404l-10.852-86.814c12.967,9.103,36.426,23.225,65.875,30.441 c45.457,11.118,87.561,1.351,87.561,1.351s-31.564-27.798-77.002-38.909c-10.512-2.578-20.828-3.994-30.508-4.71 c20.504-3.117,44.42-8.744,68.238-18.881C439.173,339.374,477.16,292.045,477.16,292.045z"/></svg>
            </button>
        </div>
    );
};

export default CannabisGrowButton;`;function ps(){return e.jsx(k,{title:"Cannabis Grow Button (Premium)",code:ds,className:"min-h-[300px] flex items-center justify-center",children:e.jsxs("div",{className:"nature-btn-v4-container",children:[e.jsx("style",{children:`
                    .nature-btn-v4-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 40px;
                    }

                    .nature-btn-v4-container .c-btn {
                        position: relative;
                        padding: 14px 40px;
                        background: #1a1a1a;
                        color: #fff;
                        font-size: 18px;
                        font-weight: 700;
                        border: 1px solid rgba(255,255,255,0.1);
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        overflow: visible;
                    }

                    .nature-btn-v4-container .c-leaf {
                        position: absolute;
                        bottom: 100%;
                        left: 50%;
                        transform: translateX(-50%) scale(0) rotate(0deg);
                        width: 0;
                        height: 0;
                        opacity: 0;
                        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        pointer-events: none;
                        z-index: -1;
                    }

                    .nature-btn-v4-container .l-1 { transition-delay: 0.1s; }
                    .nature-btn-v4-container .l-2 { transition-delay: 0.2s; }
                    .nature-btn-v4-container .l-3 { transition-delay: 0.3s; }

                    .nature-btn-v4-container .c-btn:hover {
                        background: #2D5A27;
                        box-shadow: 0 15px 30px rgba(45, 90, 39, 0.4);
                        transform: translateY(-5px);
                        border-color: rgba(255,255,255,0.3);
                    }

                    .nature-btn-v4-container .c-btn:hover .c-leaf {
                        opacity: 1;
                        scale: 1;
                    }

                    .nature-btn-v4-container .c-btn:hover .l-1 {
                        transform: translateX(-50%) translateY(-20px) scale(1) rotate(0deg);
                        width: 100px; height: 100px;
                        fill: #488C3E;
                    }

                    .nature-btn-v4-container .c-btn:hover .l-2 {
                        transform: translateX(50px) translateY(-10px) scale(0.8) rotate(25deg);
                        width: 80px; height: 80px;
                        fill: #2D5A27;
                        opacity: 0.8;
                    }

                    .nature-btn-v4-container .c-btn:hover .l-3 {
                        transform: translateX(-130px) translateY(-10px) scale(0.8) rotate(-25deg);
                        width: 80px; height: 80px;
                        fill: #2D5A27;
                        opacity: 0.8;
                    }

                    .nature-btn-v4-container .c-btn:active {
                        transform: translateY(-2px) scale(0.98);
                    }
                `}),e.jsxs("button",{className:"c-btn",children:["High Quality",e.jsx(Dt,{className:"c-leaf l-1",color:"#488C3E"}),e.jsx(Dt,{className:"c-leaf l-2",color:"#2D5A27"}),e.jsx(Dt,{className:"c-leaf l-3",color:"#2D5A27"})]})]})})}const hs=`import React from 'react';

const CircularSpinnerLoader = () => {
    return (
        <div className="circular-spinner-container">
            <style>
                {\`
                .circular-spinner-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }

                .circular-loader {
                    border: 4px solid rgba(0, 0, 0, .1);
                    border-left-color: #3b82f6; /* Added a default color for visibility */
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    animation: spinCircular 1s linear infinite;
                }

                @keyframes spinCircular {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Dark mode adjustment */
                .dark .circular-loader {
                    border-color: rgba(255, 255, 255, .1);
                    border-left-color: #60a5fa;
                }
                \`}
            </style>
            <div className="circular-loader" />
        </div>
    );
};

export default CircularSpinnerLoader;`;function ms(){return e.jsx(k,{title:"Circular Spinner Loader",code:hs,className:"min-h-[150px] flex items-center justify-center",children:e.jsxs("div",{className:"circular-spinner-view",children:[e.jsx("style",{children:`
                    .circular-spinner-view .circular-loader {
                        border: 4px solid rgba(0, 0, 0, .1);
                        border-left-color: #3b82f6;
                        border-radius: 50%;
                        width: 36px;
                        height: 36px;
                        animation: spinCircularPreview 1s linear infinite;
                    }

                    @keyframes spinCircularPreview {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    .dark .circular-spinner-view .circular-loader {
                        border-color: rgba(255, 255, 255, .1);
                        border-left-color: #60a5fa;
                    }
                `}),e.jsx("div",{className:"circular-loader"})]})})}const fs=`import React from 'react';

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

export default TriangleLoader;`;function xs(){return e.jsx(k,{title:"Triangle Loader",code:fs,className:"min-h-[250px] flex items-center justify-center",children:e.jsxs("div",{className:"triangle-loader-view",children:[e.jsx("style",{children:`
                    .triangle-loader-view #triangle {
                        height: 200px;
                        width: 200px;
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
                `}),e.jsx("div",{id:"triangle",children:e.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",version:"1.1",viewBox:"0 0 2000 2000",children:[e.jsx("polygon",{className:"cls-1",points:"928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"}),e.jsx("polygon",{className:"cls-3",points:"1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"}),e.jsx("g",{id:"Layer_2","data-name":"Layer 2",children:e.jsx("polygon",{className:"cls-2",points:"418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"})})]})})]})})}const gs=`import React from 'react';

const ModernWordLoader = () => {
    return (
        <div className="modern-word-loader-wrapper">
            <style>
                {\`
                .modern-loader-card {
                    --bg-color: hsl(var(--card));
                    background-color: var(--bg-color);
                    padding: 1rem 2rem;
                    border-radius: 1.25rem;
                    border: 1px solid hsl(var(--border));
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                
                .modern-loader {
                    color: hsl(var(--muted-foreground));
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
                    color: hsl(var(--primary));
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

export default ModernWordLoader;`;function us(){return e.jsx(k,{title:"Modern Word Loader",code:gs,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"modern-word-loader-view",children:[e.jsx("style",{children:`
                    .modern-word-loader-view .modern-loader-card {
                        --bg-color: hsl(var(--card));
                        background-color: var(--bg-color);
                        padding: 1rem 2rem;
                        border-radius: 1.25rem;
                        border: 1px solid hsl(var(--border));
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    }
                    
                    .modern-word-loader-view .modern-loader {
                        color: hsl(var(--muted-foreground));
                        font-family: inherit;
                        font-weight: 500;
                        font-size: 25px;
                        height: 40px;
                        padding: 10px 10px;
                        display: flex;
                        border-radius: 8px;
                        box-sizing: content-box;
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
                        color: hsl(var(--primary));
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
                `}),e.jsx("div",{className:"modern-loader-card",children:e.jsxs("div",{className:"modern-loader",children:[e.jsx("p",{children:"loading"}),e.jsxs("div",{className:"modern-words",children:[e.jsx("span",{className:"modern-word",children:"buttons"}),e.jsx("span",{className:"modern-word",children:"forms"}),e.jsx("span",{className:"modern-word",children:"switches"}),e.jsx("span",{className:"modern-word",children:"cards"}),e.jsx("span",{className:"modern-word",children:"buttons"})]})]})})]})})}const bs=`import React from 'react';

const PlayNowButton = () => {
  return (
    <div className="play-now-btn-wrapper">
      <style>
        {\`
        .play-now-btn-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .play-btn {
          border: none;
          position: relative;
          width: 200px;
          height: 73px;
          padding: 0;
          z-index: 2;
          -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
          mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
          -webkit-mask-size: 100%;
          mask-size: 100%;
          cursor: pointer;
          background-color: #f3f4f6;
          transform: translateY(8px);
          transition: all 0.3s ease;
        }

        .play-btn:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow: 0px 0 0 0 white;
          transition: all 1s ease;
          pointer-events: none;
        }

        .play-btn:hover:after {
          box-shadow: 0px -13px 56px 12px rgba(255, 255, 255, 0.65);
        }

        .play-btn span {
          position: absolute;
          width: 100%;
          font-size: 15px;
          font-weight: 500;
          left: 50%;
          top: 39%;
          letter-spacing: 3px;
          text-align: center;
          transform: translate(-50%,-50%);
          color: black;
          transition: all 0.5s ease;
          z-index: 5;
        }

        .play-btn:hover span {
          color: white;
        }

        .play-btn:before {
          content: '';
          position: absolute;
          width: 0;
          height: 100%;
          background-color: black;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.5s ease;
          z-index: -1;
        }

        .play-btn:hover:before {
          width: 100%;
        }
        \`}
      </style>
      <button className="play-btn">
        <span>PLAY NOW</span>
      </button>
    </div>
  );
}

export default PlayNowButton;`;function vs(){return e.jsx(k,{title:"Play Now Button",code:bs,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"play-now-view",children:[e.jsx("style",{children:`
                    .play-now-view .play-btn {
                        border: none;
                        position: relative;
                        width: 200px;
                        height: 73px;
                        padding: 0;
                        z-index: 2;
                        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
                        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
                        -webkit-mask-size: 100%;
                        mask-size: 100%;
                        cursor: pointer;
                        background-color: #f3f4f6;
                        transform: translateY(8px);
                        transition: all 0.3s ease;
                    }

                    .play-now-view .play-btn:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        box-shadow: 0px 0 0 0 white;
                        transition: all 1s ease;
                        pointer-events: none;
                    }

                    .play-now-view .play-btn:hover:after {
                        box-shadow: 0px -13px 56px 12px rgba(255, 255, 255, 0.65);
                    }

                    .play-now-view .play-btn span {
                        position: absolute;
                        width: 100%;
                        font-size: 15px;
                        font-weight: 500;
                        left: 50%;
                        top: 39%;
                        letter-spacing: 3px;
                        text-align: center;
                        transform: translate(-50%,-50%);
                        color: black;
                        transition: all 0.5s ease;
                        z-index: 5;
                    }

                    .play-now-view .play-btn:hover span {
                        color: white;
                    }

                    .play-now-view .play-btn:before {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 100%;
                        background-color: black;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        transition: all 0.5s ease;
                        z-index: -1;
                    }

                    .play-now-view .play-btn:hover:before {
                        width: 100%;
                    }
                `}),e.jsx("button",{className:"play-btn",children:e.jsx("span",{children:"PLAY NOW"})})]})})}const ws=`import React from 'react';

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

export default GradientRingLoader;`;function ys(){return e.jsx(k,{title:"Gradient Ring Loader",code:ws,className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"gradient-ring-view",children:[e.jsx("style",{children:`
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
                `}),e.jsxs("div",{className:"g-ring",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})})}const ks=`import React from 'react';

const SocialPlatformGrid = () => {
  return (
    <div className="social-platform-wrapper">
      <div className="main">
        <div className="card">
          <svg fillRule="nonzero" height="30px" width="30px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg" className="instagram">
            <g transform="scale(8,8)">
              <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
            </g>
          </svg>
        </div>
        <div className="card">
          <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="twitter">
            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
          </svg>
        </div>
        <p className="text">HOVER FOR SOCIAL</p>
        <div className="main_back" />
      </div>

      <style>{\`
        .social-platform-wrapper { display: flex; justify-content: center; align-items: center; min-height: 200px; }
        .main_back { position: absolute; border-radius: 10px; width: 11em; height: 11em; background: linear-gradient(270deg, #03a9f4, #cc39a4, #ffb5d2); z-index: -2; }
        .main { position: relative; display: flex; flex-wrap: wrap; width: 14em; align-items: center; justify-content: center; }
        .card { display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: rgba(255,255,255,0.6); backdrop-filter: blur(5px); transition: 0.4s; }
        .main:hover .card { margin: 0.2em; border-radius: 10px; background: rgba(255,255,255,0.2); }
        .main:hover .text { opacity: 0; }
        .text { position: absolute; font-size: 0.7em; color: black; font-weight: bold; letter-spacing: 0.33em; z-index: 3; }
      \`}</style>
    </div>
  );
}

export default SocialPlatformGrid;
`;function As(){return e.jsxs(k,{title:"Interactive Social Platforms",code:ks,className:"min-h-[300px]",children:[e.jsx("div",{className:"social-platform-wrapper",children:e.jsxs("div",{className:"main",children:[e.jsx("div",{className:"card",children:e.jsx("svg",{fillRule:"nonzero",height:"30px",width:"30px",viewBox:"0,0,256,256",xmlns:"http://www.w3.org/2000/svg",className:"instagram",children:e.jsx("g",{transform:"scale(8,8)",children:e.jsx("path",{d:"M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z",fill:"#cc39a4"})})})}),e.jsx("div",{className:"card",children:e.jsx("svg",{height:"30px",width:"30px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",className:"twitter",children:e.jsx("path",{d:"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429",fill:"#03a9f4"})})}),e.jsx("div",{className:"card",children:e.jsx("svg",{height:"30px",width:"30px",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",className:"dribble",children:e.jsx("path",{d:"M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1",fill:"#ea4c89"})})}),e.jsx("div",{className:"card",children:e.jsx("svg",{height:"30px",width:"30px",viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg",className:"codepen",children:e.jsx("path",{d:"M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z",fill:"black"})})}),e.jsx("div",{className:"card",children:e.jsx("div",{style:{width:"23px",height:"23px",background:"linear-gradient(#BF66FF, #6248FF, #00DDEB)",borderRadius:"4px"}})}),e.jsx("div",{className:"card",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"30px",height:"30px",className:"discord",children:e.jsx("path",{d:"M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14",fill:"#8c9eff"})})}),e.jsx("div",{className:"card",children:e.jsx("svg",{height:"30px",width:"30px",viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",className:"github",children:e.jsx("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63L12,26.047v-2.051",fill:"black"})})}),e.jsx("div",{className:"card",children:e.jsx("svg",{height:"30px",width:"30px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",className:"telegram",children:e.jsx("path",{d:"M24 4A20 20 0 1 0 24 44",fill:"#29b6f6"})})}),e.jsx("div",{className:"card",children:e.jsx("div",{style:{width:"30px",height:"30px",background:"rgb(255, 69, 0)",borderRadius:"50%"}})}),e.jsxs("p",{className:"text",children:["HOVER",e.jsx("br",{}),e.jsx("br",{}),"FOR",e.jsx("br",{}),e.jsx("br",{}),"SOCIAL"]}),e.jsx("div",{className:"main_back"})]})}),e.jsx("style",{children:`
        .social-platform-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }
        .main_back {
          position: absolute;
          border-radius: 10px;
          transform: rotate(90deg);
          width: 11em;
          height: 11em;
          background: linear-gradient(270deg, #03a9f4, #cc39a4, #ffb5d2);
          z-index: -2;
          box-shadow: inset 0px 0px 180px 5px #ffffff;
        }
        .main {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          width: 14em;
          align-items: center;
          justify-content: center;
          z-index: 1;
          transition: 0.4s ease-in-out;
        }
        .card {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.596);
          backdrop-filter: blur(5px);
          border: 1px solid transparent;
          transition: 0.4s ease-in-out;
        }
        .card:nth-child(1) { border-top-left-radius: 10px; }
        .card:nth-child(3) { border-top-right-radius: 10px; }
        .card:nth-child(7) { border-bottom-left-radius: 10px; }
        .card:nth-child(9) { border-bottom-right-radius: 10px; }
        .main svg { opacity: 0; transition: 0.2s; }
        .main:hover .card {
          margin: 0.2em;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .main:hover .main_back { opacity: 0; }
        .main:hover .text { opacity: 0; z-index: -3; }
        .main:hover svg { opacity: 1; }
        .main:hover .card:nth-child(5) > div, .main:hover .card:nth-child(9) > div { opacity: 1; }
        .card:nth-child(5) > div, .card:nth-child(9) > div { opacity: 0; transition: 0.2s; }
        .text {
          position: absolute;
          font-size: 0.7em;
          transition: 0.4s ease-in-out;
          color: black;
          text-align: center;
          font-weight: bold;
          letter-spacing: 0.33em;
          z-index: 3;
          pointer-events: none;
        }
        .card:hover { cursor: pointer; }
        .card:nth-child(1):hover { background-color: #cc39a4; }
        .card:nth-child(1):hover svg { fill: white; }
        .card:nth-child(2):hover { background-color: #03a9f4; }
        .card:nth-child(2):hover svg { fill: white; }
        .card:nth-child(3):hover { background-color: #ea4c89; }
        .card:nth-child(3):hover svg { fill: white; }
      `})]})}const qr=T.forwardRef(({className:l,type:t,...r},a)=>e.jsx("input",{type:t,className:be("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",l),ref:a,...r}));qr.displayName="Input";var js="Label",Wr=T.forwardRef((l,t)=>e.jsx(ti.label,{...l,ref:t,onMouseDown:r=>{r.target.closest("button, input, select, textarea")||(l.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));Wr.displayName=js;var Ur=Wr;const _s=ni("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),$r=T.forwardRef(({className:l,...t},r)=>e.jsx(Ur,{ref:r,className:be(_s(),l),...t}));$r.displayName=Ur.displayName;const Ns=`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
`;function Cs(){return e.jsx(k,{title:"Input",code:Ns,children:e.jsxs("div",{className:"grid w-full max-w-xs items-center gap-1.5",children:[e.jsx($r,{htmlFor:"email-demo",children:"Email"}),e.jsx(qr,{type:"email",id:"email-demo",placeholder:"Email"})]})})}const zs=`import React from 'react';

const RealismButton = () => {
  return (
    <div className="realism-button-wrapper">
      <style>
        {\`
        .realism-button {
          cursor: pointer;
          font-size: 1.4rem;
          border-radius: 16px;
          border: none;
          padding: 2px;
          background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
          position: relative;
          transition: transform 0.2s;
        }

        .realism-button:active {
          transform: scale(0.95);
        }

        .realism-button::after {
          content: "";
          position: absolute;
          width: 65%;
          height: 60%;
          border-radius: 120px;
          top: 0;
          right: 0;
          box-shadow: 0 0 20px #ffffff38;
          z-index: -1;
        }

        .realism-blob1 {
          position: absolute;
          width: 70px;
          height: 100%;
          border-radius: 16px;
          bottom: 0;
          left: 0;
          background: radial-gradient(
            circle 60px at 0% 100%,
            #3fe9ff,
            #0000ff80,
            transparent
          );
          box-shadow: -10px 10px 30px #0051ff2d;
        }

        .realism-blob2 {
           position: absolute;
           width: 70px;
           height: 100%;
           border-radius: 16px;
           top: 0;
           right: 0;
           background: radial-gradient(
             circle 60px at 100% 0%,
             #3fe9ff,
             #0000ff80,
             transparent
           );
           box-shadow: 10px -10px 30px #0051ff2d;
           opacity: 0.5; /* Guessing style since it was missing in original */
        }

        .realism-inner {
          padding: 14px 25px;
          border-radius: 14px;
          color: #fff;
          z-index: 3;
          position: relative;
          background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
          font-family: inherit;
        }
        
        .realism-inner::before {
          content: "";
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 14px;
          background: radial-gradient(
            circle 60px at 0% 100%,
            #00e1ff1a,
            #0000ff11,
            transparent
          );
          position: absolute;
        }
        \`}
      </style>
      <button className="realism-button">
        <div className="realism-blob1" />
        <div className="realism-blob2" />
        <div className="realism-inner">Realism</div>
      </button>
    </div>
  );
}

export default RealismButton;
`;function Ls(){return e.jsx(k,{title:"Realism Button",code:zs,className:"flex items-center justify-center p-12 transition-colors duration-300",children:e.jsxs("div",{className:"realism-button-wrapper",children:[e.jsx("style",{children:`
        .realism-button {
          cursor: pointer;
          font-size: 1.4rem;
          border-radius: 16px;
          border: none;
          padding: 2px;
          /* Default (Light Mode) Background */
          background: radial-gradient(circle 80px at 80% -10%, #ffffff, #e2e2e2);
          position: relative;
          transition: transform 0.2s, background 0.3s;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        /* Dark Mode Override */
        .dark .realism-button {
          background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
          box-shadow: none;
        }
        
        .realism-button:active {
            transform: scale(0.95);
        }

        .realism-button::after {
          content: "";
          position: absolute;
          width: 65%;
          height: 60%;
          border-radius: 120px;
          top: 0;
          right: 0;
          box-shadow: 0 0 20px #ffffff38;
          z-index: -1;
        }

        .realism-blob1 {
          position: absolute;
          width: 70px;
          height: 100%;
          border-radius: 16px;
          bottom: 0;
          left: 0;
          background: radial-gradient(
            circle 60px at 0% 100%,
            #3fe9ff,
            #0000ff80,
            transparent
          );
          box-shadow: -10px 10px 30px #0051ff2d;
        }

        .realism-blob2 {
           position: absolute;
           width: 70px;
           height: 100%;
           border-radius: 16px;
           top: 0;
           right: 0;
           background: radial-gradient(
             circle 60px at 100% 0%,
             #3fe9ff,
             #0000ff80,
             transparent
           );
           box-shadow: 10px -10px 30px #0051ff2d;
           opacity: 0.5;
        }

        .realism-inner {
          padding: 14px 25px;
          border-radius: 14px;
          z-index: 3;
          position: relative;
          
          /* Default (Light Mode) Styles */
          color: #333;
          background: radial-gradient(circle 80px at 80% -50%, #ffffff, #e5e5e5);
          
          font-family: inherit;
          font-weight: 600;
          transition: color 0.3s, background 0.3s;
        }

        /* Dark Mode Override */
        .dark .realism-inner {
            color: #fff;
            background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
        }

        .realism-inner::before {
          content: "";
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 14px;
          background: radial-gradient(
            circle 60px at 0% 100%,
            #00e1ff1a,
            #0000ff11,
            transparent
          );
          position: absolute;
        }
        `}),e.jsxs("button",{className:"realism-button",children:[e.jsx("div",{className:"realism-blob1"}),e.jsx("div",{className:"realism-blob2"}),e.jsx("div",{className:"realism-inner",children:"Realism"})]})]})})}const Ms=`import React from 'react';

const GlitchText = ({ text = "CYBERPUNK", className = "" }: { text?: string, className?: string }) => {
  return (
    <div className={\`glitch-wrapper \${className}\`}>
      <style>
        {\`
        .glitch-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glitch-text {
          position: relative;
          font-size: 4rem;
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.1em;
          z-index: 1;
          font-family: 'Courier New', Courier, monospace; /* Fallback/Cyber style */
        }

        .glitch-text::before,
        .glitch-text::after {
          display: block;
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
          z-index: -1;
        }

        .glitch-text::before {
          color: #0ff;
          animation: glitch-anim-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }

        .glitch-text::after {
          color: #f0f;
          animation: glitch-anim-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }

        @keyframes glitch-anim-1 {
          0% { clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%); transform: translate(0); }
          10% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); transform: translate(-2px); }
          20% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); transform: translate(2px); }
          30% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); transform: translate(-2px); }
          40% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); transform: translate(0); }
          50% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); transform: translate(2px); }
          60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); transform: translate(-2px); }
          70% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); transform: translate(2px); }
          80% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); transform: translate(-2px); }
          90% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); transform: translate(2px); }
          100% { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); transform: translate(-2px); }
        }

        @keyframes glitch-anim-2 {
          0% { clip-path: polygon(0 20%, 100% 20%, 100% 30%, 0 30%); transform: translate(0); }
          10% { clip-path: polygon(0 10%, 100% 10%, 100% 15%, 0 15%); transform: translate(2px); }
          20% { clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%); transform: translate(-2px); }
          30% { clip-path: polygon(0 30%, 100% 30%, 100% 35%, 0 35%); transform: translate(2px); }
          40% { clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%); transform: translate(-2px); }
          50% { clip-path: polygon(0 15%, 100% 15%, 100% 55%, 0 55%); transform: translate(2px); }
          60% { clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%); transform: translate(-2px); }
          70% { clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); transform: translate(2px); }
          80% { clip-path: polygon(0 65%, 100% 65%, 100% 70%, 0 70%); transform: translate(-2px); }
          90% { clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%); transform: translate(2px); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); transform: translate(-2px); }
        }
        \`}
      </style>
      <h1 className="glitch-text" data-text={text}>
        {text}
      </h1>
    </div>
  );
};

export default GlitchText;
`;function Bs({text:l="GLITCH"}){return e.jsx(k,{title:"Glitch Text",code:Ms,className:"flex items-center justify-center p-12 transition-colors duration-300 min-h-[300px]",children:e.jsxs("div",{className:"glitch-wrapper",children:[e.jsx("style",{children:`
        .glitch-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glitch-text {
          position: relative;
          font-size: 3rem;
          font-weight: 900;
          /* Light Mode Color */
          color: #000;
          letter-spacing: 0.1em;
          z-index: 1;
          font-family: inherit;
          text-transform: uppercase;
        }

        /* Dark Mode Override */
        .dark .glitch-text {
            color: #fff;
        }

        .glitch-text::before,
        .glitch-text::after {
          display: block;
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
          z-index: -1;
        }

        .glitch-text::before {
          color: #0ff;
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        
        /* Adjust glitch color for light mode contrast if needed, keeping cyan OK for now */
        .dark .glitch-text::before {
            color: #0ff;
        }

        .glitch-text::after {
          color: #f0f;
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
          0% { clip: rect(30px, 9999px, 10px, 0); transform: translate(-2px); }
          10% { clip: rect(50px, 9999px, 80px, 0); transform: translate(2px); }
          20% { clip: rect(10px, 9999px, 90px, 0); transform: translate(-1px); }
          30% { clip: rect(80px, 9999px, 20px, 0); transform: translate(1px); }
          40% { clip: rect(20px, 9999px, 60px, 0); transform: translate(-2px); }
          50% { clip: rect(60px, 9999px, 40px, 0); transform: translate(2px); }
          60% { clip: rect(10px, 9999px, 30px, 0); transform: translate(-1px); }
          70% { clip: rect(90px, 9999px, 70px, 0); transform: translate(1px); }
          80% { clip: rect(40px, 9999px, 50px, 0); transform: translate(-2px); }
          90% { clip: rect(70px, 9999px, 10px, 0); transform: translate(2px); }
          100% { clip: rect(20px, 9999px, 90px, 0); transform: translate(-1px); }
        }

        @keyframes glitch-anim-2 {
          0% { clip: rect(10px, 9999px, 90px, 0); transform: translate(2px); }
          10% { clip: rect(90px, 9999px, 30px, 0); transform: translate(-2px); }
          20% { clip: rect(40px, 9999px, 10px, 0); transform: translate(1px); }
          30% { clip: rect(60px, 9999px, 80px, 0); transform: translate(-1px); }
          40% { clip: rect(20px, 9999px, 50px, 0); transform: translate(2px); }
          50% { clip: rect(80px, 9999px, 10px, 0); transform: translate(-2px); }
          60% { clip: rect(30px, 9999px, 70px, 0); transform: translate(1px); }
          70% { clip: rect(70px, 9999px, 20px, 0); transform: translate(-1px); }
          80% { clip: rect(50px, 9999px, 60px, 0); transform: translate(2px); }
          90% { clip: rect(10px, 9999px, 40px, 0); transform: translate(-2px); }
          100% { clip: rect(50px, 9999px, 80px, 0); transform: translate(1px); }
        }
        `}),e.jsx("h1",{className:"glitch-text","data-text":l,children:l})]})})}const Rs=`import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";

export const MagneticButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={\`\${className}\`}
    >
      {children}
    </motion.div>
  );
};
`,Ss=({children:l,className:t=""})=>{const r=T.useRef(null),[a,i]=T.useState({x:0,y:0}),o=d=>{const{clientX:p,clientY:m}=d,{height:f,width:x,left:u,top:h}=r.current.getBoundingClientRect(),g=p-(u+x/2),y=m-(h+f/2);i({x:g*.5,y:y*.5})},s=()=>{i({x:0,y:0})},{x:n,y:c}=a;return e.jsx(he.div,{style:{position:"relative"},ref:r,onMouseMove:o,onMouseLeave:s,animate:{x:n,y:c},transition:{type:"spring",stiffness:150,damping:15,mass:.1},className:t,children:l})};function Ts(){return e.jsx(k,{title:"Magnetic Button",code:Rs,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsx(Ss,{className:"px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-shadow cursor-pointer",children:"Hover Me"})})}const Ys=`import React from 'react';

const VoltageButton = () => {
  return (
    <div className="voltage-button-wrapper">
      <style>
        {\`
        .voltage-button-wrapper .voltage-container {
          position: relative;
        }

        .voltage-button-wrapper .voltage-btn {
          color: white;
          background: #0D1127;
          padding: 1rem 3rem 1rem 3rem;
          border-radius: 5rem;
          border: 5px solid #5978F3;
          font-size: 1.2rem;
          line-height: 1em;
          letter-spacing: 0.075em;
          transition: background 0.3s;
          cursor: pointer;
        }

        .voltage-button-wrapper .voltage-btn:hover {
          background: #0F1C53;
        }

        .voltage-button-wrapper .voltage-btn:hover + svg,
        .voltage-button-wrapper .voltage-btn:hover + svg + .voltage-dots {
          opacity: 1;
        }

        .voltage-button-wrapper svg {
          display: block;
          position: absolute;
          top: -0.75em;
          left: -0.25em;
          width: calc(100% + 0.5em);
          height: calc(100% + 1.5em);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
          transition-delay: 0.1s;
        }

        .voltage-button-wrapper svg path {
          stroke-dasharray: 100;
          filter: url("#voltage-glow");
        }

        .voltage-button-wrapper svg path.voltage-line-1 {
          stroke: #f6de8d;
          stroke-dashoffset: 0;
          animation: voltage-spark-1 3s linear infinite;
        }

        .voltage-button-wrapper svg path.voltage-line-2 {
          stroke: #6bfeff;
          stroke-dashoffset: 500;
          animation: voltage-spark-2 3s linear infinite;
        }

        .voltage-button-wrapper .voltage-dots {
          opacity: 0;
          transition: opacity 0.3s;
          transition-delay: 0.4s;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot {
          width: 1rem;
          height: 1rem;
          background: white;
          border-radius: 100%;
          position: absolute;
          opacity: 0;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-1 {
          top: 0;
          left: 20%;
          animation: voltage-fly-up 3s linear infinite;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-2 {
          top: 0;
          left: 55%;
          animation: voltage-fly-up 3s linear infinite;
          animation-delay: 0.5s;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-3 {
          top: 0;
          left: 80%;
          animation: voltage-fly-up 3s linear infinite;
          animation-delay: 1s;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-4 {
          bottom: 0;
          left: 30%;
          animation: voltage-fly-down 3s linear infinite;
          animation-delay: 2.5s;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-5 {
          bottom: 0;
          left: 65%;
          animation: voltage-fly-down 3s linear infinite;
          animation-delay: 1.5s;
        }

        @keyframes voltage-spark-1 {
          to { stroke-dashoffset: -1000; }
        }

        @keyframes voltage-spark-2 {
          to { stroke-dashoffset: -500; }
        }

        @keyframes voltage-fly-up {
          0% { opacity: 0; transform: translateY(0) scale(0.2); }
          5% { opacity: 1; transform: translateY(-1.5rem) scale(0.4); }
          10%, 100% { opacity: 0; transform: translateY(-3rem) scale(0.2); }
        }

        @keyframes voltage-fly-down {
          0% { opacity: 0; transform: translateY(0) scale(0.2); }
          5% { opacity: 1; transform: translateY(1.5rem) scale(0.4); }
          10%, 100% { opacity: 0; transform: translateY(3rem) scale(0.2); }
        }
        \`}
      </style>
      <div className="voltage-container">
        <button className="voltage-btn">Button</button>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 234.6 61.3" preserveAspectRatio="none" xmlSpace="preserve">
          <filter id="voltage-glow">
            <feGaussianBlur className="blur" result="coloredBlur" stdDeviation={2} />
            <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="0.3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale={30} xChannelSelector="R" yChannelSelector="G" result="displace" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="displace" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path className="voltage-line-1" d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z" fill="transparent" stroke="#fff" />
          <path className="voltage-line-2" d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z" fill="transparent" stroke="#fff" />
        </svg>
        <div className="voltage-dots">
          <div className="voltage-dot voltage-dot-1" />
          <div className="voltage-dot voltage-dot-2" />
          <div className="voltage-dot voltage-dot-3" />
          <div className="voltage-dot voltage-dot-4" />
          <div className="voltage-dot voltage-dot-5" />
        </div>
      </div>
    </div>
  );
}

export default VoltageButton;
`;function Zs(){return e.jsx(k,{title:"Voltage Button",code:Ys,className:"flex items-center justify-center p-12 min-h-[300px]",children:e.jsxs("div",{className:"voltage-button-wrapper",children:[e.jsx("style",{children:`
        .voltage-button-wrapper .voltage-container {
          position: relative;
        }

        .voltage-button-wrapper .voltage-btn {
          color: white;
          background: #0D1127;
          padding: 1rem 3rem 1rem 3rem;
          border-radius: 5rem;
          border: 5px solid #5978F3;
          font-size: 1.2rem;
          line-height: 1em;
          letter-spacing: 0.075em;
          transition: background 0.3s;
          cursor: pointer;
        }

        .voltage-button-wrapper .voltage-btn:hover {
          background: #0F1C53;
        }

        .voltage-button-wrapper .voltage-btn:hover + svg,
        .voltage-button-wrapper .voltage-btn:hover + svg + .voltage-dots {
          opacity: 1;
        }

        .voltage-button-wrapper svg {
          display: block;
          position: absolute;
          top: -0.75em;
          left: -0.25em;
          width: calc(100% + 0.5em);
          height: calc(100% + 1.5em);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
          transition-delay: 0.1s;
        }

        .voltage-button-wrapper svg path {
          stroke-dasharray: 100;
          filter: url("#voltage-glow");
        }

        .voltage-button-wrapper svg path.voltage-line-1 {
          stroke: #f6de8d;
          stroke-dashoffset: 0;
          animation: voltage-spark-1 3s linear infinite;
        }

        .voltage-button-wrapper svg path.voltage-line-2 {
          stroke: #6bfeff;
          stroke-dashoffset: 500;
          animation: voltage-spark-2 3s linear infinite;
        }

        .voltage-button-wrapper .voltage-dots {
          opacity: 0;
          transition: opacity 0.3s;
          transition-delay: 0.4s;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot {
          width: 1rem;
          height: 1rem;
          background: white;
          border-radius: 100%;
          position: absolute;
          opacity: 0;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-1 {
          top: 0;
          left: 20%;
          animation: voltage-fly-up 3s linear infinite;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-2 {
          top: 0;
          left: 55%;
          animation: voltage-fly-up 3s linear infinite;
          animation-delay: 0.5s;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-3 {
          top: 0;
          left: 80%;
          animation: voltage-fly-up 3s linear infinite;
          animation-delay: 1s;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-4 {
          bottom: 0;
          left: 30%;
          animation: voltage-fly-down 3s linear infinite;
          animation-delay: 2.5s;
        }

        .voltage-button-wrapper .voltage-dots .voltage-dot-5 {
          bottom: 0;
          left: 65%;
          animation: voltage-fly-down 3s linear infinite;
          animation-delay: 1.5s;
        }

        @keyframes voltage-spark-1 {
          to { stroke-dashoffset: -1000; }
        }

        @keyframes voltage-spark-2 {
          to { stroke-dashoffset: -500; }
        }

        @keyframes voltage-fly-up {
          0% { opacity: 0; transform: translateY(0) scale(0.2); }
          5% { opacity: 1; transform: translateY(-1.5rem) scale(0.4); }
          10%, 100% { opacity: 0; transform: translateY(-3rem) scale(0.2); }
        }

        @keyframes voltage-fly-down {
          0% { opacity: 0; transform: translateY(0) scale(0.2); }
          5% { opacity: 1; transform: translateY(1.5rem) scale(0.4); }
          10%, 100% { opacity: 0; transform: translateY(3rem) scale(0.2); }
        }
        `}),e.jsxs("div",{className:"voltage-container",children:[e.jsx("button",{className:"voltage-btn",children:"Button"}),e.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 234.6 61.3",preserveAspectRatio:"none",xmlSpace:"preserve",children:[e.jsxs("filter",{id:"voltage-glow",children:[e.jsx("feGaussianBlur",{className:"blur",result:"coloredBlur",stdDeviation:2}),e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.075",numOctaves:"0.3",result:"turbulence"}),e.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"turbulence",scale:30,xChannelSelector:"R",yChannelSelector:"G",result:"displace"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"displace"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),e.jsx("path",{className:"voltage-line-1",d:"m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z",fill:"transparent",stroke:"#fff"}),e.jsx("path",{className:"voltage-line-2",d:"m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z",fill:"transparent",stroke:"#fff"})]}),e.jsxs("div",{className:"voltage-dots",children:[e.jsx("div",{className:"voltage-dot voltage-dot-1"}),e.jsx("div",{className:"voltage-dot voltage-dot-2"}),e.jsx("div",{className:"voltage-dot voltage-dot-3"}),e.jsx("div",{className:"voltage-dot voltage-dot-4"}),e.jsx("div",{className:"voltage-dot voltage-dot-5"})]})]})]})})}const Ds=`import React from 'react';

const UnlockProButton = () => {
  return (
    <div className="unlock-pro-btn-wrapper">
      <style>
        {\`
        .unlock-pro-btn-wrapper .unlock-pro-btn {
          width: fit-content;
          display: flex;
          padding: 0.8em 1.1em;
          gap: 0.4rem;
          border: none;
          font-weight: bold;
          border-radius: 30px;
          cursor: pointer;
          text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
          background: linear-gradient(
              15deg,
              #880088,
              #aa2068,
              #cc3f47,
              #de6f3d,
              #f09f33,
              #de6f3d,
              #cc3f47,
              #aa2068,
              #880088
            )
            no-repeat;
          background-size: 300%;
          background-position: left center;
          transition: background 0.3s ease;
          color: #fff;
          align-items: center;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn:hover {
          background-size: 320%;
          background-position: right center;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn:hover svg {
          fill: #fff;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn svg {
          width: 23px;
          fill: #f09f33;
          transition: 0.3s ease;
        }
        \`}
      </style>
      <button className="unlock-pro-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z" />
        </svg>
        Unlock Pro
      </button>
    </div>
  );
}

export default UnlockProButton;
`;function Ps(){return e.jsx(k,{title:"Unlock Pro Button",code:Ds,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"unlock-pro-btn-wrapper",children:[e.jsx("style",{children:`
        .unlock-pro-btn-wrapper .unlock-pro-btn {
          width: fit-content;
          display: flex;
          padding: 0.8em 1.1em;
          gap: 0.4rem;
          border: none;
          font-weight: bold;
          border-radius: 30px;
          cursor: pointer;
          text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
          background: linear-gradient(
              15deg,
              #880088,
              #aa2068,
              #cc3f47,
              #de6f3d,
              #f09f33,
              #de6f3d,
              #cc3f47,
              #aa2068,
              #880088
            )
            no-repeat;
          background-size: 300%;
          background-position: left center;
          transition: background 0.3s ease;
          color: #fff;
          align-items: center;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn:hover {
          background-size: 320%;
          background-position: right center;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn:hover svg {
          fill: #fff;
        }

        .unlock-pro-btn-wrapper .unlock-pro-btn svg {
          width: 23px;
          fill: #f09f33;
          transition: 0.3s ease;
        }
        `}),e.jsxs("button",{className:"unlock-pro-btn",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 24",children:e.jsx("path",{d:"m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"})}),"Unlock Pro"]})]})})}const Es=`import React from 'react';

const PayButton = () => {
  return (
    <div className="pay-btn-wrapper">
      <style>
        {\`
        .pay-btn-wrapper .pay-btn {
          position: relative;
          padding: 12px 24px;
          font-size: 16px;
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .pay-btn-wrapper .pay-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        }

        .pay-btn-wrapper .pay-icon-container {
          position: relative;
          width: 24px;
          height: 24px;
        }

        .pay-btn-wrapper .pay-icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
          color: #22c55e;
          opacity: 0;
          visibility: hidden;
        }

        .pay-btn-wrapper .pay-default-icon {
          opacity: 1;
          visibility: visible;
        }

        /* Hover animations */
        .pay-btn-wrapper .pay-btn:hover .pay-icon {
          animation: none;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-wallet-icon {
          opacity: 0;
          visibility: hidden;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-card-icon {
          animation: pay-iconRotate 2.5s infinite;
          animation-delay: 0s;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-payment-icon {
          animation: pay-iconRotate 2.5s infinite;
          animation-delay: 0.5s;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-dollar-icon {
          animation: pay-iconRotate 2.5s infinite;
          animation-delay: 1s;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-check-icon {
          animation: pay-iconRotate 2.5s infinite;
          animation-delay: 1.5s;
        }

        /* Active state - show only checkmark */
        .pay-btn-wrapper .pay-btn:active .pay-icon {
          animation: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .pay-btn-wrapper .pay-btn:active .pay-check-icon {
          animation: pay-checkmarkAppear 0.6s ease forwards;
          visibility: visible;
        }

        .pay-btn-wrapper .pay-btn-text {
          font-weight: 600;
          font-family: system-ui, -apple-system, sans-serif;
        }

        @keyframes pay-iconRotate {
          0% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px) scale(0.5);
          }
          5% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
          }
          15% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
          }
          20% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px) scale(0.5);
          }
          100% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px) scale(0.5);
          }
        }

        @keyframes pay-checkmarkAppear {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-45deg);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        \`}
      </style>
      <button className="pay-btn">
        <span className="pay-btn-text">Pay Now</span>
        <div className="pay-icon-container">
          <svg viewBox="0 0 24 24" className="pay-icon pay-card-icon">
            <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 24 24" className="pay-icon pay-payment-icon">
            <path d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 24 24" className="pay-icon pay-dollar-icon">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 24 24" className="pay-icon pay-wallet-icon pay-default-icon">
            <path d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 24 24" className="pay-icon pay-check-icon">
            <path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z" fill="currentColor" />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default PayButton;
`;function Is(){return e.jsx(k,{title:"Pay Button",code:Es,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"pay-btn-wrapper",children:[e.jsx("style",{children:`
        .pay-btn-wrapper .pay-btn {
          position: relative;
          padding: 12px 24px;
          font-size: 16px;
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .pay-btn-wrapper .pay-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        }

        .pay-btn-wrapper .pay-icon-container {
          position: relative;
          width: 24px;
          height: 24px;
        }

        .pay-btn-wrapper .pay-icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
          color: #22c55e;
          opacity: 0;
          visibility: hidden;
        }

        .pay-btn-wrapper .pay-default-icon {
          opacity: 1;
          visibility: visible;
        }

        /* Hover animations */
        .pay-btn-wrapper .pay-btn:hover .pay-icon {
          animation: none;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-wallet-icon {
          opacity: 0;
          visibility: hidden;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-card-icon {
          animation: pay-iconRotate 2.5s infinite;
          animation-delay: 0s;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-payment-icon {
          animation: pay-iconRotate 2.5s infinite;
          animation-delay: 0.5s;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-dollar-icon {
          animation: pay-iconRotate 2.5s infinite;
          animation-delay: 1s;
        }

        .pay-btn-wrapper .pay-btn:hover .pay-check-icon {
          animation: pay-iconRotate 2.5s infinite;
          animation-delay: 1.5s;
        }

        /* Active state - show only checkmark */
        .pay-btn-wrapper .pay-btn:active .pay-icon {
          animation: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .pay-btn-wrapper .pay-btn:active .pay-check-icon {
          animation: pay-checkmarkAppear 0.6s ease forwards;
          visibility: visible;
        }

        .pay-btn-wrapper .pay-btn-text {
          font-weight: 600;
          font-family: system-ui, -apple-system, sans-serif;
        }

        @keyframes pay-iconRotate {
          0% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px) scale(0.5);
          }
          5% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
          }
          15% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
          }
          20% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px) scale(0.5);
          }
          100% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px) scale(0.5);
          }
        }

        @keyframes pay-checkmarkAppear {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-45deg);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        `}),e.jsxs("button",{className:"pay-btn",children:[e.jsx("span",{className:"pay-btn-text",children:"Pay Now"}),e.jsxs("div",{className:"pay-icon-container",children:[e.jsx("svg",{viewBox:"0 0 24 24",className:"pay-icon pay-card-icon",children:e.jsx("path",{d:"M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z",fill:"currentColor"})}),e.jsx("svg",{viewBox:"0 0 24 24",className:"pay-icon pay-payment-icon",children:e.jsx("path",{d:"M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z",fill:"currentColor"})}),e.jsx("svg",{viewBox:"0 0 24 24",className:"pay-icon pay-dollar-icon",children:e.jsx("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",fill:"currentColor"})}),e.jsx("svg",{viewBox:"0 0 24 24",className:"pay-icon pay-wallet-icon pay-default-icon",children:e.jsx("path",{d:"M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z",fill:"currentColor"})}),e.jsx("svg",{viewBox:"0 0 24 24",className:"pay-icon pay-check-icon",children:e.jsx("path",{d:"M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z",fill:"currentColor"})})]})]})]})})}const Os=`import React from 'react';

const GalaxyButton = () => {
  return (
    <div className="galaxy-button-wrapper">
      <style>
        {\`
        .uiverse {
          --duration: 7s;
          --easing: linear;
          --c-color-1: rgba(255, 163, 26, 0.7);
          --c-color-2: #1a23ff;
          --c-color-3: #e21bda;
          --c-color-4: rgba(255, 232, 26, 0.7);
          --c-shadow: rgba(255, 223, 87, 0.5);
          --c-shadow-inset-top: rgba(255, 223, 52, 0.9);
          --c-shadow-inset-bottom: rgba(255, 250, 215, 0.8);
          --c-radial-inner: #ffd215;
          --c-radial-outer: #fff172;
          --c-color: #fff;
          -webkit-tap-highlight-color: transparent;
          -webkit-appearance: none;
          outline: none;
          position: relative;
          cursor: pointer;
          border: none;
          display: table;
          border-radius: 24px;
          padding: 0;
          margin: 0;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.02em;
          line-height: 1.5;
          color: var(--c-color);
          background: radial-gradient(
            circle,
            var(--c-radial-inner),
            var(--c-radial-outer) 80%
          );
          box-shadow: 0 0 14px var(--c-shadow);
        }

        .uiverse:before {
          content: "";
          pointer-events: none;
          position: absolute;
          z-index: 3;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          box-shadow:
            inset 0 3px 12px var(--c-shadow-inset-top),
            inset 0 -3px 4px var(--c-shadow-inset-bottom);
        }

        .uiverse .wrapper {
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          overflow: hidden;
          border-radius: 24px;
          min-width: 132px;
          padding: 12px 0;
        }

        .uiverse .wrapper span {
          display: inline-block;
          position: relative;
          z-index: 1;
        }

        .uiverse:hover {
          --duration: 1400ms;
        }

        .uiverse .wrapper .circle {
          position: absolute;
          left: 0;
          top: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          filter: blur(var(--blur, 8px));
          background: var(--background, transparent);
          transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
          animation: var(--animation, none) var(--duration) var(--easing) infinite;
        }

        .uiverse .wrapper .circle.circle-1,
        .uiverse .wrapper .circle.circle-9,
        .uiverse .wrapper .circle.circle-10 {
          --background: var(--c-color-4);
        }

        .uiverse .wrapper .circle.circle-3,
        .uiverse .wrapper .circle.circle-4 {
          --background: var(--c-color-2);
          --blur: 14px;
        }

        .uiverse .wrapper .circle.circle-5,
        .uiverse .wrapper .circle.circle-6 {
          --background: var(--c-color-3);
          --blur: 16px;
        }

        .uiverse .wrapper .circle.circle-2,
        .uiverse .wrapper .circle.circle-7,
        .uiverse .wrapper .circle.circle-8,
        .uiverse .wrapper .circle.circle-11,
        .uiverse .wrapper .circle.circle-12 {
          --background: var(--c-color-1);
          --blur: 12px;
        }

        .uiverse .wrapper .circle.circle-1 {
          --x: 0;
          --y: -40px;
          --animation: circle-1;
        }

        .uiverse .wrapper .circle.circle-2 {
          --x: 92px;
          --y: 8px;
          --animation: circle-2;
        }

        .uiverse .wrapper .circle.circle-3 {
          --x: -12px;
          --y: -12px;
          --animation: circle-3;
        }

        .uiverse .wrapper .circle.circle-4 {
          --x: 80px;
          --y: -12px;
          --animation: circle-4;
        }

        .uiverse .wrapper .circle.circle-5 {
          --x: 12px;
          --y: -4px;
          --animation: circle-5;
        }

        .uiverse .wrapper .circle.circle-6 {
          --x: 56px;
          --y: 16px;
          --animation: circle-6;
        }

        .uiverse .wrapper .circle.circle-7 {
          --x: 8px;
          --y: 28px;
          --animation: circle-7;
        }

        .uiverse .wrapper .circle.circle-8 {
          --x: 28px;
          --y: -4px;
          --animation: circle-8;
        }

        .uiverse .wrapper .circle.circle-9 {
          --x: 20px;
          --y: -12px;
          --animation: circle-9;
        }

        .uiverse .wrapper .circle.circle-10 {
          --x: 64px;
          --y: 16px;
          --animation: circle-10;
        }

        .uiverse .wrapper .circle.circle-11 {
          --x: 4px;
          --y: 4px;
          --animation: circle-11;
        }

        .uiverse .wrapper .circle.circle-12 {
          --blur: 14px;
          --x: 52px;
          --y: 4px;
          --animation: circle-12;
        }

        @keyframes circle-1 {
          33% { transform: translate(0px, 16px) translateZ(0); }
          66% { transform: translate(12px, 64px) translateZ(0); }
        }

        @keyframes circle-2 {
          33% { transform: translate(80px, -10px) translateZ(0); }
          66% { transform: translate(72px, -48px) translateZ(0); }
        }

        @keyframes circle-3 {
          33% { transform: translate(20px, 12px) translateZ(0); }
          66% { transform: translate(12px, 4px) translateZ(0); }
        }

        @keyframes circle-4 {
          33% { transform: translate(76px, -12px) translateZ(0); }
          66% { transform: translate(112px, -8px) translateZ(0); }
        }

        @keyframes circle-5 {
          33% { transform: translate(84px, 28px) translateZ(0); }
          66% { transform: translate(40px, -32px) translateZ(0); }
        }

        @keyframes circle-6 {
          33% { transform: translate(28px, -16px) translateZ(0); }
          66% { transform: translate(76px, -56px) translateZ(0); }
        }

        @keyframes circle-7 {
          33% { transform: translate(8px, 28px) translateZ(0); }
          66% { transform: translate(20px, -60px) translateZ(0); }
        }

        @keyframes circle-8 {
          33% { transform: translate(32px, -4px) translateZ(0); }
          66% { transform: translate(56px, -20px) translateZ(0); }
        }

        @keyframes circle-9 {
          33% { transform: translate(20px, -12px) translateZ(0); }
          66% { transform: translate(80px, -8px) translateZ(0); }
        }

        @keyframes circle-10 {
          33% { transform: translate(68px, 20px) translateZ(0); }
          66% { transform: translate(100px, 28px) translateZ(0); }
        }

        @keyframes circle-11 {
          33% { transform: translate(4px, 4px) translateZ(0); }
          66% { transform: translate(68px, 20px) translateZ(0); }
        }

        @keyframes circle-12 {
          33% { transform: translate(56px, 0px) translateZ(0); }
          66% { transform: translate(60px, -32px) translateZ(0); }
        }
        \`}
      </style>
      <button className="uiverse">
        <div className="wrapper">
          <span>Portfolio</span>
          <div className="circle circle-12" />
          <div className="circle circle-11" />
          <div className="circle circle-10" />
          <div className="circle circle-9" />
          <div className="circle circle-8" />
          <div className="circle circle-7" />
          <div className="circle circle-6" />
          <div className="circle circle-5" />
          <div className="circle circle-4" />
          <div className="circle circle-3" />
          <div className="circle circle-2" />
          <div className="circle circle-1" />
        </div>
      </button>
    </div>
  );
};

export default GalaxyButton;
`;function Xs(){return e.jsx(k,{title:"Galaxy Button",code:Os,className:"flex items-center justify-center p-12",children:e.jsxs("div",{className:"galaxy-button-wrapper",children:[e.jsx("style",{children:`
        .uiverse {
          --duration: 7s;
          --easing: linear;
          --c-color-1: rgba(255, 163, 26, 0.7);
          --c-color-2: #1a23ff;
          --c-color-3: #e21bda;
          --c-color-4: rgba(255, 232, 26, 0.7);
          --c-shadow: rgba(255, 223, 87, 0.5);
          --c-shadow-inset-top: rgba(255, 223, 52, 0.9);
          --c-shadow-inset-bottom: rgba(255, 250, 215, 0.8);
          --c-radial-inner: #ffd215;
          --c-radial-outer: #fff172;
          --c-color: #fff;
          -webkit-tap-highlight-color: transparent;
          -webkit-appearance: none;
          outline: none;
          position: relative;
          cursor: pointer;
          border: none;
          display: table;
          border-radius: 24px;
          padding: 0;
          margin: 0;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.02em;
          line-height: 1.5;
          color: var(--c-color);
          background: radial-gradient(
            circle,
            var(--c-radial-inner),
            var(--c-radial-outer) 80%
          );
          box-shadow: 0 0 14px var(--c-shadow);
        }

        .uiverse:before {
          content: "";
          pointer-events: none;
          position: absolute;
          z-index: 3;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          box-shadow:
            inset 0 3px 12px var(--c-shadow-inset-top),
            inset 0 -3px 4px var(--c-shadow-inset-bottom);
        }

        .uiverse .wrapper {
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          overflow: hidden;
          border-radius: 24px;
          min-width: 132px;
          padding: 12px 0;
        }

        .uiverse .wrapper span {
          display: inline-block;
          position: relative;
          z-index: 1;
        }

        .uiverse:hover {
          --duration: 1400ms;
        }

        .uiverse .wrapper .circle {
          position: absolute;
          left: 0;
          top: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          filter: blur(var(--blur, 8px));
          background: var(--background, transparent);
          transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
          animation: var(--animation, none) var(--duration) var(--easing) infinite;
        }

        .uiverse .wrapper .circle.circle-1,
        .uiverse .wrapper .circle.circle-9,
        .uiverse .wrapper .circle.circle-10 {
          --background: var(--c-color-4);
        }

        .uiverse .wrapper .circle.circle-3,
        .uiverse .wrapper .circle.circle-4 {
          --background: var(--c-color-2);
          --blur: 14px;
        }

        .uiverse .wrapper .circle.circle-5,
        .uiverse .wrapper .circle.circle-6 {
          --background: var(--c-color-3);
          --blur: 16px;
        }

        .uiverse .wrapper .circle.circle-2,
        .uiverse .wrapper .circle.circle-7,
        .uiverse .wrapper .circle.circle-8,
        .uiverse .wrapper .circle.circle-11,
        .uiverse .wrapper .circle.circle-12 {
          --background: var(--c-color-1);
          --blur: 12px;
        }

        .uiverse .wrapper .circle.circle-1 {
          --x: 0;
          --y: -40px;
          --animation: circle-1;
        }

        .uiverse .wrapper .circle.circle-2 {
          --x: 92px;
          --y: 8px;
          --animation: circle-2;
        }

        .uiverse .wrapper .circle.circle-3 {
          --x: -12px;
          --y: -12px;
          --animation: circle-3;
        }

        .uiverse .wrapper .circle.circle-4 {
          --x: 80px;
          --y: -12px;
          --animation: circle-4;
        }

        .uiverse .wrapper .circle.circle-5 {
          --x: 12px;
          --y: -4px;
          --animation: circle-5;
        }

        .uiverse .wrapper .circle.circle-6 {
          --x: 56px;
          --y: 16px;
          --animation: circle-6;
        }

        .uiverse .wrapper .circle.circle-7 {
          --x: 8px;
          --y: 28px;
          --animation: circle-7;
        }

        .uiverse .wrapper .circle.circle-8 {
          --x: 28px;
          --y: -4px;
          --animation: circle-8;
        }

        .uiverse .wrapper .circle.circle-9 {
          --x: 20px;
          --y: -12px;
          --animation: circle-9;
        }

        .uiverse .wrapper .circle.circle-10 {
          --x: 64px;
          --y: 16px;
          --animation: circle-10;
        }

        .uiverse .wrapper .circle.circle-11 {
          --x: 4px;
          --y: 4px;
          --animation: circle-11;
        }

        .uiverse .wrapper .circle.circle-12 {
          --blur: 14px;
          --x: 52px;
          --y: 4px;
          --animation: circle-12;
        }

        @keyframes circle-1 {
          33% { transform: translate(0px, 16px) translateZ(0); }
          66% { transform: translate(12px, 64px) translateZ(0); }
        }

        @keyframes circle-2 {
          33% { transform: translate(80px, -10px) translateZ(0); }
          66% { transform: translate(72px, -48px) translateZ(0); }
        }

        @keyframes circle-3 {
          33% { transform: translate(20px, 12px) translateZ(0); }
          66% { transform: translate(12px, 4px) translateZ(0); }
        }

        @keyframes circle-4 {
          33% { transform: translate(76px, -12px) translateZ(0); }
          66% { transform: translate(112px, -8px) translateZ(0); }
        }

        @keyframes circle-5 {
          33% { transform: translate(84px, 28px) translateZ(0); }
          66% { transform: translate(40px, -32px) translateZ(0); }
        }

        @keyframes circle-6 {
          33% { transform: translate(28px, -16px) translateZ(0); }
          66% { transform: translate(76px, -56px) translateZ(0); }
        }

        @keyframes circle-7 {
          33% { transform: translate(8px, 28px) translateZ(0); }
          66% { transform: translate(20px, -60px) translateZ(0); }
        }

        @keyframes circle-8 {
          33% { transform: translate(32px, -4px) translateZ(0); }
          66% { transform: translate(56px, -20px) translateZ(0); }
        }

        @keyframes circle-9 {
          33% { transform: translate(20px, -12px) translateZ(0); }
          66% { transform: translate(80px, -8px) translateZ(0); }
        }

        @keyframes circle-10 {
          33% { transform: translate(68px, 20px) translateZ(0); }
          66% { transform: translate(100px, 28px) translateZ(0); }
        }

        @keyframes circle-11 {
          33% { transform: translate(4px, 4px) translateZ(0); }
          66% { transform: translate(68px, 20px) translateZ(0); }
        }

        @keyframes circle-12 {
          33% { transform: translate(56px, 0px) translateZ(0); }
          66% { transform: translate(60px, -32px) translateZ(0); }
        }
        `}),e.jsx("button",{className:"uiverse",children:e.jsxs("div",{className:"wrapper",children:[e.jsx("span",{children:"Portfolio"}),e.jsx("div",{className:"circle circle-12"}),e.jsx("div",{className:"circle circle-11"}),e.jsx("div",{className:"circle circle-10"}),e.jsx("div",{className:"circle circle-9"}),e.jsx("div",{className:"circle circle-8"}),e.jsx("div",{className:"circle circle-7"}),e.jsx("div",{className:"circle circle-6"}),e.jsx("div",{className:"circle circle-5"}),e.jsx("div",{className:"circle circle-4"}),e.jsx("div",{className:"circle circle-3"}),e.jsx("div",{className:"circle circle-2"}),e.jsx("div",{className:"circle circle-1"})]})})]})})}const Fs=`import React from 'react';

export const NeonGradientCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={\`neon-card-wrapper relative group \${className}\`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative h-full bg-background rounded-lg border leading-none flex items-center">
         {children}
      </div>
       <style>
        {\`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
        .animate-tilt {
            animation: tilt 10s infinite linear;
        }
        \`}
      </style>
    </div>
  );
};
`;function Vs(){return e.jsxs(k,{title:"Neon Gradient Card",code:Fs,className:"flex items-center justify-center p-12 min-h-[300px]",children:[e.jsxs("div",{className:"relative group max-w-sm",children:[e.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"}),e.jsxs("div",{className:"relative px-7 py-6 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600",children:[e.jsx("span",{className:"flex items-center space-x-5",children:e.jsx("span",{className:"pr-6 text-gray-100",children:"Awesome Feature"})}),e.jsx("span",{className:"pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200",children:"See more →"})]})]}),e.jsx("style",{children:`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        .animate-tilt {
            animation: tilt 5s infinite linear;
        }
        `})]})}const Hs=`import React from 'react';

const ExplosiveGrowthCard = () => {
  return (
    <div className="explosive-growth-card-wrapper">
      <style>
        {\`
        .explosive-growth-card-wrapper .explosive-card {
          --white: hsl(0, 0%, 100%);
          --black: hsl(240, 15%, 9%);
          --paragraph: hsl(0, 0%, 83%);
          --line: hsl(240, 9%, 17%);
          --primary: hsl(266, 92%, 58%);

          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          padding: 1rem;
          width: 19rem;
          background-color: hsla(240, 15%, 9%, 1);
          background-image: radial-gradient(
              at 88% 40%,
              hsla(240, 15%, 9%, 1) 0px,
              transparent 85%
            ),
            radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
            radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
            radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

          border-radius: 1rem;
          box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
          font-family: inherit;
        }

        .explosive-growth-card-wrapper .explosive-card .card__border {
          overflow: hidden;
          pointer-events: none;

          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          width: calc(100% + 2px);
          height: calc(100% + 2px);
          background-image: linear-gradient(
            0deg,
            hsl(0, 0%, 100%) -50%,
            hsl(0, 0%, 40%) 100%
          );

          border-radius: 1rem;
        }

        .explosive-growth-card-wrapper .explosive-card .card__border::before {
          content: "";
          pointer-events: none;

          position: absolute;
          z-index: 200;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          transform-origin: center;

          width: 200%;
          height: 100%;
          background-image: linear-gradient(
            0deg,
            hsla(0, 0%, 100%, 0) 0%,
            hsl(277, 95%, 60%) 10%,
            hsl(277, 95%, 60%) 90%,
            hsla(0, 0%, 40%, 0) 100%
          );

          animation: explosive-rotate 8s linear infinite;
        }

        @keyframes explosive-rotate {
          to {
            transform: rotate(360deg);
          }
        }

        .explosive-growth-card-wrapper .explosive-card .card_title__container .card_title {
          font-size: 1rem;
          color: var(--white);
          font-weight: 700;
        }

        .explosive-growth-card-wrapper .explosive-card .card_title__container .card_paragraph {
          margin-top: 0.25rem;
          width: 65%;

          font-size: 0.8rem;
          color: var(--paragraph);
          line-height: 1.2;
        }

        .explosive-growth-card-wrapper .explosive-card .line {
          width: 100%;
          height: 0.1rem;
          background-color: var(--line);

          border: none;
        }

        .explosive-growth-card-wrapper .explosive-card .card__list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0;
          list-style: none;
        }

        .explosive-growth-card-wrapper .explosive-card .card__list .card__list_item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .explosive-growth-card-wrapper .explosive-card .card__list .card__list_item .check {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1rem;
          height: 1rem;
          background-color: var(--primary);
          border-radius: 50%;
        }

        .explosive-growth-card-wrapper .explosive-card .card__list .card__list_item .check .check_svg {
          width: 0.75rem;
          height: 0.75rem;
          fill: var(--black);
        }

        .explosive-growth-card-wrapper .explosive-card .card__list .card__list_item .list_text {
          font-size: 0.85rem;
          color: var(--white);
        }

        .explosive-growth-card-wrapper .explosive-card .button {
          cursor: pointer;

          padding: 0.5rem;
          width: 100%;
          background-image: linear-gradient(
            0deg,
            rgba(94, 58, 238, 1) 0%,
            rgba(197, 107, 240, 1) 100%
          );

          font-size: 0.85rem;
          color: var(--white);
          font-weight: 600;

          border: 0;
          border-radius: 9999px;
          box-shadow: inset 0 -2px 25px -4px var(--white);
          transition: transform 0.2s;
        }
        
        .explosive-growth-card-wrapper .explosive-card .button:active {
            transform: scale(0.97);
        }
        \`}
      </style>
      <div className="explosive-card">
        <div className="card__border" />
        <div className="card_title__container">
          <span className="card_title">Explosive Growth</span>
          <p className="card_paragraph">
            Perfect for your next content, leave to us and enjoy the result!
          </p>
        </div>
        <hr className="line" />
        <ul className="card__list">
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="list_text">10 Launch Weeks</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="list_text">10 Influencers Post</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="list_text">100.000 Views</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="list_text">10 Reddit Posts</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="list_text">2 Hours Marketing Consultation</span>
          </li>
        </ul>
        <button className="button">Book a Call</button>
      </div>
    </div>
  );
}

export default ExplosiveGrowthCard;
`;function Gs(){return e.jsx(k,{title:"Explosive Growth Card",code:Hs,className:"flex items-center justify-center p-12",children:e.jsxs("div",{className:"explosive-growth-card-wrapper",children:[e.jsx("style",{children:`
        .explosive-growth-card-wrapper .explosive-card {
          --white: hsl(0, 0%, 100%);
          --black: hsl(240, 15%, 9%);
          --paragraph: hsl(0, 0%, 83%);
          --line: hsl(240, 9%, 17%);
          --primary: hsl(266, 92%, 58%);

          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          padding: 1rem;
          width: 19rem;
          background-color: hsla(240, 15%, 9%, 1);
          background-image: radial-gradient(
              at 88% 40%,
              hsla(240, 15%, 9%, 1) 0px,
              transparent 85%
            ),
            radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
            radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
            radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

          border-radius: 1rem;
          box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
          font-family: inherit;
        }

        .explosive-growth-card-wrapper .explosive-card .card__border {
          overflow: hidden;
          pointer-events: none;

          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          width: calc(100% + 2px);
          height: calc(100% + 2px);
          background-image: linear-gradient(
            0deg,
            hsl(0, 0%, 100%) -50%,
            hsl(0, 0%, 40%) 100%
          );

          border-radius: 1rem;
        }

        .explosive-growth-card-wrapper .explosive-card .card__border::before {
          content: "";
          pointer-events: none;

          position: absolute;
          z-index: 200;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          transform-origin: center;

          width: 200%;
          height: 100%;
          background-image: linear-gradient(
            0deg,
            hsla(0, 0%, 100%, 0) 0%,
            hsl(277, 95%, 60%) 10%,
            hsl(277, 95%, 60%) 90%,
            hsla(0, 0%, 40%, 0) 100%
          );

          animation: explosive-rotate 8s linear infinite;
        }

        @keyframes explosive-rotate {
          to {
            transform: rotate(360deg);
          }
        }

        .explosive-growth-card-wrapper .explosive-card .card_title__container .card_title {
          font-size: 1rem;
          color: var(--white);
          font-weight: 700;
        }

        .explosive-growth-card-wrapper .explosive-card .card_title__container .card_paragraph {
          margin-top: 0.25rem;
          width: 65%;

          font-size: 0.8rem;
          color: var(--paragraph);
          line-height: 1.2;
        }

        .explosive-growth-card-wrapper .explosive-card .line {
          width: 100%;
          height: 0.1rem;
          background-color: var(--line);

          border: none;
        }

        .explosive-growth-card-wrapper .explosive-card .card__list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0;
          list-style: none;
        }

        .explosive-growth-card-wrapper .explosive-card .card__list .card__list_item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .explosive-growth-card-wrapper .explosive-card .card__list .card__list_item .check {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1rem;
          height: 1rem;
          background-color: var(--primary);
          border-radius: 50%;
        }

        .explosive-growth-card-wrapper .explosive-card .card__list .card__list_item .check .check_svg {
          width: 0.75rem;
          height: 0.75rem;
          fill: var(--black);
        }

        .explosive-growth-card-wrapper .explosive-card .card__list .card__list_item .list_text {
          font-size: 0.85rem;
          color: var(--white);
        }

        .explosive-growth-card-wrapper .explosive-card .button {
          cursor: pointer;

          padding: 0.5rem;
          width: 100%;
          background-image: linear-gradient(
            0deg,
            rgba(94, 58, 238, 1) 0%,
            rgba(197, 107, 240, 1) 100%
          );

          font-size: 0.85rem;
          color: var(--white);
          font-weight: 600;

          border: 0;
          border-radius: 9999px;
          box-shadow: inset 0 -2px 25px -4px var(--white);
          transition: transform 0.2s;
        }
        
        .explosive-growth-card-wrapper .explosive-card .button:active {
            transform: scale(0.97);
        }
        `}),e.jsxs("div",{className:"explosive-card",children:[e.jsx("div",{className:"card__border"}),e.jsxs("div",{className:"card_title__container",children:[e.jsx("span",{className:"card_title",children:"Explosive Growth"}),e.jsx("p",{className:"card_paragraph",children:"Perfect for your next content, leave to us and enjoy the result!"})]}),e.jsx("hr",{className:"line"}),e.jsxs("ul",{className:"card__list",children:[e.jsxs("li",{className:"card__list_item",children:[e.jsx("span",{className:"check",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"check_svg",children:e.jsx("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"})})}),e.jsx("span",{className:"list_text",children:"10 Launch Weeks"})]}),e.jsxs("li",{className:"card__list_item",children:[e.jsx("span",{className:"check",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"check_svg",children:e.jsx("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"})})}),e.jsx("span",{className:"list_text",children:"10 Influencers Post"})]}),e.jsxs("li",{className:"card__list_item",children:[e.jsx("span",{className:"check",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"check_svg",children:e.jsx("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"})})}),e.jsx("span",{className:"list_text",children:"100.000 Views"})]}),e.jsxs("li",{className:"card__list_item",children:[e.jsx("span",{className:"check",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"check_svg",children:e.jsx("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"})})}),e.jsx("span",{className:"list_text",children:"10 Reddit Posts"})]}),e.jsxs("li",{className:"card__list_item",children:[e.jsx("span",{className:"check",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"check_svg",children:e.jsx("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"})})}),e.jsx("span",{className:"list_text",children:"2 Hours Marketing Consultation"})]})]}),e.jsx("button",{className:"button",children:"Book a Call"})]})]})})}const qs=`import React from 'react';

const SoftInput = () => {
  return (
    <div className="soft-input-wrapper">
      <style>
        {\`
        .soft-input-wrapper .input {
          border: none;
          outline: none;
          border-radius: 15px;
          padding: 1em;
          background-color: #18181b; /* Dark bg to match theme */
          box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
          transition: 300ms ease-in-out;
          width: 100%;
          max-width: 300px;
          color: white;
        }

        .soft-input-wrapper .input:focus {
          background-color: #27272a;
          transform: scale(1.05);
          box-shadow: 13px 13px 100px #09090b,
                     -13px -13px 100px #3f3f46;
        }
        \`}
      </style>
      <input type="text" autoComplete="off" name="text" className="input" placeholder="Username" />
    </div>
  );
}

export default SoftInput;
`;function Ws(){return e.jsx(k,{title:"Soft Input",code:qs,className:"flex items-center justify-center p-12",children:e.jsxs("div",{className:"soft-input-wrapper",children:[e.jsx("style",{children:`
        .soft-input-wrapper .input {
          border: none;
          outline: none;
          border-radius: 15px;
          padding: 1em;
          background-color: #18181b; /* zinc-950 */
          box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
          transition: 300ms ease-in-out;
          width: 250px;
          color: white;
          font-family: inherit;
        }
        
        .soft-input-wrapper .input::placeholder {
           color: #71717a; /* zinc-500 */
        }

        .soft-input-wrapper .input:focus {
          background-color: #27272a; /* zinc-800 */
          transform: scale(1.05);
          box-shadow: 13px 13px 100px #09090b, /* Dark shadow */
                     -13px -13px 100px #3f3f46; /* Light highlight */
        }
        `}),e.jsx("input",{type:"text",autoComplete:"off",name:"text",className:"input",placeholder:"Username"})]})})}const Us=`import React from 'react';

const LogoutButton = () => {
  return (
    <div className="logout-btn-wrapper">
      <style>
        {\`
        .logout-btn-wrapper .logout-btn {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition-duration: .3s;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
          background-color: rgb(255, 65, 65);
        }

        /* plus sign */
        .logout-btn-wrapper .sign {
          width: 100%;
          transition-duration: .3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logout-btn-wrapper .sign svg {
          width: 17px;
        }

        .logout-btn-wrapper .sign svg path {
          fill: white;
        }
        /* text */
        .logout-btn-wrapper .text {
          position: absolute;
          right: 0%;
          width: 0%;
          opacity: 0;
          color: white;
          font-size: 0.9em;
          font-weight: 600;
          transition-duration: .3s;
        }
        /* hover effect on button width */
        .logout-btn-wrapper .logout-btn:hover {
          width: 125px;
          border-radius: 40px;
          transition-duration: .3s;
        }

        .logout-btn-wrapper .logout-btn:hover .sign {
          width: 30%;
          transition-duration: .3s;
          padding-left: 20px;
        }
        /* hover effect button's text */
        .logout-btn-wrapper .logout-btn:hover .text {
          opacity: 1;
          width: 70%;
          transition-duration: .3s;
          padding-right: 10px;
        }
        /* button click effect*/
        .logout-btn-wrapper .logout-btn:active {
          transform: translate(2px ,2px);
        }
        \`}
      </style>
      <button className="logout-btn">
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </div>
        <div className="text">Logout</div>
      </button>
    </div>
  );
}

export default LogoutButton;
`;function $s(){return e.jsx(k,{title:"Logout Button",code:Us,className:"flex items-center justify-center p-12",children:e.jsxs("div",{className:"logout-btn-wrapper",children:[e.jsx("style",{children:`
        .logout-btn-wrapper .logout-btn {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition-duration: .3s;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
          background-color: rgb(255, 65, 65);
        }

        /* plus sign */
        .logout-btn-wrapper .sign {
          width: 100%;
          transition-duration: .3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logout-btn-wrapper .sign svg {
          width: 17px;
        }

        .logout-btn-wrapper .sign svg path {
          fill: white;
        }
        /* text */
        .logout-btn-wrapper .text {
          position: absolute;
          right: 0%;
          width: 0%;
          opacity: 0;
          color: white;
          font-size: 0.9em;
          font-weight: 600;
          transition-duration: .3s;
        }
        /* hover effect on button width */
        .logout-btn-wrapper .logout-btn:hover {
          width: 125px;
          border-radius: 40px;
          transition-duration: .3s;
        }

        .logout-btn-wrapper .logout-btn:hover .sign {
          width: 30%;
          transition-duration: .3s;
          padding-left: 20px;
        }
        /* hover effect button's text */
        .logout-btn-wrapper .logout-btn:hover .text {
          opacity: 1;
          width: 70%;
          transition-duration: .3s;
          padding-right: 10px;
        }
        /* button click effect*/
        .logout-btn-wrapper .logout-btn:active {
          transform: translate(2px ,2px);
        }
        `}),e.jsxs("button",{className:"logout-btn",children:[e.jsx("div",{className:"sign",children:e.jsx("svg",{viewBox:"0 0 512 512",children:e.jsx("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})})}),e.jsx("div",{className:"text",children:"Logout"})]})]})})}const Qs=`import React from 'react';

const LiquidLoader = () => {
  return (
    <div className="liquid-loader-wrapper">
      <style>
        {\`
        .liquid-loader-wrapper .liquid-loader {
          --color-one: #ffbf48;
          --color-two: #be4a1d;
          --color-three: #ffbf4780;
          --color-four: #bf4a1d80;
          --color-five: #ffbf4740;
          --time-animation: 2s;
          --size: 1;
          position: relative;
          border-radius: 50%;
          transform: scale(var(--size));
          box-shadow:
            0 0 25px 0 var(--color-three),
            0 20px 50px 0 var(--color-four);
          animation: liquid-colorize calc(var(--time-animation) * 3) ease-in-out infinite;
          width: 100px;
          height: 100px;
        }

        .liquid-loader-wrapper .liquid-loader::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border-top: solid 1px var(--color-one);
          border-bottom: solid 1px var(--color-two);
          background: linear-gradient(180deg, var(--color-five), var(--color-four));
          box-shadow:
            inset 0 10px 10px 0 var(--color-three),
            inset 0 -10px 10px 0 var(--color-four);
        }

        .liquid-loader-wrapper .liquid-loader .liquid-box {
          width: 100px;
          height: 100px;
          background: linear-gradient(
            180deg,
            var(--color-one) 30%,
            var(--color-two) 70%
          );
          mask: url(#liquid-clipping);
          -webkit-mask: url(#liquid-clipping);
        }

        .liquid-loader-wrapper .liquid-loader svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping {
          filter: contrast(15);
          animation: liquid-roundness calc(var(--time-animation) / 2) linear infinite;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon {
          filter: blur(7px);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(1) {
          transform-origin: 75% 25%;
          transform: rotate(90deg);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(2) {
          transform-origin: 50% 50%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(3) {
          transform-origin: 50% 60%;
          animation: liquid-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -3);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(4) {
          transform-origin: 40% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(5) {
          transform-origin: 40% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
          animation-delay: calc(var(--time-animation) / -2);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(6) {
          transform-origin: 60% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(7) {
          transform-origin: 60% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -1.5);
        }

        @keyframes liquid-rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes liquid-roundness {
          0% {
            filter: contrast(15);
          }
          20% {
            filter: contrast(3);
          }
          40% {
            filter: contrast(3);
          }
          60% {
            filter: contrast(15);
          }
          100% {
            filter: contrast(15);
          }
        }

        @keyframes liquid-colorize {
          0% {
            filter: hue-rotate(0deg);
          }
          20% {
            filter: hue-rotate(-30deg);
          }
          40% {
            filter: hue-rotate(-60deg);
          }
          60% {
            filter: hue-rotate(-90deg);
          }
          80% {
            filter: hue-rotate(-45deg);
          }
          100% {
            filter: hue-rotate(0deg);
          }
        }
        \`}
      </style>
      <div className="liquid-loader">
        <svg width={100} height={100} viewBox="0 0 100 100">
          <defs>
            <mask id="liquid-clipping">
              <polygon points="0,0 100,0 100,100 0,100" fill="black" />
              <polygon points="25,25 75,25 50,75" fill="white" />
              <polygon points="50,25 75,75 25,75" fill="white" />
              <polygon points="35,35 65,35 50,65" fill="white" />
              <polygon points="35,35 65,35 50,65" fill="white" />
              <polygon points="35,35 65,35 50,65" fill="white" />
              <polygon points="35,35 65,35 50,65" fill="white" />
            </mask>
          </defs>
        </svg>
        <div className="liquid-box" />
      </div>
    </div>
  );
}

export default LiquidLoader;
`;function Js(){return e.jsx(k,{title:"Liquid Loader",code:Qs,className:"flex items-center justify-center p-12",children:e.jsxs("div",{className:"liquid-loader-wrapper",children:[e.jsx("style",{children:`
        .liquid-loader-wrapper .liquid-loader {
          --color-one: #ffbf48;
          --color-two: #be4a1d;
          --color-three: #ffbf4780;
          --color-four: #bf4a1d80;
          --color-five: #ffbf4740;
          --time-animation: 2s;
          --size: 1;
          position: relative;
          border-radius: 50%;
          transform: scale(var(--size));
          box-shadow:
            0 0 25px 0 var(--color-three),
            0 20px 50px 0 var(--color-four);
          animation: liquid-colorize calc(var(--time-animation) * 3) ease-in-out infinite;
          width: 100px;
          height: 100px;
        }

        .liquid-loader-wrapper .liquid-loader::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border-top: solid 1px var(--color-one);
          border-bottom: solid 1px var(--color-two);
          background: linear-gradient(180deg, var(--color-five), var(--color-four));
          box-shadow:
            inset 0 10px 10px 0 var(--color-three),
            inset 0 -10px 10px 0 var(--color-four);
        }

        .liquid-loader-wrapper .liquid-loader .liquid-box {
          width: 100px;
          height: 100px;
          background: linear-gradient(
            180deg,
            var(--color-one) 30%,
            var(--color-two) 70%
          );
          mask: url(#liquid-clipping);
          -webkit-mask: url(#liquid-clipping);
        }

        .liquid-loader-wrapper .liquid-loader svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping {
          filter: contrast(15);
          animation: liquid-roundness calc(var(--time-animation) / 2) linear infinite;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon {
          filter: blur(7px);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(1) {
          transform-origin: 75% 25%;
          transform: rotate(90deg);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(2) {
          transform-origin: 50% 50%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(3) {
          transform-origin: 50% 60%;
          animation: liquid-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -3);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(4) {
          transform-origin: 40% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(5) {
          transform-origin: 40% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite reverse;
          animation-delay: calc(var(--time-animation) / -2);
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(6) {
          transform-origin: 60% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite;
        }

        .liquid-loader-wrapper .liquid-loader svg #liquid-clipping polygon:nth-child(7) {
          transform-origin: 60% 40%;
          animation: liquid-rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -1.5);
        }

        @keyframes liquid-rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes liquid-roundness {
          0% {
            filter: contrast(15);
          }
          20% {
            filter: contrast(3);
          }
          40% {
            filter: contrast(3);
          }
          60% {
            filter: contrast(15);
          }
          100% {
            filter: contrast(15);
          }
        }

        @keyframes liquid-colorize {
          0% {
            filter: hue-rotate(0deg);
          }
          20% {
            filter: hue-rotate(-30deg);
          }
          40% {
            filter: hue-rotate(-60deg);
          }
          60% {
            filter: hue-rotate(-90deg);
          }
          80% {
            filter: hue-rotate(-45deg);
          }
          100% {
            filter: hue-rotate(0deg);
          }
        }
        `}),e.jsxs("div",{className:"liquid-loader",children:[e.jsx("svg",{width:100,height:100,viewBox:"0 0 100 100",children:e.jsx("defs",{children:e.jsxs("mask",{id:"liquid-clipping",children:[e.jsx("polygon",{points:"0,0 100,0 100,100 0,100",fill:"black"}),e.jsx("polygon",{points:"25,25 75,25 50,75",fill:"white"}),e.jsx("polygon",{points:"50,25 75,75 25,75",fill:"white"}),e.jsx("polygon",{points:"35,35 65,35 50,65",fill:"white"}),e.jsx("polygon",{points:"35,35 65,35 50,65",fill:"white"}),e.jsx("polygon",{points:"35,35 65,35 50,65",fill:"white"}),e.jsx("polygon",{points:"35,35 65,35 50,65",fill:"white"})]})})}),e.jsx("div",{className:"liquid-box"})]})]})})}const Ks=`import React from 'react';

const GlassCard = () => {
  return (
    <div className="glass-card-wrapper">
      <style>
        {\`
        .glass-card-wrapper .glass-card-box {
          position: relative;
          width: 220px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
          z-index: 1;
        }

        .glass-card-wrapper .glass-card-box::before {
          content: ' ';
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          text-decoration: none;
          background: #fff;
          border-radius: 8px;
          transform: skewX(15deg);
          transition: 0.5s;
        }

        .glass-card-wrapper .glass-card-box::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50;
          width: 50%;
          height: 100%;
          background: #fff;
          border-radius: 8px;
          transform: skewX(15deg);
          transition: 0.5s;
          filter: blur(30px);
        }

        .glass-card-wrapper .glass-card-box:hover:before,
        .glass-card-wrapper .glass-card-box:hover:after {
          transform: skewX(0deg) scaleX(1.3);
        }

        .glass-card-wrapper .glass-card-box:before,
        .glass-card-wrapper .glass-card-box:after {
          background: linear-gradient(315deg, #ffbc00, #ff0058);
        }

        .glass-card-wrapper .glass-card-box span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
        }

        .glass-card-wrapper .glass-card-box span::before {
          content: '';
          position: absolute;
          top: -40px;
          left: 40px;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 1;
          transition: 0.1s;
          animation: glass-animate 2s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .glass-card-wrapper .glass-card-box span::after {
          content: '';
          position: absolute;
          bottom: -40px;
          right: 40px;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 1;
          transition: 0.5s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          animation-delay: -1s;
        }

        .glass-card-wrapper .glass-card-box .glass-card-content {
          position: relative;
          width: 190px;
          height: 254px;
          padding: 20px 40px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          z-index: 1;
          transform: 0.5s;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glass-card-wrapper .glass-card-box .glass-card-content h2 {
          font-size: 20px;
          color: #fff;
          margin-bottom: 10px;
          font-weight: bold;
        }
        
        @keyframes glass-animate {
            0%, 100% {
                transform: translateY(10px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        \`}
      </style>
      <div className="glass-card-box">
        <span />
        <div className="glass-card-content">
          <h2>Hover me!</h2>
        </div>
      </div>
    </div>
  );
}

export default GlassCard;
`;function en(){return e.jsx(k,{title:"Glass Card",code:Ks,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"glass-card-wrapper",children:[e.jsx("style",{children:`
        .glass-card-wrapper .glass-card-box {
          position: relative;
          width: 220px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
          z-index: 1;
        }

        .glass-card-wrapper .glass-card-box::before {
          content: ' ';
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          text-decoration: none;
          background: #fff;
          border-radius: 8px;
          transform: skewX(15deg);
          transition: 0.5s;
        }

        .glass-card-wrapper .glass-card-box::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50;
          width: 50%;
          height: 100%;
          background: #fff;
          border-radius: 8px;
          transform: skewX(15deg);
          transition: 0.5s;
          filter: blur(30px);
        }

        .glass-card-wrapper .glass-card-box:hover:before,
        .glass-card-wrapper .glass-card-box:hover:after {
          transform: skewX(0deg) scaleX(1.3);
        }

        .glass-card-wrapper .glass-card-box:before,
        .glass-card-wrapper .glass-card-box:after {
          background: linear-gradient(315deg, #ffbc00, #ff0058);
        }

        .glass-card-wrapper .glass-card-box span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
        }

        .glass-card-wrapper .glass-card-box span::before {
          content: '';
          position: absolute;
          top: -40px;
          left: 40px;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 1;
          transition: 0.1s;
          animation: glass-animate 2s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .glass-card-wrapper .glass-card-box span::after {
          content: '';
          position: absolute;
          bottom: -40px;
          right: 40px;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 1;
          transition: 0.5s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          animation-delay: -1s;
        }

        .glass-card-wrapper .glass-card-box .glass-card-content {
          position: relative;
          width: 190px;
          height: 254px;
          padding: 20px 40px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          z-index: 1;
          transform: 0.5s;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glass-card-wrapper .glass-card-box .glass-card-content h2 {
          font-size: 20px;
          color: #fff;
          margin-bottom: 10px;
          font-weight: bold;
        }
        
        @keyframes glass-animate {
            0%, 100% {
                transform: translateY(10px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        `}),e.jsxs("div",{className:"glass-card-box",children:[e.jsx("span",{}),e.jsx("div",{className:"glass-card-content",children:e.jsx("h2",{children:"Hover me!"})})]})]})})}const tn=`import React from 'react';

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
`;function rn(){return e.jsx(k,{title:"Sketch Button",code:tn,className:"flex items-center justify-center p-12 min-h-[300px]",children:e.jsxs("div",{className:"sketch-button-wrapper",children:[e.jsx("style",{children:`
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
        `}),e.jsx("div",{className:"container flex justify-center items-center",children:e.jsxs("a",{href:"#",className:"sketch-button type--C",children:[e.jsx("div",{className:"sketch-button__line"}),e.jsx("div",{className:"sketch-button__line"}),e.jsx("span",{className:"sketch-button__text",children:"ENTRY"}),e.jsx("div",{className:"sketch-button__drow1"}),e.jsx("div",{className:"sketch-button__drow2"})]})})]})})}const an=`import React from 'react';

const CloudSaveButton = () => {
  return (
    <div className="cloud-save-btn-wrapper">
      <style>
        {\`
        .cloud-save-btn-wrapper .cloud-save-btn {
          font-family: inherit;
          font-size: 20px;
          background: #212121;
          color: white;
          fill: rgb(155, 153, 153);
          padding: 0.7em 1em;
          padding-left: 0.9em;
          display: flex;
          align-items: center;
          cursor: pointer;
          border: none;
          border-radius: 15px;
          font-weight: 1000;
          transition: 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover {
          background: #000;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover .cloud-svg-wrapper {
          transform: scale(1.25);
          transition: 0.5s linear;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover svg {
          transform: translateX(1.2em) scale(1.1);
          fill: #fff;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover span {
          opacity: 0;
          transition: 0.5s linear;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:active {
          transform: scale(0.95);
        }
        \`}
      </style>
      <button className="cloud-save-btn">
        <div className="cloud-svg-wrapper-1">
          <div className="cloud-svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" className="icon">
              <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z" />
            </svg>
          </div>
        </div>
        <span>Save</span>
      </button>
    </div>
  );
}

export default CloudSaveButton;
`;function on(){return e.jsx(k,{title:"Cloud Save Button",code:an,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"cloud-save-btn-wrapper",children:[e.jsx("style",{children:`
        .cloud-save-btn-wrapper .cloud-save-btn {
          font-family: inherit;
          font-size: 20px;
          background: #212121;
          color: white;
          fill: rgb(155, 153, 153);
          padding: 0.7em 1em;
          padding-left: 0.9em;
          display: flex;
          align-items: center;
          cursor: pointer;
          border: none;
          border-radius: 15px;
          font-weight: 1000;
          transition: 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover {
          background: #000;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover .cloud-svg-wrapper {
          transform: scale(1.25);
          transition: 0.5s linear;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover svg {
          transform: translateX(1.2em) scale(1.1);
          fill: #fff;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:hover span {
          opacity: 0;
          transition: 0.5s linear;
        }

        .cloud-save-btn-wrapper .cloud-save-btn:active {
          transform: scale(0.95);
        }
        `}),e.jsxs("button",{className:"cloud-save-btn",children:[e.jsx("div",{className:"cloud-svg-wrapper-1",children:e.jsx("div",{className:"cloud-svg-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"30",height:"30",className:"icon",children:e.jsx("path",{d:"M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"})})})}),e.jsx("span",{children:"Save"})]})]})})}const sn=`import React from 'react';

const ScrollDownButton = () => {
  return (
    <div className="sdb-wrapper">
      <style>
        {\`
        .sdb-wrapper .sdb-scrolldown {
          --sdb-color: skyblue;
          --sdb-sizeX: 30px;
          --sdb-sizeY: 50px;
          position: relative;
          width: var(--sdb-sizeX);
          height: var(--sdb-sizeY);
          margin-left: var(sizeX / 2);
          border: calc(var(--sdb-sizeX) / 10) solid var(--sdb-color);
          border-radius: 50px;
          box-sizing: border-box;
          margin-bottom: 16px;
          cursor: pointer;
        }

        .sdb-wrapper .sdb-scrolldown::before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          background-color: var(--sdb-color);
          border-radius: 100%;
          animation: sdb-scrolldown-anim 2s infinite;
          box-sizing: border-box;
          box-shadow: 0px -5px 3px 1px #2a547066;
        }

        @keyframes sdb-scrolldown-anim {
          0% {
            opacity: 0;
            height: 6px;
          }
          40% {
            opacity: 1;
            height: 10px;
          }
          80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
          }
          100% {
            height: 3px;
            opacity: 0;
          }
        }

        .sdb-wrapper .sdb-chevrons {
          padding: 6px 0 0 0;
          margin-left: -3px;
          margin-top: 48px;
          width: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sdb-wrapper .sdb-chevrondown {
          margin-top: -6px;
          position: relative;
          border: solid var(--sdb-color);
          border-width: 0 3px 3px 0;
          display: inline-block;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }

        .sdb-wrapper .sdb-chevrondown:nth-child(odd) {
          animation: sdb-pulse 500ms ease infinite alternate;
        }

        .sdb-wrapper .sdb-chevrondown:nth-child(even) {
          animation: sdb-pulse 500ms ease infinite alternate 250ms;
        }

        @keyframes sdb-pulse {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.5;
          }
        }
        \`}
      </style>
      <div className="sdb-scrolldown">
        <div className="sdb-chevrons">
          <div className="sdb-chevrondown" />
          <div className="sdb-chevrondown" />
        </div>
      </div>
    </div>
  );
}

export default ScrollDownButton;
`;function nn(){return e.jsx(k,{title:"Scroll Down Button",code:sn,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"sdb-wrapper",children:[e.jsx("style",{children:`
        .sdb-wrapper .sdb-scrolldown {
          --sdb-color: skyblue;
          --sdb-sizeX: 30px;
          --sdb-sizeY: 50px;
          position: relative;
          width: var(--sdb-sizeX);
          height: var(--sdb-sizeY);
          margin-left: var(sizeX / 2);
          border: calc(var(--sdb-sizeX) / 10) solid var(--sdb-color);
          border-radius: 50px;
          box-sizing: border-box;
          margin-bottom: 16px;
          cursor: pointer;
        }

        .sdb-wrapper .sdb-scrolldown::before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          background-color: var(--sdb-color);
          border-radius: 100%;
          animation: sdb-scrolldown-anim 2s infinite;
          box-sizing: border-box;
          box-shadow: 0px -5px 3px 1px #2a547066;
        }

        @keyframes sdb-scrolldown-anim {
          0% {
            opacity: 0;
            height: 6px;
          }
          40% {
            opacity: 1;
            height: 10px;
          }
          80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
          }
          100% {
            height: 3px;
            opacity: 0;
          }
        }

        .sdb-wrapper .sdb-chevrons {
          padding: 6px 0 0 0;
          margin-left: -3px;
          margin-top: 48px;
          width: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sdb-wrapper .sdb-chevrondown {
          margin-top: -6px;
          position: relative;
          border: solid var(--sdb-color);
          border-width: 0 3px 3px 0;
          display: inline-block;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }

        .sdb-wrapper .sdb-chevrondown:nth-child(odd) {
          animation: sdb-pulse 500ms ease infinite alternate;
        }

        .sdb-wrapper .sdb-chevrondown:nth-child(even) {
          animation: sdb-pulse 500ms ease infinite alternate 250ms;
        }

        @keyframes sdb-pulse {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.5;
          }
        }
        `}),e.jsx("div",{className:"sdb-scrolldown",children:e.jsxs("div",{className:"sdb-chevrons",children:[e.jsx("div",{className:"sdb-chevrondown"}),e.jsx("div",{className:"sdb-chevrondown"})]})})]})})}const ln=`import React from 'react';

const CodePenButton = () => {
  return (
    <div className="codepen-btn-wrapper">
      <style>
        {\`
        .codepen-btn-wrapper .codepen-btn {
          display: block;
          cursor: pointer;
          color: white;
          margin: 0 auto;
          position: relative;
          text-decoration: none;
          font-weight: 600;
          border-radius: 6px;
          overflow: hidden;
          padding: 3px;
          isolation: isolate;
          width: fit-content;
        }

        .codepen-btn-wrapper .codepen-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 400%;
          height: 100%;
          background: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
          background-size: 25% 100%;
          animation: codepen-border-slide .75s linear infinite;
          animation-play-state: paused;
          translate: -5% 0%;
          transition: translate 0.25s ease-out;
        }

        .codepen-btn-wrapper .codepen-btn:hover::before {
          animation-play-state: running;
          transition-duration: 0.75s;
          translate: 0% 0%;
        }

        @keyframes codepen-border-slide {
          to {
            transform: translateX(-25%);
          }
        }

        .codepen-btn-wrapper .codepen-btn span {
          position: relative;
          display: block;
          padding: 1rem 1.5rem;
          font-size: 1.1rem;
          background: #000;
          border-radius: 3px;
          height: 100%;
        }
        \`}
      </style>
      <a className="codepen-btn"><span>Start Coding</span></a>
    </div>
  );
}

export default CodePenButton;
`;function cn(){return e.jsx(k,{title:"CodePen Button",code:ln,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"codepen-btn-wrapper",children:[e.jsx("style",{children:`
        .codepen-btn-wrapper .codepen-btn {
          display: block;
          cursor: pointer;
          color: white;
          margin: 0 auto;
          position: relative;
          text-decoration: none;
          font-weight: 600;
          border-radius: 6px;
          overflow: hidden;
          padding: 3px;
          isolation: isolate;
          width: fit-content;
        }

        .codepen-btn-wrapper .codepen-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 400%;
          height: 100%;
          background: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
          background-size: 25% 100%;
          animation: codepen-border-slide .75s linear infinite;
          animation-play-state: paused;
          translate: -5% 0%;
          transition: translate 0.25s ease-out;
        }

        .codepen-btn-wrapper .codepen-btn:hover::before {
          animation-play-state: running;
          transition-duration: 0.75s;
          translate: 0% 0%;
        }

        @keyframes codepen-border-slide {
          to {
            transform: translateX(-25%);
          }
        }

        .codepen-btn-wrapper .codepen-btn span {
          position: relative;
          display: block;
          padding: 1rem 1.5rem;
          font-size: 1.1rem;
          background: #000;
          border-radius: 3px;
          height: 100%;
        }
        `}),e.jsx("a",{className:"codepen-btn",children:e.jsx("span",{children:"Start Coding"})})]})})}const dn=`import React from 'react';

const SparkleSwitch = () => {
  return (
    <div className="sparkle-switch-wrapper">
      <style>
        {\`
        .sparkle-switch-wrapper .sparkle-toggle-cont {
          --primary: #54a8fc;
          --light: #d9d9d9;
          --dark: #121212;
          --gray: #414344;
          --second: #777777; /* Defined missing variable */

          position: relative;
          z-index: 10;
          width: fit-content;
          height: 50px;
          border-radius: 9999px;
        }

        .sparkle-switch-wrapper .sparkle-toggle-input {
          display: none;
        }

        .sparkle-switch-wrapper .sparkle-toggle-label {
          --gap: 5px;
          --width: 50px;
          cursor: pointer;
          position: relative;
          display: inline-block;
          padding: 0.5rem;
          width: calc((var(--width) + var(--gap)) * 2);
          height: 100%;
          background-color: var(--dark);
          border: 1px solid #777777;
          border-bottom: 0;
          border-radius: 9999px;
          box-sizing: content-box;
          transition: all 0.3s ease-in-out;
        }

        .sparkle-switch-wrapper .sparkle-toggle-label::before {
          content: "";
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 1.5rem);
          height: calc(100% + 1.5rem);
          background-color: var(--gray);
          border: 1px solid #777777;
          border-bottom: 0;
          border-radius: 9999px;
          transition: all 0.3s ease-in-out;
        }

        .sparkle-switch-wrapper .sparkle-toggle-label::after {
          content: "";
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
            circle at 50% -100%,
            rgb(58, 155, 252) 0%,
            rgba(12, 12, 12, 1) 80%
          );
          border-radius: 9999px;
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont .sparkle-toggle-label .sparkle-cont-icon {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: var(--width);
          height: 50px;
          background-image: radial-gradient(
            circle at 50% 0%,
            #666666 0%,
            var(--gray) 100%
          );
          border: 1px solid #aaaaaa;
          border-bottom: 0;
          border-radius: 9999px;
          box-shadow: inset 0 -0.15rem 0.15rem var(--primary),
            inset 0 0 0.5rem 0.75rem var(--second);
          transition: transform 0.3s ease-in-out;
          overflow: clip;
        }

        .sparkle-switch-wrapper .sparkle-sparkle {
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: calc(var(--width) * 1px);
          aspect-ratio: 1;
          background-color: var(--light);
          border-radius: 50%;
          transform-origin: 50% 50%;
          rotate: calc(1deg * var(--deg));
          transform: translate(-50%, -50%);
          animation: sparkle-anim calc(100s / var(--duration)) linear
            calc(0s / var(--duration)) infinite;
        }

        @keyframes sparkle-anim {
          to {
            width: calc(var(--width) * 0.5px);
            transform: translate(2000%, -50%);
          }
        }

        .sparkle-switch-wrapper .sparkle-icon {
          width: 1.1rem;
          fill: var(--light);
        }

        /* Checked State Logic (Replacing @container for standard support) */
        
        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-toggle-label {
          background-color: #41434400;
          border: 1px solid #3d6970;
          border-bottom: 0;
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-toggle-label::before {
          box-shadow: 0 1rem 2.5rem -2rem #0080ff;
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-cont-icon {
          overflow: visible;
          background-image: radial-gradient(
            circle at 50% 0%,
            #045ab1 0%,
            var(--primary) 100%
          );
          border: 1px solid var(--primary);
          border-bottom: 0;
          transform: translateX(calc((var(--gap) * 2) + 100%)) rotate(-225deg);
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-cont-icon .sparkle-sparkle {
          z-index: -10;
          width: calc(var(--width) * 1.5px);
          background-color: #acacac;
          animation: sparkle-anim calc(100s / var(--duration)) linear
            calc(10s / var(--duration)) infinite;
        }

        /* Adjust sparkle animation for checked state if needed, using the same keyframe mostly */
        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-cont-icon .sparkle-sparkle {
             /* Reuse simple sparkle animation logic but let CSS vars handle speed */
        }
        
        /* Specific override for animation end state in checked mode if different? 
           The original used the same 'sparkle' keyframe but with different width target? 
           Original had @container ... @keyframes sparkle { to { width: ... translate(5000%...) } } 
           We need a separate keyframe for the checked state if the destination is different.
        */
        
        @keyframes sparkle-anim-checked {
          to {
             width: calc(var(--width) * 1px);
             transform: translate(5000%, -50%);
          }
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-cont-icon .sparkle-sparkle {
            animation-name: sparkle-anim-checked;
        }

        \`}
      </style>
      <div className="sparkle-toggle-cont">
        <input className="sparkle-toggle-input" id="sparkle-toggle" name="sparkle-toggle" type="checkbox" />
        <label className="sparkle-toggle-label" htmlFor="sparkle-toggle">
          <div className="sparkle-cont-icon">
             {[
                { w: 2, d: 25, t: 11 }, { w: 1, d: 100, t: 18 }, { w: 1, d: 280, t: 5 },
                { w: 2, d: 200, t: 3 }, { w: 2, d: 30, t: 20 }, { w: 2, d: 300, t: 9 },
                { w: 1, d: 250, t: 4 }, { w: 2, d: 210, t: 8 }, { w: 2, d: 100, t: 9 },
                { w: 1, d: 15, t: 13 }, { w: 1, d: 75, t: 18 }, { w: 2, d: 65, t: 6 },
                { w: 2, d: 50, t: 7 }, { w: 1, d: 320, t: 5 }, { w: 1, d: 220, t: 5 },
                { w: 1, d: 215, t: 2 }, { w: 2, d: 135, t: 9 }, { w: 2, d: 45, t: 4 },
                { w: 1, d: 78, t: 16 }, { w: 1, d: 89, t: 19 }, { w: 2, d: 65, t: 14 },
                { w: 2, d: 97, t: 1 }, { w: 1, d: 174, t: 10 }, { w: 1, d: 236, t: 5 }
             ].map((s, i) => (
                <span key={i} style={{ '--width': s.w, '--deg': s.d, '--duration': s.t } as React.CSSProperties} className="sparkle-sparkle" />
             ))}
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="sparkle-icon">
              <path d="M0.96233 28.61C1.36043 29.0081 1.96007 29.1255 2.47555 28.8971L10.4256 25.3552C13.2236 24.11 16.4254 24.1425 19.2107 25.4401L27.4152 29.2747C27.476 29.3044 27.5418 29.3023 27.6047 29.32C27.6563 29.3348 27.7079 29.3497 27.761 29.3574C27.843 29.3687 27.9194 29.3758 28 29.3688C28.1273 29.3617 28.2531 29.3405 28.3726 29.2945C28.4447 29.262 28.5162 29.2287 28.5749 29.1842C28.6399 29.1446 28.6993 29.0994 28.7509 29.0477L28.9008 28.8582C28.9468 28.7995 28.9793 28.7274 29.0112 28.656C29.0599 28.5322 29.0811 28.4036 29.0882 28.2734C29.0939 28.1957 29.0868 28.1207 29.0769 28.0415C29.0705 27.9955 29.0585 27.9524 29.0472 27.9072C29.0295 27.8343 29.0302 27.7601 28.9984 27.6901L25.1638 19.4855C23.8592 16.7073 23.8273 13.5048 25.0726 10.7068L28.6145 2.75679C28.8429 2.24131 28.7318 1.63531 28.3337 1.2372C27.9165 0.820011 27.271 0.721743 26.7491 0.9961L19.8357 4.59596C16.8418 6.15442 13.2879 6.18696 10.2615 4.70062L1.80308 0.520214C1.7055 0.474959 1.60722 0.441742 1.50964 0.421943C1.44459 0.409215 1.37882 0.395769 1.3074 0.402133C1.14406 0.395769 0.981436 0.428275 0.818095 0.499692C0.77284 0.519491 0.719805 0.545671 0.67455 0.578198C0.596061 0.617088 0.524653 0.675786 0.4596 0.74084C0.394546 0.805894 0.335843 0.877306 0.296245 0.956502C0.263718 1.00176 0.237561 1.05477 0.217762 1.10003C0.152708 1.24286 0.126545 1.40058 0.120181 1.54978C0.120181 1.61483 0.126527 1.6735 0.132891 1.73219C0.15269 1.85664 0.178881 1.97332 0.237571 2.08434L4.41798 10.5427C5.91139 13.5621 5.8725 17.1238 4.3204 20.1099L0.720514 27.0233C0.440499 27.5536 0.545137 28.1928 0.96233 28.61Z" />
            </svg>
          </div>
        </label>
      </div>
    </div>
  );
}

export default SparkleSwitch;
`;function pn(){return e.jsx(k,{title:"Sparkle Switch",code:dn,className:"flex items-center justify-center p-12 min-h-[300px]",children:e.jsxs("div",{className:"sparkle-switch-wrapper",children:[e.jsx("style",{children:`
        .sparkle-switch-wrapper .sparkle-toggle-cont {
          --primary: #54a8fc;
          --light: #d9d9d9;
          --dark: #121212;
          --gray: #414344;
          --second: #777777;

          position: relative;
          z-index: 10;
          width: fit-content;
          height: 50px;
          border-radius: 9999px;
        }

        .sparkle-switch-wrapper .sparkle-toggle-input {
          display: none;
        }

        .sparkle-switch-wrapper .sparkle-toggle-label {
          --gap: 5px;
          --width: 50px;
          cursor: pointer;
          position: relative;
          display: inline-block;
          padding: 0.5rem;
          width: calc((var(--width) + var(--gap)) * 2);
          height: 100%;
          background-color: var(--dark);
          border: 1px solid #777777;
          border-bottom: 0;
          border-radius: 9999px;
          box-sizing: content-box;
          transition: all 0.3s ease-in-out;
        }

        .sparkle-switch-wrapper .sparkle-toggle-label::before {
          content: "";
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 1.5rem);
          height: calc(100% + 1.5rem);
          background-color: var(--gray);
          border: 1px solid #777777;
          border-bottom: 0;
          border-radius: 9999px;
          transition: all 0.3s ease-in-out;
        }

        .sparkle-switch-wrapper .sparkle-toggle-label::after {
          content: "";
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
            circle at 50% -100%,
            rgb(58, 155, 252) 0%,
            rgba(12, 12, 12, 1) 80%
          );
          border-radius: 9999px;
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont .sparkle-toggle-label .sparkle-cont-icon {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: var(--width);
          height: 50px;
          background-image: radial-gradient(
            circle at 50% 0%,
            #666666 0%,
            var(--gray) 100%
          );
          border: 1px solid #aaaaaa;
          border-bottom: 0;
          border-radius: 9999px;
          box-shadow: inset 0 -0.15rem 0.15rem var(--primary),
            inset 0 0 0.5rem 0.75rem var(--second);
          transition: transform 0.3s ease-in-out;
          overflow: clip;
        }

        .sparkle-switch-wrapper .sparkle-sparkle {
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: calc(var(--width) * 1px);
          aspect-ratio: 1;
          background-color: var(--light);
          border-radius: 50%;
          transform-origin: 50% 50%;
          rotate: calc(1deg * var(--deg));
          transform: translate(-50%, -50%);
          animation: sparkle-anim calc(100s / var(--duration)) linear
            calc(0s / var(--duration)) infinite;
        }

        @keyframes sparkle-anim {
          to {
            width: calc(var(--width) * 0.5px);
            transform: translate(2000%, -50%);
          }
        }
        
        @keyframes sparkle-anim-checked {
          to {
             width: calc(var(--width) * 1px);
             transform: translate(5000%, -50%);
          }
        }

        .sparkle-switch-wrapper .sparkle-icon {
          width: 1.1rem;
          fill: var(--light);
        }

        /* Checked Logic */
        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-toggle-label {
          background-color: #41434400;
          border: 1px solid #3d6970;
          border-bottom: 0;
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-toggle-label::before {
          box-shadow: 0 1rem 2.5rem -2rem #0080ff;
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-cont-icon {
          overflow: visible;
          background-image: radial-gradient(
            circle at 50% 0%,
            #045ab1 0%,
            var(--primary) 100%
          );
          border: 1px solid var(--primary);
          border-bottom: 0;
          transform: translateX(calc((var(--gap) * 2) + 100%)) rotate(-225deg);
        }

        .sparkle-switch-wrapper .sparkle-toggle-cont:has(.sparkle-toggle-input:checked) .sparkle-cont-icon .sparkle-sparkle {
          z-index: -10;
          width: calc(var(--width) * 1.5px);
          background-color: #acacac;
          animation: sparkle-anim-checked calc(100s / var(--duration)) linear
            calc(10s / var(--duration)) infinite;
        }

        `}),e.jsxs("div",{className:"sparkle-toggle-cont",children:[e.jsx("input",{className:"sparkle-toggle-input",id:"sparkle-toggle-demo",name:"sparkle-toggle",type:"checkbox"}),e.jsx("label",{className:"sparkle-toggle-label",htmlFor:"sparkle-toggle-demo",children:e.jsxs("div",{className:"sparkle-cont-icon",children:[[{w:2,d:25,t:11},{w:1,d:100,t:18},{w:1,d:280,t:5},{w:2,d:200,t:3},{w:2,d:30,t:20},{w:2,d:300,t:9},{w:1,d:250,t:4},{w:2,d:210,t:8},{w:2,d:100,t:9},{w:1,d:15,t:13},{w:1,d:75,t:18},{w:2,d:65,t:6},{w:2,d:50,t:7},{w:1,d:320,t:5},{w:1,d:220,t:5},{w:1,d:215,t:2},{w:2,d:135,t:9},{w:2,d:45,t:4},{w:1,d:78,t:16},{w:1,d:89,t:19},{w:2,d:65,t:14},{w:2,d:97,t:1},{w:1,d:174,t:10},{w:1,d:236,t:5}].map((l,t)=>e.jsx("span",{style:{"--width":l.w,"--deg":l.d,"--duration":l.t},className:"sparkle-sparkle"},t)),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",className:"sparkle-icon",children:e.jsx("path",{d:"M0.96233 28.61C1.36043 29.0081 1.96007 29.1255 2.47555 28.8971L10.4256 25.3552C13.2236 24.11 16.4254 24.1425 19.2107 25.4401L27.4152 29.2747C27.476 29.3044 27.5418 29.3023 27.6047 29.32C27.6563 29.3348 27.7079 29.3497 27.761 29.3574C27.843 29.3687 27.9194 29.3758 28 29.3688C28.1273 29.3617 28.2531 29.3405 28.3726 29.2945C28.4447 29.262 28.5162 29.2287 28.5749 29.1842C28.6399 29.1446 28.6993 29.0994 28.7509 29.0477L28.9008 28.8582C28.9468 28.7995 28.9793 28.7274 29.0112 28.656C29.0599 28.5322 29.0811 28.4036 29.0882 28.2734C29.0939 28.1957 29.0868 28.1207 29.0769 28.0415C29.0705 27.9955 29.0585 27.9524 29.0472 27.9072C29.0295 27.8343 29.0302 27.7601 28.9984 27.6901L25.1638 19.4855C23.8592 16.7073 23.8273 13.5048 25.0726 10.7068L28.6145 2.75679C28.8429 2.24131 28.7318 1.63531 28.3337 1.2372C27.9165 0.820011 27.271 0.721743 26.7491 0.9961L19.8357 4.59596C16.8418 6.15442 13.2879 6.18696 10.2615 4.70062L1.80308 0.520214C1.7055 0.474959 1.60722 0.441742 1.50964 0.421943C1.44459 0.409215 1.37882 0.395769 1.3074 0.402133C1.14406 0.395769 0.981436 0.428275 0.818095 0.499692C0.77284 0.519491 0.719805 0.545671 0.67455 0.578198C0.596061 0.617088 0.524653 0.675786 0.4596 0.74084C0.394546 0.805894 0.335843 0.877306 0.296245 0.956502C0.263718 1.00176 0.237561 1.05477 0.217762 1.10003C0.152708 1.24286 0.126545 1.40058 0.120181 1.54978C0.120181 1.61483 0.126527 1.6735 0.132891 1.73219C0.15269 1.85664 0.178881 1.97332 0.237571 2.08434L4.41798 10.5427C5.91139 13.5621 5.8725 17.1238 4.3204 20.1099L0.720514 27.0233C0.440499 27.5536 0.545137 28.1928 0.96233 28.61Z"})})]})})]})]})})}const hn=`import React from 'react';

const DayNightSwitch = () => {
  return (
    <div className="dn-switch-wrapper">
      <style>
        {\`
        .dn-switch-wrapper .dn-switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .dn-switch-wrapper #dn-input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .dn-switch-wrapper .dn-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #2196f3;
          transition: 0.4s;
          z-index: 0;
          overflow: hidden;
        }

        .dn-switch-wrapper .dn-sun-moon {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: yellow;
          transition: 0.4s;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider {
          background-color: black;
        }

        .dn-switch-wrapper #dn-input:focus + .dn-slider {
          box-shadow: 0 0 1px #2196f3;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-sun-moon {
          transform: translateX(26px);
          background-color: white;
          animation: dn-rotate-center 0.6s ease-in-out both;
        }

        .dn-switch-wrapper .dn-moon-dot {
          opacity: 0;
          transition: 0.4s;
          fill: gray;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-sun-moon .dn-moon-dot {
          opacity: 1;
        }

        .dn-switch-wrapper .dn-slider.dn-round {
          border-radius: 34px;
        }

        .dn-switch-wrapper .dn-slider.dn-round .dn-sun-moon {
          border-radius: 50%;
        }

        .dn-switch-wrapper #dn-moon-dot-1 {
          left: 10px;
          top: 3px;
          position: absolute;
          width: 6px;
          height: 6px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-moon-dot-2 {
          left: 2px;
          top: 10px;
          position: absolute;
          width: 10px;
          height: 10px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-moon-dot-3 {
          left: 16px;
          top: 18px;
          position: absolute;
          width: 3px;
          height: 3px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-light-ray-1 {
          left: -8px;
          top: -8px;
          position: absolute;
          width: 43px;
          height: 43px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper #dn-light-ray-2 {
          left: -50%;
          top: -50%;
          position: absolute;
          width: 55px;
          height: 55px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper #dn-light-ray-3 {
          left: -18px;
          top: -18px;
          position: absolute;
          width: 60px;
          height: 60px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper .dn-cloud-light {
          position: absolute;
          fill: #eee;
          animation-name: dn-cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
        }

        .dn-switch-wrapper .dn-cloud-dark {
          position: absolute;
          fill: #ccc;
          animation-name: dn-cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-delay: 1s;
        }

        .dn-switch-wrapper #dn-cloud-1 {
          left: 30px;
          top: 15px;
          width: 40px;
        }

        .dn-switch-wrapper #dn-cloud-2 {
          left: 44px;
          top: 10px;
          width: 20px;
        }

        .dn-switch-wrapper #dn-cloud-3 {
          left: 18px;
          top: 24px;
          width: 30px;
        }

        .dn-switch-wrapper #dn-cloud-4 {
          left: 36px;
          top: 18px;
          width: 40px;
        }

        .dn-switch-wrapper #dn-cloud-5 {
          left: 48px;
          top: 14px;
          width: 20px;
        }

        .dn-switch-wrapper #dn-cloud-6 {
          left: 22px;
          top: 26px;
          width: 30px;
        }

        @keyframes dn-cloud-move {
          0% { transform: translateX(0px); }
          40% { transform: translateX(4px); }
          80% { transform: translateX(-4px); }
          100% { transform: translateX(0px); }
        }

        .dn-switch-wrapper .dn-stars {
          transform: translateY(-32px);
          opacity: 0;
          transition: 0.4s;
        }

        .dn-switch-wrapper .dn-star {
          fill: white;
          position: absolute;
          transition: 0.4s;
          animation-name: dn-star-twinkle;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-stars {
          transform: translateY(0);
          opacity: 1;
        }

        .dn-switch-wrapper #dn-star-1 {
          width: 20px;
          top: 2px;
          left: 3px;
          animation-delay: 0.3s;
        }

        .dn-switch-wrapper #dn-star-2 {
          width: 6px;
          top: 16px;
          left: 3px;
        }

        .dn-switch-wrapper #dn-star-3 {
          width: 12px;
          top: 20px;
          left: 10px;
          animation-delay: 0.6s;
        }

        .dn-switch-wrapper #dn-star-4 {
          width: 18px;
          top: 0px;
          left: 18px;
          animation-delay: 1.3s;
        }

        @keyframes dn-star-twinkle {
          0% { transform: scale(1); }
          40% { transform: scale(1.2); }
          80% { transform: scale(0.8); }
          100% { transform: scale(1); }
        }

        @keyframes dn-rotate-center {
          0% { transform: rotate(0); translateX(26px); }
          100% { transform: rotate(360deg) translateX(26px); }
        }
        \`}
      </style>
      <label className="dn-switch">
        <input id="dn-input" type="checkbox" defaultChecked />
        <div className="dn-slider dn-round">
          <div className="dn-sun-moon">
            <svg id="dn-moon-dot-1" className="dn-moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-moon-dot-2" className="dn-moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-moon-dot-3" className="dn-moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-light-ray-1" className="dn-light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-light-ray-2" className="dn-light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-light-ray-3" className="dn-light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-1" className="dn-cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-2" className="dn-cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-3" className="dn-cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-4" className="dn-cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-5" className="dn-cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="dn-cloud-6" className="dn-cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
          </div>
          <div className="dn-stars">
            <svg id="dn-star-1" className="dn-star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="dn-star-2" className="dn-star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="dn-star-3" className="dn-star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="dn-star-4" className="dn-star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
}

export default DayNightSwitch;
`;function mn(){return e.jsx(k,{title:"Day/Night Switch",code:hn,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"dn-switch-wrapper",children:[e.jsx("style",{children:`
        .dn-switch-wrapper .dn-switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .dn-switch-wrapper #dn-input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .dn-switch-wrapper .dn-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #2196f3;
          transition: 0.4s;
          z-index: 0;
          overflow: hidden;
        }

        .dn-switch-wrapper .dn-sun-moon {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: yellow;
          transition: 0.4s;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider {
          background-color: black;
        }

        .dn-switch-wrapper #dn-input:focus + .dn-slider {
          box-shadow: 0 0 1px #2196f3;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-sun-moon {
          transform: translateX(26px);
          background-color: white;
          animation: dn-rotate-center 0.6s ease-in-out both;
        }

        .dn-switch-wrapper .dn-moon-dot {
          opacity: 0;
          transition: 0.4s;
          fill: gray;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-sun-moon .dn-moon-dot {
          opacity: 1;
        }

        .dn-switch-wrapper .dn-slider.dn-round {
          border-radius: 34px;
        }

        .dn-switch-wrapper .dn-slider.dn-round .dn-sun-moon {
          border-radius: 50%;
        }

        .dn-switch-wrapper #dn-moon-dot-1 {
          left: 10px;
          top: 3px;
          position: absolute;
          width: 6px;
          height: 6px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-moon-dot-2 {
          left: 2px;
          top: 10px;
          position: absolute;
          width: 10px;
          height: 10px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-moon-dot-3 {
          left: 16px;
          top: 18px;
          position: absolute;
          width: 3px;
          height: 3px;
          z-index: 4;
        }

        .dn-switch-wrapper #dn-light-ray-1 {
          left: -8px;
          top: -8px;
          position: absolute;
          width: 43px;
          height: 43px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper #dn-light-ray-2 {
          left: -50%;
          top: -50%;
          position: absolute;
          width: 55px;
          height: 55px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper #dn-light-ray-3 {
          left: -18px;
          top: -18px;
          position: absolute;
          width: 60px;
          height: 60px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }

        .dn-switch-wrapper .dn-cloud-light {
          position: absolute;
          fill: #eee;
          animation-name: dn-cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
        }

        .dn-switch-wrapper .dn-cloud-dark {
          position: absolute;
          fill: #ccc;
          animation-name: dn-cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-delay: 1s;
        }

        .dn-switch-wrapper #dn-cloud-1 {
          left: 30px;
          top: 15px;
          width: 40px;
        }

        .dn-switch-wrapper #dn-cloud-2 {
          left: 44px;
          top: 10px;
          width: 20px;
        }

        .dn-switch-wrapper #dn-cloud-3 {
          left: 18px;
          top: 24px;
          width: 30px;
        }

        .dn-switch-wrapper #dn-cloud-4 {
          left: 36px;
          top: 18px;
          width: 40px;
        }

        .dn-switch-wrapper #dn-cloud-5 {
          left: 48px;
          top: 14px;
          width: 20px;
        }

        .dn-switch-wrapper #dn-cloud-6 {
          left: 22px;
          top: 26px;
          width: 30px;
        }

        @keyframes dn-cloud-move {
          0% { transform: translateX(0px); }
          40% { transform: translateX(4px); }
          80% { transform: translateX(-4px); }
          100% { transform: translateX(0px); }
        }

        .dn-switch-wrapper .dn-stars {
          transform: translateY(-32px);
          opacity: 0;
          transition: 0.4s;
        }

        .dn-switch-wrapper .dn-star {
          fill: white;
          position: absolute;
          transition: 0.4s;
          animation-name: dn-star-twinkle;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        .dn-switch-wrapper #dn-input:checked + .dn-slider .dn-stars {
          transform: translateY(0);
          opacity: 1;
        }

        .dn-switch-wrapper #dn-star-1 {
          width: 20px;
          top: 2px;
          left: 3px;
          animation-delay: 0.3s;
        }

        .dn-switch-wrapper #dn-star-2 {
          width: 6px;
          top: 16px;
          left: 3px;
        }

        .dn-switch-wrapper #dn-star-3 {
          width: 12px;
          top: 20px;
          left: 10px;
          animation-delay: 0.6s;
        }

        .dn-switch-wrapper #dn-star-4 {
          width: 18px;
          top: 0px;
          left: 18px;
          animation-delay: 1.3s;
        }

        @keyframes dn-star-twinkle {
          0% { transform: scale(1); }
          40% { transform: scale(1.2); }
          80% { transform: scale(0.8); }
          100% { transform: scale(1); }
        }

        @keyframes dn-rotate-center {
          0% { transform: rotate(0); translateX(26px); }
          100% { transform: rotate(360deg) translateX(26px); }
        }
        `}),e.jsxs("label",{className:"dn-switch",children:[e.jsx("input",{id:"dn-input",type:"checkbox",defaultChecked:!0}),e.jsxs("div",{className:"dn-slider dn-round",children:[e.jsxs("div",{className:"dn-sun-moon",children:[e.jsx("svg",{id:"dn-moon-dot-1",className:"dn-moon-dot",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-moon-dot-2",className:"dn-moon-dot",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-moon-dot-3",className:"dn-moon-dot",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-light-ray-1",className:"dn-light-ray",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-light-ray-2",className:"dn-light-ray",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-light-ray-3",className:"dn-light-ray",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-cloud-1",className:"dn-cloud-dark",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-cloud-2",className:"dn-cloud-dark",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-cloud-3",className:"dn-cloud-dark",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-cloud-4",className:"dn-cloud-light",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-cloud-5",className:"dn-cloud-light",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})}),e.jsx("svg",{id:"dn-cloud-6",className:"dn-cloud-light",viewBox:"0 0 100 100",children:e.jsx("circle",{cx:50,cy:50,r:50})})]}),e.jsxs("div",{className:"dn-stars",children:[e.jsx("svg",{id:"dn-star-1",className:"dn-star",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"})}),e.jsx("svg",{id:"dn-star-2",className:"dn-star",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"})}),e.jsx("svg",{id:"dn-star-3",className:"dn-star",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"})}),e.jsx("svg",{id:"dn-star-4",className:"dn-star",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"})})]})]})]})]})})}const fn=`import React from 'react';

const WhatsAppButton = () => {
  return (
    <div className="wa-btn-wrapper">
      <style>
        {\`
        .wa-btn-wrapper .wa-btn {
          color: rgb(53, 188, 250);
          padding: 1em 2em 1em 2em;
          border: 2px solid rgb(53, 188, 250);
          border-radius: 0 1em 1em 1em;
          position: relative;
          overflow: hidden;
          transition: 0.3s;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wa-btn-wrapper .wa-btn:hover {
          border: 2px solid rgb(75, 228, 157);
        }

        .wa-btn-wrapper .wa-span {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgb(75, 228, 157);
          transition: ease-in-out 0.3s;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1em;
        }

        .wa-btn-wrapper .wa-span svg {
          width: 1.1em;
          height: 1.1em;
          margin-right: 0.5em;
        }

        .wa-btn-wrapper .wa-btn:hover .wa-span {
          left: 0%;
        }
        \`}
      </style>
      <button className="wa-btn">
        <p className="m-0">Let's talk</p>
        <span className="wa-span">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          Message
        </span>
      </button>
    </div>
  );
}

export default WhatsAppButton;
`;function xn(){return e.jsx(k,{title:"WhatsApp Button",code:fn,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"wa-btn-wrapper",children:[e.jsx("style",{children:`
        .wa-btn-wrapper .wa-btn {
          color: rgb(53, 188, 250);
          padding: 1em 2em 1em 2em;
          border: 2px solid rgb(53, 188, 250);
          border-radius: 0 1em 1em 1em;
          position: relative;
          overflow: hidden;
          transition: 0.3s;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wa-btn-wrapper .wa-btn:hover {
          border: 2px solid rgb(75, 228, 157);
        }

        .wa-btn-wrapper .wa-span {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgb(75, 228, 157);
          transition: ease-in-out 0.3s;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1em;
        }

        .wa-btn-wrapper .wa-span svg {
          width: 1.1em;
          height: 1.1em;
          margin-right: 0.5em;
        }

        .wa-btn-wrapper .wa-btn:hover .wa-span {
          left: 0%;
        }
        `}),e.jsxs("button",{className:"wa-btn",children:[e.jsx("p",{className:"m-0",children:"Let's talk"}),e.jsxs("span",{className:"wa-span",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-whatsapp",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})}),"Message"]})]})]})})}const gn=`import React from 'react';

const StarButton = () => {
  return (
    <div className="star-button-wrapper">
      <style>
        {\`
        @keyframes star-border-glow-translate {
          0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
        }
        @keyframes star-border-glow-scale {
          0% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.2); }
          100% { transform: translateX(-50%) scale(1); }
        }
        @keyframes star-btn-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes star-shine {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.2); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
        
        .star-button-wrapper .star-button {
             /* Custom styles if needed to supplement Tailwind */
        }
        \`}
      </style>
      <button className="group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden cursor-pointer">
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span className="inset-0 absolute pointer-events-none select-none">
            <span className="block -translate-x-1/2 -translate-y-1/3 w-24 h-24 blur-xl" style={{background: 'linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))', position: 'absolute', top: '50%', left: '50%', animation: 'star-border-glow-translate 10s ease-in-out infinite alternate'}} />
          </span>
        </span>
        <span className="inset-0 absolute pointer-events-none select-none">
          <span className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full" style={{animation: 'star-border-glow-scale 10s ease-in-out infinite alternate', background: 'linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))', position: 'absolute', left: '50%'}} />
        </span>
        <span className="flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-full py-2 px-4 pl-2 w-full">
          <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80 dark:opacity-100" style={{animation: 'star-btn-rotate 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate'}}>
              <path d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z" fill="url(#star-btn-paint0_linear)" stroke="url(#star-btn-paint1_linear)" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="star-btn-paint0_linear" x1="-0.5" y1={9} x2="15.5" y2="-1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7A69F9" />
                  <stop offset="0.575" stopColor="#F26378" />
                  <stop offset={1} stopColor="#F5833F" />
                </linearGradient>
                <linearGradient id="star-btn-paint1_linear" x1="-0.5" y1={9} x2="15.5" y2="-1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7A69F9" />
                  <stop offset="0.575" stopColor="#F26378" />
                  <stop offset={1} stopColor="#F5833F" />
                </linearGradient>
              </defs>
            </svg>
            <span className="rounded-full w-11 h-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg" style={{animation: 'star-shine 14s ease-in-out infinite alternate', background: 'linear-gradient(135deg, rgb(59, 196, 242), rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))'}} />
          </span>
          <span className="bg-gradient-to-b ml-1.5 dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu font-bold">
            Star on Github
          </span>
        </span>
      </button>
    </div>
  );
}

export default StarButton;
`;function un(){return e.jsx(k,{title:"Star Button",code:gn,className:"flex items-center justify-center p-12",children:e.jsxs("div",{className:"star-button-wrapper",children:[e.jsx("style",{children:`
        @keyframes star-border-glow-translate {
          0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
        }
        @keyframes star-border-glow-scale {
          0% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.2); }
          100% { transform: translateX(-50%) scale(1); }
        }
        @keyframes star-btn-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes star-shine {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.2); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
        `}),e.jsxs("button",{className:"group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden cursor-pointer",onClick:()=>window.open("https://github.com/vihisantos","_blank"),children:[e.jsx("span",{className:"absolute inset-0 rounded-full overflow-hidden",children:e.jsx("span",{className:"inset-0 absolute pointer-events-none select-none",children:e.jsx("span",{className:"block -translate-x-1/2 -translate-y-1/3 w-24 h-24 blur-xl",style:{background:"linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))",position:"absolute",top:"50%",left:"50%",animation:"star-border-glow-translate 10s ease-in-out infinite alternate"}})})}),e.jsx("span",{className:"inset-0 absolute pointer-events-none select-none",children:e.jsx("span",{className:"block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full",style:{animation:"star-border-glow-scale 10s ease-in-out infinite alternate",background:"linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))",position:"absolute",left:"50%"}})}),e.jsxs("span",{className:"flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-full py-2 px-4 pl-2 w-full",children:[e.jsxs("span",{className:"relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500",children:[e.jsxs("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"opacity-80 dark:opacity-100",style:{animation:"star-btn-rotate 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate"},children:[e.jsx("path",{d:"M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z",fill:"url(#star-btn-paint0_linear)",stroke:"url(#star-btn-paint1_linear)",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"star-btn-paint0_linear",x1:"-0.5",y1:9,x2:"15.5",y2:"-1.5",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#7A69F9"}),e.jsx("stop",{offset:"0.575",stopColor:"#F26378"}),e.jsx("stop",{offset:1,stopColor:"#F5833F"})]}),e.jsxs("linearGradient",{id:"star-btn-paint1_linear",x1:"-0.5",y1:9,x2:"15.5",y2:"-1.5",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#7A69F9"}),e.jsx("stop",{offset:"0.575",stopColor:"#F26378"}),e.jsx("stop",{offset:1,stopColor:"#F5833F"})]})]})]}),e.jsx("span",{className:"rounded-full w-11 h-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg",style:{animation:"star-shine 14s ease-in-out infinite alternate",background:"linear-gradient(135deg, rgb(59, 196, 242), rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))"}})]}),e.jsx("span",{className:"bg-gradient-to-b ml-1.5 dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu font-bold",children:"Star on Github"})]})]})]})})}const bn=`import React from 'react';

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
`;function vn(){return e.jsx(k,{title:"Star Rating",code:bn,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"sr-wrapper",children:[e.jsx("style",{children:`
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
        `}),e.jsxs("div",{className:"sr-rating",children:[e.jsx("input",{type:"radio",id:"sr-star-5",name:"sr-star-radio",defaultValue:"5"}),e.jsx("label",{htmlFor:"sr-star-5",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e.jsx("path",{pathLength:360,d:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"})})}),e.jsx("input",{type:"radio",id:"sr-star-4",name:"sr-star-radio",defaultValue:"4"}),e.jsx("label",{htmlFor:"sr-star-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e.jsx("path",{pathLength:360,d:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"})})}),e.jsx("input",{type:"radio",id:"sr-star-3",name:"sr-star-radio",defaultValue:"3"}),e.jsx("label",{htmlFor:"sr-star-3",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e.jsx("path",{pathLength:360,d:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"})})}),e.jsx("input",{type:"radio",id:"sr-star-2",name:"sr-star-radio",defaultValue:"2"}),e.jsx("label",{htmlFor:"sr-star-2",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e.jsx("path",{pathLength:360,d:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"})})}),e.jsx("input",{type:"radio",id:"sr-star-1",name:"sr-star-radio",defaultValue:"1"}),e.jsx("label",{htmlFor:"sr-star-1",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e.jsx("path",{pathLength:360,d:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"})})})]})]})})}const wn=`import React from 'react';

const RGBButton = () => {
  return (
    <div className="rgb-button-wrapper">
      <style>
        {\`
        .rgb-button-wrapper .rgb-gradient-button {
          position: relative;
          padding: 16px 32px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 50px;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .rgb-button-wrapper .rgb-gradient-button:hover {
          transform: scale(1.03);
        }

        .rgb-button-wrapper .rgb-gradient-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #feca57,
            #ff9ff3,
            #ff6b6b
          );
          z-index: -2;
          filter: blur(10px);
          transform: rotate(0deg);
          transition: transform 1.5s ease-in-out;
        }

        .rgb-button-wrapper .rgb-gradient-button:hover::before {
          transform: rotate(180deg);
        }

        .rgb-button-wrapper .rgb-gradient-button::after {
          content: "";
          position: absolute;
          inset: 3px;
          background: black;
          border-radius: 47px;
          z-index: -1;
          filter: blur(5px);
        }

        .rgb-button-wrapper .rgb-gradient-text {
          color: transparent;
          background: conic-gradient(
            from 0deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #feca57,
            #ff9ff3,
            #ff6b6b
          );
          background-clip: text;
          -webkit-background-clip: text; /* Added for compatibility */
          filter: hue-rotate(0deg);
        }

        .rgb-button-wrapper .rgb-gradient-button:hover .rgb-gradient-text {
          animation: rgb-hue-rotating 2s linear infinite;
        }

        .rgb-button-wrapper .rgb-gradient-button:active {
          transform: scale(0.99);
        }

        @keyframes rgb-hue-rotating {
          to {
            filter: hue-rotate(360deg);
          }
        }
        \`}
      </style>
      <button className="rgb-gradient-button">
        <span className="rgb-gradient-text">Simple text</span>
      </button>
    </div>
  );
}

export default RGBButton;
`;function yn(){return e.jsx(k,{title:"RGB Button",code:wn,className:"flex items-center justify-center p-12",children:e.jsxs("div",{className:"rgb-button-wrapper",children:[e.jsx("style",{children:`
        .rgb-button-wrapper .rgb-gradient-button {
          position: relative;
          padding: 16px 32px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 50px;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .rgb-button-wrapper .rgb-gradient-button:hover {
          transform: scale(1.03);
        }

        .rgb-button-wrapper .rgb-gradient-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #feca57,
            #ff9ff3,
            #ff6b6b
          );
          z-index: -2;
          filter: blur(10px);
          transform: rotate(0deg);
          transition: transform 1.5s ease-in-out;
        }

        .rgb-button-wrapper .rgb-gradient-button:hover::before {
          transform: rotate(180deg);
        }

        .rgb-button-wrapper .rgb-gradient-button::after {
          content: "";
          position: absolute;
          inset: 3px;
          background: black;
          border-radius: 47px;
          z-index: -1;
          filter: blur(5px);
        }

        .rgb-button-wrapper .rgb-gradient-text {
          color: transparent;
          background: conic-gradient(
            from 0deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #feca57,
            #ff9ff3,
            #ff6b6b
          );
          background-clip: text;
          -webkit-background-clip: text;
          filter: hue-rotate(0deg);
        }

        .rgb-button-wrapper .rgb-gradient-button:hover .rgb-gradient-text {
          animation: rgb-hue-rotating 2s linear infinite;
        }

        .rgb-button-wrapper .rgb-gradient-button:active {
          transform: scale(0.99);
        }

        @keyframes rgb-hue-rotating {
          to {
            filter: hue-rotate(360deg);
          }
        }
        `}),e.jsx("button",{className:"rgb-gradient-button",children:e.jsx("span",{className:"rgb-gradient-text",children:"Simple text"})})]})})}const kn=`import React from 'react';

const RecipeCard = () => {
  return (
    <div className="recipe-card-wrapper">
      <style>
        {\`
        .recipe-card-wrapper .recipe-card {
          overflow: visible;
          width: 190px;
          height: 254px;
        }

        .recipe-card-wrapper .recipe-content {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 300ms;
          box-shadow: 0px 0px 10px 1px #000000ee;
          border-radius: 5px;
        }

        .recipe-card-wrapper .recipe-front, .recipe-card-wrapper .recipe-back {
          background-color: #151515;
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 5px;
          overflow: hidden;
        }

        .recipe-card-wrapper .recipe-back {
          width: 100%;
          height: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .recipe-card-wrapper .recipe-back::before {
          position: absolute;
          content: ' ';
          display: block;
          width: 160px;
          height: 160%;
          background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
          animation: recipe-rotation 5000ms infinite linear;
        }

        .recipe-card-wrapper .recipe-back-content {
          position: absolute;
          width: 99%;
          height: 99%;
          background-color: #151515;
          border-radius: 5px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;
        }

        .recipe-card-wrapper .recipe-card:hover .recipe-content {
          transform: rotateY(180deg);
        }

        @keyframes recipe-rotation {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }

        .recipe-card-wrapper .recipe-front {
          transform: rotateY(180deg);
          color: white;
        }

        .recipe-card-wrapper .recipe-front .recipe-front-content {
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .recipe-card-wrapper .recipe-front-content .badge {
          background-color: #00000055;
          padding: 2px 10px;
          border-radius: 10px;
          backdrop-filter: blur(2px);
          width: fit-content;
        }

        .recipe-card-wrapper .description {
          box-shadow: 0px 0px 10px 5px #00000088;
          width: 100%;
          padding: 10px;
          background-color: #00000099;
          backdrop-filter: blur(5px);
          border-radius: 5px;
        }

        .recipe-card-wrapper .title {
          font-size: 11px;
          max-width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .recipe-card-wrapper .title p {
          width: 50%;
        }

        .recipe-card-wrapper .card-footer {
          color: #ffffff88;
          margin-top: 5px;
          font-size: 8px;
        }

        .recipe-card-wrapper .recipe-front .img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .recipe-card-wrapper .circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: #ffbb66;
          position: relative;
          filter: blur(15px);
          animation: recipe-floating 2600ms infinite linear;
        }

        .recipe-card-wrapper #recipe-bottom {
          background-color: #ff8866;
          left: 50px;
          top: 0px;
          width: 150px;
          height: 150px;
          animation-delay: -800ms;
        }

        .recipe-card-wrapper #recipe-right {
          background-color: #ff2233;
          left: 160px;
          top: -80px;
          width: 30px;
          height: 30px;
          animation-delay: -1800ms;
        }

        @keyframes recipe-floating {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(10px);
          }

          100% {
            transform: translateY(0px);
          }
        }
        \`}
      </style>
      <div className="recipe-card">
        <div className="recipe-content">
          <div className="recipe-back">
            <div className="recipe-back-content">
              <svg stroke="#ffffff" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
                <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z" />
                </g>
              </svg>
              <strong>Hover Me</strong>
            </div>
          </div>
          <div className="recipe-front">
            <div className="img">
              <div className="circle">
              </div>
              <div className="circle" id="recipe-right">
              </div>
              <div className="circle" id="recipe-bottom">
              </div>
            </div>
            <div className="recipe-front-content">
              <small className="badge">Pasta</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>Spaguetti Bolognese</strong>
                  </p>
                  <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style={{mixBlendMode: 'normal'}} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset={0} strokeDasharray="none" strokeMiterlimit={10} strokeLinejoin="miter" strokeLinecap="butt" strokeWidth={1} stroke="none" fillRule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z" /></g></g></svg>
                </div>
                <p className="card-footer">
                  30 Mins &nbsp; | &nbsp; 1 Serving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
`;function An(){return e.jsx(k,{title:"Recipe Card",code:kn,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"recipe-card-wrapper",children:[e.jsx("style",{children:`
        .recipe-card-wrapper .recipe-card {
          overflow: visible;
          width: 190px;
          height: 254px;
        }

        .recipe-card-wrapper .recipe-content {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 300ms;
          box-shadow: 0px 0px 10px 1px #000000ee;
          border-radius: 5px;
        }

        .recipe-card-wrapper .recipe-front, .recipe-card-wrapper .recipe-back {
          background-color: #151515;
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 5px;
          overflow: hidden;
        }

        .recipe-card-wrapper .recipe-back {
          width: 100%;
          height: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .recipe-card-wrapper .recipe-back::before {
          position: absolute;
          content: ' ';
          display: block;
          width: 160px;
          height: 160%;
          background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
          animation: recipe-rotation 5000ms infinite linear;
        }

        .recipe-card-wrapper .recipe-back-content {
          position: absolute;
          width: 99%;
          height: 99%;
          background-color: #151515;
          border-radius: 5px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;
        }

        .recipe-card-wrapper .recipe-card:hover .recipe-content {
          transform: rotateY(180deg);
        }

        @keyframes recipe-rotation {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }

        .recipe-card-wrapper .recipe-front {
          transform: rotateY(180deg);
          color: white;
        }

        .recipe-card-wrapper .recipe-front .recipe-front-content {
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .recipe-card-wrapper .recipe-front-content .badge {
          background-color: #00000055;
          padding: 2px 10px;
          border-radius: 10px;
          backdrop-filter: blur(2px);
          width: fit-content;
        }

        .recipe-card-wrapper .description {
          box-shadow: 0px 0px 10px 5px #00000088;
          width: 100%;
          padding: 10px;
          background-color: #00000099;
          backdrop-filter: blur(5px);
          border-radius: 5px;
        }

        .recipe-card-wrapper .title {
          font-size: 11px;
          max-width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .recipe-card-wrapper .title p {
          width: 50%;
        }

        .recipe-card-wrapper .card-footer {
          color: #ffffff88;
          margin-top: 5px;
          font-size: 8px;
        }

        .recipe-card-wrapper .recipe-front .img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .recipe-card-wrapper .circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: #ffbb66;
          position: relative;
          filter: blur(15px);
          animation: recipe-floating 2600ms infinite linear;
        }

        .recipe-card-wrapper #recipe-bottom {
          background-color: #ff8866;
          left: 50px;
          top: 0px;
          width: 150px;
          height: 150px;
          animation-delay: -800ms;
        }

        .recipe-card-wrapper #recipe-right {
          background-color: #ff2233;
          left: 160px;
          top: -80px;
          width: 30px;
          height: 30px;
          animation-delay: -1800ms;
        }

        @keyframes recipe-floating {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(10px);
          }

          100% {
            transform: translateY(0px);
          }
        }
        `}),e.jsx("div",{className:"recipe-card",children:e.jsxs("div",{className:"recipe-content",children:[e.jsx("div",{className:"recipe-back",children:e.jsxs("div",{className:"recipe-back-content",children:[e.jsxs("svg",{stroke:"#ffffff",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",height:"50px",width:"50px",fill:"#ffffff",children:[e.jsx("g",{strokeWidth:0,id:"SVGRepo_bgCarrier"}),e.jsx("g",{strokeLinejoin:"round",strokeLinecap:"round",id:"SVGRepo_tracerCarrier"}),e.jsx("g",{id:"SVGRepo_iconCarrier",children:e.jsx("path",{d:"M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z"})})]}),e.jsx("strong",{children:"Hover Me"})]})}),e.jsxs("div",{className:"recipe-front",children:[e.jsxs("div",{className:"img",children:[e.jsx("div",{className:"circle"}),e.jsx("div",{className:"circle",id:"recipe-right"}),e.jsx("div",{className:"circle",id:"recipe-bottom"})]}),e.jsxs("div",{className:"recipe-front-content",children:[e.jsx("small",{className:"badge",children:"Pasta"}),e.jsxs("div",{className:"description",children:[e.jsxs("div",{className:"title",children:[e.jsx("p",{className:"title",children:e.jsx("strong",{children:"Spaguetti Bolognese"})}),e.jsx("svg",{fillRule:"nonzero",height:"15px",width:"15px",viewBox:"0,0,256,256",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{style:{mixBlendMode:"normal"},textAnchor:"none",fontSize:"none",fontWeight:"none",fontFamily:"none",strokeDashoffset:0,strokeDasharray:"none",strokeMiterlimit:10,strokeLinejoin:"miter",strokeLinecap:"butt",strokeWidth:1,stroke:"none",fillRule:"nonzero",fill:"#20c997",children:e.jsx("g",{transform:"scale(8,8)",children:e.jsx("path",{d:"M25,27l-9,-6.75l-9,6.75v-23h18z"})})})})]}),e.jsx("p",{className:"card-footer",children:"30 Mins   |   1 Serving"})]})]})]})]})})]})})}const jn=`import React from 'react';

const NumberCard = () => {
  return (
    <div className="number-card-wrapper">
      <div className="w-64 bg-white dark:bg-zinc-900 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] dark:shadow-[0px_0px_15px_rgba(255,255,255,0.05)] p-9 space-y-3 relative overflow-hidden rounded-xl">
        <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
        </div>
        <div className="fill-violet-500 w-12">
          <svg viewBox="0 0 24 24" data-name="Layer 1" id="number-card-layer-1" xmlns="http://www.w3.org/2000/svg">
            <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
          </svg>
        </div>
        <h1 className="font-bold text-xl dark:text-white">UI / UX Creative Desing</h1>
        <p className="text-sm text-zinc-500 leading-6 dark:text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
          adipisicing elit
        </p>
      </div>
    </div>
  );
}

export default NumberCard;
`;function _n(){return e.jsx(k,{title:"Number Card",code:jn,className:"flex items-center justify-center p-12",children:e.jsx("div",{className:"number-card-wrapper",children:e.jsxs("div",{className:"w-64 bg-white dark:bg-zinc-900 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] dark:shadow-[0px_0px_15px_rgba(255,255,255,0.05)] p-9 space-y-3 relative overflow-hidden rounded-xl",children:[e.jsx("div",{className:"w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7",children:e.jsx("p",{className:"absolute bottom-6 left-7 text-white text-2xl",children:"02"})}),e.jsx("div",{className:"fill-violet-500 w-12",children:e.jsx("svg",{viewBox:"0 0 24 24","data-name":"Layer 1",id:"number-card-layer-1",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"})})}),e.jsx("h1",{className:"font-bold text-xl dark:text-white",children:"UI / UX Creative Desing"}),e.jsx("p",{className:"text-sm text-zinc-500 leading-6 dark:text-zinc-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"})]})})})}const Nn=`import React from 'react';

const UIVerseCard = () => {
  return (
    <div className="uiverse-card-wrapper">
      <style>
        {\`
        .uiverse-card-wrapper .uiverse-parent {
          width: 290px;
          height: 300px;
          perspective: 1000px;
        }

        .uiverse-card-wrapper .uiverse-card {
          height: 100%;
          border-radius: 50px;
          background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
          box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
        }

        .uiverse-card-wrapper .uiverse-glass {
          transform-style: preserve-3d;
          position: absolute;
          inset: 8px;
          border-radius: 55px;
          border-top-right-radius: 100%;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
          /* -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px); */
          transform: translate3d(0px, 0px, 25px);
          border-left: 1px solid white;
          border-bottom: 1px solid white;
          transition: all 0.5s ease-in-out;
        }

        .uiverse-card-wrapper .uiverse-content {
          padding: 100px 60px 0px 30px;
          transform: translate3d(0, 0, 26px);
        }

        .uiverse-card-wrapper .uiverse-content .uiverse-title {
          display: block;
          color: #00894d;
          font-weight: 900;
          font-size: 20px;
        }

        .uiverse-card-wrapper .uiverse-content .uiverse-text {
          display: block;
          color: rgba(0, 137, 78, 0.7647058824);
          font-size: 15px;
          margin-top: 20px;
        }

        .uiverse-card-wrapper .uiverse-bottom {
          padding: 10px 12px;
          transform-style: preserve-3d;
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transform: translate3d(0, 0, 26px);
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-view-more {
          display: flex;
          align-items: center;
          width: 40%;
          justify-content: flex-end;
          transition: all 0.2s ease-in-out;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-view-more:hover {
          transform: translate3d(0, 0, 10px);
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-view-more .uiverse-view-more-button {
          background: none;
          border: none;
          color: #00c37b;
          font-weight: bolder;
          font-size: 12px;
          cursor: pointer;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-view-more .svg {
          fill: none;
          stroke: #00c37b;
          stroke-width: 3px;
          max-height: 15px;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container {
          display: flex;
          gap: 10px;
          transform-style: preserve-3d;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button {
          width: 30px;
          aspect-ratio: 1;
          padding: 5px;
          background: rgb(255, 255, 255);
          border-radius: 50%;
          border: none;
          display: grid;
          place-content: center;
          box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
          cursor: pointer;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:first-child {
          transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:nth-child(2) {
          transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:nth-child(3) {
          transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button .svg {
          width: 15px;
          fill: #00894d;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:hover {
          background: black;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:hover .svg {
          fill: white;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:active {
          background: rgb(255, 234, 0);
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:active .svg {
          fill: black;
        }

        .uiverse-card-wrapper .uiverse-logo {
          position: absolute;
          right: 0;
          top: 0;
          transform-style: preserve-3d;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle {
          display: block;
          position: absolute;
          aspect-ratio: 1;
          border-radius: 50%;
          top: 0;
          right: 0;
          box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          background: rgba(0, 249, 203, 0.2);
          transition: all 0.5s ease-in-out;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle1 {
          width: 170px;
          transform: translate3d(0, 0, 20px);
          top: 8px;
          right: 8px;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle2 {
          width: 140px;
          transform: translate3d(0, 0, 40px);
          top: 10px;
          right: 10px;
          -webkit-backdrop-filter: blur(1px);
          backdrop-filter: blur(1px);
          transition-delay: 0.4s;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle3 {
          width: 110px;
          transform: translate3d(0, 0, 60px);
          top: 17px;
          right: 17px;
          transition-delay: 0.8s;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle4 {
          width: 80px;
          transform: translate3d(0, 0, 80px);
          top: 23px;
          right: 23px;
          transition-delay: 1.2s;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle5 {
          width: 50px;
          transform: translate3d(0, 0, 100px);
          top: 30px;
          right: 30px;
          display: grid;
          place-content: center;
          transition-delay: 1.6s;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle5 .svg {
          width: 20px;
          fill: white;
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card {
          transform: rotate3d(1, 1, 0, 30deg);
          box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button {
          transform: translate3d(0, 0, 50px);
          box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-logo .uiverse-circle2 {
          transform: translate3d(0, 0, 60px);
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-logo .uiverse-circle3 {
          transform: translate3d(0, 0, 80px);
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-logo .uiverse-circle4 {
          transform: translate3d(0, 0, 100px);
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-logo .uiverse-circle5 {
          transform: translate3d(0, 0, 120px);
        }
        \`}
      </style>
      <div className="uiverse-parent">
        <div className="uiverse-card">
          <div className="uiverse-logo">
            <span className="uiverse-circle uiverse-circle1" />
            <span className="uiverse-circle uiverse-circle2" />
            <span className="uiverse-circle uiverse-circle3" />
            <span className="uiverse-circle uiverse-circle4" />
            <span className="uiverse-circle uiverse-circle5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                <path id="uiverse-path-6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)" />
                <path id="uiverse-path-7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
                <path id="uiverse-path-8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
              </svg>
            </span>
          </div>
          <div className="uiverse-glass" />
          <div className="uiverse-content">
            <span className="uiverse-title">3D UI</span>
            <span className="uiverse-text">Create, share, and use beautiful custom elements made with CSS</span>
          </div>
          <div className="uiverse-bottom">
            <div className="uiverse-social-buttons-container">
              <button className="uiverse-social-button uiverse-social-button1">
                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                </svg></button>
              <button className="uiverse-social-button uiverse-social-button2">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </button>
              <button className="uiverse-social-button uiverse-social-button3">
                <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                </svg>
              </button>
            </div>
            <div className="uiverse-view-more">
              <button className="uiverse-view-more-button">View more</button>
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIVerseCard;
`;function Cn(){return e.jsx(k,{title:"UI Card",code:Nn,className:"flex items-center justify-center p-12 min-h-[500px]",children:e.jsxs("div",{className:"uiverse-card-wrapper",children:[e.jsx("style",{children:`
        .uiverse-card-wrapper .uiverse-parent {
          width: 290px;
          height: 300px;
          perspective: 1000px;
        }

        .uiverse-card-wrapper .uiverse-card {
          height: 100%;
          border-radius: 50px;
          background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
          box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
        }

        .uiverse-card-wrapper .uiverse-glass {
          transform-style: preserve-3d;
          position: absolute;
          inset: 8px;
          border-radius: 55px;
          border-top-right-radius: 100%;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
          transform: translate3d(0px, 0px, 25px);
          border-left: 1px solid white;
          border-bottom: 1px solid white;
          transition: all 0.5s ease-in-out;
        }

        .uiverse-card-wrapper .uiverse-content {
          padding: 100px 60px 0px 30px;
          transform: translate3d(0, 0, 26px);
        }

        .uiverse-card-wrapper .uiverse-content .uiverse-title {
          display: block;
          color: #00894d;
          font-weight: 900;
          font-size: 20px;
        }

        .uiverse-card-wrapper .uiverse-content .uiverse-text {
          display: block;
          color: rgba(0, 137, 78, 0.7647058824);
          font-size: 15px;
          margin-top: 20px;
        }

        .uiverse-card-wrapper .uiverse-bottom {
          padding: 10px 12px;
          transform-style: preserve-3d;
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transform: translate3d(0, 0, 26px);
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-view-more {
          display: flex;
          align-items: center;
          width: 40%;
          justify-content: flex-end;
          transition: all 0.2s ease-in-out;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-view-more:hover {
          transform: translate3d(0, 0, 10px);
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-view-more .uiverse-view-more-button {
          background: none;
          border: none;
          color: #00c37b;
          font-weight: bolder;
          font-size: 12px;
          cursor: pointer;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-view-more .svg {
          fill: none;
          stroke: #00c37b;
          stroke-width: 3px;
          max-height: 15px;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container {
          display: flex;
          gap: 10px;
          transform-style: preserve-3d;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button {
          width: 30px;
          aspect-ratio: 1;
          padding: 5px;
          background: rgb(255, 255, 255);
          border-radius: 50%;
          border: none;
          display: grid;
          place-content: center;
          box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
          cursor: pointer;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:first-child {
          transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:nth-child(2) {
          transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:nth-child(3) {
          transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button .svg {
          width: 15px;
          fill: #00894d;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:hover {
          background: black;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:hover .svg {
          fill: white;
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:active {
          background: rgb(255, 234, 0);
        }

        .uiverse-card-wrapper .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button:active .svg {
          fill: black;
        }

        .uiverse-card-wrapper .uiverse-logo {
          position: absolute;
          right: 0;
          top: 0;
          transform-style: preserve-3d;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle {
          display: block;
          position: absolute;
          aspect-ratio: 1;
          border-radius: 50%;
          top: 0;
          right: 0;
          box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          background: rgba(0, 249, 203, 0.2);
          transition: all 0.5s ease-in-out;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle1 {
          width: 170px;
          transform: translate3d(0, 0, 20px);
          top: 8px;
          right: 8px;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle2 {
          width: 140px;
          transform: translate3d(0, 0, 40px);
          top: 10px;
          right: 10px;
          -webkit-backdrop-filter: blur(1px);
          backdrop-filter: blur(1px);
          transition-delay: 0.4s;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle3 {
          width: 110px;
          transform: translate3d(0, 0, 60px);
          top: 17px;
          right: 17px;
          transition-delay: 0.8s;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle4 {
          width: 80px;
          transform: translate3d(0, 0, 80px);
          top: 23px;
          right: 23px;
          transition-delay: 1.2s;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle5 {
          width: 50px;
          transform: translate3d(0, 0, 100px);
          top: 30px;
          right: 30px;
          display: grid;
          place-content: center;
          transition-delay: 1.6s;
        }

        .uiverse-card-wrapper .uiverse-logo .uiverse-circle5 .svg {
          width: 20px;
          fill: white;
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card {
          transform: rotate3d(1, 1, 0, 30deg);
          box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-bottom .uiverse-social-buttons-container .uiverse-social-button {
          transform: translate3d(0, 0, 50px);
          box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-logo .uiverse-circle2 {
          transform: translate3d(0, 0, 60px);
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-logo .uiverse-circle3 {
          transform: translate3d(0, 0, 80px);
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-logo .uiverse-circle4 {
          transform: translate3d(0, 0, 100px);
        }

        .uiverse-card-wrapper .uiverse-parent:hover .uiverse-card .uiverse-logo .uiverse-circle5 {
          transform: translate3d(0, 0, 120px);
        }
        `}),e.jsx("div",{className:"uiverse-parent",children:e.jsxs("div",{className:"uiverse-card",children:[e.jsxs("div",{className:"uiverse-logo",children:[e.jsx("span",{className:"uiverse-circle uiverse-circle1"}),e.jsx("span",{className:"uiverse-circle uiverse-circle2"}),e.jsx("span",{className:"uiverse-circle uiverse-circle3"}),e.jsx("span",{className:"uiverse-circle uiverse-circle4"}),e.jsx("span",{className:"uiverse-circle uiverse-circle5",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29.667 31.69",className:"svg",children:[e.jsx("path",{id:"uiverse-path-6","data-name":"Path 6",d:"M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z",transform:"translate(0 0)"}),e.jsx("path",{id:"uiverse-path-7","data-name":"Path 7",d:"M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z",transform:"translate(-45.91 0)"}),e.jsx("path",{id:"uiverse-path-8","data-name":"Path 8",d:"M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z",transform:"translate(0 -51.963)"})]})})]}),e.jsx("div",{className:"uiverse-glass"}),e.jsxs("div",{className:"uiverse-content",children:[e.jsx("span",{className:"uiverse-title",children:"UI CARD 3D"}),e.jsx("span",{className:"uiverse-text",children:"Create, share, and use beautiful custom elements made with CSS"})]}),e.jsxs("div",{className:"uiverse-bottom",children:[e.jsxs("div",{className:"uiverse-social-buttons-container",children:[e.jsx("button",{className:"uiverse-social-button uiverse-social-button1",children:e.jsx("svg",{viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",className:"svg",children:e.jsx("path",{d:"M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"})})}),e.jsx("button",{className:"uiverse-social-button uiverse-social-button2",children:e.jsx("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",className:"svg",children:e.jsx("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})}),e.jsx("button",{className:"uiverse-social-button uiverse-social-button3",children:e.jsx("svg",{viewBox:"0 0 640 512",xmlns:"http://www.w3.org/2000/svg",className:"svg",children:e.jsx("path",{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"})})})]}),e.jsxs("div",{className:"uiverse-view-more",children:[e.jsx("button",{className:"uiverse-view-more-button",children:"View more"}),e.jsx("svg",{className:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m6 9 6 6 6-6"})})]})]})]})})]})})}const zn=`import React from 'react';

const PegtopLoader = () => {
  return (
    <div className="pegtop-loader-wrapper">
      <style>
        {\`
        .pegtop-loader-wrapper .pegtop-loader {
          --fill-color: #5c3d99;
          --shine-color: #5c3d9933;
          transform: scale(0.5); /* You can change the size */
          width: 100px;
          height: 100px; /* Fixed height for container */
          position: relative;
          filter: drop-shadow(0 0 10px var(--shine-color));
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pegtop-loader-wrapper .pegtop-one {
          position: absolute;
          animation: pegtop-flow-one 1s linear infinite;
        }

        .pegtop-loader-wrapper .pegtop-two {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(-100px);
          animation: pegtop-flow-two 1s linear infinite;
          animation-delay: 0.3s;
        }

        .pegtop-loader-wrapper .pegtop-three {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(100px);
          animation: pegtop-flow-three 1s linear infinite;
          animation-delay: 0.6s;
        }

        .pegtop-loader-wrapper svg g path:first-child {
          fill: var(--fill-color);
        }

        @keyframes pegtop-flow-one {
          0% {
            transform: scale(0.5) translateY(-200px);
            opacity: 0;
          }
          25% {
            transform: scale(0.75) translateY(-100px);
            opacity: 1;
          }
          50% {
            transform: scale(1) translateY(0px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) translateY(50px);
            opacity: 1;
          }
          100% {
            transform: scale(0) translateY(100px);
            opacity: 0;
          }
        }

        @keyframes pegtop-flow-two {
          0% {
            transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
            opacity: 0;
          }
        }

        @keyframes pegtop-flow-three {
          0% {
            transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
            opacity: 0;
          }
        }
        \`}
      </style>
      <div className="pegtop-loader">
        <svg className="pegtop-one" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
          <defs>
            <filter id="pegtop-shine">
              <feGaussianBlur stdDeviation={3} />
            </filter>
            <mask id="pegtop-mask">
              <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="white" />
            </mask>
            <radialGradient id="pegtop-gradient-1" cx={50} cy={66} fx={50} fy={66} r={30} gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="black" stopOpacity="0.3" />
              <stop offset="50%" stopColor="black" stopOpacity="0.1" />
              <stop offset="100%" stopColor="black" stopOpacity={0} />
            </radialGradient>
            <radialGradient id="pegtop-gradient-2" cx={55} cy={20} fx={55} fy={20} r={30} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </radialGradient>
            <radialGradient id="pegtop-gradient-3" cx={85} cy={50} fx={85} fy={50} xlinkHref="#pegtop-gradient-2" />
            <radialGradient id="pegtop-gradient-4" cx={50} cy={58} fx={50} fy={58} r={60} gradientTransform="translate(0 47) scale(1 0.2)" xlinkHref="#pegtop-gradient-3" />
            <linearGradient id="pegtop-gradient-5" x1={50} y1={90} x2={50} y2={10} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="black" stopOpacity="0.2" />
              <stop offset="40%" stopColor="black" stopOpacity={0} />
            </linearGradient>
          </defs>
          <g>
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
          </g>
        </svg>
        <svg className="pegtop-two" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
           {/* Reusing defs from first svg via ID references, but for strict isolation we duplicate with same IDs inside this component scope or rely on the previous definitions if they are in DOM. Best practice for isolated component: define unique IDs. Since these are identical shapes, I will reference the IDs defined in the first SVG of this component. */}
          <g>
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
          </g>
        </svg>
        <svg className="pegtop-three" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
           <g>
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="currentColor" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-1)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#pegtop-shine)" mask="url(#pegtop-mask)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-2)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-3)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-4)" />
            <path d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z" fill="url(#pegtop-gradient-5)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default PegtopLoader;
`;function Ln(){return e.jsx(k,{title:"Pegtop Loader",code:zn,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"pegtop-loader-wrapper",children:[e.jsx("style",{children:`
        .pegtop-loader-wrapper .pegtop-loader {
          --fill-color: #5c3d99;
          --shine-color: #5c3d9933;
          transform: scale(0.5); /* You can change the size */
          width: 100px;
          height: 100px; /* Fixed height for container */
          position: relative;
          filter: drop-shadow(0 0 10px var(--shine-color));
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pegtop-loader-wrapper .pegtop-one {
          position: absolute;
          animation: pegtop-flow-one 1s linear infinite;
        }

        .pegtop-loader-wrapper .pegtop-two {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(-100px);
          animation: pegtop-flow-two 1s linear infinite;
          animation-delay: 0.3s;
        }

        .pegtop-loader-wrapper .pegtop-three {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(100px);
          animation: pegtop-flow-three 1s linear infinite;
          animation-delay: 0.6s;
        }

        .pegtop-loader-wrapper svg g path:first-child {
          fill: var(--fill-color);
        }

        @keyframes pegtop-flow-one {
          0% {
            transform: scale(0.5) translateY(-200px);
            opacity: 0;
          }
          25% {
            transform: scale(0.75) translateY(-100px);
            opacity: 1;
          }
          50% {
            transform: scale(1) translateY(0px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) translateY(50px);
            opacity: 1;
          }
          100% {
            transform: scale(0) translateY(100px);
            opacity: 0;
          }
        }

        @keyframes pegtop-flow-two {
          0% {
            transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
            opacity: 0;
          }
        }

        @keyframes pegtop-flow-three {
          0% {
            transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
            opacity: 0;
          }
        }
        `}),e.jsxs("div",{className:"pegtop-loader",children:[e.jsxs("svg",{className:"pegtop-one",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",children:[e.jsxs("defs",{children:[e.jsx("filter",{id:"pegtop-shine",children:e.jsx("feGaussianBlur",{stdDeviation:3})}),e.jsx("mask",{id:"pegtop-mask",children:e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"white"})}),e.jsxs("radialGradient",{id:"pegtop-gradient-1",cx:50,cy:66,fx:50,fy:66,r:30,gradientTransform:"translate(0 35) scale(1 0.5)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0%",stopColor:"black",stopOpacity:"0.3"}),e.jsx("stop",{offset:"50%",stopColor:"black",stopOpacity:"0.1"}),e.jsx("stop",{offset:"100%",stopColor:"black",stopOpacity:0})]}),e.jsxs("radialGradient",{id:"pegtop-gradient-2",cx:55,cy:20,fx:55,fy:20,r:30,gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:"0.3"}),e.jsx("stop",{offset:"50%",stopColor:"white",stopOpacity:"0.1"}),e.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:0})]}),e.jsx("radialGradient",{id:"pegtop-gradient-3",cx:85,cy:50,fx:85,fy:50,xlinkHref:"#pegtop-gradient-2"}),e.jsx("radialGradient",{id:"pegtop-gradient-4",cx:50,cy:58,fx:50,fy:58,r:60,gradientTransform:"translate(0 47) scale(1 0.2)",xlinkHref:"#pegtop-gradient-3"}),e.jsxs("linearGradient",{id:"pegtop-gradient-5",x1:50,y1:90,x2:50,y2:10,gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0%",stopColor:"black",stopOpacity:"0.2"}),e.jsx("stop",{offset:"40%",stopColor:"black",stopOpacity:0})]})]}),e.jsxs("g",{children:[e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"currentColor"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-1)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"none",stroke:"white",opacity:"0.3",strokeWidth:3,filter:"url(#pegtop-shine)",mask:"url(#pegtop-mask)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-2)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-3)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-4)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-5)"})]})]}),e.jsx("svg",{className:"pegtop-two",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",children:e.jsxs("g",{children:[e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"currentColor"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-1)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"none",stroke:"white",opacity:"0.3",strokeWidth:3,filter:"url(#pegtop-shine)",mask:"url(#pegtop-mask)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-2)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-3)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-4)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-5)"})]})}),e.jsx("svg",{className:"pegtop-three",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",children:e.jsxs("g",{children:[e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"currentColor"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-1)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"none",stroke:"white",opacity:"0.3",strokeWidth:3,filter:"url(#pegtop-shine)",mask:"url(#pegtop-mask)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-2)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-3)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-4)"}),e.jsx("path",{d:"M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z",fill:"url(#pegtop-gradient-5)"})]})})]})]})})}const Mn=`import React from 'react';

const AIMatrixLoader = () => {
  return (
    <div className="ai-matrix-loader-wrapper">
      <style>
        {\`
        .ai-matrix-loader-wrapper .ai-matrix-loader {
          width: 120px;
          height: 160px;
          margin: 30px auto;
          position: relative;
          perspective: 800px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
        }

        .ai-matrix-loader-wrapper .matrix-digit {
          color: #00ff88;
          font-family: monospace;
          font-size: 18px;
          text-align: center;
          text-shadow: 0 0 5px #00ff88;
          animation:
            ai-matrix-fall 2s infinite,
            ai-matrix-flicker 0.5s infinite;
          opacity: 0;
        }

        .ai-matrix-loader-wrapper .matrix-digit:nth-child(1) { animation-delay: 0.1s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(2) { animation-delay: 0.3s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(3) { animation-delay: 0.5s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(4) { animation-delay: 0.7s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(5) { animation-delay: 0.9s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(6) { animation-delay: 1.1s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(7) { animation-delay: 1.3s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(8) { animation-delay: 1.5s; }

        .ai-matrix-loader-wrapper .matrix-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.1) 0%,
            transparent 70%
          );
          animation: ai-matrix-pulse 2s infinite;
        }

        @keyframes ai-matrix-fall {
          0% {
            transform: translateY(-50px) rotateX(90deg);
            opacity: 0;
          }
          20%, 80% {
            transform: translateY(0) rotateX(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(50px) rotateX(-90deg);
            opacity: 0;
          }
        }

        @keyframes ai-matrix-flicker {
          0%, 19%, 21%, 100% {
            opacity: 0.8;
          }
          20% {
            opacity: 0.2;
          }
        }

        @keyframes ai-matrix-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        \`}
      </style>
      <div className="ai-matrix-loader">
        <div className="matrix-digit">0</div>
        <div className="matrix-digit">1</div>
        <div className="matrix-digit">0</div>
        <div className="matrix-digit">1</div>
        <div className="matrix-digit">1</div>
        <div className="matrix-digit">0</div>
        <div className="matrix-digit">0</div>
        <div className="matrix-digit">1</div>
        <div className="matrix-glow" />
      </div>
    </div>
  );
}

export default AIMatrixLoader;
`;function Bn(){return e.jsx(k,{title:"AI Matrix Loader",code:Mn,className:"flex items-center justify-center p-12 min-h-[300px]",children:e.jsxs("div",{className:"ai-matrix-loader-wrapper",children:[e.jsx("style",{children:`
        .ai-matrix-loader-wrapper .ai-matrix-loader {
          width: 120px;
          height: 160px;
          margin: 30px auto;
          position: relative;
          perspective: 800px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
        }

        .ai-matrix-loader-wrapper .matrix-digit {
          color: #00ff88;
          font-family: monospace;
          font-size: 18px;
          text-align: center;
          text-shadow: 0 0 5px #00ff88;
          animation:
            ai-matrix-fall 2s infinite,
            ai-matrix-flicker 0.5s infinite;
          opacity: 0;
        }

        .ai-matrix-loader-wrapper .matrix-digit:nth-child(1) { animation-delay: 0.1s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(2) { animation-delay: 0.3s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(3) { animation-delay: 0.5s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(4) { animation-delay: 0.7s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(5) { animation-delay: 0.9s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(6) { animation-delay: 1.1s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(7) { animation-delay: 1.3s; }
        .ai-matrix-loader-wrapper .matrix-digit:nth-child(8) { animation-delay: 1.5s; }

        .ai-matrix-loader-wrapper .matrix-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.1) 0%,
            transparent 70%
          );
          animation: ai-matrix-pulse 2s infinite;
        }

        @keyframes ai-matrix-fall {
          0% {
            transform: translateY(-50px) rotateX(90deg);
            opacity: 0;
          }
          20%, 80% {
            transform: translateY(0) rotateX(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(50px) rotateX(-90deg);
            opacity: 0;
          }
        }

        @keyframes ai-matrix-flicker {
          0%, 19%, 21%, 100% {
            opacity: 0.8;
          }
          20% {
            opacity: 0.2;
          }
        }

        @keyframes ai-matrix-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        `}),e.jsxs("div",{className:"ai-matrix-loader",children:[e.jsx("div",{className:"matrix-digit",children:"0"}),e.jsx("div",{className:"matrix-digit",children:"1"}),e.jsx("div",{className:"matrix-digit",children:"0"}),e.jsx("div",{className:"matrix-digit",children:"1"}),e.jsx("div",{className:"matrix-digit",children:"1"}),e.jsx("div",{className:"matrix-digit",children:"0"}),e.jsx("div",{className:"matrix-digit",children:"0"}),e.jsx("div",{className:"matrix-digit",children:"1"}),e.jsx("div",{className:"matrix-glow"})]})]})})}const Rn=`import React from 'react';

const SoapBubbleLoader = () => {
  return (
    <div className="soap-bubble-loader-wrapper">
      <style>
        {\`
        .soap-bubble-loader-wrapper .soap-container {
          position: relative;
          width: 100%;
          height: 300px; /* Adjusted container height for visibility */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .soap-bubble-loader-wrapper .soap-bubble {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.25);
          animation: soap-bubble-animate 8s ease-in-out infinite;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(2) {
          position: relative;
          zoom: 0.45;
          left: -10px;
          top: -100px;
          animation-delay: -4s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(3) {
          position: relative;
          zoom: 0.45;
          right: -80px;
          top: -300px;
          animation-delay: -6s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(4) {
          position: relative;
          zoom: 0.35;
          left: -120px;
          bottom: -200px;
          animation-delay: -3s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(5) {
          position: relative;
          zoom: 0.5;
          left: 0px;
          top: 200px;
          animation-delay: -5s;
        }

        @keyframes soap-bubble-animate {
          0%, 100% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .soap-bubble-loader-wrapper .soap-bubble::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 45px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .soap-bubble-loader-wrapper .soap-bubble::after {
          content: '';
          position: absolute;
          top: 80px;
          left: 80px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span {
          position: absolute;
          border-radius: 50%;
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(1) {
          inset: 10px;
          border-left: 15px solid #0fb4ff;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(2) {
          inset: 10px;
          border-right: 15px solid #ff4484;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(3) {
          inset: 10px;
          border-top: 15px solid #ffeb3b;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(4) {
          inset: 30px;
          border-left: 15px solid #ff4484;
          filter: blur(12px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(5) {
          inset: 10px;
          border-bottom: 10px solid #fff;
          filter: blur(8px);
          transform: rotate(330deg);
        }
        \`}
      </style>
      <div className="soap-container">
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="soap-bubble">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default SoapBubbleLoader;
`;function Sn(){return e.jsx(k,{title:"Soap Bubble Loader",code:Rn,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"soap-bubble-loader-wrapper",children:[e.jsx("style",{children:`
        .soap-bubble-loader-wrapper .soap-container {
          position: relative;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .soap-bubble-loader-wrapper .soap-bubble {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.25);
          animation: soap-bubble-animate 8s ease-in-out infinite;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(2) {
          position: relative;
          zoom: 0.45;
          left: -10px;
          top: -100px;
          animation-delay: -4s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(3) {
          position: relative;
          zoom: 0.45;
          right: -80px;
          top: -300px;
          animation-delay: -6s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(4) {
          position: relative;
          zoom: 0.35;
          left: -120px;
          bottom: -200px;
          animation-delay: -3s;
        }

        .soap-bubble-loader-wrapper .soap-bubble:nth-child(5) {
          position: relative;
          zoom: 0.5;
          left: 0px;
          top: 200px;
          animation-delay: -5s;
        }

        @keyframes soap-bubble-animate {
          0%, 100% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .soap-bubble-loader-wrapper .soap-bubble::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 45px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .soap-bubble-loader-wrapper .soap-bubble::after {
          content: '';
          position: absolute;
          top: 80px;
          left: 80px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span {
          position: absolute;
          border-radius: 50%;
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(1) {
          inset: 10px;
          border-left: 15px solid #0fb4ff;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(2) {
          inset: 10px;
          border-right: 15px solid #ff4484;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(3) {
          inset: 10px;
          border-top: 15px solid #ffeb3b;
          filter: blur(8px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(4) {
          inset: 30px;
          border-left: 15px solid #ff4484;
          filter: blur(12px);
        }

        .soap-bubble-loader-wrapper .soap-bubble span:nth-child(5) {
          inset: 10px;
          border-bottom: 10px solid #fff;
          filter: blur(8px);
          transform: rotate(330deg);
        }
        `}),e.jsxs("div",{className:"soap-container",children:[e.jsxs("div",{className:"soap-bubble",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"soap-bubble",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"soap-bubble",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"soap-bubble",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"soap-bubble",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})})}const Tn=`import React from 'react';

const HoneycombLoader = () => {
  return (
    <div className="honeycomb-wrapper">
      <style>
        {\`
        @keyframes honeycomb-animate {
          0%, 20%, 80%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          30%, 70% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .honeycomb-wrapper .honeycomb-loader {
          height: 24px;
          position: relative;
          width: 24px;
        }

        .honeycomb-wrapper .honeycomb-loader div {
          animation: honeycomb-animate 2.1s infinite backwards;
          background: #f3f3f3;
          height: 12px;
          margin-top: 6px;
          position: absolute;
          width: 24px;
        }

        .honeycomb-wrapper .honeycomb-loader div:after,
        .honeycomb-wrapper .honeycomb-loader div:before {
          content: '';
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          position: absolute;
          left: 0;
          right: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:after {
          top: -6px;
          border-bottom: 6px solid #f3f3f3;
        }

        .honeycomb-wrapper .honeycomb-loader div:before {
          bottom: -6px;
          border-top: 6px solid #f3f3f3;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(1) {
          animation-delay: 0s;
          left: -28px;
          top: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(2) {
          animation-delay: 0.1s;
          left: -14px;
          top: 22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(3) {
          animation-delay: 0.2s;
          left: 14px;
          top: 22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(4) {
          animation-delay: 0.3s;
          left: 28px;
          top: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(5) {
          animation-delay: 0.4s;
          left: 14px;
          top: -22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(6) {
          animation-delay: 0.5s;
          left: -14px;
          top: -22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(7) {
          animation-delay: 0.6s;
          left: 0;
          top: 0;
        }
        \`}
      </style>
      <div className="honeycomb-loader">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default HoneycombLoader;
`;function Yn(){return e.jsx(k,{title:"Honeycomb Loader",code:Tn,className:"flex items-center justify-center p-20 min-h-[200px]",children:e.jsxs("div",{className:"honeycomb-wrapper",children:[e.jsx("style",{children:`
        @keyframes honeycomb-animate {
          0%, 20%, 80%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          30%, 70% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .honeycomb-wrapper .honeycomb-loader {
          height: 24px;
          position: relative;
          width: 24px;
        }

        .honeycomb-wrapper .honeycomb-loader div {
          animation: honeycomb-animate 2.1s infinite backwards;
          background: #f3f3f3;
          height: 12px;
          margin-top: 6px;
          position: absolute;
          width: 24px;
        }

        .honeycomb-wrapper .honeycomb-loader div:after,
        .honeycomb-wrapper .honeycomb-loader div:before {
          content: '';
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          position: absolute;
          left: 0;
          right: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:after {
          top: -6px;
          border-bottom: 6px solid #f3f3f3;
        }

        .honeycomb-wrapper .honeycomb-loader div:before {
          bottom: -6px;
          border-top: 6px solid #f3f3f3;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(1) {
          animation-delay: 0s;
          left: -28px;
          top: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(2) {
          animation-delay: 0.1s;
          left: -14px;
          top: 22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(3) {
          animation-delay: 0.2s;
          left: 14px;
          top: 22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(4) {
          animation-delay: 0.3s;
          left: 28px;
          top: 0;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(5) {
          animation-delay: 0.4s;
          left: 14px;
          top: -22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(6) {
          animation-delay: 0.5s;
          left: -14px;
          top: -22px;
        }

        .honeycomb-wrapper .honeycomb-loader div:nth-child(7) {
          animation-delay: 0.6s;
          left: 0;
          top: 0;
        }
        `}),e.jsxs("div",{className:"honeycomb-loader",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})]})})}const Zn=`import React from 'react';

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
`;function Dn(){return e.jsx(k,{title:"Terminal Card",code:Zn,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"terminal-card-wrapper",children:[e.jsx("style",{children:`
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
        `}),e.jsxs("div",{className:"terminal-card",children:[e.jsxs("div",{className:"terminal-toolbar",children:[e.jsxs("div",{className:"terminal-controls",children:[e.jsx("button",{className:"terminal-btn terminal-btn-close"}),e.jsx("button",{className:"terminal-btn"}),e.jsx("button",{className:"terminal-btn"})]}),e.jsx("p",{className:"terminal-header-user",children:"admin@portfolio: ~"}),e.jsx("div",{className:"terminal-add-tab",children:"+"})]}),e.jsx("div",{className:"terminal-body",children:e.jsxs("div",{className:"terminal-prompt",children:[e.jsx("span",{className:"terminal-prompt-user",children:"visitor@portfolio"}),e.jsx("span",{className:"terminal-location",children:"~"}),e.jsx("span",{className:"terminal-bling",children:"$"}),e.jsx("span",{style:{color:"#fff"},children:'echo "Hello World!"'}),e.jsx("span",{className:"terminal-cursor"})]})})]})]})})}const Pn=`import React from 'react';

const CodeEditorCard = () => {
  return (
    <div className="cec-wrapper">
      <style>
        {\`
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
        \`}
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
}

export default CodeEditorCard;
`;function En(){return e.jsx(k,{title:"Code Editor Card",code:Pn,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"cec-wrapper",children:[e.jsx("style",{children:`
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
        `}),e.jsxs("div",{className:"cec-card",children:[e.jsxs("div",{className:"cec-header",children:[e.jsx("span",{className:"cec-title",children:"CSS"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"cec-icon",children:[e.jsx("g",{strokeWidth:0,id:"SVGRepo_bgCarrier"}),e.jsx("g",{strokeLinejoin:"round",strokeLinecap:"round",id:"SVGRepo_tracerCarrier"}),e.jsxs("g",{id:"SVGRepo_iconCarrier",children:[e.jsx("path",{strokeLinecap:"round",strokeWidth:2,stroke:"#4C4F5A",d:"M6 6L18 18"}),e.jsx("path",{strokeLinecap:"round",strokeWidth:2,stroke:"#4C4F5A",d:"M18 6L6 18"})]})]})]}),e.jsx("div",{className:"cec-content",children:e.jsxs("code",{className:"cec-code",children:[e.jsxs("p",{children:[e.jsx("span",{className:"cec-color-0",children:".code-editor "})," ",e.jsx("span",{children:"{"})]}),e.jsxs("p",{className:"cec-property",children:[e.jsx("span",{className:"cec-color-2",children:"max-width"}),e.jsx("span",{children:":"})," ",e.jsx("span",{className:"cec-color-1",children:"300px"}),";"]}),e.jsxs("p",{className:"cec-property",children:[e.jsx("span",{className:"cec-color-2",children:"background-color"}),e.jsx("span",{children:":"})," ",e.jsx("span",{className:"cec-color-preview-1"}),e.jsx("span",{className:"cec-color-1",children:"#1d1e22"}),";"]}),e.jsxs("p",{className:"cec-property",children:[e.jsx("span",{className:"cec-color-2",children:"box-shadow"}),e.jsx("span",{children:":"})," ",e.jsxs("span",{className:"cec-color-1",children:["0px 4px 30px ",e.jsx("span",{className:"cec-color-preview-2"}),e.jsx("span",{className:"cec-color-1",children:"#0008"})]}),";"]}),e.jsxs("p",{className:"cec-property",children:[e.jsx("span",{className:"cec-color-2",children:"border-radius"}),e.jsx("span",{children:":"})," ",e.jsx("span",{className:"cec-color-1",children:"8px"}),";"]}),e.jsx("span",{children:"}"})]})})]})]})})}const In=`import React from 'react';

const EthereumCard = () => {
  return (
    <div className="eth-card-wrapper">
      <style>
        {\`
        .eth-card-wrapper .eth-card {
          width: 195px;
          height: 285px;
          background: #313131;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.2s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .eth-card-wrapper .eth-img {
          height: 30%;
          position: absolute;
          transition: 0.2s ease-in-out;
          z-index: 1;
        }

        .eth-card-wrapper .eth-text-box {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          transition: 0.2s ease-in-out;
          z-index: 2;
        }

        .eth-card-wrapper .eth-text-box > .eth-text {
          font-weight: bold;
        }

        .eth-card-wrapper .eth-text-box > .eth-head {
          font-size: 20px;
        }

        .eth-card-wrapper .eth-text-box > .eth-price {
          font-size: 17px;
        }

        .eth-card-wrapper .eth-text-box > span {
          font-size: 12px;
          color: lightgrey;
        }

        .eth-card-wrapper .eth-card:hover > .eth-text-box {
          opacity: 1;
        }

        .eth-card-wrapper .eth-card:hover > .eth-img {
          height: 65%;
          filter: blur(7px);
          animation: eth-float 3s infinite;
        }

        @keyframes eth-float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .eth-card-wrapper .eth-card:hover {
          transform: scale(1.04) rotate(-1deg);
        }
        \`}
      </style>
      <div className="eth-card">
        <svg className="eth-img" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39">
          <g id="eth-layer-1">
            <g id="eth-layer-group">
              <g>
                <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" />
                <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
                <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" />
                <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
                <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
                <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
              </g>
            </g>
          </g>
        </svg>
        <div className="eth-text-box">
          <p className="eth-text eth-head">Ethereum</p>
          <span>Cryptocurrency</span>
          <p className="eth-text eth-price">1.654,34€</p>
        </div>
      </div>
    </div>
  );
}

export default EthereumCard;
`;function On(){return e.jsx(k,{title:"Ethereum Card",code:In,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"eth-card-wrapper",children:[e.jsx("style",{children:`
        .eth-card-wrapper .eth-card {
          width: 195px;
          height: 285px;
          background: #313131;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.2s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .eth-card-wrapper .eth-img {
          height: 30%;
          position: absolute;
          transition: 0.2s ease-in-out;
          z-index: 1;
        }

        .eth-card-wrapper .eth-text-box {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          transition: 0.2s ease-in-out;
          z-index: 2;
        }

        .eth-card-wrapper .eth-text-box > .eth-text {
          font-weight: bold;
        }

        .eth-card-wrapper .eth-text-box > .eth-head {
          font-size: 20px;
        }

        .eth-card-wrapper .eth-text-box > .eth-price {
          font-size: 17px;
        }

        .eth-card-wrapper .eth-text-box > span {
          font-size: 12px;
          color: lightgrey;
        }

        .eth-card-wrapper .eth-card:hover > .eth-text-box {
          opacity: 1;
        }

        .eth-card-wrapper .eth-card:hover > .eth-img {
          height: 65%;
          filter: blur(7px);
          animation: eth-float 3s infinite;
        }

        @keyframes eth-float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .eth-card-wrapper .eth-card:hover {
          transform: scale(1.04) rotate(-1deg);
        }
        `}),e.jsxs("div",{className:"eth-card",children:[e.jsx("svg",{className:"eth-img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:"100%",height:"100%",version:"1.1",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 784.37 1277.39",children:e.jsx("g",{id:"eth-layer-1",children:e.jsx("g",{id:"eth-layer-group",children:e.jsxs("g",{children:[e.jsx("polygon",{fill:"#343434",fillRule:"nonzero",points:"392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"}),e.jsx("polygon",{fill:"#8C8C8C",fillRule:"nonzero",points:"392.07,0 -0,650.54 392.07,882.29 392.07,472.33"}),e.jsx("polygon",{fill:"#3C3C3B",fillRule:"nonzero",points:"392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"}),e.jsx("polygon",{fill:"#8C8C8C",fillRule:"nonzero",points:"392.07,1277.38 392.07,956.52 -0,724.89"}),e.jsx("polygon",{fill:"#141414",fillRule:"nonzero",points:"392.07,882.29 784.13,650.54 392.07,472.33"}),e.jsx("polygon",{fill:"#393939",fillRule:"nonzero",points:"0,650.54 392.07,882.29 392.07,472.33"})]})})})}),e.jsxs("div",{className:"eth-text-box",children:[e.jsx("p",{className:"eth-text eth-head",children:"Ethereum"}),e.jsx("span",{children:"Cryptocurrency"}),e.jsx("p",{className:"eth-text eth-price",children:"1.654,34€"})]})]})]})})}const Xn=`import React from 'react';

const GradientPricingCard = () => {
  return (
    <div className="gpc-wrapper">
      <style>
        {\`
        .gpc-wrapper .gpc-container {
          width: 260px;
          background: linear-gradient(
            to top right,
            #975af4,
            #2f7cf8 40%,
            #78aafa 65%,
            #934cff 100%
          );
          padding: 4px;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
        }
        .gpc-wrapper .gpc-title-card {
          display: flex;
          align-items: center;
          padding: 16px 18px;
          justify-content: space-between;
          color: #fff;
        }
        .gpc-wrapper .gpc-title-card p {
          font-size: 14px;
          font-weight: 600;
          font-style: italic;
          text-shadow: 2px 2px 6px #2975ee;
        }

        .gpc-wrapper .gpc-card-content {
          width: 100%;
          height: 100%;
          background-color: #161a20;
          border-radius: 30px;
          color: #838383;
          font-size: 12px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .gpc-wrapper .gpc-card-content .gpc-title {
          font-weight: 600;
          color: #bab9b9;
        }
        .gpc-wrapper .gpc-card-content .gpc-plain :nth-child(1) {
          font-size: 36px;
          color: #fff;
        }
        .gpc-wrapper .gpc-card-content .gpc-card-btn {
          background: linear-gradient(
            4deg,
            #975af4,
            #2f7cf8 40%,
            #78aafa 65%,
            #934cff 100%
          );
          padding: 8px;
          border: none;
          width: 100%;
          border-radius: 8px;
          color: white;
          font-size: 12px;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6);
        }
        .gpc-wrapper .gpc-card-content .gpc-card-btn:hover {
          color: #ffffff;
          text-shadow: 0 0 8px #fff;
          transform: scale(1.03);
        }
        .gpc-wrapper .gpc-card-content .gpc-card-btn:active {
          transform: scale(1);
        }
        \`}
      </style>
      <div className="gpc-container">
        <div className="gpc-title-card">
          <p>MOST POPULAR</p>
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.277 16.515c.005-.11.187-.154.24-.058c.254.45.686 1.111 1.177 1.412c.49.3 1.275.386 1.791.408c.11.005.154.186.058.24c-.45.254-1.111.686-1.412 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.176-1.411s-1.276-.386-1.792-.408c-.11-.005-.153-.187-.057-.24c.45-.254 1.11-.686 1.411-1.177c.301-.49.386-1.276.408-1.791m8.215-1c-.008-.11-.2-.156-.257-.062c-.172.283-.421.623-.697.793s-.693.236-1.023.262c-.11.008-.155.2-.062.257c.283.172.624.42.793.697s.237.693.262 1.023c.009.11.2.155.258.061c.172-.282.42-.623.697-.792s.692-.237 1.022-.262c.11-.009.156-.2.062-.258c-.283-.172-.624-.42-.793-.697s-.236-.692-.262-1.022M14.704 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.545.088-.806.796-1.327 2.213l-.134.366c-.149.403-.223.604-.364.752c-.143.148-.336.225-.724.38l-.353.141l-.248.1c-1.2.48-1.804.753-1.881 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.325.275.488.413.58.6c.094.187.107.403.134.835l.024.393c.093 1.52.14 2.28.634 2.542s1.108-.147 2.336-.966l.318-.212c.35-.233.524-.35.723-.381c.2-.032.402.024.806.136l.368.102c1.422.394 2.133.591 2.52.188c.388-.403.196-1.14-.19-2.613l-.099-.381c-.11-.419-.164-.628-.134-.835s.142-.389.365-.752l.203-.33c.786-1.276 1.179-1.914.924-2.426c-.254-.51-.987-.557-2.454-.648l-.379-.024c-.417-.026-.625-.039-.806-.135c-.18-.096-.314-.264-.58-.6m-5.869 9.324C6.698 14.37 4.919 16.024 4.248 18c-.752-4.707.292-7.747 1.965-9.637c.144.295.332.539.5.73c.35.396.852.82 1.362 1.251l.367.31l.17.145c.005.064.01.14.015.237l.03.485c.04.655.08 1.294.178 1.805" />
          </svg>
        </div>
        <div className="gpc-card-content">
          <p className="gpc-title">Profesional</p>
          <p className="gpc-plain">
            <span>$98,00</span>
            <span>/ month</span>
          </p>
          <p className="gpc-description">Best for growing startups and growth companies</p>
          <button className="gpc-card-btn">Sign Up with Pro</button>
        </div>
      </div>
    </div>
  );
}

export default GradientPricingCard;
`;function Fn(){return e.jsx(k,{title:"Gradient Pricing Card",code:Xn,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"gpc-wrapper",children:[e.jsx("style",{children:`
        .gpc-wrapper .gpc-container {
          width: 260px;
          background: linear-gradient(
            to top right,
            #975af4,
            #2f7cf8 40%,
            #78aafa 65%,
            #934cff 100%
          );
          padding: 4px;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
        }
        .gpc-wrapper .gpc-title-card {
          display: flex;
          align-items: center;
          padding: 16px 18px;
          justify-content: space-between;
          color: #fff;
        }
        .gpc-wrapper .gpc-title-card p {
          font-size: 14px;
          font-weight: 600;
          font-style: italic;
          text-shadow: 2px 2px 6px #2975ee;
        }

        .gpc-wrapper .gpc-card-content {
          width: 100%;
          height: 100%;
          background-color: #161a20;
          border-radius: 30px;
          color: #838383;
          font-size: 12px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .gpc-wrapper .gpc-card-content .gpc-title {
          font-weight: 600;
          color: #bab9b9;
        }
        .gpc-wrapper .gpc-card-content .gpc-plain :nth-child(1) {
          font-size: 36px;
          color: #fff;
        }
        .gpc-wrapper .gpc-card-content .gpc-card-btn {
          background: linear-gradient(
            4deg,
            #975af4,
            #2f7cf8 40%,
            #78aafa 65%,
            #934cff 100%
          );
          padding: 8px;
          border: none;
          width: 100%;
          border-radius: 8px;
          color: white;
          font-size: 12px;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6);
        }
        .gpc-wrapper .gpc-card-content .gpc-card-btn:hover {
          color: #ffffff;
          text-shadow: 0 0 8px #fff;
          transform: scale(1.03);
        }
        .gpc-wrapper .gpc-card-content .gpc-card-btn:active {
          transform: scale(1);
        }
        `}),e.jsxs("div",{className:"gpc-container",children:[e.jsxs("div",{className:"gpc-title-card",children:[e.jsx("p",{children:"MOST POPULAR"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M10.277 16.515c.005-.11.187-.154.24-.058c.254.45.686 1.111 1.177 1.412c.49.3 1.275.386 1.791.408c.11.005.154.186.058.24c-.45.254-1.111.686-1.412 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.176-1.411s-1.276-.386-1.792-.408c-.11-.005-.153-.187-.057-.24c.45-.254 1.11-.686 1.411-1.177c.301-.49.386-1.276.408-1.791m8.215-1c-.008-.11-.2-.156-.257-.062c-.172.283-.421.623-.697.793s-.693.236-1.023.262c-.11.008-.155.2-.062.257c.283.172.624.42.793.697s.237.693.262 1.023c.009.11.2.155.258.061c.172-.282.42-.623.697-.792s.692-.237 1.022-.262c.11-.009.156-.2.062-.258c-.283-.172-.624-.42-.793-.697s-.236-.692-.262-1.022M14.704 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.545.088-.806.796-1.327 2.213l-.134.366c-.149.403-.223.604-.364.752c-.143.148-.336.225-.724.38l-.353.141l-.248.1c-1.2.48-1.804.753-1.881 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.325.275.488.413.58.6c.094.187.107.403.134.835l.024.393c.093 1.52.14 2.28.634 2.542s1.108-.147 2.336-.966l.318-.212c.35-.233.524-.35.723-.381c.2-.032.402.024.806.136l.368.102c1.422.394 2.133.591 2.52.188c.388-.403.196-1.14-.19-2.613l-.099-.381c-.11-.419-.164-.628-.134-.835s.142-.389.365-.752l.203-.33c.786-1.276 1.179-1.914.924-2.426c-.254-.51-.987-.557-2.454-.648l-.379-.024c-.417-.026-.625-.039-.806-.135c-.18-.096-.314-.264-.58-.6m-5.869 9.324C6.698 14.37 4.919 16.024 4.248 18c-.752-4.707.292-7.747 1.965-9.637c.144.295.332.539.5.73c.35.396.852.82 1.362 1.251l.367.31l.17.145c.005.064.01.14.015.237l.03.485c.04.655.08 1.294.178 1.805"})})]}),e.jsxs("div",{className:"gpc-card-content",children:[e.jsx("p",{className:"gpc-title",children:"Profesional"}),e.jsxs("p",{className:"gpc-plain",children:[e.jsx("span",{children:"$98,00"}),e.jsx("span",{children:"/ month"})]}),e.jsx("p",{className:"gpc-description",children:"Best for growing startups and growth companies"}),e.jsx("button",{className:"gpc-card-btn",children:"Sign Up with Pro"})]})]})]})})}const Vn=`import React from 'react';

const PremiumDesignCard = () => {
  return (
    <div className="pdc-wrapper">
      <style>
        {\`
        .pdc-wrapper .pdc-card {
          --pdc-card-bg: #ffffff;
          --pdc-card-accent: #7c3aed;
          --pdc-card-text: #1e293b;
          --pdc-card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

          width: 190px;
          height: 254px;
          background: var(--pdc-card-bg);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--pdc-card-shadow);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .pdc-wrapper .pdc-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 60%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pdc-wrapper .pdc-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(
            circle at 50% 0%,
            rgba(124, 58, 237, 0.3) 0%,
            rgba(124, 58, 237, 0) 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .pdc-wrapper .pdc-content {
          padding: 1.25em;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75em;
          position: relative;
          z-index: 2;
        }

        .pdc-wrapper .pdc-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #10b981;
          color: white;
          padding: 0.25em 0.5em;
          border-radius: 999px;
          font-size: 0.7em;
          font-weight: 600;
          transform: scale(0.8);
          opacity: 0;
          transition: all 0.4s ease 0.1s;
        }

        .pdc-wrapper .pdc-image {
          width: 100%;
          height: 100px;
          background: linear-gradient(45deg, #a78bfa, #8b5cf6);
          border-radius: 12px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .pdc-wrapper .pdc-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 30% 30%,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 30%
            ),
            repeating-linear-gradient(
              45deg,
              rgba(139, 92, 246, 0.1) 0px,
              rgba(139, 92, 246, 0.1) 2px,
              transparent 2px,
              transparent 4px
            );
          opacity: 0.5;
        }

        .pdc-wrapper .pdc-text {
          display: flex;
          flex-direction: column;
          gap: 0.25em;
        }

        .pdc-wrapper .pdc-title {
          color: var(--pdc-card-text);
          font-size: 1.1em;
          margin: 0;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .pdc-wrapper .pdc-description {
          color: var(--pdc-card-text);
          font-size: 0.75em;
          margin: 0;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .pdc-wrapper .pdc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .pdc-wrapper .pdc-price {
          color: var(--pdc-card-text);
          font-weight: 700;
          font-size: 1em;
          transition: all 0.3s ease;
        }

        .pdc-wrapper .pdc-button {
          width: 28px;
          height: 28px;
          background: var(--pdc-card-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          transform: scale(0.9);
        }

        /* Hover Effects */
        .pdc-wrapper .pdc-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(124, 58, 237, 0.2);
        }

        .pdc-wrapper .pdc-card:hover .pdc-shine {
          opacity: 1;
          animation: pdc-shine-anim 3s infinite;
        }

        .pdc-wrapper .pdc-card:hover .pdc-glow {
          opacity: 1;
        }

        .pdc-wrapper .pdc-card:hover .pdc-badge {
          transform: scale(1);
          opacity: 1;
          z-index: 1;
        }

        .pdc-wrapper .pdc-card:hover .pdc-image {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .pdc-wrapper .pdc-card:hover .pdc-title {
          color: var(--pdc-card-accent);
          transform: translateX(2px);
        }

        .pdc-wrapper .pdc-card:hover .pdc-description {
          opacity: 1;
          transform: translateX(2px);
        }

        .pdc-wrapper .pdc-card:hover .pdc-price {
          color: var(--pdc-card-accent);
          transform: translateX(2px);
        }

        .pdc-wrapper .pdc-card:hover .pdc-button {
          transform: scale(1);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
        }

        .pdc-wrapper .pdc-card:hover .pdc-button svg {
          animation: pdc-pulse-anim 1.5s infinite;
        }

        /* Active State */
        .pdc-wrapper .pdc-card:active {
          transform: translateY(-5px) scale(0.98);
        }

        /* Animations */
        @keyframes pdc-shine-anim {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pdc-pulse-anim {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        \`}
      </style>
      <div className="pdc-card">
        <div className="pdc-shine" />
        <div className="pdc-glow" />
        <div className="pdc-content">
          <div className="pdc-badge">NEW</div>
          <div className="pdc-image" />
          <div className="pdc-text">
            <p className="pdc-title">Premium Design</p>
            <p className="pdc-description">Hover to reveal stunning effects</p>
          </div>
          <div className="pdc-footer">
            <div className="pdc-price">$49.99</div>
            <div className="pdc-button">
              <svg height={16} width={16} viewBox="0 0 24 24">
                <path strokeWidth={2} stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumDesignCard;
`;function Hn(){return e.jsx(k,{title:"Premium Design Card",code:Vn,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"pdc-wrapper",children:[e.jsx("style",{children:`
        .pdc-wrapper .pdc-card {
          --pdc-card-bg: #ffffff;
          --pdc-card-accent: #7c3aed;
          --pdc-card-text: #1e293b;
          --pdc-card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

          width: 190px;
          height: 254px;
          background: var(--pdc-card-bg);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--pdc-card-shadow);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .pdc-wrapper .pdc-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 60%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pdc-wrapper .pdc-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(
            circle at 50% 0%,
            rgba(124, 58, 237, 0.3) 0%,
            rgba(124, 58, 237, 0) 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .pdc-wrapper .pdc-content {
          padding: 1.25em;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75em;
          position: relative;
          z-index: 2;
        }

        .pdc-wrapper .pdc-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #10b981;
          color: white;
          padding: 0.25em 0.5em;
          border-radius: 999px;
          font-size: 0.7em;
          font-weight: 600;
          transform: scale(0.8);
          opacity: 0;
          transition: all 0.4s ease 0.1s;
        }

        .pdc-wrapper .pdc-image {
          width: 100%;
          height: 100px;
          background: linear-gradient(45deg, #a78bfa, #8b5cf6);
          border-radius: 12px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .pdc-wrapper .pdc-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 30% 30%,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 30%
            ),
            repeating-linear-gradient(
              45deg,
              rgba(139, 92, 246, 0.1) 0px,
              rgba(139, 92, 246, 0.1) 2px,
              transparent 2px,
              transparent 4px
            );
          opacity: 0.5;
        }

        .pdc-wrapper .pdc-text {
          display: flex;
          flex-direction: column;
          gap: 0.25em;
        }

        .pdc-wrapper .pdc-title {
          color: var(--pdc-card-text);
          font-size: 1.1em;
          margin: 0;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .pdc-wrapper .pdc-description {
          color: var(--pdc-card-text);
          font-size: 0.75em;
          margin: 0;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .pdc-wrapper .pdc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .pdc-wrapper .pdc-price {
          color: var(--pdc-card-text);
          font-weight: 700;
          font-size: 1em;
          transition: all 0.3s ease;
        }

        .pdc-wrapper .pdc-button {
          width: 28px;
          height: 28px;
          background: var(--pdc-card-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          transform: scale(0.9);
        }

        /* Hover Effects */
        .pdc-wrapper .pdc-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(124, 58, 237, 0.2);
        }

        .pdc-wrapper .pdc-card:hover .pdc-shine {
          opacity: 1;
          animation: pdc-shine-anim 3s infinite;
        }

        .pdc-wrapper .pdc-card:hover .pdc-glow {
          opacity: 1;
        }

        .pdc-wrapper .pdc-card:hover .pdc-badge {
          transform: scale(1);
          opacity: 1;
          z-index: 1;
        }

        .pdc-wrapper .pdc-card:hover .pdc-image {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .pdc-wrapper .pdc-card:hover .pdc-title {
          color: var(--pdc-card-accent);
          transform: translateX(2px);
        }

        .pdc-wrapper .pdc-card:hover .pdc-description {
          opacity: 1;
          transform: translateX(2px);
        }

        .pdc-wrapper .pdc-card:hover .pdc-price {
          color: var(--pdc-card-accent);
          transform: translateX(2px);
        }

        .pdc-wrapper .pdc-card:hover .pdc-button {
          transform: scale(1);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
        }

        .pdc-wrapper .pdc-card:hover .pdc-button svg {
          animation: pdc-pulse-anim 1.5s infinite;
        }

        /* Active State */
        .pdc-wrapper .pdc-card:active {
          transform: translateY(-5px) scale(0.98);
        }

        /* Animations */
        @keyframes pdc-shine-anim {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pdc-pulse-anim {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        `}),e.jsxs("div",{className:"pdc-card",children:[e.jsx("div",{className:"pdc-shine"}),e.jsx("div",{className:"pdc-glow"}),e.jsxs("div",{className:"pdc-content",children:[e.jsx("div",{className:"pdc-badge",children:"NEW"}),e.jsx("div",{className:"pdc-image"}),e.jsxs("div",{className:"pdc-text",children:[e.jsx("p",{className:"pdc-title",children:"Premium Design"}),e.jsx("p",{className:"pdc-description",children:"Hover to reveal stunning effects"})]}),e.jsxs("div",{className:"pdc-footer",children:[e.jsx("div",{className:"pdc-price",children:"$49.99"}),e.jsx("div",{className:"pdc-button",children:e.jsx("svg",{height:16,width:16,viewBox:"0 0 24 24",children:e.jsx("path",{strokeWidth:2,stroke:"currentColor",d:"M4 12H20M12 4V20",fill:"currentColor"})})})]})]})]})]})})}const Gn=`import React from 'react';

const ThemeRadio = () => {
  return (
    <div className="tr-wrapper">
      <style>
        {\`
        .tr-wrapper .tr-popup {
          --tr-text-color: #e0e0e0;
          --tr-bg: #3A3A3A;
          --tr-btn-hover: #5A5656;
          --tr-btn-active: #b9b9b970;
          color: var(--tr-text-color);
          position: relative;
          user-select: none;
        }

        .tr-wrapper .tr-input {
          display: none;
        }

        .tr-wrapper .tr-list-container {
          position: absolute;
          left: 0;
          top: 2.5em;
          display: none;
          z-index: 10;
        }

        .tr-wrapper .tr-button {
          background-color: var(--tr-bg);
          padding: 0 0.5em;
          height: 2em;
          display: inline-flex;
          align-items: center;
          gap: 0.3em;
          border-radius: 0.3em;
          cursor: pointer;
          font-weight: bold;
        }

        .tr-wrapper .tr-list {
          margin: 0;
          padding: 0.5em;
          list-style: none;
          background-color: var(--tr-bg);
          border-radius: 0.3em;
          display: flex;
          flex-direction: column;
          gap: 0.2em;
        }

        .tr-wrapper .tr-list label {
          display: flex;
          align-items: center;
          padding: 0.35em 1em;
          gap: 0.4em;
          border-radius: 0.25em;
          cursor: pointer;
          white-space: nowrap;
        }

        .tr-wrapper .tr-input:checked ~ .tr-list-container {
          display: block;
        }

        .tr-wrapper .tr-list label:hover,
        .tr-wrapper .tr-button:hover {
          background-color: var(--tr-btn-hover);
        }

        /* Active states */
        .tr-wrapper #tr-default:checked ~ .tr-list-container label[for="tr-default"],
        .tr-wrapper #tr-light:checked ~ .tr-list-container label[for="tr-light"],
        .tr-wrapper #tr-dark:checked ~ .tr-list-container label[for="tr-dark"] {
          background-color: var(--tr-btn-active);
        }

        /* Icon visibility */
        .tr-wrapper .tr-icon-svg { display: none; width: 14px; height: 14px; }
        
        .tr-wrapper #tr-default:checked ~ .tr-button .tr-default-icon,
        .tr-wrapper #tr-light:checked ~ .tr-button .tr-sun-icon,
        .tr-wrapper #tr-dark:checked ~ .tr-button .tr-moon-icon {
          display: block;
        }
        \`}
      </style>
      <div className="tr-popup">
        <input type="radio" name="tr-theme" id="tr-default" className="tr-input" defaultChecked />
        <input type="radio" name="tr-theme" id="tr-light" className="tr-input" />
        <input type="radio" name="tr-theme" id="tr-dark" className="tr-input" />
        <input type="checkbox" id="tr-checkbox" className="tr-input" />
        
        <label htmlFor="tr-checkbox" className="tr-button">
          {/* Default Icon */}
          <svg className="tr-icon-svg tr-default-icon" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 2.52267C6.13332 2.64713 4.86254 3.27802 3.9372 4.29146C3.01186 5.3049 2.49882 6.62766 2.49882 8C2.49882 9.37234 3.01186 10.6951 3.9372 11.7085C4.86254 12.722 6.13332 13.3529 7.5 13.4773V2.52267ZM1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8Z"/></svg>
          {/* Sun Icon */}
          <svg className="tr-icon-svg tr-sun-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M8 4C5.79 4 4 5.79 4 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-2.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm10.8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/></svg>
          {/* Moon Icon */}
          <svg className="tr-icon-svg tr-moon-icon" viewBox="0 0 14 14" fill="currentColor"><path d="M7.24 14c2.87 0 5.44-1.75 6.5-4.4-.5.2-1.1.2-1.7.2-3.1 0-5.6-2.5-5.6-5.6 0-.6.1-1.2.2-1.7C3.99.55.24 4.3.24 8.2c0 3.2 2.6 5.8 5.8 5.8z"/></svg>
          Theme
        </label>
        
        <div className="tr-list-container">
          <ul className="tr-list">
            <li><label htmlFor="tr-default">Default</label></li>
            <li><label htmlFor="tr-light">Light</label></li>
            <li><label htmlFor="tr-dark">Dark</label></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ThemeRadio;
`;function qn(){return e.jsx(k,{title:"Theme Radio",code:Gn,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"tr-wrapper",children:[e.jsx("style",{children:`
        .tr-wrapper .tr-popup {
          --tr-text-color: #e0e0e0;
          --tr-bg: #3A3A3A;
          --tr-btn-hover: #5A5656;
          --tr-btn-active: #b9b9b970;
          color: var(--tr-text-color);
          position: relative;
          user-select: none;
          font-family: inherit;
        }

        .tr-wrapper .tr-input {
          display: none;
        }

        .tr-wrapper .tr-list-container {
          position: absolute;
          left: 0;
          top: 2.5em;
          display: none;
          z-index: 10;
        }

        .tr-wrapper .tr-button {
          background-color: var(--tr-bg);
          padding: 0 0.5em;
          height: 2em;
          display: inline-flex;
          align-items: center;
          gap: 0.3em;
          border-radius: 0.3em;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        }

        .tr-wrapper .tr-list {
          margin: 0;
          padding: 0.5em;
          list-style: none;
          background-color: var(--tr-bg);
          border-radius: 0.3em;
          display: flex;
          flex-direction: column;
          gap: 0.2em;
          width: 120px;
        }

        .tr-wrapper .tr-list label {
          display: flex;
          align-items: center;
          padding: 0.35em 1em;
          gap: 0.4em;
          border-radius: 0.25em;
          cursor: pointer;
          white-space: nowrap;
          font-size: 14px;
        }

        .tr-wrapper .tr-input:checked ~ .tr-list-container {
          display: block;
        }

        .tr-wrapper .tr-list label:hover,
        .tr-wrapper .tr-button:hover {
          background-color: var(--tr-btn-hover);
        }

        .tr-wrapper #tr-default:checked ~ .tr-list-container label[for="tr-default"],
        .tr-wrapper #tr-light:checked ~ .tr-list-container label[for="tr-light"],
        .tr-wrapper #tr-dark:checked ~ .tr-list-container label[for="tr-dark"] {
          background-color: var(--tr-btn-active);
        }

        .tr-wrapper .tr-icon-svg { display: none; width: 14px; height: 14px; }
        
        .tr-wrapper #tr-default:checked ~ .tr-button .tr-default-icon,
        .tr-wrapper #tr-light:checked ~ .tr-button .tr-sun-icon,
        .tr-wrapper #tr-dark:checked ~ .tr-button .tr-moon-icon {
          display: block;
        }
        `}),e.jsxs("div",{className:"tr-popup",children:[e.jsx("input",{type:"radio",name:"tr-theme",id:"tr-default",className:"tr-input",defaultChecked:!0}),e.jsx("input",{type:"radio",name:"tr-theme",id:"tr-light",className:"tr-input"}),e.jsx("input",{type:"radio",name:"tr-theme",id:"tr-dark",className:"tr-input"}),e.jsx("input",{type:"checkbox",id:"tr-checkbox",className:"tr-input"}),e.jsxs("label",{htmlFor:"tr-checkbox",className:"tr-button",children:[e.jsx("svg",{className:"tr-icon-svg tr-default-icon",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 2.52267C6.13332 2.64713 4.86254 3.27802 3.9372 4.29146C3.01186 5.3049 2.49882 6.62766 2.49882 8C2.49882 9.37234 3.01186 10.6951 3.9372 11.7085C4.86254 12.722 6.13332 13.3529 7.5 13.4773V2.52267ZM1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8Z"})}),e.jsx("svg",{className:"tr-icon-svg tr-sun-icon",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 4C5.79 4 4 5.79 4 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-2.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm10.8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})}),e.jsx("svg",{className:"tr-icon-svg tr-moon-icon",viewBox:"0 0 14 14",fill:"currentColor",children:e.jsx("path",{d:"M7.24 14c2.87 0 5.44-1.75 6.5-4.4-.5.2-1.1.2-1.7.2-3.1 0-5.6-2.5-5.6-5.6 0-.6.1-1.2.2-1.7C3.99.55.24 4.3.24 8.2c0 3.2 2.6 5.8 5.8 5.8z"})}),"Theme"]}),e.jsx("div",{className:"tr-list-container",children:e.jsxs("ul",{className:"tr-list",children:[e.jsx("li",{children:e.jsx("label",{htmlFor:"tr-default",children:"Default"})}),e.jsx("li",{children:e.jsx("label",{htmlFor:"tr-light",children:"Light"})}),e.jsx("li",{children:e.jsx("label",{htmlFor:"tr-dark",children:"Dark"})})]})})]})]})})}const Wn=`import React from 'react';

const MatrixCube = () => {
  return (
    <div className="mc-wrapper">
      <style>
        {\`
        .mc-wrapper {
          perspective: 1000px;
        }

        @keyframes mc-animate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .mc-wrapper .mc-container {
          position: relative;
          transform: skewY(-20deg);
          animation: mc-animate 5s linear infinite;
        }

        .mc-wrapper .mc-cube {
          position: relative;
          z-index: 2;
        }

        .mc-wrapper .mc-cube:nth-child(2) {
          z-index: 1;
          translate: -60px -60px;
        }

        .mc-wrapper .mc-cube:nth-child(3) {
          z-index: 3;
          translate: 60px 60px;
        }

        .mc-wrapper .mc-div {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 30px;
          translate: calc(-70px * var(--x)) calc(-60px * var(--y));
        }

        .mc-wrapper .mc-span {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 50px;
          background: #dcdcdc;
          z-index: calc(1 * var(--i));
          transition: 1.5s;
        }

        .mc-wrapper .mc-span:hover {
          transition: 0s;
          background: #ef4149;
          filter: drop-shadow(0 0 30px #ef4149);
        }

        .mc-wrapper .mc-span:hover:before,
        .mc-wrapper .mc-span:hover:after {
          transition: 0s;
          background: #ef4149;
        }

        .mc-wrapper .mc-span:before {
          content: "";
          position: absolute;
          left: -40px;
          width: 40px;
          height: 100%;
          background: #fff;
          transform-origin: right;
          transform: skewY(45deg);
          transition: 1.5s;
        }

        .mc-wrapper .mc-span:after {
          content: "";
          position: absolute;
          top: -40px;
          left: 0px;
          width: 100%;
          height: 40px;
          background: #f2f2f2;
          transform-origin: bottom;
          transform: skewX(45deg);
          transition: 1.5s;
        }
        \`}
      </style>
      <div className="mc-container">
        {[0, 1, 2].map((k) => (
          <div className="mc-cube" key={k}>
            <div className="mc-div" style={{'--x': -1, '--y': 0} as React.CSSProperties}>
              <span className="mc-span" style={{'--i': 3} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 2} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 1} as React.CSSProperties} />
            </div>
            <div className="mc-div" style={{'--x': 0, '--y': 0} as React.CSSProperties}>
              <span className="mc-span" style={{'--i': 3} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 2} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 1} as React.CSSProperties} />
            </div>
            <div className="mc-div" style={{'--x': 1, '--y': 0} as React.CSSProperties}>
              <span className="mc-span" style={{'--i': 3} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 2} as React.CSSProperties} />
              <span className="mc-span" style={{'--i': 1} as React.CSSProperties} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatrixCube;
`;function Un(){return e.jsx(k,{title:"Matrix Cube",code:Wn,className:"flex items-center justify-center p-12 min-h-[400px]",children:e.jsxs("div",{className:"mc-wrapper",children:[e.jsx("style",{children:`
        .mc-wrapper {
          perspective: 1000px;
          padding: 100px;
        }

        @keyframes mc-animate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .mc-wrapper .mc-container {
          position: relative;
          transform: skewY(-20deg);
          animation: mc-animate 5s linear infinite;
        }

        .mc-wrapper .mc-cube {
          position: relative;
          z-index: 2;
        }

        .mc-wrapper .mc-cube:nth-child(2) {
          z-index: 1;
          translate: -60px -60px;
        }

        .mc-wrapper .mc-cube:nth-child(3) {
          z-index: 3;
          translate: 60px 60px;
        }

        .mc-wrapper .mc-div {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 30px;
          translate: calc(-70px * var(--x)) calc(-60px * var(--y));
        }

        .mc-wrapper .mc-span {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 50px;
          background: #dcdcdc;
          z-index: calc(1 * var(--i));
          transition: 1.5s;
        }

        .mc-wrapper .mc-span:hover {
          transition: 0s;
          background: #ef4149;
          filter: drop-shadow(0 0 30px #ef4149);
        }

        .mc-wrapper .mc-span:hover:before,
        .mc-wrapper .mc-span:hover:after {
          transition: 0s;
          background: #ef4149;
        }

        .mc-wrapper .mc-span:before {
          content: "";
          position: absolute;
          left: -40px;
          width: 40px;
          height: 100%;
          background: #fff;
          transform-origin: right;
          transform: skewY(45deg);
          transition: 1.5s;
        }

        .mc-wrapper .mc-span:after {
          content: "";
          position: absolute;
          top: -40px;
          left: 0px;
          width: 100%;
          height: 40px;
          background: #f2f2f2;
          transform-origin: bottom;
          transform: skewX(45deg);
          transition: 1.5s;
        }
        `}),e.jsx("div",{className:"mc-container",children:[0,1,2].map(l=>e.jsxs("div",{className:"mc-cube",children:[e.jsxs("div",{className:"mc-div",style:{"--x":-1,"--y":0},children:[e.jsx("span",{className:"mc-span",style:{"--i":3}}),e.jsx("span",{className:"mc-span",style:{"--i":2}}),e.jsx("span",{className:"mc-span",style:{"--i":1}})]}),e.jsxs("div",{className:"mc-div",style:{"--x":0,"--y":0},children:[e.jsx("span",{className:"mc-span",style:{"--i":3}}),e.jsx("span",{className:"mc-span",style:{"--i":2}}),e.jsx("span",{className:"mc-span",style:{"--i":1}})]}),e.jsxs("div",{className:"mc-div",style:{"--x":1,"--y":0},children:[e.jsx("span",{className:"mc-span",style:{"--i":3}}),e.jsx("span",{className:"mc-span",style:{"--i":2}}),e.jsx("span",{className:"mc-span",style:{"--i":1}})]})]},l))})]})})}const $n=`import React from 'react';

const GradientSelect = () => {
  return (
    <div className="relative group rounded-lg w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
      <svg y={0} xmlns="http://www.w3.org/2000/svg" x={0} width={100} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height={100} className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300">
        <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" fill="none" d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z" />
      </svg>
      <select className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5">
        <option>HTML</option>
        <option>React</option>
        <option>Vue</option>
        <option>Angular</option>
        <option>Svelte</option>
      </select>
    </div>
  );
}

export default GradientSelect;
`;function Qn(){return e.jsx(k,{title:"Gradient Select",code:$n,className:"flex items-center justify-center p-12 min-h-[200px]",children:e.jsxs("div",{className:"relative group rounded-lg w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]",children:[e.jsx("svg",{y:0,xmlns:"http://www.w3.org/2000/svg",x:0,width:100,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",height:100,className:"w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300",children:e.jsx("path",{strokeWidth:4,strokeLinejoin:"round",strokeLinecap:"round",fill:"none",d:"M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"})}),e.jsxs("select",{className:"appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5",children:[e.jsx("option",{children:"HTML"}),e.jsx("option",{children:"React"}),e.jsx("option",{children:"Vue"}),e.jsx("option",{children:"Angular"}),e.jsx("option",{children:"Svelte"})]})]})})}function ke(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function Qr(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var le={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Je={duration:.5,overwrite:!1,delay:0},nr,U,D,me=1e8,Y=1/me,qt=Math.PI*2,Jn=qt/4,Kn=0,Jr=Math.sqrt,e0=Math.cos,t0=Math.sin,W=function(t){return typeof t=="string"},X=function(t){return typeof t=="function"},je=function(t){return typeof t=="number"},lr=function(t){return typeof t>"u"},we=function(t){return typeof t=="object"},K=function(t){return t!==!1},cr=function(){return typeof window<"u"},yt=function(t){return X(t)||W(t)},Kr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Q=Array.isArray,r0=/random\([^)]+\)/g,a0=/,\s*/g,Lr=/(?:-?\.?\d|\.)+/gi,ea=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qe=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pt=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ta=/[+-]=-?[.\d]+/,i0=/[^,'"\[\]\s]+/gi,o0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,E,ge,Wt,dr,ce={},Nt={},ra,aa=function(t){return(Nt=Ke(t,ce))&&ae},pr=function(t,r){return console.warn("Invalid property",t,"set to",r,"Missing plugin? gsap.registerPlugin()")},ht=function(t,r){return!r&&console.warn(t)},ia=function(t,r){return t&&(ce[t]=r)&&Nt&&(Nt[t]=r)||ce},mt=function(){return 0},s0={suppressEvents:!0,isStart:!0,kill:!1},kt={suppressEvents:!0,kill:!1},n0={suppressEvents:!0},hr={},Le=[],Ut={},oa,ie={},Et={},Mr=30,At=[],mr="",fr=function(t){var r=t[0],a,i;if(we(r)||X(r)||(t=[t]),!(a=(r._gsap||{}).harness)){for(i=At.length;i--&&!At[i].targetTest(r););a=At[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new La(t[i],a)))||t.splice(i,1);return t},Oe=function(t){return t._gsap||fr(fe(t))[0]._gsap},sa=function(t,r,a){return(a=t[r])&&X(a)?t[r]():lr(a)&&t.getAttribute&&t.getAttribute(r)||a},ee=function(t,r){return(t=t.split(",")).forEach(r)||t},F=function(t){return Math.round(t*1e5)/1e5||0},P=function(t){return Math.round(t*1e7)/1e7||0},Ue=function(t,r){var a=r.charAt(0),i=parseFloat(r.substr(2));return t=parseFloat(t),a==="+"?t+i:a==="-"?t-i:a==="*"?t*i:t/i},l0=function(t,r){for(var a=r.length,i=0;t.indexOf(r[i])<0&&++i<a;);return i<a},Ct=function(){var t=Le.length,r=Le.slice(0),a,i;for(Ut={},Le.length=0,a=0;a<t;a++)i=r[a],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xr=function(t){return!!(t._initted||t._startAt||t.add)},na=function(t,r,a,i){Le.length&&!U&&Ct(),t.render(r,a,!!(U&&r<0&&xr(t))),Le.length&&!U&&Ct()},la=function(t){var r=parseFloat(t);return(r||r===0)&&(t+"").match(i0).length<2?r:W(t)?t.trim():t},ca=function(t){return t},de=function(t,r){for(var a in r)a in t||(t[a]=r[a]);return t},c0=function(t){return function(r,a){for(var i in a)i in r||i==="duration"&&t||i==="ease"||(r[i]=a[i])}},Ke=function(t,r){for(var a in r)t[a]=r[a];return t},Br=function l(t,r){for(var a in r)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=we(r[a])?l(t[a]||(t[a]={}),r[a]):r[a]);return t},zt=function(t,r){var a={},i;for(i in t)i in r||(a[i]=t[i]);return a},ct=function(t){var r=t.parent||E,a=t.keyframes?c0(Q(t.keyframes)):de;if(K(t.inherit))for(;r;)a(t,r.vars.defaults),r=r.parent||r._dp;return t},d0=function(t,r){for(var a=t.length,i=a===r.length;i&&a--&&t[a]===r[a];);return a<0},da=function(t,r,a,i,o){var s=t[i],n;if(o)for(n=r[o];s&&s[o]>n;)s=s._prev;return s?(r._next=s._next,s._next=r):(r._next=t[a],t[a]=r),r._next?r._next._prev=r:t[i]=r,r._prev=s,r.parent=r._dp=t,r},St=function(t,r,a,i){a===void 0&&(a="_first"),i===void 0&&(i="_last");var o=r._prev,s=r._next;o?o._next=s:t[a]===r&&(t[a]=s),s?s._prev=o:t[i]===r&&(t[i]=o),r._next=r._prev=r.parent=null},Be=function(t,r){t.parent&&(!r||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Xe=function(t,r){if(t&&(!r||r._end>t._dur||r._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},p0=function(t){for(var r=t.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return t},$t=function(t,r,a,i){return t._startAt&&(U?t._startAt.revert(kt):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(r,!0,i))},h0=function l(t){return!t||t._ts&&l(t.parent)},Rr=function(t){return t._repeat?et(t._tTime,t=t.duration()+t._rDelay)*t:0},et=function(t,r){var a=Math.floor(t=P(t/r));return t&&a===t?a-1:a},Lt=function(t,r){return(t-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Tt=function(t){return t._end=P(t._start+(t._tDur/Math.abs(t._ts||t._rts||Y)||0))},Yt=function(t,r){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=P(a._time-(t._ts>0?r/t._ts:((t._dirty?t.totalDuration():t._tDur)-r)/-t._ts)),Tt(t),a._dirty||Xe(a,t)),t},pa=function(t,r){var a;if((r._time||!r._dur&&r._initted||r._start<t._time&&(r._dur||!r.add))&&(a=Lt(t.rawTime(),r),(!r._dur||vt(0,r.totalDuration(),a)-r._tTime>Y)&&r.render(a,!0)),Xe(t,r)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Y}},ue=function(t,r,a,i){return r.parent&&Be(r),r._start=P((je(a)?a:a||t!==E?pe(t,a,r):t._time)+r._delay),r._end=P(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),da(t,r,"_first","_last",t._sort?"_start":0),Qt(r)||(t._recent=r),i||pa(t,r),t._ts<0&&Yt(t,t._tTime),t},ha=function(t,r){return(ce.ScrollTrigger||pr("scrollTrigger",r))&&ce.ScrollTrigger.create(r,t)},ma=function(t,r,a,i,o){if(ur(t,r,o),!t._initted)return 1;if(!a&&t._pt&&!U&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&oa!==oe.frame)return Le.push(t),t._lazy=[o,i],1},m0=function l(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||l(r))},Qt=function(t){var r=t.data;return r==="isFromStart"||r==="isStart"},f0=function(t,r,a,i){var o=t.ratio,s=r<0||!r&&(!t._start&&m0(t)&&!(!t._initted&&Qt(t))||(t._ts<0||t._dp._ts<0)&&!Qt(t))?0:1,n=t._rDelay,c=0,d,p,m;if(n&&t._repeat&&(c=vt(0,t._tDur,r),p=et(c,n),t._yoyo&&p&1&&(s=1-s),p!==et(t._tTime,n)&&(o=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==o||U||i||t._zTime===Y||!r&&t._zTime){if(!t._initted&&ma(t,r,i,a,c))return;for(m=t._zTime,t._zTime=r||(a?Y:0),a||(a=r&&!m),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=c,d=t._pt;d;)d.r(s,d.d),d=d._next;r<0&&$t(t,r,a,!0),t._onUpdate&&!a&&se(t,"onUpdate"),c&&t._repeat&&!a&&t.parent&&se(t,"onRepeat"),(r>=t._tDur||r<0)&&t.ratio===s&&(s&&Be(t,1),!a&&!U&&(se(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=r)},x0=function(t,r,a){var i;if(a>r)for(i=t._first;i&&i._start<=a;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=t._last;i&&i._start>=a;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},tt=function(t,r,a,i){var o=t._repeat,s=P(r)||0,n=t._tTime/t._tDur;return n&&!i&&(t._time*=s/t._dur),t._dur=s,t._tDur=o?o<0?1e10:P(s*(o+1)+t._rDelay*o):s,n>0&&!i&&Yt(t,t._tTime=t._tDur*n),t.parent&&Tt(t),a||Xe(t.parent,t),t},Sr=function(t){return t instanceof J?Xe(t):tt(t,t._dur)},g0={_start:0,endTime:mt,totalDuration:mt},pe=function l(t,r,a){var i=t.labels,o=t._recent||g0,s=t.duration()>=me?o.endTime(!1):t._dur,n,c,d;return W(r)&&(isNaN(r)||r in i)?(c=r.charAt(0),d=r.substr(-1)==="%",n=r.indexOf("="),c==="<"||c===">"?(n>=0&&(r=r.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(r.substr(1))||0)*(d?(n<0?o:a).totalDuration()/100:1)):n<0?(r in i||(i[r]=s),i[r]):(c=parseFloat(r.charAt(n-1)+r.substr(n+1)),d&&a&&(c=c/100*(Q(a)?a[0]:a).totalDuration()),n>1?l(t,r.substr(0,n-1),a)+c:s+c)):r==null?s:+r},dt=function(t,r,a){var i=je(r[1]),o=(i?2:1)+(t<2?0:1),s=r[o],n,c;if(i&&(s.duration=r[1]),s.parent=a,t){for(n=s,c=a;c&&!("immediateRender"in n);)n=c.vars.defaults||{},c=K(c.vars.inherit)&&c.parent;s.immediateRender=K(n.immediateRender),t<2?s.runBackwards=1:s.startAt=r[o-1]}return new G(r[0],s,r[o+1])},Te=function(t,r){return t||t===0?r(t):r},vt=function(t,r,a){return a<t?t:a>r?r:a},$=function(t,r){return!W(t)||!(r=o0.exec(t))?"":r[1]},u0=function(t,r,a){return Te(a,function(i){return vt(t,r,i)})},Jt=[].slice,fa=function(t,r){return t&&we(t)&&"length"in t&&(!r&&!t.length||t.length-1 in t&&we(t[0]))&&!t.nodeType&&t!==ge},b0=function(t,r,a){return a===void 0&&(a=[]),t.forEach(function(i){var o;return W(i)&&!r||fa(i,1)?(o=a).push.apply(o,fe(i)):a.push(i)})||a},fe=function(t,r,a){return D&&!r&&D.selector?D.selector(t):W(t)&&!a&&(Wt||!rt())?Jt.call((r||dr).querySelectorAll(t),0):Q(t)?b0(t,a):fa(t)?Jt.call(t,0):t?[t]:[]},Kt=function(t){return t=fe(t)[0]||ht("Invalid scope")||{},function(r){var a=t.current||t.nativeElement||t;return fe(r,a.querySelectorAll?a:a===t?ht("Invalid scope")||dr.createElement("div"):t)}},xa=function(t){return t.sort(function(){return .5-Math.random()})},ga=function(t){if(X(t))return t;var r=we(t)?t:{each:t},a=Fe(r.ease),i=r.from||0,o=parseFloat(r.base)||0,s={},n=i>0&&i<1,c=isNaN(i)||n,d=r.axis,p=i,m=i;return W(i)?p=m={center:.5,edges:.5,end:1}[i]||0:!n&&c&&(p=i[0],m=i[1]),function(f,x,u){var h=(u||r).length,g=s[h],y,A,b,j,v,N,C,_,w;if(!g){if(w=r.grid==="auto"?0:(r.grid||[1,me])[1],!w){for(C=-me;C<(C=u[w++].getBoundingClientRect().left)&&w<h;);w<h&&w--}for(g=s[h]=[],y=c?Math.min(w,h)*p-.5:i%w,A=w===me?0:c?h*m/w-.5:i/w|0,C=0,_=me,N=0;N<h;N++)b=N%w-y,j=A-(N/w|0),g[N]=v=d?Math.abs(d==="y"?j:b):Jr(b*b+j*j),v>C&&(C=v),v<_&&(_=v);i==="random"&&xa(g),g.max=C-_,g.min=_,g.v=h=(parseFloat(r.amount)||parseFloat(r.each)*(w>h?h-1:d?d==="y"?h/w:w:Math.max(w,h/w))||0)*(i==="edges"?-1:1),g.b=h<0?o-h:o,g.u=$(r.amount||r.each)||0,a=a&&h<0?Na(a):a}return h=(g[f]-g.min)/g.max||0,P(g.b+(a?a(h):h)*g.v)+g.u}},er=function(t){var r=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var i=P(Math.round(parseFloat(a)/t)*t*r);return(i-i%1)/r+(je(a)?0:$(a))}},ua=function(t,r){var a=Q(t),i,o;return!a&&we(t)&&(i=a=t.radius||me,t.values?(t=fe(t.values),(o=!je(t[0]))&&(i*=i)):t=er(t.increment)),Te(r,a?X(t)?function(s){return o=t(s),Math.abs(o-s)<=i?o:s}:function(s){for(var n=parseFloat(o?s.x:s),c=parseFloat(o?s.y:0),d=me,p=0,m=t.length,f,x;m--;)o?(f=t[m].x-n,x=t[m].y-c,f=f*f+x*x):f=Math.abs(t[m]-n),f<d&&(d=f,p=m);return p=!i||d<=i?t[p]:s,o||p===s||je(s)?p:p+$(s)}:er(t))},ba=function(t,r,a,i){return Te(Q(t)?!r:a===!0?!!(a=0):!i,function(){return Q(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(i=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(r-t+a*.99))/a)*a*i)/i})},v0=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(i){return r.reduce(function(o,s){return s(o)},i)}},w0=function(t,r){return function(a){return t(parseFloat(a))+(r||$(a))}},y0=function(t,r,a){return wa(t,r,0,1,a)},va=function(t,r,a){return Te(a,function(i){return t[~~r(i)]})},k0=function l(t,r,a){var i=r-t;return Q(t)?va(t,l(0,t.length),r):Te(a,function(o){return(i+(o-t)%i)%i+t})},A0=function l(t,r,a){var i=r-t,o=i*2;return Q(t)?va(t,l(0,t.length-1),r):Te(a,function(s){return s=(o+(s-t)%o)%o||0,t+(s>i?o-s:s)})},ft=function(t){return t.replace(r0,function(r){var a=r.indexOf("[")+1,i=r.substring(a||7,a?r.indexOf("]"):r.length-1).split(a0);return ba(a?i:+i[0],a?0:+i[1],+i[2]||1e-5)})},wa=function(t,r,a,i,o){var s=r-t,n=i-a;return Te(o,function(c){return a+((c-t)/s*n||0)})},j0=function l(t,r,a,i){var o=isNaN(t+r)?0:function(x){return(1-x)*t+x*r};if(!o){var s=W(t),n={},c,d,p,m,f;if(a===!0&&(i=1)&&(a=null),s)t={p:t},r={p:r};else if(Q(t)&&!Q(r)){for(p=[],m=t.length,f=m-2,d=1;d<m;d++)p.push(l(t[d-1],t[d]));m--,o=function(u){u*=m;var h=Math.min(f,~~u);return p[h](u-h)},a=r}else i||(t=Ke(Q(t)?[]:{},t));if(!p){for(c in r)gr.call(n,t,c,"get",r[c]);o=function(u){return wr(u,n)||(s?t.p:t)}}}return Te(a,o)},Tr=function(t,r,a){var i=t.labels,o=me,s,n,c;for(s in i)n=i[s]-r,n<0==!!a&&n&&o>(n=Math.abs(n))&&(c=s,o=n);return c},se=function(t,r,a){var i=t.vars,o=i[r],s=D,n=t._ctx,c,d,p;if(o)return c=i[r+"Params"],d=i.callbackScope||t,a&&Le.length&&Ct(),n&&(D=n),p=c?o.apply(d,c):o.call(d),D=s,p},nt=function(t){return Be(t),t.scrollTrigger&&t.scrollTrigger.kill(!!U),t.progress()<1&&se(t,"onInterrupt"),t},We,ya=[],ka=function(t){if(t)if(t=!t.name&&t.default||t,cr()||t.headless){var r=t.name,a=X(t),i=r&&!a&&t.init?function(){this._props=[]}:t,o={init:mt,render:wr,add:gr,kill:I0,modifier:E0,rawVars:0},s={targetTest:0,get:0,getSetter:vr,aliases:{},register:0};if(rt(),t!==i){if(ie[r])return;de(i,de(zt(t,o),s)),Ke(i.prototype,Ke(o,zt(t,s))),ie[i.prop=r]=i,t.targetTest&&(At.push(i),hr[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}ia(r,i),t.register&&t.register(ae,i,te)}else ya.push(t)},S=255,lt={aqua:[0,S,S],lime:[0,S,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,S],navy:[0,0,128],white:[S,S,S],olive:[128,128,0],yellow:[S,S,0],orange:[S,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[S,0,0],pink:[S,192,203],cyan:[0,S,S],transparent:[S,S,S,0]},It=function(t,r,a){return t+=t<0?1:t>1?-1:0,(t*6<1?r+(a-r)*t*6:t<.5?a:t*3<2?r+(a-r)*(2/3-t)*6:r)*S+.5|0},Aa=function(t,r,a){var i=t?je(t)?[t>>16,t>>8&S,t&S]:0:lt.black,o,s,n,c,d,p,m,f,x,u;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),lt[t])i=lt[t];else if(t.charAt(0)==="#"){if(t.length<6&&(o=t.charAt(1),s=t.charAt(2),n=t.charAt(3),t="#"+o+o+s+s+n+n+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&S,i&S,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&S,t&S]}else if(t.substr(0,3)==="hsl"){if(i=u=t.match(Lr),!r)c=+i[0]%360/360,d=+i[1]/100,p=+i[2]/100,s=p<=.5?p*(d+1):p+d-p*d,o=p*2-s,i.length>3&&(i[3]*=1),i[0]=It(c+1/3,o,s),i[1]=It(c,o,s),i[2]=It(c-1/3,o,s);else if(~t.indexOf("="))return i=t.match(ea),a&&i.length<4&&(i[3]=1),i}else i=t.match(Lr)||lt.transparent;i=i.map(Number)}return r&&!u&&(o=i[0]/S,s=i[1]/S,n=i[2]/S,m=Math.max(o,s,n),f=Math.min(o,s,n),p=(m+f)/2,m===f?c=d=0:(x=m-f,d=p>.5?x/(2-m-f):x/(m+f),c=m===o?(s-n)/x+(s<n?6:0):m===s?(n-o)/x+2:(o-s)/x+4,c*=60),i[0]=~~(c+.5),i[1]=~~(d*100+.5),i[2]=~~(p*100+.5)),a&&i.length<4&&(i[3]=1),i},ja=function(t){var r=[],a=[],i=-1;return t.split(Me).forEach(function(o){var s=o.match(qe)||[];r.push.apply(r,s),a.push(i+=s.length+1)}),r.c=a,r},Yr=function(t,r,a){var i="",o=(t+i).match(Me),s=r?"hsla(":"rgba(",n=0,c,d,p,m;if(!o)return t;if(o=o.map(function(f){return(f=Aa(f,r,1))&&s+(r?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),a&&(p=ja(t),c=a.c,c.join(i)!==p.c.join(i)))for(d=t.replace(Me,"1").split(qe),m=d.length-1;n<m;n++)i+=d[n]+(~c.indexOf(n)?o.shift()||s+"0,0,0,0)":(p.length?p:o.length?o:a).shift());if(!d)for(d=t.split(Me),m=d.length-1;n<m;n++)i+=d[n]+o[n];return i+d[m]},Me=function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in lt)l+="|"+t+"\\b";return new RegExp(l+")","gi")}(),_0=/hsl[a]?\(/,_a=function(t){var r=t.join(" "),a;if(Me.lastIndex=0,Me.test(r))return a=_0.test(r),t[1]=Yr(t[1],a),t[0]=Yr(t[0],a,ja(t[1])),!0},xt,oe=function(){var l=Date.now,t=500,r=33,a=l(),i=a,o=1e3/240,s=o,n=[],c,d,p,m,f,x,u=function h(g){var y=l()-i,A=g===!0,b,j,v,N;if((y>t||y<0)&&(a+=y-r),i+=y,v=i-a,b=v-s,(b>0||A)&&(N=++m.frame,f=v-m.time*1e3,m.time=v=v/1e3,s+=b+(b>=o?4:o-b),j=1),A||(c=d(h)),j)for(x=0;x<n.length;x++)n[x](v,f,N,g)};return m={time:0,frame:0,tick:function(){u(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){ra&&(!Wt&&cr()&&(ge=Wt=window,dr=ge.document||{},ce.gsap=ae,(ge.gsapVersions||(ge.gsapVersions=[])).push(ae.version),aa(Nt||ge.GreenSockGlobals||!ge.gsap&&ge||{}),ya.forEach(ka)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&m.sleep(),d=p||function(g){return setTimeout(g,s-m.time*1e3+1|0)},xt=1,u(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(c),xt=0,d=mt},lagSmoothing:function(g,y){t=g||1/0,r=Math.min(y||33,t)},fps:function(g){o=1e3/(g||240),s=m.time*1e3+o},add:function(g,y,A){var b=y?function(j,v,N,C){g(j,v,N,C),m.remove(b)}:g;return m.remove(g),n[A?"unshift":"push"](b),rt(),b},remove:function(g,y){~(y=n.indexOf(g))&&n.splice(y,1)&&x>=y&&x--},_listeners:n},m}(),rt=function(){return!xt&&oe.wake()},R={},N0=/^[\d.\-M][\d.\-,\s]/,C0=/["']/g,z0=function(t){for(var r={},a=t.substr(1,t.length-3).split(":"),i=a[0],o=1,s=a.length,n,c,d;o<s;o++)c=a[o],n=o!==s-1?c.lastIndexOf(","):c.length,d=c.substr(0,n),r[i]=isNaN(d)?d.replace(C0,"").trim():+d,i=c.substr(n+1).trim();return r},L0=function(t){var r=t.indexOf("(")+1,a=t.indexOf(")"),i=t.indexOf("(",r);return t.substring(r,~i&&i<a?t.indexOf(")",a+1):a)},M0=function(t){var r=(t+"").split("("),a=R[r[0]];return a&&r.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[z0(r[1])]:L0(t).split(",").map(la)):R._CE&&N0.test(t)?R._CE("",t):a},Na=function(t){return function(r){return 1-t(1-r)}},Ca=function l(t,r){for(var a=t._first,i;a;)a instanceof J?l(a,r):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==r&&(a.timeline?l(a.timeline,r):(i=a._ease,a._ease=a._yEase,a._yEase=i,a._yoyo=r)),a=a._next},Fe=function(t,r){return t&&(X(t)?t:R[t]||M0(t))||r},He=function(t,r,a,i){a===void 0&&(a=function(c){return 1-r(1-c)}),i===void 0&&(i=function(c){return c<.5?r(c*2)/2:1-r((1-c)*2)/2});var o={easeIn:r,easeOut:a,easeInOut:i},s;return ee(t,function(n){R[n]=ce[n]=o,R[s=n.toLowerCase()]=a;for(var c in o)R[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=R[n+"."+c]=o[c]}),o},za=function(t){return function(r){return r<.5?(1-t(1-r*2))/2:.5+t((r-.5)*2)/2}},Ot=function l(t,r,a){var i=r>=1?r:1,o=(a||(t?.3:.45))/(r<1?r:1),s=o/qt*(Math.asin(1/i)||0),n=function(p){return p===1?1:i*Math.pow(2,-10*p)*t0((p-s)*o)+1},c=t==="out"?n:t==="in"?function(d){return 1-n(1-d)}:za(n);return o=qt/o,c.config=function(d,p){return l(t,d,p)},c},Xt=function l(t,r){r===void 0&&(r=1.70158);var a=function(s){return s?--s*s*((r+1)*s+r)+1:0},i=t==="out"?a:t==="in"?function(o){return 1-a(1-o)}:za(a);return i.config=function(o){return l(t,o)},i};ee("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var r=t<5?t+1:t;He(l+",Power"+(r-1),t?function(a){return Math.pow(a,r)}:function(a){return a},function(a){return 1-Math.pow(1-a,r)},function(a){return a<.5?Math.pow(a*2,r)/2:1-Math.pow((1-a)*2,r)/2})});R.Linear.easeNone=R.none=R.Linear.easeIn;He("Elastic",Ot("in"),Ot("out"),Ot());(function(l,t){var r=1/t,a=2*r,i=2.5*r,o=function(n){return n<r?l*n*n:n<a?l*Math.pow(n-1.5/t,2)+.75:n<i?l*(n-=2.25/t)*n+.9375:l*Math.pow(n-2.625/t,2)+.984375};He("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);He("Expo",function(l){return Math.pow(2,10*(l-1))*l+l*l*l*l*l*l*(1-l)});He("Circ",function(l){return-(Jr(1-l*l)-1)});He("Sine",function(l){return l===1?1:-e0(l*Jn)+1});He("Back",Xt("in"),Xt("out"),Xt());R.SteppedEase=R.steps=ce.SteppedEase={config:function(t,r){t===void 0&&(t=1);var a=1/t,i=t+(r?0:1),o=r?1:0,s=1-Y;return function(n){return((i*vt(0,s,n)|0)+o)*a}}};Je.ease=R["quad.out"];ee("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return mr+=l+","+l+"Params,"});var La=function(t,r){this.id=Kn++,t._gsap=this,this.target=t,this.harness=r,this.get=r?r.get:sa,this.set=r?r.getSetter:vr},gt=function(){function l(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,tt(this,+r.duration,1,1),this.data=r.data,D&&(this._ctx=D,D.data.push(this)),xt||oe.wake()}var t=l.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,tt(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,i){if(rt(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Yt(this,a),!o._dp||o.parent||pa(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ue(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Y||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),na(this,a,i)),this},t.time=function(a,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Rr(this))%(this._dur+this._rDelay)||(a?this._dur:0),i):this._time},t.totalProgress=function(a,i){return arguments.length?this.totalTime(this.totalDuration()*a,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Rr(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*o,i):this._repeat?et(this._tTime,o)+1:1},t.timeScale=function(a,i){if(!arguments.length)return this._rts===-Y?0:this._rts;if(this._rts===a)return this;var o=this.parent&&this._ts?Lt(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Y?0:this._rts,this.totalTime(vt(-Math.abs(this._delay),this.totalDuration(),o),i!==!1),Tt(this),p0(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Y&&(this._tTime-=Y)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=P(a);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ue(i,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(K(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var i=this.parent||this._dp;return i?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lt(i.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=n0);var i=U;return U=a,xr(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),U=i,this},t.globalTime=function(a){for(var i=this,o=arguments.length?a:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(a):o},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Sr(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var i=this._time;return this._rDelay=a,Sr(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,i){return this.totalTime(pe(this,a),K(i))},t.restart=function(a,i){return this.play().totalTime(a?-this._delay:0,K(i)),this._dur||(this._zTime=-Y),this},t.play=function(a,i){return a!=null&&this.seek(a,i),this.reversed(!1).paused(!1)},t.reverse=function(a,i){return a!=null&&this.seek(a||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(a,i){return a!=null&&this.seek(a,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Y:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Y,this},t.isActive=function(){var a=this.parent||this._dp,i=this._start,o;return!!(!a||this._ts&&this._initted&&a.isActive()&&(o=a.rawTime(!0))>=i&&o<this.endTime(!0)-Y)},t.eventCallback=function(a,i,o){var s=this.vars;return arguments.length>1?(i?(s[a]=i,o&&(s[a+"Params"]=o),a==="onUpdate"&&(this._onUpdate=i)):delete s[a],this):s[a]},t.then=function(a){var i=this,o=i._prom;return new Promise(function(s){var n=X(a)?a:ca,c=function(){var p=i.then;i.then=null,o&&o(),X(n)&&(n=n(i))&&(n.then||n===i)&&(i.then=p),s(n),i.then=p};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){nt(this)},l}();de(gt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Y,_prom:0,_ps:!1,_rts:1});var J=function(l){Qr(t,l);function t(a,i){var o;return a===void 0&&(a={}),o=l.call(this,a)||this,o.labels={},o.smoothChildTiming=!!a.smoothChildTiming,o.autoRemoveChildren=!!a.autoRemoveChildren,o._sort=K(a.sortChildren),E&&ue(a.parent||E,ke(o),i),a.reversed&&o.reverse(),a.paused&&o.paused(!0),a.scrollTrigger&&ha(ke(o),a.scrollTrigger),o}var r=t.prototype;return r.to=function(i,o,s){return dt(0,arguments,this),this},r.from=function(i,o,s){return dt(1,arguments,this),this},r.fromTo=function(i,o,s,n){return dt(2,arguments,this),this},r.set=function(i,o,s){return o.duration=0,o.parent=this,ct(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new G(i,o,pe(this,s),1),this},r.call=function(i,o,s){return ue(this,G.delayedCall(0,i,o),s)},r.staggerTo=function(i,o,s,n,c,d,p){return s.duration=o,s.stagger=s.stagger||n,s.onComplete=d,s.onCompleteParams=p,s.parent=this,new G(i,s,pe(this,c)),this},r.staggerFrom=function(i,o,s,n,c,d,p){return s.runBackwards=1,ct(s).immediateRender=K(s.immediateRender),this.staggerTo(i,o,s,n,c,d,p)},r.staggerFromTo=function(i,o,s,n,c,d,p,m){return n.startAt=s,ct(n).immediateRender=K(n.immediateRender),this.staggerTo(i,o,n,c,d,p,m)},r.render=function(i,o,s){var n=this._time,c=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=i<=0?0:P(i),m=this._zTime<0!=i<0&&(this._initted||!d),f,x,u,h,g,y,A,b,j,v,N,C;if(this!==E&&p>c&&i>=0&&(p=c),p!==this._tTime||s||m){if(n!==this._time&&d&&(p+=this._time-n,i+=this._time-n),f=p,j=this._start,b=this._ts,y=!b,m&&(d||(n=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(N=this._yoyo,g=d+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,o,s);if(f=P(p%g),p===c?(h=this._repeat,f=d):(v=P(p/g),h=~~v,h&&h===v&&(f=d,h--),f>d&&(f=d)),v=et(this._tTime,g),!n&&this._tTime&&v!==h&&this._tTime-v*g-this._dur<=0&&(v=h),N&&h&1&&(f=d-f,C=1),h!==v&&!this._lock){var _=N&&v&1,w=_===(N&&h&1);if(h<v&&(_=!_),n=_?0:p%d?d:p,this._lock=1,this.render(n||(C?0:P(h*g)),o,!d)._lock=0,this._tTime=p,!o&&this.parent&&se(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,v=h),n&&n!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,c=this._tDur,w&&(this._lock=2,n=_?d:-1e-4,this.render(n,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;Ca(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=x0(this,P(n),P(f)),A&&(p-=f-(f=A._start))),this._tTime=p,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,n=0),!n&&p&&d&&!o&&!v&&(se(this,"onStart"),this._tTime!==p))return this;if(f>=n&&i>=0)for(x=this._first;x;){if(u=x._next,(x._act||f>=x._start)&&x._ts&&A!==x){if(x.parent!==this)return this.render(i,o,s);if(x.render(x._ts>0?(f-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(f-x._start)*x._ts,o,s),f!==this._time||!this._ts&&!y){A=0,u&&(p+=this._zTime=-Y);break}}x=u}else{x=this._last;for(var z=i<0?i:f;x;){if(u=x._prev,(x._act||z<=x._end)&&x._ts&&A!==x){if(x.parent!==this)return this.render(i,o,s);if(x.render(x._ts>0?(z-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(z-x._start)*x._ts,o,s||U&&xr(x)),f!==this._time||!this._ts&&!y){A=0,u&&(p+=this._zTime=z?-Y:Y);break}}x=u}}if(A&&!o&&(this.pause(),A.render(f>=n?0:-Y)._zTime=f>=n?1:-1,this._ts))return this._start=j,Tt(this),this.render(i,o,s);this._onUpdate&&!o&&se(this,"onUpdate",!0),(p===c&&this._tTime>=this.totalDuration()||!p&&n)&&(j===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!d)&&(p===c&&this._ts>0||!p&&this._ts<0)&&Be(this,1),!o&&!(i<0&&!n)&&(p||n||!c)&&(se(this,p===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,o){var s=this;if(je(o)||(o=pe(this,o,i)),!(i instanceof gt)){if(Q(i))return i.forEach(function(n){return s.add(n,o)}),this;if(W(i))return this.addLabel(i,o);if(X(i))i=G.delayedCall(0,i);else return this}return this!==i?ue(this,i,o):this},r.getChildren=function(i,o,s,n){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),n===void 0&&(n=-me);for(var c=[],d=this._first;d;)d._start>=n&&(d instanceof G?o&&c.push(d):(s&&c.push(d),i&&c.push.apply(c,d.getChildren(!0,o,s)))),d=d._next;return c},r.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},r.remove=function(i){return W(i)?this.removeLabel(i):X(i)?this.killTweensOf(i):(i.parent===this&&St(this,i),i===this._recent&&(this._recent=this._last),Xe(this))},r.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=P(oe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),l.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},r.addLabel=function(i,o){return this.labels[i]=pe(this,o),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,o,s){var n=G.delayedCall(0,o||mt,s);return n.data="isPause",this._hasPause=1,ue(this,n,pe(this,i))},r.removePause=function(i){var o=this._first;for(i=pe(this,i);o;)o._start===i&&o.data==="isPause"&&Be(o),o=o._next},r.killTweensOf=function(i,o,s){for(var n=this.getTweensOf(i,s),c=n.length;c--;)Ne!==n[c]&&n[c].kill(i,o);return this},r.getTweensOf=function(i,o){for(var s=[],n=fe(i),c=this._first,d=je(o),p;c;)c instanceof G?l0(c._targets,n)&&(d?(!Ne||c._initted&&c._ts)&&c.globalTime(0)<=o&&c.globalTime(c.totalDuration())>o:!o||c.isActive())&&s.push(c):(p=c.getTweensOf(n,o)).length&&s.push.apply(s,p),c=c._next;return s},r.tweenTo=function(i,o){o=o||{};var s=this,n=pe(s,i),c=o,d=c.startAt,p=c.onStart,m=c.onStartParams,f=c.immediateRender,x,u=G.to(s,de({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:o.duration||Math.abs((n-(d&&"time"in d?d.time:s._time))/s.timeScale())||Y,onStart:function(){if(s.pause(),!x){var g=o.duration||Math.abs((n-(d&&"time"in d?d.time:s._time))/s.timeScale());u._dur!==g&&tt(u,g,0,1).render(u._time,!0,!0),x=1}p&&p.apply(u,m||[])}},o));return f?u.render(0):u},r.tweenFromTo=function(i,o,s){return this.tweenTo(o,de({startAt:{time:pe(this,i)}},s))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),Tr(this,pe(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),Tr(this,pe(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Y)},r.shiftChildren=function(i,o,s){s===void 0&&(s=0);var n=this._first,c=this.labels,d;for(i=P(i);n;)n._start>=s&&(n._start+=i,n._end+=i),n=n._next;if(o)for(d in c)c[d]>=s&&(c[d]+=i);return Xe(this)},r.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return l.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xe(this)},r.totalDuration=function(i){var o=0,s=this,n=s._last,c=me,d,p,m;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(m=s.parent;n;)d=n._prev,n._dirty&&n.totalDuration(),p=n._start,p>c&&s._sort&&n._ts&&!s._lock?(s._lock=1,ue(s,n,p-n._delay,1)._lock=0):c=p,p<0&&n._ts&&(o-=p,(!m&&!s._dp||m&&m.smoothChildTiming)&&(s._start+=P(p/s._ts),s._time-=p,s._tTime-=p),s.shiftChildren(-p,!1,-1/0),c=0),n._end>o&&n._ts&&(o=n._end),n=d;tt(s,s===E&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(i){if(E._ts&&(na(E,Lt(i,E)),oa=oe.frame),oe.frame>=Mr){Mr+=le.autoSleep||120;var o=E._first;if((!o||!o._ts)&&le.autoSleep&&oe._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||oe.sleep()}}},t}(gt);de(J.prototype,{_lock:0,_hasPause:0,_forcing:0});var B0=function(t,r,a,i,o,s,n){var c=new te(this._pt,t,r,0,1,Ya,null,o),d=0,p=0,m,f,x,u,h,g,y,A;for(c.b=a,c.e=i,a+="",i+="",(y=~i.indexOf("random("))&&(i=ft(i)),s&&(A=[a,i],s(A,t,r),a=A[0],i=A[1]),f=a.match(Pt)||[];m=Pt.exec(i);)u=m[0],h=i.substring(d,m.index),x?x=(x+1)%5:h.substr(-5)==="rgba("&&(x=1),u!==f[p++]&&(g=parseFloat(f[p-1])||0,c._pt={_next:c._pt,p:h||p===1?h:",",s:g,c:u.charAt(1)==="="?Ue(g,u)-g:parseFloat(u)-g,m:x&&x<4?Math.round:0},d=Pt.lastIndex);return c.c=d<i.length?i.substring(d,i.length):"",c.fp=n,(ta.test(i)||y)&&(c.e=0),this._pt=c,c},gr=function(t,r,a,i,o,s,n,c,d,p){X(i)&&(i=i(o||0,t,s));var m=t[r],f=a!=="get"?a:X(m)?d?t[r.indexOf("set")||!X(t["get"+r.substr(3)])?r:"get"+r.substr(3)](d):t[r]():m,x=X(m)?d?Z0:Sa:br,u;if(W(i)&&(~i.indexOf("random(")&&(i=ft(i)),i.charAt(1)==="="&&(u=Ue(f,i)+($(f)||0),(u||u===0)&&(i=u))),!p||f!==i||tr)return!isNaN(f*i)&&i!==""?(u=new te(this._pt,t,r,+f||0,i-(f||0),typeof m=="boolean"?P0:Ta,0,x),d&&(u.fp=d),n&&u.modifier(n,this,t),this._pt=u):(!m&&!(r in t)&&pr(r,i),B0.call(this,t,r,f,i,x,c||le.stringFilter,d))},R0=function(t,r,a,i,o){if(X(t)&&(t=pt(t,o,r,a,i)),!we(t)||t.style&&t.nodeType||Q(t)||Kr(t))return W(t)?pt(t,o,r,a,i):t;var s={},n;for(n in t)s[n]=pt(t[n],o,r,a,i);return s},Ma=function(t,r,a,i,o,s){var n,c,d,p;if(ie[t]&&(n=new ie[t]).init(o,n.rawVars?r[t]:R0(r[t],i,o,s,a),a,i,s)!==!1&&(a._pt=c=new te(a._pt,o,t,0,1,n.render,n,0,n.priority),a!==We))for(d=a._ptLookup[a._targets.indexOf(o)],p=n._props.length;p--;)d[n._props[p]]=c;return n},Ne,tr,ur=function l(t,r,a){var i=t.vars,o=i.ease,s=i.startAt,n=i.immediateRender,c=i.lazy,d=i.onUpdate,p=i.runBackwards,m=i.yoyoEase,f=i.keyframes,x=i.autoRevert,u=t._dur,h=t._startAt,g=t._targets,y=t.parent,A=y&&y.data==="nested"?y.vars.targets:g,b=t._overwrite==="auto"&&!nr,j=t.timeline,v,N,C,_,w,z,M,L,B,Z,O,V,q;if(j&&(!f||!o)&&(o="none"),t._ease=Fe(o,Je.ease),t._yEase=m?Na(Fe(m===!0?o:m,Je.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!j&&!!i.runBackwards,!j||f&&!i.stagger){if(L=g[0]?Oe(g[0]).harness:0,V=L&&i[L.prop],v=zt(i,hr),h&&(h._zTime<0&&h.progress(1),r<0&&p&&n&&!x?h.render(-1,!0):h.revert(p&&u?kt:s0),h._lazy=0),s){if(Be(t._startAt=G.set(g,de({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!h&&K(c),startAt:null,delay:0,onUpdate:d&&function(){return se(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,r<0&&(U||!n&&!x)&&t._startAt.revert(kt),n&&u&&r<=0&&a<=0){r&&(t._zTime=r);return}}else if(p&&u&&!h){if(r&&(n=!1),C=de({overwrite:!1,data:"isFromStart",lazy:n&&!h&&K(c),immediateRender:n,stagger:0,parent:y},v),V&&(C[L.prop]=V),Be(t._startAt=G.set(g,C)),t._startAt._dp=0,t._startAt._sat=t,r<0&&(U?t._startAt.revert(kt):t._startAt.render(-1,!0)),t._zTime=r,!n)l(t._startAt,Y,Y);else if(!r)return}for(t._pt=t._ptCache=0,c=u&&K(c)||c&&!u,N=0;N<g.length;N++){if(w=g[N],M=w._gsap||fr(g)[N]._gsap,t._ptLookup[N]=Z={},Ut[M.id]&&Le.length&&Ct(),O=A===g?N:A.indexOf(w),L&&(B=new L).init(w,V||v,t,O,A)!==!1&&(t._pt=_=new te(t._pt,w,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(xe){Z[xe]=_}),B.priority&&(z=1)),!L||V)for(C in v)ie[C]&&(B=Ma(C,v,t,O,w,A))?B.priority&&(z=1):Z[C]=_=gr.call(t,w,C,"get",v[C],O,A,0,i.stringFilter);t._op&&t._op[N]&&t.kill(w,t._op[N]),b&&t._pt&&(Ne=t,E.killTweensOf(w,Z,t.globalTime(r)),q=!t.parent,Ne=0),t._pt&&c&&(Ut[M.id]=1)}z&&Za(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!q,f&&r<=0&&j.render(me,!0,!0)},S0=function(t,r,a,i,o,s,n,c){var d=(t._pt&&t._ptCache||(t._ptCache={}))[r],p,m,f,x;if(!d)for(d=t._ptCache[r]=[],f=t._ptLookup,x=t._targets.length;x--;){if(p=f[x][r],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==r&&p.fp!==r;)p=p._next;if(!p)return tr=1,t.vars[r]="+=0",ur(t,n),tr=0,c?ht(r+" not eligible for reset"):1;d.push(p)}for(x=d.length;x--;)m=d[x],p=m._pt||m,p.s=(i||i===0)&&!o?i:p.s+(i||0)+s*p.c,p.c=a-p.s,m.e&&(m.e=F(a)+$(m.e)),m.b&&(m.b=p.s+$(m.b))},T0=function(t,r){var a=t[0]?Oe(t[0]).harness:0,i=a&&a.aliases,o,s,n,c;if(!i)return r;o=Ke({},r);for(s in i)if(s in o)for(c=i[s].split(","),n=c.length;n--;)o[c[n]]=o[s];return o},Y0=function(t,r,a,i){var o=r.ease||i||"power1.inOut",s,n;if(Q(r))n=a[t]||(a[t]=[]),r.forEach(function(c,d){return n.push({t:d/(r.length-1)*100,v:c,e:o})});else for(s in r)n=a[s]||(a[s]=[]),s==="ease"||n.push({t:parseFloat(t),v:r[s],e:o})},pt=function(t,r,a,i,o){return X(t)?t.call(r,a,i,o):W(t)&&~t.indexOf("random(")?ft(t):t},Ba=mr+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ra={};ee(Ba+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return Ra[l]=1});var G=function(l){Qr(t,l);function t(a,i,o,s){var n;typeof i=="number"&&(o.duration=i,i=o,o=null),n=l.call(this,s?i:ct(i))||this;var c=n.vars,d=c.duration,p=c.delay,m=c.immediateRender,f=c.stagger,x=c.overwrite,u=c.keyframes,h=c.defaults,g=c.scrollTrigger,y=c.yoyoEase,A=i.parent||E,b=(Q(a)||Kr(a)?je(a[0]):"length"in i)?[a]:fe(a),j,v,N,C,_,w,z,M;if(n._targets=b.length?fr(b):ht("GSAP target "+a+" not found. https://gsap.com",!le.nullTargetWarn)||[],n._ptLookup=[],n._overwrite=x,u||f||yt(d)||yt(p)){if(i=n.vars,j=n.timeline=new J({data:"nested",defaults:h||{},targets:A&&A.data==="nested"?A.vars.targets:b}),j.kill(),j.parent=j._dp=ke(n),j._start=0,f||yt(d)||yt(p)){if(C=b.length,z=f&&ga(f),we(f))for(_ in f)~Ba.indexOf(_)&&(M||(M={}),M[_]=f[_]);for(v=0;v<C;v++)N=zt(i,Ra),N.stagger=0,y&&(N.yoyoEase=y),M&&Ke(N,M),w=b[v],N.duration=+pt(d,ke(n),v,w,b),N.delay=(+pt(p,ke(n),v,w,b)||0)-n._delay,!f&&C===1&&N.delay&&(n._delay=p=N.delay,n._start+=p,N.delay=0),j.to(w,N,z?z(v,w,b):0),j._ease=R.none;j.duration()?d=p=0:n.timeline=0}else if(u){ct(de(j.vars.defaults,{ease:"none"})),j._ease=Fe(u.ease||i.ease||"none");var L=0,B,Z,O;if(Q(u))u.forEach(function(V){return j.to(b,V,">")}),j.duration();else{N={};for(_ in u)_==="ease"||_==="easeEach"||Y0(_,u[_],N,u.easeEach);for(_ in N)for(B=N[_].sort(function(V,q){return V.t-q.t}),L=0,v=0;v<B.length;v++)Z=B[v],O={ease:Z.e,duration:(Z.t-(v?B[v-1].t:0))/100*d},O[_]=Z.v,j.to(b,O,L),L+=O.duration;j.duration()<d&&j.to({},{duration:d-j.duration()})}}d||n.duration(d=j.duration())}else n.timeline=0;return x===!0&&!nr&&(Ne=ke(n),E.killTweensOf(b),Ne=0),ue(A,ke(n),o),i.reversed&&n.reverse(),i.paused&&n.paused(!0),(m||!d&&!u&&n._start===P(A._time)&&K(m)&&h0(ke(n))&&A.data!=="nested")&&(n._tTime=-Y,n.render(Math.max(0,-p)||0)),g&&ha(ke(n),g),n}var r=t.prototype;return r.render=function(i,o,s){var n=this._time,c=this._tDur,d=this._dur,p=i<0,m=i>c-Y&&!p?c:i<Y?0:i,f,x,u,h,g,y,A,b,j;if(!d)f0(this,i,o,s);else if(m!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(f=m,b=this.timeline,this._repeat){if(h=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(h*100+i,o,s);if(f=P(m%h),m===c?(u=this._repeat,f=d):(g=P(m/h),u=~~g,u&&u===g?(f=d,u--):f>d&&(f=d)),y=this._yoyo&&u&1,y&&(j=this._yEase,f=d-f),g=et(this._tTime,h),f===n&&!s&&this._initted&&u===g)return this._tTime=m,this;u!==g&&(b&&this._yEase&&Ca(b,y),this.vars.repeatRefresh&&!y&&!this._lock&&f!==h&&this._initted&&(this._lock=s=1,this.render(P(h*u),!0).invalidate()._lock=0))}if(!this._initted){if(ma(this,p?i:f,s,o,m))return this._tTime=0,this;if(n!==this._time&&!(s&&this.vars.repeatRefresh&&u!==g))return this;if(d!==this._dur)return this.render(i,o,s)}if(this._tTime=m,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(j||this._ease)(f/d),this._from&&(this.ratio=A=1-A),!n&&m&&!o&&!g&&(se(this,"onStart"),this._tTime!==m))return this;for(x=this._pt;x;)x.r(A,x.d),x=x._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(p&&$t(this,i,o,s),se(this,"onUpdate")),this._repeat&&u!==g&&this.vars.onRepeat&&!o&&this.parent&&se(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&$t(this,i,!0,!0),(i||!d)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Be(this,1),!o&&!(p&&!n)&&(m||n||y)&&(se(this,m===c?"onComplete":"onReverseComplete",!0),this._prom&&!(m<c&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),l.prototype.invalidate.call(this,i)},r.resetTo=function(i,o,s,n,c){xt||oe.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||ur(this,d),p=this._ease(d/this._dur),S0(this,i,o,s,n,p,d,c)?this.resetTo(i,o,s,n,1):(Yt(this,0),this.parent||da(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?nt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!U),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Ne&&Ne.vars.overwrite!==!0)._first||nt(this),this.parent&&s!==this.timeline.totalDuration()&&tt(this,this._dur*this.timeline._tDur/s,0,1),this}var n=this._targets,c=i?fe(i):n,d=this._ptLookup,p=this._pt,m,f,x,u,h,g,y;if((!o||o==="all")&&d0(n,c))return o==="all"&&(this._pt=0),nt(this);for(m=this._op=this._op||[],o!=="all"&&(W(o)&&(h={},ee(o,function(A){return h[A]=1}),o=h),o=T0(n,o)),y=n.length;y--;)if(~c.indexOf(n[y])){f=d[y],o==="all"?(m[y]=o,u=f,x={}):(x=m[y]=m[y]||{},u=o);for(h in u)g=f&&f[h],g&&((!("kill"in g.d)||g.d.kill(h)===!0)&&St(this,g,"_pt"),delete f[h]),x!=="all"&&(x[h]=1)}return this._initted&&!this._pt&&p&&nt(this),this},t.to=function(i,o){return new t(i,o,arguments[2])},t.from=function(i,o){return dt(1,arguments)},t.delayedCall=function(i,o,s,n){return new t(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:n})},t.fromTo=function(i,o,s){return dt(2,arguments)},t.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new t(i,o)},t.killTweensOf=function(i,o,s){return E.killTweensOf(i,o,s)},t}(gt);de(G.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ee("staggerTo,staggerFrom,staggerFromTo",function(l){G[l]=function(){var t=new J,r=Jt.call(arguments,0);return r.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,r)}});var br=function(t,r,a){return t[r]=a},Sa=function(t,r,a){return t[r](a)},Z0=function(t,r,a,i){return t[r](i.fp,a)},D0=function(t,r,a){return t.setAttribute(r,a)},vr=function(t,r){return X(t[r])?Sa:lr(t[r])&&t.setAttribute?D0:br},Ta=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e6)/1e6,r)},P0=function(t,r){return r.set(r.t,r.p,!!(r.s+r.c*t),r)},Ya=function(t,r){var a=r._pt,i="";if(!t&&r.b)i=r.b;else if(t===1&&r.e)i=r.e;else{for(;a;)i=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+i,a=a._next;i+=r.c}r.set(r.t,r.p,i,r)},wr=function(t,r){for(var a=r._pt;a;)a.r(t,a.d),a=a._next},E0=function(t,r,a,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(t,r,a),o=s},I0=function(t){for(var r=this._pt,a,i;r;)i=r._next,r.p===t&&!r.op||r.op===t?St(this,r,"_pt"):r.dep||(a=1),r=i;return!a},O0=function(t,r,a,i){i.mSet(t,r,i.m.call(i.tween,a,i.mt),i)},Za=function(t){for(var r=t._pt,a,i,o,s;r;){for(a=r._next,i=o;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:s)?r._prev._next=r:o=r,(r._next=i)?i._prev=r:s=r,r=a}t._pt=o},te=function(){function l(r,a,i,o,s,n,c,d,p){this.t=a,this.s=o,this.c=s,this.p=i,this.r=n||Ta,this.d=c||this,this.set=d||br,this.pr=p||0,this._next=r,r&&(r._prev=this)}var t=l.prototype;return t.modifier=function(a,i,o){this.mSet=this.mSet||this.set,this.set=O0,this.m=a,this.mt=o,this.tween=i},l}();ee(mr+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(l){return hr[l]=1});ce.TweenMax=ce.TweenLite=G;ce.TimelineLite=ce.TimelineMax=J;E=new J({sortChildren:!1,defaults:Je,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});le.stringFilter=_a;var Ve=[],jt={},X0=[],Zr=0,F0=0,Ft=function(t){return(jt[t]||X0).map(function(r){return r()})},rr=function(){var t=Date.now(),r=[];t-Zr>2&&(Ft("matchMediaInit"),Ve.forEach(function(a){var i=a.queries,o=a.conditions,s,n,c,d;for(n in i)s=ge.matchMedia(i[n]).matches,s&&(c=1),s!==o[n]&&(o[n]=s,d=1);d&&(a.revert(),c&&r.push(a))}),Ft("matchMediaRevert"),r.forEach(function(a){return a.onMatch(a,function(i){return a.add(null,i)})}),Zr=t,Ft("matchMedia"))},Da=function(){function l(r,a){this.selector=a&&Kt(a),this.data=[],this._r=[],this.isReverted=!1,this.id=F0++,r&&this.add(r)}var t=l.prototype;return t.add=function(a,i,o){X(a)&&(o=i,i=a,a=X);var s=this,n=function(){var d=D,p=s.selector,m;return d&&d!==s&&d.data.push(s),o&&(s.selector=Kt(o)),D=s,m=i.apply(s,arguments),X(m)&&s._r.push(m),D=d,s.selector=p,s.isReverted=!1,m};return s.last=n,a===X?n(s,function(c){return s.add(null,c)}):a?s[a]=n:n},t.ignore=function(a){var i=D;D=null,a(this),D=i},t.getTweens=function(){var a=[];return this.data.forEach(function(i){return i instanceof l?a.push.apply(a,i.getTweens()):i instanceof G&&!(i.parent&&i.parent.data==="nested")&&a.push(i)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,i){var o=this;if(a?function(){for(var n=o.getTweens(),c=o.data.length,d;c--;)d=o.data[c],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return n.splice(n.indexOf(p),1)}));for(n.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(a)}),c=o.data.length;c--;)d=o.data[c],d instanceof J?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof G)&&d.revert&&d.revert(a);o._r.forEach(function(p){return p(a,o)}),o.isReverted=!0}():this.data.forEach(function(n){return n.kill&&n.kill()}),this.clear(),i)for(var s=Ve.length;s--;)Ve[s].id===this.id&&Ve.splice(s,1)},t.revert=function(a){this.kill(a||{})},l}(),V0=function(){function l(r){this.contexts=[],this.scope=r,D&&D.data.push(this)}var t=l.prototype;return t.add=function(a,i,o){we(a)||(a={matches:a});var s=new Da(0,o||this.scope),n=s.conditions={},c,d,p;D&&!s.selector&&(s.selector=D.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=a;for(d in a)d==="all"?p=1:(c=ge.matchMedia(a[d]),c&&(Ve.indexOf(s)<0&&Ve.push(s),(n[d]=c.matches)&&(p=1),c.addListener?c.addListener(rr):c.addEventListener("change",rr)));return p&&i(s,function(m){return s.add(null,m)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(i){return i.kill(a,!0)})},l}(),Mt={registerPlugin:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];r.forEach(function(i){return ka(i)})},timeline:function(t){return new J(t)},getTweensOf:function(t,r){return E.getTweensOf(t,r)},getProperty:function(t,r,a,i){W(t)&&(t=fe(t)[0]);var o=Oe(t||{}).get,s=a?ca:la;return a==="native"&&(a=""),t&&(r?s((ie[r]&&ie[r].get||o)(t,r,a,i)):function(n,c,d){return s((ie[n]&&ie[n].get||o)(t,n,c,d))})},quickSetter:function(t,r,a){if(t=fe(t),t.length>1){var i=t.map(function(p){return ae.quickSetter(p,r,a)}),o=i.length;return function(p){for(var m=o;m--;)i[m](p)}}t=t[0]||{};var s=ie[r],n=Oe(t),c=n.harness&&(n.harness.aliases||{})[r]||r,d=s?function(p){var m=new s;We._pt=0,m.init(t,a?p+a:p,We,0,[t]),m.render(1,m),We._pt&&wr(1,We)}:n.set(t,c);return s?d:function(p){return d(t,c,a?p+a:p,n,1)}},quickTo:function(t,r,a){var i,o=ae.to(t,de((i={},i[r]="+=0.1",i.paused=!0,i.stagger=0,i),a||{})),s=function(c,d,p){return o.resetTo(r,c,d,p)};return s.tween=o,s},isTweening:function(t){return E.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Fe(t.ease,Je.ease)),Br(Je,t||{})},config:function(t){return Br(le,t||{})},registerEffect:function(t){var r=t.name,a=t.effect,i=t.plugins,o=t.defaults,s=t.extendTimeline;(i||"").split(",").forEach(function(n){return n&&!ie[n]&&!ce[n]&&ht(r+" effect requires "+n+" plugin.")}),Et[r]=function(n,c,d){return a(fe(n),de(c||{},o),d)},s&&(J.prototype[r]=function(n,c,d){return this.add(Et[r](n,we(c)?c:(d=c)&&{},this),d)})},registerEase:function(t,r){R[t]=Fe(r)},parseEase:function(t,r){return arguments.length?Fe(t,r):R},getById:function(t){return E.getById(t)},exportRoot:function(t,r){t===void 0&&(t={});var a=new J(t),i,o;for(a.smoothChildTiming=K(t.smoothChildTiming),E.remove(a),a._dp=0,a._time=a._tTime=E._time,i=E._first;i;)o=i._next,(r||!(!i._dur&&i instanceof G&&i.vars.onComplete===i._targets[0]))&&ue(a,i,i._start-i._delay),i=o;return ue(E,a,0),a},context:function(t,r){return t?new Da(t,r):D},matchMedia:function(t){return new V0(t)},matchMediaRefresh:function(){return Ve.forEach(function(t){var r=t.conditions,a,i;for(i in r)r[i]&&(r[i]=!1,a=1);a&&t.revert()})||rr()},addEventListener:function(t,r){var a=jt[t]||(jt[t]=[]);~a.indexOf(r)||a.push(r)},removeEventListener:function(t,r){var a=jt[t],i=a&&a.indexOf(r);i>=0&&a.splice(i,1)},utils:{wrap:k0,wrapYoyo:A0,distribute:ga,random:ba,snap:ua,normalize:y0,getUnit:$,clamp:u0,splitColor:Aa,toArray:fe,selector:Kt,mapRange:wa,pipe:v0,unitize:w0,interpolate:j0,shuffle:xa},install:aa,effects:Et,ticker:oe,updateRoot:J.updateRoot,plugins:ie,globalTimeline:E,core:{PropTween:te,globals:ia,Tween:G,Timeline:J,Animation:gt,getCache:Oe,_removeLinkedListItem:St,reverting:function(){return U},context:function(t){return t&&D&&(D.data.push(t),t._ctx=D),D},suppressOverwrites:function(t){return nr=t}}};ee("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return Mt[l]=G[l]});oe.add(J.updateRoot);We=Mt.to({},{duration:0});var H0=function(t,r){for(var a=t._pt;a&&a.p!==r&&a.op!==r&&a.fp!==r;)a=a._next;return a},G0=function(t,r){var a=t._targets,i,o,s;for(i in r)for(o=a.length;o--;)s=t._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=H0(s,i)),s&&s.modifier&&s.modifier(r[i],t,a[o],i))},Vt=function(t,r){return{name:t,headless:1,rawVars:1,init:function(i,o,s){s._onInit=function(n){var c,d;if(W(o)&&(c={},ee(o,function(p){return c[p]=1}),o=c),r){c={};for(d in o)c[d]=r(o[d]);o=c}G0(n,o)}}}},ae=Mt.registerPlugin({name:"attr",init:function(t,r,a,i,o){var s,n,c;this.tween=a;for(s in r)c=t.getAttribute(s)||"",n=this.add(t,"setAttribute",(c||0)+"",r[s],i,o,0,0,s),n.op=s,n.b=c,this._props.push(s)},render:function(t,r){for(var a=r._pt;a;)U?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,r){for(var a=r.length;a--;)this.add(t,a,t[a]||0,r[a],0,0,0,0,0,1)}},Vt("roundProps",er),Vt("modifiers"),Vt("snap",ua))||Mt;G.version=J.version=ae.version="3.14.2";ra=1;cr()&&rt();R.Power0;R.Power1;R.Power2;R.Power3;R.Power4;R.Linear;R.Quad;R.Cubic;R.Quart;R.Quint;R.Strong;R.Elastic;R.Back;R.SteppedEase;R.Bounce;R.Sine;R.Expo;R.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dr,Ce,$e,yr,Ie,Pr,kr,q0=function(){return typeof window<"u"},_e={},Ee=180/Math.PI,Qe=Math.PI/180,Ge=Math.atan2,Er=1e8,Ar=/([A-Z])/g,W0=/(left|right|width|margin|padding|x)/i,U0=/[\s,\(]\S/,ve={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ar=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},$0=function(t,r){return r.set(r.t,r.p,t===1?r.e:Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},Q0=function(t,r){return r.set(r.t,r.p,t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},J0=function(t,r){return r.set(r.t,r.p,t===1?r.e:t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},K0=function(t,r){var a=r.s+r.c*t;r.set(r.t,r.p,~~(a+(a<0?-.5:.5))+r.u,r)},Pa=function(t,r){return r.set(r.t,r.p,t?r.e:r.b,r)},Ea=function(t,r){return r.set(r.t,r.p,t!==1?r.b:r.e,r)},el=function(t,r,a){return t.style[r]=a},tl=function(t,r,a){return t.style.setProperty(r,a)},rl=function(t,r,a){return t._gsap[r]=a},al=function(t,r,a){return t._gsap.scaleX=t._gsap.scaleY=a},il=function(t,r,a,i,o){var s=t._gsap;s.scaleX=s.scaleY=a,s.renderTransform(o,s)},ol=function(t,r,a,i,o){var s=t._gsap;s[r]=a,s.renderTransform(o,s)},I="transform",re=I+"Origin",sl=function l(t,r){var a=this,i=this.target,o=i.style,s=i._gsap;if(t in _e&&o){if(this.tfm=this.tfm||{},t!=="transform")t=ve[t]||t,~t.indexOf(",")?t.split(",").forEach(function(n){return a.tfm[n]=Ae(i,n)}):this.tfm[t]=s.x?s[t]:Ae(i,t),t===re&&(this.tfm.zOrigin=s.zOrigin);else return ve.transform.split(",").forEach(function(n){return l.call(a,n,r)});if(this.props.indexOf(I)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(re,r,"")),t=I}(o||r)&&this.props.push(t,r,o[t])},Ia=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},nl=function(){var t=this.props,r=this.target,a=r.style,i=r._gsap,o,s;for(o=0;o<t.length;o+=3)t[o+1]?t[o+1]===2?r[t[o]](t[o+2]):r[t[o]]=t[o+2]:t[o+2]?a[t[o]]=t[o+2]:a.removeProperty(t[o].substr(0,2)==="--"?t[o]:t[o].replace(Ar,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),o=kr(),(!o||!o.isStart)&&!a[I]&&(Ia(a),i.zOrigin&&a[re]&&(a[re]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Oa=function(t,r){var a={target:t,props:[],revert:nl,save:sl};return t._gsap||ae.core.getCache(t),r&&t.style&&t.nodeType&&r.split(",").forEach(function(i){return a.save(i)}),a},Xa,ir=function(t,r){var a=Ce.createElementNS?Ce.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ce.createElement(t);return a&&a.style?a:Ce.createElement(t)},ne=function l(t,r,a){var i=getComputedStyle(t);return i[r]||i.getPropertyValue(r.replace(Ar,"-$1").toLowerCase())||i.getPropertyValue(r)||!a&&l(t,at(r)||r,1)||""},Ir="O,Moz,ms,Ms,Webkit".split(","),at=function(t,r,a){var i=r||Ie,o=i.style,s=5;if(t in o&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(Ir[s]+t in o););return s<0?null:(s===3?"ms":s>=0?Ir[s]:"")+t},or=function(){q0()&&window.document&&(Dr=window,Ce=Dr.document,$e=Ce.documentElement,Ie=ir("div")||{style:{}},ir("div"),I=at(I),re=I+"Origin",Ie.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xa=!!at("perspective"),kr=ae.core.reverting,yr=1)},Or=function(t){var r=t.ownerSVGElement,a=ir("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),o;i.style.display="block",a.appendChild(i),$e.appendChild(a);try{o=i.getBBox()}catch{}return a.removeChild(i),$e.removeChild(a),o},Xr=function(t,r){for(var a=r.length;a--;)if(t.hasAttribute(r[a]))return t.getAttribute(r[a])},Fa=function(t){var r,a;try{r=t.getBBox()}catch{r=Or(t),a=1}return r&&(r.width||r.height)||a||(r=Or(t)),r&&!r.width&&!r.x&&!r.y?{x:+Xr(t,["x","cx","x1"])||0,y:+Xr(t,["y","cy","y1"])||0,width:0,height:0}:r},Va=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Fa(t))},Re=function(t,r){if(r){var a=t.style,i;r in _e&&r!==re&&(r=I),a.removeProperty?(i=r.substr(0,2),(i==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),a.removeProperty(i==="--"?r:r.replace(Ar,"-$1").toLowerCase())):a.removeAttribute(r)}},ze=function(t,r,a,i,o,s){var n=new te(t._pt,r,a,0,1,s?Ea:Pa);return t._pt=n,n.b=i,n.e=o,t._props.push(a),n},Fr={deg:1,rad:1,turn:1},ll={grid:1,flex:1},Se=function l(t,r,a,i){var o=parseFloat(a)||0,s=(a+"").trim().substr((o+"").length)||"px",n=Ie.style,c=W0.test(r),d=t.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(c?"Width":"Height"),m=100,f=i==="px",x=i==="%",u,h,g,y;if(i===s||!o||Fr[i]||Fr[s])return o;if(s!=="px"&&!f&&(o=l(t,r,a,"px")),y=t.getCTM&&Va(t),(x||s==="%")&&(_e[r]||~r.indexOf("adius")))return u=y?t.getBBox()[c?"width":"height"]:t[p],F(x?o/u*m:o/100*u);if(n[c?"width":"height"]=m+(f?s:i),h=i!=="rem"&&~r.indexOf("adius")||i==="em"&&t.appendChild&&!d?t:t.parentNode,y&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Ce||!h.appendChild)&&(h=Ce.body),g=h._gsap,g&&x&&g.width&&c&&g.time===oe.time&&!g.uncache)return F(o/g.width*m);if(x&&(r==="height"||r==="width")){var A=t.style[r];t.style[r]=m+i,u=t[p],A?t.style[r]=A:Re(t,r)}else(x||s==="%")&&!ll[ne(h,"display")]&&(n.position=ne(t,"position")),h===t&&(n.position="static"),h.appendChild(Ie),u=Ie[p],h.removeChild(Ie),n.position="absolute";return c&&x&&(g=Oe(h),g.time=oe.time,g.width=h[p]),F(f?u*o/m:u&&o?m/u*o:0)},Ae=function(t,r,a,i){var o;return yr||or(),r in ve&&r!=="transform"&&(r=ve[r],~r.indexOf(",")&&(r=r.split(",")[0])),_e[r]&&r!=="transform"?(o=bt(t,i),o=r!=="transformOrigin"?o[r]:o.svg?o.origin:Rt(ne(t,re))+" "+o.zOrigin+"px"):(o=t.style[r],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=Bt[r]&&Bt[r](t,r,a)||ne(t,r)||sa(t,r)||(r==="opacity"?1:0))),a&&!~(o+"").trim().indexOf(" ")?Se(t,r,o,a)+a:o},cl=function(t,r,a,i){if(!a||a==="none"){var o=at(r,t,1),s=o&&ne(t,o,1);s&&s!==a?(r=o,a=s):r==="borderColor"&&(a=ne(t,"borderTopColor"))}var n=new te(this._pt,t.style,r,0,1,Ya),c=0,d=0,p,m,f,x,u,h,g,y,A,b,j,v;if(n.b=a,n.e=i,a+="",i+="",i.substring(0,6)==="var(--"&&(i=ne(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(h=t.style[r],t.style[r]=i,i=ne(t,r)||i,h?t.style[r]=h:Re(t,r)),p=[a,i],_a(p),a=p[0],i=p[1],f=a.match(qe)||[],v=i.match(qe)||[],v.length){for(;m=qe.exec(i);)g=m[0],A=i.substring(c,m.index),u?u=(u+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(u=1),g!==(h=f[d++]||"")&&(x=parseFloat(h)||0,j=h.substr((x+"").length),g.charAt(1)==="="&&(g=Ue(x,g)+j),y=parseFloat(g),b=g.substr((y+"").length),c=qe.lastIndex-b.length,b||(b=b||le.units[r]||j,c===i.length&&(i+=b,n.e+=b)),j!==b&&(x=Se(t,r,h,b)||0),n._pt={_next:n._pt,p:A||d===1?A:",",s:x,c:y-x,m:u&&u<4||r==="zIndex"?Math.round:0});n.c=c<i.length?i.substring(c,i.length):""}else n.r=r==="display"&&i==="none"?Ea:Pa;return ta.test(i)&&(n.e=0),this._pt=n,n},Vr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dl=function(t){var r=t.split(" "),a=r[0],i=r[1]||"50%";return(a==="top"||a==="bottom"||i==="left"||i==="right")&&(t=a,a=i,i=t),r[0]=Vr[a]||a,r[1]=Vr[i]||i,r.join(" ")},pl=function(t,r){if(r.tween&&r.tween._time===r.tween._dur){var a=r.t,i=a.style,o=r.u,s=a._gsap,n,c,d;if(o==="all"||o===!0)i.cssText="",c=1;else for(o=o.split(","),d=o.length;--d>-1;)n=o[d],_e[n]&&(c=1,n=n==="transformOrigin"?re:I),Re(a,n);c&&(Re(a,I),s&&(s.svg&&a.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",bt(a,1),s.uncache=1,Ia(i)))}},Bt={clearProps:function(t,r,a,i,o){if(o.data!=="isFromStart"){var s=t._pt=new te(t._pt,r,a,0,0,pl);return s.u=i,s.pr=-10,s.tween=o,t._props.push(a),1}}},ut=[1,0,0,1,0,0],Ha={},Ga=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Hr=function(t){var r=ne(t,I);return Ga(r)?ut:r.substr(7).match(ea).map(F)},jr=function(t,r){var a=t._gsap||Oe(t),i=t.style,o=Hr(t),s,n,c,d;return a.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,o=[c.a,c.b,c.c,c.d,c.e,c.f],o.join(",")==="1,0,0,1,0,0"?ut:o):(o===ut&&!t.offsetParent&&t!==$e&&!a.svg&&(c=i.display,i.display="block",s=t.parentNode,(!s||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,n=t.nextElementSibling,$e.appendChild(t)),o=Hr(t),c?i.display=c:Re(t,"display"),d&&(n?s.insertBefore(t,n):s?s.appendChild(t):$e.removeChild(t))),r&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},sr=function(t,r,a,i,o,s){var n=t._gsap,c=o||jr(t,!0),d=n.xOrigin||0,p=n.yOrigin||0,m=n.xOffset||0,f=n.yOffset||0,x=c[0],u=c[1],h=c[2],g=c[3],y=c[4],A=c[5],b=r.split(" "),j=parseFloat(b[0])||0,v=parseFloat(b[1])||0,N,C,_,w;a?c!==ut&&(C=x*g-u*h)&&(_=j*(g/C)+v*(-h/C)+(h*A-g*y)/C,w=j*(-u/C)+v*(x/C)-(x*A-u*y)/C,j=_,v=w):(N=Fa(t),j=N.x+(~b[0].indexOf("%")?j/100*N.width:j),v=N.y+(~(b[1]||b[0]).indexOf("%")?v/100*N.height:v)),i||i!==!1&&n.smooth?(y=j-d,A=v-p,n.xOffset=m+(y*x+A*h)-y,n.yOffset=f+(y*u+A*g)-A):n.xOffset=n.yOffset=0,n.xOrigin=j,n.yOrigin=v,n.smooth=!!i,n.origin=r,n.originIsAbsolute=!!a,t.style[re]="0px 0px",s&&(ze(s,n,"xOrigin",d,j),ze(s,n,"yOrigin",p,v),ze(s,n,"xOffset",m,n.xOffset),ze(s,n,"yOffset",f,n.yOffset)),t.setAttribute("data-svg-origin",j+" "+v)},bt=function(t,r){var a=t._gsap||new La(t);if("x"in a&&!r&&!a.uncache)return a;var i=t.style,o=a.scaleX<0,s="px",n="deg",c=getComputedStyle(t),d=ne(t,re)||"0",p,m,f,x,u,h,g,y,A,b,j,v,N,C,_,w,z,M,L,B,Z,O,V,q,xe,wt,it,ot,Ye,_r,ye,Ze;return p=m=f=h=g=y=A=b=j=0,x=u=1,a.svg=!!(t.getCTM&&Va(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[I]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[I]!=="none"?c[I]:"")),i.scale=i.rotate=i.translate="none"),C=jr(t,a.svg),a.svg&&(a.uncache?(xe=t.getBBox(),d=a.xOrigin-xe.x+"px "+(a.yOrigin-xe.y)+"px",q=""):q=!r&&t.getAttribute("data-svg-origin"),sr(t,q||d,!!q||a.originIsAbsolute,a.smooth!==!1,C)),v=a.xOrigin||0,N=a.yOrigin||0,C!==ut&&(M=C[0],L=C[1],B=C[2],Z=C[3],p=O=C[4],m=V=C[5],C.length===6?(x=Math.sqrt(M*M+L*L),u=Math.sqrt(Z*Z+B*B),h=M||L?Ge(L,M)*Ee:0,A=B||Z?Ge(B,Z)*Ee+h:0,A&&(u*=Math.abs(Math.cos(A*Qe))),a.svg&&(p-=v-(v*M+N*B),m-=N-(v*L+N*Z))):(Ze=C[6],_r=C[7],it=C[8],ot=C[9],Ye=C[10],ye=C[11],p=C[12],m=C[13],f=C[14],_=Ge(Ze,Ye),g=_*Ee,_&&(w=Math.cos(-_),z=Math.sin(-_),q=O*w+it*z,xe=V*w+ot*z,wt=Ze*w+Ye*z,it=O*-z+it*w,ot=V*-z+ot*w,Ye=Ze*-z+Ye*w,ye=_r*-z+ye*w,O=q,V=xe,Ze=wt),_=Ge(-B,Ye),y=_*Ee,_&&(w=Math.cos(-_),z=Math.sin(-_),q=M*w-it*z,xe=L*w-ot*z,wt=B*w-Ye*z,ye=Z*z+ye*w,M=q,L=xe,B=wt),_=Ge(L,M),h=_*Ee,_&&(w=Math.cos(_),z=Math.sin(_),q=M*w+L*z,xe=O*w+V*z,L=L*w-M*z,V=V*w-O*z,M=q,O=xe),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,y=180-y),x=F(Math.sqrt(M*M+L*L+B*B)),u=F(Math.sqrt(V*V+Ze*Ze)),_=Ge(O,V),A=Math.abs(_)>2e-4?_*Ee:0,j=ye?1/(ye<0?-ye:ye):0),a.svg&&(q=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!Ga(ne(t,I)),q&&t.setAttribute("transform",q))),Math.abs(A)>90&&Math.abs(A)<270&&(o?(x*=-1,A+=h<=0?180:-180,h+=h<=0?180:-180):(u*=-1,A+=A<=0?180:-180)),r=r||a.uncache,a.x=p-((a.xPercent=p&&(!r&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-p)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+s,a.y=m-((a.yPercent=m&&(!r&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-m)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+s,a.z=f+s,a.scaleX=F(x),a.scaleY=F(u),a.rotation=F(h)+n,a.rotationX=F(g)+n,a.rotationY=F(y)+n,a.skewX=A+n,a.skewY=b+n,a.transformPerspective=j+s,(a.zOrigin=parseFloat(d.split(" ")[2])||!r&&a.zOrigin||0)&&(i[re]=Rt(d)),a.xOffset=a.yOffset=0,a.force3D=le.force3D,a.renderTransform=a.svg?ml:Xa?qa:hl,a.uncache=0,a},Rt=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ht=function(t,r,a){var i=$(r);return F(parseFloat(r)+parseFloat(Se(t,"x",a+"px",i)))+i},hl=function(t,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,qa(t,r)},De="0deg",st="0px",Pe=") ",qa=function(t,r){var a=r||this,i=a.xPercent,o=a.yPercent,s=a.x,n=a.y,c=a.z,d=a.rotation,p=a.rotationY,m=a.rotationX,f=a.skewX,x=a.skewY,u=a.scaleX,h=a.scaleY,g=a.transformPerspective,y=a.force3D,A=a.target,b=a.zOrigin,j="",v=y==="auto"&&t&&t!==1||y===!0;if(b&&(m!==De||p!==De)){var N=parseFloat(p)*Qe,C=Math.sin(N),_=Math.cos(N),w;N=parseFloat(m)*Qe,w=Math.cos(N),s=Ht(A,s,C*w*-b),n=Ht(A,n,-Math.sin(N)*-b),c=Ht(A,c,_*w*-b+b)}g!==st&&(j+="perspective("+g+Pe),(i||o)&&(j+="translate("+i+"%, "+o+"%) "),(v||s!==st||n!==st||c!==st)&&(j+=c!==st||v?"translate3d("+s+", "+n+", "+c+") ":"translate("+s+", "+n+Pe),d!==De&&(j+="rotate("+d+Pe),p!==De&&(j+="rotateY("+p+Pe),m!==De&&(j+="rotateX("+m+Pe),(f!==De||x!==De)&&(j+="skew("+f+", "+x+Pe),(u!==1||h!==1)&&(j+="scale("+u+", "+h+Pe),A.style[I]=j||"translate(0, 0)"},ml=function(t,r){var a=r||this,i=a.xPercent,o=a.yPercent,s=a.x,n=a.y,c=a.rotation,d=a.skewX,p=a.skewY,m=a.scaleX,f=a.scaleY,x=a.target,u=a.xOrigin,h=a.yOrigin,g=a.xOffset,y=a.yOffset,A=a.forceCSS,b=parseFloat(s),j=parseFloat(n),v,N,C,_,w;c=parseFloat(c),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,c+=p),c||d?(c*=Qe,d*=Qe,v=Math.cos(c)*m,N=Math.sin(c)*m,C=Math.sin(c-d)*-f,_=Math.cos(c-d)*f,d&&(p*=Qe,w=Math.tan(d-p),w=Math.sqrt(1+w*w),C*=w,_*=w,p&&(w=Math.tan(p),w=Math.sqrt(1+w*w),v*=w,N*=w)),v=F(v),N=F(N),C=F(C),_=F(_)):(v=m,_=f,N=C=0),(b&&!~(s+"").indexOf("px")||j&&!~(n+"").indexOf("px"))&&(b=Se(x,"x",s,"px"),j=Se(x,"y",n,"px")),(u||h||g||y)&&(b=F(b+u-(u*v+h*C)+g),j=F(j+h-(u*N+h*_)+y)),(i||o)&&(w=x.getBBox(),b=F(b+i/100*w.width),j=F(j+o/100*w.height)),w="matrix("+v+","+N+","+C+","+_+","+b+","+j+")",x.setAttribute("transform",w),A&&(x.style[I]=w)},fl=function(t,r,a,i,o){var s=360,n=W(o),c=parseFloat(o)*(n&&~o.indexOf("rad")?Ee:1),d=c-i,p=i+d+"deg",m,f;return n&&(m=o.split("_")[1],m==="short"&&(d%=s,d!==d%(s/2)&&(d+=d<0?s:-s)),m==="cw"&&d<0?d=(d+s*Er)%s-~~(d/s)*s:m==="ccw"&&d>0&&(d=(d-s*Er)%s-~~(d/s)*s)),t._pt=f=new te(t._pt,r,a,i,d,$0),f.e=p,f.u="deg",t._props.push(a),f},Gr=function(t,r){for(var a in r)t[a]=r[a];return t},xl=function(t,r,a){var i=Gr({},a._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=a.style,n,c,d,p,m,f,x,u;i.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),s[I]=r,n=bt(a,1),Re(a,I),a.setAttribute("transform",d)):(d=getComputedStyle(a)[I],s[I]=r,n=bt(a,1),s[I]=d);for(c in _e)d=i[c],p=n[c],d!==p&&o.indexOf(c)<0&&(x=$(d),u=$(p),m=x!==u?Se(a,c,d,u):parseFloat(d),f=parseFloat(p),t._pt=new te(t._pt,n,c,m,f-m,ar),t._pt.u=u||0,t._props.push(c));Gr(n,i)};ee("padding,margin,Width,Radius",function(l,t){var r="Top",a="Right",i="Bottom",o="Left",s=(t<3?[r,a,i,o]:[r+o,r+a,i+a,i+o]).map(function(n){return t<2?l+n:"border"+n+l});Bt[t>1?"border"+l:l]=function(n,c,d,p,m){var f,x;if(arguments.length<4)return f=s.map(function(u){return Ae(n,u,d)}),x=f.join(" "),x.split(f[0]).length===5?f[0]:x;f=(p+"").split(" "),x={},s.forEach(function(u,h){return x[u]=f[h]=f[h]||f[(h-1)/2|0]}),n.init(c,x,m)}});var Wa={name:"css",register:or,targetTest:function(t){return t.style&&t.nodeType},init:function(t,r,a,i,o){var s=this._props,n=t.style,c=a.vars.startAt,d,p,m,f,x,u,h,g,y,A,b,j,v,N,C,_,w;yr||or(),this.styles=this.styles||Oa(t),_=this.styles.props,this.tween=a;for(h in r)if(h!=="autoRound"&&(p=r[h],!(ie[h]&&Ma(h,r,a,i,t,o)))){if(x=typeof p,u=Bt[h],x==="function"&&(p=p.call(a,i,t,o),x=typeof p),x==="string"&&~p.indexOf("random(")&&(p=ft(p)),u)u(this,t,h,p,a)&&(C=1);else if(h.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(h)+"").trim(),p+="",Me.lastIndex=0,Me.test(d)||(g=$(d),y=$(p),y?g!==y&&(d=Se(t,h,d,y)+y):g&&(p+=g)),this.add(n,"setProperty",d,p,i,o,0,0,h),s.push(h),_.push(h,0,n[h]);else if(x!=="undefined"){if(c&&h in c?(d=typeof c[h]=="function"?c[h].call(a,i,t,o):c[h],W(d)&&~d.indexOf("random(")&&(d=ft(d)),$(d+"")||d==="auto"||(d+=le.units[h]||$(Ae(t,h))||""),(d+"").charAt(1)==="="&&(d=Ae(t,h))):d=Ae(t,h),f=parseFloat(d),A=x==="string"&&p.charAt(1)==="="&&p.substr(0,2),A&&(p=p.substr(2)),m=parseFloat(p),h in ve&&(h==="autoAlpha"&&(f===1&&Ae(t,"visibility")==="hidden"&&m&&(f=0),_.push("visibility",0,n.visibility),ze(this,n,"visibility",f?"inherit":"hidden",m?"inherit":"hidden",!m)),h!=="scale"&&h!=="transform"&&(h=ve[h],~h.indexOf(",")&&(h=h.split(",")[0]))),b=h in _e,b){if(this.styles.save(h),w=p,x==="string"&&p.substring(0,6)==="var(--"){if(p=ne(t,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var z=t.style.perspective;t.style.perspective=p,p=ne(t,"perspective"),z?t.style.perspective=z:Re(t,"perspective")}m=parseFloat(p)}if(j||(v=t._gsap,v.renderTransform&&!r.parseTransform||bt(t,r.parseTransform),N=r.smoothOrigin!==!1&&v.smooth,j=this._pt=new te(this._pt,n,I,0,1,v.renderTransform,v,0,-1),j.dep=1),h==="scale")this._pt=new te(this._pt,v,"scaleY",v.scaleY,(A?Ue(v.scaleY,A+m):m)-v.scaleY||0,ar),this._pt.u=0,s.push("scaleY",h),h+="X";else if(h==="transformOrigin"){_.push(re,0,n[re]),p=dl(p),v.svg?sr(t,p,0,N,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==v.zOrigin&&ze(this,v,"zOrigin",v.zOrigin,y),ze(this,n,h,Rt(d),Rt(p)));continue}else if(h==="svgOrigin"){sr(t,p,1,N,0,this);continue}else if(h in Ha){fl(this,v,h,f,A?Ue(f,A+p):p);continue}else if(h==="smoothOrigin"){ze(this,v,"smooth",v.smooth,p);continue}else if(h==="force3D"){v[h]=p;continue}else if(h==="transform"){xl(this,p,t);continue}}else h in n||(h=at(h)||h);if(b||(m||m===0)&&(f||f===0)&&!U0.test(p)&&h in n)g=(d+"").substr((f+"").length),m||(m=0),y=$(p)||(h in le.units?le.units[h]:g),g!==y&&(f=Se(t,h,d,y)),this._pt=new te(this._pt,b?v:n,h,f,(A?Ue(f,A+m):m)-f,!b&&(y==="px"||h==="zIndex")&&r.autoRound!==!1?K0:ar),this._pt.u=y||0,b&&w!==p?(this._pt.b=d,this._pt.e=w,this._pt.r=J0):g!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=Q0);else if(h in n)cl.call(this,t,h,d,A?A+p:p);else if(h in t)this.add(t,h,d||t[h],A?A+p:p,i,o);else if(h!=="parseTransform"){pr(h,p);continue}b||(h in n?_.push(h,0,n[h]):typeof t[h]=="function"?_.push(h,2,t[h]()):_.push(h,1,d||t[h])),s.push(h)}}C&&Za(this)},render:function(t,r){if(r.tween._time||!kr())for(var a=r._pt;a;)a.r(t,a.d),a=a._next;else r.styles.revert()},get:Ae,aliases:ve,getSetter:function(t,r,a){var i=ve[r];return i&&i.indexOf(",")<0&&(r=i),r in _e&&r!==re&&(t._gsap.x||Ae(t,"x"))?a&&Pr===a?r==="scale"?al:rl:(Pr=a||{})&&(r==="scale"?il:ol):t.style&&!lr(t.style[r])?el:~r.indexOf("-")?tl:vr(t,r)},core:{_removeProperty:Re,_getMatrix:jr}};ae.utils.checkPrefix=at;ae.core.getStyleSaver=Oa;(function(l,t,r,a){var i=ee(l+","+t+","+r,function(o){_e[o]=1});ee(t,function(o){le.units[o]="deg",Ha[o]=1}),ve[i[13]]=l+","+t,ee(a,function(o){var s=o.split(":");ve[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ee("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){le.units[l]="px"});ae.registerPlugin(Wa);var H=ae.registerPlugin(Wa)||ae;H.core.Tween;const Ua=12,$a=300,Zt="132, 0, 255",gl=768,ul=[{color:"#060010",title:"Analytics",description:"Track user behavior",label:"Insights"},{color:"#060010",title:"Dashboard",description:"Centralized data view",label:"Overview"},{color:"#060010",title:"Collaboration",description:"Work together seamlessly",label:"Teamwork"},{color:"#060010",title:"Automation",description:"Streamline workflows",label:"Efficiency"},{color:"#060010",title:"Integration",description:"Connect favorite tools",label:"Connectivity"},{color:"#060010",title:"Security",description:"Enterprise-grade protection",label:"Protection"}],bl=`// Universal Magic Bento Component
import React from 'react';
import { gsap } from 'gsap';

// See component source for full implementation details
// Features: Mouse tracking, Tilt effect, Particles, Spotlights
export const MagicBento = () => {
  return <div>Interactive Bento Grid</div>
}`,vl=(l,t,r=Zt)=>{const a=document.createElement("div");return a.className="magic-bento-particle",a.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${r}, 1);
    box-shadow: 0 0 6px rgba(${r}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${l}px;
    top: ${t}px;
  `,a},wl=l=>({proximity:l*.5,fadeDistance:l*.75}),yl=(l,t,r,a,i)=>{const o=l.getBoundingClientRect(),s=(t-o.left)/o.width*100,n=(r-o.top)/o.height*100;l.style.setProperty("--glow-x",`${s}%`),l.style.setProperty("--glow-y",`${n}%`),l.style.setProperty("--glow-intensity",a.toString()),l.style.setProperty("--glow-radius",`${i}px`)},kl=({children:l,className:t="",disableAnimations:r=!1,style:a,particleCount:i=Ua,glowColor:o=Zt,enableTilt:s=!0,clickEffect:n=!1,enableMagnetism:c=!1})=>{const d=T.useRef(null),p=T.useRef([]),m=T.useRef([]),f=T.useRef(!1),x=T.useRef([]),u=T.useRef(!1),h=T.useRef(null),g=T.useCallback(()=>{if(u.current||!d.current)return;const{width:b,height:j}=d.current.getBoundingClientRect();x.current=Array.from({length:i},()=>vl(Math.random()*b,Math.random()*j,o)),u.current=!0},[i,o]),y=T.useCallback(()=>{m.current.forEach(clearTimeout),m.current=[],h.current?.kill(),p.current.forEach(b=>{H.to(b,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{b.parentNode&&b.parentNode.removeChild(b)}})}),p.current=[]},[]),A=T.useCallback(()=>{!d.current||!f.current||(u.current||g(),x.current.forEach((b,j)=>{const v=setTimeout(()=>{if(!f.current||!d.current)return;const N=b.cloneNode(!0);d.current.appendChild(N),p.current.push(N),H.fromTo(N,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),H.to(N,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),H.to(N,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},j*100);m.current.push(v)}))},[g]);return T.useEffect(()=>{if(r||!d.current)return;const b=d.current,j=()=>{f.current=!0,A(),s&&H.to(b,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},v=()=>{f.current=!1,y(),s&&H.to(b,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),c&&H.to(b,{x:0,y:0,duration:.3,ease:"power2.out"})},N=_=>{if(!s&&!c)return;const w=b.getBoundingClientRect(),z=_.clientX-w.left,M=_.clientY-w.top,L=w.width/2,B=w.height/2;if(s){const Z=(M-B)/B*-10,O=(z-L)/L*10;H.to(b,{rotateX:Z,rotateY:O,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(c){const Z=(z-L)*.05,O=(M-B)*.05;h.current=H.to(b,{x:Z,y:O,duration:.3,ease:"power2.out"})}},C=_=>{if(!n)return;const w=b.getBoundingClientRect(),z=_.clientX-w.left,M=_.clientY-w.top,L=Math.max(Math.hypot(z,M),Math.hypot(z-w.width,M),Math.hypot(z,M-w.height),Math.hypot(z-w.width,M-w.height)),B=document.createElement("div");B.style.cssText=`
        position: absolute;
        width: ${L*2}px;
        height: ${L*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${o}, 0.4) 0%, rgba(${o}, 0.2) 30%, transparent 70%);
        left: ${z-L}px;
        top: ${M-L}px;
        pointer-events: none;
        z-index: 1000;
      `,b.appendChild(B),H.fromTo(B,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>B.remove()})};return b.addEventListener("mouseenter",j),b.addEventListener("mouseleave",v),b.addEventListener("mousemove",N),b.addEventListener("click",C),()=>{f.current=!1,b.removeEventListener("mouseenter",j),b.removeEventListener("mouseleave",v),b.removeEventListener("mousemove",N),b.removeEventListener("click",C),y()}},[A,y,r,s,c,n,o]),e.jsx("div",{ref:d,className:`${t} relative overflow-hidden`,style:{...a,position:"relative",overflow:"hidden"},children:l})},Al=({gridRef:l,disableAnimations:t=!1,enabled:r=!0,spotlightRadius:a=$a,glowColor:i=Zt})=>{const o=T.useRef(null),s=T.useRef(!1);return T.useEffect(()=>{if(t||!l?.current||!r)return;const n=document.createElement("div");n.className="magic-bento-spotlight",n.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${i}, 0.15) 0%,
        rgba(${i}, 0.08) 15%,
        rgba(${i}, 0.04) 25%,
        rgba(${i}, 0.02) 40%,
        rgba(${i}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(n),o.current=n;const c=p=>{if(!o.current||!l.current)return;const f=l.current.closest(".magic-bento-section")?.getBoundingClientRect(),x=f&&p.clientX>=f.left&&p.clientX<=f.right&&p.clientY>=f.top&&p.clientY<=f.bottom;s.current=x||!1;const u=l.current.querySelectorAll(".magic-bento-card");if(!x){H.to(o.current,{opacity:0,duration:.3,ease:"power2.out"}),u.forEach(b=>{b.style.setProperty("--glow-intensity","0")});return}const{proximity:h,fadeDistance:g}=wl(a);let y=1/0;u.forEach(b=>{const j=b,v=j.getBoundingClientRect(),N=v.left+v.width/2,C=v.top+v.height/2,_=Math.hypot(p.clientX-N,p.clientY-C)-Math.max(v.width,v.height)/2,w=Math.max(0,_);y=Math.min(y,w);let z=0;w<=h?z=1:w<=g&&(z=(g-w)/(g-h)),yl(j,p.clientX,p.clientY,z,a)}),H.to(o.current,{left:p.clientX,top:p.clientY,duration:.1,ease:"power2.out"});const A=y<=h?.8:y<=g?(g-y)/(g-h)*.8:0;H.to(o.current,{opacity:A,duration:A>0?.2:.5,ease:"power2.out"})},d=()=>{s.current=!1,l.current?.querySelectorAll(".magic-bento-card").forEach(p=>{p.style.setProperty("--glow-intensity","0")}),o.current&&H.to(o.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",c),document.addEventListener("mouseleave",d),()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseleave",d),o.current?.parentNode?.removeChild(o.current)}},[l,t,r,a,i]),null},jl=({children:l,gridRef:t})=>e.jsx("div",{className:"magic-bento-section grid gap-2 p-3 max-w-[54rem] select-none relative",style:{fontSize:"clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"},ref:t,children:l}),_l=()=>{const[l,t]=T.useState(!1);return T.useEffect(()=>{const r=()=>t(window.innerWidth<=gl);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),l},Nl=({textAutoHide:l=!0,enableStars:t=!0,enableSpotlight:r=!0,enableBorderGlow:a=!0,disableAnimations:i=!1,spotlightRadius:o=$a,particleCount:s=Ua,enableTilt:n=!1,glowColor:c=Zt,clickEffect:d=!0,enableMagnetism:p=!0})=>{const m=T.useRef(null),f=_l(),x=i||f,u=T.useMemo(()=>`
    .magic-bento-section {
      --glow-x: 50%;
      --glow-y: 50%;
      --glow-intensity: 0;
      --glow-radius: 200px;
      --glow-color: ${c};
      --border-color: #392e4e;
      --background-dark: #060010;
      --white: hsl(0, 0%, 100%);
      --purple-primary: rgba(132, 0, 255, 1);
      --purple-glow: rgba(132, 0, 255, 0.2);
      --purple-border: rgba(132, 0, 255, 0.8);
    }
    
    .magic-bento-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: 120px;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 0.5rem;
    }
    
    @media (min-width: 480px) {
      .magic-bento-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .magic-bento-grid {
        grid-template-columns: repeat(4, 1fr);
      }
      
      .magic-bento-grid .magic-bento-card:nth-child(3) {
        grid-column: span 2;
        grid-row: span 2;
      }
      
      .magic-bento-grid .magic-bento-card:nth-child(4) {
        grid-column: 1 / span 2;
        grid-row: 2 / span 2;
      }
      
      .magic-bento-grid .magic-bento-card:nth-child(6) {
        grid-column: 4;
        grid-row: 3;
      }
    }
    
    .magic-bento-card--border-glow::after {
      content: '';
      position: absolute;
      inset: 0;
      padding: 6px;
      background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
          rgba(${c}, calc(var(--glow-intensity) * 0.8)) 0%,
          rgba(${c}, calc(var(--glow-intensity) * 0.4)) 30%,
          transparent 60%);
      border-radius: inherit;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      pointer-events: none;
      opacity: 1;
      transition: opacity 0.3s ease;
      z-index: 1;
    }
    
    .magic-bento-card--border-glow:hover::after {
      opacity: 1;
    }
    
    .magic-bento-card--border-glow:hover {
      box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${c}, 0.2);
    }
    
    .magic-bento-particle::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: rgba(${c}, 0.2);
      border-radius: 50%;
      z-index: -1;
    }
    
    .magic-bento-particle-container:hover {
      box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${c}, 0.2);
    }
    
    .magic-bento-clamp-1 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .magic-bento-clamp-2 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    @media (max-width: 479px) {
      .magic-bento-grid {
        grid-template-columns: 1fr;
        grid-auto-rows: 120px;
        width: 100%;
        margin: 0 auto;
        padding: 0.25rem;
        gap: 0.5rem;
      }
      
      .magic-bento-grid .magic-bento-card {
        width: 100%;
        height: 100%;
        min-height: 0;
      }
    }
  `,[c]);return e.jsxs(k,{title:"Magic Bento",code:bl,className:"flex items-center justify-center p-12 bg-[#201E1D] min-h-[600px] w-full",children:[e.jsx("style",{children:u}),r&&e.jsx(Al,{gridRef:m,disableAnimations:x,enabled:r,spotlightRadius:o,glowColor:c}),e.jsx(jl,{gridRef:m,children:e.jsx("div",{className:"magic-bento-grid grid gap-1.5",children:ul.map((h,g)=>{const y=`magic-bento-card flex flex-col justify-between relative w-full h-full p-3 rounded-[12px] border border-solid font-light overflow-hidden transition-colors duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${a?"magic-bento-card--border-glow":""}`,A={backgroundColor:h.color||"var(--background-dark)",borderColor:"var(--border-color)",color:"var(--white)","--glow-x":"50%","--glow-y":"50%","--glow-intensity":"0","--glow-radius":"200px"};return t?e.jsxs(kl,{className:y,style:A,disableAnimations:x,particleCount:s,glowColor:c,enableTilt:n,clickEffect:d,enableMagnetism:p,children:[e.jsx("div",{className:"magic-bento-card__header flex justify-between gap-1.5 relative text-white",children:e.jsx("span",{className:"magic-bento-card__label text-xs opacity-70",children:h.label})}),e.jsxs("div",{className:"magic-bento-card__content flex flex-col relative text-white",children:[e.jsx("h3",{className:`magic-bento-card__title font-medium text-sm m-0 mb-0.5 ${l?"magic-bento-clamp-1":""}`,children:h.title}),e.jsx("p",{className:`magic-bento-card__description text-[10px] leading-3 opacity-80 ${l?"magic-bento-clamp-2":""}`,children:h.description})]})]},g):e.jsxs("div",{className:y,style:A,ref:b=>{if(!b)return;const j=C=>{if(x)return;const _=b.getBoundingClientRect(),w=C.clientX-_.left,z=C.clientY-_.top,M=_.width/2,L=_.height/2;if(n){const B=(z-L)/L*-10,Z=(w-M)/M*10;H.to(b,{rotateX:B,rotateY:Z,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(p){const B=(w-M)*.05,Z=(z-L)*.05;H.to(b,{x:B,y:Z,duration:.3,ease:"power2.out"})}},v=()=>{x||(n&&H.to(b,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),p&&H.to(b,{x:0,y:0,duration:.3,ease:"power2.out"}))},N=C=>{if(!d||x)return;const _=b.getBoundingClientRect(),w=C.clientX-_.left,z=C.clientY-_.top,M=Math.max(Math.hypot(w,z),Math.hypot(w-_.width,z),Math.hypot(w,z-_.height),Math.hypot(w-_.width,z-_.height)),L=document.createElement("div");L.style.cssText=`
                      position: absolute;
                      width: ${M*2}px;
                      height: ${M*2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${c}, 0.4) 0%, rgba(${c}, 0.2) 30%, transparent 70%);
                      left: ${w-M}px;
                      top: ${z-M}px;
                      pointer-events: none;
                      z-index: 1000;
                    `,b.appendChild(L),H.fromTo(L,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>L.remove()})};b.addEventListener("mousemove",j),b.addEventListener("mouseleave",v),b.addEventListener("click",N)},children:[e.jsx("div",{className:"magic-bento-card__header flex justify-between gap-1.5 relative text-white",children:e.jsx("span",{className:"magic-bento-card__label text-xs opacity-70",children:h.label})}),e.jsxs("div",{className:"magic-bento-card__content flex flex-col relative text-white",children:[e.jsx("h3",{className:`magic-bento-card__title font-medium text-sm m-0 mb-0.5 ${l?"magic-bento-clamp-1":""}`,children:h.title}),e.jsx("p",{className:`magic-bento-card__description text-[10px] leading-3 opacity-80 ${l?"magic-bento-clamp-2":""}`,children:h.description})]})]},g)})})})]})},Cl=`import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        GET STARTED
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div\`
  button {
    border-radius: .25rem;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    padding-left: 25px;
    padding-right: 25px;
    color: #fff;
    -webkit-clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
    clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
    height: 40px;
    font-size: 0.7rem;
    line-height: 14px;
    letter-spacing: 1.2px;
    transition: .2s .1s;
    background-image: linear-gradient(90deg,#1c1c1c,#6220fb);
    border: 0 solid;
    overflow: hidden;
  }

  button:hover {
    cursor: pointer;
    transition: all .3s ease-in;
    padding-right: 30px;
    padding-left: 30px;
  }\`;

export default Button;`,zl=()=>e.jsxs(k,{title:"Confetti Button",code:Cl,children:[e.jsx("div",{className:"confetti-button-wrapper",children:e.jsx("button",{className:"confetti-btn",children:"GET STARTED"})}),e.jsx("style",{children:`
        .confetti-button-wrapper .confetti-btn {
          border-radius: .25rem;
          text-transform: uppercase;
          font-style: normal;
          font-weight: 400;
          padding-left: 25px;
          padding-right: 25px;
          color: #fff;
          -webkit-clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
          clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
          height: 40px;
          font-size: 0.7rem;
          line-height: 14px;
          letter-spacing: 1.2px;
          transition: .2s .1s;
          background-image: linear-gradient(90deg,#1c1c1c,#6220fb);
          border: 0 solid;
          overflow: hidden;
        }

        .confetti-button-wrapper .confetti-btn:hover {
          cursor: pointer;
          transition: all .3s ease-in;
          padding-right: 30px;
          padding-left: 30px;
        }
      `})]}),Ll=`import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button data-label="Register" className="rainbow-hover">
        <span className="sp">Register</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div\`
  .rainbow-hover {
    font-size: 16px;
    font-weight: 700;
    color: #ff7576;
    background-color: #2B3044;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 12px 24px;
    position: relative;
    line-height: 24px;
    border-radius: 9px;
    box-shadow: 0px 1px 2px #2B3044,
      0px 4px 16px #2B3044;
    transform-style: preserve-3d;
    transform: scale(var(--s, 1)) perspective(600px)
      rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
    perspective: 600px;
    transition: transform 0.1s;
  }

  .sp {
    background: linear-gradient(
        90deg,
        #866ee7,
        #ea60da,
        #ed8f57,
        #fbd41d,
        #2cca91
      );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    display: block;
  }

  .rainbow-hover:active {
    transition: 0.3s;
    transform: scale(0.93);
  }\`;

export default Button;`,Ml=()=>{const l=T.useRef(null),t=a=>{if(!l.current)return;const i=l.current,o=i.getBoundingClientRect(),s=a.clientX-o.left,n=a.clientY-o.top,c=o.width,d=o.height,p=(s/c-.5)*30,m=(n/d-.5)*-30;i.style.setProperty("--rx",`${m}deg`),i.style.setProperty("--ry",`${p}deg`)},r=()=>{if(!l.current)return;const a=l.current;a.style.setProperty("--rx","0deg"),a.style.setProperty("--ry","0deg")};return e.jsxs(k,{title:"Rainbow Button",code:Ll,scale:.85,children:[e.jsx("div",{className:"rainbow-button-wrapper",children:e.jsx("button",{ref:l,"data-label":"Register",className:"rainbow-hover",onMouseMove:t,onMouseLeave:r,children:e.jsx("span",{className:"sp",children:"Register"})})}),e.jsx("style",{children:`
        .rainbow-button-wrapper .rainbow-hover {
          font-size: 16px;
          font-weight: 700;
          color: #ff7576;
          background-color: #2B3044;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 12px 24px;
          position: relative;
          line-height: 24px;
          border-radius: 9px;
          box-shadow: 0px 1px 2px #2B3044,
            0px 4px 16px #2B3044;
          transform-style: preserve-3d;
          transform: scale(var(--s, 1)) perspective(600px)
            rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          perspective: 600px;
          transition: transform 0.1s;
          will-change: transform;
        }

        .rainbow-button-wrapper .sp {
          background: linear-gradient(
              90deg,
              #866ee7,
              #ea60da,
              #ed8f57,
              #fbd41d,
              #2cca91
            );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          display: block;
        }

        .rainbow-button-wrapper .rainbow-hover:active {
          transition: 0.3s;
          transform: scale(0.93) perspectiva(600px) rotateX(0deg) rotateY(0deg); /* Reset rotation on click for feel */
        }
      `})]})},Bl=({children:l,className:t,spotlightColor:r="rgba(255, 255, 255, 0.15)"})=>{const a=_t(0),i=_t(0);function o({currentTarget:s,clientX:n,clientY:c}){const{left:d,top:p}=s.getBoundingClientRect();a.set(n-d),i.set(c-p)}return e.jsxs("div",{onMouseMove:o,className:be("group relative flex size-full rounded-3xl border border-white/10 bg-black/40 px-8 py-12 shadow-2xl transition-all duration-300 hover:border-white/20",t),children:[e.jsx(he.div,{className:"pointer-events-none absolute -inset-px rounded-3xl transition duration-300 group-hover:opacity-100",style:{background:ci`
            radial-gradient(
              650px circle at ${a}px ${i}px,
              ${r},
              transparent 80%
            )
          `}}),e.jsx("div",{className:"relative flex flex-col items-center justify-center gap-4 w-full h-full",children:l})]})},Rl=({children:l,className:t})=>{const r=_t(0),a=_t(0),i=Cr(r),o=Cr(a),s=zr(o,[-.5,.5],["17.5deg","-17.5deg"]),n=zr(i,[-.5,.5],["-17.5deg","17.5deg"]),c=p=>{const m=p.currentTarget.getBoundingClientRect(),f=m.width,x=m.height,u=p.clientX-m.left,h=p.clientY-m.top,g=u/f-.5,y=h/x-.5;r.set(g),a.set(y)},d=()=>{r.set(0),a.set(0)};return e.jsx(he.div,{onMouseMove:c,onMouseLeave:d,style:{rotateY:n,rotateX:s,transformStyle:"preserve-3d"},className:be("relative h-full w-full rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10",t),children:e.jsx("div",{style:{transform:"translateZ(75px)",transformStyle:"preserve-3d"},className:"absolute inset-4 grid place-content-center rounded-2xl bg-black/40 shadow-2xl backdrop-blur-xl border border-white/5",children:e.jsx("div",{style:{transform:"translateZ(50px)"},className:"flex flex-col items-center justify-center p-6 text-center",children:l})})})},Sl=()=>e.jsxs("div",{className:"relative flex items-center justify-center size-64 bg-black/20 rounded-3xl overflow-hidden border border-white/5",children:[e.jsx("svg",{className:"hidden",children:e.jsx("defs",{children:e.jsxs("filter",{id:"liquid-goo",children:[e.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"15",result:"blur"}),e.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15",result:"goo"}),e.jsx("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),e.jsxs("div",{className:"relative filter blur-[1px]",style:{filter:"url(#liquid-goo)"},children:[e.jsx(he.div,{animate:{x:[0,80,0,-80,0],y:[0,-40,80,-40,0],scale:[1,1.2,.8,1.2,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-sm"}),e.jsx(he.div,{animate:{x:[0,-80,0,80,0],y:[0,40,-80,40,0],scale:[1,.8,1.2,.8,1]},transition:{duration:5,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm"}),e.jsx(he.div,{animate:{scale:[1,1.5,1],rotate:[0,180,360]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 -ms-6 -mt-6 size-12 rounded-full bg-white/40 blur-sm"})]}),e.jsx("div",{className:"absolute bottom-6 text-xs font-mono text-white/50 tracking-widest uppercase",children:"Liquid Energy"})]}),Tl=`import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="face">
          <div className="circle" />
        </div>
        <div className="face">
          <div className="circle" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div\`
  .loader {
    width: 6em;
    height: 6em;
    font-size: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader .face {
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    animation: animate023845 3s linear infinite;
  }

  .loader .face:nth-child(1) {
    width: 100%;
    height: 100%;
    color: gold;
    border-color: currentColor transparent transparent currentColor;
    border-width: 0.2em 0.2em 0em 0em;
    --deg: -45deg;
    animation-direction: normal;
  }

  .loader .face:nth-child(2) {
    width: 70%;
    height: 70%;
    color: lime;
    border-color: currentColor currentColor transparent transparent;
    border-width: 0.2em 0em 0em 0.2em;
    --deg: -135deg;
    animation-direction: reverse;
  }

  .loader .face .circle {
    position: absolute;
    width: 50%;
    height: 0.1em;
    top: 50%;
    left: 50%;
    background-color: transparent;
    transform: rotate(var(--deg));
    transform-origin: left;
  }

  .loader .face .circle::before {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    content: '';
    width: 1em;
    height: 1em;
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 2em,
                  0 0 4em,
                  0 0 6em,
                  0 0 8em,
                  0 0 10em,
                  0 0 0 0.5em rgba(255, 255, 0, 0.1);
  }

  @keyframes animate023845 {
    to {
      transform: rotate(1turn);
    }
  }\`;

export default Loader;`,Yl=()=>e.jsxs(k,{title:"Atomic Loader",code:Tl,children:[e.jsx("div",{className:"atomic-loader-wrapper",children:e.jsxs("div",{className:"loader",children:[e.jsx("div",{className:"face",children:e.jsx("div",{className:"circle"})}),e.jsx("div",{className:"face",children:e.jsx("div",{className:"circle"})})]})}),e.jsx("style",{children:`
        .atomic-loader-wrapper .loader {
          width: 6em;
          height: 6em;
          font-size: 10px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .atomic-loader-wrapper .loader .face {
          position: absolute;
          border-radius: 50%;
          border-style: solid;
          animation: animateAtomic 3s linear infinite;
        }

        .atomic-loader-wrapper .loader .face:nth-child(1) {
          width: 100%;
          height: 100%;
          color: gold;
          border-color: currentColor transparent transparent currentColor;
          border-width: 0.2em 0.2em 0em 0em;
          --deg: -45deg;
          animation-direction: normal;
        }

        .atomic-loader-wrapper .loader .face:nth-child(2) {
          width: 70%;
          height: 70%;
          color: lime;
          border-color: currentColor currentColor transparent transparent;
          border-width: 0.2em 0em 0em 0.2em;
          --deg: -135deg;
          animation-direction: reverse;
        }

        .atomic-loader-wrapper .loader .face .circle {
          position: absolute;
          width: 50%;
          height: 0.1em;
          top: 50%;
          left: 50%;
          background-color: transparent;
          transform: rotate(var(--deg));
          transform-origin: left;
        }

        .atomic-loader-wrapper .loader .face .circle::before {
          position: absolute;
          top: -0.5em;
          right: -0.5em;
          content: '';
          width: 1em;
          height: 1em;
          background-color: currentColor;
          border-radius: 50%;
          box-shadow: 0 0 2em,
                        0 0 4em,
                        0 0 6em,
                        0 0 8em,
                        0 0 10em,
                        0 0 0 0.5em rgba(255, 255, 0, 0.1);
        }

        @keyframes animateAtomic {
          to {
            transform: rotate(1turn);
          }
        }
      `})]}),Zl=`import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div\`
  .loader {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 8px solid #fff;
    border-left: 8px solid #fff;
    border-right: 8px solid #ff00;
    animation: loader .7s infinite linear;
  }

  @keyframes loader {
    to {
      transform: rotate(360deg);
    }
  }\`;

export default Loader;`,Dl=()=>e.jsxs(k,{title:"Clean Circle Loader",code:Zl,children:[e.jsx("div",{className:"clean-circle-loader-wrapper",children:e.jsx("div",{className:"loader"})}),e.jsx("style",{children:`
        .clean-circle-loader-wrapper .loader {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          box-sizing: border-box;
          border-top: 8px solid #fff;
          border-left: 8px solid #fff;
          border-right: 8px solid transparent;
          animation: cleanCircleLoaderAnim .7s infinite linear;
        }

        @keyframes cleanCircleLoaderAnim {
          to {
            transform: rotate(360deg);
          }
        }
      `})]}),Pl=["All","Buttons","Loaders","Inputs","Cards","Text","Tooltips"],Gt=[{id:"spotlight_card",category:"Cards",size:"large",featured:!0,component:e.jsx(Bl,{spotlightColor:"rgba(59, 130, 246, 0.3)",children:e.jsx(Hn,{})})},{id:"magic_bento",category:"Cards",size:"large",component:e.jsx(Nl,{})},{id:"tilt_card",category:"Cards",size:"medium",component:e.jsx(Rl,{children:e.jsx("h3",{className:"text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300",children:"3D Interactive Tilt"})})},{id:"error_404_card",category:"Cards",size:"medium",component:e.jsx(cs,{})},{id:"terminal_card",category:"Cards",size:"medium",component:e.jsx(Dn,{})},{id:"code_editor_card",category:"Cards",size:"medium",component:e.jsx(En,{})},{id:"social_grid",category:"Buttons",size:"medium",component:e.jsx(Ao,{})},{id:"uiverse_card",category:"Cards",size:"medium",component:e.jsx(Cn,{})},{id:"liquid_morph",category:"Loaders",size:"medium",component:e.jsx(Sl,{})},{id:"hamster_loader",category:"Loaders",size:"medium",component:e.jsx(xo,{})},{id:"truck_loader",category:"Loaders",component:e.jsx(hi,{})},{id:"newtons_cradle",category:"Loaders",component:e.jsx(fi,{})},{id:"hand_loader",category:"Loaders",component:e.jsx(gi,{})},{id:"ecg_loader",category:"Loaders",component:e.jsx(bi,{})},{id:"sleeping_loader",category:"Loaders",component:e.jsx(wi,{})},{id:"tower_loader",category:"Loaders",component:e.jsx(ki,{})},{id:"jumping_box",category:"Loaders",component:e.jsx(ji,{})},{id:"word_spinner",category:"Loaders",component:e.jsx(Ni,{})},{id:"walking_man",category:"Loaders",size:"large",component:e.jsx(Zi,{})},{id:"geometric_spinner",category:"Loaders",component:e.jsx(Pi,{})},{id:"dot_pulse",category:"Loaders",component:e.jsx(Ii,{})},{id:"three_body",category:"Loaders",component:e.jsx(Xi,{})},{id:"coffee_loader",category:"Loaders",component:e.jsx(Vi,{})},{id:"hiding_seaking",category:"Loaders",component:e.jsx(Gi,{})},{id:"rolling_rock",category:"Loaders",component:e.jsx(Wi,{})},{id:"classic_spinner",category:"Loaders",component:e.jsx($i,{})},{id:"car_loader",category:"Loaders",component:e.jsx(Ji,{})},{id:"flowing_spinner",category:"Loaders",component:e.jsx(eo,{})},{id:"circular_pulse",category:"Loaders",component:e.jsx(ro,{})},{id:"crystal_loader",category:"Loaders",component:e.jsx(io,{})},{id:"gyro_loader",category:"Loaders",component:e.jsx(so,{})},{id:"banter_loader",category:"Loaders",component:e.jsx(po,{})},{id:"matrix_loader",category:"Loaders",component:e.jsx(mo,{})},{id:"ghost_loader",category:"Loaders",component:e.jsx(_o,{})},{id:"holographic_loader",category:"Loaders",component:e.jsx(Co,{})},{id:"bubble_loader",category:"Loaders",component:e.jsx(Lo,{})},{id:"bouncing_ball",category:"Loaders",component:e.jsx(Bo,{})},{id:"music_equalizer",category:"Loaders",component:e.jsx(So,{})},{id:"olympic_rings",category:"Loaders",component:e.jsx(Yo,{})},{id:"cloud_sync",category:"Loaders",component:e.jsx(Do,{})},{id:"speeder_loader",category:"Loaders",component:e.jsx(Eo,{})},{id:"cola_loader",category:"Loaders",component:e.jsx(Qo,{})},{id:"push_loader",category:"Loaders",component:e.jsx(ts,{})},{id:"geometric_shapes",category:"Loaders",size:"medium",component:e.jsx(as,{})},{id:"gradient_spin",category:"Loaders",component:e.jsx(os,{})},{id:"jumping_circles",category:"Loaders",component:e.jsx(ns,{})},{id:"circular_spinner",category:"Loaders",component:e.jsx(ms,{})},{id:"triangle_loader",category:"Loaders",component:e.jsx(xs,{})},{id:"modern_word",category:"Loaders",component:e.jsx(us,{})},{id:"gradient_ring",category:"Loaders",component:e.jsx(ys,{})},{id:"liquid_loader",category:"Loaders",component:e.jsx(Js,{})},{id:"pegtop_loader",category:"Loaders",component:e.jsx(Ln,{})},{id:"ai_matrix",category:"Loaders",component:e.jsx(Bn,{})},{id:"soap_bubble",category:"Loaders",component:e.jsx(Sn,{})},{id:"honeycomb_loader",category:"Loaders",component:e.jsx(Yn,{})},{id:"atomic_loader",category:"Loaders",component:e.jsx(Yl,{})},{id:"clean_circle",category:"Loaders",component:e.jsx(Dl,{})},{id:"share_button",category:"Buttons",component:e.jsx(zi,{})},{id:"payment_button",category:"Buttons",component:e.jsx(Mi,{})},{id:"credits_button",category:"Buttons",component:e.jsx(Ri,{})},{id:"openai_button",category:"Buttons",component:e.jsx(Ti,{})},{id:"like_button",category:"Buttons",component:e.jsx(lo,{})},{id:"shine_button",category:"Buttons",component:e.jsx(uo,{})},{id:"nature_button",category:"Buttons",component:e.jsx(ps,{})},{id:"play_now",category:"Buttons",component:e.jsx(vs,{})},{id:"realism_button",category:"Buttons",component:e.jsx(Ls,{})},{id:"magnetic_button",category:"Buttons",component:e.jsx(Ts,{})},{id:"voltage_button",category:"Buttons",component:e.jsx(Zs,{})},{id:"unlock_pro",category:"Buttons",component:e.jsx(Ps,{})},{id:"pay_button",category:"Buttons",component:e.jsx(Is,{})},{id:"galaxy_button",category:"Buttons",component:e.jsx(Xs,{})},{id:"sketch_button",category:"Buttons",component:e.jsx(rn,{})},{id:"cloud_save",category:"Buttons",component:e.jsx(on,{})},{id:"scroll_down",category:"Buttons",component:e.jsx(nn,{})},{id:"codepen_button",category:"Buttons",component:e.jsx(cn,{})},{id:"whatsapp_button",category:"Buttons",component:e.jsx(xn,{})},{id:"star_button",category:"Buttons",component:e.jsx(un,{})},{id:"rgb_button",category:"Buttons",component:e.jsx(yn,{})},{id:"confetti_button",category:"Buttons",component:e.jsx(zl,{})},{id:"rainbow_button",category:"Buttons",size:"medium",component:e.jsx(Ml,{})},{id:"logout_button",category:"Buttons",component:e.jsx($s,{})},{id:"social_platform_grid",category:"Buttons",size:"medium",component:e.jsx(As,{})},{id:"day_night_switch",category:"Inputs",component:e.jsx(mn,{})},{id:"minecraft_switch",category:"Inputs",component:e.jsx(Oo,{})},{id:"pill_radio",category:"Inputs",size:"medium",component:e.jsx(Fo,{})},{id:"gooey_switch",category:"Inputs",component:e.jsx(Ho,{})},{id:"three_d_input",category:"Inputs",component:e.jsx(Ko,{})},{id:"soft_input",category:"Inputs",component:e.jsx(Ws,{})},{id:"sparkle_switch",category:"Inputs",component:e.jsx(pn,{})},{id:"theme_radio",category:"Inputs",component:e.jsx(qn,{})},{id:"gradient_select",category:"Inputs",component:e.jsx(Qn,{})},{id:"input_demo",category:"Inputs",component:e.jsx(Cs,{})},{id:"folder_card",category:"Cards",component:e.jsx(Uo,{})},{id:"neon_gradient_card",category:"Cards",component:e.jsx(Vs,{})},{id:"explosive_growth",category:"Cards",component:e.jsx(Gs,{})},{id:"glass_card",category:"Cards",component:e.jsx(en,{})},{id:"recipe_card",category:"Cards",component:e.jsx(An,{})},{id:"number_card",category:"Cards",component:e.jsx(_n,{})},{id:"ethereum_card",category:"Cards",component:e.jsx(On,{})},{id:"gradient_pricing",category:"Cards",component:e.jsx(Fn,{})},{id:"matrix_cube",category:"Cards",component:e.jsx(Un,{})},{id:"tooltip_basic",category:"Tooltips",component:e.jsx(vo,{text:"Magic Lab Tooltip"})},{id:"glass_icons",category:"Text",size:"medium",component:e.jsx(yo,{})},{id:"map_tooltip",category:"Tooltips",component:e.jsx(qo,{})},{id:"glitch_text",category:"Text",size:"medium",component:e.jsx(Bs,{text:"Vitor's Lab"})},{id:"star_rating",category:"Text",component:e.jsx(vn,{})}];function Hl(){const[l,t]=T.useState("All"),{t:r}=li(),a=Gt.find(o=>o.featured),i=Gt.filter(o=>!o.featured&&(l==="All"||o.category===l));return e.jsxs("div",{className:"min-h-screen bg-background font-sans relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 z-0 pointer-events-none",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"}),e.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"})]}),e.jsx(si,{}),e.jsxs("main",{className:"container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10",children:[e.jsxs("div",{className:"mb-16 text-center",children:[e.jsxs(he.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6",children:[e.jsx(ri,{className:"size-3"}),"Vitor's Lab"]}),e.jsxs(he.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-5xl font-black tracking-tighter lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50",children:["UI ",e.jsx("span",{className:"text-primary tracking-widest",children:"LIBRARY"})]}),e.jsx(he.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed",children:r("uiLibrary.description")})]}),l==="All"&&a&&e.jsxs(he.section,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"mb-16",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-6 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest",children:[e.jsx(ai,{className:"size-4 text-yellow-500 fill-yellow-500"}),"Featured Experiment"]}),e.jsx("div",{className:"w-full h-[400px] lg:h-[500px]",children:a.component})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6 mb-12",children:[e.jsx("div",{className:"flex flex-wrap justify-center md:justify-start gap-2 p-1.5 bg-muted/30 backdrop-blur-md rounded-2xl border border-white/5",children:Pl.map(o=>e.jsxs("button",{onClick:()=>t(o),className:be("px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2",l===o?"bg-primary text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-105":"text-muted-foreground hover:text-foreground hover:bg-white/5"),children:[o==="All"?e.jsx(ii,{className:"size-4"}):e.jsx(oi,{className:"size-4"}),r(`categories.${o}`)]},o))}),e.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-muted-foreground/60",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-2 rounded-full bg-green-500 animate-pulse"}),"SYSTEM_ACTIVE"]}),e.jsxs("div",{className:"px-3 py-1 rounded-md bg-white/5 border border-white/10 uppercase",children:[Gt.length," Components Active"]})]})]}),e.jsx("style",{children:`
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            grid-auto-rows: 320px;
            gap: 1.5rem;
          }
          @media (min-width: 1024px) {
            .bento-grid {
              grid-template-columns: repeat(4, 1fr);
            }
            .grid-item-medium { grid-column: span 2; }
            .grid-item-large { grid-column: span 2; grid-row: span 2; }
          }
          
          .ui-lib-item *, .ui-lib-item *::before, .ui-lib-item *::after {
            animation-play-state: paused !important;
          }
          .ui-lib-item:hover *, .ui-lib-item:hover *::before, .ui-lib-item:hover *::after {
            animation-play-state: running !important;
          }

          /* Responsive element containment */
          .lab-component-wrapper {
             width: 100%;
             height: 100%;
             position: relative;
             display: flex;
             align-items: center;
             justify-content: center;
             overflow: hidden;
          }

          .ui-lib-item .lab-component-wrapper > * {
             width: 100%;
             height: 100%;
          }
          
          /* Re-enable animations on hover */
           .ui-lib-item:hover .lab-component-wrapper > * * {
             animation-play-state: running !important;
           }

          /* Subtle idle animation */
          .ui-lib-item .idle-pulse {
             animation: soft-pulse 4s ease-in-out infinite;
          }
          @keyframes soft-pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.6; }
          }
        `}),e.jsx(he.div,{layout:!0,className:"bento-grid",children:e.jsx(di,{mode:"popLayout",children:i.map((o,s)=>e.jsxs(he.div,{layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,scale:.9},transition:{duration:.4,delay:s*.05,layout:{type:"spring",stiffness:200,damping:25}},className:be("ui-lib-item group relative overflow-hidden rounded-3xl border border-white/5 hover:border-primary/50 transition-colors duration-500",o.size==="medium"?"grid-item-medium":o.size==="large"?"grid-item-large":"","bg-[#201E1D]"),children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"}),e.jsx("div",{className:"relative z-10 size-full flex items-center justify-center p-0",children:e.jsx("div",{className:"lab-component-wrapper",children:o.component})})]},o.id))})}),i.length===0&&e.jsx("div",{className:"py-20 text-center",children:e.jsx("p",{className:"text-muted-foreground",children:r("uiLibrary.noComponents")})})]})]})}export{Hl as default};
