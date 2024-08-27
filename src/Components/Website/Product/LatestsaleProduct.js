import { LATESTSALE } from "../../../Api/Api";
import ProductCo from "./ProductCo";

export default function LatestsaleProduct() {
    return (
        <div className="flex flex-col mt-10">
            <h1 className={`text-4xl font-bold self-center`}>- Latest Sale Products -</h1>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-6 font-bold ">
                <ProductCo
                    api={LATESTSALE}
                    skeltonLen={3} />
            </div>
        </div>
    )
}