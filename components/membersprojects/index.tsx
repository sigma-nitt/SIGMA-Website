"use client"
// import React from 'react';
// import './members.css'

// const MembersProjectsComponent: React.FC = () => {
//   return (
//     <div className="members-projects"
//       style={{
//         height: '40vh',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '0 20px',
//       }}
//     >
//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl md:text-4xl mt-10">5<br />Years of Success</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '10px' }}></div>
//       </div>

//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">40+<br />Members</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
//       </div>

//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl md:text-4xl mt-10">70+<br />Projects</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '10px' }}></div>
//       </div>

//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">100+<br />Alumni</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
//       </div>

//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">20+<br />Events Organised</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
//       </div>

//     </div>
//   );
// }

// export default MembersProjectsComponent;
import React, { useState, useEffect } from 'react';
import './members.css'

const MembersProjectsComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % 5); // 5 is the total number of items
    }, 2000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="members-projects"
      style={{
        height: '40vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          style={{
            textAlign: 'center',
            margin: '5px',
            flex: 1,
            transition: 'transform 0.3s',
            transform: activeIndex === index ? 'scale(1.5)' : 'scale(1)',
          }}
          className="hover-enlarge"
        >
          {index === 0 && (
            <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl md:text-4xl mt-10">5<br />Years of Success</h1>
          )}
          {index === 1 && (
            <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">40+<br />Members</h1>
          )}
          {index === 2 && (
            <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl md:text-4xl mt-10">70+<br />Projects</h1>
          )}
          {index === 3 && (
            <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">100+<br />Alumni</h1>
          )}
          {index === 4 && (
            <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">20+<br />Events Organised</h1>
          )}
          <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: index === 1 || index === 3 ? '20px' : '10px' }}></div>
        </div>
      ))}
    </div>
  );
}

export default MembersProjectsComponent;
