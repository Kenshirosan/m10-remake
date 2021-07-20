import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="container">
      <a href="/">
        <img src={logo} alt="logo de mon portfolio" /> John Doe
      </a>
      <nav>
        <a href="/">
          <i className="fa fa-home" /> Accueil
        </a>
        <a href="!#">
          <i className="fa fa-folder-open" /> Réalisations
        </a>
        <a href="!#">
          <i className="fa fa-envelope" /> Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
