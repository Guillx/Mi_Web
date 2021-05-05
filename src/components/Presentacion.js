import "../assets/css/Presentacion.css";

const Presentacion = () => {
  return (
    <div id="presentacion" className="presentacion-container">
      <h1 className="presentacion-titulo">Presentación</h1>
      <p className="presentacion-texto">
        ¡Hola, me llamo Guille! <br></br>
        Hasta que llegó el Covid me dedicaba a la hostelería, trabajando
        mayormente de cocinero. Al ver que la "nueva normalidad" iba para largo,
        en septiembre de 2020 me puse a estudiar un Bootcamp de programación
        web, sin saber muy bien dónde me metía, ya que no tenía ni idea de como
        se hacía una página web. Pero aquí estoy, presentándote la mía propia.{" "}
        <br></br>
        <br></br> De momento aún estoy muy verde, pero con tan solo 4 meses de
        aprendizaje he conseguido sacar adelante un proyecto que considero
        bastante grande e importante para ser el primero y es lo que te voy a
        enseñar en el vídeo que aparece a continuación.
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
        <a className="link-presentacion-texto" href="/">
          AQUÍ
        </a>
        .
      </p>
    </div>
  );
};

export default Presentacion;
