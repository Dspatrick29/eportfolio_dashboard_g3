import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './FuncionalidadEstudiante.css'
import NuevaEvidencia from '../../componentes/NuevaEvidencia/NuevaEvidencia';
import ProgresoCompletoAlumno from '../../componentes/ProgresoCompletoAlumno/ProgresoCompletoAlumno';
import RevisionesPendientes from '../../componentes/RevisionesPendientes/RevisionesPendientes';

function FuncionalidadEstudiante() {
    // Estado para controlar qué pestaña está activa. Empezamos en la opción 1.
    const [value, setValue] = useState('opcion1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className='contenedor'>

            {/* LAS PESTAÑAS (TABS) */}
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary" 
                indicatorColor="primary" 
                variant="fullWidth" 
            >
                <Tab value="opcion1" label="MI PROGRESO COMPLETO" />
                <Tab value="opcion2" label="SUBIR NUEVA EVIDENCIA" />
                <Tab value="opcion3" label="MIS REVISIONES PENDIENTES" />
            </Tabs>

            {/* EL CONTENIDO DINÁMICO */}
            <div className='contenido'>
                {/* Renderizado condicional: Solo se dibuja el que coincida con el estado 'value' */}
                {value === 'opcion1' && <ProgresoCompletoAlumno />}
                {value === 'opcion2' && <NuevaEvidencia />}
                {value === 'opcion3' && <RevisionesPendientes />}
            </div>
        </div>
    );
}
export default FuncionalidadEstudiante;