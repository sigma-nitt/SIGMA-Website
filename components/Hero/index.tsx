"use client";
import React, { FC } from "react";
import { buttonVariants } from "../button";
import { Icons } from "../icons";
import { ReactTyped } from "react-typed";
import "./hero.css";
import clsx from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

const HeroSection: FC = () => {

  const handleExploreProjects = () => {
    window.open("/casestudies");
    window.location.href = "/dataanalytics";
  };

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-[147px]">
      <div
        className="hero-section"
        style={{
          // height: '45vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="text-center">
          <p className="font-poppins mt-[32px] text-[25px] md:text-[35px] lg:text-[48px] font-semibold leading-[40px] md:leading-[72px] lg:leading-[72px]">
            The Business Club to 
          </p>
          <h1 className="font-poppins text-center">
              <span className="gradient-textHero text-[25px] md:text-[35px] lg:text-[48px] leading-[40px] md:leading-[72px]">Delight your Scrutiny</span>
          </h1>
          <p className="font-poppins text-[25px] md:text-[35px] lg:text-[48px] font-semibold leading-[35px] md:leading-[50px]">
            and Supercharge you 
          </p>
          <button
            id="transform-anim"
            onClick={handleExploreProjects}
            className={cn(
              buttonVariants({ variant: "cta1" }),
              "mt-10 md:mt-18 flex items-center justify-center space-x-5 md:p-3 font-poppins"
            )}
          >
            <span className="font-poppins text-black text-[15px] md:text-[20px] lg:text-[27.74px]">Explore our Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
