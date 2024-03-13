"use client"
import React from 'react';
import './members.css'

const MembersProjectsComponent: React.FC = () => {
  return (
    <div className="members-projects"
      style={{
        background: 'linear-gradient(to right, #0074cc, #001b40)',
        height: '40vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}
    >
      <div style={{ textAlign: 'center', margin: '10px', flex: 1 }}>
        <h1 className="projects" style={{ fontSize: '3em', marginBottom: '10px', fontWeight: 'bold', color: 'white'}}>50+<br /><br />Projects</h1>
        <div className="white-line" style={{ borderTop: '12px solid white', width: '30%', margin: 'auto', marginTop: '60px', marginBottom: '10px', borderRadius: '10px' }}></div>
      </div>

      <div style={{ textAlign: 'center', margin: '10px', flex: 1 }}>
        <h1 className="projects" style={{ fontSize: '3em', marginBottom: '10px', fontWeight: 'bold', color: 'white'}}>30+<br /><br />Members</h1>
        <div className="white-line" style={{ borderTop: '12px solid white', width: '30%', margin: 'auto', marginTop: '60px', marginBottom: '10px', borderRadius: '20px' }}></div>
      </div>
    </div>
  );
}

export default MembersProjectsComponent;
