import React from "react";

const DotIcon = ({ width = 9, height = 9, className = "", fill = "currentColor" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 9 9"
            className={className}
            fill={fill}
        >
            <circle cx="4.5" cy="4.5" r="4.5" />
        </svg>
    );
};

export default DotIcon;
