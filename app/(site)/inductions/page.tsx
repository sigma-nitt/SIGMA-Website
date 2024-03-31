import React from 'react';
import Inductions from "@/components/Inductions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA NITT",
  description: "This is Home for Solid Pro",
  // other metadata
};


const PodcastsPage: React.FC = () => {
  return (
    <div>
      <Inductions />
    </div>
  );
};

export default PodcastsPage;
