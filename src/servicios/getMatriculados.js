function getMatriculados(usuarioConectado) {
    return fetch('https://mocki.io/v1/927eb5a9-fff8-4153-9761-cdf43c2f54e9')
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

export default getMatriculados;