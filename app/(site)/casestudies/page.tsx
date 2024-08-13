import React from "react";
import ReportCS from "@/components/ReportCS";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - CS Projects",
  description: "This is Home for Solid Pro Report",
};

const ReportPageWrapper = () => {
  return (
    <div className="pb-20">
      <ReportCS />
    </div>
  );
};

export default ReportPageWrapper;
