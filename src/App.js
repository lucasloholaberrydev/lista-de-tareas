import dinosaurio from './imagenes/dinosaurio.png';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
     <div className='dinosaurio-logo-contenedor'>
      <img 
      src={dinosaurio}
      className='dinosaurio-logo' />
     </div>
     <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
     </div>
    </div>
  );
}

export default App;
