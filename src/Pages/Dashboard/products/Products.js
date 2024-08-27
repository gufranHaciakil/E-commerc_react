import { Link } from "react-router-dom";
import { PRODUCTS } from "../../../Api/Api";
import Table from "../../../Components/Dashboard/Table";
import { useState } from "react";


export default function Products() {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(3)


    const Header = [
        { name: 'Product Name', key: 'title' },
        { name: 'Product Price', key: 'price' },
        { name: 'Product Category', key: 'category' },
        { name: 'Product Description', key: 'description' },
    ]


    return (
        <>
            <div className="flex justify-between items-center my-6 ">
                <h1 className="text-2xl">Products</h1>
                <Link to="/dashboard/products/add" className="text-sm text-gray-600 underline">
                    + Add Product
                </Link>
            </div>
            <Table header={Header} API={PRODUCTS} limit={limit} page={page} setPage={setPage} setLimit={setLimit} psearch={"title"} />
        </>
    )

}