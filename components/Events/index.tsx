"use client";
// // pages/events.tsx
import React, { useState, useEffect } from 'react';

interface Event {
  title: string;
  description: string;
  images: string[];
  // images: { url: string }[];
}

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

  return (
    <div className="container mx-auto py-8" style={{ maxWidth: '85%' }}>
      <h1 className="text-3xl font-bold mb-8">Events</h1>
      {events.map((event, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <div className="grid grid-cols-2 gap-8">
              {event.images.map((image, imageIndex) => (
                <div key={imageIndex} className="aspect-w-2 aspect-h-2">
                  <img
                    src={image}
                    alt={`Event ${index + 1} Image ${imageIndex + 1}`}
                    className="object-cover rounded-lg max-w-full"
                    style={{ maxWidth: '80%' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;



