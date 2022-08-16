import logo from './images/header__logo.svg'

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <img src={logo} alt="Логотип" className="header__logo"/>
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__edit-avatar"/>
            <div className="profile__avatar"/>
            <div className="profile-info">
              <h1 className="profile-info__title"/>
              <button className="profile-info__edit button" type="button"/>
              <p className="profile-info__subtitle"/>
            </div>
            <button className="profile__add-button button" type="button"/>
          </section>
          <section className="elements"/>
        </main>
        <footer className="footer">
          <div className="footer__copyright">&copy; 2022 Mesto Russia</div>
        </footer>

        <div className="popup popup-profile">
          <div className="popup__container">
          <button className="popup__button-close button" type="button"/>
          <form className="popup__form form-profile" name="personal-info" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <fieldset className="popup__field">
              <input id="name-input" type="text" className="popup__input popup__input_type_name" name="name" placeholder="Имя" minlength="2" maxlength="40" required/>
              <span className="name-input-error input-error"/>
            </fieldset> 
            <fieldset className="popup__field">
              <input  id="job-input" type="text" className="popup__input popup__input_type_job" name="about" placeholder="О себе" minlength="2" maxlength="200" required/>
              <span className="job-input-error input-error"/> 
            </fieldset>
            <input type="submit" value="Сохранить" className="popup__button-save"/>
          </form>
          </div>
        </div>

        <div className="popup popup-avatar">
          <div className="popup__container">
          <button className="popup__button-close button" type="button"/>
          <form className="popup__form form-avatar" name="avatar" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <fieldset className="popup__field">
              <input  id="avatar" type="url" className="popup__input popup__input_type_avatar" name="avatar" minlength="2" maxlength="200" required/>
              <span className="avatar-error input-error"/> 
            </fieldset>
          <input type="submit" value="Сохранить" className="popup__button-save popup__button-save_avatar"/>
          </form>
          </div>
        </div>

        <div className="popup popup-deleteCard">
          <div className="popup__container">
            <button className="popup__button-close button" type="button"/>
            <form className="popup__form popup__form_dalete" name="delete-card" novalidate>
              <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
              <input type="submit" value="Да" className="popup__button-save popup__button-save_delete"/>
            </form>
          </div>
        </div>

        <div className="popup popup-elements">
          <div className="popup__container">
          <button className="popup__button-close button" type="button" />
          <form className="popup__form form-element" name="new-element" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <fieldset className="popup__field">
              <input id="name-element-input" type="text" className="popup__input popup__input_type_title" name="title" placeholder="Название" minlength="2" maxlength="30" required/>
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