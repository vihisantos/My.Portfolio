import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

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
`;

export function LogoutButton() {
    return (
        <ComponentShowcase title="Logout Button" code={code} className="flex items-center justify-center p-12">
            <div className="logout-btn-wrapper">
                <style>
                    {`
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
        `}
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
        </ComponentShowcase>
    );
}
