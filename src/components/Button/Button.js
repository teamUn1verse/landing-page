import React from "react";
import "./styles.scss";

export default Button = (props) => {
  const customClassName = props.className ? props.className : "";
  const customOnClick = props.onClick ? props.onClick : null;
  const conditionalProps = {};
  if (props.href) {
    conditionalProps.href = props.href;
  }
  return (
    <a
      className={`btn ${customClassName}`}
      {...conditionalProps}
      onClick={customOnClick}
    >
      <div className="btn__text">{props.children}</div>
    </a>
  );
};
