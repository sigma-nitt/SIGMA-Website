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

    <div>
      {/* <div className="bg-white p-4 mb-8">
        <h1 className="text-6xl text-center text-slate-500" style={{ fontFamily: 'impact'}}> */}
      <div className="p-4 mb-8">
        <h1 className="bg-secondary-gradient-2 bg-clip-text text-transparent text-6xl text-center font-bold">
          EXPLORE OUR EVENTS !
        </h1>
      </div>

      <div className="container mx-auto py-8 relative" style={{ maxWidth: '75%' }}>
        {events.map((event, index) => (
          <div key={index} className="flex flex-wrap bg-white rounded-lg shadow-md overflow-hidden mb-8 relative">
            <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center mb-2" style={{ maxWidth: '100%', overflowWrap: 'break-word', color:'black', fontFamily:'tahoma' }}>
                {event.title.toUpperCase()}
              </h2>
              <p className="text-sm md:text-base lg:text-base text-gray-700 text-center mt-4" style={{ maxWidth: '100%', overflowWrap: 'break-word', fontFamily:'tahoma' }}>
                {event.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8 md:absolute md:bottom-0 md:left-0 md:right-0">
              <button
                onClick={() => handleExpandClick(index)}
                className="bg-blue-500 text-white py-2 px-4 rounded-full mx-auto flex items-center justify-center"
                style={{ width: '100%', maxWidth: '200px' }}
              >
                {selectedEvent === index ? 'Collapse' : 'View Image Gallery'}
              </button>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-8 relative" style={{ maxHeight: '400px' }}>
              <img
                src={imageUrlFor(event.images[0]).url()}
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

    </div>
    
  );
};

export default EventsPage;