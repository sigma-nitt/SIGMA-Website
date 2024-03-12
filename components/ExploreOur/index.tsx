// YourComponent.js
"use client"
import React from 'react';

const App: React.FC = () => {
  const boxStyle: React.CSSProperties = {
    width: '500px',
    height: '300px',
    backgroundColor: '#1976D2',
    margin: '30px',
    padding: '15px',
    textAlign: 'center',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    color: 'white',
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'black',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column', // Display children in a column
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const verticalLineStyle: React.CSSProperties = {
    position: 'absolute',
    left: '300px',
    top: '100px',
    height: '90%',
    width: '8px',
    backgroundColor: 'white',
  };

  const circleStyle: React.CSSProperties = {
    position: 'absolute',
    left: '264px', // Adjust the position as needed
    top: '50px', // Adjust the position as needed
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'white',
  };

  const exploreourtext: React.CSSProperties = {
    fontSize: '80px',
    fontWeight: 'bold',
    color: 'white',
  }

  return (
    <div style={containerStyle}>
      <h1 style={exploreourtext}>Explore Our</h1>
      <br></br>
      <br></br>
      <div style={verticalLineStyle}></div>
      <div style={circleStyle}></div>
      <div style={boxStyle}>
        <a href="/events" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontSize: '44px', marginBottom: '20px', fontWeight: 'bold', color: 'white', marginTop: '10px' }}>Events</h1>
        </a>
        <p style={{ fontSize: '20px' }}>Sigma in collaboration with different teams in the campus, organised various events, to get freshers, government school chiildren, and other students in the campus, know about the club. Recently we conducted "Monopoly Mania", a fun
gamified business awareness event for the students of various local Government
schools. It had a footfall of over 100 students.</p>
      </div>
      <div style={boxStyle}>
        <a href="/enigma" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontSize: '44px', marginBottom: '20px', marginTop: '10px', fontWeight: 'bold', color: 'white' }}>Magazines</h1>
        </a>
        <p style={{ fontSize: '19px' }}>Sigma published its 2nd Edition of the Enigma Business Magazine. It is a rich tapestry of knowledge, insightful articles, business news, in-depth analyses, engaging games, and more. It was shared with the winners of the events we conducted as well as winners of questionnaire we had for distribution of hardcopy. We published 50 hardcopy and later also put it on social media.</p>
      </div>
      <div style={boxStyle}>
        <a href="/podcast" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontSize: '44px', marginBottom: '20px', fontWeight: 'bold', color: 'white', marginTop: '10px' }}>Podcasts</h1>
        </a>
        <p style={{ fontSize: '19px' }}>Expanding our base to Video Content on social media, we started a weekly series to help the team and viewers understand the concept of
“market sizing” & “case study”. It is a common technique used in consulting & product management firms which is also asked in interviews. By teaching these
concepts in videos we learn ourselves & all the audience that comes on our channel.</p>
      </div>
    </div>
  );
};

export default App;
