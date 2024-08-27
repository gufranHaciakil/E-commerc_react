import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";
import TopBar from "../../Components/Dashboard/TopBar";
import './dashboard.css'

export default function Dashboard() {
    return (
        <div className="dashboard relative">
            <TopBar />

            <div className="flex mt-[4.4rem] gap-6">
                <SideBar />
                <div className="ml-[17rem] w-[70%]">
                    <Outlet />
                </div>
            </div>

        </div>
    )

}