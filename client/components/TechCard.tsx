import React from 'react';
import './TechCard.css';

interface TechCardProps {
    name: string;
    imageUrl?: string;
    icon?: React.ReactNode;
    color: string;
    bgColor?: string;
    borderColor?: string;
}

export const TechCard = ({
    name,
    imageUrl,
    icon,
    color,
    bgColor,
    borderColor,
}: TechCardProps) => {
    // Use generic dark/light variants if specific ones aren't provided
    // If bgColor is provided, we use it. Otherwise we let CSS handle it via class selectors.

    const border = borderColor || color;

    const style = {
        '--button-bg': bgColor, // Undefined by default, allowing CSS fallback
        '--button-border': border,
        '--button-hover-bg': bgColor,
        '--button-hover-border': '#ffffff',
        '--button-shadow-color': `${color}40`,
    } as React.CSSProperties;

    return (
        <div className="w-full flex justify-center">
            <button className="brutalist-button" style={style}>
                <div className="tech-icon-container">
                    {imageUrl ? (
                        <img src={imageUrl} alt={name} className="tech-icon" />
                    ) : (
                        <div className="tech-icon flex items-center justify-center">
                            {icon}
                        </div>
                    )}
                </div>
                <div className="button-text">
                    <span>{name}</span>
                </div>
            </button>
        </div>
    );
};
