import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  const userContext = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === userContext._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  };

  function handleCardDelete(card) {
    const isOwn = card.likes.some(i => i._id === userContext._id);
    api.deleteCard(card._id, !isOwn).then((newCard) => {
      setCards((cards.filter(card)))
      
        //setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  };

  React.useEffect(() => {
    api.showAvatar().then(data=>{
      setUserAvatar(data.avatar)
    });
    api.getInitialCards().then(data=>{
      setCards(data);
    });
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar" onClick={onEditAvatar} />
        <div className="profile__avatar" />
        <div className="profile-info">
          <h1 className="profile-info__title">{userContext.name}</h1>
          <button className="profile-info__edit button" type="button"  onClick={onEditProfile} />
          <p className="profile-info__subtitle">{userContext.about}</p>
        </div>
        <button className="profile__add-button button" type="button" onClick={onAddPlace} />
      </section>
      <section className="elements">
        {cards.map(card=> (
          <Card key = {card._id} card = {card} openCard = {onCardClick} onCardLike = {handleCardLike} onCardDelete={handleCardDelete} />
        ))}
      </section>
    </main>
  )
}

export default Main; 
//style={{ backgroundImage: `url(${userAvatar})` }} 