import { Link } from "react-scroll";
import "../assets/css/Footer.css";
import githubicon from "../assets/images/github.svg";
import linkedinicon from "../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>15117, Laxe, A Coruña</p>
            </div>
            <div className="d-flex">
              <a href="tel:625440474">+34 625 440 474</a>
            </div>
            <div className="d-flex">
              <a href="mailto:guillx.gv@gmail.com">guillx.gv@gmail.com</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-2 col-sm-6 ">
            <div className="row">
              <div className="col footer-nav-container">
                <Link
                  smooth={true}
                  offset={0}
                  to="inicio"
                  href="/"
                  className="footer-nav"
                >
                  Inicio
                </Link>
                <br></br>
                <Link
                  smooth={true}
                  offset={-115}
                  to="presentacion"
                  href="/"
                  className="footer-nav"
                >
                  Presentación
                </Link>
                <br></br>
                <Link
                  smooth={true}
                  offset={-80}
                  to="habilidades"
                  href="/"
                  className="footer-nav"
                >
                  Habilidades
                </Link>
              </div>

              <div className="col footer-nav-container">
                <Link
                  smooth={true}
                  offset={-80}
                  to="experiencia"
                  href="/"
                  className="footer-nav"
                >
                  Experiencia
                </Link>
                <br></br>
                <Link
                  smooth={true}
                  offset={-80}
                  to="portfolio"
                  href="/"
                  className="footer-nav"
                >
                  Portfolio
                </Link>
                <br></br>
                <Link
                  smooth={true}
                  offset={-150}
                  to="contacto"
                  href="/"
                  className="footer-nav"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
          <div className="links-social-footer">
            <div className="d-flex">
              <a href="https://github.com/Guillx">
                <img className="icon-footer" src={githubicon} alt=""></img>
                <p>GitHub</p>
              </a>
              <a href="https://www.linkedin.com/in/guillermo-gil-vazquez-link/">
                <img className="icon-footer" src={linkedinicon} alt=""></img>
                <p>Linkedin</p>
              </a>
            </div>
          </div>
        </div>
        <p className="copyright-text-footer">
          Copyright &copy; {new Date().getFullYear()}&nbsp;Guillx | Ningún
          Derecho Reservado
        </p>
      </div>
    </div>
  );
};

export default Footer;
