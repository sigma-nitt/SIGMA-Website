// "use client"
// import React, { useState } from 'react';
// import './trips.css';

// const images = [
//   './images/1.jpg',
//   './images/2.jpg',
//   './images/3.jpg',
//   './images/5.jpg',
//   './images/7.JPG',
//   './images/11.jpg',
// ];

// const Gallery: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [transitionDuration, setTransitionDuration] = useState(3);

//   const handleSwipeLeft = () => {
//     setIndex(prevIndex => Math.min(prevIndex + 1, images.length - 1));
//     setTransitionDuration(3);
//   };

//   const handleSwipeRight = () => {
//     setIndex(prevIndex => Math.max(prevIndex - 1, 0));
//     setTransitionDuration(3);
//   };

//   return (
//     <div className="pr-1 pl-1 pt-5 md:pr-40 md:pl-40 md:pt-1">
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <button onClick={handleSwipeLeft} disabled={index >= images.length - 1} style={{ fontSize: '3rem', padding: '0.5rem' }}>
//           {"<"}
//         </button>
//         <div className="gallery-container">
//           {/* <div className="image-wrapper" style={{ transform: `translateX(-${index * (400 + 20) + 40}px)` }}> */}
//           <div className="image-wrapper" style={{ transform: `translateX(-${index * (200 + 20) + 40}px)` }}>
//             {images.map((src, i) => (
//               <img key={i} src={src} alt={`Image ${i}`} className="image" />
//             ))}
//           </div>
//         </div>
//         <button onClick={handleSwipeRight} disabled={index === 0} style={{ fontSize: '3rem', padding: '0.5rem' }}>
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;



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
