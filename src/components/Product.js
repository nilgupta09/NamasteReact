import { useParams } from "react-router-dom";
import useProductDetails from "../utils/useProductDetails";
import { Shimmer } from "react-shimmer";


const Product =() => {
    const {prodid} = useParams();

    const prodData = useProductDetails(prodid);

    if(prodData !== null)
    {
        return(
            <div className=" flex justify-center">
                <div className="w-10/12 border border-solid opacity-100 flex justify-between">
                    <div className="w-6/12 border border-solid border-x-purple-400 flex justify-center">
                        <img className='w-72 h-84 py-2 rounded-md hover:scale-110' src={
                        prodData.image
                        }
                        ></img>
                    </div>
                    <div className="w-6/12 p-4 m-4">
                        <h1 className="font-bold text-3xl">
                            {prodData.title}
                        </h1>
                        <h5>
                            {prodData.description}
                        </h5>
                        <h3 className="text-red-500 font-bold">
                            Price: ${prodData.price}
                        </h3>
                        <h4>
                            Rating: ⭐{prodData.rating.rate}
                        </h4>
                        <h4>
                            Category: {prodData.category}
                        </h4>

                        <button className="my-4 rounded-lg bg-blue-100 p-2 cursor-pointer border border-solid">
                            Contact Renter
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    else
    {
        return(
            <Shimmer/>
        )
    }
}

export default Product;