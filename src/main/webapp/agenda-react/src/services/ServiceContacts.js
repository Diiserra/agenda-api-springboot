const API_URL = "http://localhost:8081/contacts/"


export const ServiceContact = {

    findAll: async () => {
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        return data
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
        const data = await response.ok
        return data
    },

    delete: async (id) => {
        const header = {
            method: 'DELETE'
        }
        const response = await fetch(`${API_URL}${id}`, header)
        const data = await response.ok
        return data
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
        const data = response.ok
        return data
    }

    
}