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

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Cabecera />
          </Col>
        </Row>
        {/* Importante el g-0, para eliminar el espacio horizontal que bootstrap añade por defecto */}
        <Row className="g-0">
          <Col xs={3} sm={3}>
            <Roles />
          </Col>
          <Col xs={9} sm={9}>
              <Dashboard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
