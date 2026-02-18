import { useState } from "react";
import modulosMatriculados from "../mocks/mock-matriculados";

function useMisModulosMatriculadosMock(usuario_) {
    
    const [buscando, setBuscando] = useState(false);

    // Accedemos a la propiedad '.lista' del usuario si este existe.
    const modulosIniciales = modulosMatriculados[usuario_] ? modulosMatriculados[usuario_].lista : [];
    
    const [lista, setLista] = useState(modulosIniciales);

    return { buscando, lista };
}

export default useMisModulosMatriculadosMock;