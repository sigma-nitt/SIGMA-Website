"use client"
import React, { useState, useEffect } from 'react';
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
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

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

  const openPdf = (url: string) => {
    setSelectedPdf(url);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
    </div>
  );
  if (error) return <p>Error :(</p>;

  return (
    <div style={{ maxWidth: '5000px', margin: '0 auto' }}>
      <div className="p-4 mb-8" style={{ textAlign: 'center' }}>
        <h1 className="hdng bg-secondary-gradient-2 bg-clip-text text-transparent text-4xl font-bold md:text-6xl">
          TAKE A LOOK AT OUR MAGAZINE!
        </h1>
      </div>

      {pdfDocuments.map((pdf, index) => (
        <div className="box bg-white p-4" key={index} style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '80%', margin: '0 auto', marginBottom: '80px' }}>
          <div style={{ display: 'flex' }}>
            <div className="pdf-box" style={{ width: '70%', marginRight: '2%' }}>
              <iframe
                className="pdf-front"
                src={pdf.url}
                style={{ width: '100%', height: '500px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                frameBorder="0"
                scrolling="auto"
              ></iframe>
            </div>
            <div className="desc-box" style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '2%' }}>
              <div>
                <h2 className="pdf-title font-bold text-4xl text-blue-600 text-center mb-5 mt-5" style={{ wordWrap: 'break-word' }}>
                  {pdf.title}
                </h2>
                <p className="pdf-desc text-black text-center text-sm" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', margin: '0 auto' }}>
                  {pdf.description}
                </p>
              </div>
              <button
                className="enlarge-button bg-blue-500 text-white p-2 w-2/5"
                style={{ borderRadius: '20px', cursor: 'pointer', margin: '0 auto' }}
                onClick={() => openPdf(pdf.url)}
              >
                Enlarge View
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedPdf && (
        <div className="pdf-overlay">
          <div className="pdf-container">
            <button
              className="bg-blue-500 text-white p-2"
              onClick={closePdf}
              style={{ borderRadius: '20px', position: 'absolute', top: '150px', right: '30px', zIndex: 10000 }}
            >
              Collapse
            </button>
            <iframe
              src={selectedPdf}
              style={{ width: '90%', height: 'calc(40% - 0px)', position: 'absolute', top: '150px', left: 20, zIndex: 9999 }}
              frameBorder="0"
              scrolling="auto"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
