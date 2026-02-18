import { useState, useEffect } from "react";
import getTareasRA from "../servicios/getTareasRA";

function useTareasRA() {
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        setBuscando(true);
        getTareasRA().then((tareasRecibidas) => {
            setLista(tareasRecibidas);
            setBuscando(false);
        });
    }, []);

    return { buscando, lista };
}

export default useTareasRA;