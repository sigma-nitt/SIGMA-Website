"use client";
import React, { FC } from "react";
import { buttonVariants } from "../button";
import "./hero.css";
import clsx from "clsx";
import Image from 'next/image';

export function cn(...inputs) {
  return clsx(inputs);
}

const HeroSection: FC = () => {

  const handleExploreProjects = () => {
    window.open("/casestudies");
    window.location.href = "/dataanalytics";
  };

  return (
    <section className="overflow-hidden pt-35 md:pt-40 xl:pt-[147px]">
      <div
        className="hero-section flex flex-row">
        <div className="w-[50%] items-center text-center lg:items-right lg:text-right">
          <p className="font-poppins lg:mr-[10px] mt-[32px] text-[22px] md:text-[35px] lg:text-[48px] font-semibold leading-[40px] md:leading-[72px] lg:leading-[72px] lg:text-right lg:h-[72px]">
            The Business Club to
          </p>
          <h1 className="font-poppins lg:text-right lg:h-[72px]">
            <span className="gradient-textHero lg:mr-[22px] text-[20px] md:text-[35px] lg:text-[48px] leading-[40px] md:leading-[72px] lg:text-right">
              Delight your Scrutiny
            </span>
          </h1>
          <p className="font-poppins text-[22px] md:text-[35px] lg:text-[48px] font-semibold leading-[35px] md:leading-[72px] lg:text-right lg:h-[72px]">
            and Supercharge you
          </p>
          <button
            id="transform-anim"
            onClick={handleExploreProjects}
            className={cn(
              buttonVariants({ variant: "cta1" }),
              "lg:mr-[90px] mt-10 md:mt-18 flex items-center justify-center space-x-5 md:p-3 font-poppins"
            )}
          >
            <span className="font-poppins font-semibold text-black text-[15px] md:text-[20px] lg:text-[27.74px]">
              Explore our Projects
            </span>
          </button>
        </div>
        <div className="w-[50%] mt-[-50px] lg:mt-[-70px] flex text-center justify-center items-center">
          <Image
            className="justify-center mt-[32px] w-[150px] h-[300px] md:w-[321px] md:h-[578px]"
            src="/images/bulb.png"
            alt="logo"
            width={281}
            height={508}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
