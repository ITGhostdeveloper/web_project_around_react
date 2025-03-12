function NewCard() {
  return (
    <form method="post" className="popup__form">
      <input
        type="text"
        id="card-title"
        value=""
        placeholder="Title"
        className="popup__input popup__input_card-title"
        minLength="2"
        maxLength="30"
        required
        name="name"
        noValidate
      />
      <span className="popup__error" id="card-title-error"></span>
      <input
        type="url"
        id="card-url"
        value=""
        placeholder="URL"
        className="popup__input popup__input_card-url"
        required
        name="link"
      />
      <span className="popup__error" id="card-url-error"></span>
      <button type="submit" className="submit" id="save-card">
        <span className="submit__text">Crear</span>
      </button>
    </form>
  );
}

export default NewCard;
