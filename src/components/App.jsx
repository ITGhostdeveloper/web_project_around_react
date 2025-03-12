import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Popup from "./Main/components/popup/Popup";
import EditProfile from "./Main/components/Popup/Form/EditProfile/EditProfile";
import NewCard from "./Main/components/Popup/Form/NewCard/NewCard";
import EditAvatar from "./Main/components/Popup/Form/EditAvatar/EditAvatar";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        
      </div>
    </>
  );
}

export default App;
