
function getFamiliasProfesionales() {
    

    
    return fetch('https://mocki.io/v1/d88290fc-8f12-47bd-8fe1-c0e50de69aad')
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error al obtener familias:", error);
            return [];
        });
    
}

export default getFamiliasProfesionales;