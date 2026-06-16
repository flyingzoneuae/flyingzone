"use client";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import DecorativeIcon from "../svg/DecorativeIcon";
import GuidedToursIcon from "../svg/GuidedToursIcon";
import GuestIcon from "../svg/GuestIcon";
import CalendarIcon from "../svg/CalendarIcon";
import TourIcon from "../svg/TourIcon";
import MissionVisionIcon from "../svg/MissionVisionIcon";
import HistoricalIcon from "../svg/HistoricalIcon";
import DotIcon from "../svg/DotIcon";
import PlayCircleIcon from "../svg/PlayCircleIcon";

import activitiesData from "../../data/activities.json";

const iconComponents = {
  GuidedToursIcon,
  GuestIcon,
  CalendarIcon,
  TourIcon,
  MissionVisionIcon,
  HistoricalIcon,
};

const HomeActivitiesSection = () => {
  const [isOpen, setOpen] = useState(false);
  const { section, activities } = activitiesData;

  return (
    <div className="verticle-tab-section pt-120 mb-120">
      <img
        src="/assets/img/home1/section-vector1.png"
        alt=""
        className="section-vector1"
      />
      <div className="container one">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-60">
              <span>
                <DecorativeIcon type="left" />
                {section.subtitle}
                <DecorativeIcon type="right" />
              </span>
              <h2>{section.title}</h2>
            </div>
          </div>
        </div>
        <div className="verticle-tab-wrapper">
          <div className="row g-xl-4 gy-5 ">
            <div className="col-xl-5">
              <div className="verticle-tab-sidebar">
                <ul className="nav nav-pills" id="pills-tab5" role="tablist">
                  {activities.map((item, index) => {
                    const Icon = iconComponents[item.icon];
                    return (
                      <li className="nav-item" role="presentation" key={index}>
                        <div
                          className={`nav-link ${index === 0 ? "active" : ""}`}
                          id={item.tabId}
                          data-bs-toggle="pill"
                          data-bs-target={`#${item.id}`}
                          role="tab"
                          aria-controls={item.id}
                          aria-selected={index === 0 ? "true" : "false"}
                        >
                          <div className="icon">
                            <Icon />
                          </div>
                          <h6>{item.category}</h6>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xl-7 d-flex justify-content-xl-start justify-content-center">
              <div className="tab-content" id="pills-tab5Content">
                {activities.map((item, index) => (
                  <div
                    className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                    id={item.id}
                    role="tabpanel"
                    aria-labelledby={item.tabId}
                    key={index}
                  >
                    <div className="verticle-tab-content-wrap">
                      <div className="verticle-tab-content">
                        <div className="eg-tag2">
                          <span>{item.category}</span>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <ul>
                          {item.features.map((feature, fIndex) => (
                            <li key={fIndex}>
                              <DotIcon />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {/* <div className="content-bottom-area">
                          <Link
                            href="/activities/activities-details"
                            className="primary-btn1"
                          >
                            Check Availability
                          </Link>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => setOpen(true)}
                            className={`video-area ${item.videoClass}`}
                          >
                            <div className="icon">
                              <PlayCircleIcon width={51} height={51} />
                              <i className="bi bi-play" />
                            </div>
                            <h6>Watch Adventure</h6>
                          </a>
                        </div> */}
                      </div>
                      <div className="verticle-tab-img">
                        <div className="verticle-tab-img1 mb-25">
                          <img src={item.images.img1} alt="" />
                        </div>
                        <div className="verticle-tab-img2">
                          <img src={item.images.img2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpen(true)}
          isOpen={isOpen}
          animationSpeed={350}
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </div>
  );
};

export default HomeActivitiesSection;
