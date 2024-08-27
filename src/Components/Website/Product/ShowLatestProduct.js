export default function ShowLatestProduct() {
    return (
        <div className="flex flex-wrap flex-col  w-[50%] font-bold px-20 ">
            <div className="flex flex-col items-center pb-4 gap-2 border border-gray-300 flex-wrap my-12">
                <h1 className=" text-3xl w-full bg-gray-200 mb-12 py-2 text-center "> Top Rated Products </h1>
                <div className="w-full flex bg-white border-b-2 border-gray-200 rounded-lg ">
                    <a href="/">
                        <img className="p-8 rounded-t-lg" src="" alt="product-image" />
                    </a>
                    <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold truncate tracking-tight text-gray-900">title</h5>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {/*goldStars*/}
                                {/*emptyGoldStars*/}

                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">8.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900">$4</span>
                            <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm ml-4 text-sm px-5  text-center ">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}