import { CDN_URL } from "../utils/constants";

const ItemDetails = ({itemDetails}) => {
    return (
        <div>
            {itemDetails.map((item) => (
                <div key={item.card.info.id} className="px-2 m-2 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <h3>{item.card?.info?.name} - {item.card?.info?.price/100}</h3>
                        </div>  
                    <p>
                        {item.card?.info?.description}
                    </p>                      
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black shadow-lg text-white">Add +</button>
                        </div>
                        <img src={CDN_URL+item.card?.info?.imageId} className="w-full"></img>
                    </div>              
                </div>
            ))}
        </div>
    )
}

export default ItemDetails;