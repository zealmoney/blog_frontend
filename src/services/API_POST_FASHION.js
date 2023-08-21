import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8000/api/postfashion/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }   
})