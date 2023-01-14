const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject('Check your API url!')
            }
        })
        .then((data) => {
            let output = ''
            let no = 1
            data.forEach(element => {
                output += `
                <tr>
                    <td> ${no++} </td>
                    <td> ${element.name} </td>
                    <td> ${element.username} </td>
                    <td> ${element.email} </td>
                    <td> ${element.address.city} </td>
                    <td> ${element.address.zipcode} </td>
                    <td> ${element.website} </td>
                    <td> ${element.phone} </td>
                </tr>    
                `
                console.log(element.name)
            })
            document.querySelector('tbody').innerHTML = output
        })
        .catch((error) => console.log(`Error : ${error}`))
}
loadData()