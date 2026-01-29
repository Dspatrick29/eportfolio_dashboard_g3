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
      <TokenContext.Provider value={token}>
        <Container fluid>
          <Row>
            <Col>
              <Cabecera 
                usuario = {user}
              />
            </Col>
          </Row>
          {/* Importante el g-0, para eliminar el espacio horizontal que bootstrap añade por defecto */}
          <UserContext.Provider value={user}>
          <Row className="g-0">
            <Col xs={3} sm={3}>
              <Roles menu={menu} />
            </Col>
            <Col xs={9} sm={9}>
              <Dashboard token={token} />
            </Col>
          </Row>
          </UserContext.Provider>
        </Container>
      </TokenContext.Provider>
    </>
  )
}

export default App
