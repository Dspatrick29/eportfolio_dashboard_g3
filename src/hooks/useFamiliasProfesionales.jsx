import { useState, useEffect } from "react";
import getFamiliasProfesionales from "../servicios/getFamiliasProfesionales";

function useFamiliasProfesionales() {
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        setBuscando(true);
        getFamiliasProfesionales()
            .then((datos) => {
                setLista(datos);
                setBuscando(false);
            });
    }, []);

    return { buscando, lista };
}

export default useFamiliasProfesionales;