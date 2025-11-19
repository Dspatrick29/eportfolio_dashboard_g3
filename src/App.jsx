import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import { Cabecera } from './componentes/Cabecera/Cabecera'
import { Dashboard } from './componentes/Dashboard/Dashboard'
import { Roles } from './componentes/Roles/Roles'

function App() {

  let usuario="USUARIO";
  let token="TOKEN";
  let menu="MENU";

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Cabecera usuario={usuario}/>
          </Col>
        </Row>
        {/* Importante el g-0, para eliminar el espacio horizontal que bootstrap añade por defecto */}
        <Row className="g-0">
          <Col xs={3} sm={3}>
            <Roles menu={menu}/>
          </Col>
          <Col xs={9} sm={9}>
              <Dashboard token={token}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
