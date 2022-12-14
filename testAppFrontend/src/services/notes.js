import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/notes'
const baseUrl = '/api/notes'
const getAll = () => {
    const allData = axios.get(baseUrl)
    return allData.then(response=>response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const allData = axios.put(`${baseUrl}/${id}`, newObject)
    return allData.then(response=>response.data)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}