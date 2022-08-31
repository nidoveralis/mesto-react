import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  const childrenProfile = <>
    <fieldset className="popup__field">
      <input id="name-input" type="text" className="popup__input popup__input_type_name" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="name-input-error input-error" />
    </fieldset> 
    <fieldset className="popup__field">
      <input  id="job-input" type="text" className="popup__input popup__input_type_job" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
      <span className="job-input-error input-error" /> 
    </fieldset>
    <input type="submit" value="Сохранить" className="popup__button-save" />
  </>;
  return(
    <PopupWithForm onClose = {closeAllPopups}  name = {'profile'} title = {'Редактировать профиль'} children = {childrenProfile}/>
  )
}

export default EditProfilePopup;
//<PopupWithForm onClose = {closeAllPopups} active = {isEditProfilePopupOpen} name = {'profile'} title = {'Редактировать профиль'} children = {childrenProfile}/>