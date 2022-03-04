import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Componentes/Banner/Banner';
import Navbarmain from './Componentes/NavBar/Navbar';
import ComponenteContenedor from './Componentes/ComponenteContenedor/ComponenteContenedor';
import ItemCount from './Componentes/ItemCount/ItemCount';



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
      <ItemCount initial={1} stock={10} onAdd={0}/>
    </main>
    </div>
  );
}

export default App;
