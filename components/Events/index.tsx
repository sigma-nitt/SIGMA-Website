// "use client";
// import React, { useState, useEffect } from "react";
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
//   const [translateX, setTranslateX] = useState(0);
//   const [boxWidth, setBoxWidth] = useState(0);
//   const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);

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

//     const handleResize = () => {
//       const width = window.innerWidth < 768 ? 330 : 599;
//       setBoxWidth(width);
//       setTranslateX(0); // Reset translateX on resize
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initial call to set width

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleExpandClick = (index: number) => {
//     setSelectedEvent(index);
//   };

//   const handleCloseGallery = () => {
//     setSelectedEvent(null);
//   };

//   const handleSwipeLeft = () => {
//     if (translateX > -(boxWidth * (events.length - 2))) {
//       setTranslateX(translateX - boxWidth);
//     }
//   };

//   const handleSwipeRight = () => {
//     if (translateX < 0) {
//       setTranslateX(translateX + boxWidth);
//     }
//   };

//   const toggleIntroText = (index: number) => {
//     if (window.innerWidth < 768) {
//       // For small screens, toggle on click
//       const updatedVisibility = [...isIntroTextVisible];
//       updatedVisibility[index] = !updatedVisibility[index];
//       setIsIntroTextVisible(updatedVisibility);
//     }
//   };

//   const handleMouseEnter = (index: number) => {
//     if (window.innerWidth >= 768) {
//       // For large screens, show on hover
//       const updatedVisibility = [...isIntroTextVisible];
//       updatedVisibility[index] = true;
//       setIsIntroTextVisible(updatedVisibility);
//     }
//   };

//   const handleMouseLeave = (index: number) => {
//     if (window.innerWidth >= 768) {
//       // For large screens, hide on hover out
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
//           <span className="gradient-textDA font-poppins">
//             Explore our Events!
//           </span>
//         </h1>
//       </div>

//       <div className="backgroundGradient h-[500px] md:h-[827px] flex justify-between items-center gap-[0px] md:gap-[81px]">
//         <button
//           onClick={handleSwipeRight}
//           disabled={translateX === 0}
//           className="text-2xl pl-[15px] md:pl-[50px] pr-[5px] md:pr-[0px]"
//         >
//           {"<"}
//         </button>

//         <div className="gallery-container">
//           <div
//             className="event-wrapper"
//             style={{
//               transform: `translateX(${translateX}px)`,
//               transition: "transform 0.3s ease-in-out",
//             }}
//           >
//             {events.map((event, index) => (
//               <div
//                 key={index}
//                 className="relative mr-[40px] w-[290px] h-[400px] md:w-[559px] md:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] md:mt-[7px] shadow-lg flex flex-col items-center"
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={() => handleMouseLeave(index)}
//                 onClick={() => toggleIntroText(index)}
//               >
//                 {/* Image */}
//                 <img
//                   src={imageUrlFor(event.images[0]).url()}
//                   alt={event.title}
//                   className="h-[150px] lg:h-[286px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4"
//                 />

//                 {/* Title and Description */}
//                 <div className="flex flex-col lg:mt-[39px]">
//                   <div>
//                     <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
//                       {event.title.toUpperCase()}
//                     </h2>
//                   </div>
//                   <div
//                     className="text-[12px] lg:text-[19px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[34px] cursor-pointer"
//                   >
//                     {isIntroTextVisible[index] ? (
//                       <p className="font-poppins font-bold lg:leading-[28.5px]">
//                         {event.description || "Two lines about the project."}
//                       </p>
//                     ) : (
//                       <div className="flex flex-col items-center lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
//                         <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                         <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                         <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Button */}
//                 <div className="absolute top-[40px] left-[135px] md:top-[84px] md:left-[332px]">
//                   <button
//                     onClick={() => handleExpandClick(index)}
//                     className="buttonBG font-poppins text-[15px] lg:text[20px] text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] lg:h-[47px] lg:w-[150px]"
//                   >
//                     {selectedEvent === index ? "Collapse" : "view gallery"}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={handleSwipeLeft}
//           disabled={translateX <= -(boxWidth * (events.length - 2))}
//           className="text-2xl pr-[10px] md:pr-[50px] pl-[5px] md:pl-[0px]"
//         >
//           {">"}
//         </button>
//       </div>

//       {/* Image Gallery Modal */}
//       {selectedEvent !== null && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white p-4 lg:p-8 rounded-lg shadow-md w-[95%] lg:w-[90%] h-[95%] lg:h-[80%] overflow-y-auto">
//             <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">
//               GALLERY
//             </h1>
//             <div className="grid lg:grid-cols-3 gap-4">
//               {events[selectedEvent].images.map((image, idx) => (
//                 <img
//                   key={idx}
//                   src={imageUrlFor(image).url()}
//                   alt={`Gallery Image ${idx + 1}`}
//                   className="w-full lg:h-[175px] object-cover rounded-lg shadow-md"
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
//           className="mt-[32px] mb-[32px]"
//           src="/images/sigma symbol.png"
//           alt="logo"
//           width={167}
//           height={182}
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
  const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

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
          <span className="gradient-textDA font-poppins">
            Explore our Events!
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
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >
                  {/* Image */}
                  <img
                    src={imageUrlFor(event.images[0]).url()}
                    alt={event.title}
                    className="h-[150px] lg:h-[286px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4"
                  />

                  {/* Title and Description */}
                  <div className="flex flex-col lg:mt-[39px]">
                    <div>
                      <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
                        {event.title.toUpperCase()}
                      </h2>
                    </div>
                    <div
                      className="text-[12px] lg:text-[19px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[34px] cursor-pointer"
                    >
                      {isIntroTextVisible[index] ? (
                        <p className="font-poppins font-bold lg:leading-[28.5px]">
                          {event.description || "Two lines about the project."}
                        </p>
                      ) : (
                        <div className="flex flex-col items-center lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
                          <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="absolute top-[40px] left-[135px] md:top-[84px] md:left-[332px]">
                    <button
                      onClick={() => handleExpandClick(index)}
                      className="buttonBG font-poppins text-[15px] lg:text[20px] text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] lg:h-[47px] lg:w-[150px]"
                    >
                      {selectedEvent === index ? "Collapse" : "view gallery"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedEvent !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 lg:p-8 rounded-lg shadow-md w-[95%] lg:w-[90%] h-[95%] lg:h-[80%] overflow-y-auto">
            <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">
              GALLERY
            </h1>
            <div className="grid lg:grid-cols-3 gap-4">
              {events[selectedEvent].images.map((image, idx) => (
                <img
                  key={idx}
                  src={imageUrlFor(image).url()}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full lg:h-[175px] object-cover rounded-lg shadow-md"
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
          className="mt-[32px] mb-[32px]"
          src="/images/sigma symbol.png"
          alt="logo"
          width={167}
          height={182}
        />
      </div>
    </div>
  );
};

export default EventsPage;
