"use client";
import React from "react";

const PackageItinerary = ({ itinerary, title="Journey Itinerary" }) => {
  if (!itinerary || itinerary.length === 0) return null;

  return (
    <>
      <h4>{title}</h4>
      <div className="accordion tour-plan" id="tourPlan">
        {itinerary.map((item, index) => (
          <div key={index} className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                <span>{item.day}</span> {item.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              data-bs-parent="#tourPlan"
            >
              <div className="accordion-body">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageItinerary;
