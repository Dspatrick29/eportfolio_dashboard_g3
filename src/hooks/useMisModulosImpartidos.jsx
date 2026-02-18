import { useState, useEffect } from "react";
import getImpartidos from "../servicios/getImpartidos";

function useMisModulosImpartidos(usuarioConectado) {
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        if (usuarioConectado) {
            setBuscando(true);
            getImpartidos(usuarioConectado)
                .then((modulosRecibidos) => {
                    setLista(modulosRecibidos);
                    setBuscando(false);
                });
        }
    }, [usuarioConectado]);

    return { buscando, lista };
}

export default useMisModulosImpartidos;