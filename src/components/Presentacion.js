import "../assets/css/Presentacion.css";

// POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Presentacion = () => {
  //
  const openPopupboxMasInfo = () => {
    const content = (
      <>
        <h2>Más sobre mí</h2>
        <p className="portfolio-text-popupbox">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui
          eros, faucibus ac enim ac, venenatis facilisis turpis. Aliquam erat
          volutpat. Aliquam varius venenatis dolor. Duis sed cursus nibh.
          Maecenas placerat laoreet tellus, sit amet rutrum neque fringilla
          quis. Aliquam euismod elit quis dignissim volutpat. Sed et iaculis
          odio, id.{" "}
        </p>
        <b>GitHub: </b>
        <a
          href="https://github.com/Guillx"
          className="hyper-link-popupbox"
          onClick={() => window.open("https://github.com/Guillx")}
        >
          https://github.com/Guillx
        </a>
      </>
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
        unos meses de aprendizaje, he descubierto un mundo nuevo, que me gusta y
        en el que quiero quedarme. <br></br>
        <br></br> De momento aún estoy muy verde, pero con tan solo 4 meses he
        conseguido sacar adelante un proyecto que considero bastante grande e
        importante para ser el primero.
        <br></br>
        Te presento mi proyecto de fin de Bootcamp: una aplicación web de compra
        y venta de tecnología retro.
        <br></br>
        Este proyecto fue realizado en poco más de 2 meses y partiendo de cero.
        Entre yo y un compañero de clase hemos creado la base de datos, el
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
