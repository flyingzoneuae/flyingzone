"use client";

import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import InquiryForms from "@/components/common/InquiryForms";

const Page = () => {
  return (
    <>
      <Breadcrumb
        pagename="Travel Insurance"
        pagetitle="Travel Insurance"
        bgImage="/assets/images/banners/travel-insurance.png"
      />
      <div className="room-suits-page pt-120 mb-120">
        <div className="container one">
          <InquiryForms defaultTab="travelInsurance" showTabs={false} />
        </div>
      </div>
    </>
  );
};

export default Page;
