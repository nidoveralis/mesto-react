import React from 'react';
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import {api} from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const userContext = React.useContext(CurrentUserContext);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser,setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImagePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false)
    setSelectedCard({});
  };

  React.useEffect(()=>{
    api.getUserInfo().then(data=>{
      setCurrentUser(data);
    })
    .catch(e=>console.log(e))
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then(data=>{
      setCards(data);
    })
    .catch(e=>console.log(e))
  }, []);

  function handleUpdateUser(user) {
    api.setUserInfo(user).then(data=>{
      setCurrentUser(data);
      closeAllPopups();
    })
  };

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar).then(data=>{
      setCurrentUser(data);
      closeAllPopups();
    })
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(e=>console.log(e))
  };

  function handleUpdateAddPlace(item) {
    api.addNewCard(item).then(newCard=>{
      setCards([newCard, ...cards]); 
      closeAllPopups();
    })
    .catch(e=>console.log(e))
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((res) => {
      setCards(prevCards=>prevCards.filter(item=>{return (item._id!==card._id)}))
    })
    .catch(e=>console.log(e))
  };

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="App">
        <div className="page">
          <Header />
          <Main onEditAvatar = {handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick} onCardClick = {handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleUpdateAddPlace} />
          <PopupWithForm onClose = {closeAllPopups} active = {false} name = {'deleteCard'} title = {'Вы уверены?'} children = {<input type="submit" value="Да" className="popup__button-save popup__button-save_delete" />}/>
          <ImagePopup active = {isImagePopupOpen} onClose = {closeAllPopups} card={selectedCard} />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;