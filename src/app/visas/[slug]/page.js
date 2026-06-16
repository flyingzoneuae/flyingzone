"use client";
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import visaData from "@/data/visa.json";
import PackageBookingForm from "@/components/packageDetail/PackageBookingForm";
import { useParams } from "next/navigation";

const VisaDetailsPage = () => {
  const params = useParams();
  const slug = params.slug;

  const allVisas = [...visaData.globalVisa, ...visaData.uaeVisa];
  const visa = allVisas.find((v) => v.slug === slug);

  const displayVisa = visa || visaData.globalVisa[0];
  const faqs = displayVisa.faqs || (displayVisa.type === "uae" ? visaData.faqs.uaeVisa : visaData.faqs.globalVisa);

  const defaultRequiredDocs = [
    "Passport Scan Copy: Clearly scanned Passport copy required. Minimum of 6 months validity required from the arrival date.",
    "Photo Specification: Passport Size Photo with White Background (clear scanned Copy required)"
  ];

  const requiredDocs = displayVisa.requiredDocuments || defaultRequiredDocs;

  return (
    <>
      <Breadcrumb pagename="Visa Details" pagetitle={displayVisa.title || "Visa Details"} bgImage={displayVisa.img || "/assets/img/innerpage/inner-banner-bg.png"} />
      <div className="visa-details-pages pt-120 mb-120">
        <div className="container one">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="visa-title">
                <h3>{displayVisa.title}</h3>
              </div>

              <div className="visa-description mb-40">
                <p>{displayVisa.description || `Get your ${displayVisa.title} with our professional assistance. We provide end-to-end support for your visa application processing.`}</p>
              </div>

              <ul className="visa-meta">
                <li>
                  <span>Country :</span> {displayVisa.country}
                </li>
                <li>
                  <span>Visa Type :</span> {displayVisa.visaType}
                </li>
                <li>
                  <span>Visa Mode :</span> {displayVisa.visaMode}
                </li>
                <li>
                  <span>Validity :</span> {displayVisa.validity}
                </li>
                <li>
                  <span>Processing Time :</span> {displayVisa.processingTime}
                </li>
              </ul>

              <div className="visa-required-document mb-50 mt-50">
                <div className="document-list">
                  <h3>View Required Documents</h3>
                  <h6>
                    <span>*</span>Required Documents for {displayVisa.title}
                  </h6>
                  <ul>
                    {requiredDocs.map((doc, idx) => (
                      <li key={idx}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} viewBox="0 0 18 16">
                          <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                        </svg>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h4 className="widget-title mb-30">
                FAQ - {displayVisa.country} Visa Information:
              </h4>
              <div className="faq-content">
                <div className="accordion" id="accordionVisaDetails">
                  {faqs.map((faq, index) => (
                    <div key={faq.id || index} className="accordion-item">
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className={index === 0 ? "accordion-button" : "accordion-button collapsed"}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`collapse${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={index === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionVisaDetails"
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

            <div className="col-lg-4">
              <div className="visa-sidebar sticky-lg-top" style={{ top: '100px', zIndex: 10 }}>
                <PackageBookingForm
                  title="Inquiry Form"
                  subtitle="Complete form for complaints or service inquiries; expect prompt response via phone/email."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisaDetailsPage;
