"use client"
import React from 'react';

const MeetOurHeadsComponent: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '64px', // Change the font size as needed
    color: 'white',    // Change the color as needed
    fontWeight: 'bold', // Make the text bold
    marginTop: '200px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Meet Our Heads</h1>
      {/* Add more content or components as needed */}
    </div>
  );
};

export default MeetOurHeadsComponent;

