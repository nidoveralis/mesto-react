import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.showAvatar().then(data=>{
      setUserAvatar(data.avatar)
    });
    api.getUser().then(data=>{
      setUserName(data.name);
      setUserDescription(data.about);
    });
    api.getInitialCards().then(data=>{
      setCards(data);
    });
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar" onClick={onEditAvatar} />
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
        <div className="profile-info">
          <h1 className="profile-info__title">{userName}</h1>
          <button className="profile-info__edit button" type="button"  onClick={onEditProfile} />
          <p className="profile-info__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button button" type="button" onClick={onAddPlace} />
      </section>
      <section className="elements">
        {cards.map(card=> (
          <Card key = {card._id} card = {card} openCard = {onCardClick} />
        ))}
      </section>
    </main>
  )
}

export default Main; 