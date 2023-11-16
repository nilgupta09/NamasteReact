import { useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "react-shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import ItemCategory from "./ItemCategory";

const Restaurant =() => {
    const {restId} = useParams(); 

    const restData = useRestaurantDetails(restId);
    const [showIndex, setShowIndex] = useState(1);

    if(restData === null) return <Shimmer/>;

    const { name, cuisines, locality, areaName, city } = restData?.cards[0]?.card?.card?.info;

    const {cards} = restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    const itemCategories = cards.filter((category) => category.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    return(
        <div className="text-center">
            <h1 className="font-bold m-10 text-2xl">{name}</h1>
            <h4 className="font-bold">{cuisines.join(", ")}</h4>
            <h4 className="font-bold">{locality + ", "}{areaName + ", "}{city}</h4>
            {itemCategories.map((category, idx) => (
                <ItemCategory 
                    key={idx} 
                    itemCategory={category?.card?.card}
                    showList={idx === showIndex && true}
                    setShowIndex={() => setShowIndex(idx)}/>
            ))}
        </div>
    )
}

export default Restaurant;