// "use client";
// // // pages/events.tsx
// import React, { useState, useEffect } from 'react';

// interface Event {
//   title: string;
//   description: string;
//   images: string[];
//   // images: { url: string }[];
// }

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

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return (
//     <div className="container mx-auto py-8" style={{ maxWidth: '85%' }}>
//       <h1 className="text-3xl font-bold mb-8">Events</h1>
//       {events.map((event, index) => (
//         <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="p-8">
//             <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
//             <p className="text-gray-700 mb-4">{event.description}</p>
//             <div className="grid grid-cols-2 gap-8">
//               {event.images.map((image, imageIndex) => (
//                 <div key={imageIndex} className="aspect-w-2 aspect-h-2">
//                   <img
//                     src={image}
//                     alt={`Event ${index + 1} Image ${imageIndex + 1}`}
//                     className="object-cover rounded-lg max-w-full"
//                     style={{ maxWidth: '80%' }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventsPage;


// pages/events.tsx
"use client";
import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';  // Import imageUrlBuilder
import client from '@/sanityClient';

interface Event {
  title: string;
  description: string;
  images: string[];
  // images: { url: string }[];
}

const builder = imageUrlBuilder(client);  // Initialize imageUrlBuilder with your Sanity client
const imageUrlFor = (source: any) => builder.image(source);

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  //layout 1
  // return (
  //   <div className="container mx-auto py-8" style={{ maxWidth: '85%' }}>
  //     <h1 className="text-3xl font-bold mb-8">Events</h1>
  //     {events.map((event, index) => (
  //       <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
  //         <div className="p-8">
  //           <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
  //           <p className="text-gray-700 mb-4">{event.description}</p>
  //           <div className="grid grid-cols-2 gap-8">
  //             {event.images.map((image, imageIndex) => (
  //               <div key={imageIndex} className="aspect-w-2 aspect-h-2">
  //                 <img
  //                   src={imageUrlFor(image).width(1200).url()}  // Use imageUrlFor to get the image URL
  //                   alt={`Event ${index + 1} Image ${imageIndex + 1}`}
  //                   className="object-cover rounded-lg max-w-full mx-auto" // Set mx-auto for centering
  //                   style={{ maxWidth: '100%' }} // Adjust the maximum width if needed
  //                 />
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );  





  //layout 2

  // return (
  //   <div className="container mx-auto py-8" style={{ maxWidth: '85%' }}>
  //     <h1 className="text-3xl font-bold mb-8">Events</h1>
  //     {events.map((event, index) => (
  //       <div key={index} className="grid grid-cols-5 gap-8 bg-white rounded-lg shadow-md overflow-hidden mb-8">
  //         <div className="col-span-2 p-8">
  //           {event.images.slice(0, Math.ceil(event.images.length / 2)).map((image, imageIndex) => (
  //             <div key={imageIndex} className="aspect-w-2 aspect-h-2 mb-4">
  //               <img
  //                 src={imageUrlFor(image).width(1200).url()}
  //                 alt={`Event ${index + 1} Image ${imageIndex + 1}`}
  //                 className="object-cover rounded-lg max-w-full mx-auto"
  //                 style={{ maxWidth: '100%' }}
  //               />
  //             </div>
  //           ))}
  //         </div>
  //         <div className="col-span-1 flex flex-col items-center justify-center p-8">
  //           <h2 className="text-2xl font-semibold text-center mb-2" style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
  //             {event.title}
  //           </h2>
  //           <p className="text-gray-700 text-center" style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
  //             {event.description}
  //           </p>
  //         </div>
  //         <div className="col-span-2 p-8">
  //           {event.images.slice(Math.ceil(event.images.length / 2)).map((image, imageIndex) => (
  //             <div key={imageIndex} className="aspect-w-2 aspect-h-2 mb-4">
  //               <img
  //                 src={imageUrlFor(image).width(1200).url()}
  //                 alt={`Event ${index + 1} Image ${imageIndex + 1}`}
  //                 className="object-cover rounded-lg max-w-full mx-auto"
  //                 style={{ maxWidth: '100%' }}
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );


  //responsive
  return (
    <div className="container mx-auto py-8" style={{ maxWidth: '85%' }}>
      <h1 className="text-3xl font-bold mb-8">Events</h1>
      {events.map((event, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:col-span-2 lg:col-span-2 p-4 md:p-8 lg:p-8">
            {event.images.slice(0, Math.ceil(event.images.length / 2)).map((image, imageIndex) => (
              <div key={imageIndex} className="aspect-w-2 aspect-h-2 mb-4">
                <img
                  src={imageUrlFor(image).width(1200).url()}
                  alt={`Event ${index + 1} Image ${imageIndex + 1}`}
                  className="object-cover rounded-lg max-w-full mx-auto"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            ))}
          </div>
          <div className="md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center p-4 md:p-8 lg:p-8">
            <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center mb-2" style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
              {event.title}
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-700 text-center" style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
              {event.description}
            </p>
          </div>
          <div className="md:col-span-2 lg:col-span-2 p-4 md:p-8 lg:p-8">
            {event.images.slice(Math.ceil(event.images.length / 2)).map((image, imageIndex) => (
              <div key={imageIndex} className="aspect-w-2 aspect-h-2 mb-4">
                <img
                  src={imageUrlFor(image).width(1200).url()}
                  alt={`Event ${index + 1} Image ${imageIndex + 1}`}
                  className="object-cover rounded-lg max-w-full mx-auto"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default EventsPage;
