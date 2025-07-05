import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>}
      <div className="w-24 h-1 bg-blue-600 mt-4"></div>
    </div>
  );
};

export default SectionHeading;