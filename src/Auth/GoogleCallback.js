import axios from "axios";
import { useEffect } from "react";
import { GOOGLE_CALL_BACK } from "../Api/Api";
import { useLocation } from "react-router-dom";
import  Cookies  from 'cookie-universal';

export default function GoogleCallback() {
    const location = useLocation();
    let cookie = Cookies()
    console.log(location)
    useEffect(() => {
        async function googleCallback() {
            try {
                let res = await axios.get(GOOGLE_CALL_BACK + location.search)
                console.log(res)
                const token = res.data.access_token
                cookie.set('token', token)
            } catch (err) {
                console.log(err)
            }
        }
        googleCallback()

    }, []);
    return (
        <div>
            <h1>Google Callback</h1>
        </div>
    )
}