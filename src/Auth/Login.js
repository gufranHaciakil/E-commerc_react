import { useState } from 'react'
import './auth.css'
import { LOGIN } from '../Api/Api'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading/Loading'
import Cookies from 'cookie-universal'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [errText, setErrText] = useState('')
    const [Form, setForm] = useState({
        email: '',
        password: ''
    })
    const cookie = Cookies();
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        try {
            let res = await axios.post(LOGIN, Form)
            console.log(res)
            const token = res.data.token
            const role = res.data.user.role
            const go = role === '1995' ? '/dashboard/users' : role === '50' ? '/dashboard/otherUsers' : role === '1999' ? 'dashboard/products' : '/'
            cookie.set('token', token)
            setLoading(false)
            window.location = go
        }
        catch (err) {
            setLoading(false)
            console.log(err)
            setErrText(err.response.statusText)
        }
    }
    function handleChange(e) {
        setForm({ ...Form, [e.target.name]: e.target.value })
    }
    return (
        <div>
            {loading && <Loading />}
            <Link to='/'>Home</Link>
            <div className='flex flex-col gap-6 mx-auto mt-16 sm:w-5/6 pl-4'>
                <form className="log-form flex flex-col pl-4 justify-center h-[27rem]" onSubmit={handleSubmit}>

                    <h1 className='font-bold text-3xl mb-6'>Login Now</h1>
                    <div className="f-item flex flex-col gap- relative">
                        <input type="email" className='bg-transparent' placeholder='..@email.com' name='email' value={Form.email} onChange={handleChange} required />
                        <label>Your Email</label>
                    </div>
                    <div className="f-item flex gap- flex-col relative">
                        <input type="password" minLength={6} className='bg-transparent' placeholder='Password..' name='password' value={Form.password} onChange={handleChange} required />
                        <label>Your Password</label>
                    </div>
                    {errText !== "" &&
                        <div className='err-text flex gap-2 items-center  bg-rose-600 pl-2 py-2 rounded-md'>
                            <svg onClick={() => { setErrText("") }} className="w-4 h-4 text-gray-800 dark:text-white hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>                        <p className=' text-zinc-200 text-sm '>{errText}</p>
                        </div>}

                    <button className='text-zinc-100 text-xl w-fit mt-6 bg-green-900 px-4 py-2  rounded-sm hover:bg-gray-400'>submit</button>
                </form>


            </div>
        </div>
    )
}