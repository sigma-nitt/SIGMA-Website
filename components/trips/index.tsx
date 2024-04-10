"use client"
import React, { useState } from 'react';
import './trips.css';

// const images = [
//   './images/john.jpg',
//   './images/bkg.jpg',
//   './images/bkg.jpg',
//   './images/john.jpg',
//   './images/bkg.jpg',
//   './images/john.jpg',
//   './images/john.jpg',
//   './images/john.jpg',
//   './images/john.jpg',
//   './images/bkg.jpg',
//   './images/john.jpg',
//   './images/john.jpg',
//   './images/bkg.jpg',
//   './images/bkg.jpg',
//   './images/john.jpg',
//   './images/bkg.jpg',
//   './images/john.jpg',
//   './images/john.jpg',
//   './images/john.jpg',
//   './images/john.jpg',
//   './images/bkg.jpg',
//   './images/john.jpg',
// ];

const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
  './images/7.jpg',
  './images/8.jpg',
  './images/9.jpg',
  './images/10.jpg',
  './images/11.jpg',
  './images/12.jpg',
];

const Gallery: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(3);
  useState(() => {
    setIndex(images.length - 6);
  });

  const handleSwipeLeft = () => {
    setIndex(prevIndex => Math.min(prevIndex + 6, images.length - 6));
    setTransitionDuration(3);
  };

  const handleSwipeRight = () => {
    setIndex(prevIndex => Math.max(prevIndex - 6, 0));
    setTransitionDuration(3);
  };

  return (
    <div className="pr-1 pl-1 pt-15 md:pr-40 md:pl-40 md:pt-20">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleSwipeLeft} disabled={index + 6 >= images.length} style={{ fontSize: '3rem', padding: '0.5rem' }}>
          {"<"}
        </button>
        <div className="gallery-container" style={{ transition: `transform ${transitionDuration}s ease !important` }}>
          {images.slice(index, index + 6).map((image, idx) => (
            <div key={idx} className="image-wrapper">
              <img src={image} alt={`Image ${idx}`} className="image" />
            </div>
          ))}
        </div>
        <button onClick={handleSwipeRight} disabled={index === 0} style={{ fontSize: '3rem', padding: '0.5rem' }}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
