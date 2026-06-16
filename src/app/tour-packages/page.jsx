"use client";
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import toursData from "@/data/tours.json";
import PackageCard from "@/components/packageComponents/PackageCard";

const page = () => {
  return (
    <>
      <Breadcrumb
        pagename="Package Top Search"
        pagetitle="Package Top Search" bgImage="/assets/images/banners/tour-packages.png" />


      <div className="package-top-search-section pt-120 mb-120">
        <div className="container">
          <div className="row gy-5 mb-70">
            {toursData.map((tour) => (
              <div key={tour.id} className="col-lg-4 col-md-6">
                <PackageCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
