function EditProfile() {
  return (
    <form method="post" className="popup__form">
      <input
        type="text"
        id="name-profile"
        value=""
        placeholder="Name"
        className="popup__input popup__input_name"
        minLength="2"
        maxLength="30"
        required
        name="name"
        noValidate
      />
      <span className="popup__error" id="name-profile-error"></span>
      <input
        type="text"
        id="job-profile"
        value=""
        placeholder="Job Title"
        className="popup__input popup__input_description"
        minLength="2"
        maxLength="30"
        required
        name="job"
      />
      <span className="popup__error" id="job-profile-error"></span>
      <button type="submit" className="submit" id="save-button">
        <span className="submit__text">Guardar</span>
      </button>
    </form>
  );
}

export default EditProfile;
