import { Link } from 'react-router-dom';

export default function Page403({ role }) {
    return (
        <div className="flex flex-col gap-8 items-center text-center mt-16">
            <div className="text-7xl text-rose-800 ">403 - ACCESS DENIED</div>
            <Link className='underline text-3xl text-blue-500 ' to={role === '50' ? "/dashboard/otherUsers" : role === '2001' ? "/" : '/'}>
                {role === '50' ? "Go to Other Users Page" : role === '2001' ? "Go to Home Page" : "///"}
            </Link>
        </div>
    )
}