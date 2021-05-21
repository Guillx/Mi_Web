import "../assets/css/Portfolio.css";

import netflix from "../assets/images/pixabay.jpeg";
import picmovies from "../assets/images/pic-movies.png";
import gifs from "../assets/images/gifs.png";
// import nopicimg from "../assets/images/nopic.jpg";
import leicadesign from "../assets/images/leicadesign.png";
import fakebook from "../assets/images/fakebook-app.png";

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
      <div className="portfolio-popupbox-container">
        <h2 className="titulo-portfolio-popupbox">Buscador de películas</h2>
        <iframe
          className="video-portfolio-popupbox"
          src="https://www.youtube.com/embed/gfF5yoxOCVg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="portfolio-text-popupbox">
          Este es uno de los primeros trabajos que realicé para aprender a
          utilizar React. <br></br>Es un simple buscador de películas creado con
          la API de IMDb. Al escribir el nombre de una película en el búscador y
          pulsar 'Enter', lista las películas que coinciden con ese nombre.
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
      </div>
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
      <div className="portfolio-popupbox-container">
        <h2 className="titulo-portfolio-popupbox">Buscador de giffs</h2>
        <iframe
          className="video-portfolio-popupbox"
          src="https://www.youtube.com/embed/Sb8-e6Dzfcw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="portfolio-text-popupbox">
          Este es otro proyecto que hice para aprender React. <br></br>
          Se trata de una web de giffs creada utilizando la API de Giphy.
          <br></br> Los giffs están ordeados por categorías. Al clicar en una de
          ellas, nos muestra una lista de giffs relacionados con la categoría
          seleccionada.
        </p>
        <b>GitHub: </b>
        <a
          href="https://github.com/Guillx/giffy"
          className="hyper-link-popupbox"
          onClick={() => window.open("https://github.com/Guillx/giffy")}
        >
          https://github.com/Guillx/giffy
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  // proyecto 3
  const openPopupboxProyecto3 = () => {
    const content = (
      <div className="portfolio-popupbox-container">
        <h2 className="titulo-portfolio-popupbox">Diseño Web Leica M6</h2>
        <iframe
          className="video-portfolio-popupbox"
          src="https://www.youtube.com/embed/Hg9IQTJ8yeA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="portfolio-text-popupbox">
          Este proyecto ha sido creado para practicar CSS, Grid y HTML.<br></br>{" "}
          Es una web de presentación de una cámara de fotos.
        </p>
        <b>GitHub: </b>
        <a
          href="https://github.com/Guillx/leica-camera-design"
          className="hyper-link-popupbox"
          onClick={() =>
            window.open("https://github.com/Guillx/leica-camera-design")
          }
        >
          https://github.com/Guillx/leica-camera-design
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  // proyecto 4
  const openPopupboxProyecto4 = () => {
    const content = (
      <div className="portfolio-popupbox-container">
        <h2 className="titulo-portfolio-popupbox">Fakebook - Facebook Clone</h2>
        <iframe
          className="video-portfolio-popupbox"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p3CqWCvRT1Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="portfolio-text-popupbox">
          Diseño de la red social Facebook para practicar y aprender CSS y
          React. Le añadí alguna funcionalidad con Hooks, como poder dar clic en
          'Me gusta'. Los usuarios y publicaciones se muestran a través de una
          pequeña API que hice para este proyecto. <br></br>
          <br></br>
          <b>NOTA:</b> Este proyecto aún no está terminado, ya que me gustaría
          añadirle un backend en condiciones, hacerlo 100% funcional y crear un
          chat en tiempo real para simular la aplicación Messenger de Facebook.
        </p>
        <b>GitHub: </b>
        <a
          href="https://github.com/Guillx/social-feisbuk"
          className="hyper-link-popupbox"
          onClick={() =>
            window.open("https://github.com/Guillx/social-feisbuk")
          }
        >
          https://github.com/Guillx/social-feisbuk
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="portfolio-texto-container">
        <h1 className="portfolio-titulo">Portfolio</h1>
        <p className="portfolio-texto">
          En esta sección te presento alguno de los trabajos que he realizado
          para aprender y practicar programación y diseño web. <br></br>Al hacer
          clic en cada uno de ellos, podrás ver un vídeo, el link a GitHub y una
          descripción más detallada del proyecto.<br></br>
        </p>
      </div>
      <div className="portfolio-cards-container">
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxProyecto1}>
            <img className="portfolio-image" src={picmovies} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProyecto2}>
            <img className="portfolio-image" src={gifs} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProyecto3}>
            <img className="portfolio-image" src={leicadesign} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProyecto4}>
            <img className="portfolio-image" src={fakebook} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          {/* <div className="portfolio-image-box" onClick={openPopupboxProyecto4}>
            <img className="portfolio-image" src={nopicimg} alt=""></img>
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div> */}
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
