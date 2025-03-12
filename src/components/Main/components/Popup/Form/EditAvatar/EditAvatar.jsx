function EditAvatar() {
  return (
    <form method="post" className="popup__form">
      <input
        type="url"
        id="avatar-url"
        value=""
        placeholder="URL"
        className="popup__input popup__input_card-url"
        required
        name="link"
        noValidate
      />
      <span className="popup__error" id="card-url-error-profile"></span>
      <button type="submit" className="submit" id="save-avatar">
        <span className="submit__text">Guardar</span>
      </button>
    </form>
  );
}

export default EditAvatar;
