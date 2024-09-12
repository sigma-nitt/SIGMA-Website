"use client"
import React, { FC, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";

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
    <div ref={inViewRef} className="bg-[#141414] flex flex-col md:h-[407px]">
      <div className="relative top-[10px]">
        <div className="w-[85%] flex flex-col items-center justify-center m-auto">
          <div className="flex flex-col lg:flex-row justify-between mb-[20px] gap-4 lg:gap-8">
              <div className="flex items-center justify-center order-1">
                  <img src="./images/whoweare.png" alt="Image 1" className="w-full lg:w-[90%] h-auto" />
              </div>
              <div className="flex items-center justify-center order-2">
                  <img src="./images/extra.png" alt="Image 1" className="w-[100px] md:w-[180px] h-auto md:h-[130px]" />
              </div>
              <div className="flex items-center justify-center order-3">
                  <img src="./images/whatwedo.png" alt="Image 3" className="w-full lg:w-[90%] h-auto" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
