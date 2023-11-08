import { useParams } from "react-router-dom";
import { Shimmer } from "react-shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const Restaurant =() => {
    const {restId} = useParams(); 

    const restData = useRestaurantDetails(restId);

    if(restData === null) return <Shimmer/>;

    const { name, cuisines, locality, areaName, city } = restData?.cards[0]?.card?.card?.info;

    const {cards} = restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    const {card} = cards[1]?.card;

    console.log(restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

    return(
        <div className="restaurantHeader-container">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality + ", "}{areaName + ", "}{city}</h4>
            <hr id="splitter"></hr>
            <div className="restaurant-names">
                <h4>{card.title}</h4>
                <div>{card.itemCards.map(item => 
                <h5 key={item.card.info?.id}>{item.card.info?.name + ": Rs." + (item.card.info?.defaultPrice/100 | item.card.info?.price/100)}
                </h5>
                )}</div>
            </div>
        </div>
    )
}

export default Restaurant;