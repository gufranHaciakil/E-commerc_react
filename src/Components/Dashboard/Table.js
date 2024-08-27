import { useEffect, useState } from "react"
import { Axios } from "../../Api/axios"
import { Link } from "react-router-dom"
import PaginatedItems from "../Pagination/Pagination"


export default function Table({ header, API, currentUser, limit, page, setPage, setLimit, psearch }) {
    let curentuser = currentUser ? currentUser : false
    const [data, setData] = useState([])
    const [IsDataFound, setIsDataFound] = useState(true)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    function handleSearch(eo) {
        setSearch(eo.target.value)
    }
    useEffect(() => {
        try {
            setLoading(true)
            Axios.get(`${API}?limit=${limit}&page=${page}`).then((res) => {
                setData(res.data.data)
                setTotal(res.data.total)
                console.log(res.data)
                if (res.total === 0) {
                    setIsDataFound(false)
                }
            }
            ).finally(() => {
                setLoading(false)
            }
            )

        } catch (err) {
            console.log(err)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit])

    const filterData = data.filter((item) => {
        return item[psearch].toLowerCase().includes(search.toLowerCase())
    })



    let Dheader = header.map((head, index) => {
        return (
            <th key={index} scope="col" className="px-6 py-3">
                {head.name}
            </th>
        )
    })

    let Data = filterData.map((item, index) => {
        return (
            <tr key={index} className="odd:bg-white  even:bg-gray-100  border-b ">
                {header.map((item2, index2) => {
                    return (
                        <td key={index2} className="px-6 py-4">
                            {item2.key === "image" ? <img className="w-20 rounded-md" src={item[item2.key]} alt="" /> : item[item2.key] === curentuser.name ? item[item2.key] + " (You)" : item[item2.key]}
                        </td>
                    )
                }
                )}
                <td className="px-6 py-4">
                    <Link to={`${item.id}`} className="cursor-pointer">
                        <svg className="w-6 h-6 text-gray-800 hover:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                    </Link>
                </td>
            </tr>
        )
    })


    return (
        <>
            <input type="search" onChange={handleSearch} className="py-3 px-4 mb-2" placeholder="search.." />
            <div className="relative shadow-md sm:rounded-lg mb-2 ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            {Dheader}
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <tr> <td className="p-6 text-lg">Loading...</td></tr>
                                : IsDataFound ? Data : <tr><td className="p-6 text-lg">No data found
                                </td>
                                </tr>
                        }

                    </tbody>
                </table>
            </div>
            <div className="flex gap-2">
                <select className="px-2 text-lg" onChange={(eo) => { setLimit(eo.target.value) }}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                </select>
                <PaginatedItems itemsPerPage={limit} data={data} page={page} setPage={setPage} total={total} />
            </div>
        </>


    )
}