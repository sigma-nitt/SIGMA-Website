import React from "react";
import ContactUs from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - Contact Us",
  description: "This is Home for Solid Pro Report",
};

const ReportPageWrapper = () => {
  return (
    <div className="pb-20 pt-40">
      <ContactUs />
    </div>
  );
};

export default ReportPageWrapper;
