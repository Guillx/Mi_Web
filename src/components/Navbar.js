import "../assets/css/Navbar.css";
import logoel from "../assets/images/logoel.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [verMenu, setVerMenu] = useState(true);

  return (
    <div className="navbar-container">
      {/* <div className="logo-container">
        <img src={logoel} className="logo-img" alt=""></img>
        <h2 className="logo-name">
          <strong>G</strong>u<strong>i</strong>l<strong>l</strong>x
        </h2>
      </div> */}
      <nav className="navbar-links-container">
        <ul className="navbar-links-ul">
          <li className="navbar-links-li" id={verMenu ? "hidden" : ""}>
            <Link
              smooth={true}
              offset={0}
              to="inicio"
              href="/"
              className="navbar-link"
            >
              Inicio
            </Link>
          </li>
          <li className="navbar-links-li">
            <Link
              smooth={true}
              offset={-165}
              to="presentacion"
              href="/"
              className="navbar-link"
            >
              Presentación
            </Link>
          </li>

          <li className="navbar-links-li">
            <Link
              smooth={true}
              offset={-90}
              to="habilidades"
              href="/"
              className="navbar-link"
            >
              Habilidades
            </Link>
          </li>

          <li className="navbar-links-li">
            <Link
              smooth={true}
              offset={-90}
              to="experiencia"
              href="/"
              className="navbar-link"
            >
              Experiencia
            </Link>
          </li>

          <li className="navbar-links-li">
            <Link
              smooth={true}
              offset={-90}
              to="portfolio"
              href="/"
              className="navbar-link"
            >
              Portfolio
            </Link>
          </li>

          <li className="navbar-links-li">
            <Link
              smooth={true}
              offset={-160}
              to="contacto"
              href="/"
              className="navbar-link"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
