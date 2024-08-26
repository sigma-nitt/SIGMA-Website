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
        const response = await fetch("/api/reportDA");
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
        <h1 className="h-[87px] text-center text-4xl pb-2 font-semibold lg:text-5xl md:text-4xl md:pr-10 md:leading-none">
          <span className="gradient-textDA font-poppins">
            Excatavate the insights!
          </span>
        </h1>
      </div>

      <div className="backgroundGradientDA">
        <div className="w-[95%] lg:w-[90%] ml-[20px] md:ml-[80px]">
          <div
            ref={sliderRef}
            className="h-[1003px] md:h-[1003px] flex flex-col overflow-x-scroll no-scrollbar"
          >
            {/* First row */}
            <div className="da-wrapper flex mt-[35px] lg:mt-[67px] w-[95%]">
              {firstRowDocs.map((pdf, index) => (
                
              <div
                key={index}
                className="relative mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
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
                    <h2 className="font-poppins text-[20px] lg:text-[17.13px] font-bold">
                      {pdf.title}
                    </h2>
                  </div>
                  <div
                    className="text-[12px] lg:text-[13px] w-[235px] lg:w-[276.54px] leading-[20px] lg:leading-[14px] cursor-pointer mt-[15px] lg:mt-[10px]"
                  >
                    {isIntroTextVisible[index] ? (
                      <p className="introtext font-poppins font-bold">
                        {pdf.description || "Two lines about the project."}
                      </p>
                    ) : (
                      <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
                        <div className="hamburger-line w-full h-[5px] md:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-full h-[5px] md:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                        <div className="hamburger-line w-[50%] h-[5px] md:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute top-[40px] left-[135px] md:top-[44px] md:left-[204px]">
                  <button
                    onClick={() => openFlipbook(pdf)}
                    className="buttonBG text-sm md:text-[12.24px] text-white md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[28.75px] md:w-[91.77px]"
                  >
                    View PDF
                  </button>
                </div>
              </div>
              ))}
            </div>
            {/* Second row */}
            <div className="da-wrapper flex mt-[35px] lg:mt-[20px] w-[95%]">
              {secondRowDocs.map((pdf, index) => (
                <div
                  key={index}
                  className="relative mr-[20px] lg:mr-[80px] w-[290px] lg:w-[342px] h-[400px] lg:h-[398.9px] rounded-[17.13px] bg-[hsla(227,60%,17%,1)] mt-[20px] lg:mt-[7px] shadow-lg flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => toggleIntroText(index)}
                >
                  <img
                    src={pdf.coverPage ? imageUrlFor(pdf.coverPage).url() : ""}
                    alt="Introductory Image"
                    className="h-[150px] lg:h-[174.98px] w-[250px] lg:w-[278.98px] rounded-[17.13px] mt-[30px] lg:mt-[30px] object-cover"
                  />
                  <div className="flex flex-col mt-[20px]">
                    <div>
                      <h2 className="font-poppins text-[20px] lg:text-[17.13px] font-bold">
                        {pdf.title}
                      </h2>
                    </div>
                    <div
                      className="text-[12px] lg:text-[13px] w-[235px] lg:w-[276.54px] leading-[14px] lg:leading-[18px] cursor-pointer mt-[15px] lg:mt-[10px]"
                    >
                      {isIntroTextVisible[index] ? (
                        <p className="introtext font-poppins font-bold">
                          {pdf.description || "Two lines about the project."}
                        </p>
                      ) : (
                        <div className="flex flex-col mt-[15px] gap-[15px] lg:gap-[14.07px]">
                          <div className="hamburger-line w-full h-[5px] md:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                          <div className="hamburger-line w-full h-[5px] md:w-[276.54px] md:h-[6.73px] rounded-[10px]"></div>
                          <div className="hamburger-line w-[50%] h-[5px] md:w-[138.27px] md:h-[6.73px] rounded-[10px]"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-[40px] left-[135px] md:top-[44px] md:left-[204px]">
                    <button
                      onClick={() => openFlipbook(pdf)}
                      className="buttonBG text-sm md:text-[12.24px] text-white md:px-4 rounded-[28px] h-[30px] w-[120px] md:h-[28.75px] md:w-[91.77px]"
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
