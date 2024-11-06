import React from "react";
import ReportDA from "@/components/ReportDA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - DA Projects",
  description: "This is Home for Solid Pro Report",
};

const ReportPageWrapper = () => {
  return (
    <div>
      <ReportDA />
    </div>
  );
};

export default ReportPageWrapper;
