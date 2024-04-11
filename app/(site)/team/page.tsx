import React from "react";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "This is Home for Solid Pro",
};

const TeamPage = () => {
  return (
    <div>
      <Team />
    </div>
  );
};

export default TeamPage;
