import React from "react";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "This is Home for Solid Pro",
  // other metadata
};

const TeamPage = () => {
  return (
    <div>
      {/* Render Team component here */}
      <Team />
    </div>
  );
};

export default TeamPage;
