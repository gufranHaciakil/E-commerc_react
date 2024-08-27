import Cookies from 'cookie-universal';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { USER } from '../Api/Api';
import Loading from '../Components/Loading/Loading';
import axios from 'axios';
import { baseUrl } from './../Api/Api';
import Page403 from '../Pages/403/403';

export default function RequireAuth({ allowedRole }) {
    const [user, setUser] = useState("")
    const Navigate = useNavigate()
    const cookie = Cookies()
    const token = cookie.get('token')
    useEffect(() => {
        axios.get(baseUrl + USER, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setUser(res.data)
            }).catch(err => {
                Navigate('/login')
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return token ? user === "" ? <Loading /> : allowedRole.includes(user.role) ? <Outlet /> : <Page403 role={user.role} /> : <Navigate to='/login' relative='true' />
}