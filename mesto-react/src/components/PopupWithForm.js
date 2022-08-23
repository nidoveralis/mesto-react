
function PopupWithForm({active, name, title, children}) {
console.log(active);

  return(
    <div className = {`${ active ? "popup_opened" : ""} popup  ${name}`} >
      <div className="popup__container">
        <button className="popup__button-close button" type="button" />
        <form className="popup__form form-profile" name={name} noValidate>
          <h2 className="popup__title">{title}</h2>
          {children}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
//'${ active ? 'popup-opened ' : ''} 