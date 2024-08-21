import axios from "axios"

export const getDataOut = (callback) => {
    try {
        axios.get('http://localhost:3001/out', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                callback(res)
            })
    } catch (error) {
        console.error(error)
    }
}

export const singleOutData = (id, callback) => {
    try {
        axios.get(`http://localhost:3001/out/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                callback(res)
            })
    } catch (error) {
        console.error(error)
    }
}

export const updateDataOut = (id, data, callback) => {
    try {
        axios.put(`http://localhost:3001/out/${id}`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                callback(res)
            })
    } catch (error) {
        console.error(error)
    }
}

export const createDataOut = (data, callback) => {
    try {
        axios.post('http://localhost:3001/out', data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                callback(res)
            })
    } catch (error) {
        console.error(error)
    }
}

export const deleteDataOut = (id, callback) => {
    try {
        axios.delete(`http://localhost:3001/out/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                callback(res)
            })
    } catch (error) {
        console.error(error)
    }
}