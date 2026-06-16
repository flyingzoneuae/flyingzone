"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { dubaiExcursionData } from "@/data/dubaiExcursionData";
import PackageGallery from "@/components/packageDetail/PackageGallery";
import PackageItinerary from "@/components/packageDetail/PackageItinerary";
import PackageBookingForm from "@/components/packageDetail/PackageBookingForm";

const DubaiExcursionDetailPage = () => {
  const params = useParams();
  const slug = params.slug;

  const packageItem = useMemo(() => {
    return dubaiExcursionData.find((excursion) => excursion.slug === slug);
  }, [slug]);

  if (!packageItem) {
    return (
      <>
        <Breadcrumb pagename="Excursion Not Found" pagetitle="Excursion Not Found" />
        <div className="package-details-area pt-120 mb-120">
          <div className="container text-center">
            <h2>Excursion Not Found</h2>
            <p>The excursion you are looking for does not exist or has been moved.</p>
            <Link href="/services/dubai-excursions" className="primary-btn1">
              Back to Dubai Excursions
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb pagename={packageItem.title} pagetitle="Excursion Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container one">
          <div className="row">
            <div className="col-lg-12">
              <PackageGallery
                mainImage={packageItem.img}
                title={packageItem.title}
                gallery={packageItem.gallery}
                videoUrl={packageItem.videoUrl}
              />
            </div>
          </div>

          <div className="row g-xl-4 gy-5">
            <div className="col-xl-8">
              <h2>{packageItem.title}</h2>
              <ul className="tour-info-metalist">
                <li>
                  <i className="bi bi-clock" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                  {packageItem.duration}
                </li>
                <li>
                  <i className="bi bi-geo-alt" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                  Places: {packageItem.locations.join(" & ")}
                </li>
              </ul>
              <p className="mt-4">{packageItem.description}</p>

              <h4>Included & Excluded</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  {packageItem.inclusions.map((item, index) => (
                    <li key={index}><i className="bi bi-check-lg" /> {item}</li>
                  ))}
                </ul>
                <ul className="exclud">
                  {packageItem.exclusions.map((item, index) => (
                    <li key={index}><i className="bi bi-x-lg" /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="highlight-tour mb-20">
                <h4>Excursion Highlights</h4>
                <ul>
                  {packageItem.highlights.map((item, index) => (
                    <li key={index}>
                      <span><i className="bi bi-stars" /></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <PackageItinerary itinerary={packageItem.itinerary} title="Excursion Itinerary" />
            </div>

            <div className="col-xl-4">
              <PackageBookingForm
                title="Book Your Excursion"
                subtitle="Experience the best of Dubai! Contact us for personalized arrangements and ticket booking."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DubaiExcursionDetailPage;
