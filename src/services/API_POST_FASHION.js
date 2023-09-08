import axios from "axios";

export default axios.create({
    baseURL: "https://blog-backend-iota.vercel.app/api/postfashion/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }   
})