import React from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  return (
    <div className="gallery mainBody">
      {images.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.url} alt={item.description} />
          <div className="overlay">
            <div className="overlay-text">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
