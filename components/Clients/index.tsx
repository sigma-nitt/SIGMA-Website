"use client";
import React, { useState, useEffect, useRef } from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/sanityClient";
import "./client.css";
import Image from "next/image";

interface Event {
  title: string;
  description: string;
  clientimage: string[];
}

const builder = imageUrlBuilder(client);
const imageUrlFor = (source: any) => builder.image(source);

const Clients: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/clients");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchEvents();
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

  const handleExpandClick = (index: number) => {
    setSelectedEvent(index);
  };

  const handleCloseGallery = () => {
    setSelectedEvent(null);
  };

  const toggleIntroText = (index: number) => {
    if (window.innerWidth < 768) {
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = !updatedVisibility[index];
      setIsIntroTextVisible(updatedVisibility);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 768) {
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = true;
      setIsIntroTextVisible(updatedVisibility);
    }
  };

  const handleMouseLeave = (index: number) => {
    if (window.innerWidth >= 768) {
      const updatedVisibility = [...isIntroTextVisible];
      updatedVisibility[index] = false;
      setIsIntroTextVisible(updatedVisibility);
    }
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
    <div className="containerEvent">
      <div className="mb-8">
        <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textAch font-poppins">
            Previously engaged clients
          </span>
        </h1>
      </div>

      <div className="backgroundGradient">
        <div className="ml-[5vw] md:ml-[5vw] lg:ml-[5vw] xl:ml-[5vw]">
          <div ref={sliderRef} className="h-auto flex overflow-x-scroll no-scrollbar">
            <div className="event-wrapper flex py-[8vw] md:py-[5vw] lg:py-[5vw] xl:py-[5vw] gap-[5vw] md:gap-[3vw] lg:gap-[3vw] xl:gap-[3vw]">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative h-[97vw] md:h-[51vw] lg:h-[50vw] xl:h-[38vw] w-[68vw] md:w-[37vw] lg:w-[45vw] xl:w-[36.5vw] p-[6vw] md:p-[3vw] lg:p-[4vw] xl:p-[4vw] rounded-[28px] bg-[hsla(227,60%,17%,1)] shadow-lg flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >
                  {/* Image */}
                  <Image className="h-[40vw] md:h-[22vw] lg:h-[20vw] xl:h-[15vw] rounded-[28px] object-cover pointer-events-none select-none"
                    src={imageUrlFor(event.clientimage).url()}
                    alt="Image"
                    width={613}
                    height={496}
                    unoptimized={true}
                    priority={false}
                  />

                  {/* Title and Description */}
                  <div className="flex flex-col w-full mt-[6vw] md:mt-[3vw] lg:mt-[3vw] xl:mt-[3vw]">
                    <div>
                      <h2 className="text-left font-poppins text-[4.3vw] md:text-[2.2vw] lg:text-[2.2vw] xl:text-[1.8vw] font-bold">
                        {event.title}
                      </h2>
                    </div>
                    <div className="cursor-pointer text-[3.3vw] md:text-[1.8vw] lg:text-[1.7vw] xl:text-[1.3vw]">
                      {isIntroTextVisible[index] ? (
                        <p className="font-acumin lg:leading-[24.5px] mt-[1.5vw] md:mt-[2vw] lg:mt-[2.5vw] xl:mt-[1.5vw]">
                          {event.description || ""}
                        </p>
                      ) : (
                        <div className="flex flex-col items-left gap-[15px] lg:gap-[23px] mt-[3vw] md:mt-[1.5vw] lg:mt-[3vw] xl:mt-[2vw]">
                          <div className="hamburger-line w-[93%] h-[7px] lg:h-[11px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[93%] h-[7px] lg:h-[11px] rounded-[10px]"></div>
                          <div className="hamburger-line justify-left w-[50%] h-[7px] lg:h-[11px] rounded-[10px]"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default Clients;
