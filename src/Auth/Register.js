import { useState } from 'react'
import './auth.css'
import { REGISTER } from '../Api/Api'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../Components/Loading/Loading'

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [errText, setErrText] = useState('')
    const [Form, setForm] = useState({
        name: '',
        email: '',
        password: ''

    })
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        try {
            let res = await axios.post(REGISTER, Form)
            console.log(res)
            setLoading(false)
            navigate('/login')
        }
        catch (err) {
            setLoading(false)
            console.log(err)
            setErrText(err.response.data.message)
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

                <form className="reg-form flex flex-col pl-4 justify-center h-[27rem]" onSubmit={handleSubmit}>

                    <h1 className='font-bold text-3xl mb-6'>Register Now</h1>


                    <div className="f-item flex flex-col gap- relative">
                        <input type="text" className='bg-transparent' placeholder='Your name..' name='name' value={Form.name} onChange={handleChange} required />
                        <label>Name</label>
                    </div>
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

                    <Link to='http://127.0.0.1:8000/login-google' className='text-blue-600 flex gap-2 items-center'>
                        <svg className="w-4 h-4 text-rose-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clipRule="evenodd" />
                        </svg>
                        <span>Register with google</span>
                    </Link>

                    <button className='text-zinc-100 text-xl w-fit mt-6 bg-green-900 px-4 py-2  rounded-sm hover:bg-gray-400'>submit</button>
                </form>


            </div>



        </div >
    )
}