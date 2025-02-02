// // "use client";
// // import React, { useState, useEffect, useRef } from "react";
// // import HTMLFlipBook from "react-pageflip";
// // import createClient from "@/sanityClient";
// // import * as pdfjs from "pdfjs-dist";
// // import './enigma.css';
// // import Image from 'next/image';
// // import imageUrlBuilder from "@sanity/image-url";

// // interface PDFDocument {
// //   title: string;
// //   description: string;
// //   url: string;
// //   coverPage: { asset: { _ref: string } };
// // }

// // const builder = imageUrlBuilder(createClient);
// // const imageUrlFor = (source: any) => builder.image(source);

// // const PDFViewerComponent: React.FC = () => {
// //   const [pdfDocuments, setPDFDocuments] = useState<PDFDocument[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
// //   const [currentPDF, setCurrentPDF] = useState<PDFDocument | null>(null);
// //   const [pdfPages, setPdfPages] = useState<string[]>([]);
// //   const sliderRef = useRef<HTMLDivElement>(null);
// //   const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
// //   const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
// //   const [isPortrait, setIsPortrait] = useState<boolean>(false);

// //   useEffect(() => {
// //     // Determine initial viewport size
// //     setIsPortrait(window.innerWidth < 768);
    
// //     // Update viewport size on resize
// //     const handleResize = () => setIsPortrait(window.innerWidth < 768);

// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   useEffect(() => {
// //     const fetchPDFDocuments = async () => {
// //       try {
// //         const response = await fetch("/api/enigmaPdf");
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch PDF documents");
// //         }
// //         const data = await response.json();
// //         setPDFDocuments(data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching PDF documents:", error);
// //         setError("Failed to fetch PDF documents");
// //         setLoading(false);
// //       }
// //     };

// //     fetchPDFDocuments();
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = (event: WheelEvent) => {
// //       if (sliderRef.current) {
// //         sliderRef.current.scrollLeft += event.deltaY;
// //       }
// //     };

// //     const sliderElement = sliderRef.current;
// //     if (sliderElement) {
// //       sliderElement.addEventListener("wheel", handleScroll);
// //     }

// //     return () => {
// //       if (sliderElement) {
// //         sliderElement.removeEventListener("wheel", handleScroll);
// //       }
// //     };
// //   }, []);

// //   // const loadPdfPages = async (url: string, startPage: number = 1, pagesToLoad: number = 3) => {
// //   //   try {
// //   //     const response = await fetch(url);
// //   //     if (!response.ok) {
// //   //       throw new Error(`Failed to fetch PDF from ${url}`);
// //   //     }
// //   //     const pdfData = await response.arrayBuffer();
  
// //   //     // Set up PDF.js worker
// //   //     pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  
// //   //     const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
// //   //     const totalNumPages = pdf.numPages;
// //   //     const newPages: string[] = [];
  
// //   //     for (let pageNum = startPage; pageNum < startPage + pagesToLoad && pageNum <= totalNumPages; pageNum++) {
// //   //       const page = await pdf.getPage(pageNum);
// //   //       const viewport = page.getViewport({ scale: 2.0 });
// //   //       const canvas = document.createElement("canvas");
// //   //       const context = canvas.getContext("2d")!;
// //   //       canvas.height = viewport.height;
// //   //       canvas.width = viewport.width;
  
// //   //       await page.render({ canvasContext: context, viewport }).promise;
// //   //       newPages.push(canvas.toDataURL("image/png"));
// //   //     }
  
// //   //     setPdfPages((prevPages) => [...prevPages, ...newPages]);
  
// //   //     if (startPage + pagesToLoad <= totalNumPages) {
// //   //       setTimeout(() => loadPdfPages(url, startPage + pagesToLoad, pagesToLoad), 1000);
// //   //     }
// //   //   } catch (error) {
// //   //     console.error("Error loading PDF pages:", error);
// //   //     setError("Failed to load PDF pages");
// //   //   }
// //   // };
// //   const [loadingFirstPage, setLoadingFirstPage] = useState(false);

// //   const loadPdfPages = async (url: string, startPage: number = 1, pagesToLoad: number = 3) => {
// //     try {
// //       const response = await fetch(url);
// //       if (!response.ok) {
// //         throw new Error(`Failed to fetch PDF from ${url}`);
// //       }
// //       const pdfData = await response.arrayBuffer();

// //       // Set up PDF.js worker
// //       pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// //       const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
// //       const totalNumPages = pdf.numPages;
// //       const newPages: string[] = [];

// //       if (startPage === 1) {
// //         setLoadingFirstPage(true); // Start loading animation for the first page
// //       }

// //       for (let pageNum = startPage; pageNum < startPage + pagesToLoad && pageNum <= totalNumPages; pageNum++) {
// //         const page = await pdf.getPage(pageNum);
// //         const viewport = page.getViewport({ scale: 2.0 });
// //         const canvas = document.createElement("canvas");
// //         const context = canvas.getContext("2d")!;
// //         canvas.height = viewport.height;
// //         canvas.width = viewport.width;

// //         await page.render({ canvasContext: context, viewport }).promise;
// //         newPages.push(canvas.toDataURL("image/png"));

// //         if (pageNum === 1) {
// //           setLoadingFirstPage(false); // Stop loading animation after the first page
// //         }
// //       }

// //       setPdfPages((prevPages) => [...prevPages, ...newPages]);

// //       if (startPage + pagesToLoad <= totalNumPages) {
// //         setTimeout(() => loadPdfPages(url, startPage + pagesToLoad, pagesToLoad), 1000);
// //       }
// //     } catch (error) {
// //       console.error("Error loading PDF pages:", error);
// //       setError("Failed to load PDF pages");
// //       setLoadingFirstPage(false); // Stop animation if an error occurs
// //     }
// //   };

  

// //   const openFlipbook = (pdf: PDFDocument) => {
// //     setCurrentPDF(pdf);
// //     setIsFlipbookOpen(true);
// //     setPdfPages([]);
// //     loadPdfPages(pdf.url, 1, 4);
// //   };
  

// //   const closeFlipbook = () => {
// //     setIsFlipbookOpen(false);
// //     setCurrentPDF(null);
// //     setPdfPages([]);
// //   };

// //   const toggleIntroText = (index: number) => {
// //     if (window.innerWidth < 768) {
// //       // For small screens, toggle on click
// //       const updatedVisibility = [...isIntroTextVisible];
// //       updatedVisibility[index] = !updatedVisibility[index];
// //       setIsIntroTextVisible(updatedVisibility);
// //     }
// //   };

// //   const handleMouseEnter = (index: number) => {
// //     if (window.innerWidth >= 768) {
// //       // For large screens, show on hover
// //       const updatedVisibility = [...isIntroTextVisible];
// //       updatedVisibility[index] = true;
// //       setIsIntroTextVisible(updatedVisibility);
// //     }
// //   };

// //   const handleMouseLeave = (index: number) => {
// //     if (window.innerWidth >= 768) {
// //       // For large screens, hide on hover out
// //       const updatedVisibility = [...isIntroTextVisible];
// //       updatedVisibility[index] = false;
// //       setIsIntroTextVisible(updatedVisibility);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center h-screen">
// //         <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return <p>{error}</p>;
// //   }

// //   return (
// //     <div className="containerPDF">
// //       <div className="mb-8">
// //         <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
// //           <span className="gradient-textEnigma font-poppins">
// //             Dive further into business!
// //           </span>
// //         </h1>
// //       </div>

// //       <div className="backgroundGradient">
// //         <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80.5px]">
// //           <div
// //             ref={sliderRef}
// //             className="h-[500px] md:h-[827px] flex overflow-x-scroll no-scrollbar"
// //           >
// //             <div className="pdf-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
// //               {pdfDocuments.map((pdf, index) => (
// //                 <div
// //                   key={index}
// //                   className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[582px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
// //                   onMouseEnter={() => handleMouseEnter(index)}
// //                   onMouseLeave={() => handleMouseLeave(index)}
// //                   onClick={() => toggleIntroText(index)}
// //                 >
                  
// //                   <Image className="h-[150px] lg:h-[236px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4 pointer-events-none select-none"
// //                     src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
// //                     alt="Image"
// //                     width={613}
// //                     height={496}
// //                     unoptimized={true}
// //                     priority={false}
// //                   />
// //                   <div className="flex flex-col lg:mt-[39px]">
// //                     <div>
// //                       <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
// //                         {pdf.title}
// //                       </h2>
// //                     </div>
// //                     <div
// //                       className="text-[12px] lg:text-[15px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[25px] cursor-pointer"
// //                     >
// //                       {isIntroTextVisible[index] ? (
// //                         // <p className="font-poppins lg:leading-[24.5px]">
// //                         <p className="font-acumin">
// //                           {pdf.description || "Two lines about the project."}
// //                         </p>
// //                       ) : (
// //                         <div className="flex flex-col items-left lg:items-left mt-[23px] gap-[15px] lg:gap-[23px]">
// //                           <div className="hamburger-line w-[250px] h-[8px] lg:w-[452px] lg:h-[11px] rounded-[10px]"></div>
// //                           <div className="hamburger-line w-[250px] h-[8px] lg:w-[452px] lg:h-[11px] rounded-[10px]"></div>
// //                           <div className="hamburger-line w-[50%] h-[8px] lg:w-[256px] lg:h-[11px] rounded-[10px]"></div>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                   <div className="absolute top-[40px] left-[135px] lg:top-[84px] lg:left-[332px]">
// //                     <button
// //                       onClick={() => openFlipbook(pdf)}
// //                       className="buttonBG text-sm lg:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] lg:h-[47px] lg:w-[150px]"
// //                     >
// //                       View PDF
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* {isFlipbookOpen && currentPDF && (
// //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
// //           <div className="relative backdrop-blur-md p-8 rounded-lg">
// //             <button
// //               onClick={closeFlipbook}
// //               className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
// //             >
// //               X
// //             </button>
// //             <HTMLFlipBook
// //               className={isPortrait ? "flipbook-portrait" : "flipbook-landscape"}
// //               width={isPortrait ? 250 : 400} // Adjust width for portrait and landscape
// //               height={isPortrait ? 350 : 570} // Adjust height for portrait and landscape
// //               size="fixed"
// //               minWidth={815}
// //               maxWidth={2000}
// //               minHeight={400}
// //               maxHeight={1500}
// //               drawShadow={true}
// //               flippingTime={1000}
// //               usePortrait={isPortrait}
// //               startZIndex={0}
// //               autoSize={true}
// //               maxShadowOpacity={1}
// //               showCover={true}
// //               mobileScrollSupport={true}
// //               swipeDistance={30}
// //               clickEventForward={true}
// //               useMouseEvents={true}
// //               renderOnlyPageLengthChange={false}
// //               style={{ borderRadius: "1px" }}
// //               startPage={0}
// //               showPageCorners={true}
// //               disableFlipByClick={false}
// //             >
// //               {pdfPages.map((page, index) => (
// //                 <div key={index} className="demoPage">
// //                   <img src={page} alt={`Page ${index + 1}`} className=" pointer-events-none select-none" />
// //                   <p>Page {index + 1}</p>
// //                 </div>
// //               ))}
// //             </HTMLFlipBook>
// //           </div>
// //         </div>
// //       )} */}
// //       {isFlipbookOpen && currentPDF && (
// //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
// //           <div className="relative backdrop-blur-md p-2 rounded-lg">
// //             <button
// //               onClick={closeFlipbook}
// //               className="absolute top-0 right-[-20px] m-2 text-white text-bold"
// //             >
// //               X
// //             </button>

// //             {/* Show loading animation while the first page is loading */}
// //             {loadingFirstPage ? (
// //               <div className="flex items-center justify-center h-full">
// //                 <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
// //                 {/* <p className="text-gray-200 mt-4">Loading...</p> */}
// //               </div>
// //             ) : (
// //               <HTMLFlipBook
// //                 className={isPortrait ? "flipbook-portrait" : "flipbook-landscape"}
// //                 width={isPortrait ? 250 : 500} // Adjust width for portrait and landscape
// //                 height={isPortrait ? 350 : 670} // Adjust height for portrait and landscape
// //                 size="fixed"
// //                 minWidth={815}
// //                 maxWidth={2000}
// //                 minHeight={400}
// //                 maxHeight={1500}
// //                 drawShadow={true}
// //                 flippingTime={1000}
// //                 usePortrait={isPortrait}
// //                 startZIndex={0}
// //                 autoSize={true}
// //                 maxShadowOpacity={1}
// //                 showCover={true}
// //                 mobileScrollSupport={true}
// //                 swipeDistance={30}
// //                 clickEventForward={true}
// //                 useMouseEvents={true}
// //                 renderOnlyPageLengthChange={false}
// //                 style={{ borderRadius: "1px" }}
// //                 startPage={0}
// //                 showPageCorners={true}
// //                 disableFlipByClick={false}
// //               >
// //                 {pdfPages.map((page, index) => (
// //                   <div key={index} className="demoPage">
// //                     <img
// //                       src={page}
// //                       alt={`Page ${index + 1}`}
// //                       className="pointer-events-none select-none"
// //                     />
// //                     <p>Page {index + 1}</p>
// //                   </div>
// //                 ))}
// //               </HTMLFlipBook>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       <div className="flex items-center justify-center">
// //         <Image
// //           className="mt-[32px] mb-[32px] w-[90px] h-[100px] md:w-[167px] md:h-[182px] pointer-events-none select-none"
// //           src="/images/sigma symbol.png"
// //           alt="logo"
// //           width={167}
// //           height={182}
// //           unoptimized={true}
// //           priority={false}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default PDFViewerComponent;













// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
// import createClient from "@/sanityClient";
// import * as pdfjs from "pdfjs-dist";
// import './enigma.css';
// import Image from 'next/image';
// import imageUrlBuilder from "@sanity/image-url";

// interface PDFDocument {
//   title: string;
//   description: string;
//   link: string;
//   coverPage: { asset: { _ref: string } };
// }

// const builder = imageUrlBuilder(createClient);
// const imageUrlFor = (source: any) => builder.image(source);

// const EnigmaPage: React.FC = () => {
//   const [pdfDocuments, setPDFDocuments] = useState<PDFDocument[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);

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

//   const openResource = (link: string) => {
//     window.open(link, '_blank');
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

//   return (
//     <div className="containerPDF">
//       <div className="mb-8">
//         <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
//           <span className="gradient-textEnigma font-poppins">
//             Dive further into business!
//           </span>
//         </h1>
//       </div>

//       <div className="backgroundGradient">
//         <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80.5px]">
//           <div
//             ref={sliderRef}
//             className="h-[520px] md:h-[827px] flex overflow-x-scroll no-scrollbar"
//           >
//             <div className="pdf-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
//               {pdfDocuments.map((pdf, index) => (
//                 <div
//                   key={index}
//                   className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[420px] lg:h-[582px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >
                  
//                   <Image className="h-[150px] lg:h-[236px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4 pointer-events-none select-none"
//                     src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
//                     alt="Image"
//                     width={613}
//                     height={496}
//                     unoptimized={true}
//                     priority={false}
//                   />
//                   <div className="flex flex-col lg:mt-[39px]">
//                     <div>
//                       <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
//                         {pdf.title}
//                       </h2>
//                     </div>
//                     <div
//                       className="text-[12px] lg:text-[15px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[25px] cursor-pointer"
//                     >
//                       {isIntroTextVisible[index] ? (
//                         // <p className="font-poppins lg:leading-[24.5px]">
//                         <p className="font-acumin">
//                           {pdf.description || "Two lines about the project."}
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
//                   <div className="absolute top-[40px] left-[195px] lg:top-[84px] lg:left-[382px]">
//                     <button
//                       onClick={() => openResource(pdf.link)}
//                       className="buttonBG text-sm lg:text-lg text-white md:px-4 rounded-[28px] h-[25px] w-[60px] lg:h-[30px] lg:w-[100px]"
//                     >
//                       link
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

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

// export default EnigmaPage;










// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
// import createClient from "@/sanityClient";
// import * as pdfjs from "pdfjs-dist";
// import './enigma.css';
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
//     // Determine initial viewport size
//     setIsPortrait(window.innerWidth < 768);
    
//     // Update viewport size on resize
//     const handleResize = () => setIsPortrait(window.innerWidth < 768);

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

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

//   // const loadPdfPages = async (url: string, startPage: number = 1, pagesToLoad: number = 3) => {
//   //   try {
//   //     const response = await fetch(url);
//   //     if (!response.ok) {
//   //       throw new Error(`Failed to fetch PDF from ${url}`);
//   //     }
//   //     const pdfData = await response.arrayBuffer();
  
//   //     // Set up PDF.js worker
//   //     pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  
//   //     const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
//   //     const totalNumPages = pdf.numPages;
//   //     const newPages: string[] = [];
  
//   //     for (let pageNum = startPage; pageNum < startPage + pagesToLoad && pageNum <= totalNumPages; pageNum++) {
//   //       const page = await pdf.getPage(pageNum);
//   //       const viewport = page.getViewport({ scale: 2.0 });
//   //       const canvas = document.createElement("canvas");
//   //       const context = canvas.getContext("2d")!;
//   //       canvas.height = viewport.height;
//   //       canvas.width = viewport.width;
  
//   //       await page.render({ canvasContext: context, viewport }).promise;
//   //       newPages.push(canvas.toDataURL("image/png"));
//   //     }
  
//   //     setPdfPages((prevPages) => [...prevPages, ...newPages]);
  
//   //     if (startPage + pagesToLoad <= totalNumPages) {
//   //       setTimeout(() => loadPdfPages(url, startPage + pagesToLoad, pagesToLoad), 1000);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error loading PDF pages:", error);
//   //     setError("Failed to load PDF pages");
//   //   }
//   // };
//   const [loadingFirstPage, setLoadingFirstPage] = useState(false);

//   const loadPdfPages = async (url: string, startPage: number = 1, pagesToLoad: number = 3) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch PDF from ${url}`);
//       }
//       const pdfData = await response.arrayBuffer();

//       // Set up PDF.js worker
//       pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

//       const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
//       const totalNumPages = pdf.numPages;
//       const newPages: string[] = [];

//       if (startPage === 1) {
//         setLoadingFirstPage(true); // Start loading animation for the first page
//       }

//       for (let pageNum = startPage; pageNum < startPage + pagesToLoad && pageNum <= totalNumPages; pageNum++) {
//         const page = await pdf.getPage(pageNum);
//         const viewport = page.getViewport({ scale: 2.0 });
//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d")!;
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         await page.render({ canvasContext: context, viewport }).promise;
//         newPages.push(canvas.toDataURL("image/png"));

//         if (pageNum === 1) {
//           setLoadingFirstPage(false); // Stop loading animation after the first page
//         }
//       }

//       setPdfPages((prevPages) => [...prevPages, ...newPages]);

//       if (startPage + pagesToLoad <= totalNumPages) {
//         setTimeout(() => loadPdfPages(url, startPage + pagesToLoad, pagesToLoad), 1000);
//       }
//     } catch (error) {
//       console.error("Error loading PDF pages:", error);
//       setError("Failed to load PDF pages");
//       setLoadingFirstPage(false); // Stop animation if an error occurs
//     }
//   };

  

//   const openFlipbook = (pdf: PDFDocument) => {
//     setCurrentPDF(pdf);
//     setIsFlipbookOpen(true);
//     setPdfPages([]);
//     loadPdfPages(pdf.url, 1, 4);
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
//             Dive further into business!
//           </span>
//         </h1>
//       </div>

//       <div className="backgroundGradient">
//         <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80.5px]">
//           <div
//             ref={sliderRef}
//             className="h-[500px] md:h-[827px] flex overflow-x-scroll no-scrollbar"
//           >
//             <div className="pdf-wrapper flex mt-[35px] lg:mt-[87px] w-[95%]">
//               {pdfDocuments.map((pdf, index) => (
//                 <div
//                   key={index}
//                   className="relative mr-[10px] lg:mr-[40px] w-[290px] lg:w-[559px] h-[400px] lg:h-[582px] rounded-[28px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   onClick={() => toggleIntroText(index)}
//                 >
                  
//                   <Image className="h-[150px] lg:h-[236px] w-[250px] lg:w-[456px] rounded-[28px] mt-[30px] lg:mt-[60px] object-cover mb-4 pointer-events-none select-none"
//                     src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
//                     alt="Image"
//                     width={613}
//                     height={496}
//                     unoptimized={true}
//                     priority={false}
//                   />
//                   <div className="flex flex-col lg:mt-[39px]">
//                     <div>
//                       <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
//                         {pdf.title}
//                       </h2>
//                     </div>
//                     <div
//                       className="text-[12px] lg:text-[15px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[25px] cursor-pointer"
//                     >
//                       {isIntroTextVisible[index] ? (
//                         // <p className="font-poppins lg:leading-[24.5px]">
//                         <p className="font-acumin">
//                           {pdf.description || "Two lines about the project."}
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
//                   <div className="absolute top-[40px] left-[135px] lg:top-[84px] lg:left-[332px]">
//                     <button
//                       onClick={() => openFlipbook(pdf)}
//                       className="buttonBG text-sm lg:text-lg text-white md:py-2 md:px-4 rounded-[28px] h-[30px] w-[120px] lg:h-[47px] lg:w-[150px]"
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

//       {/* {isFlipbookOpen && currentPDF && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="relative backdrop-blur-md p-8 rounded-lg">
//             <button
//               onClick={closeFlipbook}
//               className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
//             >
//               X
//             </button>
//             <HTMLFlipBook
//               className={isPortrait ? "flipbook-portrait" : "flipbook-landscape"}
//               width={isPortrait ? 250 : 400} // Adjust width for portrait and landscape
//               height={isPortrait ? 350 : 570} // Adjust height for portrait and landscape
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
//               startPage={0}
//               showPageCorners={true}
//               disableFlipByClick={false}
//             >
//               {pdfPages.map((page, index) => (
//                 <div key={index} className="demoPage">
//                   <img src={page} alt={`Page ${index + 1}`} className=" pointer-events-none select-none" />
//                   <p>Page {index + 1}</p>
//                 </div>
//               ))}
//             </HTMLFlipBook>
//           </div>
//         </div>
//       )} */}
//       {isFlipbookOpen && currentPDF && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="relative backdrop-blur-md p-2 rounded-lg">
//             <button
//               onClick={closeFlipbook}
//               className="absolute top-0 right-[-20px] m-2 text-white text-bold"
//             >
//               X
//             </button>

//             {/* Show loading animation while the first page is loading */}
//             {loadingFirstPage ? (
//               <div className="flex items-center justify-center h-full">
//                 <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//                 {/* <p className="text-gray-200 mt-4">Loading...</p> */}
//               </div>
//             ) : (
//               <HTMLFlipBook
//                 className={isPortrait ? "flipbook-portrait" : "flipbook-landscape"}
//                 width={isPortrait ? 250 : 500} // Adjust width for portrait and landscape
//                 height={isPortrait ? 350 : 670} // Adjust height for portrait and landscape
//                 size="fixed"
//                 minWidth={815}
//                 maxWidth={2000}
//                 minHeight={400}
//                 maxHeight={1500}
//                 drawShadow={true}
//                 flippingTime={1000}
//                 usePortrait={isPortrait}
//                 startZIndex={0}
//                 autoSize={true}
//                 maxShadowOpacity={1}
//                 showCover={true}
//                 mobileScrollSupport={true}
//                 swipeDistance={30}
//                 clickEventForward={true}
//                 useMouseEvents={true}
//                 renderOnlyPageLengthChange={false}
//                 style={{ borderRadius: "1px" }}
//                 startPage={0}
//                 showPageCorners={true}
//                 disableFlipByClick={false}
//               >
//                 {pdfPages.map((page, index) => (
//                   <div key={index} className="demoPage">
//                     <img
//                       src={page}
//                       alt={`Page ${index + 1}`}
//                       className="pointer-events-none select-none"
//                     />
//                     <p>Page {index + 1}</p>
//                   </div>
//                 ))}
//               </HTMLFlipBook>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="flex items-center justify-center">
//         <Image
//           className="mt-[32px] mb-[32px] w-[90px] h-[100px] md:w-[167px] md:h-[182px] pointer-events-none select-none"
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
  link: string;
  coverPage: { asset: { _ref: string } };
}

const builder = imageUrlBuilder(createClient);
const imageUrlFor = (source: any) => builder.image(source);

const EnigmaPage: React.FC = () => {
  const [pdfDocuments, setPDFDocuments] = useState<PDFDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);

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

  const openResource = (link: string) => {
    window.open(link, '_blank');
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

  return (
    <div className="containerPDF">
      <div className="mb-8">
        <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textEnigma font-poppins">
            Dive further into business!
          </span>
        </h1>
      </div>

      <div className="backgroundGradient">
        <div className="ml-[5vw] md:ml-[5vw] lg:ml-[5vw] xl:ml-[5vw]">
          <div ref={sliderRef} className="h-auto flex overflow-x-scroll no-scrollbar">
            <div className="pdf-wrapper flex py-[8vw] md:py-[5vw] lg:py-[5vw] xl:py-[5vw] gap-[5vw] md:gap-[3vw] lg:gap-[3vw] xl:gap-[3vw]">
              {pdfDocuments.map((pdf, index) => (
                <div
                  key={index}
                  className="relative h-[97vw] md:h-[51vw] lg:h-[50vw] xl:h-[38vw] w-[68vw] md:w-[37vw] lg:w-[45vw] xl:w-[36.5vw] p-[6vw] md:p-[3vw] lg:p-[4vw] xl:p-[4vw] rounded-[28px] bg-[hsla(227,60%,17%,1)] shadow-lg flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >
                  
                  <Image className="h-[40vw] md:h-[22vw] lg:h-[20vw] xl:h-[15vw] rounded-[28px] object-cover pointer-events-none select-none"
                    src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
                    alt="Image"
                    width={613}
                    height={496}
                    unoptimized={true}
                    priority={false}
                  />
                  <div className="flex flex-col w-full mt-[5.2vw] md:mt-[2.5vw] lg:mt-[2.5vw] xl:mt-[2.5vw]">
                    <div>
                      <h2 className="text-left font-poppins text-[4.3vw] md:text-[2.2vw] lg:text-[2.2vw] xl:text-[1.8vw] font-bold">
                        {pdf.title}
                      </h2>
                    </div>
                    <div className="cursor-pointer text-[3vw] md:text-[1.4vw] lg:text-[1.4vw] xl:text-[1.1vw]">
                      {isIntroTextVisible[index] ? (
                        <p className="font-acumin leading-[15px] lg:leading-[24.5px] mt-[1.5vw] md:mt-[2vw] lg:mt-[2.5vw] xl:mt-[1.5vw]">
                          {pdf.description || "Two lines about the project."}
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
                    <button onClick={() => openResource(pdf.link)} className="buttonBG text-sm lg:text-lg text-white md:px-4 rounded-[28px] h-[25px] w-[60px] lg:h-[30px] lg:w-[100px]">
                      link
                    </button>
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

export default EnigmaPage;
