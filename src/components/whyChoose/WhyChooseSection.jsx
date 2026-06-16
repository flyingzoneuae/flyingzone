"use client";
import React from "react";
import aboutPage from "@/data/about.json";
import WorldwideCoverageIcon from "../svg/WorldwideCoverageIcon";
import PricingIcon from "../svg/PricingIcon";
import FastBookingIcon from "../svg/FastBookingIcon";
import GuidedToursIcon from "../svg/GuidedToursIcon";
import SupportIcon from "../svg/SupportIcon";
import ExperiencedTeamIcon from "../svg/ExperiencedTeamIcon";

const FEATURE_ICONS = {
  worldwide: WorldwideCoverageIcon,
  pricing: PricingIcon,
  fastBooking: FastBookingIcon,
  guidedTours: GuidedToursIcon,
  support: SupportIcon,
  experiencedTeam: ExperiencedTeamIcon,
};

const WhyChooseSection = () => {
  const { section, features } = aboutPage.whyChoose;

  return (
    <>
      <div className="feature-card-section mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag">
                  <span>{section.tag}</span>
                </div>
                <h2>{section.title}</h2>
              </div>
            </div>
          </div>
          <div className="row gy-5 mb-80">
            {features.map((item, index) => {
              const Icon = FEATURE_ICONS[item.iconKey];
              const cardClass =
                item.variant === "secondary"
                  ? "feature-card style-2 secondary"
                  : "feature-card style-2";
              return (
                <div className={item.colClass} key={`${item.iconKey}-${index}`}>
                  <div className={cardClass}>
                    <div className="feature-card-icon">
                      {Icon ? <Icon width={70} height={70} /> : null}
                    </div>
                    <div className="feature-card-content">
                      <h6>{item.title}</h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseSection;
