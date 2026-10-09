"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import React, { useState } from "react";
import visaData from "@/data/visa.json";
import VisaCard from "@/components/visaComponents/VisaCard";
import PlaneIcon from "@/components/svg/PlaneIcon";

const GlobalVisaPage = () => {
  const globalVisas = visaData.globalVisa;
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 6, globalVisas.length));
  };

  return (
    <>
      <Breadcrumb pagename="Global Visa" pagetitle="Global Visa Services" bgImage="/assets/images/banners/global-visa.png" />

      <div className="visa-with-sidebar-section pt-120 mb-120">
        <div className="container one">
          <div className="section-title5 mb-40">
            <span>
              Global Visa
              <PlaneIcon className="ms-1" style={{ width: 20, height: 20, opacity: 0.8 }} />
            </span>
            <h3>Explore our comprehensive Global Visa services for destinations worldwide</h3>
          </div>
          <div className="row g-lg-4 gy-5">
            {/* Left Content Area */}
            <div className="col-lg-8">
              <div className="mb-70">
                <div className="row gy-4">
                  {globalVisas.slice(0, visibleCount).map((visa) => (
                    <div key={visa.id} className="col-md-12">
                      <VisaCard visa={visa} className="four" />
                    </div>
                  ))}
                </div>
                {visibleCount < globalVisas.length && (
                  <div className="row mt-50">
                    <div className="col-lg-12 d-flex justify-content-center">
                      <button
                        type="button"
                        onClick={handleLoadMore}
                        className="apply-btn bg-transparent border-1"
                        style={{ color: 'var(--primary-color1)', borderColor: 'var(--primary-color1)' }}
                      >
                        Load More
                        <span className="arrow">
                          <i className="bi bi-arrow-down" />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-area sticky-lg-top" style={{ top: '100px', zIndex: 10 }}>
                {/* FAQ Section */}
                <h5 className="widget-title mb-30">
                  FAQ - Global Visa Information:
                </h5>
                <div className="faq-content mb-50">
                  <div className="accordion" id="accordionGlobalVisa">
                    {visaData.faqs.globalVisa.map((faq, index) => (
                      <div key={faq.id} className="accordion-item">
                        <h2 className="accordion-header" id={`globalVisaheading${index + 1}`}>
                          <button
                            className={index === 0 ? "accordion-button" : "accordion-button collapsed"}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#globalVisacollapse${index + 1}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`globalVisacollapse${index + 1}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`globalVisacollapse${index + 1}`}
                          className={index === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                          aria-labelledby={`globalVisaheading${index + 1}`}
                          data-bs-parent="#accordionGlobalVisa"
                        >
                          <div className="accordion-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
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

export default GlobalVisaPage;
