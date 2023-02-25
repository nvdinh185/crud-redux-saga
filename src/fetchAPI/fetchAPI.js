function getUser() {
    return new Promise((resolve, reject) => {
        let url = 'http://localhost:8080/users'
        let config = { method: "GET" }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function addUser(data) {
    return new Promise((resolve, reject) => {
        let url = 'http://localhost:8080/users'
        let config = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function deleteUser(userId) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:8080/users/delete/' + userId.id
        console.log(userId, 'day la userid');
        const config = {
            method: 'DELETE'
        }

        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function updateUser(updateUser) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:8080/users/updates/' + updateUser.id
        const config = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateUser)
        }

        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function searchUser(searchUser) {
    return new Promise((resolve, reject) => {
        let url = `http://localhost:8080/users/search?name=${searchUser}`
        let config = { method: "GET" }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}


//path params vs query path và body
export {
    getUser,
    addUser,
    deleteUser,
    updateUser,
    searchUser
}

// API {url: lấy dữ liệu
//header: khai báo kiểu dữ liệu (json)
///body: chứa dữ liệu truyền đi
//method: HTTP GET POST PUT DELETE }
//
//
