import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';


function FamiliasProfesionales() {

    const { buscando, lista } = useFamiliasProfesionales();


    if (buscando) {
        return <p>Cargando familias profesionales...</p>;
    }

   
    return (
        <TableContainer component={Paper} elevation={3}>
            <Table aria-label="tabla de familias profesionales">
                
                {/* CABECERA DE LA TABLA */}
                <TableHead style={{ backgroundColor: '#f5f5f5' }}>
                    <TableRow>
                        <TableCell><strong>ID</strong></TableCell>
                        <TableCell><strong>Código</strong></TableCell>
                        <TableCell><strong>Nombre de la Familia</strong></TableCell>
                    </TableRow>
                </TableHead>
                
                {/* CUERPO DE LA TABLA */}
                <TableBody>
                    {lista.map((familia) => (
                        <TableRow key={familia.id}>
                            <TableCell>{familia.id}</TableCell>
                            <TableCell>{familia.codigo}</TableCell>
                            <TableCell>{familia.nombre}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                
            </Table>
        </TableContainer>
    );
}

export default FamiliasProfesionales;