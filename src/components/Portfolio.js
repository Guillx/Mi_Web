import "../assets/css/Portfolio.css";

import netflix from "../assets/images/pixabay.jpeg";
import picmovies from "../assets/images/pic-movies.png";
import gifs from "../assets/images/gifs.png";
import nopicimg from "../assets/images/nopic.jpg";

// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // proyecto 1
  const openPopupboxProyecto1 = () => {
    const content = (
      <>
        <h2>Proyecto 1</h2>
        <img className="portfolio-image-popupbox" src={netflix} alt=""></img>
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
  // const popupboxConfigProyecto1 = {
  //   titleBar: {
  //     enable: true,
  //     text: "Título del proyecto 1",
  //   },
  //   fade: true,
  //   fadeInSpeed: 500,
  // };

  // proyecto 2
  const openPopupboxProyecto2 = () => {
    const content = (
      <>
        <h2>Buscador de películas</h2>
        <img className="portfolio-image-popupbox" src={picmovies} alt=""></img>
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
          href="https://github.com/Guillx/buscador_peliculas"
          className="hyper-link-popupbox"
          onClick={() =>
            window.open("https://github.com/Guillx/buscador_peliculas")
          }
        >
          https://github.com/Guillx/buscador_peliculas
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // proyecto 3
  const openPopupboxProyecto3 = () => {
    const content = (
      <>
        <h2>Buscador de giffs</h2>
        <img className="portfolio-image-popupbox" src={gifs} alt=""></img>
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
          href="https://github.com/Guillx/giffy"
          className="hyper-link-popupbox"
          onClick={() => window.open("https://github.com/Guillx/giffy")}
        >
          https://github.com/Guillx/giffy
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // proyecto 4
  const openPopupboxProyecto4 = () => {
    const content = (
      <>
        <h2>Otro proyecto</h2>
        <img className="portfolio-image-popupbox" src={nopicimg} alt=""></img>
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
          href="https://github.com/Guillx/giffy"
          className="hyper-link-popupbox"
          onClick={() => window.open("https://github.com/Guillx/giffy")}
        >
          https://github.com/Guillx/giffy
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="portfolio-texto-container">
        <h1 className="portfolio-titulo">Portfolio</h1>
        <p className="portfolio-texto">
          En esta sección te presento alguno de los trabajos que he realizado
          para aprender y practicar programación y diseño web. Al hacer clic en
          cada uno de ellos, podrás ver un vídeo, el link a GitHub y una
          descripción más detallada del proyecto.<br></br>
          <br></br> Como verás, la mayoría de las prácticas que he realizado son
          de frontend. Creo que a corto-medio plazo, dónde más puedo aportar y
          dónde más cómodo me sentiré es en frontend y diseño, pero también me
          me encantaría aprender backend.
        </p>
      </div>
      <div className="portfolio-cards-container">
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxProyecto1}>
            <img className="portfolio-image" src={netflix} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProyecto2}>
            <img className="portfolio-image" src={picmovies} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProyecto3}>
            <img className="portfolio-image" src={gifs} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProyecto4}>
            <img className="portfolio-image" src={nopicimg} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      {/* <PopupboxContainer {...popupboxConfigProyecto1}></PopupboxContainer>
      <PopupboxContainer {...popupboxConfigProyecto2}></PopupboxContainer>
      <PopupboxContainer {...popupboxConfigProyecto3}></PopupboxContainer>
      <PopupboxContainer {...popupboxConfigGiffy}></PopupboxContainer> */}
    </div>
  );
};
// import "../assets/css/Portfolio.css";
// import nopicimg from "../assets/images/nopic.jpg";
// // import netflix from "../assets/images/netflix.jpg";
// import picmovies from "../assets/images/pic-movies.png";
// import gifs from "../assets/images/gifs.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// const Portfolio = () => {
//   return (
//     <div id="portfolio" className="portfolio-container">
//       <div className="portfolio-texto-container">
//         <h1 className="portfolio-titulo">Portfolio</h1>
//         <p className="portfolio-texto">
//           En esta sección te presento los trabajos que he realizado para
//           aprender y practicar programación web.
//           <br></br>Al hacer clic en cada uno de ellos, podrás ver un vídeo, el
//           link a GitHub y una descripción más detallada del proyecto.
//         </p>
//       </div>

//       <div className="portfolio-cards-container">
//         <div className="card-container">
//           <a href="/">
//             <img className="img-card" src={picmovies} alt="img-card"></img>
//             <h3 className="portfolio-card-title">Buscador de películas</h3>
//             <p className="portfolio-card-description">
//               Web realizada con la API de imDb
//             </p>

//             <FontAwesomeIcon
//               className="portfolio-icon"
//               icon={faSearchPlus}
//             ></FontAwesomeIcon>
//           </a>
//         </div>

//         <div className="card-container">
//           <a href="/">
//             <img className="img-card" src={gifs} alt="img-card"></img>
//             <h3 className="portfolio-card-title">Giffy Clone</h3>
//             <p className="portfolio-card-description">
//               Web de Gifs con la API de Ghiffy.
//             </p>

//             <FontAwesomeIcon
//               className="portfolio-icon"
//               icon={faSearchPlus}
//             ></FontAwesomeIcon>
//           </a>
//         </div>

//         <div className="card-container">
//           <a href="/">
//             <img className="img-card" src={nopicimg} alt="img-card"></img>
//             <h3 className="portfolio-card-title">Lorem Ipsum 4</h3>
//             <p className="portfolio-card-description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
//               fermentum enim.
//             </p>

//             <FontAwesomeIcon
//               className="portfolio-icon"
//               icon={faSearchPlus}
//             ></FontAwesomeIcon>
//           </a>
//         </div>

//         <div className="card-container">
//           <a href="/">
//             <img className="img-card" src={nopicimg} alt="img-card"></img>
//             <h3 className="portfolio-card-title">Lorem Ipsum 5</h3>
//             <p className="portfolio-card-description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
//               fermentum enim.
//             </p>

//             <FontAwesomeIcon
//               className="portfolio-icon"
//               icon={faSearchPlus}
//             ></FontAwesomeIcon>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Portfolio;
