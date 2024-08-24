"use client";
import React, { useState, useEffect, useRef } from "react";
import imageUrlBuilder from "@sanity/image-url";
import createClient from "@/sanityClient";
import PortableText from "@sanity/block-content-to-react";
import './ReportPageDA.css';
import Image from 'next/image';

interface Subheading {
  _type: "subheading";
  value: string;
  color?: string;
  fontSize?: number;
}

interface RichText {
  _type: "richText";
  value: any[];
  color?: string;
  fontSize?: number;
}

interface ImageWithCaption {
  _type: "imageWithCaption";
  image: { asset: { _ref: string } };
  caption: string;
  borderColor?: string;
  borderWidth?: number;
}

interface BulletList {
  _type: "bulletList";
  items: any[];
  color?: string;
  fontSize?: number;
}

type ContentItem = Subheading | RichText | ImageWithCaption | BulletList;

interface ProjectData {
  heading: string;
  introductoryImage: { asset: { _ref: string } };
  introductoryText: string;
  content: ContentItem[];
}

const builder = imageUrlBuilder(createClient);
const imageUrlFor = (source: any) => builder.image(source);

const ReportPage: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch("/api/reportDA");
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const data = await response.json();
        setProjectData(data);
        setLoading(false);
        setIsIntroTextVisible(new Array(data.length).fill(false));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchProjectData();
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

  const handleExpand = (index: number) => {
    setExpandedProjectIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCollapse = () => {
    setExpandedProjectIndex(null);
    document.body.style.overflow = "";
  };

  const toggleIntroText = (index: number) => {
    if (window.innerWidth < 768) {
      // For small screens, toggle on click
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = !updatedVisibility[index];
      setIsIntroTextVisible(updatedVisibility);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 768) {
      // For large screens, show on hover
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = true;
      setIsIntroTextVisible(updatedVisibility);
    }
  };

  const handleMouseLeave = (index: number) => {
    if (window.innerWidth >= 768) {
      // For large screens, hide on hover out
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = false;
      setIsIntroTextVisible(updatedVisibility);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div className="containerEvent">
      <div className="mb-8">
        <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textDA font-poppins">
            Excavate the Insights!
          </span>
        </h1>
      </div>

      <div className="backgroundGradient">
        <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
          <div
            ref={sliderRef}
            className="h-[500px] md:h-[827px] flex overflow-x-scroll no-scrollbar"
          >
            <div className="event-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
              {projectData && projectData.map((data, index) => (
                <div
                  key={index}
                  className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >
                  {/* Image */}
                  <img
                    src={data.introductoryImage ? imageUrlFor(data.introductoryImage).url() : ""}
                    alt="Introductory Image"
                    className="h-[150px] lg:h-[286px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4"
                  />

                  {/* Title and Description */}
                  <div className="flex flex-col lg:mt-[39px]">
                    <div>
                      <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
                        {data.heading.toUpperCase()}
                      </h2>
                    </div>
                    <div
                      className="text-[12px] lg:text-[19px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[34px] cursor-pointer"
                    >
                      {isIntroTextVisible[index] ? (
                        <p className="font-poppins font-bold lg:leading-[28.5px]">
                          {data.introductoryText || "Two lines about the project."}
                        </p>
                      ) : (
                        <div className="flex flex-col items-left lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
                          <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[250px] h-[8px] md:w-[226px] md:h-[11px] rounded-[10px]"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-[40px] left-[135px] md:top-[84px] md:left-[332px]">
                    {expandedProjectIndex !== index ? (
                      <button
                        onClick={() => handleExpand(index)}
                        className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[47px] md:w-[150px]"
                      >
                        View insights
                      </button>
                    ) : (
                      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
                          <h1 className="text-2xl font-bold text-blue-700 mb-4">REPORT</h1>
                          {data.content && data.content.length > 0 ? (
                            <div>
                              {data.content.map((contentItem, index) => (
                                <div key={index} className="mb-4">
                                  {contentItem._type === "subheading" && (
                                    <h3
                                      style={{
                                        fontSize: contentItem.fontSize + "px",
                                        fontWeight: "bold",
                                        color: contentItem.color || "#333",
                                      }}
                                    >
                                      {contentItem.value}
                                    </h3>
                                  )}

                                  {contentItem._type === "richText" && (
                                    <div
                                      className="left-aligned"
                                      style={{
                                        color: contentItem.color || "#333",
                                        fontSize: contentItem.fontSize + "px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {contentItem.value && (
                                        <ul>
                                          {contentItem.value.map((item, index) => (
                                            <li key={index}>
                                              <PortableText blocks={item} />
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                  )}

                                  {contentItem._type === "bulletList" && (
                                    <div
                                      className="left-aligned"
                                      style={{
                                        color: contentItem.color || "#333",
                                        fontSize: contentItem.fontSize + "px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {contentItem.items && (
                                        <ul>
                                          {contentItem.items.map((item, index) => (
                                            <li key={index}>
                                              <PortableText blocks={item} />
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                  )}

                                  {contentItem._type === "imageWithCaption" && (
                                    <figure
                                      style={{
                                        border: `${contentItem.borderWidth || 2}px solid ${contentItem.borderColor || "#000"
                                          }`,
                                      }}
                                    >
                                      <Image
                                        src={imageUrlFor(contentItem.image).url()}
                                        alt={contentItem.caption}
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                        className="rounded-md"
                                      />
                                      <figcaption>{contentItem.caption}</figcaption>
                                    </figure>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p>No report content available.</p>
                          )}

                          <button
                            onClick={handleCollapse}
                            className="buttonBG mt-4 text-white rounded-[28px] py-2 px-4 w-[120px]"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="mt-[32px] mb-[32px] w-[90px] h-[100px] md:w-[167px] md:h-[182px]"
          src="/images/sigma symbol.png"
          alt="logo"
          width={167}
          height={182}
        />
      </div>
    </div>
  );
};

export default ReportPage;
