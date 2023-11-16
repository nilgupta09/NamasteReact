import { Link } from "react-router-dom";
import RestaurantCard,{PromotedRestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {

    const [listRestaurant, setRestaurant] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    const PromotedRestaurant = PromotedRestaurantCard(RestaurantCard);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const apiJsonData = await data.json();
        const list = apiJsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurant(list);
        setFilteredList(list);
    };

    console.log("Body is rendered"+ filteredList);
    return (
        <div className='justify-between'>
            <div className='p-4 m-4 bg-gray-100'>
                <input className="px-2 rounded-md outline-1" id="searchName" value={searchValue} onChange={(e) => {
                    setSearchValue(e.target.value);
                    setFilteredList(listRestaurant.filter(restaurant => restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase())));
                    }
                } placeholder="Search by Name"/>
                <button className="px-2 m-2 rounded-md bg-blue-200" id="search-btn" onClick={() => {                    
                    setFilteredList(listRestaurant.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())));
                }}>Search By cuisine</button>
                <button className="px-2 m-2 rounded-md bg-blue-200" onClick={() => {
                    const filteredList = listRestaurant.filter(restaurant => restaurant.info.avgRating >= 4);
                    setRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
                <button className="justify-end m-2 px-2 rounded-md bg-blue-200" onClick={() => { fetchData() }}>Clear Filter</button>
            </div>
            <div className='flex flex-wrap p-4 m-4 gap-5'>
                {filteredList.map((restaurant) => 
                (<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    {typeof restaurant.info.aggregatedDiscountInfoV3 !== "undefined" ? ( <PromotedRestaurant resData={restaurant}/> ) : 
                    ( <RestaurantCard resData={restaurant}/>) }
                </Link>)
                )}
            </div>            
        </div>
    )
}

export default Body