"use client"
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y + 'px',
        left: position.x + 'px',
        width: '20px',
        height: '20px',
        backgroundColor: 'green',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-in-out',
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
