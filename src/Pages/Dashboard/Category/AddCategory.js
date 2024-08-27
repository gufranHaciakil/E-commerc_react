import { useState } from "react"
import { Axios } from "../../../Api/axios"
import { CATEGORY } from "../../../Api/Api"

export default function AddCategory() {
    const [Title, setTitle] = useState('')
    const [Image, setImage] = useState('')

    const form = new FormData()
    form.append('title', Title)
    form.append('image', Image)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            let res = await Axios.post(`${CATEGORY}/add`, form)
            console.log(res)
            window.location.href = '/dashboard/categories'
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className="flex flex-col pl-4 justify-center h-[27rem] w-1/3" onSubmit={handleSubmit}>

            <h1 className='font-bold text-3xl mb-6'>Add Category</h1>

            <div className="flex flex-col gap-10">

                <div className="f-item ">
                    <input type="name" placeholder="Title.." className=' w-full bg-transparent border-b border-gray-400' value={form.title} onChange={(eo) => {
                        setTitle(eo.target.value)
                    }
                    } required />
                </div>

                <div className="f-item ">
                    <input type="file" className='w-full bg-transparent border-b border-gray-400' value={form.image} onChange={(eo) => {
                        setImage(eo.target.files.item(0))
                    }
                    } required />
                </div>

            </div>
            <div className="flex gap-2">
                <button disabled={Title === '' ? true : false} className='disabled:opacity-30 disabled:hover:bg-green-900 text-zinc-100 text-xl w-fit mt-6 bg-green-900 px-4 py-2 rounded-sm hover:bg-green-800'>Save</button>
            </div>

        </form>

    )

}