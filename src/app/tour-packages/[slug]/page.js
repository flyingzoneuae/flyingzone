"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import toursData from "@/data/tours.json";
import PackageGallery from "@/components/packageDetail/PackageGallery";
import PackageItinerary from "@/components/packageDetail/PackageItinerary";
import PackageBookingForm from "@/components/packageDetail/PackageBookingForm";

const TourDetailPage = () => {
    const params = useParams();
    const slug = params.slug;

    const packageItem = useMemo(() => {
        return toursData.find((pkg) => pkg.slug === slug);
    }, [slug]);

    if (!packageItem) {
        return (
            <>
                <Breadcrumb pagename="Package Not Found" pagetitle="Package Not Found" />
                <div className="package-details-area pt-120 mb-120">
                    <div className="container text-center">
                        <h2>Package Not Found</h2>
                        <p>The tour package you are looking for does not exist or has been moved.</p>
                        <Link href="/services/tour-packages" className="primary-btn1">
                            Back to Tour Packages
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Breadcrumb pagename={packageItem.title} pagetitle="Package Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />
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

                    <div className="row g-xl-4 gy-5 mt-30">
                        <div className="col-xl-8">
                            <h2>{packageItem.title}</h2>
                            <ul className="tour-info-metalist mt-20 mb-30">
                                <li>
                                    <i className="bi bi-clock" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                                    {packageItem.duration}
                                </li>
                                <li>
                                    <i className="bi bi-geo-alt" style={{ fontSize: '1.2rem', marginRight: '8px' }}></i>
                                    Places: {packageItem.locations.join(" & ")}
                                </li>
                            </ul>
                            <div className="tour-description">
                                <h4 className="mb-20">Overview</h4>
                                <p>{packageItem.description}</p>
                            </div>

                            {packageItem.inclusions && packageItem.exclusions && (
                                <>
                                    <h4 className="mt-40 mb-20">Included & Excluded</h4>
                                    <div className="includ-and-exclud-area mb-40">
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
                                </>
                            )}

                            {packageItem.highlights && (
                                <div className="highlight-tour mb-40">
                                    <h4>Package Highlights</h4>
                                    <ul>
                                        {packageItem.highlights.map((item, index) => (
                                            <li key={index}>
                                                <span><i className="bi bi-stars" /></span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {packageItem.itinerary && (
                                <PackageItinerary itinerary={packageItem.itinerary} />
                            )}
                        </div>

                        <div className="col-xl-4">
                            <div className="sidebar-sticky sticky-top" style={{ top: '100px' }}>
                                <PackageBookingForm
                                    title="Book Your Trip"
                                    subtitle="Begin your journey through breathtaking destinations with us!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourDetailPage;
