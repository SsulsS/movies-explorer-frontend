import './Popup.css';
import React from 'react';
import successfully from '../../images/successfully.png'

function Popup({ isOpen, onClose, message }) {
  const contentRef = React.useRef();
 
  const handleOverlayClick = (event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={handleOverlayClick}>
       <div ref={contentRef} className='popup__container'>
         <img src={successfully} alt="Успешно" className='popup__image'/>
         <p className='popup__text'>{message}</p>
         <button onClick={onClose} className='popup__close-button'>
         </button>
       </div>
     </div>
  );
};

export default Popup;