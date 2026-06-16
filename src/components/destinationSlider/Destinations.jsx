"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import destinationData from "@/data/destinationData.json";
import PlaneIcon from "@/components/svg/PlaneIcon";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Destinations = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".destination-card2-next",
        prevEl: ".destination-card2-prev",
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        280: { slidesPerView: 1 },
        386: { slidesPerView: 1 },
        576: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        992: { slidesPerView: 4, spaceBetween: 15 },
        1200: { slidesPerView: 4, spaceBetween: 15 },
        1400: { slidesPerView: 4 },
      },
    };
  }, []);

  return (
    <>
      <div className="destination-card2-slider-section mb-120">
        <div className="container one">
          <div className="section-title5 mb-40 text-center">
            <span>
              Journey Flying-Zone
              <PlaneIcon className="ms-1" style={{ width: 20, height: 20, opacity: 0.8 }} />
            </span>
            <h2>Popular Travel Locations</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                {...settings}
                className="swiper destination-card2-slider mb-50"
              >
                <div className="swiper-wrapper">
                  {destinationData.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div className="destination-card2">
                        <Link href={`/destination/${item.slug}`} className="destination-card-img">
                          <img src={item.img2} alt={item.name} />
                        </Link>
                        <div className="destination-card2-content">
                          <span>{item.capital}</span>
                          <h4>
                            <Link href={`/destination/${item.slug}`}>{item.name}</Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
              <div className="slide-and-view-btn-grp">
                <div className="slider-btn-grp3 two">
                  <div className="slider-btn destination-card2-prev">
                    <i className="bi bi-arrow-left" />
                    <span>PREV</span>
                  </div>
                  <div className="slider-btn destination-card2-next">
                    <span>NEXT</span>
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
                <Link href="/destination" className="secondary-btn2">
                  View All Destination
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
