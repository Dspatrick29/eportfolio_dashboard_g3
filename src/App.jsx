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
          <Container>
        <Row>
          <Col>
            <Cabecera />
          </Col>
        </Row>

        <Row>
          <Col>
            <Roles />
          </Col>
          <Col>
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
