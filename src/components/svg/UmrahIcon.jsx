import React from "react";

const UmrahIcon = ({ width = 23, height = 23, className = "", fill = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 23 23"
      className={className}
      fill={fill}
    >
      {/* Mosque base */}
      <rect x="6" y="9" width="11" height="10" fill={fill} />
      
      {/* Mosque dome */}
      <path d="M11.5 3.5C8.5 3.5 6 6 6 9C6 9 8.5 8.5 11.5 8.5C14.5 8.5 17 9 17 9C17 6 14.5 3.5 11.5 3.5Z" fill={fill} />
      <ellipse cx="11.5" cy="7" rx="4.5" ry="3" fill={fill} opacity="0.6" />
      
      {/* Dome highlight */}
      <ellipse cx="11.5" cy="6.5" rx="2.5" ry="1.5" fill="white" opacity="0.3" />
      
      {/* Mosque entrance arch */}
      <path d="M9.5 12.5C9.5 12.5 9.5 14.5 11.5 14.5C13.5 14.5 13.5 12.5 13.5 12.5V19H9.5V12.5Z" fill={fill} opacity="0.4" />
      <path d="M11.5 12.5C12.328 12.5 13 13.172 13 14V16.5C13 17.328 12.328 18 11.5 18C10.672 18 10 17.328 10 16.5V14C10 13.172 10.672 12.5 11.5 12.5Z" 
            fill="white" opacity="0.85" />
      
      {/* Minarets */}
      <rect x="6.5" y="4.5" width="1.2" height="4.5" fill={fill} />
      <rect x="15.3" y="4.5" width="1.2" height="4.5" fill={fill} />
      <circle cx="7.1" cy="4" r="0.8" fill={fill} />
      <circle cx="15.9" cy="4" r="0.8" fill={fill} />
      
      {/* Crescent moon */}
      <path d="M11.5 20.5C12.328 20.5 13 19.828 13 19C13 18.172 12.328 17.5 11.5 17.5C10.672 17.5 10 18.172 10 19C10 19.828 10.672 20.5 11.5 20.5Z" 
            fill={fill} />
      <circle cx="13" cy="19" r="0.6" fill={fill} />
    </svg>
  );
};

export default UmrahIcon;
