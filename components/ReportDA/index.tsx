// "use client";
// import React, { useState, useEffect } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import createClient from "@/sanityClient";
// import PortableText from "@sanity/block-content-to-react";
// import './ReportPageDA.css';
// import Image from 'next/image';

// interface Subheading {
//   _type: "subheading";
//   value: string;
//   color?: string;
//   fontSize?: number;
// }

// interface RichText {
//   _type: "richText";
//   value: any[];
//   color?: string;
//   fontSize?: number;
// }

// interface ImageWithCaption {
//   _type: "imageWithCaption";
//   image: { asset: { _ref: string } };
//   caption: string;
//   borderColor?: string;
//   borderWidth?: number;
// }

// interface BulletList {
//   _type: "bulletList";
//   items: any[];
//   color?: string;
//   fontSize?: number;
// }

// type ContentItem = Subheading | RichText | ImageWithCaption | BulletList;

// interface ProjectData {
//   heading: string;
//   introductoryImage: { asset: { _ref: string } };
//   introductoryText: string;
//   content: ContentItem[];
// }

// const builder = imageUrlBuilder(createClient);
// const imageUrlFor = (source: any) => builder.image(source);

// const ReportPage: React.FC = () => {
//   const [projectData, setProjectData] = useState<ProjectData[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchProjectData = async () => {
//       try {
//         const response = await fetch("/api/reportDA");
//         if (!response.ok) {
//           throw new Error("Failed to fetch project data");
//         }
//         const data = await response.json();
//         setProjectData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchProjectData();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       </div>
//     );
//   if (error) return <p>Error :(</p>;

//   const handleExpand = (index: number) => {
//     setExpandedProjectIndex(index);
//     document.body.style.overflow = "hidden";
//   };

//   const handleCollapse = () => {
//     setExpandedProjectIndex(null);
//     document.body.style.overflow = "";
//   };

//   return (
//     <div>
//       <div className="pt-4">
//         <h1 className="mt-[150px] md:mt-[183px] h-[87px] text-center text-3xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textDA font-poppins">Excavate the insights!</span>
//         </h1>
//       </div>

//       <div className="backgroundGradient flex flex-wrap justify-center gap-[0px] md:gap-[107px]">
//         {projectData &&
//           projectData.map((data, index) => (
//             <div
//               key={index}
//               className="relative w-[300px] h-[350px] md:w-[559px] md:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] md:mt-[87px] shadow-lg flex flex-col items-center"
//             >
//               <img
//                 src={data.introductoryImage ? imageUrlFor(data.introductoryImage).url() : ""}
//                 alt="Introductory Image"
//                 className="w-[250px] h-[150px] mt-[30px] md:h-[286px] md:w-[456px] rounded-[28px] md:mt-[60px] object-cover mb-4"
//               />
//               <h1 className="text-lg  font-poppins md:text-3xl md:mt-[40px] font-bold text-left md:ml-[52px] md:w-[456px]">
//                 {data.heading}
//               </h1>
//               <div className="text-sm text-center mt-[5px] pl-3 pr-3 md:text-left md:ml-[52px] md:w-[456px] md:mt-[25px] md:leading-[34px]">
//                 <p>{data.introductoryText || "Two lines about the project."}</p>
//               </div>

//               <div className="absolute top-[35px] left-[35px] md:top-[84px] md:left-[332px]">
//                 <svg viewBox="0 0 117 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-[30px] w-[50px] md:w-[147px] md:h-[47px]">
//                   <rect opacity="0.5" width="117" height="47" rx="23.5" fill="#D9D9D9"/>
//                   <text
//                     x="50%"
//                     y="50%"
//                     textAnchor="middle"
//                     dominantBaseline="middle"
//                     fontSize="14"
//                     fill="#333"
//                     fontFamily="Arial, sans-serif"
//                   >
//                     done
//                   </text>
//                 </svg>
//               </div>

//               <div className="absolute top-[35px] left-[145px] md:top-[84px] md:left-[332px]">
//                 {expandedProjectIndex !== index ? (
//                   <button
//                     onClick={() => handleExpand(index)}
//                     className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[47px] md:w-[150px]"
//                   >
//                     View insights
//                   </button>
//                 ) : (
//                   <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//                     <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
//                       <h1 className="text-2xl font-bold text-blue-700 mb-4">REPORT</h1>
//                       {data.content && data.content.length > 0 ? (
//                         <div>
//                           {data.content.map((contentItem, index) => (
//                             <div key={index} className="mb-4">
//                               {contentItem._type === "subheading" && (
//                                 <h3
//                                   style={{
//                                     fontSize: contentItem.fontSize + "px",
//                                     fontWeight: "bold",
//                                     color: contentItem.color || "#333",
//                                   }}
//                                 >
//                                   {contentItem.value}
//                                 </h3>
//                               )}

//                               {contentItem._type === "richText" && (
//                                 <div
//                                   className="left-aligned"
//                                   style={{
//                                     color: contentItem.color || "#333",
//                                     fontSize: contentItem.fontSize + "px",
//                                     textAlign: "left",
//                                   }}
//                                 >
//                                   {contentItem.value && (
//                                     <ul>
//                                       {contentItem.value.map((item, index) => (
//                                         <li key={index}>
//                                           <PortableText blocks={item} />
//                                         </li>
//                                       ))}
//                                     </ul>
//                                   )}
//                                 </div>
//                               )}

//                               {contentItem._type === "bulletList" && (
//                                 <div
//                                   className="left-aligned"
//                                   style={{
//                                     color: contentItem.color || "#333",
//                                     fontSize: contentItem.fontSize + "px",
//                                     textAlign: "left",
//                                   }}
//                                 >
//                                   {contentItem.items && (
//                                     <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
//                                       {contentItem.items.map((item, index) => (
//                                         <li key={index}>
//                                           <PortableText blocks={item} />
//                                         </li>
//                                       ))}
//                                     </ul>
//                                   )}
//                                 </div>
//                               )}

//                               {contentItem._type === "imageWithCaption" && (
//                                 <div className="mb-2">
//                                   <img
//                                     src={imageUrlFor(contentItem.image).width(400).url()}
//                                     alt={contentItem.caption}
//                                     style={{
//                                       width: "50%",
//                                       height: "auto",
//                                       borderColor: contentItem.borderColor || "#333",
//                                       borderWidth: contentItem.borderWidth + "px" || "0px",
//                                       display: "block",
//                                       marginLeft: "auto",
//                                       marginRight: "auto",
//                                     }}
//                                   />
//                                   <p
//                                     style={{
//                                       fontStyle: "italic",
//                                       fontSize: "0.875rem",
//                                       color: "#4a5568",
//                                     }}
//                                   >
//                                     {contentItem.caption}
//                                   </p>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       ) : (
//                         <p>No additional content available</p>
//                       )}
//                       <button onClick={handleCollapse} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
//                         Close Report
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//       </div>

//       <div className="flex items-center justify-center">
//         <Image className="mt-[32px] mb-[32px]"
//           src="/images/sigma symbol.png"
//           alt="logo"
//           width={167}
//           height={182}
//         />
//       </div>
//     </div>
//   );
// };

// export default ReportPage;







// "use client";
// import React, { useState, useEffect } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import createClient from "@/sanityClient";
// import PortableText from "@sanity/block-content-to-react";
// import './ReportPageDA.css';
// import Image from 'next/image';

// interface Subheading {
//   _type: "subheading";
//   value: string;
//   color?: string;
//   fontSize?: number;
// }

// interface RichText {
//   _type: "richText";
//   value: any[];
//   color?: string;
//   fontSize?: number;
// }

// interface ImageWithCaption {
//   _type: "imageWithCaption";
//   image: { asset: { _ref: string } };
//   caption: string;
//   borderColor?: string;
//   borderWidth?: number;
// }

// interface BulletList {
//   _type: "bulletList";
//   items: any[];
//   color?: string;
//   fontSize?: number;
// }

// type ContentItem = Subheading | RichText | ImageWithCaption | BulletList;

// interface ProjectData {
//   heading: string;
//   introductoryImage: { asset: { _ref: string } };
//   introductoryText: string;
//   content: ContentItem[];
// }

// const builder = imageUrlBuilder(createClient);
// const imageUrlFor = (source: any) => builder.image(source);

// const ReportPage: React.FC = () => {
//   const [projectData, setProjectData] = useState<ProjectData[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
//   const [translateX, setTranslateX] = useState(0);
//   const [boxWidth, setBoxWidth] = useState(0);

//   useEffect(() => {
//     const fetchProjectData = async () => {
//       try {
//         const response = await fetch("/api/reportDA");
//         if (!response.ok) {
//           throw new Error("Failed to fetch project data");
//         }
//         const data = await response.json();
//         setProjectData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchProjectData();

//     const handleResize = () => {
//       const width = window.innerWidth < 768 ? 330 : 599;
//       setBoxWidth(width);
//       setTranslateX(0); // Reset translateX on resize
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initial call to set width

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleExpand = (index: number) => {
//     setExpandedProjectIndex(index);
//     document.body.style.overflow = "hidden";
//   };

//   const handleCollapse = () => {
//     setExpandedProjectIndex(null);
//     document.body.style.overflow = "";
//   };

//   const handleSwipeLeft = () => {
//     if (projectData && translateX > -(boxWidth * (projectData.length - 2))) {
//       setTranslateX(translateX - boxWidth);
//     }
//   };

//   const handleSwipeRight = () => {
//     if (translateX < 0) {
//       setTranslateX(translateX + boxWidth);
//     }
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       </div>
//     );
//   if (error) return <p>Error :(</p>;

//   return (
//     <div>
//       <div className="pt-4">
//         <h1 className="mt-[150px] md:mt-[183px] h-[87px] text-center text-3xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textDA font-poppins">Excavate the insights!</span>
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
//               transition: 'transform 0.3s ease-in-out',
//             }}
//           >
//             {projectData && projectData.map((data, index) => (
//               <div
//                 key={index}
//                 className="relative mr-[40px] w-[290px] h-[400px] md:w-[559px] md:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] md:mt-[87px] shadow-lg flex flex-col items-center"
//               >
//                 <img
//                   src={data.introductoryImage ? imageUrlFor(data.introductoryImage).url() : ""}
//                   alt="Introductory Image"
//                   className="w-[250px] h-[150px] mt-[30px] md:h-[286px] md:w-[456px] rounded-[28px] md:mt-[60px] object-cover mb-4"
//                 />
//                 <h1 className="text-lg  font-poppins md:text-3xl md:mt-[40px] font-bold text-left md:ml-[52px] md:w-[456px]">
//                   {data.heading}
//                 </h1>
//                 <div className="text-sm text-center mt-[5px] pl-3 pr-3 md:text-left md:ml-[52px] md:w-[456px] md:mt-[25px] md:leading-[34px]">
//                   <p>{data.introductoryText || "Two lines about the project."}</p>
//                 </div>

//                 <div className="absolute top-[35px] left-[145px] md:top-[84px] md:left-[332px]">
//                   {expandedProjectIndex !== index ? (
//                     <button
//                       onClick={() => handleExpand(index)}
//                       className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[47px] md:w-[150px]"
//                     >
//                       View insights
//                     </button>
//                   ) : (
//                     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//                       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
//                         <h1 className="text-2xl font-bold text-blue-700 mb-4">REPORT</h1>
//                         {data.content && data.content.length > 0 ? (
//                           <div>
//                             {data.content.map((contentItem, index) => (
//                               <div key={index} className="mb-4">
//                                 {contentItem._type === "subheading" && (
//                                   <h3
//                                     style={{
//                                       fontSize: contentItem.fontSize + "px",
//                                       fontWeight: "bold",
//                                       color: contentItem.color || "#333",
//                                     }}
//                                   >
//                                     {contentItem.value}
//                                   </h3>
//                                 )}

//                                 {contentItem._type === "richText" && (
//                                   <div
//                                     className="left-aligned"
//                                     style={{
//                                       color: contentItem.color || "#333",
//                                       fontSize: contentItem.fontSize + "px",
//                                       textAlign: "left",
//                                     }}
//                                   >
//                                     {contentItem.value && (
//                                       <ul>
//                                         {contentItem.value.map((item, index) => (
//                                           <li key={index}>
//                                             <PortableText blocks={item} />
//                                           </li>
//                                         ))}
//                                       </ul>
//                                     )}
//                                   </div>
//                                 )}

//                                 {contentItem._type === "bulletList" && (
//                                   <div
//                                     className="left-aligned"
//                                     style={{
//                                       color: contentItem.color || "#333",
//                                       fontSize: contentItem.fontSize + "px",
//                                       textAlign: "left",
//                                     }}
//                                   >
//                                     {contentItem.items && (
//                                       <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
//                                         {contentItem.items.map((item, index) => (
//                                           <li key={index}>
//                                             <PortableText blocks={item} />
//                                           </li>
//                                         ))}
//                                       </ul>
//                                     )}
//                                   </div>
//                                 )}

//                                 {contentItem._type === "imageWithCaption" && (
//                                   <div className="text-center">
//                                     <img
//                                       src={imageUrlFor(contentItem.image).url()}
//                                       alt="Content Image"
//                                       className="mx-auto"
//                                       style={{
//                                         borderColor: contentItem.borderColor || "transparent",
//                                         borderWidth: contentItem.borderWidth || 0,
//                                         borderStyle: "solid",
//                                       }}
//                                     />
//                                     <p className="text-sm text-gray-600 mt-2">{contentItem.caption}</p>
//                                   </div>
//                                 )}
//                               </div>
//                             ))}
//                           </div>
//                         ) : (
//                           <p>No insights available for this project.</p>
//                         )}
//                         <button
//                           onClick={handleCollapse}
//                           className="text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4 py-2 mt-4"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={handleSwipeLeft}
//           disabled={projectData === null || translateX === -(boxWidth * (projectData.length - 2))}
//           className="text-2xl pr-[15px] md:pr-[50px] pl-[5px] md:pl-[0px]"
//         >
//           {">"}
//         </button>
//       </div>
//       <div className="flex items-center justify-center">
//         <Image className="mt-[32px] mb-[32px]"
//           src="/images/sigma symbol.png"
//           alt="logo"
//           width={167}
//           height={182}
//         />
//       </div>
//     </div>
//   );
// };

// export default ReportPage;






"use client"
import React, { useState, useEffect } from "react";
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

    const handleResize = () => {
      const width = window.innerWidth < 768 ? 330 : 599;
      setBoxWidth(width);
      setTranslateX(0); // Reset translateX on resize
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExpand = (index: number) => {
    setExpandedProjectIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCollapse = () => {
    setExpandedProjectIndex(null);
    document.body.style.overflow = "";
  };

  const handleSwipeLeft = () => {
    if (projectData && translateX > -(boxWidth * (projectData.length - 2))) {
      setTranslateX(translateX - boxWidth);
    }
  };

  const handleSwipeRight = () => {
    if (translateX < 0) {
      setTranslateX(translateX + boxWidth);
    }
  };

  const toggleIntroText = (index: number) => {
    const updatedVisibility = [...isIntroTextVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsIntroTextVisible(updatedVisibility);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div className="pt-4">
        <h1 className="mt-[150px] md:mt-[183px] h-[87px] text-center text-3xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textDA font-poppins">Excavate the insights!</span>
        </h1>
      </div>

      <div className="backgroundGradient h-[500px] md:h-[827px] flex justify-between items-center gap-[0px] md:gap-[81px]">
        <button
          onClick={handleSwipeRight}
          disabled={translateX === 0}
          className="text-2xl pl-[15px] md:pl-[50px] pr-[5px] md:pr-[0px]"
        >
          {"<"}
        </button>

        <div className="gallery-container">
          <div
            className="event-wrapper"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {projectData && projectData.map((data, index) => (
              <div
                key={index}
                className="relative mr-[40px] w-[290px] h-[400px] md:w-[559px] md:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] md:mt-[7px] shadow-lg flex flex-col items-center"
              >
                <img
                  src={data.introductoryImage ? imageUrlFor(data.introductoryImage).url() : ""}
                  alt="Introductory Image"
                  className="w-[250px] h-[150px] mt-[30px] md:h-[286px] md:w-[456px] rounded-[28px] md:mt-[60px] object-cover mb-4"
                />
                <h1 className="text-lg font-poppins md:text-3xl md:mt-[40px] font-bold text-left md:ml-[52px] md:w-[456px]">
                  {data.heading}
                </h1>

                <div
                  className="text-sm text-center mt-[5px] pr-6 md:text-left md:ml-[40px] md:w-[456px] md:mt-[25px] md:leading-[34px] cursor-pointer"
                  onClick={() => toggleIntroText(index)}
                >
                  {isIntroTextVisible[index] ? (
                    <p>{data.introductoryText || "Two lines about the project."}</p>
                  ) : (
                    <div className="hamburger-menu">
                      <div className="hamburger-line"></div>
                      <div className="hamburger-line"></div>
                      <div className="hamburger-line"></div>
                    </div>
                  )}
                </div>

                <div className="absolute top-[35px] left-[145px] md:top-[84px] md:left-[332px]">
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
    
        <button
          onClick={handleSwipeLeft}
          disabled={translateX === -(boxWidth * (projectData ? projectData.length - 2 : 0))}
          className="text-2xl pr-[15px] md:pr-[50px] pl-[5px] md:pl-[0px]"
        >
          {">"}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Image className="mt-[32px] mb-[32px] w-[90px] h-[100px] md:w-[167px] md:h-[182px]"
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
