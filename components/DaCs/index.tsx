// "use client"
// import { FC, useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";
// import { animateScroll as scroll } from "react-scroll";
// import './dacs.css';
// import Image from 'next/image';

// interface FeaturesProps {}

// const Features: FC<FeaturesProps> = () => {
//   const [inViewRef, inView] = useInView({ triggerOnce: true });
//   const featuresRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (inView && featuresRef.current) {
//       scroll.scrollTo(featuresRef.current.offsetTop, { duration: 500, smooth: true });
//     }
//   }, [inView]);

//   return (
//     <div ref={inViewRef} className="bgBox flex flex-col md:h-[636px] p-4">
//       <div className="mt-8 mb-4 md:mb-18">
//           <h1 className="text-center pb-2 font-semibold md:text-center md:leading-none">
//             <span className="gradient-text text-[25px] md:text-[40px] font-poppins">DATA ANALYTICS & MANAGEMENT</span>
//           </h1>
//       </div>

//       <div className="flex w-full items-center justify-center md:flex-row flex-col">
//         <div className="mb-4 md:mb-0 md:mr-4">
//           <Image className="h-[251px] w-[100%] md:h-auto md:w-[95%] xl:h-[411px] xl:w-[396px] pointer-events-none select-none"
//             src="./images/earnings.png"
//             alt="logo"
//             width={613}
//             height={496}
//             unoptimized={true}
//             priority={false}
//           />
//         </div>

//         <div className="mb-4 md:mb-0">
//           <Image className="h-[151px] w-[100%] md:h-auto md:w-[95%] xl:h-[411px] xl:w-[842px] pointer-events-none select-none"
//             src="./images/insights.png"
//             alt="logo"
//             width={613}
//             height={496}
//             unoptimized={true}
//             priority={false}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;






"use client"
import { FC, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import './dacs.css';
import Image from 'next/image';

interface FeaturesProps {}

const Features: FC<FeaturesProps> = () => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const featuresRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView && featuresRef.current) {
      scroll.scrollTo(featuresRef.current.offsetTop, { duration: 500, smooth: true });
    }
  }, [inView]);

  return (
    <div ref={inViewRef} className="bgBox flex flex-col py-[10vw] md:py-[4vw] lg:py-[4vw] xl:py-[3vw]">
      <div className="">
          <h1 className="text-center font-semibold md:text-center md:leading-none">
            <span className="gradient-text text-[6vw] md:text-[3vw] lg:text-[3vw] xl:text-[2.6vw] font-poppins">DATA ANALYTICS & MANAGEMENT</span>
          </h1>
      </div>

      <div className="flex w-full items-center justify-center flex-col md:flex-row mt-[5vw] md:mt-[3vw] lg:mt-[3vw] xl:mt-[5vw] gap-[4vw] md:gap-[2vw] lg:gap-[2vw] xl:gap-[1.3vw]">
        <div className="">
          <Image className="w-auto h-[67vw] md:h-[27vw] lg:h-[27vw] xl:h-[27vw] pointer-events-none select-none"
            src="./images/earnings.png"
            alt="logo"
            width={613}
            height={496}
            unoptimized={true}
            priority={false}
          />
        </div>

        <div className="">
          <Image className="w-auto h-[40vw] md:h-[27vw] lg:h-[27vw] xl:h-[27vw] pointer-events-none select-none"
            src="./images/insights.png"
            alt="logo"
            width={613}
            height={496}
            unoptimized={true}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

