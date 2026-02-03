import { useState } from "react";
import tareasRA from "../../mocks/mock-tareasRA";
import SelectorTareaRA from "../SelectorTareaRA/SelectorTareaRA";
import NuevaEvidenciaForm from "../NuevaEvidenciaForm/NuevaEvidenciaForm";

function NuevaEvidencia() {


    // Estado para la tarea y la funcion para devolverla
    const [tareaElegida, setTareaElegida] = useState(null);

    function recibirTarea(tarea) {
        setTareaElegida(tarea);
        console.log("Tarea seleccionada:", tarea);
    }

    // Creo el objeto TAREA que tengo que pasar por porps al form

    let tarea = {
        id: 4,
        observaciones: "Ejemplo"
    }
    // Creo una funcion para recibir la tarea del hijo
    function manejarEvidencia(nuevaEvidencia){
        console.log("Evidencia recibida", nuevaEvidencia);

        // Posteriormente logica para manejar dichos datos
    }

    return (
        <>

            <SelectorTareaRA lista={tareasRA.lista}
                seleccionarTarea={recibirTarea}
            ></SelectorTareaRA>
            <NuevaEvidenciaForm tarea={tarea}
                manejarEvidencia = {manejarEvidencia}
            ></NuevaEvidenciaForm>
        </>
    )
}

export default NuevaEvidencia;