"use client";
import React from 'react';
import './aboutus.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const EventsPage: React.FC = () => {
  return (
    <div className="relative">

      {/* Our Story Section */}
      <div className="flex flex-col lg:flex-row py-[30px] lg:py-[60px]">
        <div className="flex flex-col items-center lg:items-start lg:ml-[5%] xl:ml-[111px] mt-[120px] lg:mt-[169px] lg:w-[50%]">
          <div className="flex justify-center lg:justify-start items-center text-center w-[90%] xl:w-[70%]">
            <div className="font-poppins justify-center text-center lg:text-left text-[30px] md:text-[40px] lg:text-[43px] xl:text-[48px] leading-[45px] lg:leading-[55px]">
              <span className="gradient-textABTUS">We Power</span> 
              <span className="font-semibold"> the mindset of business</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-center text-center font-acumin text-justify lg:text-left mt-[15px] lg:mt-[21px] md:text-[17px] lg:text-[18px] xl:text-[20px] lg:leading-[26px] w-[90%] md:w-[80%] lg:w-[95%] xl:w-[85%]">
            SIGMA is the Business Club of NIT Trichy, dedicated to empowering students from technical backgrounds with a strong foundation in business, data analytics, and machine learning. We offer members access to insightful articles, business-focused management and analytics hands-on projects and exposure to real life clients. Our activities include analysing and solving real life business challenges through various Management and Analytics projects, conducting workshops, organizing events, competitions, and hosting podcasts and case studies. Through these initiatives, we cultivate a thriving community of aspiring leaders in managerial and techno-managerial disciplines.
          </div>
        </div>
        <div className="flex justify-center items-center text-center mt-12 lg:mt-[12%] xl:mt-[8%] lg:w-[50%]">
          <Image className="w-[80%]"
            src="/images/spiralpics.png"
            alt="logo"
            width={813}
            height={496}
            unoptimized={true}
            priority={false}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1B1F2D] via-[#172C28] to-[#111648] flex h-auto p-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-left ">
          <div className="flex lg:ml-[0px] lg:ml-[88px]">
            <Image className="flex items-center justify-center m-auto w-[80%] lg:w-[571px] lg:h-[278px] rounded-[13px]"
              src="./images/table.jpg"
              alt="logo"
              width={613}
              height={496}
              unoptimized={true}
            />
          </div>
          <div className="flex flex-col text-white mt-4">
            <div>
              <p className="font-acumin text-center lg:text-left text-[25px] lg:text-[36px] lg:leading-[43.2px] lg:ml-[58px] font-normal">Our Mission</p>
            </div>
            <div className="mt-[10px] lg:mt-[0px] font-acumin m-auto text-justify lg:text-left text-[15px] lg:text-[20px] lg:mt-[21px] w-[90%] lg:w-[649px] lg:ml-[60px] leading-[26px] font-normal">
              To empower future leaders in business by fostering
              expertise in Analytics, Business intelligence, and acumen,
              driving innovation and real-world impact through
              collaboration, entrepreneurship, and sustainable
              business development.
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row lg:mb-[80px]">
        <div className="flex flex-col items-center lg:items-start lg:ml-[5%] xl:ml-[111px] mt-[50px] lg:mt-[59px] lg:w-[50%]">
          <div className="flex justify-center lg:justify-start items-center text-center w-[90%] xl:w-[80%]">
            <div className="font-poppins justify-center text-center lg:text-left text-[30px] md:text-[40px] lg:text-[43px] xl:text-[48px] leading-[45px] lg:leading-[55px]">
              <span className="gradient-textABTUS font-poppins">Experienced Leadership</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-center text-center font-acumin text-justify lg:text-left mt-[15px] lg:mt-[21px] md:text-[17px] lg:text-[18px] xl:text-[20px] lg:leading-[26px] w-[90%] md:w-[80%] lg:w-[95%] xl:w-[85%]">
            At SIGMA, our leadership team is a dynamic group of students with diverse backgrounds and expertise in business, data analytics, and machine learning. Committed to providing exceptional resources and opportunities, our leaders organize impactful events, workshops, and learning experiences to support members’ growth. If you're passionate about developing your skills in a collaborative environment, consider joining us at SIGMA.
          </div>
        </div>
        <div className="flex justify-center items-center text-center mt-8 lg:mt-[8%] xl:mt-[4%] lg:w-[50%]">
          <Image className="w-[35%] lg:w-[35%]"
            src="/images/sigma symbol.png"
            alt="logo"
            width={413}
            height={296}
            unoptimized={true}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;