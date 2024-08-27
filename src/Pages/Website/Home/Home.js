import Landing from '../../../Components/Website/Landing'
import './home.css'
import SomeAbouts from '../../../Components/Website/Product/SomeAbouts'
import ShowLatestProduct from '../../../Components/Website/Product/ShowLatestProduct'
import ProductCo from '../../../Components/Website/Product/ProductCo'
import { LATESTSALE, TOPRATED } from '../../../Api/Api'
import LatestsaleProduct from '../../../Components/Website/Product/LatestsaleProduct'
import TopRated from '../../../Components/Website/Product/TopRated'


export default function Home() {
    // async function handleLogout() {
    //     try {
    //         await Axios.get(LOGOUT)
    //         let cookies = Cookies()
    //         cookies.remove('token')
    //         window.location.href = '/login'
    //     } catch (err) {
    //         alert('you are not logged in')
    //         window.location.href = '/login'
    //     }

    // }
    return (
        <div className='relative top-28'>
            <Landing />
            <LatestsaleProduct />
            <SomeAbouts />
            <div className='flex mt-12'>
                <TopRated />
                <ShowLatestProduct />
            </div>
        </div>
    )
}