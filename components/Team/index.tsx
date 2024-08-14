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

const toPascalCase = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const MeetOurTeamPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(`/api/teamMembers`);
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
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
    </div>
  );
  if (error) return <p>Error :(</p>;

  const handleMouseEnter = (memberName: string) => {
    setHoveredMember(memberName);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  const categories = ['core', 'senior manager', 'manager', 'deputy manager', 'alumni'];

  return (
    <div className="text-center flipping-container">
      <div className="p-10 mb-8">
      </div>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="md:text-left mt-8 mb-2">
            <span className="catgry md:ml-22">{toPascalCase(category)}</span>
          </h2>
          <div className="gradientBackgrnd flex flex-wrap justify-center">
            {teamMembers
              .filter((member) => member.category === category)
              .map((member, index) => (
                <div
                  key={index}
                  className={`mt-4 mr-1 ml-1 mb-2 md:mt-8 md:mb-8 md:mr-2 md:ml-2 md:p-6 rounded-[15px] md:rounded-[31px] shadow-md h-[250px] w-[40%] md:h-[351.72px] md:w-[238px] transition-transform transform ${
                    hoveredMember === member.name ? 'hover:scale-105' : ''
                  } flipping-card`}
                  onMouseEnter={() => handleMouseEnter(member.name)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    background: 'linear-gradient(180deg, #1D1D1D 0%, #111112 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div>
                      {member.image && (
                        <img
                          // src={imageUrlFor(member.image).url()}
                          src = '.\images\tanishq.png'
                          alt={member.name}
                          className="rounded-full mx-auto transition-transform transform hover:scale-110 w-[60%] mt-4 md:mt-0 md:w-[176.17px] md:h-[184.88px]"
                          style={{
                            background: 'linear-gradient(229.1deg, #313ED0 -35.29%, #232971 30.74%, #0E113A 56.42%)',
                          }}
                        />
                      )}
                      <div className="text-md mt-[4px] md:text-[18.68px] md:mt-[8px] text-white">{member.name}</div>
                      <div className="md:text-md text-sm text-white">{member.position}</div>
                      {hoveredMember === member.name && (
                        <div className="absolute inset-0 flex items-center justify-center bg-green rounded-lg p-4 text-white backdrop-filter backdrop-blur-md text-overlay">
                          <p className="text-sm">{member.aboutyou}</p>
                        </div>
                      )}
                    </div>
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
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
      ))}
    </div>
  );
};

export default MeetOurTeamPage;
