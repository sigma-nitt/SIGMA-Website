"use client"
import React from 'react';
import './members.css'

const MembersProjectsComponent: React.FC = () => {
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
        <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-5xl md:text-6xl mt-10">50+<br />Projects</h1>
        <div className="white-line" style={{ borderTop: '12px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '10px' }}></div>
      </div>

      <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
        <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mt-3 font-bold text-5xl mb-2 md:text-6xl mt-10">30+<br />Members</h1>
        <div className="white-line" style={{ borderTop: '12px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
      </div>
    </div>
  );
}

export default MembersProjectsComponent;
