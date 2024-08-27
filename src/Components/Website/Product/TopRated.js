import { TOPRATED } from "../../../Api/Api";
import ProductCo from "./ProductCo";

export default function TopRated() {
    return (

        <div className="flex flex-wrap flex-col w-[40%] font-bold px-20  ">
            <div className="flex flex-col items-center pb-4 gap-2 border border-gray-300 flex-wrap my-12">
                <h1 className="top-rated text-3xl w-full bg-gray-200 mb-6 py-2 text-center "> Top Rated Products </h1>
                <ProductCo api={TOPRATED} skeltonLen={3} skelflex={'flex-col'} />
            </div>
        </div>

    )
}