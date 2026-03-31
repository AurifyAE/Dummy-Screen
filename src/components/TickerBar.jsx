import React from 'react';
import './TickerBar.css';

export default function TickerBar() {
  return (
    <div className="ticker-container">
      <div className="ticker-label orbitron glow-box-amber">LATEST NEWS</div>
      <div className="ticker-wrap">
        <div className="ticker-move text-dim orbitron">
          <span className="ticker-item">NEW RAK GOLD MARKET REMAINS VOLATILE AMID GLOBAL TRENDS | </span>
          <span className="ticker-item">SPOT GOLD HITS NEW HIGHS | </span>
          <span className="ticker-item">DOWNLOAD OUR APP FOR LIVE TRADING & INSTANT ALERTS | </span>
          <span className="ticker-item">REMIUM MINTED BARS NOW AVAILABLE IN 10GM AND 20GM SIZES | </span>
          <span className="ticker-item">NEW RAK GOLD MARKET REMAINS VOLATILE AMID GLOBAL TRENDS | </span>
          <span className="ticker-item">SPOT GOLD HITS NEW HIGHS | </span>
          <span className="ticker-item">DOWNLOAD OUR APP FOR LIVE TRADING & INSTANT ALERTS | </span>
          <span className="ticker-item">REMIUM MINTED BARS NOW AVAILABLE IN 10GM AND 20GM SIZES | </span>
        </div>
      </div>
    </div>
  );
}
