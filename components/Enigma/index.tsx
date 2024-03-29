"use client"
// components/PDFViewer/index.tsx
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
      {/* <div className="bg-white p-4 mb-8 mt-5">
        <h1 className="text-6xl text-center text-slate-500 " style={{ fontFamily: 'impact'}}> */}
      <div className="p-4 mb-8">
        <h1 className="bg-secondary-gradient-2 bg-clip-text text-transparent text-6xl text-center text-slate-500" style={{ fontFamily: 'impact'}}>
          TAKE A LOOK AT OUR MAGAZINE !
        </h1>
      </div>

      {pdfDocuments.map((pdf, index) => (
        <div key={index} style={{ marginBottom: '40px', background: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '80%', margin: '0 auto' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '70%', marginRight: '2%' }}>
              <iframe
                src={pdf.url}
                style={{ width: '100%', height: '500px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                frameBorder="0"
                scrolling="auto"
              ></iframe>
            </div>
            <div style={{ width: '30%', margin: 'auto', textAlign: 'center' }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '45px', color: 'blue', marginBottom: '20px', fontFamily: 'tahoma', marginTop: '40px' }}>{pdf.title}</h2>
              <p style={{ overflowWrap: 'break-word', wordWrap: 'break-word', color:'black' }}>{pdf.description}</p>
              <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px', borderRadius: '20px', cursor: 'pointer', marginTop:'20px' }} onClick={() => openPdf(pdf.url)}>Enlarge View</button>
            </div>
          </div>
        </div>
      ))}
      {selectedPdf && (
        <div className="pdf-overlay">
          <div className="pdf-container">
            <button onClick={closePdf} style={{ backgroundColor: 'blue', color: 'white', borderRadius: '20px', padding: '8px', position: 'absolute', top: '230px', right: '30px', zIndex: 10000 }}>Collapse</button>
            <iframe
              src={selectedPdf}
              style={{ width: '90%', height: 'calc(50% - 0px)', position: 'absolute', top: '150px', left: 20, zIndex: 9999 }}
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
