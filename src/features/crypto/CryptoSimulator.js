import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoData } from './cryptoSlice';
import { generateUpdatedCryptoData } from '../../data/mockData';

// This component simulates WebSocket real-time updates
const CryptoSimulator = ({ initialData }) => {
  const dispatch = useDispatch();
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start the simulation interval
    intervalRef.current = setInterval(() => {
      const updatedData = generateUpdatedCryptoData(initialData);
      dispatch(updateCryptoData(updatedData));
    }, 1500); // Update every 1.5 seconds

    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [dispatch, initialData]);

  // This is a utility component with no UI
  return null;
};

export default CryptoSimulator;