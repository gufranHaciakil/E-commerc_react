import { useEffect, useState } from "react"
import { Axios } from "../../../Api/axios"
import { CATEGORIES, CATEGORY, PRODUCT } from "../../../Api/Api"
import Loading from "../../../Components/Loading/Loading"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateProduct() {
    const [categories, setCategories] = useState([])
    let { id } = useParams()
    let navigate = useNavigate()
    const [form, setForm] = useState({
        title: "",
        price: "",
        category: "select category",
        description: "",
        discount: "",
        About: "",
    })

    async function get_product(e) {
        try {
            let res = await Axios.get(PRODUCT + "/" + id,)
            setForm(res.data[0])
            console.log(res)
        } catch (err) {
            navigate('/dashboard/product/page/404', { replace: true })
        }
    }
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await Axios.post(`${PRODUCT}/edit/${id}`, form)
            window.location.href = '/dashboard/products'
        } catch (err) {
            console.log(err)
        }
    }
    async function getCategories() {
        try {
            let res = await Axios.get(`${CATEGORIES}`)
            setCategories(res.data)
            console.log(res)
        } catch (err) {
            console.log(err)
        }

    }
   

    useEffect(() => {
        getCategories()

        get_product()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleDelete() {
        let confirm = window.confirm('Are you sure you want to delete this?')
        if (confirm) {
            try {
                await Axios.delete(PRODUCT + "/" + id)
                window.location.href = '/dashboard/products'
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
            <h1 className='font-bold text-3xl mb-6'>Update Product</h1>
            {form.title === "" ? <Loading /> :
                <div className="flex flex-col gap-10">
                    <select name="category" onChange={handleChange}>
                        <option disabled>select category</option>
                        {categories.map((item, key) => {
                            if (item.id === form.category) {
                                return (
                                    <option key={key} value={item.id} selected>{item.title}</option>
                                )
                            } else {
                                return (
                                    <option key={key} value={item.id}>{item.title}</option>
                                )
                            }
                        }
                        )}
                    </select>
                    <div className="f-item ">
                        <input type="text" name="title" placeholder="Title" className=' w-full bg-transparent border-b border-gray-400' value={form.title} onChange={handleChange}
                            required />
                    </div>
                    <div className="f-item ">
                        <input type="text" name="price" placeholder="Price" className=' w-full bg-transparent border-b border-gray-400' value={form.price} onChange={handleChange}
                            required />
                    </div>
                    <div className="f-item ">
                        <input type="text" name="description" placeholder="Description" className=' w-full bg-transparent border-b border-gray-400' value={form.description} onChange={handleChange}
                            required />
                    </div>
                    <div className="f-item ">
                        <input type="text" name="discount" placeholder="Discount" className=' w-full bg-transparent border-b border-gray-400' value={form.discount} onChange={handleChange}
                            required />
                    </div>
                    <div className="f-item ">
                        <input type="text" name="About" placeholder="About" className=' w-full bg-transparent border-b border-gray-400' value={form.About} onChange={handleChange}
                            required />
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