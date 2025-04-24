import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { selectAllCryptoData } from './features/crypto/cryptoSlice';
import Layout from './components/Layout';
import CryptoTable from './components/CryptoTable';
import CryptoSimulator from './features/crypto/CryptoSimulator';

function App() {
  // Get initial data from the store for the simulator
  const initialData = store.getState().crypto.cryptoData;
  
  return (
    <Provider store={store}>
      <Layout>
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Top Cryptocurrencies
            </h2>
            <CryptoTable />
          </div>
        </div>
        {/* The simulator component handles the real-time updates */}
        <CryptoSimulator initialData={initialData} />
      </Layout>
    </Provider>
  );
}

export default App;