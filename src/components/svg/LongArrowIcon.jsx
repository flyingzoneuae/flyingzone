import React from "react";

const LongArrowIcon = ({ direction = "right", className = "", style = {}, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={43}
      height={14}
      viewBox="0 0 43 14"
      fill="none"
      stroke="currentColor"
      className={className}
      style={style}
      {...props}
    >
      {direction === "left" ? (
        <path
          d="M42 7.18797L1.14917 7.18797M6.8649 13L1 7L6.86491 0.999997"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M1 6.81204H41.8508M36.1351 1.00002L42 7.00002L36.1351 13"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

export default LongArrowIcon;
