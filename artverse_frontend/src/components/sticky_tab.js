import React, { useState } from 'react';
import '../styles/StickyTabs.css';

const StickyTabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sticky-tabs-container">
      <div className="sticky-tabs">
        <button
          className={`tab-button ${activeTab === 'Traditional' ? 'active' : ''}`}
          onClick={() => handleTabClick('Traditional')}
        >
          Traditional Art
        </button>
        <button
          className={`tab-button ${activeTab === 'Services' ? 'active' : ''}`}
          onClick={() => handleTabClick('Services')}
        >
          Art Services
        </button>
        <button
          className={`tab-button ${activeTab === 'Digital' ? 'active' : ''}`}
          onClick={() => handleTabClick('Digital')}
        >
          Digital Art
        </button>
      </div>
    </div>
  );
};

export default StickyTabs;
