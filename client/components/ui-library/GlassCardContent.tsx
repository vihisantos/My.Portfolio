import React from 'react';

export const GlassCardContent = () => {
    return (
        <div className="glass-card-wrapper">
            <style>
                {`
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
        `}
            </style>
            <div className="glass-card-box">
                <span />
                <div className="glass-card-content">
                    <h2>Hover me!</h2>
                </div>
            </div>
        </div>
    );
};
