/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon41 = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-41 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19 3C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11L5 11C3.89543 11 3 10.1046 3 9L3 5C3 3.89543 3.89543 3 5 3L19 3ZM19 9V5L5 5L5 9L19 9Z"
        fill={color}
      />
      <path
        className="path"
        d="M19 13C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19L3 15C3 13.8954 3.89543 13 5 13L19 13ZM19 19V15L5 15L5 19H19Z"
        fill={color}
      />
    </svg>
  );
};

Icon41.propTypes = {
  color: PropTypes.string,
};
