import axios from "axios"
import { SERVER_URL } from "../constants/constants"

const api = axios.create({
    baseURL: SERVER_URL
})

export default api