import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  maxValue?: number;
  label?: string;
  showLabel?: boolean;
  showValue?: boolean;
  className?: string;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  maxValue = 100,
  label,
  showLabel = true,
  showValue = true,
  className = '',
  animated = true,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);
  
  const percentage = Math.min(Math.max(0, displayValue), maxValue) / maxValue * 100;
  
  return (
    <div className={`mb-4 ${className}`}>
      {showLabel && label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
          {showValue && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{displayValue}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-white/20 rounded-full h-2.5">
        <div 
          className="bg-[#3db5e6] h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;