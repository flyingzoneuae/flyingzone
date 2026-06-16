"use client";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import aboutPage from "@/data/about.json";
import PlaneIcon from "@/components/svg/PlaneIcon";
import SparkleIcon from "@/components/svg/SparkleIcon";
import VideoIcon from "@/components/svg/VideoIcon";

const HomeAboutSection = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(".badge__char");
    const step = 360 / elements.length;

    elements.forEach((elem, i) => {
      elem.style.setProperty("--char-rotate", i * step + "deg");
    });
  }, []);

  const {
    subtitle,
    title,
    description,
    facilities,
    counter,
    badgeText,
    modalVideo,
    videoCover,
    mainImage,
    watchTourLabel,
  } = aboutPage.homeAbout;

  return (
    <>
      <div className="home6-about-section mb-120 pt-120">
        <div className="container one">
          <div className="row align-items-xl-end align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title5 mb-40">
                  <span>
                    {subtitle}
                    <PlaneIcon className="ms-1" style={{ width: 20, height: 20, opacity: 0.8 }} />
                  </span>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <ul className="facilities">
                  {facilities.map((item) => (
                    <li key={item.id}>
                      <div className={`icon ${item.isSecondary ? "secondary" : ""}`}>
                        <SparkleIcon />
                      </div>
                      <div className="content">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-video-and-img">
                <div className="video-and-batch-wrap">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="video-and-batch">
                        <div className="badge">
                          {badgeText.split("").map((char, index) => (
                            <span key={index} className="badge__char">
                              {char}
                            </span>
                          ))}
                          <div className="counter-area">
                            <div className="counter-content-wrap">
                              <div className="number">
                                <h5 className="counter">
                                  <CountUp delay={2} end={counter.number} />
                                </h5>
                                <span>{counter.unit}</span>
                              </div>
                              <p dangerouslySetInnerHTML={{ __html: counter.label.replace("\n", "<br />") }} />
                            </div>
                          </div>
                        </div>
                        <div className="video-wrapper">
                          <img src={videoCover.src} alt={videoCover.alt} />
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => setOpen(true)}
                            className="video-area video5"
                          >
                            <VideoIcon />
                            <h6>{watchTourLabel}</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-section-img">
                      <img src={mainImage.src} alt={mainImage.alt} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel={modalVideo.channel}
            isOpen={isOpen}
            animationSpeed={modalVideo.animationSpeed}
            videoId={modalVideo.videoId}
            ratio={modalVideo.ratio}
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    </>
  );
};

export default HomeAboutSection;
