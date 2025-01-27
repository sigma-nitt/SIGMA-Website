"use client";
import React, { useState, useEffect } from 'react';
import './team.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanityClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

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
      {categories.map((category) => (
        <div key={category}>
          <h2 className="font-poppins text-[40px] lg:text-[48px] lg:text-left lg:mt-[30px]">
            <span className="catgry md:ml-22 leading-[92px]">{toPascalCase(category)}</span>
          </h2>
          <div className="gradientBackgrnd flex flex-wrap justify-center gap-[15px] lg:mt-[30px] lg:gap-[15px] lg:pb-[42.14px] lg:px-[5%]">
            {teamMembers
              .filter((member) => member.category === category)
              .map((member, index) => (
                <div
                  key={index}
                  className={`items-center justify-center rounded-[15px] md:rounded-[31px] shadow-md mt-[24px] mb-[24px] lg:mt-[42.14px] lg:mb-[0px] w-[40%] md:w-[22%] lg:w-[238px] md:h-[280px] lg:h-[351.72px] transition-transform transform ${
                    hoveredMember === member.name ? 'hover:scale-105' : ''
                  } flipping-card ${member.category === 'core' && hoveredMember === member.name ? 'core-hovered' : ''}`}
                  onMouseEnter={() => handleMouseEnter(member.name)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    background: 'linear-gradient(180deg, #1D1D1D 0%, #111112 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '10 / 14',
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-[100%]">
                    <div>
                      {member.image && (
                        <Image
                          className="rounded-full mx-auto transition-transform transform hover:scale-110 w-[60%] md:w-[70%] lg:w-[184.88px] lg:h-[184.88px] pointer-events-none select-none"
                          src={imageUrlFor(member.image).url()}
                          alt="logo"
                          width={613}
                          height={496}
                          unoptimized={true}
                          priority={false}
                          style={{
                            background:
                              'linear-gradient(229.1deg, #313ED0 -35.29%, #232971 30.74%, #0E113A 56.42%)',
                          }}
                        />
                      )}
                      <div className="text-sm mt-[4px] md:text-[15px] lg:text-[18.68px] md:mt-[8px] lg:leading:[28.01px]">
                        <span className="memberName">{member.name}</span>
                      </div>
                      <div className="memberPosition leading-[12px] md:leading-[14px] text-[12px] md:text-[14px] lg:text-[16.81px] lg:leading-[25.21px] lg:mt-[7.41px] text-white">
                        {member.position}
                      </div>
                      {/* {hoveredMember === member.name && member.category === 'core' && member.aboutyou && (
                        <div className="absolute inset-0 flex items-center justify-center bg-green rounded-lg p-4 text-white backdrop-filter backdrop-blur-md text-overlay">
                          <p className="text-[9px] leading-[12px] md:text-sm">{member.aboutyou}</p>
                        </div>
                      )} */}
                    </div>
                    <div className="mt-[8px] lg:mt-[8px] text-center">
                      {member.linkedinUrl && (
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} size="2x" />
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