import "../assets/css/Habilidades.css";

const Habilidades = () => {
  return (
    <div id="habilidades" className="habilidades-container">
      <div className="habilidades-texto-container">
        <h1 className="habilidades-titulo">Habilidades</h1>
        <p className="habilidades-texto">
          Aquí te presento mis conocimientos de diferentes herramientas
          utilizadas en el diseño y desarrollo web, pero también mi nivel de
          idiomas y algunas 'soft skills' que considero importantes.
        </p>
      </div>
      <div className="habilidades-bars-container">
        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">HTML</span>
            <span className="bars-info-percent">75%</span>
          </div>
          <div className="line html"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">CSS</span>
            <span className="bars-info-percent">60%</span>
          </div>
          <div className="line css"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">JavaScript</span>
            <span className="bars-info-percent">50%</span>
          </div>
          <div className="line js"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">React JS</span>
            <span className="bars-info-percent">50%</span>
          </div>
          <div className="line react"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">MySQL</span>
            <span className="bars-info-percent">40%</span>
          </div>
          <div className="line sql"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Node JS</span>
            <span className="bars-info-percent">40%</span>
          </div>
          <div className="line node"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Figma</span>
            <span className="bars-info-percent">50%</span>
          </div>
          <div className="line figma"></div>
        </div>

        <h3 className="entretitulo-bars">Idiomas</h3>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Español</span>
            <span className="bars-info-percent">100%</span>
          </div>
          <div className="line español"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Gallego</span>
            <span className="bars-info-percent">100%</span>
          </div>
          <div className="line gallego"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Inglés</span>
            <span className="bars-info-percent">70%</span>
          </div>
          <div className="line ingles"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo"> Alemán</span>
            <span className="bars-info-percent">30%</span>
          </div>
          <div className="line aleman"></div>
        </div>

        <h3 className="entretitulo-bars">Soft Skills</h3>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Atención al Cliente</span>
            <span className="bars-info-percent">90%</span>
          </div>
          <div className="line atencioncliente"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Pensamiento Crítico</span>
            <span className="bars-info-percent">90%</span>
          </div>
          <div className="line atencioncliente"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Trabajo en Equipo</span>
            <span className="bars-info-percent">90%</span>
          </div>
          <div className="line atencioncliente"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Creatividad</span>
            <span className="bars-info-percent">80%</span>
          </div>
          <div className="line creatividad"></div>
        </div>

        <div className="habilidades-bars">
          <div className="bars-info">
            <span className="bars-info-titulo">Adaptabilidad</span>
            <span className="bars-info-percent">80%</span>
          </div>
          <div className="line adaptabilidad"></div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
