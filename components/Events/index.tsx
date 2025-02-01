// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import client from "@/sanityClient";
// import "./events.css";
// import Image from "next/image";

// interface Event {
//   title: string;
//   description: string;
//   images: string[];
// }

// const builder = imageUrlBuilder(client);
// const imageUrlFor = (source: any) => builder.image(source);

// const EventsPage: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
//   const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
//   const sliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("/api/events");
//         if (!response.ok) {
//           throw new Error("Failed to fetch events");
//         }
//         const data = await response.json();
//         setEvents(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     const handleScroll = (event: WheelEvent) => {
//       if (sliderRef.current) {
//         sliderRef.current.scrollLeft += event.deltaY;
//       }
//     };

//     const sliderElement = sliderRef.current;
//     if (sliderElement) {
//       sliderElement.addEventListener("wheel", handleScroll);
//     }

//     return () => {
//       if (sliderElement) {
//         sliderElement.removeEventListener("wheel", handleScroll);
//       }
//     };
//   }, []);

//   const handleExpandClick = (index: number) => {
//     setSelectedEvent(index);
//   };

//   const handleCloseGallery = () => {
//     setSelectedEvent(null);
//   };

//   const toggleIntroText = (index: number) => {
//     if (window.innerWidth < 768) {
//       const updatedVisibility = [...isIntroTextVisible];
//       updatedVisibility[index] = !updatedVisibility[index];
//       setIsIntroTextVisible(updatedVisibility);
//     }
//   };

//   const handleMouseEnter = (index: number) => {
//     if (window.innerWidth >= 768) {
//       const updatedVisibility = [...isIntroTextVisible];
//       updatedVisibility[index] = true;
//       setIsIntroTextVisible(updatedVisibility);
//     }
//   };

//   const handleMouseLeave = (index: number) => {
//     if (window.innerWidth >= 768) {
//       const updatedVisibility = [...isIntroTextVisible];
//       updatedVisibility[index] = false;
//       setIsIntroTextVisible(updatedVisibility);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Error :(</p>;
//   }

//   const firstRowEvents = events.slice(0, Math.ceil(events.length / 2));
//   const secondRowEvents = events.slice(Math.ceil(events.length / 2));

//   return (
//     <div className="containerEvent">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center pb-2 font-semibold text-[30px] md:text-[45px] lg:text-[58px]">
//           <span className="gradient-textEvent font-poppins">
//             Explore our Events!
//           </span>
//         </h1>
//       </div>

//       <div className="backgroundGradient">
//         <div className="ml-[20px] md:ml-[80px]">
//           <div
//             ref={sliderRef}
//             className="flex flex-col h-[482px] lg:h-[506px] overflow-x-scroll no-scrollbar"
//           >
//             <div className="flex transition-transform duration-500 ease w-max mt-[35px] lg:mt-[67px] w-[95%]">
//               {firstRowEvents.map((event, index) => (
//                 <div
//                   key={index}
//                   className="relative  flex flex-col items-center mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >
                                  
//                   <Image className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover pointer-events-none select-none"
//                     src={imageUrlFor(event.images[0]).url()}
//                     alt="Image"
//                     width={613}
//                     height={496}
//                     unoptimized={true}
//                     priority={false}
//                   />

//                   <div className="flex flex-col mt-[30px] lg:mt-[20px]">
//                     <div>
//                       <h2 className="font-poppins text-[17px] lg:text-[17.13px] font-bold">
//                         {event.title}
//                       </h2>
//                     </div>
//                     <div
//                       className="text-[12px] lg:text-[15px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[25px] cursor-pointer mt-[15px] lg:mt-[10px]"
//                     >
//                       {isIntroTextVisible[index] ? (
//                         // <p className="introtext font-poppins lg:font-bold">
//                         <p className="introtext font-acumin">
//                           {event.description || "SIGMA event"}
//                         </p>
//                       ) : (
//                         <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
//                           <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[50%] h-[5px] lg:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="absolute top-[10%] left-[58%] lg:top-[10%] lg:left-[61%]">
//                     <button
//                       onClick={() => handleExpandClick(index)}
//                       className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]"
//                     >
//                       {selectedEvent === index ? "Collapse" : "view gallery"}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div
//             ref={sliderRef}
//             className="flex flex-col h-[482px] lg:h-[476px] overflow-x-scroll no-scrollbar"
//           >
//             <div className="flex transition-transform duration-500 ease w-max w-[95%]">
//               {secondRowEvents.map((event, index) => (
//                 <div
//                   key={index}
//                   className="relative  flex flex-col items-center mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >
//                   <Image className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover pointer-events-none select-none"
//                     src={imageUrlFor(event.images[0]).url()}
//                     alt="Image"
//                     width={613}
//                     height={496}
//                     unoptimized={true}
//                     priority={false}
//                   />

//                   <div className="flex flex-col mt-[30px] lg:mt-[20px]">
//                     <div>
//                       <h2 className="font-poppins text-[17px] lg:text-[17.13px] font-bold">
//                         {event.title}
//                       </h2>
//                     </div>
//                     <div
//                       className="text-[12px] lg:text-[15px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[25px] cursor-pointer mt-[15px] lg:mt-[10px]"
//                     >
//                       {isIntroTextVisible[index] ? (
//                         // <p className="introtext font-poppins lg:font-bold">
//                         <p className="introtext font-acumin">
//                           {event.description || "SIGMA event"}
//                         </p>
//                       ) : (
//                         <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
//                           <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[50%] h-[5px] lg:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="absolute top-[10%] left-[58%] lg:top-[10%] lg:left-[61%]">
//                     <button
//                       onClick={() => handleExpandClick(index)}
//                       className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]"
//                     >
//                       {selectedEvent === index ? "Collapse" : "view gallery"}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {selectedEvent !== null && (
//         <div className="fixed inset-0 backdrop-blur flex justify-center items-center z-50">
//           <div className="bg-transparent p-4 lg:p-8 rounded-lg shadow-md w-[95%] lg:w-[90%] h-[95%] lg:h-[80%] overflow-y-auto no-scrollbar">
//             <h1 className="text-[40px] lg:text-[50px] font-poppins font-bold text-white mb-10 text-center">
//               GALLERY
//             </h1>
//             <div className="grid lg:grid-cols-3 gap-4">
//               {events[selectedEvent].images.map((image, idx) => (
//                 <Image
//                   key={idx}
//                   src={imageUrlFor(image).url()}
//                   alt={`Gallery Image ${idx + 1}`}
//                   className="w-full lg:h-[175px] object-cover rounded-lg shadow-md pointer-events-none select-none"
//                   width={500}
//                   height={175}
//                   unoptimized={true}
//                   priority={false}
//                 />
//               ))}
//             </div>
//             <button
//               onClick={handleCloseGallery}
//               className="mt-4 bg-red-500 text-white py-2 px-4 rounded block mx-auto"
//             >
//               Close Gallery
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="flex items-center justify-center">
//         <Image
//           className="w-auto mt-[5vw] mb-[5vw] md:mt-[5vw] md:mb-[5vw] lg:mt-[4vw] lg:mb-[4vw] xl:mt-[4vw] xl:mb-[4vw] h-[20vw] md:h-[15vw] lg:h-[15vw] xl:h-[10vw] pointer-events-none select-none"
//           src="/images/sigma symbol.png"
//           alt="logo"
//           width={167}
//           height={182}
//           unoptimized={true}
//           priority={false}
//         />
//       </div>
//     </div>
//   );
// };

// export default EventsPage;









"use client";
import React, { useState, useEffect, useRef } from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/sanityClient";
import "./events.css";
import Image from "next/image";

interface Event {
  title: string;
  description: string;
  images: string[];
}

const builder = imageUrlBuilder(client);
const imageUrlFor = (source: any) => builder.image(source);

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  // const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isIntroTextVisibleFirstRow, setIsIntroTextVisibleFirstRow] = useState<boolean[]>([]);
  const [isIntroTextVisibleSecondRow, setIsIntroTextVisibleSecondRow] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
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

  const handleMouseEnter = (index: number, isFirstRow: boolean) => {
    if (window.innerWidth >= 768) {
      if (isFirstRow) {
        const updatedVisibility = [...isIntroTextVisibleFirstRow];
        updatedVisibility[index] = true;
        setIsIntroTextVisibleFirstRow(updatedVisibility);
      } else {
        const updatedVisibility = [...isIntroTextVisibleSecondRow];
        updatedVisibility[index] = true;
        setIsIntroTextVisibleSecondRow(updatedVisibility);
      }
    }
  };

  const handleMouseLeave = (index: number, isFirstRow: boolean) => {
    if (window.innerWidth >= 768) {
      if (isFirstRow) {
        const updatedVisibility = [...isIntroTextVisibleFirstRow];
        updatedVisibility[index] = false;
        setIsIntroTextVisibleFirstRow(updatedVisibility);
      } else {
        const updatedVisibility = [...isIntroTextVisibleSecondRow];
        updatedVisibility[index] = false;
        setIsIntroTextVisibleSecondRow(updatedVisibility);
      }
    }
  };

  const toggleIntroText = (index: number, isFirstRow: boolean) => {
    if (window.innerWidth < 768) {
      if (isFirstRow) {
        const updatedVisibility = [...isIntroTextVisibleFirstRow];
        updatedVisibility[index] = !updatedVisibility[index];
        setIsIntroTextVisibleFirstRow(updatedVisibility);
      } else {
        const updatedVisibility = [...isIntroTextVisibleSecondRow];
        updatedVisibility[index] = !updatedVisibility[index];
        setIsIntroTextVisibleSecondRow(updatedVisibility);
      }
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

  const firstRowEvents = events.slice(0, Math.ceil(events.length / 2));
  const secondRowEvents = events.slice(Math.ceil(events.length / 2));

  return (
    <div className="containerEvent">
      <div className="mb-8">
        <h1 className="h-[87px] text-center pb-2 font-semibold text-[30px] md:text-[45px] lg:text-[58px]">
          <span className="gradient-textEvent font-poppins">
            Explore our Events!
          </span>
        </h1>
      </div>

      <div className="backgroundGradient">
        <div className="ml-[5vw] lg:ml-[7vw] xl:ml-[5vw]">
          <div ref={sliderRef} className="flex flex-col overflow-x-scroll no-scrollbar">
            <div className="flex mt-[7vw] md:mt-[5vw] lg:mt-[6vw] xl:mt-[5vw] gap-[5vw] md:gap-[3vw] lg:gap-[5vw] xl:gap-[5vw] w-max">
              {firstRowEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center w-[68vw] md:w-[37vw] lg:w-[33vw] xl:w-[22.3vw] p-[6vw] md:p-[3vw] lg:p-[3vw] xl:p-[2vw] h-[97vw] md:h-[51vw] lg:h-[40vw] xl:h-[26vw] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] shadow-lg"
                  onMouseEnter={() => handleMouseEnter(index, true)}
                  onMouseLeave={() => handleMouseLeave(index, true)}
                  onClick={() => toggleIntroText(index, true)}
                >
                                  
                  <Image className="h-[40vw] md:h-[22vw] lg:h-[18vw] xl:h-[11.5vw] rounded-[17.13px] object-cover pointer-events-none select-none"
                    src={imageUrlFor(event.images[0]).url()}
                    alt="Image"
                    width={613}
                    height={496}
                    unoptimized={true}
                    priority={false}
                  />

                  <div className="flex flex-col mt-[6vw] md:mt-[3vw] lg:mt-[1.6vw] xl:mt-[1.4vw] w-full">
                    <div>
                      <h2 className="font-poppins text-[4.3vw] md:text-[2.2vw] lg:text-[1.7vw] xl:text-[1.2vw] font-bold">
                        {event.title}
                      </h2>
                    </div>
                    <div className="cursor-pointer text-[3.3vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[0.9vw] mt-[3vw] md:mt-[1.5vw] lg:mt-[1vw] xl:mt-[0.5vw]">
                      {isIntroTextVisibleFirstRow[index] ? (
                        // <p className="introtext font-poppins lg:font-bold">
                        <p className="introtext font-acumin">
                          {event.description || "SIGMA event"}
                        </p>
                      ) : (
                        <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
                          <div className="hamburger-line w-full h-[6.73px] rounded-[10px]"></div>
                          <div className="hamburger-line w-full h-[6.73px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[50%] h-[6.73px] rounded-[10px]"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-[10%] left-[58%] lg:top-[10%] lg:left-[61%]">
                    <button onClick={() => handleExpandClick(index)} className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]">
                      {selectedEvent === index ? "Collapse" : "view gallery"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={sliderRef} className="flex flex-col overflow-x-scroll no-scrollbar">
            <div className="flex mt-[8vw] md:mt-[6vw] lg:mt-[6vw] xl:mt-[5vw] gap-[5vw] md:gap-[3vw] lg:gap-[5vw] xl:gap-[5vw] pb-[8vw] md:pb-[6vw] lg:pb-[6vw] xl:pb-[5vw] w-max">
              {secondRowEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center w-[68vw] md:w-[37vw] lg:w-[33vw] xl:w-[22.3vw] p-[6vw] md:p-[3vw] lg:p-[3vw] xl:p-[2vw] h-[97vw] md:h-[51vw] lg:h-[40vw] xl:h-[26vw] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] shadow-lg"
                  onMouseEnter={() => handleMouseEnter(index, false)}
                  onMouseLeave={() => handleMouseLeave(index, false)}
                  onClick={() => toggleIntroText(index, false)}
                >       
                  <Image className="h-[40vw] md:h-[22vw] lg:h-[18vw] xl:h-[11.5vw] rounded-[17.13px] object-cover pointer-events-none select-none"
                    src={imageUrlFor(event.images[0]).url()}
                    alt="Image"
                    width={613}
                    height={496}
                    unoptimized={true}
                    priority={false}
                  />

                  <div className="flex flex-col mt-[6vw] md:mt-[3vw] lg:mt-[1.6vw] xl:mt-[1.4vw] w-full">
                    <div>
                      <h2 className="font-poppins text-[4.3vw] md:text-[2.2vw] lg:text-[1.7vw] xl:text-[1.2vw] font-bold">
                        {event.title}
                      </h2>
                    </div>
                    <div className="cursor-pointer text-[3.3vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[0.9vw] mt-[3vw] md:mt-[1.5vw] lg:mt-[1vw] xl:mt-[0.5vw]">
                      {isIntroTextVisibleSecondRow[index] ? (
                        // <p className="introtext font-poppins lg:font-bold">
                        <p className="introtext font-acumin">
                          {event.description || "SIGMA event"}
                        </p>
                      ) : (
                        <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
                          <div className="hamburger-line w-full h-[6.73px] rounded-[10px]"></div>
                          <div className="hamburger-line w-full h-[6.73px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[50%] h-[6.73px] rounded-[10px]"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-[10%] left-[58%] lg:top-[10%] lg:left-[61%]">
                    <button onClick={() => handleExpandClick(index)} className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]">
                      {selectedEvent === index ? "Collapse" : "view gallery"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedEvent !== null && (
        <div className="fixed inset-0 backdrop-blur flex justify-center items-center z-50">
          <div className="bg-transparent p-4 lg:p-8 rounded-lg shadow-md w-[95%] lg:w-[90%] h-[95%] lg:h-[80%] overflow-y-auto no-scrollbar">
            <h1 className="text-[40px] lg:text-[50px] font-poppins font-bold text-white mb-10 text-center">
              GALLERY
            </h1>
            <div className="grid lg:grid-cols-3 gap-4">
              {events[selectedEvent].images.map((image, idx) => (
                <Image
                  key={idx}
                  src={imageUrlFor(image).url()}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full lg:h-[175px] object-cover rounded-lg shadow-md pointer-events-none select-none"
                  width={500}
                  height={175}
                  unoptimized={true}
                  priority={false}
                />
              ))}
            </div>
            <button onClick={handleCloseGallery} className="mt-4 bg-red-500 text-white py-2 px-4 rounded block mx-auto">
              Close Gallery
            </button>
          </div>
        </div>
      )}

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

export default EventsPage;



