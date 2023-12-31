import React, { useState } from 'react';
import './Popup.css';

export default function Popup({
  title,
  subtitle,
  children,
  formFields,
  showConsent,
  handleBtnClick,
  popupClass,
}) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={`popup-${popupClass}`}>
      <div className='popup-x'>
        <span onClick={handleBtnClick}>x</span>
      </div>

      <div className='popup-container'>
        <div className='popup__text-container'>
          <h2 className='popup__title'>{title}</h2>
          <h3 className='popup__subtitle'>{subtitle}</h3>
        </div>

        {children}

        <div className={`popup__${popupClass}-form-container`}>
          <form className='form' onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
              <input
                key={index}
                type={field}
                name={field}
                placeholder={field}
                value={formData[field] || ''}
                onChange={handleInputChange}
              />
            ))}
            {showConsent && (
              <label>
                <input type='checkbox' name='consent' />
                Data collection consent
              </label>
            )}
            <button className='button__send' type='submit'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
