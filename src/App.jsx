import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import { Cabecera } from './componentes/Cabecera/Cabecera'
import { Dashboard } from './componentes/Dashboard/Dashboard'
import { Roles } from './componentes/Roles/Roles'
import TokenContext from './contextos/TokenContext';
import UserContext from './contextos/UserContext';
import SelectorTareaRA from './componentes/SelectorTareaRA/SelectorTareaRA';
import NuevaEvidencia from './componentes/NuevaEvidencia/NuevaEvidencia';
import { Outlet, Route, Routes } from 'react-router-dom';
import FuncionalidadEstudiante from './paginas/FuncionalidadEstudiante/FuncionalidadEstudiante';
import FuncionalidadDocente from './paginas/FuncionalidadDocente/FuncionalidadDocente';


// CREAMOS EL LAYOUT (Tu estructura de Bootstrap)
// Fuera del componente App para que React no lo reconstruya constantemente.
function Layout({ user, menu, token }) {
  return (
    <TokenContext.Provider value={token}>
      <Container fluid>
        
        {/* FILA SUPERIOR: La cabecera */}
        <Row>
          <Col>
            <Cabecera usuario={user} />
          </Col>
        </Row>

        {/* FILA INFERIOR: Menú lateral + Contenido dinámico */}
        <UserContext.Provider value={user}>
          <Row className="g-0">
            
            {/* Columna Izquierda: Menú (3/12 partes) */}
            <Col xs={3} sm={3}>
              <Roles menu={menu} />
            </Col>
            
            {/* Columna Derecha: Contenido dinámico (9/12 partes) */}
            <Col xs={9} sm={9}>
              {/* MAGIA AQUÍ: El Outlet se sustituye por Dashboard, FuncionalidadEstudiante, etc., según la URL */}
              <Outlet /> 
            </Col>

          </Row>
        </UserContext.Provider>
        
      </Container>
    </TokenContext.Provider>
  );
}


function App() {

  // let usuario = "Patrick";
  // let token = "1481463";
  let menu = "No se que poner";


  // Uso un estado para darle un valor inicial al string
  // Voy a recuperar el valor desde Dashboard
  const [token, setToken] = useState("Valor de prueba");


  // Creo el estado User y le asigno un valor cualquiera
  let valorRandom = "Patrick";
  const [user, setUser] = useState(valorRandom);


  return (
    <>
     <Routes>
        {/* La ruta padre "/" envuelve todo con el Layout */}
        <Route path="/" element={<Layout user={user} menu={menu} token={token} />}>
          
          {/* Si la ruta es exactamente "/", carga el Dashboard */}
          <Route index element={<Dashboard token={token} />} /> 
          
          {/* Rutas dinámicas */}
          <Route path="funcionalidadestudiante/:id" element={<FuncionalidadEstudiante />} /> 
          <Route path="funcionalidaddocente/:id" element={<FuncionalidadDocente />} /> 
          
          {/* Ruta comodín para cualquier otro nombre (carga el Dashboard) */}
          <Route path=":nombre" element={<Dashboard token={token} />} /> 

        </Route>
      </Routes>
    </>
  )
}

export default App
