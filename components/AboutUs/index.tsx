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
        <div className="flex flex-col ml-[30px] lg:ml-[111px] mt-[120px] lg:mt-[169px]">
          <h1 className="font-poppins font-semibold justify-center text-left lg:text-left text-[30px] lg:text-[48px] leading-[30px] lg:leading-[55px] w-[320px] lg:w-[545px]">
            <span className="gradient-textABTUS">We Power</span> the mindset of business
          </h1>
          <p className="wepower font-acumin text-sm text-justify lg:text-left mt-[15px] lg:mt-[21px] lg:text-[20px] lg:leading-[26px] w-[90%] lg:w-[607px]">
            SIGMA is a business club based in NIT Trichy, India. Our club was founded with the vision of providing learning resources for students from technical backgrounds who are interested in managerial and techno-managerial disciplines. Since then, we have grown to become a thriving community of students who are passionate about business, data analytics, and machine learning.
            At SIGMA, we offer a wide range of services and activities to our members, including publishing articles on Medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for college students in NIT Trichy.
          </p>
        </div>
        <div className="flex justify-center mt-[30px] lg:mt-[129px] lg:ml-[111px]">
          <Image className="w-[90px] h-[100px] lg:w-[613px] lg:h-[496px]"
            src="/images/spiralpics.png"
            alt="logo"
            width={613}
            height={496}
            unoptimized={true}
            priority={false}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1B1F2D] via-[#172C28] to-[#111648] flex lg:h-[354px]">
        <div className="flex lg:items-left flex-col lg:flex-row">
          <div className="flex ml-[30px] lg:ml-[0px] lg:ml-[88px] mt-[15px] lg:mt-[35px]">
            <Image className="flex items-center justify-center w-[300px] lg:w-[571px] lg:h-[278px] rounded-[13px]"
              src="./images/table.jpg"
              alt="logo"
              width={613}
              height={496}
              unoptimized={true}
            />
          </div>
          <div className="flex flex-col text-white mt-[20px] lg:mt-[0px]">
            <div>
              <p className="font-acumin text-center lg:text-left text-[25px] lg:text-[36px] lg:mt-[41px] lg:leading-[43.2px] lg:ml-[58px] font-normal">Our Mission</p>
            </div>
            <div className="ml-[30px] lg:ml-[0px] mt-[10px] lg:mt-[0px]">
              <p className="font-acumin text-justify lg:text-left text-[15px] lg:text-[24px] lg:mt-[21px] w-[90%] lg:w-[649px] lg:ml-[60px] leading-[26px] font-normal ">
                At SIGMA, we are committed to providing our members with a wide range of services and activities to help them
                develop their skills and interests in business, data analytics, and machine learning. Our mission is to empower
                our members with the knowledge and resources they need to succeed in their careers and make a positive impact in
                their communities.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row lg:mb-[80px]">
        <div className="flex flex-col ml-[30px] lg:ml-[111px] mt-[40px] lg:mt-[45px]">
          <h1 className="font-poppins justify-center text-left lg:text-left text-[30px] lg:text-[48px] leading-[30px] lg:leading-[55px] w-[320px] lg:w-[569px]">
            <span className="gradient-textABTUS font-poppins">Experienced Leadership</span>
          </h1>
          <p className="wepower font-acumin text-sm text-justify lg:text-left mt-[15px] lg:mt-[21px] lg:text-[20px] lg:leading-[26px] w-[90%] lg:w-[607px]">
            At SIGMA, we are proud to have a team of experienced leaders who are dedicated to providing our members with the best possible resources and opportunities. Our team consists of students from a variety of backgrounds who are passionate about business, data analytics, and machine learning. Our leaders have a wealth of experience in their respective fields, and they are committed to helping our members develop their skills and interests. They work hard to organize events, workshops, and other activities that provide our members with valuable learning experiences. We are always looking for new members to join our team, so if you are interested in becoming a part of SIGMA, please don't hesitate to get in touch.
          </p>
        </div>
        <div className="flex items-center justify-center lg:ml-[356px]">
          <Image className="mt-[32px] mb-[32px] w-[90px] h-[100px] lg:w-[285.41px] lg:h-[309.19px]"
            src="/images/sigma symbol.png"
            alt="logo"
            width={167}
            height={182}
            unoptimized={true}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
