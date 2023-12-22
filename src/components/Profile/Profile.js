import './Profile.css'
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_REGEX, NAME_REGEX } from '../../utils/config';

function Profile({ onLogout, onUpdateProfile, serverError, setServerError }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false); 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [isButtonActive, setIsButtonActive] = useState(false); 
  const [nameError, setNameError] = useState(''); 
  const [emailError, setEmailError] = useState(''); 


  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  useEffect(() => {
    if (serverError) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [serverError, currentUser.name, currentUser.email]);

  useEffect(() => {
    const isNameValid = NAME_REGEX.test(name);
    const isEmailValid = EMAIL_REGEX.test(email);

    setNameError(isNameValid ? '' : 'Имя может содержать только латиницу, кириллицу, пробел или дефис');
    setEmailError(isEmailValid ? '' : 'Некорректный формат электронной почты');

    setIsButtonActive(isNameValid && isEmailValid && (name !== currentUser.name || email !== currentUser.email) && !serverError);

  }, [name, email, currentUser.name, currentUser.email, serverError]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setServerError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setServerError('');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateProfile({
      name,
      email
    })
    .then(() => {
      setIsEditing(false);
    });
  };


  return (
    <section className="profile" id="profile">
      <form className="profile__form" onSubmit={handleSave} noValidate>
        <h3 className="profile__greeting">Привет, {name}!</h3>
        <div className="profile__inputs">
          <p className="profile__text">Имя</p>
          <div className="profile__area profile__area_type_name">
            <input className="profile__settings" value={name} onChange={handleNameChange} required minLength='2' maxLength='30' disabled={!isEditing}/>
          </div>
          {nameError && <span className='profile__error'>{nameError}</span>}
          <div className="profile__area profile__area_type_email">
            <input className="profile__settings" value={email} onChange={handleEmailChange} />
          </div>
          <p className="profile__text">E-mail</p>
        </div>
        {emailError && <span className='profile__error'>{emailError}</span>}
        {serverError && <span className='profile__server-error'>{serverError}</span>}

        {isEditing ? (
               <button className='profile__button profile__button-save' type='button' onClick={handleSave} disabled={!isButtonActive}>
                  Сохранить
               </button>
            ) : (
               <button className='profile__button' type='button' onClick={handleEdit}>
                  Редактировать
               </button>
            )}
        <Link to='/' onClick={onLogout} className='profile__link'>
            Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
};

export default Profile;
