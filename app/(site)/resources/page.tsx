import React from 'react';
import YouTubePodcasts from "@/components/Resources";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA NITT",
  description: "This is Home for Solid Pro",
  // other metadata
};


const PodcastsPage: React.FC = () => {
  return (
    <div>
      <YouTubePodcasts />
    </div>
  );
};

export default PodcastsPage;
