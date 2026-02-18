import React from 'react';
import FamiliasProfesionales from '../../componentes/FamiliasProfesionales/FamiliasProfesionales';

function PaginaFamiliasProfesionales() {
    return (
        <div className="pagina-contenedor">
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Gestión de Familias Profesionales</h2>
            
            {/* Aquí incrustamos la tabla */}
            <FamiliasProfesionales />
        </div>
    );
}

export default PaginaFamiliasProfesionales;