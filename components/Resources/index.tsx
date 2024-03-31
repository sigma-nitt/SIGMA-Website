"use client"
import React, { useState, useEffect } from 'react';
import './res.css';

interface Resource {
  title: string;
  resourceType: string;
  link: string;
  type: string;
}

const ResourcePage = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/api/resources');
        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }
        const data = await response.json();
        setResources(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

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
      <div
        style={{
          backgroundImage: `url('/images/bookshelf.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100px'
        }}
      >
        <div style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center', height: '200px', width: '1000px' }}>
          <h1 className="sigma text-3xl text-center mb-4 mt-5 md:text-6xl">Resources</h1>
          <p className="businessclub text-md text-center md:text-xl">Check out our amazing collection of Case materials, Finance modules, and much more...</p>
        </div>
      </div>

      <div className="container flex justify-center mt-20 mb-20">
        {resources.map((resource, index) => (
          <div key={index} className="w-1/2 mx-2 flex flex-col">
            <div className="hover-enlarge">
              <div className="mb-10 pl-60 text-5xl font-bold bg-secondary-gradient bg-clip-text text-transparent">
                <h2>{resource.type}</h2>
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4 text-black pl-40" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <div className="w-4/5">
                <div className="cont bg-white p-4" style={{borderRadius:'10px'}}>
                  <h3 className="text-2xl font-bold text-center mb-5">{resource.title}</h3>
                  <p className="text-center"><strong>Type:</strong> {resource.resourceType}</p>
                  <div className="text-center">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      <strong>Link:</strong>{" "}
                      <span className="text-blue-500 underline">{resource.link}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcePage;

