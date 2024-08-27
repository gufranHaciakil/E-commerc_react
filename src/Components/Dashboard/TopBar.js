import { useContext, useEffect, useState } from "react"
import { menu } from "../../Context/MenuContext"
import { baseUrl } from "../../Api/Api"
import { Axios } from "../../Api/axios"

export default function TopBar() {
    const [Name, setName] = useState("")
    const menu_context = useContext(menu)
    const isOpen = menu_context.isOpen
    const setIsOpen = menu_context.setIsOpen
    useEffect(() => {
        Axios.get(baseUrl + "/user")
            .then(res => {
                setName(res.data.name)
            }).catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <div className="fixed top-0 left-0 right-0 z-[2] h-[10%] bg-white shadow-md flex items-center text-2xl pl-6">
            <div className="flex justify-between w-full items-center pr-6">

                <div className="flex justify-between gap-20 items-center">
                    <h1>E Commerce</h1>
                    <svg className="w-6 h-6 text-gray-800 hover:cursor-pointer" onClick={() => { setIsOpen(!isOpen) }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>
                </div>

                <div>
                    <p className="uppercase text-lg font-bold">{Name} </p>
                </div>

            </div>
        </div>
    )
}