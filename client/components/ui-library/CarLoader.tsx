import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

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
`;

export function CarLoaderContent() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[250px]">
      <div className="car-loader-wrapper scale-75 origin-center">
        <style>
          {`
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
            `}
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
    </div>
  );
}

export function CarLoader() {
  return (
    <ComponentShowcase title="Car Loader" code={code} className="min-h-[250px] overflow-hidden">
      <CarLoaderContent />
    </ComponentShowcase>
  );
}
