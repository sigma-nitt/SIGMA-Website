import React from "react";
import Event from "@/components/Events";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SIGMA - Events",
    description: "This is Home for Solid Pro",
};

const TeamPage = () => {
    return (
      <div>
        <Event />
      </div>
    );
  };
  
export default TeamPage;