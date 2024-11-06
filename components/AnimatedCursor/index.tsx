"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [clickable, setClickable] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event) => {
      const tagName = event.target.tagName.toLowerCase();
      const isClickable = tagName === "a" || tagName === "button" || event.target.onclick || event.target.hasAttribute('href');
      setClickable(isClickable);
    };

    const handleMouseOut = () => {
      setClickable(false);
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1068);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    const updateCursorPosition = () => {
      setCursorPosition((prev) => {
        const x = prev.x + (position.x - prev.x) * 0.1; // Adjust the multiplier (0.1) for more or less delay
        const y = prev.y + (position.y - prev.y) * 0.1;
        return { x, y };
      });
      requestAnimationFrame(updateCursorPosition);
    };

    updateCursorPosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, [position]);

  if (!isLargeScreen) {
    return null; // Do not render the cursor on small screens
  }

  return (
    <div
      style={{
        position: "fixed",
        top: cursorPosition.y + "px",
        left: cursorPosition.x + "px",
        width: clickable ? "40px" : "20px",
        height: clickable ? "40px" : "20px",
        backgroundColor: "hsla(155,89%,51%,1)",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s ease-in-out, width 0.1s ease-in-out, height 0.1s ease-in-out",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        fontSize: "25px",
        fontWeight: "bold",
      }}
    >
      {clickable && "→"}
    </div>
  );
};

export default CustomCursor;
