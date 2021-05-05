import "../assets/css/Header.css";
import videoheader from "../assets/images/video-fondo-header.mp4";

import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-container">
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
          <a href="/" className="btn-main-header">
            ¡Contacta conmigo!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
