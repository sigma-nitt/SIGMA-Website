// import { Metadata } from "next";
// import Hero from "@/components/Hero";
// import WhoAreWe from "@/components/WhoAreWe";
// import ExploreOur from "@/components/ExploreOur";
// import Domains from '@/components/Domains';

// // Import the background image
// import backgroundImage from './images/dowbload.jpg';

// export const metadata: Metadata = {
//   title: "SIGMA NITT",
//   description: "Sigma - The Official Business Club of NIT Trichy. Data Analytics, Case Studies, Business Analytics, Quantitative Finance, Forecasting, Predicting.",
//   // other metadata
// }; 

// export default function Home() {
//   return (
//     <main>
//       <div className="bg-blue-950 relative overflow-hidden">
//         <div className="bg-blue-950" style={{ borderRadius: '0 0 50% 50%', overflow: 'hidden'}}>
//           <Hero />
//         </div>

//         <div className="bg-blue-50 p-4" style={{ backgroundImage: `url('/images/dowbload.jpg')`, opacity: '0.5', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '-18vw', paddingTop: '0vw', clipPath: 'ellipse(100% 80% at 50% 100%)' }}>
//           <WhoAreWe />
//         </div>

//         <div className="members-projects"
//           style={{
//             background: 'linear-gradient(to right, #0074cc, #001b40)',
//             height: '40vh',
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             padding: '0 20px',
//           }}
//         >
//           <div style={{ textAlign: 'center', margin: '10px', flex: 1 }}>
//             <h1 style={{ fontSize: '3em', marginBottom: '10px', fontWeight: 'bold', color: 'white'}}>50+<br /><br />Projects</h1>
//             <div style={{ borderTop: '12px solid white', width: '30%', margin: 'auto', marginTop: '60px', marginBottom: '10px', borderRadius: '10px' }}></div>
//           </div>

//           <div style={{ textAlign: 'center', margin: '10px', flex: 1 }}>
//             <h1 style={{ fontSize: '3em', marginBottom: '10px', fontWeight: 'bold', color: 'white'}}>30+<br /><br />Members</h1>
//             <div style={{ borderTop: '12px solid white', width: '30%', margin: 'auto', marginTop: '60px', marginBottom: '10px', borderRadius: '20px' }}></div>
//           </div>
//         </div>
          
//         <Domains />
//         <ExploreOur />
      
//       </div> 
//     </main>
//   );
// }


import { Metadata } from "next";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
import ExploreOur from "@/components/ExploreOur";
import Domains from '@/components/Domains';
import MembersProjects from '@/components/membersprojects'

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

        <div className="bg-blue-50 p-4" style={{ backgroundImage: `url('/images/business.jpg')`, opacity: '0.4', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '-18vw', paddingTop: '0vw', clipPath: 'ellipse(100% 80% at 50% 100%)' }}>
          <WhoAreWe />
        </div>

        <MembersProjects />
        <Domains />
        <ExploreOur />
      
      </div> 
    </main>
  );
}

