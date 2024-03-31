import React from 'react';
import YouTubePodcasts from "@/components/Podcasts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - Podcasts",
  description: "This is Home for Solid Pro",
};


const PodcastsPage: React.FC = () => {
  return (
    <div className="bg-background">
      <YouTubePodcasts />
    </div>
  );
};

export default PodcastsPage;
