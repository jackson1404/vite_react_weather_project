import axios from "axios";

export const  api = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5'
})

export const api_key = '2efcf3b645640035a78497e464516ac2';