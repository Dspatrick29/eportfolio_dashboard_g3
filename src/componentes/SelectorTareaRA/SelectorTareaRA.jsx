
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { NativeSelect } from '@mui/material';
import tareasRA from '../../mocks/mock-tareasRA';





function SelectorTareaRA(props) {

    // Estado inicial
    const [tareaSeleccionada, setTareaSeleccionada] = useState(0);

    // Manejo el cambio de seleccion a traves el id
    function handleChange(event) {
        const id = parseInt(event.target.value);
        setTareaSeleccionada(id);

        // buscamos el objeto completo en la lista que llega por props
        const tareaObj = props.lista.find(t => t.id === id);

        // lo devolvemos al padre con la funcion que nos pasamos por props
        if (props.seleccionarTarea) {
            props.seleccionarTarea(tareaObj || null);
        }
    }

    return (
        <>

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Tarea
                    </InputLabel>
                    <NativeSelect
                        value={tareaSeleccionada}
                        onChange={handleChange}
                        inputProps={{
                            name: 'tarea',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={0}>Sin seleccionar</option>
                        {/* Este props seria tareasRA */}
                        {props.lista.map((tarea) => (
                            <option key={tarea.id} value={tarea.id}>{tarea.observaciones}</option>
                        ))}

                    </NativeSelect>
                </FormControl>
            </Box>
        </>
    )

}

export default SelectorTareaRA;
