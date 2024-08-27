import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Website/Navbar";
// not : لعدم تكرار الريكويست بالنافبار في كل صفحه 
export default function Website() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
