import React from "react";

const PlayCircleIcon = ({
  className = "",
  width = 51,
  height = 51,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 206 206"
    className={`video-circle ${className}`.trim()}
    style={{ enableBackground: "new 0 0 206 206" }}
    xmlSpace="preserve"
    {...props}
  >
    <circle className="circle" strokeMiterlimit={10} cx={103} cy={103} r={100} />
    <path
      className="circle-half top-half"
      strokeWidth={4}
      strokeMiterlimit={10}
      d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
    />
    <path
      className="circle-half bottom-half"
      strokeWidth={4}
      strokeMiterlimit={10}
      d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
    />
  </svg>
);

export default PlayCircleIcon;
