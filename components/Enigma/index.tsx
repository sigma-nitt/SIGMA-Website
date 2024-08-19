"use client";
import React, { useState, useEffect, useRef } from 'react';
import './enigma.css';

interface PDFDocument {
  title: string;
  description: string;
  url: string;
}

const PDFViewer: React.FC = () => {
  const [pdfDocuments, setPDFDocuments] = useState<PDFDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isIntroTextVisible, setIsIntroTextVisible] = useState<boolean[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPDFDocuments = async () => {
      try {
        const response = await fetch('/api/enigmaPdf');
        if (!response.ok) {
          throw new Error('Failed to fetch PDF documents');
        }
        const data = await response.json();
        setPDFDocuments(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching PDF documents:', error);
        setError(true);
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
                  <div className="w-full h-[200px] lg:h-[315px] mb-4">
                    <iframe
                      src={pdf.url}
                      style={{ width: '100%', height: '100%', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                      frameBorder="0"
                      scrolling="auto"
                    ></iframe>
                  </div>
                  <div className="flex flex-col lg:mt-[39px]">
                    <h2 className="text-center lg:text-left font-poppins text-[20px] lg:text-[28px] font-bold">
                      {pdf.title.toUpperCase()}
                    </h2>
                    <div className="text-[12px] lg:text-[19px] mt-[5px] w-[90%] lg:w-[456px] lg:mt-[25px] ml-[15px] lg:ml-[0px] leading-[20px] lg:leading-[34px] cursor-pointer">
                      {isIntroTextVisible[index] ? (
                        <p className="font-poppins font-bold lg:leading-[28.5px]">
                          {pdf.description || "Description not available."}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
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

export default PDFViewer;