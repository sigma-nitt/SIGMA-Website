import React from "react";
import Clients from "@/components/Clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGMA - DA Projects",
  description: "This is Home for Solid Pro Report",
};

const ReportPageWrapper = () => {
  return (
    <div>
      <Clients />
    </div>
  );
};

export default ReportPageWrapper;
