// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import client from "@/sanityClient";
// import "./achievements.css";
// import Image from "next/image";

// interface Event {
//   title: string;
//   description: string;
//   imageContest: string[];
//   images: string[];
// }

// const builder = imageUrlBuilder(client);
// const imageUrlFor = (source: any) => builder.image(source);

// const EventsPage: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
//   const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
//   const sliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("/api/achievements");
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

//   return (
//     <div className="containerEvent">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textAch font-poppins">
//             Know our Achievements!
//           </span>
//         </h1>
//       </div>

//       <div className="backgroundGradient">
//         <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
//           <div
//             ref={sliderRef}
//             className="h-[500px] md:h-[827px] flex overflow-x-scroll no-scrollbar"
//           >
//             <div className="event-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
//               {events.map((event, index) => (
//                 <div
//                   key={index}
//                   className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[582px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >
//                   {/* Image */}
//                   <Image className="h-[150px] lg:h-[226px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4 pointer-events-none select-none"
//                     src={imageUrlFor(event.imageContest).url()}
//                     alt="Image"
//                     width={613}
//                     height={496}
//                     unoptimized={true}
//                     priority={false}
//                   />

//                   {/* Title and Description */}
//                   <div className="flex flex-col lg:mt-[39px]">
//                     <div>
//                       <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
//                         {event.title}
//                       </h2>
//                     </div>
//                     {/* <div
//                       className="text-[15px] lg:text-[20px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[25px] cursor-pointer"
//                     > */}
//                     <div
//                       className="text-[12px] lg:text-[20px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[25px] cursor-pointer"
//                     >
//                       {isIntroTextVisible[index] ? (
//                         // <p className="font-poppins font-bold lg:leading-[28.5px]">
//                         <p className="font-acumin lg:leading-[24.5px]">
//                           {event.description || "Two lines about the project."}
//                         </p>
//                       ) : (
//                         <div className="flex flex-col items-left lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
//                           <div className="hamburger-line w-[250px] h-[8px] lg:w-[452px] lg:h-[11px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[250px] h-[8px] lg:w-[452px] lg:h-[11px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[50%] h-[8px] lg:w-[256px] lg:h-[11px] rounded-[10px]"></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="absolute top-[10%] left-[58%] lg:top-[14%] lg:left-[70%]">
//                   {event.images && event.images.length > 0 && (
//                     <button
//                       onClick={() => handleExpandClick(index)}
//                       className="buttonBG text-[12.24px] md:text-[15px] text-white rounded-[28px] h-[28.75px] w-[91.77px] md:h-[35px] md:w-[100px]"
//                     >
//                       {selectedEvent === index ? "Collapse" : "view gallery"}
//                     </button>
//                   )}
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
//                   className="w-full lg:h-full object-cover rounded-lg shadow-md pointer-events-none select-none"
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
import "./achievements.css";
import Image from "next/image";

interface Event {
  title: string;
  description: string;
  imageContest: string[];
  images: string[];
}

const builder = imageUrlBuilder(client);
const imageUrlFor = (source: any) => builder.image(source);

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/achievements");
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
            Know our Achievements!
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
                    src={imageUrlFor(event.imageContest).url()}
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
                          {event.description || "Two lines about the project."}
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
                  <div className="absolute top-[8vw] md:top-[5vw] lg:top-[5vw] xl:top-[5vw] left-[45vw] md:left-[24vw] lg:left-[30vw] xl:left-[25vw]">
                    {event.images && event.images.length > 0 && (
                      <button onClick={() => handleExpandClick(index)} className="buttonBG text-[12.24px] md:text-[15px] text-white rounded-[28px] h-[28.75px] w-[91.77px] md:h-[35px] md:w-[100px]">
                        {selectedEvent === index ? "Collapse" : "view gallery"}
                      </button>
                    )}
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
                  className="w-full lg:h-full object-cover rounded-lg shadow-md pointer-events-none select-none"
                  width={500}
                  height={175}
                  unoptimized={true}
                  priority={false}
                />
              ))}
            </div>
            <button
              onClick={handleCloseGallery}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded block mx-auto"
            >
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
