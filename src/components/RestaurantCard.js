import {CDN_URL} from '../utils/constants';
import { Image, Shimmer } from 'react-shimmer'
const RestaurantCard = (props) => {

    const{resData} = props;

    const{name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;

    return(
        <div className="w-56 box-border rounded-md shadow-md px-4 bg-gray-100 hover:bg-gray-200">
            <img className='py-2 rounded-md hover:scale-110' src={
                CDN_URL +
                cloudinaryImageId
            }
            ></img>
            <h2 className="font-bold text-lg p-1 hover:text-xl">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h5>Rating: ⭐{avgRating}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export const PromotedRestaurantCard = (RestaurantCard) => {
    return (props) => {

        return (
            <div>
                <label className='absolute bg-black text-white p-2 m-2 rounded-md'>{props.resData.info.aggregatedDiscountInfoV3.header}</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;