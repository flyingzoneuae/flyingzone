import React from "react";
import Link from "next/link";
import DiagonalArrowIcon from "../svg/DiagonalArrowIcon";

const VisaCard = ({ visa, className = "" }) => {
  console.log(visa);
  return (
    <div className={`package-card4 h-100 ${className}`}>
      <Link href={`/visas/${visa.slug}`} className="package-card-img">
        <img src={visa.img} alt={visa.title} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
      </Link>
      <div className="package-card-content d-flex flex-column">
        <div className="card-content-top flex-grow-1 mb-3">
          <h5>
            <Link href={`/visas/${visa.slug}`}>{visa.title}</Link>
          </h5>
          <ul>
            <li>
              <span>Country :</span> {visa.country}
            </li>
            <li>
              <span>Visa Type :</span> {visa.visaType}
            </li>
            {visa.visaMode && (
              <li>
                <span>Visa Mode :</span> {visa.visaMode}
              </li>
            )}
            <li>
              <span>Validity :</span> {visa.validity}
            </li>
            <li>
              <span>Processing Time :</span> {visa.processingTime}
            </li>
          </ul>
        </div>
        <div className="card-content-bottom mt-auto">
          <Link
            href={`/visas/${visa.slug}`}
            className="apply-btn w-100 justify-content-center"
          >
            Apply Now
            <div className="arrow">
              <DiagonalArrowIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
