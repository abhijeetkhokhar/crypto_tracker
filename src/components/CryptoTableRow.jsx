import React, { memo } from 'react';
import PriceChange from './PriceChange';
import SimpleChart from './SimpleChart';

// Format large numbers with commas and abbreviate if needed
const formatNumber = (num) => {
  if (num === null || num === undefined) return 'N/A';
  
  // For large numbers, use abbreviations
  if (num >= 1_000_000_000) {
    return `$${(num / 1_000_000_000).toFixed(1)}B`;
  } else if (num >= 1_000_000) {
    return `$${(num / 1_000_000).toFixed(1)}M`;
  } else if (num >= 1_000) {
    return `$${(num / 1_000).toFixed(1)}K`;
  }
  
  return num.toLocaleString();
};

// Format supply numbers without $ symbol
const formatSupply = (num, symbol) => {
  if (num === null || num === undefined) return 'N/A';
  return `${num.toLocaleString()} ${symbol}`;
};

// Component for a single crypto table row
const CryptoTableRow = ({ crypto }) => {
  return (
    <tr className="hover:bg-gray-800/50 transition-colors duration-150">
      <td className="px-3 py-4 text-sm text-gray-300">{crypto.id}</td>
      <td className="px-3 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img 
            src={crypto.logo} 
            alt={`${crypto.name} logo`} 
            className="h-8 w-8 rounded-full bg-gray-700 p-1"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/32?text=' + crypto.symbol;
            }}
          />
          <div className="ml-4">
            <div className="font-medium text-white">{crypto.name}</div>
            <div className="text-gray-400">{crypto.symbol}</div>
          </div>
        </div>
      </td>
      <td className="px-3 py-4 text-right whitespace-nowrap">
        <div className="text-white font-mono font-medium transition-all duration-300">
          ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </td>
      <td className="px-3 py-4">
        <PriceChange value={crypto.priceChange1h} />
      </td>
      <td className="px-3 py-4">
        <PriceChange value={crypto.priceChange24h} />
      </td>
      <td className="px-3 py-4">
        <PriceChange value={crypto.priceChange7d} />
      </td>
      <td className="px-3 py-4 text-right text-gray-300 font-mono">
        {formatNumber(crypto.marketCap)}
      </td>
      <td className="px-3 py-4 text-right text-gray-300 font-mono">
        {formatNumber(crypto.volume24h)}
      </td>
      <td className="px-3 py-4 text-right text-gray-300 font-mono">
        {formatSupply(crypto.circulatingSupply, crypto.symbol)}
      </td>
      <td className="px-3 py-4 text-right text-gray-300 font-mono">
        {crypto.maxSupply ? formatSupply(crypto.maxSupply, crypto.symbol) : 'N/A'}
      </td>
      <td className="px-3 py-4">
        <SimpleChart data={crypto.chartData} />
      </td>
    </tr>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(CryptoTableRow);