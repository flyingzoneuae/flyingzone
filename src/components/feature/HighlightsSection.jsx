"use client";
import React from "react";
import CountUp from "react-countup";
import { featureSectionData } from "@/data/feature-data";
import PlaneIcon from "@/components/svg/PlaneIcon";
import HappyTravelerIcon from "@/components/svg/HappyTravelerIcon";
import ToursSuccessIcon from "@/components/svg/ToursSuccessIcon";
import PositiveReviewsIcon from "@/components/svg/PositiveReviewsIcon";

const HighlightsSection = () => {
    const {
        subtitle,
        title,
        description,
        mainFeatures,
        counterFeatures,
        tripAdvisor,
        images
    } = featureSectionData;

    const renderCounterIcon = (type) => {
        switch (type) {
            case "traveler":
                return <HappyTravelerIcon />;
            case "tours":
                return <ToursSuccessIcon />;
            case "reviews":
                return <PositiveReviewsIcon />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="home6-feature-section mb-120 mt-120">
                <div className="container one">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="feature-content">
                                <div className="section-title5 mb-50">
                                    <span>
                                        {subtitle}
                                        <PlaneIcon className="ms-1" style={{ width: 20, height: 20, opacity: 0.8 }} />
                                    </span>
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                                <div className="row gy-sm-5 gy-4 mb-60">
                                    {mainFeatures.map((item) => (
                                        <div key={item.id} className="col-sm-6">
                                            <div className="single-feature">
                                                <div className="icon">
                                                    <img src={item.icon} alt={item.title} />
                                                </div>
                                                <div className="content">
                                                    <h5>{item.title}</h5>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="activities-counter two">
                                    <div className="row justify-content-center g-lg-4 gy-5">
                                        {counterFeatures.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className={`col-sm-4 ${index !== counterFeatures.length - 1 ? "divider" : ""} d-flex justify-content-sm-${index === 0 ? "start" : index === 1 ? "center" : "end"}`}
                                            >
                                                <div className="single-activity">
                                                    <div className="icon">
                                                        {renderCounterIcon(item.iconType)}
                                                    </div>
                                                    <div className="content">
                                                        <div className="number">
                                                            <h5 className="counter">
                                                                <CountUp delay={2} end={item.number} />
                                                            </h5>
                                                            <span>{item.unit}</span>
                                                        </div>
                                                        <p>{item.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 d-flex justify-content-center">
                                        <div className="tripadvisor-review">
                                            <strong>{tripAdvisor.status}</strong>
                                            <img src={tripAdvisor.starIcon} alt="star" />
                                            <p>
                                                <strong>{tripAdvisor.rating}</strong> Rating out of{" "}
                                                <strong>{tripAdvisor.totalRating}</strong> based on{" "}
                                                <a href={tripAdvisor.link}>
                                                    <strong>{tripAdvisor.reviewsCount}</strong> reviews
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="feature-img-wrap">
                                <div className="row g-0">
                                    <div className="col-xl-4">
                                        <div className="feature-bottom-img">
                                            <img src={images.secondary} alt="feature-secondary" />
                                        </div>
                                    </div>
                                    <div className="col-xl-8">
                                        <div className="feature-top-img">
                                            <img src={images.main} alt="feature-main" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HighlightsSection;
