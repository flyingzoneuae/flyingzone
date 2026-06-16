import React from "react";
import EmailIcon from "../svg/EmailIcon";
import TikTokIcon from "../svg/TikTokIcon";
import { APP_SETTINGS } from "@/constants/app-setting";

const Topbar = () => {
  const { contact, socialLinks } = APP_SETTINGS;
  
  return (
    <>
      <div className="top-bar style-2">
        <div className="topbar-left two">
          <div className="icon">
            <EmailIcon width={27} height={27} />
          </div>
          <div className="content">
            <span>Email:</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <p>
          50% Off Your Next Trip. Hurry Up For your new Tour!{" "}
          <a href="#">Book Your Tour</a>{" "}
        </p>
        <div className="topbar-right">
          <div className="social-icon-area">
            <ul>
              <li>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
                  <TikTokIcon
                    width={10}
                    height={10}
                    fill="currentColor"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
