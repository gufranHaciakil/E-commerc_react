
import { NavLink } from 'react-router-dom';
import './bars.css'
import { useContext, useEffect, useState } from 'react';
import { menu } from '../../Context/MenuContext';
import { Window } from '../../Context/WindowScreen';
import { Axios } from '../../Api/axios';
import { baseUrl, LOGOUT } from '../../Api/Api';
import Cookies from 'cookie-universal';
import { Navlinks } from './Navlinks';

export default function SideBar() {

    const [currentUser, setCurrentUser] = useState({})
    const menu_context = useContext(menu)
    const windowSize = useContext(Window)

    async function handleLogout() {
        try {
            await Axios.get(LOGOUT)
            let cookies = Cookies()
            cookies.remove('token')
            window.location.href = '/login'
        } catch (err) {
            console.log(err)
        }

    }

    // console.log(windowSize)

    const isOpen = menu_context.isOpen

    useEffect(() => {
        Axios.get(baseUrl + '/user').then(res => {
            setCurrentUser(res.data)
        }).catch(err => {
            console.log(err)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    return (
        <>
            <div className='fixed top[-10%] left-0 right-0 h-screen z-[1] bg-[#00000052]' style={{
                display: windowSize < 500 ? isOpen ? 'block' : 'none' : 'none'
            }}>
            </div>
            <div className="flex fixed flex-col gap-2 top-[10%] left-0 min-h-screen bg-white bottom-0 z-[1] shadow-md transition-all duration-300"
                style={{
                    width: windowSize < 500 ? isOpen ? 'fit-content' : "0" : isOpen ? '250px' : "fit-content", padding: isOpen ? '1rem 0.6rem' : '1rem 0.5rem',
                    left: windowSize < 500 ? !isOpen ? '-350px' : '0' : '0',
                    position: windowSize < 500 && 'fixed',
                }}>
                {Navlinks.map((link, index) =>
                    link.role.includes(currentUser.role) &&
                    (
                        <NavLink style={{ padding: isOpen ? "1rem 15px" : "0.4rem ", backgroundColor: isOpen ? "#eeeeeea6" : "#eee0" }} to={link.path} key={index} className="side-link flex items-center gap-2 hover:bg-gray-200 rounded-md">
                            {link.icon}
                            <p className='text-xl text-gray-500' style={{ display: isOpen ? 'block' : 'none' }}>{link.title}</p>
                        </NavLink>
                    ))
                }

                <button style={{ padding: isOpen ? "1rem 15px" : "0.4rem ", backgroundColor: isOpen ? "#eeeeeea6" : "#eee0" }} className="side-link flex items-center gap-2 hover:bg-gray-200 rounded-md ">
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                    </svg>
                    <p className='text-xl text-gray-500' style={{ display: isOpen ? 'block' : 'none' }} onClick={() => {
                        let confrm = window.confirm('Are you sure you want to logout?')
                        if (confrm) {
                            handleLogout()
                        }
                    }}>Logout</p>
                </button>

            </div>
        </>
    )
}