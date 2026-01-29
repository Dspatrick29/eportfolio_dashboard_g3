import { useState } from "react";
import tareasRA from "../../mocks/mock-tareasRA";
import SelectorTareaRA from "../SelectorTareaRA/SelectorTareaRA";

function NuevaEvidencia () {


     // Estado para la tarea y la funcion para devolverla
    const [tareaElegida, setTareaElegida] = useState(null);

    function recibirTarea(tarea) {
        setTareaElegida(tarea);
        console.log("Tarea seleccionada:", tarea);
    }


    return(
        <>
        
        <SelectorTareaRA lista={tareasRA.lista}
            seleccionarTarea={recibirTarea}
        ></SelectorTareaRA>
        </>
    )
}

export default NuevaEvidencia;