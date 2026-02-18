import { useState, useEffect } from "react";
import getRoles from "../servicios/getRoles";


function useRoles(usuarioConectado) {
    
    // Inicializamos 'buscando' a true porque la petición empieza al montar el componente
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        // Solo hacemos la petición si hay un usuario válido
        if (usuarioConectado) {
            setBuscando(true);
            
            // Llamamos al servicio y usamos .then() para recibir los datos
            getRoles(usuarioConectado)
                .then((rolesRecibidos) => {
                    setLista(rolesRecibidos);
                    setBuscando(false);
                });
        }
    }, [usuarioConectado]);

    return { buscando, lista };
}

export default useRoles;