import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  
  function handleEditAvatarClick() {
   setPIsEditAvatarPopupOpen(true);
    setIsOpen('.popup-avatar');
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setIsOpen('.popup-profile');
  };

  function handleAddPlaceClick() {
    setPIsAddPlacePopupOpen(true);
    setIsOpen('.popup-elements');
  };
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isOpen, setIsOpen]= React.useState();
  const [val, setval] = React.useState();
  //isAddPlacePopupOpen={addprop} isEditAvatarPopupOpen={avatarprop}
  const [isAddPlacePopupOpen, setPIsAddPlacePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setPIsEditAvatarPopupOpen] = React.useState();
//onEditProfile = {propValue} 

 //visible={isEditProfilePopupOpen}
  
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar= {handleEditAvatarClick} />
        <Footer />
        <PopupWithForm nameClass = {isOpen} />

        <div className="popup popup-avatar">
          <div className="popup__container">
          <button className="popup__button-close button" type="button"/>
          <form className="popup__form form-avatar" name="avatar" noValidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <fieldset className="popup__field">
              <input  id="avatar" type="url" className="popup__input popup__input_type_avatar" name="avatar" minLength="2" maxLength="200" required/>
              <span className="avatar-error input-error"/> 
            </fieldset>
          <input type="submit" value="Сохранить" className="popup__button-save popup__button-save_avatar"/>
          </form>
          </div>
        </div>

        <div className="popup popup-deleteCard">
          <div className="popup__container">
            <button className="popup__button-close button" type="button"/>
            <form className="popup__form popup__form_dalete" name="delete-card" noValidate>
              <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
              <input type="submit" value="Да" className="popup__button-save popup__button-save_delete"/>
            </form>
          </div>
        </div>

        <div className="popup popup-elements">
          <div className="popup__container">
          <button className="popup__button-close button" type="button" />
          <form className="popup__form form-element" name="new-element" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <fieldset className="popup__field">
              <input id="name-element-input" type="text" className="popup__input popup__input_type_title" name="title" placeholder="Название" minLength="2" maxLength="30" required/>
              <span className="name-element-input-error input-error" /> 
            </fieldset>
            <fieldset className="popup__field">
              <input id="link-element-input" type="url" className="popup__input popup__input_type_link" name="link" placeholder="Ссылка на картинку" required />
              <span className="link-element-input-error input-error" /> 
            </fieldset>
            <input type="submit" value="Создать" className="popup__button-save"/>
          </form>
          </div>
        </div>
    
        <div className="popup popup-picture">
          <div className="popup__container">
            <button className="popup__button-close button" type="button" />
            <img className="popup__image" />
            <p className="popup__subtitle" />
          </div>
        </div>
        <template className="add-element">
          <div className="element">
            <button className="element__delete button" type="button" />
            <img className="element__image" />
            <h2 className="element__title" />
            <div className="element__like-conteiner">
              <button className="element__like button" type="button" />
              <span className="element__like-count" />
            </div>
          </div>
        </template>
      </div>
    </div>
  );
}

export default App;