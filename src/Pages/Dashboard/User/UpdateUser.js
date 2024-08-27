import { useEffect, useState } from "react"
import { Axios } from "../../../Api/axios"
import { USER } from "../../../Api/Api"
import Loading from "../../../Components/Loading/Loading"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateUser() {
    let { id } = useParams()
    let navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState({})

    const [Form, setForm] = useState({
        name: '',
        email: '',
        role: ''
    })

    function handleChange(e) {
        setForm({ ...Form, [e.target.name]: e.target.value })
    }

    async function get_user() {
        try {
            let res = await Axios.get(USER + id,)
            setForm(res.data)
            console.log(res)
        } catch (err) {
            navigate('/dashboard/users/page/404', { replace: true })

        }
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await Axios.post(`${USER}edit/${id}`, Form)
            window.location.href = '/dashboard/users'
        } catch (err) {
            console.log(err)
        }
    }

    async function getCurrentUser() {
        try {
            let res = await Axios.get(USER)
            setCurrentUser(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCurrentUser()
        get_user()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleDelete() {
        let confirm = window.confirm('Are you sure you want to delete this user?')
        if (confirm) {
            // eslint-disable-next-line eqeqeq
            if (currentUser.id != id) {
                try {
                    await Axios.delete(USER + id)
                    window.location.href = '/dashboard/users'
                }
                catch (err) {
                    console.log(err)
                }
            }
        } else {
            return false;
        }

    }
    return (
        <form className="flex flex-col pl-4 justify-center h-[27rem] w-1/3" onSubmit={handleSubmit}>

            <h1 className='font-bold text-3xl mb-6'>Update User</h1>
            {Form.name === "" && Form.email === "" ? <Loading /> :
                <div className="flex flex-col gap-10">
                    <div className="f-item ">
                        <input type="name" className=' w-full bg-transparent border-b border-gray-400' name='name' value={Form.name} onChange={handleChange} required />
                    </div>

                    <div className="f-item ">
                        <input type="email" className='w-full bg-transparent border-b border-gray-400' name='email' value={Form.email} onChange={handleChange} required />
                    </div>
                    <select value={Form.role} className="py-2 px-2 w-40 rounded-lg" name="role" onChange={handleChange}>
                        <option disabled >Select Role</option>
                        <option value={1995}>Admin</option>
                        <option value={2001}>User</option>
                        <option value={50}>Other</option>
                    </select>
                </div>
            }
            <div className="flex gap-2">
                <button className='text-zinc-100 text-xl w-fit mt-6 bg-green-900 px-4 py-2 rounded-sm hover:bg-gray-400'>Save</button>
                {currentUser.id != id && <button onClick={handleDelete} className='text-zinc-100 text-xl w-fit mt-6 bg-rose-700 px-4 py-2 rounded-sm hover:bg-rose-400'>Delete</button>
                }

            </div>
        </form>

    )

}