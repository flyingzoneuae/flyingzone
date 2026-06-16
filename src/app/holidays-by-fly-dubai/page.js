import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import React from "react";
import destinations from "@/data/destinationData.json";

const page = () => {
  return (
    <>
      <Breadcrumb pagename="destination" pagetitle="Destination" />
      <div className="destination-gallery-section pt-120 mb-120">
        <div className="container one">
          <div className="row g-lg-4 gy-5 mb-70">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="col-lg-4 col-sm-6"
              >
                <div className="destination-card">
                  <img src={destination.image} alt={destination.name} />
                  <div className="overlay" />
                  <div className="card-title">
                    <h4>{destination.name}</h4>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href={`/destination/${destination.slug}`}>{destination.name}</Link>
                    </h4>
                    <div className="eg-tag">
                      <span>{destination.capital} - {destination.population}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
