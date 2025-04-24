import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCryptoData } from '../features/crypto/cryptoSlice';
import CryptoTableRow from './CryptoTableRow';

const CryptoTable = () => {
  const cryptoData = useSelector(selectAllCryptoData);

  return (
    <div className="w-full overflow-x-auto pb-6">
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">#</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">Asset</th>
            <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-200">Price</th>
            <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-200">1h %</th>
            <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-200">24h %</th>
            <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-200">7d %</th>
            <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-200">Market Cap</th>
            <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-200">24h Volume</th>
            <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-200">Circulating Supply</th>
            <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-200">Max Supply</th>
            <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-200">7D Chart</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {cryptoData.map((crypto) => (
            <CryptoTableRow key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;