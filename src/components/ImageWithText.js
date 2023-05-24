import React from 'react';
import './ImageWithText.css';

const ImageWithText = ({ imageUrl, altText, children, reverse}) => {
  return (
    <div className={`image-with-text${reverse ? ' reverse' : ''}`}>
      <img className="image" src={imageUrl} alt={altText} />
      <div className="text-content">{children}</div>
    </div>
  );
};

export default ImageWithText;
