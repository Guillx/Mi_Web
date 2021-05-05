import "../assets/css/Navbar.css";
import logoel from "../assets/images/logoel.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logoel} className="logo-img" alt=""></img>
        <h2 className="logo-name">
          <strong>G</strong>u<strong>i</strong>l<strong>l</strong>x
        </h2>
      </div>
      <nav className="navbar-links-container">
        <ul className="navbar-links-ul">
          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Inicio
            </a>
          </li>
          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Presentación
            </a>
          </li>

          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Habilidades
            </a>
          </li>

          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Experiencia
            </a>
          </li>

          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Portfolio
            </a>
          </li>

          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
