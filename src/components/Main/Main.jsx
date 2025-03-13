import { useState } from "react";
import Avatar from "../../images/Avatar.jpg";
import Pencil from "../../images/pen-button.png";
import EditImage from "../../images/Pencil.svg";
import AddButton from "../../images/sumar.png";
import Popup from "./components/popup/Popup";
import EditProfile from "./components/Popup/Form/EditProfile/EditProfile";
import NewCard from "./components/Popup/Form/NewCard/NewCard";
import EditAvatar from "./components/Popup/Form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import CardImage from "./components/Popup/CardImage/CardImage";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

function Main() {
  const [popup, setPopup] = useState(null);
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const newCard = { title: "Nuevo Lugar", children: <NewCard /> };
  const editAvatar = {
    title: "Cambiar Foto de Perfil",
    children: <EditAvatar />,
  };
  const cardImage = (name, link) => ({
    title: "",
    children: <CardImage name={name} link={link} />,
  });

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <main className="content">
      <div className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={Avatar} alt="foto de avatar" />
          <img
            className="profile__avatar-pencil"
            src={EditImage}
            alt=" Editar avatar"
            onClick={() => handleOpenPopup(editAvatar)}
          />
        </div>
        <div className="profile__info">
          <div className="profile__details">
            <h1 className="profile__name">Jaques Cousteau</h1>
            <button
              className="button"
              id="edit-button"
              onClick={() => handleOpenPopup(editProfile)}
            >
              <img className="button__image" src={Pencil} alt="button" />
            </button>
          </div>
          <p className="profile__text">Explorador</p>
        </div>
        <button
          className="add-button"
          id="add-card"
          onClick={() => handleOpenPopup(newCard)}
        >
          <img
            className="add-button__image"
            src={AddButton}
            alt="agregar tarjeta"
          />
        </button>
      </div>
      <section className="gallery">
        <div className="card-gallery">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onClick={() => handleOpenPopup(cardImage(card.name, card.link))}
            />
          ))}
        </div>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
