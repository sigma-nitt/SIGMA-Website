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
    <div className="pt-10 md:pt-14 pr-[8%] pl-[8%]">
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
