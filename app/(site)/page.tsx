import { Metadata } from "next";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
// import MeetOurTeamPage from "@/components/Team";

export const metadata: Metadata = {
  title: "SIGMA NITT",
  description: "Sigma - The Official Business Club of NIT Trichy. Data Analytics, Case Studies, Business Analytics, Quantitative Finance, Forecasting, Predicting.",
  // other metadata
}; 

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoAreWe />
    </main>
  );
}
