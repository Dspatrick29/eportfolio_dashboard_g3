function getRoles(usuarioConectado) {
    // En caso de error sustituir la URL por la nueva, formato en los mocks para copiar y crear
    return fetch('https://mocki.io/v1/348a45a2-6371-4944-947b-2901e21abdae')
        .then((response) => {
            // Convertimos la respuesta a JSON
            return (response.json())
        })
        .then((data) => {
            // Como el JSON trae todos los usuarios, filtramos el que nos interesa
            if (data[usuarioConectado]) {
                return (data[usuarioConectado].roles);
            } else {
                return ([]);
            }
        })
        .catch((error) => {
            
            return([])
        })
}

export default getRoles;