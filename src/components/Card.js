function Card({card, openCard}) {
  
  function handelCardClick() {
    openCard(card);
  }
  return (
    <div className="element">
      <button className="element__delete button" type="button" />
      <img className="element__image" style={{ backgroundImage: `url(${card.link})`}} onClick={handelCardClick} />
     <h2 className="element__title">{card.name}</h2>
      <div className="element__like-conteiner">
        <button className="element__like button" type="button" />
        <span className="element__like-count">{card.likes.length}</span>
      </div>
    </div>
  )
};
export default Card