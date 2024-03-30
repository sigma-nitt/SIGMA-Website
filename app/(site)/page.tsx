import { Metadata } from "next";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
import ExploreOur from "@/components/ExploreOur";
import Domains from '@/components/Domains';
import MembersProjects from '@/components/membersprojects'
import DaCs from '@/components/DaCs'
import TestimonialsSections from '@/components/Testimonial'

export const metadata: Metadata = {
  title: "SIGMA NITT",
  description: "Sigma - The Official Business Club of NIT Trichy. Data Analytics, Case Studies, Business Analytics, Quantitative Finance, Forecasting, Predicting.",
  // other metadata
}; 

export default function Home() {
  return (
    <main>
      {/* <div className="bg-blue-950 relative overflow-hidden">
        <div className="bg-blue-950" style={{ borderRadius: '0 0 50% 50%', overflow: 'hidden'}}>
          <Hero />
        </div>

        <div className="bg-blue-50 p-4" style={{ backgroundImage: `url('/images/business.jpg')`, opacity: '0.4', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '-18vw', paddingTop: '0vw', clipPath: 'ellipse(100% 80% at 50% 100%)' }}>
          <WhoAreWe />
        </div>

        <MembersProjects />
        <div className="bg-black">
          <Domains />
          <ExploreOur />
        </div>
      </div>  */}
      <div>
        <div style={{ 
          backgroundImage: `url('/images/bkg.jpg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          minHeight: '100vh', /* Set a minimum height to ensure the background covers the entire viewport */
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '80px'
          }}>
          <Hero />
        </div>
        <MembersProjects />
        <div className="p-5 md:p-15">
          <div className="bg-background p-4 w-70">
            <WhoAreWe />
          </div>
          <DaCs />
          <TestimonialsSections />
        </div>
      </div>

      
    </main>
  );
}

