"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import visaData from "@/data/visa.json";
import PlaneIcon from "../svg/PlaneIcon";
import VisaCard from "./VisaCard";
import LongArrowIcon from "../svg/LongArrowIcon";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const VisaServicesSection = () => {
  const allVisas = [...visaData.uaeVisa, ...visaData.globalVisa];

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      navigation: {
        nextEl: ".package-card4-slider-next",
        prevEl: ".package-card4-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home4-visa-application-section mb-120">
        <div className="container one">
          <div className="section-title5 mb-40 text-center">
            <span>
              Journey Flying-Zone
              <PlaneIcon className="ms-1" style={{ width: 20, height: 20, opacity: 0.8 }} />
            </span>
            <h2>Visa Processing</h2>
          </div>
        </div>
        <div className="">
          <div className="container one">
            <div className="row mb-50">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper package-card4-slider">
                  <div className="swiper-wrapper">
                    {allVisas.map((visa) => (
                      <SwiperSlide key={visa.id} className="swiper-slide">
                        <VisaCard visa={visa} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="slider-btn-grp5">
                  <div className="slider-btn package-card4-slider-prev">
                    <LongArrowIcon direction="left" />
                  </div>
                  <div className="slider-btn package-card4-slider-next">
                    <LongArrowIcon direction="right" />
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

export default VisaServicesSection;
