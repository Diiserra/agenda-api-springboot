
const API_URL = "http://localhost:8081/contacts/"


export const ServiceContact = {

    findAll: async () => {
        const response = await fetch(`${API_URL}`)
        return await response.json()
  
    },

    save: async (body) => {
        const header = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        const response = await fetch(`${API_URL}`, header)
        return await response.ok 
    },

    delete: async (id) => {
        const header = {
            method: 'DELETE'
        }
        const response = await fetch(`${API_URL}${id}`, header)
        return await response.ok
    },

    update: async (id, body) => {
        const header = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        const response = await fetch(`${API_URL}${id}`, header)
        return await response.ok
    }
  
}