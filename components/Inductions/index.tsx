"use client"
import React from 'react';
import './induc.css';

const EventsPage: React.FC = () => {
  return (
    <div className="mt-30 relative">
      <div className="relative">
        <img src="/images/inductionsbg.png" className="w-full h-90" alt="Background" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-6xl">
            Inductions
          </h1>
          <p className="text-2xl mt-10">
            We will open our inductions soon
          </p>
        </div>
      </div>

      <div className="p-20 w-9/10 mx-auto">
        <table className="table-fixed text-left border-collapse custom-table-width">
          <tbody>
            <tr>
              <td style={{ width: '20%', height:'300px', border: '1px solid white' }}>
                <div className="flex justify-center">
                  <img src="/images/inductionsbg.png" className="w-30 h-30" alt="Background" />
                </div>
              </td>
              <td style={{ width: '70%', height:'300px', border: '1px solid white' }}>
                <h1 className="p-5 pl-15 font-bold text-3xl">When is the inductions?</h1>
                <p className="pr-45 pl-15 pb-5 text-md text-muted-foreground">We offer a wide range of services and activities to our members, including publishing articles on medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for the college students of NIT Trichy. Our main focus is to showcase our projects, member details, and other initiatives in a professional manner. We are open to exploring different templates offered by Wix for our website design.</p>
              </td>
            </tr>

            <tr>
              <td style={{ width: '20%', height:'300px', border: '1px solid white' }}>
                <div className="flex justify-center">
                  <img src="/images/inductionsbg.png" className="w-30 h-30" alt="Background" />
                </div>
              </td>
              <td style={{ width: '70%', height:'300px', border: '1px solid white' }}>
                <h1 className="p-5 pl-15 font-bold text-3xl">Data Science and Analytics</h1>
                <p className="pr-45 pl-15 pb-5 text-muted-foreground text-md">We provide data science and analytics services to help businesses gain insights from their data. Our team of experts uses the latest tools and technologies to provide accurate and timely analysis.</p>
              </td>
            </tr>

            <tr>
              <td style={{ width: '20%', height:'300px', border: '1px solid white' }}>
                <div className="flex justify-center">
                  <img src="/images/inductionsbg.png" className="w-30 h-30" alt="Background" />
                </div>
              </td>
              <td style={{ width: '70%', height:'300px', border: '1px solid white' }}>
                <h1 className="p-5 pl-15 font-bold text-3xl">Case Studies</h1>
                <p className="pr-45 pl-15 pb-5 text-muted-foreground text-md">We specialize in developing versatile applications that meet the unique needs of our clients. Our team of developers works closely with clients to understand their requirements and provide customized solutions.</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table-fixed text-left border-collapse custom-table-width">
          <tbody>
            <tr>
              <td style={{ width: '35%', height:'300px', border: '1px solid white' }}>
                <div className="flex justify-center">
                  <img src="/images/inductionsbg.png" className="h-full" alt="Background" />
                </div>
              </td>
              <td style={{ width: '60%', height:'300px', border: '1px solid white' }}>
                <p className="pr-45 pl-15 pb-5 text-md text-muted-foreground">At SIGMA, we are committed to providing our members with the best possible experience. We work closely with our clients to understand their needs and provide customized solutions that meet their unique requirements.</p>
                <p className="pr-45 pl-15 pb-5 text-md text-muted-foreground">Our team of 40+ is dedicated to providing high-quality services and ensuring customer satisfaction. We are always looking for ways to improve our services and enhance the value we provide to our members.</p>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default EventsPage;
