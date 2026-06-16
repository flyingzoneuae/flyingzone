"use client";
import React from "react";

const PackageBookingForm = ({ title, subtitle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="booking-form-wrap mb-40">
      <h4>{title || "Book Your Journey"}</h4>
      <p>{subtitle || "Perform your sacred duty with ease. Contact us for personalized arrangements!"}</p>
      <div className="sidebar-booking-form mt-4">
        <form onSubmit={handleSubmit}>
          <div className="form-inner mb-20">
            <label>Full Name <span>*</span></label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-inner mb-20">
            <label>Email Address <span>*</span></label>
            <input type="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-inner mb-20">
            <label>Phone Number <span>*</span></label>
            <input type="text" placeholder="Enter your phone number" required />
          </div>
          <div className="form-inner mb-30">
            <label>Your Inquiry <span>*</span></label>
            <textarea placeholder="Tell us more about your requirements" required />
          </div>
          <div className="form-inner">
            <button type="submit" className="primary-btn1 two w-100">
              Submit Booking Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageBookingForm;
