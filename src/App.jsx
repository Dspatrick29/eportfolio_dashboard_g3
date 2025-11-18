import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cabecera } from './componentes/Cabecera/Cabecera'
import { Dashboard } from './componentes/Dashboard/Dashboard'
import { Roles } from './componentes/Roles/Roles'

function App() {

  return (
    <>
      <Cabecera></Cabecera>
      <Roles></Roles>
      <Dashboard></Dashboard>

    </>
  )
}

export default App
