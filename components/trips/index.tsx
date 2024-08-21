"use client";
import React, { useRef } from 'react';
import './trips.css';

const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/5.jpg',
  './images/7.JPG',
  './images/11.jpg',
];

const Gallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pr-1 pl-1 pt-5 md:pr-40 md:pl-40 md:pt-1">
      <div>
        <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Image ${i}`} className="image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
