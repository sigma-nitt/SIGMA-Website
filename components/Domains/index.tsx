"use client"
// MyComponent.tsx
import React, { useEffect, useState } from 'react';
import './MyComponent.css';

const MyComponent: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 600);
      };
  
      if (typeof window !== 'undefined') {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);

  const renderTable = () => {
    if (isSmallScreen) {
      return (
        <div className="containersm">
            <table className="tablesm">
                <tbody>
                    <tr>
                    <td className="left-cellsm" colSpan={2}>
                        <h1 className="domain-stylesm">DOMAINS</h1>
                        <p className="domain-style-textsm"></p>
                    </td>
                    </tr>
                    <tr>
                    <td className="right-cellsm" colSpan={2}>
                        <img src="/images/analytics logo.png" alt="Image Alt Text" className="image-styledasm" />

                        <a href="/dataanalytics" className="link-style1sm">View Projects</a>
                        <img src="/images/casestudies logo.png" alt="Image Alt Text" className="image-stylecssm" />
 
                        <a href="/casestudies" className="link-style2sm">View Projects</a>
                    </td>
                    </tr>
                </tbody>
            </table>

            <div className="box-style1sm">
                <h2 className="heading-styledasm">Analytics</h2>
                <p className="content-style"></p>
            </div>

            <div className="box-style2sm">
                <br />
                <h2 className="heading-stylecssm">Case Studies</h2>
                <p className="content-style"></p>
            </div>
        </div>
        
      );
    } else {
      return (
        <div className="container">
            <table className="table">
                <tbody>
                    <tr>
                    <td className="left-cell">
                        <h1 className="domain-style">DOMAINS</h1>
                        <br />
                        <p className="domain-style-text"></p>
                    </td>
                    <td className="right-cell">
                        <img src="/images/analytics logo.png" alt="Image Alt Text" className="image-styleda" />
                        <br />
                        <a href="/dataanalytics" className="link-style1">View Projects</a>
                        <img src="/images/casestudies logo.png" alt="Image Alt Text" className="image-stylecs" />
                        <br />
                        <a href="/casestudies" className="link-style2">View Projects</a>
                    </td>
                    </tr>
                </tbody>
            </table>
        
            <div className="box-style1">
                <br />
                <h2 className="heading-style">Analytics</h2>
                <p className="content-style"></p>
            </div>

            <div className="box-style2">
                <br />
                <h2 className="heading-style">Case Studies</h2>
                <p className="content-style"></p>
            </div>
        </div>
        
      );
    }
  };

  return (
    <div className="container">
        {renderTable()}
    </div>
  );
};

export default MyComponent;
