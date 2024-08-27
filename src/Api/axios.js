import axios from "axios";

import Cookies from 'cookie-universal'

import { baseUrl } from "./Api";

const cookie = Cookies()

let token = cookie.get('token')

export const Axios = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`
    }
})