import Link from "next/link";
import React from "react";
import HurryUpLeftIcon from "../icons/HurryUpLeftIcon";
import HurryUpRightIcon from "../icons/HurryUpRightIcon";
import data from "../../data/promotions.json";

const PromoBannerSection = () => {
  const { sectionTitle, banner1, banner2, banner3, banner4 } = data;

  return (
    <>
      <div className="banner2-section mb-120">
        <div className="container one">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60">
                <span>
                  <HurryUpLeftIcon />
                  {sectionTitle.subtitle}
                  <HurryUpRightIcon />
                </span>
                <h2>{sectionTitle.title}</h2>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-3">
              <div className="banner2-card">
                <img src={banner1.image} alt="Package Offer" />
                <div className="banner2-content-wrap">
                  <div className="banner2-content">
                    <span>{banner1.category}</span>
                    <h3>{banner1.offer}</h3>
                    <Link href={banner1.buttonLink}>
                      {banner1.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner2-card two mb-30">
                    <img src={banner2.image} alt="Couple Tour" />
                    <div className="banner2-content-wrap">
                      <div className="banner2-content">
                        <span>{banner2.category}</span>
                        <Link href={banner2.link}>{banner2.title}</Link>
                      </div>
                      <div className="offer-batch">
                        <span>
                          <strong>{banner2.offer}</strong> <br />
                          Off
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="banner2-card three">
                    <img src={banner3.image} alt="Honeymoon Tour" />
                    <div className="banner2-content-wrap d-flex align-items-center">
                      <div className="w-100">
                        <div className="banner2-content">
                          <span>{banner3.category}</span>
                          <h5>
                            {banner3.offerPrefix}{" "}
                            <span>{banner3.offerPercent}</span>{" "}
                            {banner3.offerSuffix}
                          </h5>
                          <p>{banner3.description}</p>
                        </div>
                        <Link href={banner3.buttonLink} className="primary-btn1">
                          {banner3.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner2-card four">
                <img src={banner4.image} alt="Offer" />
                <div className="banner2-content-wrap">
                  <div className="banner2-content">
                    <span>{banner4.category}</span>
                    <h3>{banner4.offer}</h3>
                    <p>{banner4.description}</p>
                  </div>
                  <Link href={banner4.buttonLink} className="primary-btn1">
                    {banner4.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoBannerSection;
