import axios from "axios";


export const exchangeApi = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data',
    headers: {
        "apiKey": process.env.REACT_APP_API_KEY
    },
})
