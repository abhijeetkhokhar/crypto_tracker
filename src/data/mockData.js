// Initial mock data for cryptocurrencies
export const initialCryptoData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    logo: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    price: 42000.50,
    priceChange1h: 0.5,
    priceChange24h: -1.2,
    priceChange7d: 3.7,
    marketCap: 810500000000,
    volume24h: 23900000000,
    circulatingSupply: 19256000,
    maxSupply: 21000000,
    chartData: [41200, 41500, 42300, 41800, 42100, 41700, 42000]
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    logo: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
    price: 2250.75,
    priceChange1h: -0.2,
    priceChange24h: 1.8,
    priceChange7d: -2.3,
    marketCap: 270300000000,
    volume24h: 12500000000,
    circulatingSupply: 120100000,
    maxSupply: null,
    chartData: [2210, 2240, 2180, 2220, 2260, 2230, 2250]
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    logo: "https://assets.coingecko.com/coins/images/325/small/Tether.png",
    price: 1.00,
    priceChange1h: 0.01,
    priceChange24h: -0.02,
    priceChange7d: 0.03,
    marketCap: 83500000000,
    volume24h: 48700000000,
    circulatingSupply: 83500000000,
    maxSupply: null,
    chartData: [1.001, 0.999, 1.002, 0.998, 1.001, 1.000, 1.000]
  },
  {
    id: 4,
    name: "Solana",
    symbol: "SOL",
    logo: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
    price: 145.25,
    priceChange1h: 1.2,
    priceChange24h: 5.7,
    priceChange7d: -3.1,
    marketCap: 61800000000,
    volume24h: 3500000000,
    circulatingSupply: 425000000,
    maxSupply: null,
    chartData: [140, 142, 145, 143, 146, 144, 145]
  },
  {
    id: 5,
    name: "Cardano",
    symbol: "ADA",
    logo: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
    price: 0.56,
    priceChange1h: -0.9,
    priceChange24h: -2.3,
    priceChange7d: 1.4,
    marketCap: 19700000000,
    volume24h: 730000000,
    circulatingSupply: 35200000000,
    maxSupply: 45000000000,
    chartData: [0.54, 0.55, 0.57, 0.56, 0.54, 0.57, 0.56]
  }
];

// Generate a random price change within a range
export const generateRandomPriceChange = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

// Update crypto data with random changes
export const generateUpdatedCryptoData = (cryptoData) => {
  return cryptoData.map(crypto => {
    // Generate random changes for price and percentages
    const priceChangePercent = generateRandomPriceChange(-1.5, 1.5) / 100;
    const newPrice = parseFloat((crypto.price * (1 + priceChangePercent)).toFixed(2));
    
    // Random changes for hourly, daily and weekly percentages
    const newPriceChange1h = parseFloat((crypto.priceChange1h + generateRandomPriceChange(-0.3, 0.3)).toFixed(2));
    const newPriceChange24h = parseFloat((crypto.priceChange24h + generateRandomPriceChange(-0.4, 0.4)).toFixed(2));
    const newPriceChange7d = parseFloat((crypto.priceChange7d + generateRandomPriceChange(-0.2, 0.2)).toFixed(2));
    
    // Random change for 24h volume
    const volumeChangePercent = generateRandomPriceChange(-3, 3) / 100;
    const newVolume24h = Math.round(crypto.volume24h * (1 + volumeChangePercent));

    return {
      ...crypto,
      price: newPrice,
      priceChange1h: newPriceChange1h,
      priceChange24h: newPriceChange24h,
      priceChange7d: newPriceChange7d,
      volume24h: newVolume24h
    };
  });
};