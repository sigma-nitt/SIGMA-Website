// "use client"
// import React, { FC, useEffect, useState } from "react";
// import { stagger, useAnimate } from "framer-motion";
// import { buttonVariants } from "../button";
// import { Icons } from "../icons";
// import { ReactTyped } from "react-typed";
// import "./hero.css";
// import clsx from "clsx";

// export function cn(...inputs) {
//   return clsx(inputs);
// }

// const HeroSection: FC = () => {
//   const [scope, animate] = useAnimate();
//   const [bgImageIndex, setBgImageIndex] = useState(0);
//   const images = ["/images/building1.jpg", "/images/building2.jpg", "/images/building3.jpg"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (scope && scope.current) {
//       animate(
//         scope.current,
//         { opacity: [0, 1] },
//         { duration: 0.5, ease: "easeIn", delay: stagger(0.3) }
//       );
//     }
//   }, [scope, animate]);
  

//   const handleExploreProjects = () => {
//     window.open("/casestudies");
//     window.location.href = "/dataanalytics";
//   };

//   return (
//     <div
//       className="hero-section"
//       style={{ 
//         backgroundImage: `url(${images[bgImageIndex]})`, 
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         height: '600px', // Set fixed height for the background image
//         transition: 'height 0.5s ease', // Add transition for smooth height change
//         // marginTop: '100px'
//       }}
//     >
//       <section>
//         <div ref={scope} className="relative flex flex-col items-center justify-center gap-y-24">
//           <div className="flex flex-col items-center justify-center mt-15">
//             <div className="flex justify-center items-center">
//               <ReactTyped
//                 strings={["Welcome to SIGMA"]}
//                 typeSpeed={80}
//                 className="sigma text-5xl text-center mb-12 mt-8 md:text-8xl text-black"
//               />
//             </div>
//             <p className="businessClub text-2xl text-center mb-8 md:text-5xl text-black">The Business Club of NIT Trichy</p>
//             <p className="businessClub text-lg text-center p-5 mb-8 mt-20 md:text-2xl text-black">
//               Explore our projects, blogs, resources and much more.
//             </p>

//             <button
//               id="transform-anim"
//               onClick={handleExploreProjects}
//               className={cn(
//                 buttonVariants({ variant: "cta" }),
//                 "mt-2 flex h-12 items-center justify-center space-x-5 p-[.25rem_.3rem_.25rem_1.3rem] text-base"
//               )}
//             >
//               <span className="text-white font-bold text-lg">Explore our Projects</span>
//               <span className="right-0 inline-block rounded-full bg-white/50 p-[0.5rem]">
//                 <Icons.chevronRight className="h-2 w-2 text-black/60" />
//               </span>
//             </button>
//             <br />
//             <br />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;


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
          <p className="font-poppins mt-[32px] text-[25px] md:text-[35px] lg:text-[48px] font-semibold leading-[40px] md:leading-[50px] lg:leading-[72px]">
            The Business Club to 
          </p>
          <h1 className="font-poppins text-center">
              <span className="gradient-textHero text-[25px] md:text-[35px] lg:text-[48px] leading-[50px] md:leading-[72px]">Delight your Scrutiny</span>
          </h1>
          <p className="font-poppins text-[25px] md:text-[35px] lg:text-[48px] font-semibold">
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
