import { useState } from "react";
import roles from "../mocks/mock-roles";


function useRoles(usuario_) {
    
    // Estado 'buscando' inicializado a false
    const [buscando, setBuscando] = useState(false);

    // Estado 'lista' inicializado con los roles del usuario conectado.
    const rolesIniciales = roles[usuario_] ? roles[usuario_].roles : [];
    
    const [lista, setLista] = useState(rolesIniciales);

    // El hook devuelve un objeto con ambos estados
    return { buscando, lista };
}

export default useRoles;