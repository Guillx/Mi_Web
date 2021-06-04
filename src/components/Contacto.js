import "../assets/css/Contacto.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contacto = () => {
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_dMcGZw81db3LA3TD5OLAl";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        swal({
          className: "swal",
          icon: "success",
          title: "Mensaje enviado correctamente.",
          text: "Me pondré en contacto contigo lo más rápido posible.",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contacto" className="contacto-container">
      <div className="text-center">
        <h1 className="contacto-titulo">Contacto</h1>
        <p className="contacto-texto">
          Si te ha gustado mi web y quieres ponerte en contacto conmigo, por
          favor, rellena el formulario y te responderé lo más rápido posible.
          <br></br>
          En la parte inferior de la página podrás encontrar mi número de
          teléfono y enlaces a mis redes sociales.
        </p>
      </div>

      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-10 col-xs-12">
              <input
                id="nombre"
                className="form-control"
                placeholder="Nombre/Empresa"
                name="name"
                type="text"
              ></input>

              <input
                id="telefono"
                className="form-control"
                placeholder="Teléfono de contacto"
                name="phone"
                type="text"
              ></input>

              <input
                id="email"
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
              ></input>

              <input
                id="asunto"
                className="form-control"
                placeholder="Asunto"
                name="asunto"
                type="text"
              ></input>

              <textarea
                id="mensaje"
                className="form-control"
                placeholder="Escribe un mensaje"
                name="mensaje"
                type="text"
              ></textarea>

              <button className="btn-main-offer contact-btn" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;