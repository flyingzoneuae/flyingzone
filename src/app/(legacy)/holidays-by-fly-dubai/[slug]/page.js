"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import destinationData from "@/data/destinationData.json";
import PackageGallery from "@/components/packageDetail/PackageGallery";
import PackageBookingForm from "@/components/packageDetail/PackageBookingForm";

const Page = () => {
  const { slug } = useParams();

  const destination = useMemo(() => {
    return destinationData.find((item) => item.slug === slug);
  }, [slug]);

  if (!destination) {
    return (
      <>
        <Breadcrumb pagename="Destination Not Found" pagetitle="Destination Not Found" />
        <div className="package-details-area pt-120 mb-120">
          <div className="container text-center">
            <h2>Destination Not Found</h2>
            <p>The place you are looking for does not exist or has been moved.</p>
            <Link href="/destination" className="primary-btn1">
              Back to Destinations
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb pagename={destination.name} pagetitle="Destination Details" bgImage={destination.img || destination.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container one">
          <div className="row">
            <div className="col-lg-12">
              <PackageGallery
                mainImage={destination.image}
                title={destination.name}
                gallery={destination.gallery}
                videoUrl={destination.videoUrl}
              />
            </div>
          </div>

          <div className="row g-xl-4 gy-5">
            <div className="col-xl-8">
              <h2>Welcome To {destination.name}</h2>
              <ul className="tour-info-metalist">
                <li>
                  <i className="bi bi-geo-alt" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                  Capital: {destination.capital}
                </li>
                <li>
                  <i className="bi bi-people" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                  Population: {destination.population}
                </li>
                <li>
                  <i className="bi bi-translate" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                  {destination.language}
                </li>
                <li>
                  <i className="bi bi-cash-stack" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                  {destination.currency}
                </li>
              </ul>

              <p className="mt-4 lead">{destination.description}</p>

              <div className="highlight-tour mb-40 mt-40">
                <h4>Top Highlights</h4>
                <ul>
                  {destination.highlights && destination.highlights.map((item, index) => (
                    <li key={index}>
                      <span><i className="bi bi-stars" /></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="destination-extra-info mt-40">
                <h4>Heaven On Earth</h4>
                <p className="mb-4">{destination.subDescription}</p>

                {destination.details && destination.details.map((paragraph, index) => (
                  <p key={index} className="mb-3 text-secondary" style={{ lineHeight: "1.8" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-xl-4">
              <PackageBookingForm
                title={`Plan for ${destination.name}`}
                subtitle={`Our experts can help you arrange a perfect visit to ${destination.name}.`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
