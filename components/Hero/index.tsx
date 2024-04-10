// "use client"
// import React from 'react';
// import Link from "next/link";
// import { stagger, useAnimate } from "framer-motion";
// import { FC, useEffect } from "react";
// import { buttonVariants } from "../button";
// import { Icons } from "../icons";
// import './members.css';

// import clsx from 'clsx';
// export function cn(...inputs) {
//   return clsx(inputs);
// }

// const HeroSection: FC = () => {
//   const [scope, animate] = useAnimate()

//   useEffect(() => {
//     animate(
//       "#transform-anim",
//       { opacity: [0, 1], y: [20, 0] },
//       { duration: 0.5, ease: "easeIn", delay: stagger(0.3) }
//     )
//   })

//   return (
//     <div>
//       <section className="mt-[1vh]">
//         <div
//           ref={scope}
//           className="relative flex flex-col items-center justify-center gap-y-24"
//         >
//           <div className="flex flex-col items-center justify-center">
//             <h1 className="sigma text-5xl text-center mb-12 md:text-8xl">Welcome to SIGMA</h1>
//             <p className="businessclub text-2xl text-center mb-8 md:text-5xl">The Business Club of NIT Trichy</p>
//             <p className="businessclub text-lg text-center mb-8 mt-30 md:text-2xl">Explore our projects, blogs, resources and much more.</p>
//             <Link
//               id="transform-anim"
//               href="/dataanalytics"
//               className={cn(
//                 buttonVariants({ variant: "cta" }),
//                 "mt-2 flex h-12 items-center justify-center space-x-5 p-[.25rem_.3rem_.25rem_1.3rem] text-base"
//               )}
//             >
//               <span className="text-white font-bold text-lg">Explore our Projects </span>
//               <span className="right-0 inline-block rounded-full bg-white/50  p-[0.5rem]">
//                 <Icons.chevronRight className="h-2 w-2 text-black/60" />
//               </span>
//             </Link>
//             <br></br>
//             <br></br>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default HeroSection


"use client"
import React from 'react';
import { FC, useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import { buttonVariants } from "../button";
import { Icons } from "../icons";
import './Home.module.css';

import clsx from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

const HeroSection: FC = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "#transform-anim",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5, ease: "easeIn", delay: stagger(0.3) }
    );
  }, []);

  const handleExploreProjects = () => {
    window.open('/casestudies');
    window.location.href = '/dataanalytics';
  };
  

  return (
    <div>
      <section className="mt-[1vh]">
        <div
          ref={scope}
          className="relative flex flex-col items-center justify-center gap-y-24"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="sigma text-5xl text-center mb-12 md:text-8xl">Welcome to SIGMA</h1>
            <p className="businessclub text-2xl text-center mb-8 md:text-5xl">The Business Club of NIT Trichy</p>
            <p className="businessclub text-lg text-center mb-8 mt-30 md:text-2xl">Explore our projects, blogs, resources and much more.</p>
            <button
              id="transform-anim"
              onClick={handleExploreProjects}
              className={cn(
                buttonVariants({ variant: "cta" }),
                "mt-2 flex h-12 items-center justify-center space-x-5 p-[.25rem_.3rem_.25rem_1.3rem] text-base"
              )}
            >
              <span className="text-white font-bold text-lg">Explore our Projects </span>
              <span className="right-0 inline-block rounded-full bg-white/50  p-[0.5rem]">
                <Icons.chevronRight className="h-2 w-2 text-black/60" />
              </span>
            </button>
            <br></br>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
