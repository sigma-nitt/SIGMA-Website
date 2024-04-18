// "use client";
// import React, { useState, useEffect } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
// import client from '@/sanityClient';
// import EventGallery from '@/components/Events/EventGallery';
// import "./events.css";

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

//   if (loading) return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//     </div>
//   );

//   if (error) return <p>Error :(</p>;

//   return (

//     <div>
//       <div className="p-4 mb-8">
//         <h1 className="hdng bg-secondary-gradient-2 bg-clip-text text-transparent text-6xl text-center font-bold">
//           EXPLORE OUR EVENTS !
//         </h1>
//       </div>

//       <div className="mx-auto py-8 relative w-5/6 md:w-3/4">
//         {events.map((event, index) => (
//           <div key={index} className="flex flex-wrap bg-white overflow-hidden mb-8 relative" style={{borderRadius: '10px'}}>
//             <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8">
//               <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center mb-2" style={{ maxWidth: '100%', overflowWrap: 'break-word', color:'black', fontFamily:'tahoma' }}>
//                 {event.title.toUpperCase()}
//               </h2>
//               <p className="text-sm md:text-base lg:text-base text-gray-700 text-center mt-4" style={{ maxWidth: '100%', overflowWrap: 'break-word', fontFamily:'tahoma' }}>
//                 {event.description}
//               </p>
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8 md:absolute md:bottom-0 md:left-0 md:right-0">
//               <button
//                 onClick={() => handleExpandClick(index)}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-full mx-auto flex items-center justify-center"
//                 style={{ width: '100%', maxWidth: '200px' }}
//               >
//                 {selectedEvent === index ? 'Collapse' : 'View Image Gallery'}
//               </button>
//             </div>

//             <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8 relative" style={{ maxHeight: '400px' }}>
//               <img
//                 src={imageUrlFor(event.images[0]).url()}
//                 alt={event.title}
//                 className="w-full h-auto md:h-full rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         ))}
//         {selectedEvent !== null && (
//           <EventGallery
//             images={events[selectedEvent].images}
//             onClose={handleCloseGallery}
//           />
//         )}
//       </div>

//     </div>
    
//   );
// };

// export default EventsPage;






"use client";
import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { motion } from 'framer-motion';
import client from '@/sanityClient';
import EventGallery from '@/components/Events/EventGallery';
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
  }, []);

  const handleExpandClick = (index: number) => {
    setSelectedEvent(index === selectedEvent ? null : index);
  };

  const handleCloseGallery = () => {
    setSelectedEvent(null);
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
    <div>
      <div className="p-4 mb-8">
        <h1 className="hdng bg-secondary-gradient-2 bg-clip-text text-transparent text-6xl text-center font-bold">
          EXPLORE OUR EVENTS!
        </h1>
      </div>

      <div className="mx-auto py-8 relative w-5/6 md:w-3/4">
        {events.map((event, index) => {
          // Randomly determine if the animation should start from the left or right
          const initialX = Math.random() > 0.5 ? -1000 : 1000;

          return (
            <motion.div
              key={index}
              initial={{ x: initialX, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-wrap bg-white overflow-hidden mb-8 relative"
              style={{ borderRadius: '10px' }}
            >
              {/* Description side */}
              <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8 flex flex-col justify-between">
                {/* Title and description */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center mb-2" style={{ maxWidth: '100%', overflowWrap: 'break-word', color: 'black', fontFamily: 'Tahoma' }}>
                    {event.title.toUpperCase()}
                  </h2>
                  <p className="text-sm md:text-base lg:text-base text-gray-700 text-center mt-4" style={{ maxWidth: '100%', overflowWrap: 'break-word', fontFamily: 'Tahoma' }}>
                    {event.description}
                  </p>
                </motion.div>

                {/* Button */}
                <div className="flex justify-center mt-auto">
                  <button
                    onClick={() => handleExpandClick(index)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-full"
                    style={{ width: '100%', maxWidth: '200px' }}
                  >
                    {selectedEvent === index ? 'Collapse' : 'View Image Gallery'}
                  </button>
                </div>
              </div>

              {/* Image side */}
              <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8 relative" style={{ maxHeight: '400px' }}>
                <img
                  src={imageUrlFor(event.images[0]).url()}
                  alt={event.title}
                  className="w-full h-auto md:h-full rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          );
        })}
        {selectedEvent !== null && (
          <EventGallery
            images={events[selectedEvent].images}
            onClose={handleCloseGallery}
          />
        )}
      </div>
    </div>
  );
};

export default EventsPage;
