"use client"
import { FC, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import './dacs.css';

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
    <div ref={inViewRef} className="bgBox flex flex-col md:h-[636px]">
      <div className="mt-8 mb-18">
          <h1 className="text-center pb-2 font-semibold md:text-center md:leading-none">
            <span className="gradient-text text-[25px] md:text-[40px] font-poppins">DATA ANALYTICS & MANAGEMENT</span>
          </h1>
      </div>

      <div className="flex items-center justify-center md:flex-row flex-col">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <img
            src="./images/earnings.png"
            alt="Earnings"
            loading="lazy"
            className="img1 h-[251px] w-[100%] md:h-[411px] md:w-[396px]"
          />
        </div>

        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src="./images/insights.png"
            alt="Insights"
            loading="lazy"
            className="img2 h-[151px] w-[100%] md:h-[411px] md:w-[842px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

