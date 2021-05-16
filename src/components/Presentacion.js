import "../assets/css/Presentacion.css";
// import arrow from "../assets/images/arrow1.svg";

// POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Presentacion = () => {
  //
  const openPopupboxMasInfo = () => {
    const content = (
      <div className="presentacion-popupbox-container">
        <div className="presentacion-title-popupbox">
          {/* <img src={arrow} alt=""></img> */}
          <h2>Más sobre mí</h2>
        </div>
        <div className="presentacion-text-popupbox">
          <ul>
            <li>
              Me considero una persona con muchas curiosidades e inquietudes.
            </li>
            <li>
              No me gusta quedarme con la duda, por lo que suelo arriesgarme a
              hacer todo aquello que me propongo.
            </li>
            <li>
              He vivido en Suiza casi 3 años de mi vida y he visitado 11 países.
            </li>
            <li>
              Además de viajar, me gusta todo lo relacionado con el arte y el
              diseño.
            </li>
            <li>
              Soy bastante "maniático" con los detalles y me gustan las cosas
              bien organizadas y con un acabado perfecto.
            </li>
            <li>
              Tengo una personalidad calmada y fácil de llevar y de integrar en
              cualquier grupo de trabajo.
            </li>
            <li>
              Me gustaría conseguir un puesto de trabajo relacionado con el
              diseño y el desarrollo web, ya que es lo que más me ha gustado de
              lo que he aprendido hasta ahora y creo que a corto plazo puedo
              aportar bastante a cualquier empresa del sector.
            </li>
            <li>
              Tengo carnet de conducir y coche propio, por lo que estoy
              disponible tanto para trabajo en remoto como en oficina.
            </li>
            <li>
              Disponibilidad horaria y posibilidad de movilidad geográfica.
            </li>
          </ul>
        </div>
      </div>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigMasInfo = {
    fade: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="presentacion" className="presentacion-container">
      <h1 className="presentacion-titulo">Presentación</h1>
      <p className="presentacion-texto">
        ¡Hola, me llamo Guille! <br></br>
        Hasta que llegó el Covid trabajaba de cocinero, pero al ver que la
        "nueva normalidad" iba para largo, en septiembre de 2020 me puse a
        estudiar un Bootcamp de programación web, sin saber muy bien dónde me
        metía, ya que no tenía ni idea de como se hacía una página web. Tras
        unos meses, he descubierto un mundo nuevo, que me gusta y en el que
        quiero quedarme. <br></br>
        <br></br> De momento aún estoy muy verde, pero con tan solo 4 meses de
        aprendizaje he conseguido sacar adelante un proyecto que considero
        bastante grande e importante para ser el primero.
        <br></br>A continuación te presento mi proyecto de fin de Bootcamp: una
        aplicación web de compra y venta de tecnología retro.
        <br></br>
        Este proyecto fue realizado en poco más de 2 meses y partiendo de cero.
        Entre un compañero de clase y yo hemos creado la base de datos, el
        backend y el frontend. En el vídeo que aparece a continuación podrás ver
        "RetroTech" en funcionamiento y, además, podrás conocerme un poco mejor.
        <br></br>
        <br></br>No me enrollo más. ¡Dale al PLAY!
      </p>
      <div className="presentacion-video-container">
        <iframe
          className="presentacion-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ls7TDF9yi44"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <p className="presentacion-texto">
        Si quieres saber más cosas sobre mi, haz clic{" "}
        <span
          className="link-presentacion-texto"
          href="/"
          onClick={openPopupboxMasInfo}
        >
          AQUÍ
        </span>
        .
      </p>
      <PopupboxContainer {...popupboxConfigMasInfo}></PopupboxContainer>
    </div>
  );
};

export default Presentacion;
