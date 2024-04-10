import React from "react";
import Enigma from "@/components/AboutUs";
import { Metadata } from "next";
import TestimonialsSections from '@/components/TripsPhotos';
import Trip from '@/components/trips';

export const metadata: Metadata = {
  title: "About SIGMA",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Enigma />
      {/* <TestimonialsSections /> */}
      <Trip />
    </div>
  );
};

export default SupportPage;
