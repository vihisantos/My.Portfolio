import React from 'react';

interface SectionDividerProps {
    position: 'top' | 'bottom';
    fill: string; // Tailwind class like "fill-white" or "fill-slate-950"
    type?: 'wave' | 'curve' | 'tilt';
    height?: string;
    className?: string;
}

export const SectionDivider = ({ position, fill, type = 'wave', height = 'h-16', className = '' }: SectionDividerProps) => {
    const rotation = position === 'bottom' ? 'rotate-180' : '';

    // SVG Paths
    const paths = {
        wave: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.22,9.86l.97,196.22H0V66.65A606.31,606.31,0,0,1,321.39,56.44Z", // Standard organic wave
        curve: "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z", // Smooth curve
        tilt: "M1200 120L0 16.48 0 0 1200 0 1200 120z" // Angled tilt
    };

    const path = paths[type];

    return (
        <div className={`absolute left-0 w-full overflow-hidden leading-[0] z-10 ${position === 'top' ? 'top-0' : 'bottom-0'} ${height} ${rotation} ${className}`}>
            <svg
                className={`relative block w-[calc(140%+1.3px)] h-full ${fill}`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path d={path} className="shape-fill" fill="currentColor"></path>
            </svg>
        </div>
    );
};
