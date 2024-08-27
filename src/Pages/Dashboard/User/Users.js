import { useEffect, useState } from "react"
import { USER, USERS } from "../../../Api/Api"
import { Axios } from "../../../Api/axios";
import { Link } from "react-router-dom";
import Table from "../../../Components/Dashboard/Table";

export default function Users() {
    const [currentUser, setCurrentUser] = useState({})
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(3)


    async function getCurrentUser() {

        try {
            let res = await Axios.get(USER)
            setCurrentUser(res.data)
        } catch (err) {
            console.log(err)
        }

    }


    useEffect(() => {
        getCurrentUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const header = [
        { name: "ID", key: "id" },
        { name: "User name", key: "name" },
        { name: "User email", key: "email" },
        { name: "Created_at", key: "created_at" },
        { name: "Role", key: "role" },
    ]


    return (
        <div className="flex flex-col gap-3 my-4">
            <div className="flex justify-between items-center ">
                <h1 className="text-2xl">User Page</h1>
                <Link to="/dashboard/users/add" className="text-sm text-gray-600 underline">
                    + Add User
                </Link>
            </div>
            <Table header={header} API={USERS} currentUser={currentUser} limit={limit} page={page} setPage={setPage} setLimit={setLimit} psearch={"name"}/>
        </div>
    )
}