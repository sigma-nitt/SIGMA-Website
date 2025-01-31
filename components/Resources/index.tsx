"use client"
import React, { useState, useEffect, useRef } from 'react';
import './res.css';
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";
import createClient from "@/sanityClient";

interface Resource {
  title: string;
  resourceType: string;
  link: string;
  type: string;
  thumbnail: { asset: { _ref: string } };
}

const builder = imageUrlBuilder(createClient);
const imageUrlFor = (source: any) => builder.image(source);

const ResourcePage = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'Data Analytics' | 'Management'>('Data Analytics');
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/api/resources');
        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }
        const data = await response.json();
        setResources(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += event.deltaY;
      }
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  const openResource = (link: string) => {
    window.open(link, '_blank');
  };

  const dataAnalyticsResources = resources.filter(resource => resource.type === 'Data Analytics');
  const caseStudiesResources = resources.filter(resource => resource.type === 'Case Studies');

  const firstRowDocsDA = dataAnalyticsResources.slice(0, Math.ceil(dataAnalyticsResources.length / 2));
  const secondRowDocsDA = dataAnalyticsResources.slice(Math.ceil(dataAnalyticsResources.length / 2));
  const firstRowDocsCS = caseStudiesResources.slice(0, Math.ceil(caseStudiesResources.length / 2));
  const secondRowDocsCS = caseStudiesResources.slice(Math.ceil(caseStudiesResources.length / 2));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div className="containerRes">
      <div className="mb-25 lg:mb-30 flex justify-center items-center">
        <h1 className="h-[87px] w-[80%] lg:w-[759px] text-center text-[30px] font-semibold lg:text-[37px] leading-[30px] lg:leading-[57px]">
          <span className="gradient-textRes font-poppins">
            Your destination for valuable resources 
            on Statistics, ML and Case Comps
          </span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:ml-22 md:space-x-5 mb-8 rounded-full">
        <button
          onClick={() => setSelectedCategory('Data Analytics')}
          className={`textcat w-[130px] md:w-[200px] py-2 font-poppins text-[20px] md:text-[25px] rounded ${
            selectedCategory === 'Data Analytics' 
              ? 'text-black bg-[hsla(155,89%,51%,1)]' 
              : 'text-white bg-transparent'
          }`}
        >
          <span className={selectedCategory === 'Data Analytics' ? 'highlight' : ''}>ANALYTICS</span>
        </button>
        <button
          onClick={() => setSelectedCategory('Management')}
          className={`textcat w-[170px] md:w-[250px] py-2 font-poppins text-[20px] md:text-[25px] rounded ${
            selectedCategory === 'Management' 
              ? 'text-black bg-[hsla(155,89%,51%,1)]' 
              : 'text-white bg-transparent'
          }`}
        >
          <span className={selectedCategory === 'Management' ? 'highlight' : ''}>MANAGEMENT</span>
        </button>
      </div>

      <div className="backgroundGradientRes">
        {selectedCategory === 'Data Analytics' && (
          <div className="ml-[4vw] md:ml-[4vw] lg:ml-[5vw] xl:ml-[5vw]">
          <div ref={sliderRef} className="h-auto pt-[2vw] md:pt-[2vw] lg:pt-[4vw] xl:pt-[4vw] flex flex-col overflow-x-scroll no-scrollbar">
            {/* First row */}
            <div className="res-wrapper flex w-[95%] gap-[3vw] md:gap-[3vw] lg:gap-[3vw] xl:gap-[2vw]">
              {firstRowDocsDA.map((resource, index) => (
                <div key={index} className="relative p-[4vw] md:p-[3vw] lg:p-[3vw] xl:p-[3vw] w-[57vw] md:w-[35vw] lg:w-[33vw] xl:w-[25vw] h-[60vw] md:h-[38vw] lg:h-[35vw] xl:h-[26vw] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center">
                    <Image className="rounded-[17.13px] h-[30vw] md:h-[18vw] lg:h-[16vw] xl:h-[12vw] object-cover pointer-events-none select-none"
                      src={resource.thumbnail ? imageUrlFor(resource.thumbnail).url() : ""}
                      alt="Thumbnail"
                      width={613}
                      height={496}
                      unoptimized={true}
                      priority={false}
                    />
                    <div className="flex flex-col mt-[3.5vw] md:mt-[2.5vw] lg:mt-[2.5vw] xl:mt-[2vw]">
                      <div>
                        <h2 className="font-poppins text-center text-[4vw] md:text-[2.8vw] lg:text-[2.3vw] xl:text-[1.6vw] font-bold">
                          {resource.title}
                        </h2>
                      </div>
                      <div className="pt-[1vw] md:pt-[1vw] lg:pt-[1.5vw] xl:pt-[1.5vw] text-[3.5vw] md:text-[2.3vw] lg:text-[1.8vw] xl:text-[1.2vw]">
                        <p className="text-center font-poppins">
                          {resource.resourceType || "Two lines about the project."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-[7vw] md:top-[5vw] lg:top-[5vw] xl:top-[4vw] left-[37.5vw] md:left-[25.5vw] lg:left-[22vw] xl:left-[18vw]">
                      <button onClick={() => openResource(resource.link)} className="buttonBG text-white rounded-[28px] text-[3.4vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1vw] h-[5.5vw] md:h-[3.5vw] lg:h-[2.8vw] xl:h-[2vw] w-[18vw] md:w-[8.5vw] lg:w-[10vw] xl:w-[6vw]">
                        link
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={sliderRef} className="h-auto md:pt-[2vw] lg:pt-[3vw] xl:pt-[3vw] pb-[6vw] md:pb-[4vw] lg:pb-[4vw] xl:pb-[4vw] flex flex-col overflow-x-scroll no-scrollbar">
              <div className="res-wrapper flex w-[95%] gap-[3vw] md:gap-[3vw] lg:gap-[3vw] xl:gap-[2vw]">
                {secondRowDocsDA.map((resource, index) => (
                  <div key={index} className="relative p-[4vw] md:p-[3vw] lg:p-[3vw] xl:p-[3vw] w-[57vw] md:w-[35vw] lg:w-[33vw] xl:w-[25vw] h-[60vw] md:h-[38vw] lg:h-[35vw] xl:h-[26vw] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center">
                    <Image className="rounded-[17.13px] h-[30vw] md:h-[18vw] lg:h-[16vw] xl:h-[12vw] object-cover pointer-events-none select-none"
                      src={resource.thumbnail ? imageUrlFor(resource.thumbnail).url() : ""}
                      alt="Thumbnail"
                      width={613}
                      height={496}
                      unoptimized={true}
                      priority={false}
                    />
                    <div className="flex flex-col mt-[3.5vw] md:mt-[2.5vw] lg:mt-[2.5vw] xl:mt-[2vw]">
                      <div>
                        <h2 className="font-poppins text-center text-[4vw] md:text-[2.8vw] lg:text-[2.3vw] xl:text-[1.6vw] font-bold">
                          {resource.title}
                        </h2>
                      </div>
                      <div className="pt-[1vw] md:pt-[1vw] lg:pt-[1.5vw] xl:pt-[1.5vw] text-[3.5vw] md:text-[2.3vw] lg:text-[1.8vw] xl:text-[1.2vw]">
                        <p className="text-center font-poppins">
                          {resource.resourceType || "Two lines about the project."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-[7vw] md:top-[5vw] lg:top-[5vw] xl:top-[4vw] left-[37.5vw] md:left-[25.5vw] lg:left-[22vw] xl:left-[18vw]">
                      <button onClick={() => openResource(resource.link)} className="buttonBG text-white rounded-[28px] text-[3.4vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1vw] h-[5.5vw] md:h-[3.5vw] lg:h-[2.8vw] xl:h-[2vw] w-[18vw] md:w-[8.5vw] lg:w-[10vw] xl:w-[6vw]">
                        link
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
          {selectedCategory === 'Management' && (
          <div className="ml-[4vw] md:ml-[4vw] lg:ml-[5vw] xl:ml-[5vw]">
            <div ref={sliderRef} className="h-auto pt-[2vw] md:pt-[2vw] lg:pt-[4vw] xl:pt-[4vw] flex flex-col overflow-x-scroll no-scrollbar">
              {/* First row */}
              <div className="res-wrapper flex w-[95%] gap-[3vw] md:gap-[3vw] lg:gap-[3vw] xl:gap-[2vw]">
                {firstRowDocsCS.map((resource, index) => (
                  <div key={index} className="relative p-[4vw] md:p-[3vw] lg:p-[3vw] xl:p-[3vw] w-[57vw] md:w-[35vw] lg:w-[33vw] xl:w-[25vw] h-[60vw] md:h-[38vw] lg:h-[35vw] xl:h-[26vw] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center">
                    <Image className="rounded-[17.13px] h-[30vw] md:h-[18vw] lg:h-[16vw] xl:h-[12vw] object-cover pointer-events-none select-none"
                      src={resource.thumbnail ? imageUrlFor(resource.thumbnail).url() : ""}
                      alt="Thumbnail"
                      width={613}
                      height={496}
                      unoptimized={true}
                      priority={false}
                    />
                    <div className="flex flex-col mt-[3.5vw] md:mt-[2.5vw] lg:mt-[2.5vw] xl:mt-[2vw]">
                      <div>
                        <h2 className="font-poppins text-center text-[4vw] md:text-[2.8vw] lg:text-[2.3vw] xl:text-[1.6vw] font-bold">
                          {resource.title}
                        </h2>
                      </div>
                      <div className="pt-[1vw] md:pt-[1vw] lg:pt-[1.5vw] xl:pt-[1.5vw] text-[3.5vw] md:text-[2.3vw] lg:text-[1.8vw] xl:text-[1.2vw]">
                        <p className="text-center font-poppins">
                          {resource.resourceType || "Two lines about the project."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-[7vw] md:top-[5vw] lg:top-[5vw] xl:top-[4vw] left-[37.5vw] md:left-[25.5vw] lg:left-[22vw] xl:left-[18vw]">
                      <button onClick={() => openResource(resource.link)} className="buttonBG text-white rounded-[28px] text-[3.4vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1vw] h-[5.5vw] md:h-[3.5vw] lg:h-[2.8vw] xl:h-[2vw] w-[18vw] md:w-[8.5vw] lg:w-[10vw] xl:w-[6vw]">
                        link
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={sliderRef} className="h-auto md:pt-[2vw] lg:pt-[3vw] xl:pt-[3vw] pb-[6vw] md:pb-[4vw] lg:pb-[4vw] xl:pb-[4vw] flex flex-col overflow-x-scroll no-scrollbar">
              <div className="res-wrapper flex w-[95%] gap-[3vw] md:gap-[3vw] lg:gap-[3vw] xl:gap-[2vw]">
                {secondRowDocsCS.map((resource, index) => (
                  <div key={index} className="relative p-[4vw] md:p-[3vw] lg:p-[3vw] xl:p-[3vw] w-[57vw] md:w-[35vw] lg:w-[33vw] xl:w-[25vw] h-[60vw] md:h-[38vw] lg:h-[35vw] xl:h-[26vw] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center">
                    <Image className="rounded-[17.13px] h-[30vw] md:h-[18vw] lg:h-[16vw] xl:h-[12vw] object-cover pointer-events-none select-none"
                      src={resource.thumbnail ? imageUrlFor(resource.thumbnail).url() : ""}
                      alt="Thumbnail"
                      width={613}
                      height={496}
                      unoptimized={true}
                      priority={false}
                    />
                    <div className="flex flex-col mt-[3.5vw] md:mt-[2.5vw] lg:mt-[2.5vw] xl:mt-[2vw]">
                      <div>
                        <h2 className="font-poppins text-center text-[4vw] md:text-[2.8vw] lg:text-[2.3vw] xl:text-[1.6vw] font-bold">
                          {resource.title}
                        </h2>
                      </div>
                      <div className="pt-[1vw] md:pt-[1vw] lg:pt-[1.5vw] xl:pt-[1.5vw] text-[3.5vw] md:text-[2.3vw] lg:text-[1.8vw] xl:text-[1.2vw]">
                        <p className="text-center font-poppins">
                          {resource.resourceType || "Two lines about the project."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-[7vw] md:top-[5vw] lg:top-[5vw] xl:top-[4vw] left-[37.5vw] md:left-[25.5vw] lg:left-[22vw] xl:left-[18vw]">
                      <button onClick={() => openResource(resource.link)} className="buttonBG text-white rounded-[28px] text-[3.4vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1vw] h-[5.5vw] md:h-[3.5vw] lg:h-[2.8vw] xl:h-[2vw] w-[18vw] md:w-[8.5vw] lg:w-[10vw] xl:w-[6vw]">
                        link
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        <Image
          className="w-auto mt-[5vw] mb-[5vw] md:mt-[5vw] md:mb-[5vw] lg:mt-[4vw] lg:mb-[4vw] xl:mt-[4vw] xl:mb-[4vw] h-[20vw] md:h-[15vw] lg:h-[15vw] xl:h-[10vw] pointer-events-none select-none"
          src="/images/sigma symbol.png"
          alt="logo"
          width={167}
          height={182}
          unoptimized={true}
          priority={false}
        />
      </div>
    </div>
  );
};

export default ResourcePage;
