// "use client"
// import React, { useState } from 'react';
// import './trips.css';

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

// const Gallery: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [transitionDuration, setTransitionDuration] = useState(3);

//   const handleSwipeLeft = () => {
//     setIndex(prevIndex => Math.min(prevIndex + 6, images.length - 6));
//     setTransitionDuration(3);
//   };

//   const handleSwipeRight = () => {
//     setIndex(prevIndex => Math.max(prevIndex - 6, 0));
//     setTransitionDuration(3);
//   };

//   return (
//     <div className="pr-40 pl-40 pt-20">
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <button onClick={handleSwipeLeft} disabled={index + 6 >= images.length} style={{ fontSize: '3.5rem', padding: '0.5rem' }}>
//           {"<"}
//         </button>
//         <div className="gallery-container" style={{ transition: `transform ${transitionDuration}s ease !important` }}>
//           {images.slice(index, index + 6).map((image, idx) => (
//             <div key={idx} className="image-wrapper">
//               <img src={image} alt={`Image ${idx}`} className="image" />
//             </div>
//           ))}
//         </div>
//         <button onClick={handleSwipeRight} disabled={index === 0} style={{ fontSize: '3.5rem', padding: '0.5rem' }}>
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

"use client"
import React, { useState } from 'react';
import './trips.css';

const images = [
  './images/john.jpg',
  './images/bkg.jpg',
  './images/bkg.jpg',
  './images/john.jpg',
  './images/bkg.jpg',
  './images/john.jpg',
  './images/john.jpg',
  './images/john.jpg',
  './images/john.jpg',
  './images/bkg.jpg',
  './images/john.jpg',
  './images/john.jpg',
  './images/bkg.jpg',
  './images/bkg.jpg',
  './images/john.jpg',
  './images/bkg.jpg',
  './images/john.jpg',
  './images/john.jpg',
  './images/john.jpg',
  './images/john.jpg',
  './images/bkg.jpg',
  './images/john.jpg',
];

const Gallery: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(3);

  // Set index to 0 when the component mounts
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
    <div className="pr-40 pl-40 pt-20">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleSwipeLeft} disabled={index + 6 >= images.length} style={{ fontSize: '3.5rem', padding: '0.5rem' }}>
          {"<"}
        </button>
        <div className="gallery-container" style={{ transition: `transform ${transitionDuration}s ease !important` }}>
          {images.slice(index, index + 6).map((image, idx) => (
            <div key={idx} className="image-wrapper">
              <img src={image} alt={`Image ${idx}`} className="image" />
            </div>
          ))}
        </div>
        <button onClick={handleSwipeRight} disabled={index === 0} style={{ fontSize: '3.5rem', padding: '0.5rem' }}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
