import React from "react";
import Enigma from "@/components/Enigma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - Enigma",
  description: "This is Support page for Solid Pro",
};

const SupportPage = () => {
  return (
    <div>
      <Enigma />
    </div>
  );
};

export default SupportPage;
