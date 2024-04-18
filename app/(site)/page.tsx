import { Metadata } from "next";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
import MembersProjects from '@/components/membersprojects';
import DaCs from '@/components/DaCs';
import TestimonialsSections from '@/components/Testimonial';

export const metadata: Metadata = {
  title: "SIGMA NITT",
  description: "Sigma - The Official Business Club of NIT Trichy. Data Analytics, Case Studies, Business Analytics, Quantitative Finance, Forecasting, Predicting.",
}; 

export default function Home() {
  return (
    <main>
      <div>
        {/* <div style={{ 
          backgroundImage: `url('/images/bkg.jpg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '80px',
          }}>
          <Hero />
        </div> */}
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '80px',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundImage: `url('/images/bkg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.4,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          />
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

