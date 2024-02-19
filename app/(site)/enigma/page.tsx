import React from "react";
import Enigma from "@/components/Enigma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - Enigma",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Enigma />
    </div>
  );
};

export default SupportPage;
