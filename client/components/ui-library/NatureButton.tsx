import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const CannabisSVG = ({ className, color = "#2D5A27" }: { className?: string; color?: string }) => (
  <svg
    viewBox="0 0 500 500"
    className={className}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M477.16,292.045c0,0-62.848-4.221-125.061,22.069c11.664-13.634,23.084-28.804,33.416-45.603 c51.428-83.723,56.047-174.385,56.047-174.385s-78.774,45.1-130.221,128.822c-7.563,12.3-13.99,24.738-19.668,37.029 c3.467-20.557,5.744-42.617,5.744-65.72C297.417,86.977,249.892,0,249.892,0s-47.506,86.977-47.506,194.259 c0,23.102,2.279,45.163,5.742,65.713c-5.68-12.293-12.123-24.723-19.67-37.023C137.017,139.227,58.238,94.127,58.238,94.127 s4.623,90.662,56.05,174.385c10.329,16.799,21.75,31.969,33.416,45.603C85.472,287.824,22.64,292.045,22.64,292.045 s37.99,47.329,100.418,73.905c23.818,10.137,47.734,15.764,68.231,18.881c-9.681,0.716-19.997,2.132-30.503,4.71 c-45.443,11.111-77.006,38.909-77.006,38.909s42.105,9.768,87.561-1.351c29.467-7.217,52.928-21.347,65.893-30.448l-10.852,86.821 c-0.506,4.125,0.635,8.272,3.157,11.404c2.522,3.125,6.147,4.923,9.974,4.923h20.791c3.826,0,7.451-1.798,9.975-4.923 c2.522-3.132,3.66-7.279,3.156-11.404l-10.852-86.814c12.967,9.103,36.426,23.225,65.875,30.441 c45.457,11.118,87.561,1.351,87.561,1.351s-31.564-27.798-77.002-38.909c-10.512-2.578-20.828-3.994-30.508-4.71 c20.504-3.117,44.42-8.744,68.238-18.881C439.173,339.374,477.16,292.045,477.16,292.045z" />
  </svg>
);

const code = `import React from 'react';

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

export default CannabisGrowButton;`;

export function NatureButton() {
  return (
    <ComponentShowcase title="Cannabis Grow Button (Premium)" code={code} className="min-h-[300px] flex items-center justify-center">
      <div className="nature-btn-v4-container">
        <style>{`
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
                `}</style>
        <button className="c-btn">
          High Quality
          <CannabisSVG className="c-leaf l-1" color="#488C3E" />
          <CannabisSVG className="c-leaf l-2" color="#2D5A27" />
          <CannabisSVG className="c-leaf l-3" color="#2D5A27" />
        </button>
      </div>
    </ComponentShowcase>
  );
}
