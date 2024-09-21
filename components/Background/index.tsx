// export default function Background() {
//   return (
//     <div className="pointer-events-none fixed z-[-1] flex min-h-screen w-screen justify-center p-[120px_24px_160px_24px] before:absolute before:top-0 before:z-[2] before:h-full before:w-full before:bg-landing-gradient after:absolute after:top-0 after:z-[-1] after:h-full after:w-full after:bg-[url('/images/grid.svg')] after:opacity-[.2] after:invert-[1]">
//       <div className="absolute top-[80px] z-[3]  h-full w-full max-w-2xl bg-landing-gradient-2 opacity-[0.15] blur-[100px] saturate-[150%]" />
//     </div>
//   )
// }




export default function Background() {
  return (
    <div className="pointer-events-none fixed z-[-1] min-h-screen w-screen bg-[linear-gradient(229.1deg,#313ED0_-35.29%,#232971_30.74%,#0E113A_56.42%)]">
    </div>
  );
}






// // components/BackgroundSwitcher.tsx
// import React, { useEffect, useState } from 'react';
// import BegBackground from './BegBackground';
// import MidBackground from './MidBackground';
// import EndBackground from './EndBackground';

// const Background: React.FC = () => {
//   const [currentBackground, setCurrentBackground] = useState<number>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBackground((prev) => (prev + 1) % 3); // Cycle between 0, 1, 2
//     }, 6000); // 6 seconds interval for each background
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div className="background-container pointer-events-none fixed z-[-1] min-h-screen w-full bg-[linear-gradient(229.1deg,#313ED0_-35.29%,#232971_30.74%,#0E113A_56.42%)]">
//       {currentBackground === 0 && <BegBackground />}
//       {currentBackground === 1 && <MidBackground />}
//       {currentBackground === 2 && <EndBackground />}
//     </div>
//   );
// };

// export default Background;
