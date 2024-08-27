import Cookies from 'cookie-universal';
import { Outlet } from 'react-router-dom';

export default function RequireBack() {
    const cookie = Cookies()
    const token = cookie.get('token')
    return token ? window.location = "/" : <Outlet />

}