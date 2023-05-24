import React from "react";
import './Nearby.css';

const Nearby = ({ imageData }) => {
    return (
      <div className="nearby-container">
        {imageData.map((img, index) => (
          <div key={index} className="nearby-image-container">
            <img src={img.src} alt={img.alt} loading="lazy"/>
            <div className="nearby-image-overlay">
                <div className="nearby-image-info">
                    <span>{img.name}</span>
                    <span className="nearby-image-description">{img.description}</span>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Nearby;
  