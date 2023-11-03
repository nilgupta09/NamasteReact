import {CDN_URL} from '../utils/constants';
import { Image, Shimmer } from 'react-shimmer'
const RestaurantCard = (props) => {

    const{resData} = props;

    const{name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;

    return(
        <div className="restaurant-card">
            <img className='restaurant-logo' src={
                CDN_URL +
                cloudinaryImageId
            }
            ></img>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h5>Rating: ⭐{avgRating}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard;