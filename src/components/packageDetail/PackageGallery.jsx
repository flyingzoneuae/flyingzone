"use client";
import React, { useState, useMemo } from "react";
import ModalVideo from "react-modal-video";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

const PackageGallery = ({ mainImage, title, gallery = [], videoUrl = "https://www.youtube.com/watch?v=r4KpWiK08vM" }) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });

  const videoId = useMemo(() => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : "r4KpWiK08vM";
  }, [videoUrl]);

  const displayImages = useMemo(() => {
    if (gallery && gallery.length > 0) {
      return gallery.map(img => ({ imageBig: img }));
    }
    return Array(6).fill({ imageBig: mainImage });
  }, [gallery, mainImage]);

  return (
    <>
      <div className="package-img-group mb-50">
        <div className="row align-items-stretch g-3">
          <div className="col-lg-6 d-flex flex-column">
            <div className="gallery-img-wrap flex-grow-1">
              <img src={displayImages[0].imageBig} alt={title} />
              <a style={{ cursor: "pointer" }}>
                <i
                  className="bi bi-eye"
                  onClick={() => setOpenimg({ openingState: true, openingIndex: 0 })}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="gallery-img-wrap h-100">
                  <img src={displayImages[1]?.imageBig || mainImage} alt={title} />
                  <a style={{ cursor: "pointer" }}>
                    <i
                      className="bi bi-eye"
                      onClick={() => setOpenimg({ openingState: true, openingIndex: 1 })}
                    />
                  </a>
                </div>
              </div>
              <div className="col-6 h-50">
                <div className="gallery-img-wrap h-100">
                  <img src={displayImages[2]?.imageBig || mainImage} alt={title} />
                  <a style={{ cursor: "pointer" }}>
                    <i
                      className="bi bi-eye"
                      onClick={() => setOpenimg({ openingState: true, openingIndex: 2 })}
                    />
                  </a>
                </div>
              </div>
              <div className="col-6 h-50">
                <div className="gallery-img-wrap h-100 active">
                  <img src={displayImages[3]?.imageBig || mainImage} alt={title} />
                  <button
                    className="StartSlideShowFirstImage"
                    onClick={() => setOpenimg({ openingState: true, openingIndex: 3 })}
                  >
                    <i className="bi bi-plus-lg" /> View More
                  </button>
                </div>
              </div>
              <div className="col-6 h-50">
                <div className="gallery-img-wrap h-100 active">
                  <img src={displayImages[4]?.imageBig || mainImage} alt={title} />
                  <a style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
                    <i className="bi bi-play-circle" /> Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg({ openingState: false, openingIndex: 0 })}
        slides={displayImages.map((elem) => ({ src: elem.imageBig }))}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default PackageGallery;
