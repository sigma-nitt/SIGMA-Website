// // components/ReportPage.tsx
// "use client"
// // components/ReportPage.tsx
// import React, { useState, useEffect } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
// import client from '@/sanityClient'; // Import your Sanity client instance
// import PortableText from '@sanity/block-content-to-react';

// interface Subheading {
//   _type: 'subheading';
//   value: string;
//   color?: string;
//   fontSize?: number;
// }

// interface RichText {
//   _type: 'richText';
//   value: any[]; // Change to match the structure you get from the rich text editor
//   color?: string;
//   fontSize?: number;
// }

// interface ImageWithCaption {
//   _type: 'imageWithCaption';
//   image: { asset: { _ref: string } };
//   caption: string;
//   borderColor?: string;
//   borderWidth?: number;
// }

// interface BulletList {
//   _type: 'bulletList';
//   items: any[]; // Change to match the structure you get from the rich text editor
//   color?: string;
//   fontSize?: number;
// }

// type ContentItem = Subheading | RichText | ImageWithCaption | BulletList;

// interface ReportContent {
//   heading: string;
//   content: ContentItem[];
// }

// const builder = imageUrlBuilder(client);
// const imageUrlFor = (source: any) => builder.image(source);

// const ReportPage = () => {
//   const [reportData, setReportData] = useState<ReportContent | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchReportData = async () => {
//       try {
//         const response = await fetch('/api/report');
//         if (!response.ok) {
//           throw new Error('Failed to fetch report data');
//         }
//         const data = await response.json();
//         console.log('Report Data:', data);
//         setReportData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchReportData();
//   }, []);

//   if (loading) return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
//     </div>
//   );

//   if (error) return <p>Error :(</p>;

//   return (
//     <div className="text-center bg-white p-8 rounded-lg shadow-md mx-auto max-w-screen-md">
//       <h1 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold', color: '#2b6cb0' }}>
//         REPORT
//       </h1>
//       {reportData && reportData.content && reportData.content.length > 0 ? (
//         <div>
//           {reportData.content.map((contentItem, index) => (
//             <div key={index} className="mb-4">
//               {contentItem._type === 'subheading' && (
//                 <h3
//                   style={{
//                     fontSize: contentItem.fontSize + 'px',
//                     fontWeight: 'bold',
//                     color: contentItem.color,
//                   }}
//                 >
//                   {contentItem.value}
//                 </h3>
//               )}
//               {contentItem._type === 'richText' && (
//                 <div
//                   className="left-aligned"
//                   style={{
//                     color: contentItem.color,
//                     fontSize: contentItem.fontSize + 'px',
//                     textAlign: 'left',
//                   }}
//                 >
//                   {contentItem.value && (
//                     <ul>
//                       {contentItem.value.map((item, index) => (
//                         <li key={index}>
//                           <PortableText blocks={item} />
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               )}

//               {contentItem._type === 'bulletList' && (
//                 <div
//                   className="left-aligned"
//                   style={{
//                     color: contentItem.color,
//                     fontSize: contentItem.fontSize + 'px',
//                     textAlign: 'left',
//                   }}
//                 >
//                   {contentItem.items && (
//                     <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
//                       {contentItem.items.map((item, index) => (
//                         <li key={index}>
//                           <PortableText blocks={item} />
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               )}

//               {contentItem._type === 'imageWithCaption' && (
//                 <div className="mb-2">
//                   <img
//                     src={imageUrlFor(contentItem.image).width(800).url()} // Adjust width as needed
//                     alt={contentItem.caption}
//                     style={{
//                       width: '100%',
//                       height: 'auto',
//                       borderColor: contentItem.borderColor,
//                       borderWidth: contentItem.borderWidth + 'px',
//                     }}
//                   />
//                   <p style={{ fontStyle: 'italic', fontSize: '0.875rem', color: '#4a5568' }}>
//                     {contentItem.caption}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No content available</p>
//       )}
//     </div>
//   );
// };

// export default ReportPage;




// // single report
// "use client"
// // components/ReportPage.tsx
// import React, { useState, useEffect } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
// import client from '@/sanityClient';
// import './ReportPage.css';
// import PortableText from '@sanity/block-content-to-react';

// interface Subheading {
//   _type: 'subheading';
//   value: string;
//   color?: string;
//   fontSize?: number;
// }

// interface RichText {
//   _type: 'richText';
//   value: any[];
//   color?: string;
//   fontSize?: number;
// }

// interface ImageWithCaption {
//   _type: 'imageWithCaption';
//   image: { asset: { _ref: string } };
//   caption: string;
//   borderColor?: string;
//   borderWidth?: number;
// }

// interface BulletList {
//   _type: 'bulletList';
//   items: any[];
//   color?: string;
//   fontSize?: number;
// }

// type ContentItem = Subheading | RichText | ImageWithCaption | BulletList;

// interface ReportContent {
//   heading: string;
//   introductoryImage: { asset: { _ref: string } };
//   introductoryText: string;
//   content: ContentItem[];
// }

// const builder = imageUrlBuilder(client);
// const imageUrlFor = (source: any) => builder.image(source);

// const ReportPage: React.FC = () => {
//   const [reportData, setReportData] = useState<ReportContent | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const fetchReportData = async () => {
//       try {
//         const response = await fetch('/api/report');
//         if (!response.ok) {
//           throw new Error('Failed to fetch report data');
//         }
//         const data = await response.json();
//         setReportData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchReportData();
//   }, []);

//   const handleExpand = () => {
//     setExpanded(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const handleCollapse = () => {
//     setExpanded(false);
//     document.body.style.overflow = '';
//   };

//   return (
//     <div className="report-container">
//       <h1 className="report-heading" style={{ marginTop: '15px' }}>
//         {reportData?.heading}
//       </h1>
//       {reportData && (
//         <div>
//           <img
//             src={
//               reportData?.introductoryImage
//                 ? imageUrlFor(reportData.introductoryImage)
//                     .width(400)
//                     .url()
//                 : ''
//             }
//             alt="Introductory Image"
//             className="report-image"
//             style={{ width: '70%', margin: '0 auto'}}
//           />
//           <p className="report-intro-text">
//             {reportData.introductoryText || 'Two lines about the project.'}
//           </p>
//           {!expanded ? (
//             <button onClick={handleExpand} className="expand-button">
//               View full report
//             </button>
//           ) : (
//             <div className="modal-overlay">
//               <div className="modal-content">
//                 <div className="text-center bg-white p-8 rounded-lg shadow-md mx-auto max-w-screen-md">
//                   <h1 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold', color: '#2b6cb0' }}>
//                     REPORT
//                   </h1>
//                   {reportData.content && reportData.content.length > 0 ? (
//                     <div>
//                       {reportData.content.map((contentItem, index) => (
//                         <div key={index} className="mb-4">
//                           {contentItem._type === 'subheading' && (
//                             <h3
//                               style={{
//                                 fontSize: contentItem.fontSize + 'px',
//                                 fontWeight: 'bold',
//                                 color: contentItem.color || '#333',
//                               }}
//                             >
//                               {contentItem.value}
//                             </h3>
//                           )}
  
//                           {contentItem._type === 'richText' && (
//                             <div
//                               className="left-aligned"
//                               style={{
//                                 color: contentItem.color || '#333',
//                                 fontSize: contentItem.fontSize + 'px',
//                                 textAlign: 'left',
//                               }}
//                             >
//                               {contentItem.value && (
//                                 <ul>
//                                   {contentItem.value.map((item, index) => (
//                                     <li key={index}>
//                                       <PortableText blocks={item} />
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                             </div>
//                           )}
  
//                           {contentItem._type === 'bulletList' && (
//                             <div
//                               className="left-aligned"
//                               style={{
//                                 color: contentItem.color || '#333',
//                                 fontSize: contentItem.fontSize + 'px',
//                                 textAlign: 'left',
//                               }}
//                             >
//                               {contentItem.items && (
//                                 <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
//                                   {contentItem.items.map((item, index) => (
//                                     <li key={index}>
//                                       <PortableText blocks={item} />
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                             </div>
//                           )}
  
//                           {contentItem._type === 'imageWithCaption' && (
//                             <div className="mb-2">
//                               <img
//                                 src={imageUrlFor(contentItem.image).width(400).url()}
//                                 alt={contentItem.caption}
//                                 style={{
//                                   width: '80%',
//                                   height: 'auto',
//                                   borderColor: contentItem.borderColor || '#333',
//                                   borderWidth: contentItem.borderWidth + 'px' || '0px',
//                                   display: 'block',
//                                   marginLeft: 'auto',
//                                   marginRight: 'auto',
//                                 }}
//                               />
//                               <p
//                                 style={{
//                                   fontStyle: 'italic',
//                                   fontSize: '0.875rem',
//                                   color: '#4a5568',
//                                 }}
//                               >
//                                 {contentItem.caption}
//                               </p>
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p>No additional content available</p>
//                   )}
//                   <button onClick={handleCollapse} className="collapse-button">
//                     Close Report
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// };

// export default ReportPage;




"use client"
// components/ReportPage.tsx
import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanityClient';
import './ReportPage.css';
import PortableText from '@sanity/block-content-to-react';

interface Subheading {
  _type: 'subheading';
  value: string;
  color?: string;
  fontSize?: number;
}

interface RichText {
  _type: 'richText';
  value: any[];
  color?: string;
  fontSize?: number;
}

interface ImageWithCaption {
  _type: 'imageWithCaption';
  image: { asset: { _ref: string } };
  caption: string;
  borderColor?: string;
  borderWidth?: number;
}

interface BulletList {
  _type: 'bulletList';
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

const builder = imageUrlBuilder(client);
const imageUrlFor = (source: any) => builder.image(source);

const ReportPage: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch('/api/report');
        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }
        const data = await response.json();
        setProjectData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  const handleExpand = (index: number) => {
    setExpandedProjectIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCollapse = () => {
    setExpandedProjectIndex(null);
    document.body.style.overflow = '';
  };

//   return (
//     <div className="report-container">
//       {projectData &&
//         projectData.map((data, index) => (
//           <div key={index}>
//             <h1 className="report-heading" style={{ marginTop: '15px' }}>
//               {data.heading}
//             </h1>
//             <img
//               src={
//                 data.introductoryImage
//                   ? imageUrlFor(data.introductoryImage).width(400).url()
//                   : ''
//               }
//               alt="Introductory Image"
//               className="report-image"
//               style={{ width: '70%', margin: '0 auto'}}
//             />
//             <p className="report-intro-text">
//               {data.introductoryText || 'Two lines about the project.'}
//             </p>
//             {expandedProjectIndex !== index ? (
//               <button onClick={() => handleExpand(index)} className="expand-button">
//                 View full report
//               </button>
//             ) : (
//               <div className="modal-overlay">
//                 <div className="modal-content">
//                   <div className="text-center bg-white p-8 rounded-lg shadow-md mx-auto max-w-screen-md">
//                     <h1 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold', color: '#2b6cb0' }}>
//                       REPORT
//                     </h1>
//                     {data.content && data.content.length > 0 ? (
//                       <div>
//                         {data.content.map((contentItem, index) => (
//                           <div key={index} className="mb-4">
//                             {contentItem._type === 'subheading' && (
//                               <h3
//                                 style={{
//                                   fontSize: contentItem.fontSize + 'px',
//                                   fontWeight: 'bold',
//                                   color: contentItem.color || '#333',
//                                 }}
//                               >
//                                 {contentItem.value}
//                               </h3>
//                             )}

//                             {contentItem._type === 'richText' && (
//                               <div
//                                 className="left-aligned"
//                                 style={{
//                                   color: contentItem.color || '#333',
//                                   fontSize: contentItem.fontSize + 'px',
//                                   textAlign: 'left',
//                                 }}
//                               >
//                                 {contentItem.value && (
//                                   <ul>
//                                     {contentItem.value.map((item, index) => (
//                                       <li key={index}>
//                                         <PortableText blocks={item} />
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 )}
//                               </div>
//                             )}

//                             {contentItem._type === 'bulletList' && (
//                               <div
//                                 className="left-aligned"
//                                 style={{
//                                   color: contentItem.color || '#333',
//                                   fontSize: contentItem.fontSize + 'px',
//                                   textAlign: 'left',
//                                 }}
//                               >
//                                 {contentItem.items && (
//                                   <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
//                                     {contentItem.items.map((item, index) => (
//                                       <li key={index}>
//                                         <PortableText blocks={item} />
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 )}
//                               </div>
//                             )}

//                             {contentItem._type === 'imageWithCaption' && (
//                               <div className="mb-2">
//                                 <img
//                                   src={imageUrlFor(contentItem.image).width(400).url()}
//                                   alt={contentItem.caption}
//                                   style={{
//                                     width: '80%',
//                                     height: 'auto',
//                                     borderColor: contentItem.borderColor || '#333',
//                                     borderWidth: contentItem.borderWidth + 'px' || '0px',
//                                     display: 'block',
//                                     marginLeft: 'auto',
//                                     marginRight: 'auto',
//                                   }}
//                                 />
//                                 <p
//                                   style={{
//                                     fontStyle: 'italic',
//                                     fontSize: '0.875rem',
//                                     color: '#4a5568',
//                                   }}
//                                 >
//                                   {contentItem.caption}
//                                 </p>
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <p>No additional content available</p>
//                     )}
//                     <button onClick={handleCollapse} className="collapse-button">
//                       Close Report
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ReportPage;

  return (
    <div className="report-container">
      {projectData &&
        projectData.map((data, index) => (
          <div key={index} className="report-box">
            <div className="individual-report">
              <h1 className="report-heading" style={{ marginTop: '15px' }}>
                {data.heading}
              </h1>
              <img
                src={
                  data.introductoryImage
                    ? imageUrlFor(data.introductoryImage).width(400).url()
                    : ''
                }
                alt="Introductory Image"
                className="report-image"
                style={{ width: '70%', margin: '0 auto' }}
              />
              <p className="report-intro-text">
                {data.introductoryText || 'Two lines about the project.'}
              </p>
              {expandedProjectIndex !== index ? (
                <button onClick={() => handleExpand(index)} className="expand-button">
                  View full report
                </button>
              ) : (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="text-center bg-white p-8 rounded-lg shadow-md mx-auto max-w-screen-md">
                      <h1 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold', color: '#2b6cb0' }}>
                        REPORT
                      </h1>
                      {data.content && data.content.length > 0 ? (
                        <div>
                          {data.content.map((contentItem, index) => (
                            <div key={index} className="mb-4">
                              {contentItem._type === 'subheading' && (
                                <h3
                                  style={{
                                    fontSize: contentItem.fontSize + 'px',
                                    fontWeight: 'bold',
                                    color: contentItem.color || '#333',
                                  }}
                                >
                                  {contentItem.value}
                                </h3>
                              )}

                              {contentItem._type === 'richText' && (
                                <div
                                  className="left-aligned"
                                  style={{
                                    color: contentItem.color || '#333',
                                    fontSize: contentItem.fontSize + 'px',
                                    textAlign: 'left',
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

                              {contentItem._type === 'bulletList' && (
                                <div
                                  className="left-aligned"
                                  style={{
                                    color: contentItem.color || '#333',
                                    fontSize: contentItem.fontSize + 'px',
                                    textAlign: 'left',
                                  }}
                                >
                                  {contentItem.items && (
                                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                                      {contentItem.items.map((item, index) => (
                                        <li key={index}>
                                          <PortableText blocks={item} />
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              )}

                              {contentItem._type === 'imageWithCaption' && (
                                <div className="mb-2">
                                  <img
                                    src={imageUrlFor(contentItem.image).width(400).url()}
                                    alt={contentItem.caption}
                                    style={{
                                      width: '80%',
                                      height: 'auto',
                                      borderColor: contentItem.borderColor || '#333',
                                      borderWidth: contentItem.borderWidth + 'px' || '0px',
                                      display: 'block',
                                      marginLeft: 'auto',
                                      marginRight: 'auto',
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontStyle: 'italic',
                                      fontSize: '0.875rem',
                                      color: '#4a5568',
                                    }}
                                  >
                                    {contentItem.caption}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No additional content available</p>
                      )}
                      <button onClick={handleCollapse} className="collapse-button">
                        Close Report
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReportPage;