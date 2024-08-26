"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './res.css';

interface Resource {
  title: string;
  resourceType: string;
  link: string;
  type: string;
}

const ResourcePage = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'Data Analytics' | 'Case Studies'>('Data Analytics');
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

  // Split the documents into two arrays
  const firstRowDocsDA = dataAnalyticsResources.slice(0, Math.ceil(dataAnalyticsResources.length / 2));
  const secondRowDocsDA = dataAnalyticsResources.slice(Math.ceil(dataAnalyticsResources.length / 2));
  const firstRowDocsCS = caseStudiesResources.slice(0, Math.ceil(caseStudiesResources.length / 2));
  const secondRowDocsCS = caseStudiesResources.slice(Math.ceil(caseStudiesResources.length / 2));

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelect = (category: 'Data Analytics' | 'Case Studies') => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close the dropdown when an option is selected
  };

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
    <div className="containerDA pb-30">
      <div className="mb-25 lg:mb-30 flex justify-center items-center">
        <h1 className="h-[87px] w-[80%] lg:w-[759px] text-center text-[30px] font-semibold lg:text-[37px] leading-[30px] lg:leading-[57px]">
          <span className="gradient-textDA font-poppins">
            Your destination for valuable resources 
            on Statistics, ML and Case Comps
          </span>
        </h1>
      </div>

      <div 
        onClick={toggleDropdown} 
        className="w-[400px] bg-transparent text-white font-bold font-poppins text-[20px] lg:text-[30px] cursor-pointer flex items-center mb-8 lg:mb-15 ml-10 lg:ml-20 relative"
        style={{ textTransform: 'uppercase', border: 'none', outline: 'none' }}
      >
        {selectedCategory}
        <FaChevronDown className="ml-3"/>

        {dropdownOpen && (
          <div className="absolute top-full left-0 lg:mt-2 bg-transparent text-white w-[300px] z-10">
            <div 
              onClick={() => handleSelect('Data Analytics')} 
              className="pt-2 lg:pt-4 cursor-pointer bg-transparent"
            >
              Data Analytics
            </div>
            <div 
              onClick={() => handleSelect('Case Studies')} 
              className="pt-2 lg:pt-4 cursor-pointer bg-transparent"
            >
              Management
            </div>
          </div>
        )}
      </div>

      <div className="backgroundGradientDA">
        {selectedCategory === 'Data Analytics' && (
          <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
            <div
              ref={sliderRef}
              className="h-[763px] md:h-[1003px] flex flex-col overflow-x-scroll no-scrollbar"
            >
              {/* First row */}
              <div className="da-wrapper flex mt-[35px] lg:mt-[67px] w-[95%]">
                {firstRowDocsDA.map((resource, index) => (
                  <div
                    key={index}
                    className="relative mr-[20px] lg:mr-[80px] w-[290px] lg:w-[381px] h-[300px] lg:h-[377.13px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  >
                    <img
                      src="/images/sigma symbol.png"
                      alt="Introductory Image"
                      className="h-[150px] lg:h-[190.98px] w-[250px] lg:w-[303px] rounded-[17.13px] mt-[30px] lg:mt-[46.6px] object-cover"
                    />
                    <div className="flex flex-col mt-[30px] lg:mt-[22.46px]">
                      <div>
                        <h2 className="font-poppins text-center text-[20px] lg:text-[21.68px] font-bold">
                          {resource.title.toUpperCase()}
                        </h2>
                      </div>
                      <div
                        className="text-[16px] lg:text-[21.68px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[25px]"
                      >
                        <p className="introtext text-center font-poppins">
                          {resource.resourceType || "Two lines about the project."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-[40px] left-[145px] md:top-[64px] md:left-[254px]">
                      <button
                        onClick={() => openResource(resource.link)}
                        className="buttonBG text-sm md:text-[12.24px] text-white md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[28.75px] md:w-[91.77px]"
                      >
                        LINK
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="da-wrapper flex mt-[35px] lg:mt-[67px] w-[95%]">
                {secondRowDocsDA.map((resource, index) => (
                  <div
                    key={index}
                    className="relative mr-[20px] lg:mr-[80px] w-[290px] lg:w-[381px] h-[300px] lg:h-[377.13px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  >
                    <img
                      src="/images/sigma symbol.png"
                      alt="Introductory Image"
                      className="h-[150px] lg:h-[190.98px] w-[250px] lg:w-[303px] rounded-[17.13px] mt-[30px] lg:mt-[46.6px] object-cover"
                    />
                    <div className="flex flex-col mt-[30px] lg:mt-[22.46px]">
                      <div>
                        <h2 className="font-poppins text-center text-[20px] lg:text-[21.68px] font-bold">
                          {resource.title.toUpperCase()}
                        </h2>
                      </div>
                      <div
                        className="text-[16px] lg:text-[21.68px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[25px]"
                      >
                        <p className="introtext text-center font-poppins">
                          {resource.resourceType || "Two lines about the project."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-[40px] left-[145px] md:top-[64px] md:left-[254px]">
                      <button
                        onClick={() => openResource(resource.link)}
                        className="buttonBG text-sm md:text-[12.24px] text-white md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[28.75px] md:w-[91.77px]"
                      >
                        LINK
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
          {selectedCategory === 'Case Studies' && (
          <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
            <div
              ref={sliderRef}
              className="h-[763px] md:h-[1003px] flex flex-col overflow-x-scroll no-scrollbar"
            >
              {/* First row */}
              <div className="da-wrapper flex mt-[35px] lg:mt-[67px] w-[95%]">
                {firstRowDocsCS.map((resource, index) => (
                  <div
                    key={index}
                    className="relative mr-[20px] lg:mr-[80px] w-[290px] lg:w-[381px] h-[300px] lg:h-[377.13px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  >
                    <img
                      src="/images/sigma symbol.png"
                      alt="Introductory Image"
                      className="h-[150px] lg:h-[190.98px] w-[250px] lg:w-[303px] rounded-[17.13px] mt-[30px] lg:mt-[46.6px] object-cover"
                    />
                    <div className="flex flex-col mt-[30px] lg:mt-[22.46px]">
                      <div>
                        <h2 className="font-poppins text-center text-[20px] lg:text-[21.68px] font-bold">
                          {resource.title.toUpperCase()}
                        </h2>
                      </div>
                      <div
                        className="text-[16px] lg:text-[21.68px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[25px]"
                      >
                        <p className="introtext text-center font-poppins">
                          {resource.resourceType || "Two lines about the project."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-[40px] left-[145px] md:top-[64px] md:left-[254px]">
                      <button
                        onClick={() => openResource(resource.link)}
                        className="buttonBG text-sm md:text-[12.24px] text-white md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[28.75px] md:w-[91.77px]"
                      >
                        LINK
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="da-wrapper flex mt-[35px] lg:mt-[67px] w-[95%]">
                {secondRowDocsCS.map((resource, index) => (
                  <div
                    key={index}
                    className="relative mr-[20px] lg:mr-[80px] w-[290px] lg:w-[381px] h-[300px] lg:h-[377.13px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  >
                    <img
                      src="/images/sigma symbol.png"
                      alt="Introductory Image"
                      className="h-[150px] lg:h-[190.98px] w-[250px] lg:w-[303px] rounded-[17.13px] mt-[30px] lg:mt-[46.6px] object-cover"
                    />
                    <div className="flex flex-col mt-[30px] lg:mt-[22.46px]">
                      <div>
                        <h2 className="font-poppins text-center text-[20px] lg:text-[21.68px] font-bold">
                          {resource.title.toUpperCase()}
                        </h2>
                      </div>
                      <div
                        className="text-[16px] lg:text-[21.68px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[25px]"
                      >
                        <p className="introtext text-center font-poppins">
                          {resource.resourceType || "Two lines about the project."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-[40px] left-[145px] md:top-[64px] md:left-[254px]">
                      <button
                        onClick={() => openResource(resource.link)}
                        className="buttonBG text-sm md:text-[12.24px] text-white md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[28.75px] md:w-[91.77px]"
                      >
                        LINK
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcePage;
