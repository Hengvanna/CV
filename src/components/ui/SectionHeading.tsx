import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12">
      <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 ${light ? 'text-white' : 'text-[#13284c]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl ${light ? 'text-white/70' : 'text-gray-600'}`}>{subtitle}</p>
      )}
      <div className="w-16 h-1.5 bg-[#3db5e6] mt-5 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;
