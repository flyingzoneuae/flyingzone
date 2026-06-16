import Breadcrumb from "@/components/common/Breadcrumb";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Breadcrumb pagename="Contact Us" pagetitle="Contact Us" />
      {children}
    </>
  );
};

export default layout;
