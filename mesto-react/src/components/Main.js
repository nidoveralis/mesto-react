import PopupWithForm from "./PopupWithForm";
import React from 'react';
function Main(props) {

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar" onClick={props.onEditProfile}/>
        <div className="profile__avatar"/>
        <div className="profile-info">
          <h1 className="profile-info__title"/>
          <button className="profile-info__edit button" type="button" onClick={props.onEditProfile}/>
          <p className="profile-info__subtitle"/>
        </div>
        <button className="profile__add-button button" type="button" onClick={props.onAddPlace}/>
      </section>
      <section className="elements"/>

    </main>
  )
}

export default Main;