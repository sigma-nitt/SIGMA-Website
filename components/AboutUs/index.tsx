// pages/index.tsx
"use client"
import React from 'react';
import './aboutus.css';

const IndexPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-6xl font-bold mb-2 text-black">Our Mission</h1>
      <p className="mb-4 max-w-7/12 custom-width text-black">At SIGMA, we are committed to providing our members with a wide range of services and activities to help them develop their skills and interests in business, data analytics, and machine learning. Our mission is to empower our members with the knowledge and resources they need to succeed in their careers and make a positive impact in their communities.</p>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex">
        <div className="w-3/12 mr-4 text-black">
          {/* Left Content */}
          <div className="p-4 flex flex-col h-full border border-black text-center flex justify-center align-middle text-4xl">
            <p>Our Story</p>
          </div>
        </div>

        <div className="w-9/12 text-black">
          {/* Big Box (90%) */}
          <div className="p-8 border border-black">
            <p>SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
              At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
              Our club is run by a team of experienced leaders who are committed to providing our members with the best possible resources and opportunities. We believe that by working together, we can achieve great things and make a positive impact in our community.SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
              At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
              Our club is run by a team of experienced leaders who are committed to providing our members with the best possible resources and opportunities. We believe that by working together, we can achieve great things and make a positive impact in our community.</p>
          </div>
        </div>
      </div>
      <br></br>

      <div className="flex flex-grow text-black">
        <div className="w-7/12 mr-4">
            {/* Bottom Left Box (70%) */}
            <div className="p-4 border border-black h-full flex items-center">
            <p>At SIGMA, we are proud to have a team of experienced leaders who are dedicated to providing our members with the best possible resources and opportunities. Our team consists of students from a variety of backgrounds who are passionate about business, data analytics, and machine learning.
            Our leaders have a wealth of experience in their respective fields, and they are committed to helping our members develop their skills and interests. They work hard to organize events, workshops, and other activities that provide our members with valuable learning experiences.
            We are always looking for new members to join our team, so if you are interested in becoming a part of SIGMA, please don't hesitate to get in touch with us.</p>
            </div>
        </div>

        <div className="flex flex-col flex-grow"> {/* Adjusted class here */}
            {/* Bottom Right Box (30%) */}
            <div className="p-4 border border-black text-center flex-grow text-4xl">
                <p style={{ lineHeight: "5.5em" }}>Experienced</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
