"use client";
import React, { useRef } from 'react';
import './trips.css';

const images = [
  './images/0303.jpg',
  './images/0404.jpg',
  './images/0505.jpg',
  './images/0606.jpg',
  './images/0707.jpg',
  './images/0808.jpg',
  './images/0909.jpg',
  './images/1010.jpg',
  './images/1111.jpg',
  './images/1212.jpg',
  './images/1313.jpg',
  './images/1414.jpg',
  './images/1515.jpg',
  './images/1616.jpg',
  './images/1717.jpg',
  './images/1818.jpg',
  './images/1919.jpg',
  './images/2020.jpg',
  './images/2121.jpg',
  './images/2222.jpg',
  './images/2323.jpg',
];

const Gallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-10 md:pt-14 pr-[8%] pl-[8%]">
      <div>
        <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Image ${i}`} className="image h-[266.66px] w-auto mr-[10px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
