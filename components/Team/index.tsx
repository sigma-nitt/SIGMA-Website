// components/index.tsx
"use client";
import React, { useState, useEffect } from 'react';

// Define TeamMember interface
interface TeamMember {
  name: string;
  position: string;
  category: string;
}

const MeetOurTeamPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('core');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(`/api/teamMembers?selectedCategory=${selectedCategory}`);
        if (!response.ok) {
          throw new Error('Failed to fetch team members');
        }
        const data = await response.json();
        console.log('Response data:', data); // Log response data here
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

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // if (loading) return <p>Loading...</p>;
  if(loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      {/* <p className="ml-2">Loading...</p> */}
    </div>
  )
  
  if (error) return <p>Error :(</p>;

  return (
    <div className="text-center">
      <h1 className="mb-5 text-4xl font-semibold text-white xl:text-5xl decoration-sky-500">
        <span className="block mb-2 decoration-sky-500 text-gray-800 dark:text-gray-200 shadow-text">TEAM MEMBERS</span>
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex justify-around mb-8">
        <button onClick={() => handleCategoryClick('core')} className={`py-2 px-4 rounded ${selectedCategory.toLowerCase() === 'core' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>Core</button>
        <button onClick={() => handleCategoryClick('senior manager')} className={`py-2 px-4 rounded ${selectedCategory.toLowerCase() === 'senior manager' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>Senior Manager</button>
        <button onClick={() => handleCategoryClick('manager')} className={`py-2 px-4 rounded ${selectedCategory.toLowerCase() === 'manager' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>Manager</button>
        <button onClick={() => handleCategoryClick('deputy manager')} className={`py-2 px-4 rounded ${selectedCategory.toLowerCase() === 'deputy manager' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>Deputy Manager</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers
          .filter(member => member.category === selectedCategory)
          .map((member, index) => (
            <div key={index} className="m-4 p-6 bg-white rounded-lg shadow-md w-64">
              <img src='/images/john.jpg' alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <div className="text-xl font-semibold">{member.name}</div>
              <div className="text-gray-600">{member.position}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MeetOurTeamPage;

