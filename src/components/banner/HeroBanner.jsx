"use client";
import React, { useMemo, useState } from "react";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import homeSlider from "@/data/homeSlider.json";
import PlaneIcon from "@/components/svg/PlaneIcon";
import VideoIcon from "@/components/svg/VideoIcon";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const HeroBanner = () => {
  const [isOpen, setOpen] = useState(false);
  const { overlayGradient, swiper: swiperCfg, modalVideo, bookTripLabel, watchTourLabel, slides } =
    homeSlider;

  const settings = useMemo(
    () => ({
      slidesPerView: "auto",
      speed: swiperCfg.speed,
      spaceBetween: 25,
      effect: "fade",
      loop: true,
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: swiperCfg.autoplayDelay,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".progress-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".home3-banner-next",
        prevEl: ".home3-banner-prev",
      },
    }),
    [swiperCfg]
  );

  const bannerBackgroundStyle = (imageUrl) => ({
    backgroundImage: `${overlayGradient}, url(${imageUrl})`,
  });

  return (
    <>
      <div className="home3-banner-area">
        <Swiper {...settings} className="swiper home3-banner-slider">
          <div className="swiper-wrapper">
            {slides.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div
                  className="home3-banner-wrapper"
                  style={bannerBackgroundStyle(item.image)}
                >
                  <div className="home3-banner-content-wrap">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="home3-banner-content">
                            <div className="eg-tag">
                              <span>{item.tag}</span>
                            </div>
                            <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                            <div className="banner-content-bottom">
                              <Link href={item.buttonUrl} className="primary-btn4">
                                <span>
                                  {bookTripLabel}
                                  <PlaneIcon />
                                </span>
                              </Link>
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)}
                                className={`video-area ${item.videoClass}`}
                              >
                                <VideoIcon />
                                <h6>{watchTourLabel}</h6>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="slider-btn-grp">
          <div className="slider-btn home3-banner-prev">
            <i className="bi bi-arrow-up" />
          </div>
          <div className="progress-pagination" />
          <div className="slider-btn home3-banner-next">
            <i className="bi bi-arrow-down" />
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

export default HeroBanner;
