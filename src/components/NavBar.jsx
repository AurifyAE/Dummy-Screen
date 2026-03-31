import React, { useState } from 'react';
import './NavBar.css';

const TABS = ['LIVE RATES', 'PRODUCT', 'PRIVACY POLICY', 'CONTACT US'];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="navbar-container">
      <div className="tabs">
        {TABS.map((tab, idx) => (
          <button
            key={tab}
            className={`tab-btn orbitron ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      <button className="cta-btn orbitron glow-box-amber">
        DOWNLOAD OUR APP
      </button>
    </div>
  );
}
