import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../features/crypto/cryptoSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

// Export types for TypeScript usage
export default store;