import { useEffect, useState } from "react";
import { Axios } from "../../../Api/axios";
import { CATEGORIES } from "../../../Api/Api";
import StringSlice from "../../../Components/helpers/StringSlice";
import Skeleton from "react-loading-skeleton";
import SkeltonList from "../../../Components/Website/Skelton/SkeltonList";

export default function Categoriess() {
    const [categories, setCategories] = useState([])
    const [loading, serLoading] = useState(true)

    useEffect(() => {
        Axios.get(`${CATEGORIES}?limit=100`).then(res => {
            console.log(res.data)
            serLoading(false)

            setCategories(res.data.data)
        }
        ).catch(err => console.log(err))

    }, []);

    const categoryList = categories.map((category, index) => {
        return (
            <div key={index} className="flex w-[10rem] items-center gap-2 pr-4 bg-white rounded-lg shadow-xs cursor-pointer hover:bg-gray-100">
                <img className="w-12 h-12 rounded-md" src={category.image} alt="avatar" />
                <p className="text-base text-gray-800">
                    {StringSlice(category.title, 9)}
                </p>
            </div>
        )
    }
    )
   


    return (
        <div className="relative top-[7.5rem] px-6 py-1 bg-blue-200">

            {loading ? <div className="flex flex-wrap gap-6 mt-12">
                <SkeltonList hight={45} width={140} length={50} />
                </div>
                :
                <div className="flex flex-wrap gap-6 mt-12 ">
                    {categoryList}
                </div>
            }
        </div>
    )


}