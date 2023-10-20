import React from "react";
import "./styles.scss";

export default Button = (props) => {
  const customClassName = props.className ? props.className : "";
  const href = props.href ? props.href : "javascript:";
  const customOnClick = props.onClick ? props.onClick : null;
  return (
    <a className={`btn ${customClassName}`} href={href} onClick={customOnClick}>
      <div className="btn__text">{props.children}</div>
    </a>
  );
};
