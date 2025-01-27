import { Metadata } from "next";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
import MembersProjects from '@/components/membersprojects';
import DaCs from '@/components/DaCs';
import TestimonialsSections from '@/components/Testimonial';

export const metadata: Metadata = {
  title: "SIGMA - The Official Business Club of NITT",
  icons: '/images/sigma symbol.png',
  description: "Sigma - The Official Business Club of NIT Trichy. Data Analytics, Case Studies, Business Analytics, Quantitative Finance, Forecasting, Predicting.",
}; 

export default function Home() {
  return (
    <main>
      <div className="w-full">
        <div>
          <Hero />
          <MembersProjects />
          <div>
            <div className="mt-[13px]">
              <WhoAreWe />
            </div>
            <div className="mt-[13px]">
              <DaCs />
            </div>
            <TestimonialsSections />
          </div>
        </div>
      </div>
    </main>
  );
}
