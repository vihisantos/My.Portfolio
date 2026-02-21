import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

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
`;

export const ExplosiveGrowthCardContent: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[500px]">
      <div className="explosive-growth-card-wrapper scale-90">
        <style>
          {`
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
        `}
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
    </div>
  );
};

export function ExplosiveGrowthCard() {
  return (
    <ComponentShowcase title="Explosive Growth Card" code={code} className="flex items-center justify-center p-12">
      <ExplosiveGrowthCardContent />
    </ComponentShowcase>
  );
}
