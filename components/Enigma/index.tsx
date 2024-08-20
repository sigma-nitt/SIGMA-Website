// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import './enigma.css';

// interface PDFDocument {
//   title: string;
//   description: string;
//   url: string;
// }

// const PDFViewer: React.FC = () => {
//   const [pdfDocuments, setPDFDocuments] = useState<PDFDocument[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
//   const sliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchPDFDocuments = async () => {
//       try {
//         const response = await fetch('/api/enigmaPdf');
//         if (!response.ok) {
//           throw new Error('Failed to fetch PDF documents');
//         }
//         const data = await response.json();
//         setPDFDocuments(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching PDF documents:', error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchPDFDocuments();
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
//     <div className="containerPDF">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textEnigma font-poppins">
//             TAKE A LOOK AT OUR MAGAZINE!
//           </span>
//         </h1>
//       </div>

//       <div className="backgroundGradient">
//         <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
//           <div
//             ref={sliderRef}
//             className="h-[500px] md:h-[827px] flex overflow-x-scroll no-scrollbar"
//           >
//             <div className="pdf-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
//               {pdfDocuments.map((pdf, index) => (
//                 <div
//                   key={index}
//                   className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >
//                   <div className="w-full h-[200px] lg:h-[315px] mb-4">
//                     <iframe
//                       src={pdf.url}
//                       style={{ width: '100%', height: '100%', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
//                       frameBorder="0"
//                       scrolling="auto"
//                     ></iframe>
//                   </div>
//                   <div className="flex flex-col lg:mt-[39px]">
//                     <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
//                       {pdf.title.toUpperCase()}
//                     </h2>
//                     <div className="text-[12px] lg:text-[19px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[34px] cursor-pointer">
//                       {isIntroTextVisible[index] ? (
//                         <p className="font-poppins font-bold lg:leading-[28.5px]">
//                           {pdf.description || "Description not available."}
//                         </p>
//                       ) : (
//                         <div className="flex flex-col items-center lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-center">
//         <img
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

// export default PDFViewer;





// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
// import * as pdfjs from "pdfjs-dist";
// import './enigma.css';
// import Image from 'next/image';

// interface PDFDocument {
//   title: string;
//   description: string;
//   url: string;
// }

// const PDFViewerComponent: React.FC = () => {
//   const [pdfDocuments, setPDFDocuments] = useState<PDFDocument[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
//   const [currentPDF, setCurrentPDF] = useState<PDFDocument | null>(null);
//   const [pdfPages, setPdfPages] = useState<string[]>([]);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
//   const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchPDFDocuments = async () => {
//       try {
//         const response = await fetch("/api/enigmaPdf");
//         if (!response.ok) {
//           throw new Error("Failed to fetch PDF documents");
//         }
//         const data = await response.json();
//         setPDFDocuments(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching PDF documents:", error);
//         setError("Failed to fetch PDF documents");
//         setLoading(false);
//       }
//     };

//     fetchPDFDocuments();
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

//   const loadPdfPages = async (url: string) => {
//     try {
//       // Fetch PDF as ArrayBuffer
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch PDF from ${url}`);
//       }
//       const pdfData = await response.arrayBuffer();

//       // Configure PDF.js
//       pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

//       // Load the PDF using pdfjs-dist
//       const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
//       const numPages = pdf.numPages;
//       const pages: string[] = [];

//       for (let pageNum = 1; pageNum <= numPages; pageNum++) {
//         const page = await pdf.getPage(pageNum);
//         const viewport = page.getViewport({ scale: 1 });
//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d")!;
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         // Render page
//         await page.render({
//           canvasContext: context,
//           viewport,
//         }).promise;

//         // Convert canvas to image URL
//         pages.push(canvas.toDataURL("image/png"));
//       }

//       setPdfPages(pages);
//     } catch (error) {
//       console.error("Error loading PDF pages:", error);
//       setError("Failed to load PDF pages");
//     }
//   };

//   const openFlipbook = (pdf: PDFDocument) => {
//     setCurrentPDF(pdf);
//     setIsFlipbookOpen(true);
//     loadPdfPages(pdf.url); // Load pages when opening the flipbook
//   };

//   const closeFlipbook = () => {
//     setIsFlipbookOpen(false);
//     setCurrentPDF(null);
//     setPdfPages([]);
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

//   const isPortrait = window.innerWidth < 768; // Determine if in portrait mode

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="containerPDF">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textEnigma font-poppins">
//             TAKE A LOOK AT OUR MAGAZINE!
//           </span>
//         </h1>
//       </div>

//       <div className="backgroundGradient">
//         <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
//           <div
//             ref={sliderRef}
//             className="h-[500px] md:h-[827px] flex overflow-x-scroll no-scrollbar"
//           >
//             <div className="pdf-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
//               {pdfDocuments.map((pdf, index) => (
//                 <div
//                   key={index}
//                   className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >
//                   <div className="w-full h-[200px] lg:h-[315px] mb-4">
//                     <iframe
//                       src={pdf.url}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "8px",
//                         boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                       }}
//                       frameBorder="0"
//                       scrolling="auto"
//                     ></iframe>
//                   </div>
//                   <div className="flex flex-col lg:mt-[39px]">
//                     <div>
//                       <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
//                         {pdf.title.toUpperCase()}
//                       </h2>
//                     </div>
//                     <div
//                       className="text-[12px] lg:text-[19px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[34px] cursor-pointer"
//                     >
//                       {isIntroTextVisible[index] ? (
//                         <p className="font-poppins font-bold lg:leading-[28.5px]">
//                           {pdf.description || "Two lines about the project."}
//                         </p>
//                       ) : (
//                         <div className="flex flex-col items-center lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                           <div className="hamburger-line w-[250px] h-[8px] md:w-[452px] md:h-[11px] rounded-[10px]"></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="absolute top-[40px] left-[135px] md:top-[84px] md:left-[332px]">
//                     <button
//                       onClick={() => openFlipbook(pdf)}
//                       className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[47px] md:w-[150px]"
//                     >
//                       View PDF
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {isFlipbookOpen && currentPDF && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="relative bg-white p-8 rounded-lg">
//             <button
//               onClick={closeFlipbook}
//               className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
//             >
//               X
//             </button>
//             <HTMLFlipBook
//               className={isPortrait ? "flipbook-portrait" : "flipbook-landscape"}
//               width={isPortrait ? 350 : 600} // Adjust width for portrait and landscape
//               height={isPortrait ? 570 : 400} // Adjust height for portrait and landscape
//               size="fixed"
//               minWidth={815}
//               maxWidth={2000}
//               minHeight={400}
//               maxHeight={1500}
//               drawShadow={true}
//               flippingTime={1000}
//               usePortrait={isPortrait}
//               startZIndex={0}
//               autoSize={true}
//               maxShadowOpacity={1}
//               showCover={true}
//               mobileScrollSupport={true}
//               swipeDistance={30}
//               clickEventForward={true}
//               useMouseEvents={true}
//               renderOnlyPageLengthChange={false}
//               style={{ borderRadius: "1px" }}
//               startPage={1}
//               showPageCorners={true}
//               disableFlipByClick={false}
//             >
//               {pdfPages.map((page, index) => (
//                 <div key={index} className="demoPage">
//                   <img src={page} alt={`Page ${index + 1}`} />
//                   <p>Page {index + 1}</p>
//                 </div>
//               ))}
//             </HTMLFlipBook>
//           </div>
//         </div>
//       )}
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

// export default PDFViewerComponent;






"use client";
import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import createClient from "@/sanityClient";
import * as pdfjs from "pdfjs-dist";
import './enigma.css';
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

  useEffect(() => {
    const fetchPDFDocuments = async () => {
      try {
        const response = await fetch("/api/enigmaPdf");
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
      // Fetch PDF as ArrayBuffer
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF from ${url}`);
      }
      const pdfData = await response.arrayBuffer();

      // Configure PDF.js
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

      // Load the PDF using pdfjs-dist
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

        // Render page
        await page.render({
          canvasContext: context,
          viewport,
        }).promise;

        // Convert canvas to image URL
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
    loadPdfPages(pdf.url); // Load pages when opening the flipbook
  };

  const closeFlipbook = () => {
    setIsFlipbookOpen(false);
    setCurrentPDF(null);
    setPdfPages([]);
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

  const isPortrait = window.innerWidth < 768; // Determine if in portrait mode

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

  return (
    <div className="containerPDF">
      <div className="mb-8">
        <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textEnigma font-poppins">
            TAKE A LOOK AT OUR MAGAZINE!
          </span>
        </h1>
      </div>

      <div className="backgroundGradient">
        <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
          <div
            ref={sliderRef}
            className="h-[500px] md:h-[827px] flex overflow-x-scroll no-scrollbar"
          >
            <div className="pdf-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
              {pdfDocuments.map((pdf, index) => (
                <div
                  key={index}
                  className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[652px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >
                  <img
                    src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
                    alt="Introductory Image"
                    className="h-[150px] lg:h-[286px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4"
                  />
                  <div className="flex flex-col lg:mt-[39px]">
                    <div>
                      <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
                        {pdf.title.toUpperCase()}
                      </h2>
                    </div>
                    <div
                      className="text-[12px] lg:text-[19px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[34px] cursor-pointer"
                    >
                      {isIntroTextVisible[index] ? (
                        <p className="font-poppins font-bold lg:leading-[28.5px]">
                          {pdf.description || "Two lines about the project."}
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
                  <div className="absolute top-[40px] left-[135px] md:top-[84px] md:left-[332px]">
                    <button
                      onClick={() => openFlipbook(pdf)}
                      className="buttonBG text-sm md:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[47px] md:w-[150px]"
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
