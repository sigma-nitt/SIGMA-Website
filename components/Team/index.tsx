"use client";
import React, { useState, useEffect } from 'react';
import './team.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanityClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface TeamMember {
  name: string;
  position: string;
  category: string;
  aboutyou: string;
  image: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const builder = imageUrlBuilder(client);
const imageUrlFor = (source: any) => builder.image(source);

const MeetOurTeamPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('core');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(`/api/teamMembers?selectedCategory=${selectedCategory}`);
        if (!response.ok) {
          throw new Error('Failed to fetch team members');
        }
        const data = await response.json();
        setTeamMembers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, [selectedCategory]);

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
    </div>
  );
  if (error) return <p>Error :(</p>;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleMouseEnter = (memberName: string) => {
    setHoveredMember(memberName);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <div className="text-center flipping-container">
      <div className="p-4 mb-8 mt-30">
        <h1 className="hdng bg-secondary-gradient-2 bg-clip-text text-transparent text-6xl text-center font-bold">
          OUR TEAM' 23
        </h1>
      </div>
      <br></br>
      <div className="buttonarrangement flex justify-around mb-8">
        <button onClick={() => handleCategoryClick('core')} className={`py-2 px-4 font-bold rounded-full category-button ${selectedCategory.toLowerCase() === 'core' ? 'bg-green-500 text-black' : 'bg-gray-300 text-black'}`}>Core</button>
        <button onClick={() => handleCategoryClick('senior manager')} className={`py-2 px-4 font-bold rounded-full category-button ${selectedCategory.toLowerCase() === 'senior manager' ? 'bg-green-500 text-black' : 'bg-gray-300 text-black'}`}>Senior Manager</button>
        <button onClick={() => handleCategoryClick('manager')} className={`py-2 px-4 font-bold rounded-full category-button ${selectedCategory.toLowerCase() === 'manager' ? 'bg-green-500 text-black' : 'bg-gray-300 text-black'}`}>Manager</button>
        <button onClick={() => handleCategoryClick('deputy manager')} className={`py-2 px-4 font-bold rounded-full category-button ${selectedCategory.toLowerCase() === 'deputy manager' ? 'bg-green-500 text-black' : 'bg-gray-300 text-black'}`}>Deputy Manager</button>
        <button onClick={() => handleCategoryClick('alumni')} className={`py-2 px-4 font-bold rounded-full category-button ${selectedCategory.toLowerCase() === 'alumni' ? 'bg-green-500 text-black' : 'bg-gray-300 text-black'}`}>Alumni</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers
          .filter((member) => member.category === selectedCategory)
          .map((member, index) => (
            <div
              key={index}
              className={`m-4 p-6 rounded-lg shadow-md w-64 transition-transform transform ${
                hoveredMember === member.name ? 'hover:scale-105' : ''
              } flipping-card`}
              onMouseEnter={() => handleMouseEnter(member.name)}
              onMouseLeave={handleMouseLeave}
              style={{
                background: 'white',
                borderRadius: '10px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div>
                  {member.image && (
                    <img
                      src={imageUrlFor(member.image).url()}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-8 transition-transform transform hover:scale-110"
                    />
                  )}
                  <div className="text-2xl text-black font-bold">{member.name}</div>
                  <div className="text-black">{member.position}</div>
                  {hoveredMember === member.name && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 rounded-lg p-4 text-white backdrop-filter backdrop-blur-md text-overlay">
                      <p className="text-sm">{member.aboutyou}</p>
                    </div>
                  )}
                </div>
                <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                  {member.linkedinUrl && (
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 mr-8">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  )}
                  {member.instagramUrl && (
                    <a href={member.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-500">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MeetOurTeamPage;
