# Crypto Price Tracker

A real-time cryptocurrency price tracking application built with React, Redux, and Tailwind CSS.

## Features

- Real-time price updates for top cryptocurrencies (Bitcoin, Ethereum, Tether, Solana, Cardano)
- Price change indicators for 1h, 24h, and 7d periods
- Visual price charts for each cryptocurrency
- Responsive design that works on desktop and mobile devices
- Simulated real-time updates (refreshes every 1.5 seconds)

## Technology Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/              # Redux store configuration
├── components/       # UI components
│   ├── CryptoTable.jsx
│   ├── CryptoTableRow.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── PriceChange.jsx
│   └── SimpleChart.jsx
├── data/             # Mock data for cryptocurrencies
│   └── mockData.js
├── features/         # Feature modules
│   └── crypto/       # Cryptocurrency feature
│       ├── CryptoSimulator.js
│       └── cryptoSlice.js
└── App.tsx           # Main application component
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <https://github.com/abhijeetkhokhar/crypto_tracker.gitl>

# Navigate to the project directory
cd crypto-price-tracker

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## Future Enhancements

- Connect to a real cryptocurrency API for live data
- Add user authentication
- Implement portfolio tracking
- Add detailed views for each cryptocurrency
- Implement historical price charts
