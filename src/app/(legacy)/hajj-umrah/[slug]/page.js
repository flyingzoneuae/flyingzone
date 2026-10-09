"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import hajjUmrahData from "@/data/hajj-and-umrah.json";
import PackageGallery from "@/components/packageDetail/PackageGallery";
import PackageItinerary from "@/components/packageDetail/PackageItinerary";
import PackageBookingForm from "@/components/packageDetail/PackageBookingForm";

const HajjUmrahDetailPage = () => {
    const params = useParams();
    const slug = params.slug;

    const packageItem = useMemo(() => {
        const allPackages = [...hajjUmrahData.hajj, ...hajjUmrahData.umrah];
        return allPackages.find((pkg) => pkg.slug === slug);
    }, [slug]);

    if (!packageItem) {
        return (
            <>
                <Breadcrumb pagename="Package Not Found" pagetitle="Package Not Found" />
                <div className="package-details-area pt-120 mb-120">
                    <div className="container text-center">
                        <h2>Package Not Found</h2>
                        <p>The spiritual journey you are looking for does not exist or has been moved.</p>
                        <Link href="/hajj-umrah" className="primary-btn1">
                            Back to Hajj & Umrah Packages
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
                                <h4>Package Highlights</h4>
                                <ul>
                                    {packageItem.highlights.map((item, index) => (
                                        <li key={index}>
                                            <span><i className="bi bi-stars" /></span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <PackageItinerary itinerary={packageItem.itinerary} />
                        </div>

                        <div className="col-xl-4">
                            <PackageBookingForm
                                title="Book Your Journey"
                                subtitle="Perform your sacred duty with ease. Contact us for personalized arrangements!"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HajjUmrahDetailPage;
