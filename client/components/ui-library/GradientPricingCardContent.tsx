import React from 'react';

export const GradientPricingCardContent = () => {
    return (
        <div className="gradient-pricing-wrapper">
            <style>
                {`
        .gradient-pricing-wrapper .gradient-pricing-card {
          width: 300px;
          height: 400px;
          border-radius: 20px;
          background: #1b233d;
          padding: 5px;
          overflow: hidden;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .gradient-pricing-wrapper .gradient-pricing-card:hover {
          transform: scale(1.05);
        }

        .gradient-pricing-wrapper .gradient-pricing-card .gradient-pricing-card-top {
          height: 20%;
          width: 100%;
          border-radius: 17px 17px 0 0;
          background: linear-gradient(#ff56f6, #406aff);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gradient-pricing-wrapper .gradient-pricing-card-top .gradient-pricing-title {
          font-weight: 700;
          font-size: 22px;
          color: white;
        }

        .gradient-pricing-wrapper .gradient-pricing-card-info {
          height: 80%;
          width: 100%;
          border-radius: 0 0 17px 17px;
          background-color: #1b233d;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;
        }

        .gradient-pricing-wrapper .gradient-pricing-card-info .gradient-pricing-price {
          font-size: 50px;
          font-weight: 700;
          color: white;
        }

        .gradient-pricing-wrapper .gradient-pricing-card-info .gradient-pricing-price-subText {
          font-size: 15px;
          font-weight: 500;
          color: white;
        }

        .gradient-pricing-wrapper .gradient-pricing-card-info .gradient-pricing-desc {
          margin-top: 10px;
        }

        .gradient-pricing-wrapper .gradient-pricing-card-info .gradient-pricing-desc p {
          color: white;
          font-weight: 500;
          margin-top: 5px;
        }

        .gradient-pricing-wrapper .gradient-pricing-card-info .gradient-pricing-desc p svg {
          display: inline-block;
          margin-right: 5px;
          background-color: white;
          border-radius: 50%;
        }

        .gradient-pricing-wrapper .gradient-pricing-card-info .gradient-pricing-btn {
          width: 80%;
          height: 50px;
          background: linear-gradient(100deg, #ff56f6, #406aff);
          border: none;
          border-radius: 10px;
          color: white;
          font-weight: 700;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .gradient-pricing-wrapper .gradient-pricing-btn:hover {
          opacity: 0.8;
        }
        `}
            </style>
            <div className="gradient-pricing-card">
                <div className="gradient-pricing-card-top">
                    <p className="gradient-pricing-title">Standard</p>
                </div>
                <div className="gradient-pricing-card-info">
                    <p className="gradient-pricing-price">
                        $29<span className="gradient-pricing-price-subText">/mo</span>
                    </p>
                    <div className="gradient-pricing-desc">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            10 Projects
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            100 GB Storage
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            24/7 Support
                        </p>
                    </div>
                    <button className="gradient-pricing-btn">Choose Plan</button>
                </div>
            </div>
        </div>
    );
}
