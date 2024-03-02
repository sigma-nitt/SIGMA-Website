// // pages/events.tsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
// import client from '@/sanityClient';

// interface Event {
//   title: string;
//   description: string;
//   images: string[];
// }

// const builder = imageUrlBuilder(client);  // Initialize imageUrlBuilder with your Sanity client
// const imageUrlFor = (source: any) => builder.image(source);

// const EventsPage: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

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

//   if(loading) return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       {/* <p className="ml-2">Loading...</p> */}
//     </div>
//   )
//   if (error) return <p>Error :(</p>;
//   return (
//     <div className="container mx-auto py-8" style={{ maxWidth: '85%' }}>
//       <h1 className="text-3xl font-bold mb-8">Events</h1>
//       {events.map((event, index) => (
//         <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="md:col-span-2 lg:col-span-2 p-4 md:p-8 lg:p-8">
//             {event.images.slice(0, Math.ceil(event.images.length / 2)).map((image, imageIndex) => (
//               <div key={imageIndex} className="aspect-w-2 aspect-h-2 mb-4">
//                 <img
//                   src={imageUrlFor(image).width(1200).url()}
//                   alt={`Event ${index + 1} Image ${imageIndex + 1}`}
//                   className="object-cover rounded-lg max-w-full mx-auto"
//                   style={{ maxWidth: '100%' }}
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center p-4 md:p-8 lg:p-8">
//             <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center mb-2" style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
//               {event.title}
//             </h2>
//             <p className="text-sm md:text-base lg:text-base text-gray-700 text-center" style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
//               {event.description}
//             </p>
//           </div>
//           <div className="md:col-span-2 lg:col-span-2 p-4 md:p-8 lg:p-8">
//             {event.images.slice(Math.ceil(event.images.length / 2)).map((image, imageIndex) => (
//               <div key={imageIndex} className="aspect-w-2 aspect-h-2 mb-4">
//                 <img
//                   src={imageUrlFor(image).width(1200).url()}
//                   alt={`Event ${index + 1} Image ${imageIndex + 1}`}
//                   className="object-cover rounded-lg max-w-full mx-auto"
//                   style={{ maxWidth: '100%' }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventsPage;


// pages/events.tsx
// pages/events.tsx
"use client";
import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanityClient';
import EventGallery from '@/components/Events/EventGallery';

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

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
    </div>
  );

  if (error) return <p>Error :(</p>;

  return (
    <div className="container mx-auto py-8" style={{ maxWidth: '85%' }}>
      <h1 className="text-3xl font-bold mb-8">Events</h1>
      {events.map((event, index) => (
        <div key={index} className="flex flex-wrap bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8">
            <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center mb-2" style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
              {event.title}
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-700 text-center" style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
              {event.description}
            </p>
            <button
              onClick={() => handleExpandClick(index)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full mx-auto"
              style={{ width: '200px' }}
            >
              {selectedEvent === index ? 'Collapse' : 'View Image Gallery'}
            </button>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8 relative">
            <img
              src={imageUrlFor(event.images[1]).url()}
              alt={event.title}
              className="w-full h-auto md:h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
      {selectedEvent !== null && (
        <EventGallery
          images={events[selectedEvent].images}
          onClose={handleCloseGallery}
        />
      )}
    </div>
  );
};

export default EventsPage;