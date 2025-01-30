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

//         <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-1 lg:order-1">
//           <div className="m-auto lg:ml-[22%] xl:ml-[25%]">
//             <p className="font-poppins mt-[32px] text-[30px] md:text-[35px] lg:text-[37px] xl:text-[43px] font-semibold leading-[50px] lg:leading-[72px] xl:leading-[72px] lg:h-[72px]">
//               The Business Club to
//             </p>
//             <h1 className="font-poppins lg:h-[72px]">
//               <span className="gradient-textHero text-[30px] md:text-[35px] lg:text-[37px] xl:text-[43px] leading-[50px] lg:leading-[72px]">
//                 Delight your Scrutiny
//               </span>
//             </h1>
//             <p className="font-poppins text-[30px] md:text-[35px] lg:text-[37px] xl:text-[43px] font-semibold leading-[50px] lg:leading-[72px] lg:h-[72px]">
//               and Supercharge you
//             </p>

//             <div
//               className={`relative mx-auto lg:mt-[40px] lg:w-[480px] flex items-center justify-center bg-[length:200px_55px] md:bg-[length:250px_60px] lg:bg-[length:400px_110px]`}
//               style={{
//                 backgroundImage: 'url("/images/buttonbg.png")',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 height: '100px'
//               }}
//             >
//               <button
//                 id="transform-anim"
//                 onClick={handleExploreProjects}
//                 className={cn(
//                   buttonVariants({ variant: "cta1" }),
//                   "flex items-center justify-center space-x-5 p-4 font-poppins relative lg:h-[78px] lg:w-[353px]"
//                 )}
//                 style={{
//                   backgroundColor: 'hsla(0, 0%, 15%, 1)',
//                 }}
//               >
//                 <span className="buttonfont font-poppins text-white text-[15px] md:text-[20px] lg:text-[24px] xl:text-[29px]">
//                   Explore our Projects
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="w-full lg:w-[40%] mb-[50px] md:mb-[75px] lg:mb-[0px] m-auto lg:ml-0 mt-[250px] lg:mt-[30px] flex text-center justify-center items-center order-2 lg:order-2">
//           <Image
//             className="imgchange lg:ml-[150px] absolute justify-center lg:mt-[32px] w-[300px] h-[350px] md:w-auto md:h-[400px] lg:w-[450px] lg:h-[578px] transition-opacity duration-[1200ms] ease-out pointer-events-none select-none"
//             src="/images/bulb.png"
//             alt="logo"
//             width={281}
//             height={508}
//             unoptimized={true}
//             priority={true}
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
import Image from "next/image";

export function cn(...inputs) {
  return clsx(inputs);
}

const HeroSection: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("Hovered"); // Debugging
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("Unhovered"); // Debugging
    setIsHovered(false);
  };

  const handleExploreProjects = () => {
    window.open("/dataanalytics");
  };

  return (
    <div className="overflow-hidden pt-22 md:pt-40 xl:pt-[147px] pb-[125px]">
      <div className="hero-section flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-1 lg:order-1">
          <div className="m-auto lg:ml-[22%] xl:ml-[25%]">
            <p className="font-poppins mt-[32px] text-[30px] md:text-[40px] lg:text-[40px] xl:text-[43px] font-semibold leading-[50px] lg:leading-[72px] xl:leading-[72px] lg:h-[72px]">
              The Business Club to
            </p>
            <h1 className="font-poppins lg:h-[72px]">
              <span className="gradient-textHero text-[30px] md:text-[40px] lg:text-[40px] xl:text-[43px] leading-[50px] lg:leading-[72px]">
                Delight your Scrutiny
              </span>
            </h1>
            <p className="font-poppins text-[30px] md:text-[40px] lg:text-[40px] xl:text-[43px] font-semibold leading-[50px] lg:leading-[72px] lg:h-[72px]">
              and Supercharge you
            </p>

            <div
              className="relative mx-auto xl:mt-[40px] lg:w-[450px] xl:w-[480px] flex items-center justify-center bg-[length:200px_55px] md:bg-[length:250px_60px] lg:bg-[length:300px_80px] xl:bg-[length:400px_110px]"
              style={{
                backgroundImage: 'url("/images/buttonbg.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100px",
              }}
            >
              <button
                id="transform-anim"
                onClick={handleExploreProjects}
                className={cn(
                  buttonVariants({ variant: "cta1", size : "default1" }),
                  // "flex items-center justify-center space-x-5 p-4 font-poppins relative lg:h-[78px] lg:w-[353px]"
                  "flex items-center justify-center space-x-5 p-4 font-poppins relative"
                )}
                style={{
                  backgroundColor: "hsla(0, 0%, 15%, 1)",
                }}
              >
                <span className="buttonfont font-poppins text-white text-[15px] md:text-[18px] lg:text-[22px] xl:text-[29px]">
                  Explore our Projects
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-full lg:w-[40%] mb-[50px] md:mb-[75px] lg:mb-[0px] m-auto lg:ml-0 mt-[250px] lg:mt-[30px] flex text-center justify-center items-center order-2 lg:order-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="imgchange lg:ml-[150px] absolute justify-center lg:mt-[32px] w-[300px] h-[350px] md:w-auto md:h-[400px] lg:w-auto lg:h-[534px] xl:w-[450px] xl:h-[578px] transition-all duration-500 ease-out"
            src={isHovered ? "/images/bulb1.png" : "/images/bulb.png"}
            alt="bulb"
            width={281}
            height={508}
            unoptimized={true}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
