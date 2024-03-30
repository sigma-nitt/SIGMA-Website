// "use client"
// import React from 'react';
// import clsx from 'clsx'; // Import clsx for classnames manipulation

// // Define your cn function
// export function cn(...inputs) {
//   return clsx(inputs);
// }

// const Home = () => {
//   return (
//     // <div className={styles.container}>
//     //   <div className={styles.sigmaContainer}>
//     //     <div className={styles.sigmaSymbolContainer}>
//     //       <img src="/images/sigma symbol.png" alt="Sigma Symbol" className={styles.sigmaSymbol} />
//     //     </div>
//     //     <div className={styles.textContainer}>
//     //       <div className={styles.sigmaText}>SIGMA</div>
//     //       <div className={styles.businessClub}>Business Club of NITT</div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default Home;

"use client"
import React from 'react';
import Link from "next/link";
import { stagger, useAnimate } from "framer-motion";
import { FC, useEffect } from "react";
import { buttonVariants } from "../button";
import { Icons } from "../icons";
import './members.css';

import clsx from 'clsx';
export function cn(...inputs) {
  return clsx(inputs);
}

const HeroSection: FC = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "#transform-anim",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5, ease: "easeIn", delay: stagger(0.3) }
    )
  })

  return (
    <div>
      <section className="mt-[1vh]">
        <div
          ref={scope}
          className="relative flex flex-col items-center justify-center gap-y-24"
        >
          <div className="flex flex-col items-center justify-center">
            {/* <img className="imgsigma mt-40" src="/images/logo.jpg" alt="Description of the image" style={{ width: "500px", height: "500px" }}/> */}

            <h1 className="sigma text-5xl text-center mb-12 md:text-8xl">Welcome to SIGMA</h1>
            <p className="businessclub text-2xl text-center mb-8 md:text-5xl">The Business Club of NIT Trichy</p>

            <br></br>
            <br></br>

            <Link
              id="transform-anim"
              href="/dataanalytics"
              className={cn(
                buttonVariants({ variant: "cta" }),
                "mt-8 flex h-12 items-center justify-center space-x-5 p-[.25rem_.3rem_.25rem_1.3rem] text-base"
              )}
            >
              <span className="text-white font-bold text-lg">Explore our Projects </span>
              <span className="right-0 inline-block rounded-full bg-white/50  p-[0.5rem]">
                <Icons.chevronRight className="h-2 w-2 text-black/60" />
              </span>
            </Link>
            <br></br>
            <p className="businessclub text-xl text-center mb-8 md:text-2xl">Explore our projects, blogs, resources and much more.</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </section>

      {/* <div className="members-projects"
        style={{
          height: '40vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
          <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mnt-10 font-bold text-6xl">50+<br />Projects</h1>
          <div className="white-line" style={{ borderTop: '12px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '10px' }}></div>
        </div>

        <div style={{ textAlign: 'center', margin: '5px', flex: 1, transition: 'transform 0.3s' }} className="hover-enlarge">
          <h1 className="p-1 bg-secondary-gradient bg-clip-text text-transparent mnt-10 font-bold text-6xl mb-4">30+<br />Members</h1>
          <div className="white-line" style={{ borderTop: '12px solid white', width: '30%', margin: 'auto', marginTop: '30px', marginBottom: '10px', borderRadius: '20px' }}></div>
        </div>
      </div> */}

    </div>
  )
}

export default HeroSection
