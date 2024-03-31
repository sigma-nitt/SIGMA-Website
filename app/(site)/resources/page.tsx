import React from 'react';
import Resources from "@/components/Resources";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - Resources",
  description: "This is Home for Solid Pro",
  // other metadata
};


const PodcastsPage: React.FC = () => {
  return (
    <div>
      <Resources />
    </div>
  );
};

export default PodcastsPage;
