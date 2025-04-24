import React, { useMemo } from 'react';

// Simple chart component for the 7-day price history
const SimpleChart = ({ data }) => {
  // Calculate chart dimensions
  const chartHeight = 40;
  const chartWidth = 120;
  
  // Find min and max values for scaling
  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const range = maxValue - minValue;
  
  // Generate SVG path for the chart line
  const path = useMemo(() => {
    if (!data || data.length === 0) return '';
    
    // Calculate points for the path
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * chartWidth;
      // Invert Y-axis (SVG 0,0 is top-left)
      const y = chartHeight - ((value - minValue) / range) * chartHeight;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  }, [data, chartHeight, chartWidth, minValue, range]);
  
  // Calculate fill color based on trend (first vs last value)
  const isPositiveTrend = data[data.length - 1] >= data[0];
  const strokeColor = isPositiveTrend ? '#10B981' : '#EF4444';
  
  return (
    <div className="w-[120px] h-[40px] flex items-center justify-center">
      <svg width={chartWidth} height={chartHeight} className="overflow-visible">
        <path
          d={path}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SimpleChart;