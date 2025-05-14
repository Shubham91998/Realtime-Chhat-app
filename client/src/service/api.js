import axios from "axios";

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
         let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log("Error while addUser API ", error.message)
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getusers api", error.message)
    }
}

export const setConversation = async(data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log("Error while calling set and conversation api", error.message)
        
    }
}

export const getConversation = async(users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log("Error while calling grt and conversation api", error.message)
        
    }
}

export const newMessage = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log("Error while calling message api", error.message)
        
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}


export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${url}/file/upload`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('❌ Error while calling upload file API:', error.message);
        return null;
    }
};