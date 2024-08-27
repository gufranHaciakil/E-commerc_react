import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div className="flex flex-col gap-8 items-center text-center mt-16">
            <div className="text-7xl text-rose-800 ">404 - PAGE NOT FOUND</div>
            <Link className='underline text-3xl text-blue-500 ' to='/'>
                Go to Home Page
            </Link>
        </div>
    )
}