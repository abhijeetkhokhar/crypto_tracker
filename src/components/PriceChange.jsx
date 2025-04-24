import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Component to display price change with color coding
const PriceChange = ({ value }) => {
  const isPositive = value >= 0;
  
  return (
    <div className={`flex items-center justify-end font-mono
      ${isPositive ? 'text-green-500' : 'text-red-500'} 
      transition-colors duration-300`}
    >
      <span className="mr-1">
        {isPositive ? '+' : ''}{value}%
      </span>
      {isPositive ? 
        <TrendingUp className="h-4 w-4" /> : 
        <TrendingDown className="h-4 w-4" />
      }
    </div>
  );
};

export default PriceChange;