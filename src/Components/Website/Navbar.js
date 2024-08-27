import { useEffect, useState } from "react"
import { CATEGORIES } from "../../Api/Api"
import { Axios } from "../../Api/axios"
import StringSlice from "../helpers/StringSlice"
import SkeltonList from "./Skelton/SkeltonList"


export default function Navbar() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        Axios.get(`${CATEGORIES}`).then(res => {
            setCategories(res.data.data)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])
    const categoryList = categories.map((category, index) => {
        return (
            <a key={index} href="/" className="block px-4 text-gray-800 hover:text-blue-500">
                {StringSlice(category.title, 11)}
            </a>
        )
    })

    return (
        <nav className="bg-white shadow-lg fixed z-20 right-0 left-0">
            <div className="container mx-auto px-6 py-1">
                <div className="flex items-center justify-between">
                    <div className="hidden w-full text-gray-600 md:flex md:items-center">
                        <img src="/logo2.png" alt="logo" className="w-[35%]" />
                    </div>
                    <div className="w-full text-gray-700 md:text-center flex items-center text-2xl font-semibold">
                        <input type="search" className="w-96 border-b border-r border-gray-400 text-lg" placeholder="search product.." />
                        <button className="border text-blue-500 border-gray-300 px-4 text-lg">Search</button>
                    </div>
                    <div className="flex items-center gap-4 justify-end w-full">
                        <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                            <svg class="w-8 h-8 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd" />
                            </svg>

                        </button>
                        <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                            <svg className="w-8 h-8 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                            </svg>

                        </button>
                    </div>
                </div>
                {loading ?
                    <div className="flex gap-2 mt-4">
                        <SkeltonList hight={15} width={100} length={10} />
                    </div> :
                    <div className="flex items-center mt-4">
                        {categoryList}
                        <a href="/categories" className="block px-4 text-gray-800 hover:text-blue-500">More</a>
                    </div>
                }

            </div>
        </nav>
    )
}