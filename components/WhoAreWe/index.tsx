"use client"
import React, { FC, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
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
    <div ref={inViewRef} className="bg-[#141414] flex flex-col h-auto p-4">
      <div className="relative top-[10px]">
        <div className="w-[85%] flex flex-col items-center justify-center m-auto">
          <div className="flex flex-col md:flex-row justify-between mb-[20px] gap-4 lg:gap-8">
              <div className="flex items-center justify-center order-1">
                <Image className="w-[90%] lg:w-[90%] h-auto"
                  src="./images/whoweare.png"
                  alt="logo"
                  width={613}
                  height={496}
                  unoptimized={true}
                  priority={false}
                />
              </div>
              <div className="flex items-center justify-center order-2">
                <Image className="w-[30%] md:w-[50%] lg:w-[200px] h-auto"
                  src="/images/sigma symbol.png"
                  alt="logo"
                  width={313}
                  height={296}
                  unoptimized={true}
                  priority={false}
                />
              </div>
              <div className="flex items-center justify-center order-3">
                <Image className="w-[90%] lg:w-[90%] h-auto"
                  src="./images/whatwedo.png"
                  alt="logo"
                  width={613}
                  height={496}
                  unoptimized={true}
                  priority={false}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
