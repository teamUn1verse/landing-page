import React from "react";
import "./styles.scss";

export default Input = (props) => {
  const customClassName = props.className ? props.className : "";
  const customPlaceholder = props.placeholder ? props.placeholder : "";
  return (
    <input type="email" className={`inpt ${customClassName}`} placeholder={customPlaceholder}/>
  );
};
