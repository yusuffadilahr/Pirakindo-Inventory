import axios from "axios"

export const getKategori = (callback) => {
    axios.get('http://localhost:3001/kategori')
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
}

export const addKategoriData = (data, callback) => {
    axios.post('http://localhost:3001/kategori', data, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        callback(true, res)
    }).catch((error) => {
        callback(false, error)
    })
}

export const deleteKategori = (id, callback) => {
    axios.delete(`http://localhost:3001/kategori/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            callback(true, res.data)
        })
        .catch((err) => {
            console.error(false, err)
        })
}

export const singleKategori = (id, callback) => {
    axios.get(`http://localhost:3001/kategori/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            callback(res)
        })
        .catch((error) => {
            callback(error)
        })
}

export const updateKategori = (id, data, callback) => {
    axios.put(`http://localhost:3001/kategori/${id}`, data, {
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