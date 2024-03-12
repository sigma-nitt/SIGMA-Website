import React from 'react';
import YouTubePodcasts from "@/components/Podcasts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - Podcasts",
  description: "This is Home for Solid Pro",
};


const PodcastsPage: React.FC = () => {
  return (
    <div>
      <YouTubePodcasts />
    </div>
  );
};

export default PodcastsPage;
