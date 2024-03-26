import React from "react";

const OTPInput = ({
  value,
  handleChange,
  className,
  maxLength,
  isLastElement,
}) => {
  return (
    <input
      value={value}
      onChange={handleChange}
      maxLength={maxLength}
      type="text"
      className={`${className} ${
        isLastElement ? "rounded-r-xl" : "rounded-xl"
      }`}
    />
  );
};

export default OTPInput;