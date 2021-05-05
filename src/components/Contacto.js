import "../assets/css/Contacto.css";
import linkedin from "../assets/images/social-linkedin.svg";
import github from "../assets/images/github.svg";
import telefono from "../assets/images/phone.svg";
import email from "../assets/images/at.svg";

const Contacto = () => {
  return (
    <div id="contacto" className="contacto-container">
      <h1 className="contacto-titulo">Contacto</h1>

      <div className="contacto-content">
        <div className="texto-izq">
          <p>
            Si te ha gustado mi web y quieres ponerte en contacto conmigo,
            estaré encantado de atenderte en el email o teléfono que aparece a
            continuación.
            <br></br>
            <br></br> Si has llegado hasta aquí, tan solo me queda darte las
            gracias e invitarte a visitar mis redes sociales clicando en los
            siguientes iconos.
          </p>
          <div className="contacto-links">
            <a href="https://www.linkedin.com/in/guillermo-gil-v%C3%A1zquez-5858601bb/">
              <img src={linkedin} alt="" />
              <p>Linkedin</p>
            </a>
            <a href="https://github.com/Guillx">
              <img src={github} alt="" />
              <p>Github</p>
            </a>
          </div>
        </div>

        <div className="contacto-options-container">
          <div className="contacto-option">
            <img src={telefono} alt=""></img>625 440 474
          </div>
          <div className="contacto-option">
            <img src={email} alt=""></img>guillx.gv@gmail.com
          </div>
        </div>
        {/* <form className="contacto-form" onSubmit={sendEmail}>
          <div className="col-md-8 col-cs-12">
            <input
              id="nombre"
              type="text"
              className="form-control"
              placeholder="Nombre / Empresa"
              name="nombre"
            />

            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
            />

            <input
              id="asunto"
              type="text"
              className="form-control"
              placeholder="Asunto"
              name="asunto"
            />
          </div>

          <div className="col-md-8 col-xs-12">
            <textarea
              id="mensaje"
              type="text"
              className="form-control"
              placeholder="Escribe tu mensaje"
              name="mensaje"
            ></textarea>

            <button className="btn-main-offer contact-btn" type="submit">
              Enviar
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Contacto;
