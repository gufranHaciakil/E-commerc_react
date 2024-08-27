import { useEffect, useState } from "react"
import { Axios } from "../../../Api/axios"
import { CATEGORY } from "../../../Api/Api"
import Loading from "../../../Components/Loading/Loading"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateCategory() {
    let { id } = useParams()
    let navigate = useNavigate()

    const [title, settitle] = useState(' ')
    const [image, setImage] = useState('')

    const Form = new FormData()
    Form.append('title', title)
    Form.append('image', image)

    async function get_category() {
        try {
            let res = await Axios.get(CATEGORY + "/" + id,)
            settitle(res.data.title)
            setImage(res.data.image)
            console.log(res)
        } catch (err) {
            navigate('/dashboard/cateegory/page/404', { replace: true })
        }
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await Axios.post(`${CATEGORY}/edit/${id}`, Form)
            window.location.href = '/dashboard/categories'
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        get_category()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleDelete() {
        let confirm = window.confirm('Are you sure you want to delete this category?')
        if (confirm) {
            try {
                await Axios.delete(CATEGORY + "/" + id)
                window.location.href = '/dashboard/categories'
            }
            catch (err) {
                console.log(err)
            }
        } else {
            return false;
        }

    }
    return (
        <form className="flex flex-col pl-4 justify-center mt-12 h-[27rem] w-1/3" onSubmit={handleSubmit}>
            <h1 className='font-bold text-3xl mb-6'>Update User</h1>
            {title === "" ? <Loading /> :
                <div className="flex flex-col gap-10">
                    <div className="f-item ">
                        <input type="text" className=' w-full bg-transparent border-b border-gray-400' value={title} onChange={(eo) => {
                            settitle(eo.target.value)
                        }
                        } required />
                    </div>
                    <div className="f-item ">
                        <img src={image} className="w-64 mb-4 rounded-md" alt="no img" />
                        <input type="file" className='w-full bg-transparent border-b border-gray-400' onChange={(eo) => {
                            setImage(eo.target.files.item(0))
                        }
                        } />
                    </div>

                </div>
            }
            <div className="flex gap-2">
                <button className='text-zinc-100 text-xl w-fit mt-6 bg-green-900 px-4 py-2 rounded-sm hover:bg-gray-400'>Save</button>
                <button onClick={handleDelete} className='text-zinc-100 text-xl w-fit mt-6 bg-rose-700 px-4 py-2 rounded-sm hover:bg-rose-400'>Delete</button>
            </div>
        </form>

    )

}