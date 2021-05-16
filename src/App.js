import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Experiencia from "./components/Experiencia";
import Habilidades from "./components/Habilidades";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Presentacion></Presentacion>
      <Habilidades></Habilidades>
      <Experiencia></Experiencia>
      <Portfolio></Portfolio>
      <Contacto></Contacto>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
