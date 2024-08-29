// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import createClient from "@/sanityClient";
// import PortableText from "@sanity/block-content-to-react";
// import './ReportPageCS.css';
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
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);

//   useEffect(() => {
//     const fetchProjectData = async () => {
//       try {
//         const response = await fetch("/api/reportCS");
//         if (!response.ok) {
//           throw new Error("Failed to fetch project data");
//         }
//         const data = await response.json();
//         setProjectData(data);
//         setLoading(false);
//         setIsIntroTextVisible(new Array(data.length).fill(false));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchProjectData();
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

//   const handleExpand = (index: number) => {
//     setExpandedProjectIndex(index);
//     document.body.style.overflow = "hidden";
//   };

//   const handleCollapse = () => {
//     setExpandedProjectIndex(null);
//     document.body.style.overflow = "";
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

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       </div>
//     );
//   if (error) return <p>Error :(</p>;

//   return (
//     <div className="containerEvent">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textCS font-poppins">
//             Break the Case!
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
//               {projectData && projectData.map((data, index) => (
//                 <div
//                   key={index}
//                   className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >
//                   {/* Image */}
//                   <img
//                     src={data.introductoryImage ? imageUrlFor(data.introductoryImage).url() : ""}
//                     alt="Introductory Image"
//                     className="h-[150px] lg:h-[286px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4"
//                   />

//                   {/* Title and Description */}
//                   <div className="flex flex-col lg:mt-[39px]">
//                     <div>
//                       <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
//                         {data.heading.toUpperCase()}
//                       </h2>
//                     </div>
//                     <div
//                       className="text-[12px] lg:text-[19px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[34px] cursor-pointer"
//                     >
//                       {isIntroTextVisible[index] ? (
//                         <p className="font-poppins font-bold lg:leading-[28.5px]">
//                           {data.introductoryText || "Two lines about the project."}
//                         </p>
//                       ) : (
//                         <div className="flex flex-col items-left lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[256px] md:h-[11px] rounded-[10px]"></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="absolute top-[40px] left-[135px] md:top-[84px] md:left-[332px]">
//                     {expandedProjectIndex !== index ? (
//                       <button
//                         onClick={() => handleExpand(index)}
//                         className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[47px] md:w-[150px]"
//                       >
//                         View insights
//                       </button>
//                     ) : (
//                       <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//                         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
//                           <h1 className="text-2xl font-bold text-blue-700 mb-4">REPORT</h1>
//                           {data.content && data.content.length > 0 ? (
//                             <div>
//                               {data.content.map((contentItem, index) => (
//                                 <div key={index} className="mb-4">
//                                   {contentItem._type === "subheading" && (
//                                     <h3
//                                       style={{
//                                         fontSize: contentItem.fontSize + "px",
//                                         fontWeight: "bold",
//                                         color: contentItem.color || "#333",
//                                       }}
//                                     >
//                                       {contentItem.value}
//                                     </h3>
//                                   )}

//                                   {contentItem._type === "richText" && (
//                                     <div
//                                       className="left-aligned"
//                                       style={{
//                                         color: contentItem.color || "#333",
//                                         fontSize: contentItem.fontSize + "px",
//                                         textAlign: "left",
//                                       }}
//                                     >
//                                       {contentItem.value && (
//                                         <ul>
//                                           {contentItem.value.map((item, index) => (
//                                             <li key={index}>
//                                               <PortableText blocks={item} />
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       )}
//                                     </div>
//                                   )}

//                                   {contentItem._type === "bulletList" && (
//                                     <div
//                                       className="left-aligned"
//                                       style={{
//                                         color: contentItem.color || "#333",
//                                         fontSize: contentItem.fontSize + "px",
//                                         textAlign: "left",
//                                       }}
//                                     >
//                                       {contentItem.items && (
//                                         <ul>
//                                           {contentItem.items.map((item, index) => (
//                                             <li key={index}>
//                                               <PortableText blocks={item} />
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       )}
//                                     </div>
//                                   )}

//                                   {contentItem._type === "imageWithCaption" && (
//                                     <figure
//                                       style={{
//                                         border: `${contentItem.borderWidth || 2}px solid ${contentItem.borderColor || "#000"
//                                           }`,
//                                       }}
//                                     >
//                                       <Image
//                                         src={imageUrlFor(contentItem.image).url()}
//                                         alt={contentItem.caption}
//                                         width={600}
//                                         height={400}
//                                         layout="responsive"
//                                         className="rounded-md"
//                                       />
//                                       <figcaption>{contentItem.caption}</figcaption>
//                                     </figure>
//                                   )}
//                                 </div>
//                               ))}
//                             </div>
//                           ) : (
//                             <p>No report content available.</p>
//                           )}

//                           <button
//                             onClick={handleCollapse}
//                             className="buttonBG mt-4 text-white rounded-[28px] py-2 px-4 w-[120px]"
//                           >
//                             Close
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center">
//         <Image
//           className="mt-[32px] mb-[32px] w-[90px] h-[100px] md:w-[167px] md:h-[182px]"
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






"use client";
import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import createClient from "@/sanityClient";
import * as pdfjs from "pdfjs-dist";
import './ReportPageCS.css';
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";

interface PDFDocument {
  title: string;
  description: string;
  url: string;
  coverPage: { asset: { _ref: string } };
}

const builder = imageUrlBuilder(createClient);
const imageUrlFor = (source: any) => builder.image(source);

const PDFViewerComponent: React.FC = () => {
  const [pdfDocuments, setPDFDocuments] = useState<PDFDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
  const [currentPDF, setCurrentPDF] = useState<PDFDocument | null>(null);
  const [pdfPages, setPdfPages] = useState<string[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  useEffect(() => {
    setIsPortrait(window.innerWidth < 768);
    const handleResize = () => setIsPortrait(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchPDFDocuments = async () => {
      try {
        const response = await fetch("/api/reportCS");
        if (!response.ok) {
          throw new Error("Failed to fetch PDF documents");
        }
        const data = await response.json();
        setPDFDocuments(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching PDF documents:", error);
        setError("Failed to fetch PDF documents");
        setLoading(false);
      }
    };

    fetchPDFDocuments();
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

  const loadPdfPages = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF from ${url}`);
      }
      const pdfData = await response.arrayBuffer();
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

      const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
      const numPages = pdf.numPages;
      const pages: string[] = [];

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport,
        }).promise;

        pages.push(canvas.toDataURL("image/png"));
      }

      setPdfPages(pages);
    } catch (error) {
      console.error("Error loading PDF pages:", error);
      setError("Failed to load PDF pages");
    }
  };

  const openFlipbook = (pdf: PDFDocument) => {
    setCurrentPDF(pdf);
    setIsFlipbookOpen(true);
    loadPdfPages(pdf.url);
  };

  const closeFlipbook = () => {
    setIsFlipbookOpen(false);
    setCurrentPDF(null);
    setPdfPages([]);
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
    return <p>{error}</p>;
  }

  // Split the documents into two arrays
  const firstRowDocs = pdfDocuments.slice(0, Math.ceil(pdfDocuments.length / 2));
  const secondRowDocs = pdfDocuments.slice(Math.ceil(pdfDocuments.length / 2));

  return (
    <div className="containerDA">
      <div className="mb-8">
        <h1 className="h-[87px] text-center pb-2 font-semibold text-[30px] md:text-[45px] lg:text-[58px]">
          <span className="gradient-textEvent font-poppins">
            Break the Case!
          </span>
        </h1>
      </div>

      <div className="backgroundGradientDA">
        <div className="ml-[20px] md:ml-[80px]">
          <div
            ref={sliderRef}
            className="flex flex-col h-[973px] lg:h-[1013px] overflow-x-scroll no-scrollbar"
          >
            {/* First row */}
            <div className="flex transition-transform duration-500 ease w-max mt-[35px] lg:mt-[67px] w-[95%]">
              {firstRowDocs.map((pdf, index) => (
                <div
                  key={index}
                  className="relative  flex flex-col items-center mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >

                <img
                  src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
                  alt="Introductory Image"
                  className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover"
                />

                <div className="flex flex-col mt-[30px] lg:mt-[20px]">
                  <div>
                    <h2 className="font-poppins text-[17px] lg:text-[17.13px] font-bold">
                      {pdf.title}
                    </h2>
                  </div>
                  <div
                    className="text-[12px] lg:text-[13px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]"
                  >
                    {isIntroTextVisible[index] ? (
                      <p className="introtext font-poppins lg:font-bold">
                        {pdf.description || "SIGMA event"}
                      </p>
                    ) : (
                      <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
                        <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-[50%] h-[5px] lg:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
                      </div>
                    )}
                  </div>
                </div>

                  <div className="absolute top-[10%] left-[58%] lg:top-[10%] lg:left-[61%]">
                    <button
                    onClick={() => openFlipbook(pdf)}
                    className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]"
                  >
                    View PDF
                  </button>
                </div>
              </div>
              ))}
            </div>

            {/* Second row */}
            <div className="flex transition-transform duration-500 ease w-max mt-[35px] lg:mt-[67px] w-[95%]">
              {secondRowDocs.map((pdf, index) => (
                <div
                  key={index}
                  className="relative  flex flex-col items-center mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >

                <img
                  src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
                  alt="Introductory Image"
                  className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover"
                />

                <div className="flex flex-col mt-[30px] lg:mt-[20px]">
                  <div>
                    <h2 className="font-poppins text-[17px] lg:text-[17.13px] font-bold">
                      {pdf.title}
                    </h2>
                  </div>
                  <div
                    className="text-[12px] lg:text-[13px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]"
                  >
                    {isIntroTextVisible[index] ? (
                      <p className="introtext font-poppins lg:font-bold">
                        {pdf.description || "SIGMA event"}
                      </p>
                    ) : (
                      <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
                        <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-[50%] h-[5px] lg:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
                      </div>
                    )}
                  </div>
                </div>

                  <div className="absolute top-[10%] left-[58%] lg:top-[10%] lg:left-[61%]">
                    <button
                    onClick={() => openFlipbook(pdf)}
                    className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]"
                  >
                    View PDF
                  </button>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isFlipbookOpen && currentPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-8 rounded-lg">
            <button
              onClick={closeFlipbook}
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <HTMLFlipBook
              className={isPortrait ? "flipbook-portrait" : "flipbook-landscape"}
              width={isPortrait ? 250 : 400} // Adjust width for portrait and landscape
              height={isPortrait ? 350 : 570} // Adjust height for portrait and landscape
              size="fixed"
              minWidth={815}
              maxWidth={2000}
              minHeight={400}
              maxHeight={1500}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={isPortrait}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={1}
              showCover={true}
              mobileScrollSupport={true}
              swipeDistance={30}
              clickEventForward={true}
              useMouseEvents={true}
              renderOnlyPageLengthChange={false}
              style={{ borderRadius: "1px" }}
              startPage={0}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {pdfPages.map((page, index) => (
                <div key={index} className="demoPage">
                  <img src={page} alt={`Page ${index + 1}`} />
                  <p>Page {index + 1}</p>
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )}

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

export default PDFViewerComponent;
