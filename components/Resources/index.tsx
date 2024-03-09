"use client"
import React from 'react';

const ResourcePage = () => {
  const dataAnalyticsResources = [
    {
      title: 'SQL',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=9891s',
    },
    {
      title: 'Statistics',
      type: 'Blog',
      url: 'https://youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9&si=reEIlCSETLkvfoAz',
    },
    // Add more data analytics resources as needed
  ];

  const caseStudiesResources = [
    {
        title: 'SQL',
        type: 'Video',
        url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA&t=9891s',
    },
    {
        title: 'Statistics',
        type: 'Blog',
        url: 'https://youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9&si=reEIlCSETLkvfoAz',
    },
    // Add more case studies resources as needed
  ];

  const renderResourceSection = (resources, sectionTitle) => (
    <div className="mb-8" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="text-3xl font-bold mb-4">{sectionTitle}</h2>
      <div className="grid gap-4" style={{ justifyContent: 'center' }}> {/* Update justifyContent */}
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-6 shadow-md hover:shadow-lg transition duration-300"
            style={{ maxHeight: '200px', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-2">
              <strong>Type:</strong> {resource.type}
            </p>
            <p className="text-gray-600">
              <strong>URL:</strong>{' '}
              <a
                href={resource.url}
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {resource.url}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <div className="bg-gray-100 min-h-screen py-12" style={{ marginTop: '150px', display: 'flex' }}>
      <div className="max-w-4xl mx-auto flex">
        {renderResourceSection(dataAnalyticsResources, 'Data Analytics')}
        {renderResourceSection(caseStudiesResources, 'Case Studies')}
      </div>
    </div>
  );
};

export default ResourcePage;