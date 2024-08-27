/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react"
import { Axios } from "../../../Api/axios"
import { CATEGORIES, PRODUCT } from "../../../Api/Api"
import axios from "axios"

export default function AddProduct() {
    const [categories, setCategories] = useState([])
    const [images, setImages] = useState([])

    const foucs = useRef('')
    const [Form, setForm] = useState({
        category: 'Select Categoray',
        title: '',
        description: '',
        price: '',
        discount: '',
        About: '',
    })

    function handleChange(e) {
        setForm({ ...Form, [e.target.name]: e.target.value })
        console.log(Form)
        console.log(images[0])
        console.log(images)
    }


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const dataForm = new FormData()
            dataForm.append('category', Form.category)
            dataForm.append('title', Form.title)
            dataForm.append('description', Form.description)
            dataForm.append('price', Form.price)
            dataForm.append('discount', Form.discount)
            dataForm.append('About', Form.About)
            for (let i = 0; i <= images.length; i++) {
                dataForm.append("images[]", images[i])
            }
            let res = await Axios.post(`${PRODUCT}/add`, dataForm)
            console.log(res)
            console.log(images)
            // window.location.href = '/dashboard/products'
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        foucs.current.focus()
    }, []);
    async function getCategories() {

        try {
            let res = await Axios.get(CATEGORIES)
            setCategories(res.data)
            console.log(res)
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const categoriesShow = categories.map((item, key) => {
        return (
            <option key={key} value={item.id}>{item.title}</option>
        )
    }
    )

    const imagesShow = images.map((img, key) => {
        return (
            <div className="flex border gap-4 border-gray-300 px-4 py-2 items-center w-full">
                <p>{key + 1} - </p>
                <img key={key} src={URL.createObjectURL(img)} width='80px' />
                <p>{img.name}</p>
            </div>
        )

    })

    return (
        <form className="flex flex-col pl-4 mt-10 w-1/3" onSubmit={handleSubmit}>
            <h1 className='font-bold text-3xl mb-6'>Add Product</h1>
            <div className="flex flex-col gap-10">
                <div className="f-item ">
                    <select style={{ width: '100%' }} name="category" defaultValue={Form.category} onChange={handleChange}>
                        <option disabled>Select Categoray</option>
                        {categoriesShow}
                    </select>
                </div>
                <div className="f-item ">
                    <input type="text" ref={foucs} placeholder="Title.." name="title" className=' w-full bg-transparent border-b border-gray-400' value={Form.title} onChange={handleChange} required />
                </div>
                <div className="f-item ">
                    <input type="text" placeholder="description.." name="description" className=' w-full bg-transparent border-b border-gray-400' value={Form.description} onChange={handleChange} required />
                </div>

                <div className="f-item ">
                    <input type="text" placeholder="Price.." name="price" className=' w-full bg-transparent border-b border-gray-400' value={Form.price} onChange={handleChange} required />
                </div>
                <div className="f-item ">
                    <input type="text" placeholder="About.." name="About" className=' w-full bg-transparent border-b border-gray-400' value={Form.About} onChange={handleChange} required />
                </div>
                <div className="f-item ">
                    <input type="text" placeholder="Discount.." name="discount" className=' w-full bg-transparent border-b border-gray-400' value={Form.discount} onChange={handleChange} required />
                </div>

                <div className="f-item">
                    <input multiple type="file" className='w-full bg-transparent border-b border-gray-400' onChange={(eo) => {
                        setImages([...eo.target.files])
                    }
                    } />
                </div>

            </div>
            <div className="mt-4 w-[43rem]">
                {imagesShow}
            </div>
            <div className="flex gap-2">
                <button disabled={Form.title === '' || Form.price === '' || Form.discount === '' || Form.discount === '' ? true : false} className='disabled:opacity-30 disabled:hover:bg-green-900 text-zinc-100 text-xl w-fit mt-6 bg-green-900 px-4 py-2 rounded-sm hover:bg-green-800'>Save</button>
            </div>

        </form>

    )

}