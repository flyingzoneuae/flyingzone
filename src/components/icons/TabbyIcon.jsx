import React from "react";

const TabbyIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="30"
            viewBox="0 0 170 80"
            style={{ display: "block" }}
        >
            {/* Background Rounded Rect */}
            <rect
                x="0"
                y="0"
                width="170"
                height="80"
                rx="20"
                fill="#39F5AD"
            />
            {/* Logo Text - simplified vector look */}
            <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#292929"
                fontSize="54"
                fontWeight="900"
                fontFamily="sans-serif"
                letterSpacing="-3"
            >
                tabby
            </text>
        </svg>
    );
};

export default TabbyIcon;
