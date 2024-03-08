// import { Metadata } from "next";
// import Hero from "@/components/Hero";
// import WhoAreWe from "@/components/WhoAreWe";
// // import LoadingAnimation from '@/components/loadingPage';
// // import MeetOurTeamPage from "@/components/Team";

// export const metadata: Metadata = {
//   title: "SIGMA NITT",
//   description: "Sigma - The Official Business Club of NIT Trichy. Data Analytics, Case Studies, Business Analytics, Quantitative Finance, Forecasting, Predicting.",
//   // other metadata
// }; 

// export default function Home() {
//   return (
//     <main>
//       <div className="bg-blue-50">
//         <div className="bg-blue-950" style={{ borderBottomLeftRadius: '90% 25%', borderBottomRightRadius: '90% 25%'}}>
//           <Hero />
//         </div>
//         <div className="bg-blue-50 p-4">
//           <WhoAreWe />
//         </div>
//       </div> 
//     </main>
//   );
// }




// import { Metadata } from "next";
// import Hero from "@/components/Hero";
// import WhoAreWe from "@/components/WhoAreWe";

// export const metadata: Metadata = {
//   title: "SIGMA NITT",
//   description: "Sigma - The Official Business Club of NIT Trichy. Data Analytics, Case Studies, Business Analytics, Quantitative Finance, Forecasting, Predicting.",
//   // other metadata
// }; 

// export default function Home() {
//   return (
//     <main>
//       <div className="bg-blue-50 relative">
//         <div className="bg-blue-950" style={{ borderBottomLeftRadius: '90% -25%', borderBottomRightRadius: '90% -25%'}}>
//           <Hero />
//         </div>
//         <div className="absolute bottom-0 left-0 right-0">
//           <img
//             src=".\wallapapper.avif"
//             alt="Your Image Alt Text"
//             style={{ width: '100%', height: 'auto' }}
//           />
//         </div>
//         <div className="bg-blue-50 p-4">
//           <WhoAreWe />
//         </div>
//       </div> 
//     </main>
//   );
// }





import { Metadata } from "next";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";

// Import the background image
import backgroundImage from './images/dowbload.jpg';

export const metadata: Metadata = {
  title: "SIGMA NITT",
  description: "Sigma - The Official Business Club of NIT Trichy. Data Analytics, Case Studies, Business Analytics, Quantitative Finance, Forecasting, Predicting.",
  // other metadata
}; 

export default function Home() {
  return (
    <main>
      <div className="bg-blue-950 relative overflow-hidden">
        <div className="bg-blue-950" style={{ borderRadius: '0 0 50% 50%', overflow: 'hidden'}}>
          <Hero />
        </div>
        <div className="bg-blue-50 p-4" style={{ backgroundImage: `url('/images/dowbload.jpg')`, opacity: '0.5', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '-18vw', paddingTop: '0vw', clipPath: 'ellipse(100% 80% at 50% 100%)' }}>
          <WhoAreWe />
        </div>
      </div> 
    </main>
  );
}

