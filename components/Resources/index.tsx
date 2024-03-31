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

  // Filter resources based on type
  const dataAnalyticsResources = resources.filter(resource => resource.type === 'Data Analytics');
  const caseStudiesResources = resources.filter(resource => resource.type === 'Case Studies');

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
        {/* Data Analytics Column */}
        <div className="w-1/2 overflow-y-auto" style={{ maxHeight: '500px' }}>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold bg-secondary-gradient bg-clip-text text-transparent text-center hover-enlarge mb-10 md:text-5xl">Data Analytics</h2>
            {dataAnalyticsResources.map((resource, index) => (
              <div key={index} className="w-3/4 mb-8">
                <div className="cont bg-white pl-5 pr-5 pt-4 pb-4 md:pl-15 md:pr-15 md:pt-4 md:pb-4" style={{ borderRadius: '10px' }}>
                  <h3 className="text-xl font-bold text-center mb-5 text-black md:text-2xl" style={{ wordWrap: 'break-word' }}>{resource.title}</h3>
                  <p className="text-center text-sm text-black" style={{ wordWrap: 'break-word' }}><strong>Type:</strong> {resource.resourceType}</p>
                  <div className="text-center text-sm">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                      <strong>Link:</strong>{" "}
                      <span className="text-blue-500 underline" style={{ wordWrap: 'break-word' }}>{resource.link}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Column */}
        <div className="w-1/2 overflow-y-auto" style={{ maxHeight: '500px' }}>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold bg-secondary-gradient bg-clip-text text-transparent text-center hover-enlarge mb-10 md:text-5xl">Case Studies</h2>
            {caseStudiesResources.map((resource, index) => (
              <div key={index} className="w-3/4 mb-8">
                <div className="cont bg-white pl-5 pr-5 pt-4 pb-4 md:pl-15 md:pr-15 md:pt-4 md:pb-4" style={{ borderRadius: '10px' }}>
                  <h3 className="text-xl font-bold text-center mb-5 text-black md:text-2xl" style={{ wordWrap: 'break-word' }}>{resource.title}</h3>
                  <p className="text-center text-sm text-black" style={{ wordWrap: 'break-word' }}><strong>Type:</strong> {resource.resourceType}</p>
                  <div className="text-center text-sm">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                      <strong>Link:</strong>{" "}
                      <span className="text-blue-500 underline" style={{ wordWrap: 'break-word' }}>{resource.link}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
