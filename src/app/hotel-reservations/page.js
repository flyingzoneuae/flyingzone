"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import InquiryForms from "@/components/common/InquiryForms";

const Page = () => {

  return (
    <>
      <Breadcrumb pagename="Room & Suits" pagetitle="Room & Suits" bgImage="/assets/images/banners/hotel-reservations.png" />
      <div className="room-suits-page pt-120 mb-120">
        <div className="container one">
          <InquiryForms defaultTab="hotel" showTabs={false} />
        </div>
      </div>
    </>
  );
};

export default Page;
