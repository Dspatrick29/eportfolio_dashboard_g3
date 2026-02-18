function getMenuAdmin() {
    return fetch('https://mocki.io/v1/0b5725aa-73ed-4ed7-a622-98842ec59753')
        .then((response) => {
            return (response.json())
        })
        .then((data) => {
            return (data.administrador || []);
        })
        .catch((error) => {
            console.log(error)
            return ([])
        })
}

export default getMenuAdmin;
