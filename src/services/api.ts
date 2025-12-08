import axios from "axios";

export const api = axios.create({
    baseURL: "https://693df713f55f1be793040dab.mockapi.io/"
})

api.interceptors.request.use((config) => {
    let token = localStorage.getItem("accessToken")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})