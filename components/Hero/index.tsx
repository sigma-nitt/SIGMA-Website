"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <div>
                <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  SIGMA - The Business Club of NITT
                </h1>
                <p>
                  The official business club of National Institute of Technology, Tiruchirappalli, focused on Data Analytics and Case Studies
                </p>
              </div>
            </div>
            <div className="md:w-1/2 hidden lg:block flex justify-end">
              <div className="relative" style={{ marginTop: '-1rem' }}>
                <Image
                  src="/images/sigma.png"
                  alt="shape"
                  width={92} // Adjust the width as needed
                  height={192} // Adjust the height as needed
                  className="absolute top-0" // Position the image to the top
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
