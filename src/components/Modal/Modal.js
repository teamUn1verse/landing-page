import React from 'react';
import './styles.scss'; // Assuming you have a separate CSS file for styling the modal

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        onClose(); // Using onClose function to close the modal
    }
  }

  return (
    <div className={`modal-overlay ${isVisible ? 'active' : ''}`} onClick={closeModal}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
