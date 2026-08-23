import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-8">
      <h2 className={`text-3xl font-bold mb-2 ${light ? 'text-white' : 'text-gray-800'}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-white/80' : 'text-gray-600'}`}>{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-[#3db5e6] mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;