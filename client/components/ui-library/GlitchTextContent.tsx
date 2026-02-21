import React from 'react';

export const GlitchTextContent = ({ text = "ERROR" }: { text?: string }) => {
  return (
    <div className="glitch-text-wrapper w-full h-full flex items-center justify-center p-4 bg-[#111] overflow-hidden rounded-[inherit]">
      <style>
        {`
        .glitch-text-wrapper .glitch {
          position: relative;
          color: white;
          font-weight: 700;
          font-size: clamp(1.25rem, 8vw, 2.5rem);
          letter-spacing: 0.1em;
          white-space: nowrap;
          animation: glitch-skew 1s infinite linear alternate-reverse;
          text-shadow: 
            2px 0 0 rgba(255, 0, 0, 0.5),
            -2px 0 0 rgba(0, 255, 255, 0.5);
          display: inline-block;
          margin: 0;
        }

        .glitch-text-wrapper .glitch::before,
        .glitch-text-wrapper .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #111;
          display: block;
        }

        .glitch-text-wrapper .glitch::before {
          left: 2px;
          text-shadow: -2px 0 red;
          clip: rect(44px, 9999px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch-text-wrapper .glitch::after {
          left: -2px;
          text-shadow: -2px 0 cyan;
          clip: rect(44px, 9999px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(29px, 9999px, 86px, 0); }
          5% { clip: rect(98px, 9999px, 50px, 0); }
          10% { clip: rect(61px, 9999px, 83px, 0); }
          15% { clip: rect(13px, 9999px, 32px, 0); }
          20% { clip: rect(82px, 9999px, 60px, 0); }
          25% { clip: rect(80px, 9999px, 82px, 0); }
          30% { clip: rect(46px, 9999px, 13px, 0); }
          35% { clip: rect(82px, 9999px, 81px, 0); }
          40% { clip: rect(24px, 9999px, 13px, 0); }
          45% { clip: rect(72px, 9999px, 49px, 0); }
          50% { clip: rect(100px, 9999px, 11px, 0); }
          55% { clip: rect(66px, 9999px, 31px, 0); }
          60% { clip: rect(58px, 9999px, 44px, 0); }
          65% { clip: rect(67px, 9999px, 2px, 0); }
          70% { clip: rect(2px, 9999px, 49px, 0); }
          75% { clip: rect(2px, 9999px, 43px, 0); }
          80% { clip: rect(79px, 9999px, 38px, 0); }
          85% { clip: rect(43px, 9999px, 47px, 0); }
          90% { clip: rect(12px, 9999px, 14px, 0); }
          95% { clip: rect(5px, 9999px, 45px, 0); }
          100% { clip: rect(10px, 9999px, 92px, 0); }
        }

        @keyframes glitch-anim2 {
          0% { clip: rect(59px, 9999px, 21px, 0); }
          5% { clip: rect(97px, 9999px, 9px, 0); }
          10% { clip: rect(90px, 9999px, 30px, 0); }
          15% { clip: rect(48px, 9999px, 35px, 0); }
          20% { clip: rect(31px, 9999px, 16px, 0); }
          25% { clip: rect(3px, 9999px, 39px, 0); }
          30% { clip: rect(11px, 9999px, 39px, 0); }
          35% { clip: rect(32px, 9999px, 81px, 0); }
          40% { clip: rect(3px, 9999px, 95px, 0); }
          45% { clip: rect(58px, 9999px, 64px, 0); }
          50% { clip: rect(43px, 9999px, 5px, 0); }
          55% { clip: rect(37px, 9999px, 93px, 0); }
          60% { clip: rect(16px, 9999px, 42px, 0); }
          65% { clip: rect(62px, 9999px, 60px, 0); }
          70% { clip: rect(82px, 9999px, 96px, 0); }
          75% { clip: rect(48px, 9999px, 66px, 0); }
          80% { clip: rect(83px, 9999px, 20px, 0); }
          85% { clip: rect(21px, 9999px, 30px, 0); }
          90% { clip: rect(1px, 9999px, 22px, 0); }
          95% { clip: rect(17px, 9999px, 90px, 0); }
          100% { clip: rect(69px, 9999px, 26px, 0); }
        }

        @keyframes glitch-skew {
          0% { transform: skew(0deg); }
          20% { transform: skew(0deg); }
          22% { transform: skew(-20deg); }
          24% { transform: skew(0deg); }
          26% { transform: skew(0deg); }
          28% { transform: skew(20deg); }
          30% { transform: skew(0deg); }
          100% { transform: skew(0deg); }
        }
        `}
      </style>
      <div
        className="glitch uppercase font-bold tracking-widest leading-none"
        data-text={text}
      >
        {text}
      </div>
    </div>
  );
};
