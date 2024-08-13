// "use client"
// import React, { useEffect, useState } from 'react';
// import './members.css';

// const MembersProjectsComponent: React.FC = () => {
//   const [years, setYears] = useState(0);
//   const [members, setMembers] = useState(0);
//   const [projects, setProjects] = useState(0);
//   const [alumni, setAlumni] = useState(0);
//   const [events, setEvents] = useState(0);

//   useEffect(() => {
//     const counter = (target: number, setter: Function) => {
//       let count = 0;
//       const duration = 8000;
//       const steps = target;
//       const incrementInterval = duration / steps;
//       const increment = () => {
//         if (count < target) {
//           count++;
//           setter(count);
//           setTimeout(increment, incrementInterval);
//         }
//       };
//       increment();
//     };
    

//     counter(5, setYears);
//     counter(40, setMembers);
//     counter(70, setProjects);
//     counter(100, setAlumni);
//     counter(20, setEvents);
//   }, []);

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
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl md:text-4xl mt-10">{years}+<br />Years of Success</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '10px' }}></div>
//       </div>

//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">{members}+<br />Members</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
//       </div>

//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl md:text-4xl mt-10">{projects}+<br />Projects</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '10px' }}></div>
//       </div>

//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">{alumni}+<br />Alumni</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
//       </div>

//       <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
//         <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-3xl mb-2 md:text-4xl mt-10">{events}+<br />Events Organised</h1>
//         <div className="white-line" style={{ borderTop: '8px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
//       </div>

//     </div>
//   );
// };

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
    <div className="members-projects" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 25%', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'left', marginLeft: '137px', transition: 'transform 0.3s' }} className="hover-enlarge">
        <svg className="pr-2" height="61" viewBox="0 0 67 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.3333 61L23 51.24C22.2778 50.9858 21.5978 50.6808 20.96 50.325C20.3222 49.9692 19.6967 49.5879 19.0833 49.1812L9.16667 52.9937L0 38.5062L8.58333 32.5588C8.52778 32.2029 8.5 31.8603 8.5 31.5309V29.4722C8.5 29.1407 8.52778 28.7971 8.58333 28.4412L0 22.4937L9.16667 8.00625L19.0833 11.8187C19.6944 11.4121 20.3333 11.0308 21 10.675C21.6667 10.3192 22.3333 10.0142 23 9.76L24.3333 0H42.6667L44 9.76C44.7222 10.0142 45.4033 10.3192 46.0433 10.675C46.6833 11.0308 47.3078 11.4121 47.9167 11.8187L57.8333 8.00625L67 22.4937L58.4167 28.4412C58.4722 28.7971 58.5 29.1407 58.5 29.4722V31.5278C58.5 31.8593 58.4444 32.2029 58.3333 32.5588L66.9167 38.5062L57.75 52.9937L47.9167 49.1812C47.3056 49.5879 46.6667 49.9692 46 50.325C45.3333 50.6808 44.6667 50.9858 44 51.24L42.6667 61H24.3333ZM33.6667 41.175C36.8889 41.175 39.6389 40.1329 41.9167 38.0488C44.1944 35.9646 45.3333 33.4483 45.3333 30.5C45.3333 27.5517 44.1944 25.0354 41.9167 22.9512C39.6389 20.8671 36.8889 19.825 33.6667 19.825C30.3889 19.825 27.6244 20.8671 25.3733 22.9512C23.1222 25.0354 21.9978 27.5517 22 30.5C22.0022 33.4483 23.1278 35.9646 25.3767 38.0488C27.6256 40.1329 30.3889 41.175 33.6667 41.175Z" fill="#19FB9B"/>
        </svg>
        <h1 className="p-1 w-[203px] text-white text-left mt-3 text-md md:text-lg">{projects}+ real-life Projects and counting</h1>
      </div>

      <div style={{ flex: '1 1 25%', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'left', margin: '5px', transition: 'transform 0.3s' }} className="hover-enlarge">
        <svg className="pr-2" height="76" viewBox="0 0 50 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.397 37.2037L17.5751 75.199C17.2379 75.6 16.7928 75.868 16.3069 75.9623C15.821 76.0567 15.3208 75.9725 14.8817 75.7223C14.4426 75.4721 14.0884 75.0695 13.8726 74.5753C13.6568 74.081 13.5911 73.522 13.6854 72.9826L17.8507 49.7643L1.47665 42.9125C1.12499 42.7659 0.811399 42.5245 0.563881 42.2099C0.316364 41.8953 0.142632 41.5173 0.0582085 41.1096C-0.0262154 40.7019 -0.0187019 40.2772 0.0800772 39.8736C0.178856 39.4699 0.365824 39.0998 0.624278 38.7963L32.4461 0.801044C32.7834 0.39999 33.2285 0.132046 33.7144 0.0376459C34.2002 -0.0567542 34.7004 0.0275113 35.1396 0.277727C35.5787 0.527942 35.9328 0.930531 36.1486 1.42474C36.3644 1.91895 36.4301 2.47797 36.3358 3.01743L32.1592 26.261L48.5332 33.1034C48.8823 33.2509 49.1934 33.4921 49.439 33.8054C49.6846 34.1188 49.8571 34.4947 49.9414 34.9C50.0256 35.3053 50.019 35.7275 49.9221 36.1293C49.8251 36.5311 49.6409 36.9001 49.3856 37.2037H49.397Z" fill="#19FB9B"/>
        </svg>
        <h1 className="p-1 w-[294px] text-white text-left mt-3 text-md md:text-lg mt-10">A budding place for business enthusiasts</h1>
      </div>

      <div style={{ flex: '1 1 25%', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'left', margin: '5px', transition: 'transform 0.3s' }} className="hover-enlarge">
        <svg className="pr-2" height="63" viewBox="0 0 77 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 52.5V63H63V52.5H56V42H77V52.5H70ZM14 52.5V63H7V52.5H0V42H21V52.5H14ZM35 10.5V0H42V10.5H49V21H28V10.5H35ZM35 28H42V63H35V28ZM7 35V0H14V35H7ZM63 35V0H70V35H63Z" fill="#19FB9B"/>
        </svg>
        <h1 className="p-1 w-[258px] text-white text-left mt-3 text-md md:text-lg mt-10">{events}+ Events brainstormed and managed</h1>
      </div>
    </div>
  );
};

export default MembersProjectsComponent;
