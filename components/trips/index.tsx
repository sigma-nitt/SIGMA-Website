"use client";
import React, { useRef } from 'react';
import './trips.css';

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
  './images/13.jpg',
  './images/14.jpg',
  './images/15.jpg',
  './images/16.jpg',
  './images/17.jpg',
  './images/18.jpg',
  './images/19.jpg',
  './images/20.jpg',
  './images/21.jpg',
  './images/22.jpg',
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
