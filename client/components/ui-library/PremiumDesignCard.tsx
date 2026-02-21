import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

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
`;

export function PremiumDesignCardContent() {
  return (
    <div className="pdc-wrapper w-full h-full flex items-center justify-center">
      <style>
        {`
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
        `}
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

export function PremiumDesignCard() {
  return (
    <ComponentShowcase title="Premium Design Card" code={code} className="flex items-center justify-center p-12 min-h-[400px]">
      <PremiumDesignCardContent />
    </ComponentShowcase>
  );
}
