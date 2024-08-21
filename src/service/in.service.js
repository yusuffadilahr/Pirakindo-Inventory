import axios from "axios"

export const getIn = (callback) => {
    axios.get('http://localhost:3001/in', {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            callback(res)
        })
        .catch((err) => {
            console.error(err);
        })
}

export const createDataMasuk = (data, callback) => {
    axios.post('http://localhost:3001/in', data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            callback(true, res)
        })
        .catch((err) => {
            console.error(false, err)
        })
}

export const singleInData = (id, callback) => {
    axios.get(`http://localhost:3001/in/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            callback(res)
        })
        .catch((err) => {
            console.error(err)
        })
}

export const updateDataIn = (id, data, callback) => {
    axios.put(`http://localhost:3001/in/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            callback(true, res.data)
        })
        .catch((error) => {
            console.error(false, error)
        })
}

export const deleteDataIn = (id, callback) => {
    axios.delete(`http://localhost:3001/in/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            callback(res)
        })
        .catch((err) => {
            console.error(err)
        })
}