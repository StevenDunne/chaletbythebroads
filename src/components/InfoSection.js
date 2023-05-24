import React from 'react';
import './InfoSection.css';

const InfoSection = ({ items }) => {
  return (
    <div className="info-section">
      {items.map((item, index) => (
        <div key={index} className="info-item">
          <i class={item.url} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
