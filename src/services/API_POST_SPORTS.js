import axios from "axios";

export default axios.create({
    baseURL: "https://blog-backend-iota.vercel.app/api/postsports/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }   
})