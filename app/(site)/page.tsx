import { Metadata } from "next";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
// import MeetOurTeamPage from "@/components/Team";

export const metadata: Metadata = {
  title: "SIGMA NITT",
  description: "This is Home for Solid Pro",
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
