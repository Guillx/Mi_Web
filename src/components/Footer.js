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
              <p>guillx.gv@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-2 col-sm-6 ">
            <div className="row">
              <div className="col footer-nav-container">
                <a href="/" className="footer-nav">
                  Inicio
                </a>
                <br></br>
                <a href="/" className="footer-nav">
                  Presentación
                </a>
                <br></br>
                <a href="/" className="footer-nav">
                  Habilidades
                </a>
              </div>

              <div className="col footer-nav-container">
                <a href="/" className="footer-nav">
                  Experiencia
                </a>
                <br></br>
                <a href="/" className="footer-nav">
                  Portfolio
                </a>
                <br></br>
                <a href="/" className="footer-nav">
                  Contacto
                </a>
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
