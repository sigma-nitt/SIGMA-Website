// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
// import createClient from "@/sanityClient";
// import * as pdfjs from "pdfjs-dist";
// import './ReportPageDA.css';
// import Image from 'next/image';
// import imageUrlBuilder from "@sanity/image-url";

// interface PDFDocument {
//   title: string;
//   description: string;
//   url: string;
//   coverPage: { asset: { _ref: string } };
// }

// const builder = imageUrlBuilder(createClient);
// const imageUrlFor = (source: any) => builder.image(source);

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
//   const [isPortrait, setIsPortrait] = useState<boolean>(false);

//   useEffect(() => {
//     setIsPortrait(window.innerWidth < 768);
//     const handleResize = () => setIsPortrait(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const fetchPDFDocuments = async () => {
//       try {
//         const response = await fetch("/api/reportDA");
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
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch PDF from ${url}`);
//       }
//       const pdfData = await response.arrayBuffer();
//       pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

//       const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
//       const numPages = pdf.numPages;
//       const pages: string[] = [];
//       // const scale = 1.0;

//       for (let pageNum = 1; pageNum <= numPages; pageNum++) {
//         const page = await pdf.getPage(pageNum);
//         const viewport = page.getViewport({ scale: 2.0 });
//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d")!;
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         await page.render({
//           canvasContext: context,
//           viewport,
//         }).promise;

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
//     loadPdfPages(pdf.url);
//   };

//   const closeFlipbook = () => {
//     setIsFlipbookOpen(false);
//     setCurrentPDF(null);
//     setPdfPages([]);
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
//     return <p>{error}</p>;
//   }

//   // Split the documents into two arrays
//   const firstRowDocs = pdfDocuments.slice(0, Math.ceil(pdfDocuments.length / 2));
//   const secondRowDocs = pdfDocuments.slice(Math.ceil(pdfDocuments.length / 2));

//   return (
//     <div className="containerDA">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center pb-2 font-semibold text-[30px] md:text-[45px] lg:text-[58px]">
//           <span className="gradient-textDA font-poppins">
//             Excavate the Insights!
//           </span>
//         </h1>
//       </div>

//       <div className="backgroundGradientDA">
//         <div className="ml-[20px] md:ml-[80px]">
//            <div
//             ref={sliderRef}
//             className="flex flex-col h-[486px] lg:h-[506px] overflow-x-scroll no-scrollbar"
//           >
//             {/* First row */}
//             <div className="flex transition-transform duration-500 ease w-max mt-[35px] lg:mt-[67px] w-[95%]">
//               {firstRowDocs.map((pdf, index) => (
//                 <div
//                   key={index}
//                   className="relative  flex flex-col items-center mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] shadow-lg"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >

//                 <img
//                   src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
//                   alt="Introductory Image"
//                   className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover"
//                 />

//                 <div className="flex flex-col mt-[30px] lg:mt-[20px]">
//                   <div>
//                     <h2 className="font-poppins text-[17px] lg:text-[17.13px] font-bold">
//                       {pdf.title}
//                     </h2>
//                   </div>
//                   <div
//                     className="text-[12px] lg:text-[13px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]"
//                   >
//                     {isIntroTextVisible[index] ? (
//                       <p className="introtext font-poppins lg:font-bold">
//                         {pdf.description || "SIGMA event"}
//                       </p>
//                     ) : (
//                       <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
//                         <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
//                         <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
//                         <div className="hamburger-line w-[50%] h-[5px] lg:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                   <div className="absolute top-[10%] left-[58%] lg:top-[10%] lg:left-[61%]">
//                     <button
//                     onClick={() => openFlipbook(pdf)}
//                     className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]"
//                   >
//                     View PDF
//                   </button>
//                 </div>
//               </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="backgroundGradientDA">
//         <div className="ml-[20px] md:ml-[80px]">
//            <div
//             ref={sliderRef}
//             className="flex flex-col h-[486px] lg:h-[506px] overflow-x-scroll no-scrollbar"
//           >

//             {/* Second row */}
//             <div className="flex transition-transform duration-500 ease w-max mt-[35px] lg:mt-[27px] w-[95%]">
//               {secondRowDocs.map((pdf, index) => (
//                 <div
//                   key={index}
//                   className="relative  flex flex-col items-center mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] shadow-lg"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >

//                 <img
//                   src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
//                   alt="Introductory Image"
//                   className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover"
//                 />

//                 <div className="flex flex-col mt-[30px] lg:mt-[20px]">
//                   <div>
//                     <h2 className="font-poppins text-[17px] lg:text-[17.13px] font-bold">
//                       {pdf.title}
//                     </h2>
//                   </div>
//                   <div
//                     className="text-[12px] lg:text-[13px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]"
//                   >
//                     {isIntroTextVisible[index] ? (
//                       <p className="introtext font-poppins lg:font-bold">
//                         {pdf.description || "SIGMA event"}
//                       </p>
//                     ) : (
//                       <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
//                         <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
//                         <div className="hamburger-line w-full h-[5px] lg:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
//                         <div className="hamburger-line w-[50%] h-[5px] lg:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                   <div className="absolute top-[10%] left-[58%] lg:top-[10%] lg:left-[61%]">
//                     <button
//                     onClick={() => openFlipbook(pdf)}
//                     className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]"
//                   >
//                     View PDF
//                   </button>
//                 </div>
//               </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* PDF Viewer */}
//       {isFlipbookOpen && currentPDF && (
//         <div className="mx-auto fixed inset-0 z-50 flex flex-col items-center justify-center bg-white w-[50%] mt-5 h-[95%] overflow-y-auto">
//           <button onClick={closeFlipbook} className="absolute top-5 right-5 p-2 bg-red-500 text-white rounded">
//             Close
//           </button>
//           <div className="w-full max-w-3xl mt-10 overflow-y-auto">
//             {pdfPages.map((pageSrc, index) => (
//               <img key={index} src={pageSrc} alt={`PDF page ${index + 1}`} className="mb-4 w-full" />
//             ))}
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
import './ReportPageDA.css';
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

  // Separate intro text visibility for each row
  const [isIntroTextVisibleFirstRow, setIsIntroTextVisibleFirstRow] = useState<boolean[]>([]);
  const [isIntroTextVisibleSecondRow, setIsIntroTextVisibleSecondRow] = useState<boolean[]>([]);
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
        const response = await fetch("/api/reportDA");
        if (!response.ok) {
          throw new Error("Failed to fetch PDF documents");
        }
        const data = await response.json();
        setPDFDocuments(data);
        setIsIntroTextVisibleFirstRow(new Array(Math.ceil(data.length / 2)).fill(false));
        setIsIntroTextVisibleSecondRow(new Array(data.length - Math.ceil(data.length / 2)).fill(false));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching PDF documents:", error);
        setError("Failed to fetch PDF documents");
        setLoading(false);
      }
    };

    fetchPDFDocuments();
  }, []);

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
      // const scale = 1.0;

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2.0 });
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
          <span className="gradient-textDA font-poppins">
            Excavate the Insights!
          </span>
        </h1>
      </div>

      <div className="backgroundGradientDA">
        <div className="ml-[20px] md:ml-[80px]">
          {/* First row */}
          <div ref={sliderRef} className="flex flex-col h-[486px] lg:h-[506px] overflow-x-scroll no-scrollbar">
            <div className="flex transition-transform duration-500 ease w-max mt-[35px] lg:mt-[67px] w-[95%]">
              {firstRowDocs.map((pdf, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] shadow-lg"
                  onMouseEnter={() => handleMouseEnter(index, true)}
                  onMouseLeave={() => handleMouseLeave(index, true)}
                  onClick={() => toggleIntroText(index, true)}
                >
                  <Image className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover"
                    src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
                    alt="Image"
                    width={613}
                    height={496}
                    unoptimized={true}
                    priority={false}
                  />

                  <div className="flex flex-col mt-[30px] lg:mt-[20px]">
                    <div>
                      <h2 className="font-poppins text-[17px] lg:text-[17.13px] font-bold">{pdf.title}</h2>
                    </div>
                    <div className="text-[12px] lg:text-[13px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]">
                      {isIntroTextVisibleFirstRow[index] ? (
                        <p className="introtext font-poppins lg:font-bold">{pdf.description || "SIGMA event"}</p>
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
                    <button onClick={() => openFlipbook(pdf)} className="buttonBG text-[12.24px] text-white rounded-[28px] h-[28.75px] w-[91.77px]">
                      View PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="backgroundGradientDA">
        <div className="ml-[20px] md:ml-[80px]">
          {/* Second row */}
          <div ref={sliderRef} className="flex flex-col h-[486px] lg:h-[506px] overflow-x-scroll no-scrollbar">
            <div className="flex transition-transform duration-500 ease w-max mt-[35px] lg:mt-[27px] w-[95%]">
              {secondRowDocs.map((pdf, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] shadow-lg"
                  onMouseEnter={() => handleMouseEnter(index, false)}
                  onMouseLeave={() => handleMouseLeave(index, false)}
                  onClick={() => toggleIntroText(index, false)}
                >
                  <Image className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover"
                    src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
                    alt="Image"
                    width={613}
                    height={496}
                    unoptimized={true}
                    priority={false}
                  />

                  <div className="flex flex-col mt-[30px] lg:mt-[20px]">
                    <div>
                      <h2 className="font-poppins text-[17px] lg:text-[17.13px] font-bold">{pdf.title}</h2>
                    </div>
                    <div className="text-[12px] lg:text-[13px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]">
                      {isIntroTextVisibleSecondRow[index] ? (
                        <p className="introtext font-poppins lg:font-bold">{pdf.description || "SIGMA event"}</p>
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

      {/* PDF Viewer */}
      {isFlipbookOpen && currentPDF && (
        <div className="mx-auto fixed inset-0 z-50 flex flex-col items-center justify-center bg-white w-[50%] mt-5 h-[95%] overflow-y-auto">
          <button onClick={closeFlipbook} className="absolute top-5 right-5 p-2 bg-red-500 text-white rounded">
            Close
          </button>
          <div className="w-full max-w-3xl mt-10 overflow-y-auto">
            {pdfPages.map((pageSrc, index) => (
              <img key={index} src={pageSrc} alt={`PDF page ${index + 1}`} className="mb-4 w-full" />
            ))}
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
          unoptimized={true}
          priority={false}
        />
      </div>
    </div>
  );
};


export default PDFViewerComponent;
