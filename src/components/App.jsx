import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { api } from "../utils/api";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [popup, setPopup] = useState(null);
  const handleClosePopup = () => {
    setPopup(null);
  };
  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
  });

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
        setAvatar(data.avatar);
      });
    })();
  }, []);

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
        .updateProfilePicture(data)
        .then((newData) => {
          setCurrentUser((prevUser) => ({
            ...prevUser,
            avatar: newData.avatar,
          }));
          handleClosePopup();
        })
        .catch((error) =>
          console.error("Error al actualizar el avatar:", error)
        );
    })();
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  }

  const handleAddPlaceSubmit = async (data) => {
    try {
      const newCard = await api.addCard({ name: data.name, link: data.link });
      setCards((prevCards) => [newCard, ...prevCards]);
      handleClosePopup();
    } catch (error) {
      console.error("Error al agregar la tarjeta:", error);
    }
  };

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          handleUpdateAvatar,
          handleAddPlaceSubmit,
        }}
      >
        <div className="page">
          <Header avatar={avatar} />
          <Main
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onUpdateAvatar={handleUpdateAvatar}
            onAddPlaceSubmit={handleAddPlaceSubmit}
            handleOpenPopup={handleOpenPopup}
            handleClosePopup={handleClosePopup}
            popup={popup}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
