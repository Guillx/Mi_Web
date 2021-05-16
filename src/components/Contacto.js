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
          favor, rellena el formulario y te responderé lo antes posible.
          <br></br>
          En el footer de la página podrás encontrar mi número de teléfono y
          links a mis redes sociales.
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

              <div className="col-md-14 col-xs-12">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;

// import "../assets/css/Contacto.css";
// import linkedin from "../assets/images/social-linkedin.svg";
// import github from "../assets/images/github.svg";
// import telefono from "../assets/images/phone.svg";
// import email from "../assets/images/at.svg";

// const Contacto = () => {
//   return (
//     <div id="contacto" className="contacto-container">
//       <h1 className="contacto-titulo">Contacto</h1>

//       <div className="contacto-content">
//         <div className="texto-izq">
//           <p>
//             Si te ha gustado mi web y quieres ponerte en contacto conmigo,
//             estaré encantado de atenderte en el email o teléfono que aparece a
//             continuación.
//             <br></br>
//             <br></br> Si has llegado hasta aquí, tan solo me queda darte las
//             gracias e invitarte a visitar mis redes sociales clicando en los
//             siguientes iconos.
//           </p>
//           <div className="contacto-links">
//             <a href="https://www.linkedin.com/in/guillermo-gil-v%C3%A1zquez-5858601bb/">
//               <img src={linkedin} alt="" />
//               <p>Linkedin</p>
//             </a>
//             <a href="https://github.com/Guillx">
//               <img src={github} alt="" />
//               <p>Github</p>
//             </a>
//           </div>
//         </div>

//         <div className="contacto-options-container">
//           <div className="contacto-option">
//             <img src={telefono} alt=""></img>625 440 474
//           </div>
//           <div className="contacto-option">
//             <img src={email} alt=""></img>guillx.gv@gmail.com
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contacto;
