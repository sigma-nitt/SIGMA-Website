// "use client";
// import React, { FC, useState } from "react";
// import { buttonVariants } from "../button";
// import "./hero.css";
// import clsx from "clsx";
// import Image from 'next/image';

// export function cn(...inputs) {
//   return clsx(inputs);
// }

// const HeroSection: FC = () => {

//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handleExploreProjects = () => {
//     window.open("/dataanalytics");
//   };

//   return (
//     <div className="overflow-hidden pt-35 md:pt-40 xl:pt-[147px] pb-[125px]">
//       <div className="hero-section flex flex-col lg:flex-row justify-center items-center">

//         <div className="w-full lg:w-[50%] flex flex-col items-start justify-center text-left order-1 lg:order-1">
//           <div className="m-auto lg:ml-[200px]">
//             <p className="font-poppins mt-[32px] text-[30px] md:text-[35px] lg:text-[48px] font-semibold leading-[50px] md:leading-[72px] lg:leading-[72px] lg:h-[72px]">
//               The Business Club to
//             </p>
//             <h1 className="font-poppins lg:h-[72px]">
//               <span className="gradient-textHero text-[30px] md:text-[35px] lg:text-[48px] leading-[50px] md:leading-[72px]">
//                 Delight your Scrutiny
//               </span>
//             </h1>
//             <p className="font-poppins text-[30px] md:text-[35px] lg:text-[48px] font-semibold leading-[50px] md:leading-[72px] lg:h-[72px]">
//               and Supercharge you
//             </p>
//             <button
//               id="transform-anim"
//               onClick={handleExploreProjects}
//               className={cn(
//                 buttonVariants({ variant: "cta1" }),
//                 "mt-10 md:mt-18 ml-[15%] md:ml-18 flex items-center justify-center space-x-5 md:p-3 font-poppins relative"
//               )}
//               style={{
//                 backgroundColor: 'hsla(0, 0%, 15%, 1)',
//               }}
//             >
//               <span className="buttonfont font-poppins text-white text-[15px] md:text-[20px] lg:text-[27.74px]">
//                 Explore our Projects
//               </span>
//             </button>
//           </div>
//         </div>

//         <div className="w-full lg:w-[40%] mb-[50px] lg:mb-[0px] m-auto lg:ml-0 mt-[250px] lg:mt-[30px] flex text-center justify-center items-center order-2 lg:order-2">
//           <Image
//             className={`lg:ml-[150px] absolute justify-center lg:mt-[32px] w-[300px] h-[350px] md:w-[450px] md:h-[578px] transition-opacity duration-[1200ms] ease-out ${
//               isHovered ? 'opacity-0' : 'opacity-100'
//             }`}
//             src="/images/bulb.png"
//             alt="logo"
//             width={281}
//             height={508}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             unoptimized={true}
//           />
//           <Image
//             className={`lg:ml-[150px] absolute justify-center lg:mt-[32px] w-[300px] h-[350px] md:w-[450px] md:h-[578px] transition-opacity duration-[1200ms] ease-out ${
//               isHovered ? 'opacity-100' : 'opacity-0'
//             }`}
//             src="/images/bulb1.png"
//             alt="logo"
//             width={281}
//             height={508}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             unoptimized={true}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;






"use client";
import React, { FC, useState } from "react";
import { buttonVariants } from "../button";
import "./hero.css";
import clsx from "clsx";
import Image from 'next/image';

export function cn(...inputs) {
  return clsx(inputs);
}

const HeroSection: FC = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleExploreProjects = () => {
    window.open("/dataanalytics");
  };

  return (
    <div className="overflow-hidden pt-35 md:pt-40 xl:pt-[147px] pb-[125px]">
      <div className="hero-section flex flex-col lg:flex-row justify-center items-center">

        <div className="w-full lg:w-[50%] flex flex-col items-start justify-center text-left order-1 lg:order-1">
          <div className="m-auto lg:ml-[200px]">
            <p className="font-poppins mt-[32px] text-[30px] md:text-[35px] lg:text-[48px] font-semibold leading-[50px] md:leading-[72px] lg:leading-[72px] lg:h-[72px]">
              The Business Club to
            </p>
            <h1 className="font-poppins lg:h-[72px]">
              <span className="gradient-textHero text-[30px] md:text-[35px] lg:text-[48px] leading-[50px] md:leading-[72px]">
                Delight your Scrutiny
              </span>
            </h1>
            <p className="font-poppins text-[30px] md:text-[35px] lg:text-[48px] font-semibold leading-[50px] md:leading-[72px] lg:h-[72px]">
              and Supercharge you
            </p>


            <div className="relative">
              <Image
                className="absolute mt-7 md:mt-13 ml-[10%] md:ml-11 w-[70%] md:w-[75%]"
                src="/images/buttonbg.png"
                alt="button background"
                width={450}
                height={578}
                unoptimized={true}
                priority={false}
              />
              <button
                id="transform-anim"
                onClick={handleExploreProjects}
                className={cn(
                  buttonVariants({ variant: "cta1" }),
                  "mt-10 md:mt-18 ml-[15%] md:ml-18 flex items-center justify-center space-x-5 md:p-3 font-poppins relative"
                )}
                style={{
                  backgroundColor: 'hsla(0, 0%, 15%, 1)',
                }}
              >
                <span className="buttonfont font-poppins text-white text-[15px] md:text-[20px] lg:text-[27.74px]">
                  Explore our Projects
                </span>
              </button>
            </div>
            
          </div>
        </div>

        <div className="w-full lg:w-[40%] mb-[50px] lg:mb-[0px] m-auto lg:ml-0 mt-[250px] lg:mt-[30px] flex text-center justify-center items-center order-2 lg:order-2">
          <Image
            className={`lg:ml-[150px] absolute justify-center lg:mt-[32px] w-[300px] h-[350px] md:w-[450px] md:h-[578px] transition-opacity duration-[1200ms] ease-out ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
            src="/images/bulb.png"
            alt="logo"
            width={281}
            height={508}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            unoptimized={true}
            priority={false}
          />
          <Image
            className={`lg:ml-[150px] absolute justify-center lg:mt-[32px] w-[300px] h-[350px] md:w-[450px] md:h-[578px] transition-opacity duration-[1200ms] ease-out ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            src="/images/bulb1.png"
            alt="logo"
            width={281}
            height={508}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            unoptimized={true}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

