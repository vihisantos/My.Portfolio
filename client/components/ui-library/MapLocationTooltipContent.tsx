import React from 'react';

export const MapLocationTooltipContent = () => {
    return (
        <div className="map-tooltip-wrapper">
            <style>
                {`
        .map-tooltip-wrapper .map-tooltip-container {
          position: relative;
          color: white;
        }

        .map-tooltip-wrapper .map-tooltip {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%) translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 10;
        }

        .map-tooltip-wrapper .map-tooltip-container:hover .map-tooltip {
          opacity: 1;
          visibility: visible;
          top: -10px;
        }

        .map-tooltip-wrapper .map-tooltip-card {
          width: 250px;
          height: 150px;
          background: #1e293b;
          border-radius: 12px;
          padding: 16px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .map-tooltip-wrapper .map-tooltip-card::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 16px;
          height: 16px;
          background: #1e293b;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Map Background */
        .map-tooltip-wrapper .map-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.3;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 100% 100%, 20px 20px, 20px 20px;
          z-index: 1;
        }

        /* Marker Animation */
        .map-tooltip-wrapper .marker-container {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .map-tooltip-wrapper .marker-pin {
          width: 20px;
          height: 20px;
          background: #38bdf8;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: relative;
          animation: map-bounce 2s infinite ease-in-out;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
        }

        .map-tooltip-wrapper .marker-pin::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        }

        .map-tooltip-wrapper .marker-pulse {
          width: 30px;
          height: 10px;
          background: rgba(56, 189, 248, 0.4);
          border-radius: 50%;
          margin-top: 5px;
          animation: map-pulse 2s infinite ease-in-out;
        }

        /* Content Overlay */
        .map-tooltip-wrapper .map-content {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .map-tooltip-wrapper .location-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .map-tooltip-wrapper .city-name {
          font-weight: 700;
          font-size: 18px;
          margin: 0;
          color: #f8fafc;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .map-tooltip-wrapper .country-name {
          font-size: 12px;
          color: #94a3b8;
          margin: 2px 0 0 0;
        }

        .map-tooltip-wrapper .weather-badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .map-tooltip-wrapper .stats-row {
          display: flex;
          justify-content: space-between;
          margin-top: auto;
          background: rgba(0, 0, 0, 0.2);
          padding: 8px;
          border-radius: 8px;
          backdrop-filter: blur(4px);
        }

        .map-tooltip-wrapper .stat {
          display: flex;
          flex-direction: column;
        }

        .map-tooltip-wrapper .stat-label {
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .map-tooltip-wrapper .stat-value {
          font-size: 12px;
          font-weight: 600;
          color: #38bdf8;
        }

        /* Animated Clouds */
        .map-tooltip-wrapper .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(5px);
          animation: drift linear infinite;
          z-index: 1;
        }

        .map-tooltip-wrapper .cloud-1 {
          width: 40px;
          height: 15px;
          top: 20px;
          animation-duration: 15s;
        }

        .map-tooltip-wrapper .cloud-2 {
          width: 30px;
          height: 10px;
          top: 50px;
          animation-duration: 20s;
          animation-delay: -5s;
        }

        @keyframes map-bounce {
          0%, 100% { transform: rotate(-45deg) translate(0, 0); }
          50% { transform: rotate(-45deg) translate(-5px, -5px); }
        }

        @keyframes map-pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }

        @keyframes map-drift {
          from { transform: translateX(250px); }
          to { transform: translateX(-50px); }
        }

        /* Hover Target Styling */
        .map-tooltip-wrapper .hover-text {
          font-weight: 600;
          color: #38bdf8;
          border-bottom: 2px dashed #38bdf8;
          cursor: pointer;
          padding-bottom: 2px;
          transition: all 0.3s ease;
        }

        .map-tooltip-wrapper .hover-text:hover {
          color: #7dd3fc;
          border-color: #7dd3fc;
        }
        `}
            </style>
            <div className="map-tooltip-container">
                <span className="hover-text">San Francisco</span>
                <div className="map-tooltip">
                    <div className="map-tooltip-card">
                        {/* Background Map Elements */}
                        <div className="map-bg" />
                        <div className="cloud cloud-1" />
                        <div className="cloud cloud-2" />

                        {/* Animated Marker */}
                        <div className="marker-container">
                            <div className="marker-pin" />
                            <div className="marker-pulse" />
                        </div>

                        {/* Content */}
                        <div className="map-content">
                            <div className="location-info">
                                <div>
                                    <h3 className="city-name">San Francisco</h3>
                                    <p className="country-name">California, US</p>
                                </div>
                                <div className="weather-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx={12} cy={12} r={5} />
                                        <line x1={12} y1={1} x2={12} y2={3} />
                                        <line x1={12} y1={21} x2={12} y2={23} />
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                        <line x1={1} y1={12} x2={3} y2={12} />
                                        <line x1={21} y1={12} x2={23} y2={12} />
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                    </svg>
                                    72°F
                                </div>
                            </div>
                            <div className="stats-row">
                                <div className="stat">
                                    <span className="stat-label">Time</span>
                                    <span className="stat-value">14:30 PST</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">Lat</span>
                                    <span className="stat-value">37.77°</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">Long</span>
                                    <span className="stat-value">-122.4°</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
