import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Componentes/Banner/Banner';
import Navbarmain from './Componentes/NavBar/Navbar';
import ComponenteContenedor from './Componentes/ComponenteContenedor/ComponenteContenedor';


function App() {
  return (
    <div>
    <header>
      <Banner />
      <br></br>
      <Navbarmain />
    </header>
    <main>
      <ComponenteContenedor saludo="Bienvenido a mi tienda"/>
    </main>
    </div>
  );
}

export default App;
