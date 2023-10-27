import React, {forwardRef} from "react";
import "./styles.scss";

export default Input = forwardRef((props, ref) => {
  const customClassName = props.className ? props.className : "";
  const customPlaceholder = props.placeholder ? props.placeholder : "";
  return (
    <input type="email" className={`inpt ${customClassName}`} placeholder={customPlaceholder} ref={ref} required/>
  );
});
