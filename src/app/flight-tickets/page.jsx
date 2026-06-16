"use client";
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import InquiryForms from "@/components/common/InquiryForms";

const Page = () => {
    return (
        <>
            <Breadcrumb pagename="Flight Tickets" pagetitle="Flight Tickets" bgImage="/assets/images/banners/flight-tickets.png" />
            <div className="room-suits-page pt-120 mb-120">
                <div className="container one">
                    <InquiryForms defaultTab="flight" showTabs={false} />
                </div>
            </div>
        </>
    );
};

export default Page;
