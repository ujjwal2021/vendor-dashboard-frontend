import React from "react";

const Button = ({
  size = "medium",
  type = "filled",
  color = "primary",
  icon,
  children,
  onClick = null,
}) => {
  return (
    <button className={`button ${size} ${type} ${color} h6`} onClick={onClick}>
      {icon} {children}
    </button>
  );
};

export default Button;
