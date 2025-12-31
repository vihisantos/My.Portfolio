import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

// Use a regular string with escaped backticks for the code sample
const code = `import React from 'react';

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
`;

export function SocialPlatformGrid() {
    return (
        <ComponentShowcase title="Interactive Social Platforms" code={code} className="min-h-[300px]">
            <div className="social-platform-wrapper">
                <div className="main">
                    <div className="card">
                        <svg fillRule="nonzero" height="30px" width="30px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg" className="instagram">
                            <g transform="scale(8,8)">
                                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" fill="#cc39a4" />
                            </g>
                        </svg>
                    </div>
                    <div className="card">
                        <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="twitter">
                            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" fill="#03a9f4" />
                        </svg>
                    </div>
                    <div className="card">
                        <svg height="30px" width="30px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="dribble">
                            <path d="M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1" fill="#ea4c89" />
                        </svg>
                    </div>
                    <div className="card">
                        <svg height="30px" width="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="codepen">
                            <path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z" fill="black" />
                        </svg>
                    </div>
                    <div className="card">
                        <div style={{ width: '23px', height: '23px', background: 'linear-gradient(#BF66FF, #6248FF, #00DDEB)', borderRadius: '4px' }}></div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="discord">
                            <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14" fill="#8c9eff" />
                        </svg>
                    </div>
                    <div className="card">
                        <svg height="30px" width="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="github">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63L12,26.047v-2.051" fill="black" />
                        </svg>
                    </div>
                    <div className="card">
                        <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="telegram">
                            <path d="M24 4A20 20 0 1 0 24 44" fill="#29b6f6" />
                        </svg>
                    </div>
                    <div className="card">
                        <div style={{ width: '30px', height: '30px', background: 'rgb(255, 69, 0)', borderRadius: '50%' }}></div>
                    </div>
                    <p className="text">HOVER<br /><br />FOR<br /><br />SOCIAL</p>
                    <div className="main_back" />
                </div>
            </div>
            <style>{`
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
      `}</style>
        </ComponentShowcase>
    );
}
