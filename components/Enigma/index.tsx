"use client";
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

//   return (
//     <div style={{ maxWidth: '5000px', margin: '0 auto' }}>
//       {pdfDocuments.map((pdf, index) => (
//         <div key={index} style={{ marginBottom: '20px', background: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '80%', margin: '0 auto' }}>
//           <div style={{ display: 'flex' }}>
//             <div style={{ width: '70%', marginRight: '10%' }}>
//               <iframe
//                 src={pdf.url}
//                 style={{ width: '100%', height: '800px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
//                 frameBorder="0"
//                 scrolling="auto"
//               ></iframe>
//             </div>
//             <div style={{ width: '30%' }}>
//               <h2 style={{ fontWeight: 'bold', fontSize: '24px', color: 'blue' }}>{pdf.title}</h2>
//               <p style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>{pdf.description}</p> {/* Updated styling here */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PDFViewer;


  return (
    <div className="w-3/4 mx-auto mt-custom">
      {pdfDocuments.map((pdf: PDFDocument, index: number) => (
        <div key={index} className={`mt-${index === pdfDocuments.length - 1 ? '5' : '20'} mb-${index === pdfDocuments.length - 1 ? '10' : '5'} lg:flex items-center bg-gray-100 rounded-lg p-8 shadow-md`}>
          <div className="w-full lg:w-1/2 lg:mr-8 mb-4 lg:mb-0">
            {/* For larger screens, text on left */}
            <h2 className="font-bold text-2xl text-center lg:text-center text-blue-500">{pdf.title}</h2>
            <p className="text-center lg:text-center break-words">{pdf.description}</p>
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <iframe
              src={pdf.url}
              className="w-full h-96 md:h-120 lg:h-96 xl:h-144 rounded-lg shadow-md"
              frameBorder="0"
              scrolling="auto"
            ></iframe>
          </div>
        </div> 
      ))}
    </div>
  );
};
export default PDFViewer;