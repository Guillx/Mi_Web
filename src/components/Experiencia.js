import "../assets/css/Experiencia.css";

const Experiencia = () => {
  return (
    <div id="experiencia" className="experiencia-container">
      <div className="d-flex justify-content-center my-5">
        <h1 className="experiencia-titulo">Experiencia laboral</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Junio 2019-Nov 2019</h3>
            <p className="empresa">
              <b>'Taste the Way'</b>
            </p>
            <p className="cargo">Cocinero</p>

            <p className="descripcion-puesto">
              Me encargaba de la preparación de alimentos y mise en place en un
              restaurante de comida tradicional gallega en el Camino de
              Santiago.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Enero 2019-Abril 2019</h3>
            <span>
              <b>'Mercado La Galiciana'</b>
            </span>
            <p className="cargo">Cocinero y atención al público</p>
            <p className="descripcion-puesto">
              Me encargaba de la cocción y preparación de diferentes platos
              elaborados con pulpo, mise en place y atención y servicio al
              cliente en una pulpería de Santiago de Compostela.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Marzo 2016-Julio 2018</h3>
            <span>
              <b>'Crazy Burrito Shack'</b>
            </span>
            <p className="cargo">Cocinero y atención al público</p>
            <p className="descripcion-puesto">
              Me encargaba de la cocción y preparación de alimentos tanto fríos
              como calientes, mise en place y atención y servicio al cliente en
              un restaurante de comida Tex-Mex en Zürich, Suiza.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Nov 2015-Enero 2016</h3>
            <span>
              <b>'Wienachtsdorf'</b>
            </span>
            <p className="cargo">Ayudante de cocina y bar</p>
            <p className="descripcion-puesto">
              Me encargaba de la reposición de alimentos y bebidas y de tareas
              básicas de cocina en el mercado navideño central de Zürich, Suiza.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Mayo 2015-Sept 2015</h3>
            <span>
              <b>'Restaurante A Lareira'</b>
            </span>
            <p className="cargo">Camarero de sala en eventos </p>
            <p className="descripcion-puesto">
              Me encargaba del servicio de sala en bautizos, comuniones,
              cumpleaños y comidas de empresa en un restaurante de comida
              tradicional gallega.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
