import React from "react";
import Link from "next/link";
import DiagonalArrowIcon from "../svg/DiagonalArrowIcon";

const PackageCard = ({ tour }) => {
  return (
    <div className="package-card3 style-3 h-100 d-flex flex-column">
      <Link href={`/tour-packages/${tour.slug}`} className="package-card-img">
        <img src={tour.img} alt={tour.title} />
        {tour.tag && (
          <div className={`eg-batch ${tour.tag === "Featured" ? "green" : ""}`}>
            <span>{tour.tag}</span>
          </div>
        )}
        <div className="package-card-img-bottom">
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path
                  d="M11.9383 6.40178V2.87087C11.9383 2.03169 11.2511 1.33856 10.4118 1.33856H10.2217V1.0992C10.2217 0.500453 9.73629 0.0150575 9.13755 0.0150575C8.5388 0.0150575 8.0534 0.500453 8.0534 1.0992V1.33856H4.07821V1.0992C4.07821 0.492141 3.58607 0 2.97901 0C2.37195 0 1.87981 0.492141 1.87981 1.0992V1.33856H1.71553C0.87631 1.33856 0.193359 2.03169 0.193359 2.87087V10.9786C0.193359 11.8178 0.87631 12.5113 1.71553 12.5113H6.4916C6.88058 12.9765 7.36678 13.351 7.916 13.6082C8.46522 13.8654 9.06412 13.9991 9.67058 14C11.9503 14 13.8073 12.1426 13.8073 9.86282C13.8074 8.41786 13.0525 7.14122 11.9383 6.40178Z"
                  fill="currentColor"
                />
              </svg>
              {tour.duration}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.07812 4.19617e-05V14" strokeMiterlimit={10} />
                <path
                  d="M2.07812 1.23049C2.07812 1.23049 3.30859 2.0508 4.53906 2.0508C6.50515 2.0508 7.49482 0.41018 9.46092 0.41018C10.6914 0.41018 11.9218 1.23049 11.9218 1.23049V7.79297"
                  strokeMiterlimit={10}
                />
              </svg>
              {tour.countries}
            </li>
          </ul>
        </div>
      </Link>
      <div className="package-card-content">
        <div className="card-content-top flex-grow-1">
          <div className="rating-area">
            <ul className="rating">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <i className="bi bi-star-fill" />
                </li>
              ))}
            </ul>
            <span>{tour.rating}</span>
          </div>
          <h5>
            <Link href={`/tour-packages/${tour.slug}`}>{tour.title}</Link>
          </h5>
          <div className="location-area">
            <ul className="location-list">
              {tour.locations.slice(0, 3).map((loc, idx) => (
                <li key={idx}>
                  <Link href="/tour-packages">{loc}</Link>
                </li>
              ))}
              {tour.locations.length > 3 && (
                <li>
                  <Link href="/tour-packages">+{tour.locations.length - 3} More</Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="card-content-bottom mt-auto">
          <Link
            href={`/tour-packages/${tour.slug}`}
            className="apply-btn w-100 d-flex justify-content-center align-items-center"
          >
            Explore Now <DiagonalArrowIcon className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
