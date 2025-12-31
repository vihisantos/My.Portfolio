import React from 'react';

interface TechIconProps {
  name: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  gradient?: string;
}

export function TechIcon({ name, icon, imageUrl, gradient }: TechIconProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`w-16 h-16 rounded-2xl ${gradient ? `bg-gradient-to-br ${gradient}` : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'} p-3 flex items-center justify-center text-white shadow-lg relative overflow-hidden`}
      >
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-10 h-10 object-contain" />
        ) : (
          icon
        )}
      </div>
      <p className="text-sm font-semibold text-center">{name}</p>
    </div>
  );
}
