

function getImpartidos(usuarioConectado) {
    return fetch('https://mocki.io/v1/425cecd8-0d90-422e-8f61-f82461d7d2fe')
        .then((response) => {
            return (response.json())
        })
        .then((data) => {
            if (data[usuarioConectado]) {
                return (data[usuarioConectado].lista);
            } else {
                return ([]);
            }
        })
        .catch((error) => {
            console.log(error)
            return ([])
        })
}

export default getImpartidos;