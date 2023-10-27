import React from "react";
import "./MobileMenu.scss";

export const MobileMenu = ({ onClose, isOpened }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className={`mobile-menu ${isOpened ? "mobile-menu__opened" : ""}`}>
      <div className="menu-overlay" onClick={handleClose}></div>
      <div className="mobile-menu-container">
        <button className="close-button" onClick={handleClose}>
          <img
            className="close-icon"
            alt="Close icon"
            src="/img/close-button.svg"
          />
        </button>
        <div className="menu-items">
          <a href="#about-us-mobile" className="menu-item-mobile" onClick={handleClose}>
            About Us
          </a>
          <a href="#reviews-mobile" className="menu-item-mobile" onClick={handleClose}>
            Reviews
          </a>
          <a href="#value-for-u" className="menu-item-mobile" onClick={handleClose}>
            Podcast
          </a>
          <a href="#categories-mobile" className="menu-item-mobile" onClick={handleClose}>
            Categories
          </a>
          <a href="#subscribe-mobile" className="menu-item-mobile" onClick={handleClose}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
