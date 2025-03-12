import HeaderLogo from "../../images/header-logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={HeaderLogo} alt="Around US logo" />
      </header>
      ;
    </>
  );
}

export default Header;
