import Main from "./Main";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div class="page">
    <Header />
    <Main />
    <footer class="footer">
      <div class="footer__copyright">&copy; 2022 Mesto Russia</div>
    </footer>

    <div class="popup popup-profile">
      <div class="popup__container">
        <button class="popup__button-close button" type="button" />
        <form class="popup__form form-profile" name="personal-info" noValidate>
          <h2 class="popup__title">Редактировать профиль</h2>
          <fieldset class="popup__field">
            <input id="name-input" type="text" class="popup__input popup__input_type_name" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span class="name-input-error input-error" />
          </fieldset> 
          <fieldset class="popup__field">
          <input  id="job-input" type="text" class="popup__input popup__input_type_job" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
          <span class="job-input-error input-error" /> 
          </fieldset>
          <input type="submit" value="Сохранить" class="popup__button-save" />
        </form>
      </div>
    </div>

    <div class="popup popup-avatar">
      <div class="popup__container">
        <button class="popup__button-close button" type="button" />
        <form class="popup__form form-avatar" name="avatar" noValidate>
          <h2 class="popup__title">Обновить аватар</h2>
          <fieldset class="popup__field">
          <input  id="avatar" type="url" class="popup__input popup__input_type_avatar" name="avatar" minLength="2" maxLength="200" required />
          <span class="avatar-error input-error" /> 
          </fieldset>
          <input type="submit" value="Сохранить" class="popup__button-save popup__button-save_avatar" />
        </form>
      </div>
    </div>

    <div class="popup popup-deleteCard">
      <div class="popup__container">
        <button class="popup__button-close button" type="button" />
        <form class="popup__form popup__form_dalete" name="delete-card" noValidate>
          <h2 class="popup__title popup__title_delete">Вы уверены?</h2>
          <input type="submit" value="Да" class="popup__button-save popup__button-save_delete" />
        </form>
      </div>
    </div>

    <div class="popup popup-elements">
      <div class="popup__container">
        <button class="popup__button-close button" type="button" />
        <form class="popup__form form-element" name="new-element" noValidate>
          <h2 class="popup__title">Новое место</h2>
          <fieldset class="popup__field">
            <input id="name-element-input" type="text" class="popup__input popup__input_type_title" name="title" placeholder="Название" minLength="2" maxLength="30" required />
            <span class="name-element-input-error input-error" /> 
          </fieldset>
          <fieldset class="popup__field">
            <input id="link-element-input" type="url" class="popup__input popup__input_type_link" name="link" placeholder="Ссылка на картинку" required />
            <span class="link-element-input-error input-error" /> 
          </fieldset>
          <input type="submit" value="Создать" class="popup__button-save" />
        </form>
      </div>
    </div>
    
    <div class="popup popup-picture">
      <div class="popup__container">
        <button class="popup__button-close button" type="button" />
        <img class="popup__image" />
        <p class="popup__subtitle" />
      </div>
    </div>
  </div>

    <template class="add-element">
      <div class="element">
        <button class="element__delete button" type="button" />
        <img class="element__image" />
        <h2 class="element__title" />
        <div class="element__like-conteiner">
          <button class="element__like button" type="button" />
          <span class="element__like-count" />
        </div>
      </div>
    </template>
  
      
    </div>
  );
}

export default App;
