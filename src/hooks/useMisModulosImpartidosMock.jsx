import { useState } from "react";
import impartidos from "../mocks/mock-impartidos";

function useMisModulosImpartidosMock(usuario_) {
    
    const [buscando, setBuscando] = useState(false);

    // Validamos si el usuario existe en el mock. Si existe, extraemos su propiedad '.lista'.
    const modulosIniciales = impartidos[usuario_] ? impartidos[usuario_].lista : [];
    
    const [lista, setLista] = useState(modulosIniciales);

    // El hook devuelve un objeto con ambos estados
    return { buscando, lista };
}

export default useMisModulosImpartidosMock;