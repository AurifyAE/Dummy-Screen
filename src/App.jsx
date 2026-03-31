import React, { useState, useEffect } from 'react';
import HeaderPriceCard from './components/HeaderPriceCard';
import NavBar from './components/NavBar';
import RatesTable from './components/RatesTable';
import TickerBar from './components/TickerBar';

const MOCK_DATA = {
  spot: { bid: 4572.64, ask: 4574.44, low: 4560.10, high: 4585.50 },
  aed: { bid: 71.197, ask: 72.647, low: 70.500, high: 73.100 },
  goldTable: [
    { name: 'Gold 999 (1 GM)', unit: '1 GM', bid: 71.19, ask: 72.64 },
    { name: 'Gold Kilobar 999 (1 KG)', unit: '1 KG', bid: 71190.00, ask: 72640.00 },
    { name: 'Gold TOLA 9999 (1 TTB)', unit: '1 TTB', bid: 8303.00, ask: 8472.00 },
    { name: 'Gold Ten TOLA 999 (1 TOLA)', unit: '1 TOLA', bid: 83030.00, ask: 84720.00 },
  ],
  mintedBars: [
    { name: 'Minted Bar 999 10GM', unit: '10 GM', bid: 711.90, ask: 726.40 },
    { name: 'Minted Bar 999 20GM', unit: '20 GM', bid: 1423.80, ask: 1452.80 },
    { name: 'Minted Bar 999 30GM', unit: '30 GM', bid: 2135.70, ask: 2179.20 },
    { name: 'Minted Bar 999 40GM', unit: '40 GM', bid: 2847.60, ask: 2905.60 },
  ]
};

// Generates a small random fluctuation
const getRandomVolatility = (maxVal) => (Math.random() - 0.5) * maxVal;

function App() {
  const [data, setData] = useState(MOCK_DATA);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const fluctuatePrice = (val, maxVol) => {
             const change = getRandomVolatility(maxVol);
             return Number((val + change).toFixed(2));
        };
        const fluctuateSpotPrice = (val, maxVol) => {
             const change = getRandomVolatility(maxVol);
             return Number((val + change).toFixed(3)); // allow 3 decimals
        };

        return {
          spot: {
            ...prevData.spot,
            bid: fluctuatePrice(prevData.spot.bid, 2),
            ask: fluctuatePrice(prevData.spot.ask, 2),
          },
          aed: {
            ...prevData.aed,
            bid: fluctuateSpotPrice(prevData.aed.bid, 0.5),
            ask: fluctuateSpotPrice(prevData.aed.ask, 0.5),
          },
          goldTable: prevData.goldTable.map(item => ({
            ...item,
            bid: fluctuatePrice(item.bid, 1),
            ask: fluctuatePrice(item.ask, 1),
          })),
          mintedBars: prevData.mintedBars.map(item => ({
            ...item,
            bid: fluctuatePrice(item.bid, 2),
            ask: fluctuatePrice(item.ask, 2),
          }))
        };
      });
    }, 4000); // UI feel: updating every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      <HeaderPriceCard spot={data.spot} aed={data.aed} />
      <NavBar />
      <div style={{ display: 'flex', flex: 1, padding: '20px', gap: '20px' }}>
        <RatesTable title="GOLD" data={data.goldTable} />
        <RatesTable title="MINTED BARS" data={data.mintedBars} />
      </div>
      <TickerBar />
    </div>
  );
}

export default App;
