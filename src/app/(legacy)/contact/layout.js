import Breadcrumb from "@/components/common/Breadcrumb";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description: "Contact Flying Zone Travel & Tours in Deira, Dubai by phone, WhatsApp or email.",
  alternates: { canonical: "/contact" },
};

const layout = ({ children }) => {
  return (
    <>
      <Breadcrumb pagename="Contact Us" pagetitle="Contact Us" bgImage="/assets/images/banners/contact.png" />
      {children}
    </>
  );
};

export default layout;
