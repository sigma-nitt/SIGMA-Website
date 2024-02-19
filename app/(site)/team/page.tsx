import React from "react";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA NITT",
  description: "This is Home for Solid Pro",
  // other metadata
};

const TeamPage = () => {
  return (
    <div className="pb-20 pt-40">
      {/* Render Team component here */}
      <Team />
    </div>
  );
};

export default TeamPage;
