"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Link from "next/link";
import hajjUmrahData from "@/data/hajj-and-umrah.json";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Page = () => {
    const [activeTab, setActiveTab] = useState("hajj");

    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 30,
            navigation: {
                nextEl: ".tour-tab-slider-next",
                prevEl: ".tour-tab-slider-prev",
            },
            breakpoints: {
                280: { slidesPerView: 2, spaceBetween: 15 },
                386: { slidesPerView: 2, spaceBetween: 15 },
                576: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                992: { slidesPerView: 2, spaceBetween: 15 },
                1200: { slidesPerView: 2, spaceBetween: 15 },
                1400: { slidesPerView: 2 },
            },
        };
    }, []);

    const currentPackages = hajjUmrahData[activeTab] || [];

    return (
        <>
            <Breadcrumb pagename="Hajj & Umrah Packages" pagetitle="Hajj & Umrah" bgImage="/assets/images/banners/hajj-umrah.png" />
            <div className="package-category-nav-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="nav nav-pills" id="pills-tab" role="tablist">
                                <Swiper {...settings} className="swiper tour-tab-slider">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="nav-item" role="presentation">
                                                <div
                                                    className={`nav-link ${activeTab === "hajj" ? "active" : ""}`}
                                                    onClick={() => setActiveTab("hajj")}
                                                    role="tab"
                                                    aria-selected={activeTab === "hajj"}
                                                >
                                                    <div className="icon">
                                                        <i className="bi bi-moon-stars" style={{ fontSize: '2rem' }}></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Hajj Packages</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="nav-item" role="presentation">
                                                <div
                                                    className={`nav-link ${activeTab === "umrah" ? "active" : ""}`}
                                                    onClick={() => setActiveTab("umrah")}
                                                    role="tab"
                                                    aria-selected={activeTab === "umrah"}
                                                >
                                                    <div className="icon">
                                                        <i className="bi bi-moon" style={{ fontSize: '2rem' }}></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Umrah Packages</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="package-category-section pt-120 mb-120">
                <div className="container">
                    <div className="package-grid">
                        <div className="row gy-5 mb-70">
                            {currentPackages.map((pkg) => (
                                <div className="col-lg-4 col-md-6" key={pkg.id}>
                                    <div className="package-card">
                                        <div className="package-card-img-wrap">
                                            <Link href={pkg.detailsLink} className="card-img">
                                                <img src={pkg.img} alt={pkg.title} />
                                            </Link>
                                            {/* <div className="batch">
                                                <span className="date">{pkg.duration}</span>
                                                <div className="location">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                                                        <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                                                    </svg>
                                                    <ul className="location-list">
                                                        {pkg.locations.slice(0, 2).map((loc, idx) => (
                                                            <li key={idx}><Link href="/package">{loc}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="package-card-content">
                                            <div className="card-content-top">
                                                <h5>
                                                    <Link href={pkg.detailsLink}>{pkg.title}</Link>
                                                </h5>
                                                <div className="location-area">
                                                    <ul className="location-list scrollTextAni">
                                                        {pkg.locations.map((loc, idx) => (
                                                            <li key={idx}><Link href="/package">{loc}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-content-bottom">
                                                <Link href={pkg.detailsLink} className="primary-btn2 w-100 justify-content-center mt-3">
                                                    Book a Trip
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                        <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                                                        <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
