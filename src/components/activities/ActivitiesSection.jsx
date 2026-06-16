"use client";
import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import aboutPage from "@/data/about.json";
import ActivitiesTabHajjUmrahIcon from "../svg/ActivitiesTabHajjUmrahIcon";
import ActivitiesTabFlightTicketsIcon from "../svg/ActivitiesTabFlightTicketsIcon";
import ActivitiesTabVisitVisaIcon from "../svg/ActivitiesTabVisitVisaIcon";
import ActivitiesTabTourPackagesIcon from "../svg/ActivitiesTabTourPackagesIcon";
import ActivitiesTabLocalExcursionsIcon from "../svg/ActivitiesTabLocalExcursionsIcon";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const TAB_ICONS = {
  hajjUmrah: ActivitiesTabHajjUmrahIcon,
  flightTickets: ActivitiesTabFlightTicketsIcon,
  visitVisa: ActivitiesTabVisitVisaIcon,
  tourPackages: ActivitiesTabTourPackagesIcon,
  localExcursions: ActivitiesTabLocalExcursionsIcon,
};

const ListBullet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9">
    <circle cx="4.5" cy="4.5" r="4.5" />
  </svg>
);

const ActivitiesSection = () => {
  const { slideOverlayGradient, swiper: swiperCfg, sectionTitle, tabs } =
    aboutPage.activities;

  const [activePaneId, setActivePaneId] = useState(
    () => tabs.find((t) => t.active)?.paneId ?? tabs[0]?.paneId ?? ""
  );

  const activeTab = useMemo(
    () => tabs.find((t) => t.paneId === activePaneId) ?? tabs[0],
    [tabs, activePaneId]
  );

  const settings = useMemo(
    () => ({
      slidesPerView: "auto",
      speed: swiperCfg.speed,
      spaceBetween: swiperCfg.spaceBetween,
      effect: "fade",
      loop: true,
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: swiperCfg.autoplayDelay,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },
    }),
    [swiperCfg]
  );

  return (
    <>
      <div className="slider-and-tab-section mb-120">
        <div className="row g-0">
          <div className="col-lg-5">
            <ul className="activities-slider-group">
              <li className="active">
                <div className="slider-area">
                  <Swiper
                    key={activePaneId}
                    {...settings}
                    className="swiper activities-img-slider"
                  >
                    <div className="swiper-wrapper">
                      {[0, 1].map((slideKey) => (
                        <SwiperSlide className="swiper-slide" key={slideKey}>
                          <div
                            className="slide-img"
                            style={{
                              backgroundImage: `${slideOverlayGradient}, url(${activeTab.slideImage})`,
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                  <div className="swiper-pagination5 pagination1" />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="tab-area">
              <div className="section-title2 text-center mb-50">
                <div className="eg-section-tag">
                  <span>{sectionTitle.tag}</span>
                </div>
                <h2>{sectionTitle.title}</h2>
              </div>
              <div className="tab-content-area">
                <div className="row g-xl-4 gy-5 ">
                  <div className="col-xl-5">
                    <div className="tab-sidebar">
                      <ul className="nav nav-pills" id="pills-tab3" role="tablist">
                        {tabs.map((tab) => {
                          const TabIcon = TAB_ICONS[tab.iconKey];
                          const tabControlId = `${tab.paneId}-tab`;
                          const isActive = activePaneId === tab.paneId;
                          return (
                            <li className="nav-item" role="presentation" key={tab.paneId}>
                              <div
                                className={`nav-link${isActive ? " active" : ""}`}
                                id={tabControlId}
                                role="tab"
                                tabIndex={isActive ? 0 : -1}
                                aria-controls={tab.paneId}
                                aria-selected={isActive}
                                onClick={() => setActivePaneId(tab.paneId)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setActivePaneId(tab.paneId);
                                  }
                                }}
                              >
                                <div className="icon">
                                  {TabIcon ? <TabIcon /> : null}
                                </div>
                                <h6>{tab.label}</h6>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 d-flex justify-content-xl-start justify-content-center">
                    <div className="tab-content" id="pills-tab3Content">
                      {tabs.map((tab) => {
                        const { content } = tab;
                        const isActive = activePaneId === tab.paneId;
                        return (
                          <div
                            key={tab.paneId}
                            className={`tab-pane fade${isActive ? " show active" : ""}`}
                            id={tab.paneId}
                            role="tabpanel"
                            aria-labelledby={`${tab.paneId}-tab`}
                          >
                            <div className="tab-content-wrap">
                              <h2>{content.heading}</h2>
                              <p>{content.body}</p>
                              <ul>
                                {content.highlights.map((text) => (
                                  <li key={text}>
                                    <ListBullet />
                                    {text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
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

export default ActivitiesSection;
