import { createSlice } from '@reduxjs/toolkit';
import { initialCryptoData } from '../../data/mockData';

// Initial state for the crypto slice
const initialState = {
  cryptoData: initialCryptoData,
  status: 'idle',
  error: null,
};

// Create the crypto slice with reducers
export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    // Update crypto data (simulating websocket updates)
    updateCryptoData: (state, action) => {
      state.cryptoData = action.payload;
    },
    // Set loading status
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    // Set error message
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

// Export actions
export const { updateCryptoData, setStatus, setError } = cryptoSlice.actions;

// Selectors
export const selectAllCryptoData = state => state.crypto.cryptoData;
export const selectCryptoStatus = state => state.crypto.status;
export const selectCryptoError = state => state.crypto.error;

// Export the crypto reducer
export default cryptoSlice.reducer;