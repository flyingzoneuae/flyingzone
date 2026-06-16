import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const ExcursionCard = ({ excursion, settings }) => {
  return (
    <div className="room-suits-card mb-30 w-100 h-100 d-flex flex-column">
      <div className="row g-0 flex-grow-1 d-flex flex-column">
        <div className="col-12">
          {excursion.images.length > 1 ? (
            <Swiper {...settings} className="swiper hotel-img-slider">
              <div className="swiper-wrapper">
                {excursion.images.map((img, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="room-img w-100">
                      <img src={img} alt="" className="w-100" style={{ objectFit: "cover", height: "250px" }} />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <div className="swiper-pagination5" />
            </Swiper>
          ) : (
            <div className="room-img w-100">
              <Link href={`/services/dubai-excursions/${excursion.slug}`} className="w-100 d-block">
                <img src={excursion.images[0]} alt="" className="w-100" style={{ objectFit: "cover", height: "250px" }} />
              </Link>
            </div>
          )}
        </div>
        <div className="col-12 mt-4 mt-md-0 d-flex flex-column flex-grow-1">
          <div className="room-content h-100 d-flex flex-column flex-grow-1">
            <div className="content-top flex-grow-1">
              <div className="reviews">
                <ul>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-half" /></li>
                </ul>
                <span>{excursion.reviewsCount}</span>
              </div>
              <h5>
                <Link href={`/services/dubai-excursions/${excursion.slug}`}>
                  {excursion.title}
                </Link>
              </h5>
              <ul className="loaction-area mb-3">
                <li>
                  <i className="bi bi-geo-alt" />
                  {excursion.location}
                </li>
                <li>
                  <a href="#">Show on map</a>
                </li>
                <li>
                  <span>{excursion.distance}</span>
                </li>
              </ul>

              <p className="mt-3 mb-3 text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                {excursion.description}
              </p>

              <ul className="facilisis mb-0">
                {excursion.features.map((feature, idx) => (
                  <li key={idx} style={{ display: "inline-flex", alignItems: "center" }}>
                    <i className="bi bi-check2-circle text-primary" style={{ marginRight: "6px", fontSize: "16px" }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-bottom mt-4">
              <div className="book-btn w-100">
                <Link href={`/services/dubai-excursions/${excursion.slug}`} className="primary-btn2 w-100 text-center">
                  Check Availability <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcursionCard;
