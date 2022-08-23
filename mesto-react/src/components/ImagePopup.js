function ImagePopup() {
  return(
    <div className="popup popup-picture">
      <div className="popup__container">
        <button className="popup__button-close button" type="button" />
        <img className="popup__image" />
        <p className="popup__subtitle" />
      </div>
    </div>
  )
}
export default ImagePopup;