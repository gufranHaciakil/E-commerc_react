import { useState } from "react"
import { CATEGORIES } from "../../../Api/Api"
import Table from "../../../Components/Dashboard/Table"

export default function Categories() {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(3)

    const Header = [
        { name: 'id', key: 'id' }, { name: 'Category Name', key: 'title' },
        { name: 'Category Image', key: 'image' },
    ]
    return (
        <>
            <div className='text-2xl pl-2 my-4'>Categories Page</div>
            <Table header={Header} API={CATEGORIES} limit={limit} page={page} setPage={setPage} setLimit={setLimit} psearch={'title'} />
        </>
    )
}