import React from "react";

const DiagonalArrowIcon = ({ className = "", style = {}, ...props }) => {
  return (
    <svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      className={className}
      style={style}
      {...props}
    >
      <path
        d="M2.73828 11.75L15.6103 4.31833"
        strokeLinecap="round"
      />
      <path
        d="M13.3477 10.3057L15.6115 4.31789L9.29402 3.28456"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DiagonalArrowIcon;
