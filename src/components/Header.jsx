import React from 'react';
import { Coins } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 py-6 px-4 border-b border-gray-700 sm:px-6 md:flex md:items-center md:justify-between">
      <div className="flex items-center">
        <Coins size={36} className="text-blue-400 mr-3" />
        <div>
          <h1 className="text-2xl font-bold text-white">CryptoTracker</h1>
          <p className="text-blue-300 text-sm mt-1">Real-time cryptocurrency prices</p>
        </div>
      </div>
      
      <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-300">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
          <span>Live Updates</span>
        </div>
        <div className="ml-6 text-xs text-gray-400">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </header>
  );
};

export default Header;