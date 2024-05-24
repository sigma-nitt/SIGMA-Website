// "use client"
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


"use client"
import React, { useEffect, useState } from 'react';
import './members.css';

const MembersProjectsComponent: React.FC = () => {
  const [years, setYears] = useState(0);
  const [members, setMembers] = useState(0);
  const [projects, setProjects] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [events, setEvents] = useState(0);

  useEffect(() => {
    const counter = (target: number, setter: Function) => {
      let count = 0;
      const duration = 8000;
      const steps = target;
      const incrementInterval = duration / steps;
      const increment = () => {
        if (count < target) {
          count++;
          setter(count);
          setTimeout(increment, incrementInterval);
        }
      };
      increment();
    };
    

    counter(5, setYears);
    counter(40, setMembers);
    counter(70, setProjects);
    counter(100, setAlumni);
    counter(20, setEvents);
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
      <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
        <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl md:text-4xl mt-10">{years}+<br />Years of Success</h1>
        <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '10px' }}></div>
      </div>

      <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
        <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">{members}+<br />Members</h1>
        <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
      </div>

      <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
        <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl md:text-4xl mt-10">{projects}+<br />Projects</h1>
        <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '10px' }}></div>
      </div>

      <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
        <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">{alumni}+<br />Alumni</h1>
        <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
      </div>

      <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
        <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">{events}+<br />Events Organised</h1>
        <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
      </div>

    </div>
  );
};

export default MembersProjectsComponent;
