// "use client";
// import React, { useState, useEffect } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
// import client from '@/sanityClient';
// import './events.css';

// interface Event {
//   title: string;
//   description: string;
//   images: string[];
// }

// const builder = imageUrlBuilder(client);
// const imageUrlFor = (source: any) => builder.image(source);

// const EventsPage: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
//   const [visibleIndex, setVisibleIndex] = useState(0);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('/api/events');
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         const data = await response.json();
//         setEvents(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleExpandClick = (index: number) => {
//     setSelectedEvent(index === selectedEvent ? null : index);
//   };

//   const handleCloseGallery = () => {
//     setSelectedEvent(null);
//   };

//   const handleSwipeLeft = () => {
//     if (visibleIndex < events.length - 2) {
//       setVisibleIndex(visibleIndex + 1);
//     }
//   };

//   const handleSwipeRight = () => {
//     if (visibleIndex > 0) {
//       setVisibleIndex(visibleIndex - 1);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Error :(</p>;
//   }

//   return (
//     <div className="container">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center text-3xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textDA font-poppins">Explore our Events!</span>
//         </h1>
//       </div>

//       <div className="backgroundGradient flex justify-between items-center gap-[0px] md:gap-[1px]">
//         <button
//           onClick={handleSwipeRight}
//           disabled={visibleIndex === 0}
//           className="text-2xl p-2"
//         >
//           {"<"}
//         </button>

//         <div className="gallery-container">
//           <div className="event-wrapper" style={{ transform: `translateX(-${visibleIndex * 80}%)` }}>
//             {events.map((event, index) => (
//               <div
//                 key={index}
//                 className="relative mr-[40px] w-[300px] h-[350px] md:w-[559px] md:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] md:mt-[87px] shadow-lg flex flex-col items-center"
//               >
//                 {/* Image */}
//                 <img
//                   src={imageUrlFor(event.images[0]).url()}
//                   alt={event.title}
//                   className="w-[250px] h-[150px] mt-[30px] md:h-[286px] md:w-[456px] mr-[60px] ml-[60px] rounded-[28px] md:mt-[60px] object-cover mb-4"
//                 />

//                 {/* Title and Description */}
//                 <div className="text-center mt-[5px] pl-3 pr-3 md:text-left md:ml-[52px] md:w-[456px] md:mt-[25px] md:leading-[34px]">
//                   <h2 className="text-lg font-poppins md:text-3xl md:mt-[40px] font-bold">
//                     {event.title.toUpperCase()}
//                   </h2>
//                   <p className="text-sm mt-2">{event.description}</p>
//                 </div>

//                 {/* Button */}
//                 <div className="absolute top-[35px] left-[125px] md:top-[84px] md:left-[262px]">
//                   <button
//                     onClick={() => handleExpandClick(index)}
//                     className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[200px] md:h-[47px] md:w-[200px]"
//                   >
//                     {selectedEvent === index ? 'Collapse' : 'View Image Gallery'}
//                   </button>
//                 </div>

//                 {/* Expanded content (Image Gallery) */}
//                 {selectedEvent === index && (
//                   <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//                     <div className="bg-white p-8 rounded-lg shadow-md w-[90%]">
//                       <h1 className="text-2xl font-bold text-blue-700 mb-4">GALLERY</h1>
//                       <div className="flex flex-wrap gap-4">
//                         {events[selectedEvent].images.map((image, idx) => (
//                           <img
//                             key={idx}
//                             src={imageUrlFor(image).url()}
//                             alt={`Gallery Image ${idx + 1}`}
//                             className="w-[400px] h-[200px] object-cover rounded-lg shadow-md"
//                           />
//                         ))}
//                       </div>
//                       <button onClick={handleCloseGallery} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
//                         Close Gallery
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={handleSwipeLeft}
//           disabled={visibleIndex >= events.length - 2}
//           className="text-2xl p-2"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventsPage;






// "use client"
// import React, { useState, useEffect } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
// import client from '@/sanityClient';
// import './events.css';

// interface Event {
//   title: string;
//   description: string;
//   images: string[];
// }

// const builder = imageUrlBuilder(client);
// const imageUrlFor = (source: any) => builder.image(source);

// const EventsPage: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
//   const [visibleIndex, setVisibleIndex] = useState(0);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('/api/events');
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         const data = await response.json();
//         setEvents(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleExpandClick = (index: number) => {
//     setSelectedEvent(index === selectedEvent ? null : index);
//   };

//   const handleCloseGallery = () => {
//     setSelectedEvent(null);
//   };

//   const handleSwipeLeft = () => {
//     const stepSize = window.innerWidth < 768 ? 1 : 2; // Adjust step size based on screen width
//     if (visibleIndex < events.length - stepSize) {
//       setVisibleIndex(visibleIndex + stepSize);
//     }
//   };
  
//   const handleSwipeRight = () => {
//     const stepSize = window.innerWidth < 768 ? 1 : 2; // Adjust step size based on screen width
//     if (visibleIndex > 0) {
//       setVisibleIndex(visibleIndex - stepSize);
//     }
//   };
  
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Error :(</p>;
//   }

//   return (
//     <div className="container">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center text-3xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textDA font-poppins">Explore our Events!</span>
//         </h1>
//       </div>

//       <div className="backgroundGradient flex justify-between items-center gap-[0px] md:gap-[81px]">
//         <button
//           onClick={handleSwipeRight}
//           disabled={visibleIndex === 0}
//           className="text-2xl pl-[50px]"
//         >
//           {"<"}
//         </button>

//         <div className="gallery-container">
//           {/* <div className="event-wrapper" style={{ transform: `translateX(-${visibleIndex * 599}px)` }}> */}
//           <div
//             className="event-wrapper"
//             style={{
//               transform: `translateX(-${visibleIndex * (window.innerWidth < 768 ? 330 : 599)}px)`,
//             }}
//           >
//             {events.map((event, index) => (
//               <div
//                 key={index}
//                 className={`relative w-[300px] h-[400px] md:w-[559px] md:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] md:mt-[87px] shadow-lg flex flex-col items-center ${
//                   index % 2 === 0 ? 'ml-[30px] md:mr-[40px] md:ml-[0px]' : index % 2 === 1 ? 'ml-[30px] md:ml-[40px]' : ''
//                 }`}
//               >
//                 {/* Image */}
//                 <img
//                   src={imageUrlFor(event.images[0]).url()}
//                   alt={event.title}
//                   className="w-[250px] h-[150px] mt-[30px] md:h-[286px] md:w-[456px] rounded-[28px] md:mt-[60px] object-cover mb-4"
//                 />

//                 {/* Title and Description */}
//                 <div className="text-center mt-[25px] pl-3 pr-3">
//                   <h2 className="text-lg font-poppins md:text-3xl font-bold">
//                     {event.title.toUpperCase()}
//                   </h2>
//                   <p className="text-sm mt-2">{event.description}</p>
//                 </div>

//                 {/* Button */}
//                 <div className="absolute top-[35px] left-[145px] md:top-[84px] md:left-[332px]">
//                   <button
//                     onClick={() => handleExpandClick(index)}
//                     className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[47px] md:w-[150px]"
//                   >
//                     {selectedEvent === index ? 'Collapse' : 'View Gallery'}
//                   </button>
//                 </div>

//                 {/* Expanded content (Image Gallery) */}
//                 {selectedEvent === index && (
//                   <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//                     <div className="bg-white p-8 rounded-lg shadow-md w-[90%]">
//                       <h1 className="text-2xl font-bold text-blue-700 mb-4">GALLERY</h1>
//                       <div className="flex flex-wrap gap-4">
//                         {events[selectedEvent].images.map((image, idx) => (
//                           <img
//                             key={idx}
//                             src={imageUrlFor(image).url()}
//                             alt={`Gallery Image ${idx + 1}`}
//                             className="w-[400px] h-[200px] object-cover rounded-lg shadow-md"
//                           />
//                         ))}
//                       </div>
//                       <button onClick={handleCloseGallery} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
//                         Close Gallery
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={handleSwipeLeft}
//           disabled={visibleIndex >= events.length - 2}
//           className="text-2xl pr-[50px]"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventsPage;




"use client"
import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanityClient';
import './events.css';

interface Event {
  title: string;
  description: string;
  images: string[];
}

const builder = imageUrlBuilder(client);
const imageUrlFor = (source: any) => builder.image(source);

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchEvents();

    const handleResize = () => {
      const width = window.innerWidth < 768 ? 330 : 599;
      setBoxWidth(width);
      setTranslateX(0); // Reset translateX on resize
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExpandClick = (index: number) => {
    setSelectedEvent(index === selectedEvent ? null : index);
  };

  const handleCloseGallery = () => {
    setSelectedEvent(null);
  };

  const handleSwipeLeft = () => {
    if (translateX > -(boxWidth * (events.length - 2))) {
      setTranslateX(translateX - boxWidth);
    }
  };
  
  const handleSwipeRight = () => {
    if (translateX < 0) {
      setTranslateX(translateX + boxWidth);
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="h-[87px] text-center text-3xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textDA font-poppins">Explore our Events!</span>
        </h1>
      </div>

      <div className="backgroundGradient flex justify-between items-center gap-[0px] md:gap-[81px]">
        <button
          onClick={handleSwipeRight}
          disabled={translateX === 0}
          className="text-2xl pl-[50px]"
        >
          {"<"}
        </button>

        <div className="gallery-container">
          <div
            className="event-wrapper"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {events.map((event, index) => (
              <div
                key={index}
                // className={`relative w-[300px] h-[400px] md:w-[559px] md:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] md:mt-[87px] shadow-lg flex flex-col items-center ${
                //   index % 2 === 0 ? 'ml-[30px] md:mr-[40px] md:ml-[0px]' : index % 2 === 1 ? 'ml-[30px] md:ml-[40px]' : ''
                // }`}
                className="relative mr-[40px] w-[300px] h-[400px] md:w-[559px] md:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] md:mt-[87px] shadow-lg flex flex-col items-center"
              >
                {/* Image */}
                <img
                  src={imageUrlFor(event.images[0]).url()}
                  alt={event.title}
                  className="w-[250px] h-[150px] mt-[30px] md:h-[286px] md:w-[456px] rounded-[28px] md:mt-[60px] object-cover mb-4"
                />

                {/* Title and Description */}
                <div className="text-center mt-[25px] pl-3 pr-3">
                  <h2 className="text-lg font-poppins md:text-3xl font-bold">
                    {event.title.toUpperCase()}
                  </h2>
                  <p className="text-sm mt-2">{event.description}</p>
                </div>

                {/* Button */}
                <div className="absolute top-[35px] left-[145px] md:top-[84px] md:left-[332px]">
                  <button
                    onClick={() => handleExpandClick(index)}
                    className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[47px] md:w-[150px]"
                  >
                    {selectedEvent === index ? 'Collapse' : 'View Gallery'}
                  </button>
                </div>

                {/* Expanded content (Image Gallery) */}
                {selectedEvent === index && (
                  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-md w-[90%]">
                      <h1 className="text-2xl font-bold text-blue-700 mb-4">GALLERY</h1>
                      <div className="flex flex-wrap gap-4">
                        {events[selectedEvent].images.map((image, idx) => (
                          <img
                            key={idx}
                            src={imageUrlFor(image).url()}
                            alt={`Gallery Image ${idx + 1}`}
                            className="w-[400px] h-[200px] object-cover rounded-lg shadow-md"
                          />
                        ))}
                      </div>
                      <button onClick={handleCloseGallery} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
                        Close Gallery
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSwipeLeft}
          disabled={translateX <= -(boxWidth * (events.length - 2))}
          className="text-2xl pr-[50px]"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default EventsPage;
