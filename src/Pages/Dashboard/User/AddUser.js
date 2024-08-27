import { useState } from "react"
import { Axios } from "../../../Api/axios"
import { USER } from "../../../Api/Api"

export default function AddUser() {

    const [Form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        role: ""
    })

    function handleChange(e) {
        setForm({ ...Form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await Axios.post(`${USER}add`, Form)
            window.location.href = '/dashboard/users'
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <form className="flex flex-col pl-4 justify-center h-[27rem] w-1/3" onSubmit={handleSubmit}>
        
            <h1 className='font-bold text-3xl mb-6'>Add User</h1>

            <div className="flex flex-col gap-10">

                <div className="f-item ">
                    <input type="name" placeholder="Name.." className=' w-full bg-transparent border-b border-gray-400' name='name' value={Form.name} onChange={handleChange} required />
                </div>

                <div className="f-item ">
                    <input type="email" placeholder="Email.." className='w-full bg-transparent border-b border-gray-400' name='email' value={Form.email} onChange={handleChange} required />
                </div>

                <div className="f-item ">
                    <input type="password" placeholder="Password.." min={6} className='w-full bg-transparent border-b border-gray-400' name='password' value={Form.password} onChange={handleChange} required />
                </div>

                <select value={Form.role} className="py-2 px-2 w-40 rounded-lg" name="role" onChange={handleChange}>
                    <option value={''} disabled >Select Role</option>
                    <option value={1995}>Admin</option>
                    <option value={2001}>User</option>
                    <option value={1999}>Product Manger</option>
                    <option value={50}>Other</option>
                </select>

            </div>

            <div className="flex gap-2">
                <button disabled={Form.name.length !== "" && Form.email.length !== "" && Form.password.length < 6 && Form.role === "" ? true : false} className='disabled:opacity-30 disabled:hover:bg-green-900 text-zinc-100 text-xl w-fit mt-6 bg-green-900 px-4 py-2 rounded-sm hover:bg-green-800'>Save</button>
            </div>

        </form>

    )

}