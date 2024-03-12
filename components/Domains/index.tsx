"use client"
import React from 'react';

const MyComponent: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '130vh',
    };

    const tableStyle: React.CSSProperties = {
        borderCollapse: 'collapse',
        width: '80%',
        height: '60%',
    };

    const leftCellStyle: React.CSSProperties = {
        width: '30%',
        border: '3px solid white',
        padding: '8px',
        textAlign: 'left',
    };

    const rightCellStyle: React.CSSProperties = {
        width: '70%',
        border: '3px solid white',
        padding: '8px',
        textAlign: 'left',
        position: 'relative', 
    };

    const imageStyleda: React.CSSProperties = {
        position: 'absolute',
        top: '-50px', 
        right: '-20px', 
        width: '400px', 
        height: '400px',
    };

    const imageStylecs: React.CSSProperties = {
        position: 'absolute',
        top: '280px', 
        right: '520px', 
        width: '260px',
        height: '260px', 
    };

    const boxStyle1: React.CSSProperties = {
        position: 'absolute',
        top: '150px',
        left: '700px',
        width: '200px',
        height: '150px',
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        lineHeight: '3',
        borderRadius: '6px',
        fontFamily: 'Arial, sans-serif', 
    };
    
    const boxStyle2: React.CSSProperties = {
        position: 'absolute',
        top: '650px',
        left: '1000px',
        width: '200px',
        height: '150px',
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        lineHeight: '3',
        borderRadius: '6px',
        fontFamily: 'Arial, sans-serif',
    };
    
    const headingStyle: React.CSSProperties = {
        fontSize: '20px', 
        fontWeight: 'bold', 
        margin: '0', 
    };
    
    const contentStyle: React.CSSProperties = {
        fontSize: '14px', 
        fontWeight: 'normal', 
        margin: '0', 
    };

    const domainStyle: React.CSSProperties = {
        fontSize: '50px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: 'white',
    }

    const domainStyleText: React.CSSProperties = {
        fontSize: '17px',
        fontWeight: 'normal',
        textAlign: 'center',
        color: 'white',
    }

    const linkStyle1: React.CSSProperties = {
        position: 'absolute',
        top: '280px',
        right: '130px',  
        zIndex: 2,  
        color: 'cyan',  // Set color to blue
        textDecoration: 'underline',  // Add underline
    };  
    
    const linkStyle2: React.CSSProperties = {
        position: 'absolute',
        top: '520px',
        right: '600px',  
        zIndex: 2,  
        color: 'cyan',  // Set color to blue
        textDecoration: 'underline',  // Add underline
    };   
    
    return (
        <div style={containerStyle}>
            <table style={tableStyle}>
                <tbody>
                    <tr>
                        <td style={leftCellStyle}>
                            <h1 style={domainStyle}>Domains</h1>
                            <br></br>
                            <p style={domainStyleText}>We work on following domains</p>
                        </td>
                        <td style={rightCellStyle}>
                            <img src="/images/analytics logo.png" alt="Image Alt Text" style={imageStyleda} />
                            <br></br>
                            <a href="/dataanalytics" style={linkStyle1}>View Projects</a>
                            <img src="/images/casestudies logo.png" alt="Image Alt Text" style={imageStylecs} />
                            <br></br>
                            <a href="/casestudies" style={linkStyle2}>View Projects</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={boxStyle1}>
                <h2 style={headingStyle}>Analytics</h2>
                <p style={contentStyle}>We do Data Analytics</p>
            </div>

            <div style={boxStyle2}>
                <h2 style={headingStyle}>Case Studies</h2>
                <p style={contentStyle}>We do case studies</p>
            </div>
        </div>
    );
};

export default MyComponent;
