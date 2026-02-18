import { useState, useEffect } from "react";
import getMatriculados from "../servicios/getMatriculados";

function useMisModulosMatriculados(usuarioConectado) {
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        if (usuarioConectado) {
            setBuscando(true);
            getMatriculados(usuarioConectado)
                .then((modulosRecibidos) => {
                    setLista(modulosRecibidos);
                    setBuscando(false);
                });
        }
    }, [usuarioConectado]);

    return { buscando, lista };
}

export default useMisModulosMatriculados;