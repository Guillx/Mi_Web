import "../assets/css/Header.css";
import videoheader from "../assets/images/video-fondo-header.mp4";

import { Link } from "react-scroll";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="inicio" className="header-container">
      <div className="video-container">
        <video loop autoPlay muted>
          <source src={videoheader} type="video/mp4" />
        </video>
      </div>
      <div className="header-content">
        <h1 className="header-title">
          ¡Hola, me llamo <strong>Guille</strong>!
        </h1>
        <div className="header-text">
          Soy {""}
          <Typed
            className="header-typed-text"
            strings={[
              "desarrollador web.",
              "diseñador web.",
              "junior Full Stack.",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>
        <div className="header-btn">
          <Link
            smooth={true}
            offset={0}
            to="contacto"
            href="/"
            className="btn-main-header"
          >
            ¡Contacta conmigo!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
