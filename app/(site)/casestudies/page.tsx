// pages/report.tsx
import React from "react";
import ReportPage from "@/components/ReportCS";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - CS Projects",
  description: "This is Home for Solid Pro Report",
  // other metadata
};

const ReportPageWrapper = () => {
  return (
    <div className="pb-20 pt-40">
      <ReportPage />
    </div>
  );
};

export default ReportPageWrapper;
