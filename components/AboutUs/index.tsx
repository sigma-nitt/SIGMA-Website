"use client"
import React from 'react';
import './aboutus.css';

// Import the background image
import backgroundImage from "/images/our story.jpg";

const IndexPage: React.FC = () => {
  return (
    <div className="p-0 relative">
      <div className="flex flex-col bg-white sm:flex-row">
        <div className="p-2 w-full sm:w-3/5 ml-auto sm:order-last">
          <div className="black-box p-4 text-left" style={{ fontFamily: 'tahoma' }}>
            <p className="text-white">
              At SIGMA, we are committed to providing our members with a wide range of services and activities to help them develop their skills and interests in business, data analytics, and machine learning. Our mission is to empower our members with the knowledge and resources they need to succeed in their careers and make a positive impact in their communities. It is a platform for business enthusiasts to engage in discussions, debates, and project development, enhancing their business acumen.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-2/5 relative order-first">
          <div className="circle-image relative">
            <h2 className="our-mission-head text-center text-8xl font-bold mt-12" style={{ fontFamily: 'impact' }}>OUR MISSION</h2>
          </div>
        </div>
      </div>

      <div className="p-8 flex justify-center bg-slate-400">
        <div className="w-9/12 mr-4 h-full text-black dark:text-white relative" style={{ height: '500px' }}>
          <div className="our-story-word p-6 flex flex-col h-full border-8 border-black dark:border-white text-center flex justify-center items-center align-middle text-5xl relative rounded-3xl">
            <p style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#ff0000' }}>OUR STORY</p>
            {/* <div
              className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-50 transition-all duration-300 hover:opacity-100"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            /> */}

            <div className="absolute inset-0 filter blur-sm opacity-50 transition-all duration-300 hover:opacity-100">
              <img
                src="/images/our story.jpg"
                alt="Background Image"
                className="w-full h-full object-cover rounded-3xl"
                style={{ filter: 'blur(0px)' }}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-all duration-300">
                <p className="our-story-text">
                  SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
                  At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
                  Our club is run by a team of experienced leaders who are committed to providing our members with the best possible resources and opportunities. We believe that by working together, we can achieve great things and make a positive impact in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-grow text-black dark:text-white bg-slate-400">
        <div className="leadership-content-box w-8/12 mr-4">
          <div className="leadership-content p-4 border border-black dark:border-white h-full flex items-center rounded-3xl" style={{ fontFamily: 'tahoma' }}>
            <p>At SIGMA, we are proud to have a team of experienced leaders who are dedicated to providing our members with the best possible resources and opportunities. Our team consists of students from a variety of backgrounds who are passionate about business, data analytics, and machine learning.
              Our leaders have a wealth of experience in their respective fields, and they are committed to helping our members develop their skills and interests. They work hard to organize events, workshops, and other activities that provide our members with valuable learning experiences.
              We are always looking for new members to join our team, so if you are interested in becoming a part of SIGMA, please don't hesitate to get in touch with us.</p>
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="p-4 border border-black dark:border-white text-center flex-grow text-4xl experienced-leadership rounded-3xl">
            <p style={{ lineHeight: "5.5em" }}>Experienced Leadership</p>
          </div>
        </div>
      </div>

      {/* <div className="p-8 flex items-stretch justify-center bg-white">
        <div className="flex-none w-1/3 pr-4">
          <div className="p-0 border-4 border-black dark:border-white h-full flex flex-col items-center analytics-content">
            <div className="bg-blue-500 text-white py-4 px-8 mb-4 w-full text-center" style={{ fontFamily: 'DIDOT' }}>
              <h1 className="font-bold">ANALYTICS</h1>
            </div>
            <div className="bg-white p-4 rounded-lg flex-grow w-full text-center" style={{ fontFamily: 'tahoma' }}>
              <p className="font-bold text-amber-600">We, the Analytics domain at Sigma, specialize in transforming data into compelling narratives that unveil business truths. We engage in Hackathons and competitions to hone our skills, and showcvase our prowess in handling data. Collaborating within our club, we work on projects involving Machine Learning models and Analytics toold to unlock profound insights from datasets.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-full text-center">
            <br></br>
            <br></br>
            <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>What</h1>
            <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>We</h1>
            <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>Do</h1>
          </div>
        </div>

        <div className="flex-none w-1/3 pl-4">
          <div className="p-0 border-4 border-black dark:border-white h-full flex flex-col items-center case-studies-content">
            <div className="bg-blue-500 text-white py-4 px-8 mb-4 w-full text-center" style={{ fontFamily: 'DIDOT' }}>
              <h1 className="font-bold">CASE STUDIES</h1>
            </div>
            <div className="bg-white p-4 rounded-lg flex-grow w-full text-center" style={{ fontFamily: 'tahoma' }}>
              <p className="font-bold text-amber-600">At Case Studies, we analyze real-world problems and understand the business notions behind those problems. We focus on different toics such as economics, finance, marketing, supply chain & business happenings in and around the world, and publish several Articles, Projects, & Infographics based on these. We also participate in various case study competitions & conduct regular fun interactions sessions to enahnce our knowledge and skill set.</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* New content for Analytics and Case Studies */}
      <div className="p-8 flex flex-wrap items-stretch justify-center bg-white">
        {/* Analytics Box */}
        <div className="flex-none w-full md:w-1/3 pr-4 mb-8 md:mb-0">
          <div className="p-0 border-4 border-black dark:border-white h-full flex flex-col items-center analytics-content">
            <div className="bg-blue-500 text-white py-4 px-8 mb-4 w-full text-center" style={{ fontFamily: 'DIDOT' }}>
              <h1 className="font-bold">ANALYTICS</h1>
            </div>
            <div className="bg-white p-4 rounded-lg flex-grow w-full text-center" style={{ fontFamily: 'tahoma' }}>
              <p className="font-bold text-amber-600">We, the Analytics domain at Sigma, specialize in transforming data into compelling narratives that unveil business truths. We engage in Hackathons and competitions to hone our skills and showcase our prowess in handling data. Collaborating within our club, we work on projects involving Machine Learning models and Analytics tools to unlock profound insights from datasets.</p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        {/* <div className="w-full md:w-1/12 text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>What</h1>
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>We</h1>
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>Do</h1>
        </div> */}

        <div className="w-full flex flex-col items-center justify-center md:w-1/12 text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>What</h1>
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>We</h1>
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'impact' }}>Do</h1>
        </div>


        {/* Case Studies Box */}
        <div className="flex-none w-full md:w-1/3 pl-4">
          <div className="p-0 border-4 border-black dark:border-white h-full flex flex-col items-center case-studies-content">
            <div className="bg-blue-500 text-white py-4 px-8 mb-4 w-full text-center" style={{ fontFamily: 'DIDOT' }}>
              <h1 className="font-bold">CASE STUDIES</h1>
            </div>
            <div className="bg-white p-4 rounded-lg flex-grow w-full text-center" style={{ fontFamily: 'tahoma' }}>
              <p className="font-bold text-amber-600">At Case Studies, we analyze real-world problems and understand the business notions behind those problems. We focus on different topics such as economics, finance, marketing, supply chain & business happenings in and around the world, and publish several Articles, Projects, & Infographics based on these. We also participate in various case study competitions & conduct regular fun interaction sessions to enhance our knowledge and skill set.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default IndexPage;