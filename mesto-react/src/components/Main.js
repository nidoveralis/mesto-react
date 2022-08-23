
function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  return(
    <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar" onClick={onEditAvatar} />
        <div className="profile__avatar" />
        <div className="profile-info">
          <h1 className="profile-info__title" />
          <button className="profile-info__edit button" type="button"  onClick={onEditProfile} />
          <p className="profile-info__subtitle" />
        </div>
        <button className="profile__add-button button" type="button" onClick={onAddPlace} />
      </section>
      <section className="elements"> </section>
    </main>
  )
}

export default Main;