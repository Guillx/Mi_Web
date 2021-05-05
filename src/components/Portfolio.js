import "../assets/css/Portfolio.css";
import nopicimg from "../assets/images/nopic.jpg";
import netflix from "../assets/images/netflix.jpg";
import pixabay from "../assets/images/pixabay.jpeg";
import giffy from "../assets/images/giffy.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-container">
      <div className="portfolio-texto-container">
        <h1 className="portfolio-titulo">Portfolio</h1>
        <p className="portfolio-texto">
          En esta sección te presento los trabajos que he realizado para
          aprender y practicar programación web.
          <br></br>Al hacer clic en cada uno de ellos, podrás ver un vídeo, el
          link a GitHub y una descripción más detallada del proyecto.
        </p>
      </div>

      <div className="portfolio-cards-container">
        <div className="card-container">
          <a href="/">
            <img className="img-card" src={pixabay} alt="img-card"></img>
            <h3 className="portfolio-card-title">Pixabay Clone</h3>
            <p className="portfolio-card-description">
              Web de fotos con la API de Pixabay.
            </p>
            {/* <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon> */}
          </a>
        </div>

        <div className="card-container">
          <a href="/">
            <img className="img-card" src={giffy} alt="img-card"></img>
            <h3 className="portfolio-card-title">Giffy Clone</h3>
            <p className="portfolio-card-description">
              Web de Gifs con la API de Ghiffy.
            </p>
            {/* <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon> */}
          </a>
        </div>

        <div className="card-container">
          <a href="/">
            <img className="img-card" src={nopicimg} alt="img-card"></img>
            <h3 className="portfolio-card-title">Lorem Ipsum 4</h3>
            <p className="portfolio-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
              fermentum enim.
            </p>
            {/* <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
