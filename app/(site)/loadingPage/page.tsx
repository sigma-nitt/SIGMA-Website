"use client"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicLoadingAnimation = dynamic(
  () => import('@/components/loadingPage'),
  { loading: () => <p>Loading...</p>, ssr: false }
);

function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulating a delay, you can replace this with your actual loading logic
    const delay = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {!isLoaded && <DynamicLoadingAnimation>{/* Add children here if needed */}</DynamicLoadingAnimation>}
      {isLoaded && <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
