import React from "react";
import AboutUs from "@/components/AboutUs";
import { Metadata } from "next";
import Trip from '@/components/trips';

export const metadata: Metadata = {
  title: "About SIGMA",
  description: "This is Support page for Solid Pro",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <AboutUs />
      <Trip />
    </div>
  );
};

export default SupportPage;
