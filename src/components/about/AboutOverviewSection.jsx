"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import aboutPage from "@/data/about.json";
import TravelersStatIcon from "../svg/TravelersStatIcon";
import ToursSuccessStatIcon from "../svg/ToursSuccessStatIcon";
import PositiveReviewsStatIcon from "../svg/PositiveReviewsStatIcon";
import TravelGuideStatIcon from "../svg/TravelGuideStatIcon";
import FacilityCardIcon1 from "../svg/FacilityCardIcon1";
import FacilityCardIcon2 from "../svg/FacilityCardIcon2";
import FacilityCardIcon3 from "../svg/FacilityCardIcon3";
import PlaneVectorIcon from "../svg/PlaneVectorIcon";
import TripadvisorRatingStarsIcon from "../svg/TripadvisorRatingStarsIcon";
import TripadvisorLogoMarkIcon from "../svg/TripadvisorLogoMarkIcon";

const FACILITY_ICONS = {
  "1": FacilityCardIcon1,
  "2": FacilityCardIcon2,
  "3": FacilityCardIcon3,
};

const STAT_ICONS = {
  travelers: TravelersStatIcon,
  toursSuccess: ToursSuccessStatIcon,
  positiveReviews: PositiveReviewsStatIcon,
  travelGuide: TravelGuideStatIcon,
};

const FacilityTitle = ({ lines }) => (
  <h6>
    {lines.map((line, i) => (
      <React.Fragment key={i}>
        {i > 0 ? <br /> : null}
        {line}
      </React.Fragment>
    ))}
  </h6>
);

const AboutOverviewSection = () => {
  const [isOpen, setOpen] = useState(false);
  const { intro, facilities, hero, experience, stats, tripadvisor, modalVideo, planeVector } =
    aboutPage.overview;

  return (
    <>
      <div className="home2-about-section pt-120 mb-120">
        <div className="container">
          <div className="row mb-90">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title2 mb-30">
                  <div className="eg-section-tag">
                    <span>{intro.tag}</span>
                  </div>
                  <h2>{intro.title}</h2>
                  <p>{intro.body}</p>
                </div>
                <div className="row g-4 mb-50">
                  {facilities.map((item, index) => {
                    const Icon = FACILITY_ICONS[item.iconKey];
                    const cardClass =
                      item.cardVariant === "two" ? "facility-card two" : "facility-card";
                    return (
                      <div className="col-md-6" key={`${item.iconKey}-${index}`}>
                        <div className={cardClass}>
                          <div className="icon">
                            {Icon ? <Icon width={26} height={26} /> : null}
                          </div>
                          <div className="content">
                            <FacilityTitle lines={item.titleLines} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="about-img-wrap">
                <div className="about-img">
                  <img
                    src={hero.imageSrc}
                    alt={hero.imageAlt}
                    className="about-img"
                  />
                </div>
                <div className="experience">
                  <h3>{experience.value}</h3>
                  <p>{experience.label}</p>
                </div>
                <PlaneVectorIcon
                  width={planeVector.width}
                  height={planeVector.height}
                  className={planeVector.className}
                  aria-hidden={true}
                />
              </div>
            </div>
          </div>
          <div className="activities-counter">
            <div className="row justify-content-center g-lg-4 gy-5">
              {stats.map((stat, index) => {
                const StatIcon = STAT_ICONS[stat.iconKey];
                return (
                  <div className={stat.colClass} key={`${stat.iconKey}-${index}`}>
                    <div className="single-activity">
                      <div className="icon">
                        {StatIcon ? (
                          <StatIcon width={50} height={50} />
                        ) : null}
                      </div>
                      <div className="content">
                        <div className="number">
                          <h5 className="counter">
                            <CountUp delay={stat.countUp.delay} end={stat.countUp.end} />
                          </h5>
                          <span>{stat.suffix}</span>
                        </div>
                        <p>{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="tripadvisor-review">
                <strong>{tripadvisor.headline}</strong>
                <TripadvisorRatingStarsIcon
                  width={tripadvisor.ratingStars.width}
                  height={tripadvisor.ratingStars.height}
                />
                <p>
                  <strong>{tripadvisor.rating}</strong> Rating out of{" "}
                  <strong>{tripadvisor.rating}</strong> based on{" "}
                  <a href={tripadvisor.reviewUrl}>
                    <strong>{tripadvisor.reviewCount}</strong> {tripadvisor.reviewsWord}
                  </a>
                </p>
                <TripadvisorLogoMarkIcon
                  width={tripadvisor.logoMark.width}
                  height={tripadvisor.logoMark.height}
                />
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel={modalVideo.channel}
          isOpen={isOpen}
          animationSpeed={modalVideo.animationSpeed}
          videoId={modalVideo.videoId}
          ratio={modalVideo.ratio}
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
};

export default AboutOverviewSection;
