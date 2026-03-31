import React from 'react';
import { useFlash } from '../hooks/useFlash';
import './HeaderPriceCard.css';

const PriceBox = ({ title, bid, ask, low, high, isAed = false }) => {
  const bidFlash = useFlash(bid);
  const askFlash = useFlash(ask);

  return (
    <div className={`price-box card`}>
      <h2 className="price-title orbitron text-dim">{title}</h2>
      <div className="prices-container">
        {/* BID */}
        <div className={`price-item glow-box-green ${bidFlash}`}>
          <div className="price-label orbitron text-green glow-text-green">BID</div>
          <div className="price-value orbitron text-white">{bid.toFixed(isAed ? 3 : 2)}</div>
        </div>
        {/* ASK */}
        <div className={`price-item glow-box-amber ${askFlash}`}>
          <div className="price-label orbitron text-amber glow-text-amber">ASK</div>
          <div className="price-value orbitron text-white">{ask.toFixed(isAed ? 3 : 2)}</div>
        </div>
      </div>
      <div className="low-high-container">
        <div className="lh-item">
          <span className="lh-label text-dim">LOW:</span> <span className="lh-val text-red glow-text-red">{low.toFixed(isAed ? 3 : 2)}</span>
        </div>
        <div className="lh-item">
          <span className="lh-label text-dim">HIGH:</span> <span className="lh-val text-green glow-text-green">{high.toFixed(isAed ? 3 : 2)}</span>
        </div>
      </div>
    </div>
  );
};

export default function HeaderPriceCard({ spot, aed }) {
  return (
    <div className="header-container">
      <div className="header-left">
        <PriceBox title="SPOT RATE (USD/OZ)" bid={spot.bid} ask={spot.ask} low={spot.low} high={spot.high} />
      </div>

      <div className="header-center">
        <div className="logo-glow orbitron">
          <div className="company-name text-white">DUMMY</div>
          <div className="company-gold text-amber glow-text-amber">GOLD</div>
        </div>
      </div>

      <div className="header-right">
        <PriceBox title="AED/GRAM" bid={aed.bid} ask={aed.ask} low={aed.low} high={aed.high} isAed={true} />
      </div>
    </div>
  );
}
