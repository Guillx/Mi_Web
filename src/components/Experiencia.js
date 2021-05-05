import "../assets/css/Experiencia.css";

const Experiencia = () => {
  return (
    <div className="experiencia-container">
      <div className="d-flex justify-content-center my-5">
        <h1 className="experiencia-titulo">Experiencia laboral</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Mayo 2015-Sept 2015</h3>
            <p>
              Camarero de sala para eventos en un restaurante de comida
              tradicional gallega.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Nov 2015-Enero 2016</h3>
            <p>
              Ayudante de cocina y bar en el mercado navideño central de Zürich,
              Suiza.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Marzo 2016-Julio 2018</h3>
            <p>
              Cocinero y atención al público en un restaurante de comida Tex-Mex
              en Zürich, Suiza
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Enero 2019-Abril 2019</h3>
            <p>
              Cocinero y atención al público en una pulpería de Santiago de
              Compostela.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Junio 2019-Nov 2019</h3>
            <p>
              Cocinero en un restaurante de comida tradicional gallega en el
              Camino de Santiago.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
