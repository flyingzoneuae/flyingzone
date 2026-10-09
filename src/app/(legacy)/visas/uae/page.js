"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import React, { useState } from "react";
import visaData from "@/data/visa.json";
import VisaCard from "@/components/visaComponents/VisaCard";
import PlaneIcon from "@/components/svg/PlaneIcon";

const UAEVisaPage = () => {
  const uaeVisas = visaData.uaeVisa;
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 6, uaeVisas.length));
  };

  return (
    <>
      <Breadcrumb pagename="UAE Visa" pagetitle="UAE Visa Services" bgImage="/assets/images/banners/visa.png" />

      <div className="visa-with-sidebar-section pt-120 mb-120">
        <div className="container one">
          <div className="row">
            <div className="section-title5 mb-40">
              <span>
                UAE Visa
                <PlaneIcon className="ms-1" style={{ width: 20, height: 20, opacity: 0.8 }} />
              </span>
              <h3>Explore our comprehensive UAE Visa services for all your travel needs</h3>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            {/* Left Content Area */}
            <div className="col-lg-8">
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  {uaeVisas.slice(0, visibleCount).map((visa) => (
                    <div key={visa.id} className="col-md-12 item">
                      <VisaCard visa={visa} className="four" />
                    </div>
                  ))}
                </div>
                {visibleCount < uaeVisas.length && (
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
                  FAQ - UAE Visa Information:
                </h5>
                <div className="faq-content mb-50">
                  <div className="accordion" id="accordionUAEVisa">
                    {visaData.faqs.uaeVisa.map((faq, index) => (
                      <div key={faq.id} className="accordion-item">
                        <h2 className="accordion-header" id={`uaeVisaheading${index + 1}`}>
                          <button
                            className={index === 0 ? "accordion-button" : "accordion-button collapsed"}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#uaeVisacollapse${index + 1}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`uaeVisacollapse${index + 1}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`uaeVisacollapse${index + 1}`}
                          className={index === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                          aria-labelledby={`uaeVisaheading${index + 1}`}
                          data-bs-parent="#accordionUAEVisa"
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

export default UAEVisaPage;
