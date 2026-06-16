"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import aboutPage from "@/data/about.json";
import HurryUpLeftIcon from "../icons/HurryUpLeftIcon";
import HurryUpRightIcon from "../icons/HurryUpRightIcon";
import TwitterXIcon from "../svg/TwitterXIcon";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const SocialLink = ({ network, url }) => {
  if (network === "twitter") {
    return (
      <a href={url}>
        <TwitterXIcon width={18} height={18} />
      </a>
    );
  }
  const iconClass = {
    instagram: "bx bxl-instagram",
    pinterest: "bx bxl-pinterest-alt",
    facebook: "bx bxl-facebook",
  }[network];
  if (!iconClass) return null;
  return (
    <a href={url}>
      <i className={iconClass} />
    </a>
  );
};

const TeamSection = () => {
  const { section, cardBackground, nav, members } = aboutPage.team;

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".teams-card-next",
        prevEl: ".teams-card-prev",
      },
      breakpoints: {
        280: { slidesPerView: 1 },
        386: { slidesPerView: 1 },
        576: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        992: { slidesPerView: 3, spaceBetween: 15 },
        1200: { slidesPerView: 4, spaceBetween: 15 },
        1400: { slidesPerView: 4 },
      },
    };
  }, []);

  return (
    <>
      <div className="teams-section mb-120">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60">
                <span>
                  <HurryUpLeftIcon />
                  {section.tag}
                  <HurryUpRightIcon />
                </span>
                <h2>{section.title}</h2>
              </div>
            </div>
          </div>

          <div className="teams-slider-area">
            <div className="row mb-60">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper teams-card-slider">
                  <div className="swiper-wrapper">
                    {members.map((member, index) => (
                      <SwiperSlide className="swiper-slide" key={`${member.name}-${index}`}>
                        <div className="teams-card">
                          <img src={cardBackground} alt="" />
                          <div className="teams-img">
                            <img src={member.photo} alt={member.photoAlt} />
                          </div>
                          <div className="teams-content">
                            <h4>{member.name}</h4>
                            <span>{member.role}</span>
                          </div>
                          <ul className="social-list">
                            {member.social.map((link, i) => (
                              <li key={`${link.network}-${i}`}>
                                <SocialLink network={link.network} url={link.url} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slide-and-view-btn-grp style-4">
                  <div className="slider-btn-grp3">
                    <div className="slider-btn teams-card-prev">
                      <i className="bi bi-arrow-left" />
                      <span>{nav.prevLabel}</span>
                    </div>
                    <div className="slider-btn teams-card-next">
                      <span>{nav.nextLabel}</span>
                      <i className="bi bi-arrow-right" />
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

export default TeamSection;
