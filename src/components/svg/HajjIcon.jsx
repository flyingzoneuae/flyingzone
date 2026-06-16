import React from "react";

const HajjIcon = ({ width = 23, height = 23, className = "", fill = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 23 23"
      className={className}
      fill={fill}
    >
      {/* Kaaba structure - isometric cube */}
      <path d="M11.5 4.5L7.5 8.5V13.5L11.5 17.5L15.5 13.5V8.5L11.5 4.5Z" fill={fill} />
      
      {/* Kaaba top face */}
      <path d="M11.5 4.5L7.5 8.5L11.5 8.5L15.5 8.5L11.5 4.5Z" fill={fill} opacity="0.65" />
      
      {/* Kaaba door */}
      <rect x="10.5" y="10" width="2" height="5" fill="white" opacity="0.75" />
      <line x1="11.5" y1="10" x2="11.5" y2="15" stroke={fill} strokeWidth="0.4" opacity="0.4" />
      
      {/* Crescent moon */}
      <path d="M11.5 19.5C12.881 19.5 14 18.381 14 17C14 15.619 12.881 14.5 11.5 14.5C10.119 14.5 9 15.619 9 17C9 18.381 10.119 19.5 11.5 19.5Z" 
            fill={fill} opacity="0.25" />
      <path d="M11.5 18.5C12.328 18.5 13 17.828 13 17C13 16.172 12.328 15.5 11.5 15.5C10.672 15.5 10 16.172 10 17C10 17.828 10.672 18.5 11.5 18.5Z" 
            fill={fill} />
      <circle cx="13.2" cy="17" r="0.65" fill={fill} />
    </svg>
  );
};

export default HajjIcon;
