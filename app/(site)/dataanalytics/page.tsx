import React from "react";
import ReportDA from "@/components/ReportDA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - DA Projects",
  description: "This is Home for Solid Pro Report",
};

const ReportPageWrapper = () => {
  return (
    <div className="pb-20 pt-40">
      <ReportDA />
    </div>
  );
};

export default ReportPageWrapper;
