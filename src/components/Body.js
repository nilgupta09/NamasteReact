import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {

    const [listRestaurant, setRestaurant] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const apiJsonData = await data.json();
        const list = apiJsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurant(list);
        setFilteredList(list);
        console.log(list);
    };

    console.log("Body is rendered");
    return listRestaurant.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='searchbar'>
                <input className="search" id="searchName" value={searchValue} onChange={(e) => {
                    setSearchValue(e.target.value);
                    setFilteredList(listRestaurant.filter(restaurant => restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase())));
                    }
                } placeholder="Search by Name"/>
                <button className="search-btn" id="search-btn" onClick={() => {                    
                    setFilteredList(listRestaurant.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())));
                }}>Search By cuisine</button>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listRestaurant.filter(restaurant => restaurant.info.avgRating >= 4);
                    setRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
                <button className="clear-btn" onClick={() => { fetchData() }}>Clear Filter</button>
            </div>
            <div className='restaurant-container'>
                {filteredList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>            
        </div>
    )
}

export default Body