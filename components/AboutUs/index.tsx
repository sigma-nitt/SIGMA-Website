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
            <div className="font-poppins font-semibold justify-center text-center lg:text-left text-[30px] md:text-[40px] lg:text-[43px] xl:text-[48px] leading-[45px] lg:leading-[55px]">
              <span className="gradient-textABTUS">We Power</span> the mindset of business
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-center text-center font-acumin text-justify lg:text-left mt-[15px] lg:mt-[21px] md:text-[17px] lg:text-[18px] xl:text-[20px] lg:leading-[26px] w-[90%] md:w-[80%] lg:w-[95%] xl:w-[85%]">
            SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
            At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on Medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
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
            <div className="ml-[30px] lg:ml-[0px] mt-[10px] lg:mt-[0px] font-acumin text-justify lg:text-left text-[15px] lg:text-[24px] lg:mt-[21px] w-[90%] lg:w-[649px] lg:ml-[60px] leading-[26px] font-normal">
              At SIGMA, we are committed to providing our members with a wide range of services and activities to help them
              develop their skills and interests in business, data analytics, and machine learning. Our mission is to empower
              our members with the knowledge and resources they need to succeed in their careers and make a positive impact in
              their communities.
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row lg:mb-[80px]">
        <div className="flex flex-col items-center lg:items-start lg:ml-[5%] xl:ml-[111px] mt-[50px] lg:mt-[59px] lg:w-[50%]">
          <div className="flex justify-center lg:justify-start items-center text-center w-[90%] xl:w-[70%]">
            <div className="font-poppins font-semibold justify-center text-center lg:text-left text-[30px] md:text-[40px] lg:text-[43px] xl:text-[48px] leading-[45px] lg:leading-[55px]">
              <span className="gradient-textABTUS font-poppins">Experienced Leadership</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-center text-center font-acumin text-justify lg:text-left mt-[15px] lg:mt-[21px] md:text-[17px] lg:text-[18px] xl:text-[20px] lg:leading-[26px] w-[90%] md:w-[80%] lg:w-[95%] xl:w-[85%]">
            At SIGMA, we are proud to have a team of experienced leaders who are dedicated to providing our members with the best possible resources and opportunities. Our team consists of students from a variety of backgrounds who are passionate about business, data analytics, and machine learning. Our leaders have a wealth of experience in their respective fields, and they are committed to helping our members develop their skills and interests. They work hard to organize events, workshops, and other activities that provide our members with valuable learning experiences. We are always looking for new members to join our team, so if you are interested in becoming a part of SIGMA, please don't hesitate to get in touch.
          </div>
        </div>
        <div className="flex justify-center items-center text-center mt-8 lg:mt-[8%] xl:mt-[5%] lg:w-[50%]">
          <Image className="w-[35%] lg:w-[50%]"
            src="/images/sigma symbol.png"
            alt="logo"
            width={813}
            height={496}
            unoptimized={true}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;