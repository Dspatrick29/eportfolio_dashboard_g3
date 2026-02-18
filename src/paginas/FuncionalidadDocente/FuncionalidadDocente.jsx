import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './FuncionalidadDocente.css';
import PlanificarCriterios from '../../componentes/PlanificarCriterios/PlanificarCriterios';
import EvaluarEvidencias from '../../componentes/EvaluarEvidencias/EvaluarEvidencias';
import AsignarRevisiones from '../../componentes/AsignarRevisiones/AsignarRevisiones';




 function FuncionalidadDocente() {
    // Estado para controlar qué pestaña está activa. Empezamos en la primera.
    const [value, setValue] = useState('opcion1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="funcionalidad-docente-contenedor">
            
            {/* CABECERA: Las opciones del docente */}
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary" 
                indicatorColor="primary" 
                variant="fullWidth" // Para que ocupen todo el ancho
            >
                <Tab value="opcion1" label="PLANIFICAR CRITERIOS" />
                <Tab value="opcion2" label="EVALUAR EVIDENCIAS" />
                <Tab value="opcion3" label="ASIGNAR REVISIONES" />
            </Tabs>

            {/* CONTENIDO: Renderizado condicional según la pestaña elegida */}
            <div className="funcionalidad-docente-contenido">
                {value === 'opcion1' && <PlanificarCriterios />}
                {value === 'opcion2' && <EvaluarEvidencias />}
                {value === 'opcion3' && <AsignarRevisiones />}
            </div>

        </div>
    );
}
export default FuncionalidadDocente;