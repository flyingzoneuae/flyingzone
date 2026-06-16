import React from "react";
import ContactPhoneIcon from "@/components/svg/ContactPhoneIcon";
import ContactEmailIcon from "@/components/svg/ContactEmailIcon";
import ContactLocationIcon from "@/components/svg/ContactLocationIcon";
import ContactOpeningIcon from "@/components/svg/ContactOpeningIcon";
import { APP_SETTINGS } from "@/constants/app-setting";

const page = () => {
  const { contact } = APP_SETTINGS;

  return (
    <>
      <div className="contact-page pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="single-contact mb-40">
                <div className="title">
                  <h6>Phone</h6>
                </div>
                <div className="icon">
                  <ContactPhoneIcon />
                </div>
                <div className="content">
                  <h6>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </h6>
                  <h6>
                    <a href={`tel:${contact.phone}`}>{contact.phone2}</a>
                  </h6>
                </div>
              </div>
              <div className="single-contact mb-40">
                <div className="title">
                  <h6>Email Now</h6>
                </div>
                <div className="icon">
                  <ContactEmailIcon />
                </div>
                <div className="content">
                  <h6>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </h6>
                  {/* Removing placeholder second email or making it generic if needed */}
                </div>
              </div>
              <div className="single-contact mb-40">
                <div className="title">
                  <h6>Location</h6>
                </div>
                <div className="icon">
                  <ContactLocationIcon />
                </div>
                <div className="content">
                  <h6>
                    <a href="#">
                      {contact.location}
                    </a>
                  </h6>
                </div>
              </div>
              <div className="single-contact">
                <div className="title">
                  <h6>Opening Time</h6>
                </div>
                <div className="icon">
                  <ContactOpeningIcon />
                </div>
                <div className="content">
                  <h6>
                    <a href="#">{contact.openingTime}</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-area">
                <h3>Reach Us Anytime</h3>
                <form>
                  <div className="row">
                    <div className="col-lg-12 mb-20">
                      <div className="form-inner">
                        <label>Name*</label>
                        <input type="text" placeholder="Daniel Scoot" />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Phone</label>
                        <input type="text" placeholder="Phone Number..." />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Email</label>
                        <input type="email" placeholder="Email Us...." />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-30">
                      <div className="form-inner">
                        <label>Write Your Massage*</label>
                        <textarea
                          placeholder="What’s on your mind"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <button
                          className="primary-btn1 btn-hover"
                          type="submit"
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map mb-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605992!3d23.83407118555764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1700138349574!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default page;
