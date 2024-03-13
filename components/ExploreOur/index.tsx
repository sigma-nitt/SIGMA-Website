"use client"
// YourComponent.js
import React from 'react';
import './YourComponent.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="explore-our-text">Explore Our</h1>
      <br></br>
      <br></br>
      <div className="vertical-line"></div>
      <div className="circle"></div>
      <div className="box">
        <a href="/events" className="link">
          <h1 className="title">EVENTS</h1>
        </a>
        <p className="paragraph">igma in collaboration with different teams in the campus, organised various events, to get freshers, government school chiildren, and other students in the campus, know about the club. Recently we conducted "Monopoly Mania", a fun
gamified business awareness event for the students of various local Government
schools. It had a footfall of over 100 students.</p>
      </div>
      <div className="box">
        <a href="/enigma" className="link">
          <h1 className="title">MAGAZINES</h1>
        </a>
        <p className="paragraph">Sigma published its 2nd Edition of the Enigma Business Magazine. It is a rich tapestry of knowledge, insightful articles, business news, in-depth analyses, engaging games, and more. It was shared with the winners of the events we conducted as well as winners of questionnaire we had for distribution of hardcopy. We published 50 hardcopy and later also put it on social media.</p>
      </div>
      <div className="box">
        <a href="/podcast" className="link">
          <h1 className="title">PODCASTS</h1>
        </a>
        <p className="paragraph">Expanding our base to Video Content on social media, we started a weekly series to help the team and viewers understand the concept of
“market sizing” & “case study”. It is a common technique used in consulting & product management firms which is also asked in interviews. By teaching these
concepts in videos we learn ourselves & all the audience that comes on our channel.</p>
      </div>
    </div>
  );
};

export default App;
