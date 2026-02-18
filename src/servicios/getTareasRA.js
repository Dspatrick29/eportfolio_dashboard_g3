function getTareasRA() {
    // Pon aquí tu URL_TAREAS
    return fetch('https://mocki.io/v1/b523f308-1316-49a9-9f0b-7e42cbdf6a04')
        .then((response) => response.json())
        .then((data) => data.lista || [])
        .catch((error) => {
            console.log("Error trayendo tareas:", error);
            return [];
        });
}

export default getTareasRA;