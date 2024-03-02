// // components/index.tsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import './team.css';
// import imageUrlBuilder from '@sanity/image-url';
// import client from '@/sanityClient';

// // Define TeamMember interface
// interface TeamMember {
//   name: string;
//   position: string;
//   category: string;
//   image: string;
// }

// const builder = imageUrlBuilder(client);  // Initialize imageUrlBuilder with your Sanity client
// const imageUrlFor = (source: any) => builder.image(source);

// const MeetOurTeamPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('core');
//   const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchTeamMembers = async () => {
//       try {
//         const response = await fetch(`/api/teamMembers?selectedCategory=${selectedCategory}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch team members');
//         }
//         const data = await response.json();
//         console.log('Response data:', data); // Log response data here
//         setTeamMembers(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchTeamMembers();
//   }, [selectedCategory]);

//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category);
//   };

//   // if (loading) return <p>Loading...</p>;
//   if(loading) return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       {/* <p className="ml-2">Loading...</p> */}
//     </div>
//   )
  
//   if (error) return <p>Error :(</p>;

//   return (
//     <div className="text-center">
//       <h1 className="mb-5 text-10xl font-semibold text-white xl:text-5xl decoration-sky-500">
//         <span className="block mb-2 decoration-sky-500 text-gray-800 dark:text-gray-200 shadow-text">CORE TEAM'23</span>
//       </h1>
//       <br></br>
//       <br></br>
//       <br></br>
//       <div className="flex justify-around mb-8">
//         <button onClick={() => handleCategoryClick('core')} className={`py-2 px-4 font-bold rounded-full ${selectedCategory.toLowerCase() === 'core' ? 'bg-green-500 text-black' : 'bg-gray-300'}`}>Core</button>
//         <button onClick={() => handleCategoryClick('senior manager')} className={`py-2 px-4 font-bold rounded-full ${selectedCategory.toLowerCase() === 'senior manager' ? 'bg-green-500 text-black' : 'bg-gray-300'}`}>Senior Manager</button>
//         <button onClick={() => handleCategoryClick('manager')} className={`py-2 px-4 font-bold rounded-full ${selectedCategory.toLowerCase() === 'manager' ? 'bg-green-500 text-black' : 'bg-gray-300'}`}>Manager</button>
//         <button onClick={() => handleCategoryClick('deputy manager')} className={`py-2 px-4 font-bold rounded-full ${selectedCategory.toLowerCase() === 'deputy manager' ? 'bg-green-500 text-black' : 'bg-gray-300'}`}>Deputy Manager</button>
//       </div>
//       <div className="flex flex-wrap justify-center">
//         {teamMembers
//           .filter(member => member.category === selectedCategory)
//           .map((member, index) => (
//             <div key={index} className="m-4 p-6 rounded-lg shadow-md w-64 transition-transform transform hover:scale-105" style={{ background: 'linear-gradient(45deg, #cfd8dc, #90a4ae)' }}>
//               {/* <img src='/images/john.jpg' alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
//               {member.image && (<img src={imageUrlFor(member.image).url()} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform transform hover:scale-110" />)}
//               <div className="text-2xl text-black font-bold">{member.name}</div>
//               <div className="text-black">{member.position}</div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default MeetOurTeamPage;


"use client"
// components/index.tsx
"use client";
import React, { useState, useEffect } from 'react';
import './team.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanityClient';

// Define TeamMember interface
interface TeamMember {
  name: string;
  position: string;
  category: string;
  image: string;
}

const builder = imageUrlBuilder(client);  // Initialize imageUrlBuilder with your Sanity client
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

  const handleMouseEnter = (memberName: string) => {
    setHoveredMember(memberName);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      {/* <p className="ml-2">Loading...</p> */}
    </div>
  );

  if (error) return <p>Error :(</p>;

  //with hvoer over text
  return (
    <div className="text-center">
      <h1 className="mb-5 text-10xl font-semibold text-white xl:text-5xl decoration-sky-500">
        <span className="block mb-2 decoration-sky-500 text-gray-800 dark:text-gray-200 shadow-text">CORE TEAM'23</span>
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex justify-around mb-8">
        <button onClick={() => handleCategoryClick('core')} className={`py-2 px-4 font-bold rounded-full ${selectedCategory.toLowerCase() === 'core' ? 'bg-green-500 text-black' : 'bg-gray-300'}`}>Core</button>
        <button onClick={() => handleCategoryClick('senior manager')} className={`py-2 px-4 font-bold rounded-full ${selectedCategory.toLowerCase() === 'senior manager' ? 'bg-green-500 text-black' : 'bg-gray-300'}`}>Senior Manager</button>
        <button onClick={() => handleCategoryClick('manager')} className={`py-2 px-4 font-bold rounded-full ${selectedCategory.toLowerCase() === 'manager' ? 'bg-green-500 text-black' : 'bg-gray-300'}`}>Manager</button>
        <button onClick={() => handleCategoryClick('deputy manager')} className={`py-2 px-4 font-bold rounded-full ${selectedCategory.toLowerCase() === 'deputy manager' ? 'bg-green-500 text-black' : 'bg-gray-300'}`}>Deputy Manager</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers
          .filter(member => member.category === selectedCategory)
          .map((member, index) => (
            <div
              key={index}
              className={`m-4 p-6 rounded-lg shadow-md w-64 transition-transform transform hover:scale-105 relative ${hoveredMember === member.name ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(member.name)}
              onMouseLeave={handleMouseLeave}
              style={{ background: 'linear-gradient(45deg, #cfd8dc, #90a4ae)' }}
            >
              {member.image && (
                <img
                  src={imageUrlFor(member.image).url()}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform transform hover:scale-110"
                />
              )}
              <div className="text-2xl text-black font-bold">{member.name}</div>
              <div className="text-black">{member.position}</div>
              {hoveredMember === member.name && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 rounded-lg p-4 text-white backdrop-filter backdrop-blur-md">
                  <p>Something about me</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MeetOurTeamPage;
